"use client";

// Checklist interactive : l'etat coche est purement cosmetique, persiste en
// localStorage sous la cle admin-checklist:<id>. Aucune donnee envoyee nulle
// part. Les items arrivent par props.
import { useEffect, useState } from "react";

type ChecklistItem = { text: string; detail?: string };

export default function ChecklistBlock({
  id,
  items,
}: {
  id: string;
  items: ChecklistItem[];
}) {
  const storageKey = `admin-checklist:${id}`;
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as boolean[];
        if (Array.isArray(parsed)) {
          setChecked(items.map((_, index) => Boolean(parsed[index])));
        }
      }
    } catch {
      // localStorage indisponible : etat en memoire seulement
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function toggle(index: number) {
    const next = checked.map((value, i) => (i === index ? !value : value));
    setChecked(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  const done = checked.filter(Boolean).length;

  return (
    <div className="rounded-none border border-[#e7e9f0] bg-white p-4">
      <p className="mb-3 text-xs font-medium text-text-main/60" aria-live="polite">
        {done} מתוך {items.length} הושלמו
      </p>
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={hydrated ? checked[index] : false}
                onChange={() => toggle(index)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#c9a227]"
              />
              <span>
                <span
                  className={`block text-sm font-medium leading-relaxed ${
                    hydrated && checked[index] ? "text-text-main/40 line-through" : "text-text-main"
                  }`}
                >
                  {item.text}
                </span>
                {item.detail ? (
                  <span className="mt-0.5 block text-xs leading-relaxed text-text-main/60">
                    {item.detail}
                  </span>
                ) : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
