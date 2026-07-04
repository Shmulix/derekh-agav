"use client";

// Recherche dans la doc admin : modal fuse.js, raccourci "/", resultats
// groupes par section, Enter navigue vers l'ancre. L'index arrive par PROPS
// depuis le layout serveur authentifie (payload RSC par requete) : il n'est
// jamais present dans les chunks statiques publics.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { CornerDownLeft, Search, X } from "lucide-react";
import { useSheetDialog } from "@/components/useSheetDialog";
import type { SearchEntry } from "@/lib/admin-docs/types";

export default function DocSearch({ entries }: { entries: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { sheetRef, triggerRef } = useSheetDialog(open, () => setOpen(false));

  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: [
          { name: "headingText", weight: 0.5 },
          { name: "sectionTitle", weight: 0.3 },
          { name: "digest", weight: 0.2 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [entries]
  );

  const results = useMemo(
    () => (query.trim() ? fuse.search(query.trim()).slice(0, 10).map((r) => r.item) : []),
    [fuse, query]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Raccourci global "/" (hors champs de saisie).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || open) return;
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function navigateTo(entry: SearchEntry) {
    setOpen(false);
    setQuery("");
    const hash = entry.headingId ? `#${entry.headingId}` : "";
    router.push(`/admin/docs/${entry.sectionSlug}${hash}`);
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      navigateTo(results[activeIndex]);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-none border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <Search aria-hidden className="h-4 w-4" />
        <span className="hidden sm:inline">חיפוש בתיעוד</span>
        <kbd
          aria-hidden
          className="hidden rounded border border-white/20 px-1.5 py-0.5 font-mono text-[10px] text-white/50 sm:inline"
        >
          /
        </kbd>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-[#0a1628]/70 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="חיפוש בתיעוד"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-none border border-[#e7e9f0] bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[#e7e9f0] px-4">
              <Search aria-hidden className="h-5 w-5 shrink-0 text-navy/40" />
              <input
                type="text"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="doc-search-results"
                aria-activedescendant={results[activeIndex] ? `doc-search-option-${activeIndex}` : undefined}
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="מה מחפשים? כותרת, נושא, מונח..."
                className="w-full bg-transparent py-4 text-base text-text-main outline-none placeholder:text-text-main/40"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגירה"
                className="rounded-md p-1 text-navy/40 hover:bg-surface hover:text-navy"
              >
                <X aria-hidden className="h-5 w-5" />
              </button>
            </div>

            <ul id="doc-search-results" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {query.trim() && results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-text-main/50">אין תוצאות.</li>
              ) : null}
              {results.map((entry, index) => (
                <li
                  key={`${entry.sectionSlug}-${entry.headingId}-${index}`}
                  id={`doc-search-option-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <button
                    type="button"
                    onClick={() => navigateTo(entry)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full items-center justify-between gap-3 rounded-none px-3 py-2.5 text-right ${
                      index === activeIndex ? "bg-[#f7f8fb]" : ""
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-bold text-navy">
                        {entry.headingText}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-text-main/60">
                        {entry.headingId ? `${entry.sectionTitle} · ` : ""}
                        {entry.digest}
                      </span>
                    </span>
                    {index === activeIndex ? (
                      <CornerDownLeft aria-hidden className="h-4 w-4 shrink-0 text-navy/40" />
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
