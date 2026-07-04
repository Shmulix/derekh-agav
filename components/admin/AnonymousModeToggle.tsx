"use client";

// Interrupteur du mode anonyme : deux clics (confirmation), puis appel de la
// server action qui met a jour Vercel et redeploye. L'etat affiche est celui
// du BUILD courant : il ne change qu'une fois la nouvelle prise en ligne.
import { useState, useTransition } from "react";
import { RefreshCw, ShieldCheck, ShieldOff } from "lucide-react";
import { toggleAnonymousMode, type ToggleResult } from "@/app/admin/(protected)/actions";

export default function AnonymousModeToggle({ currentlyAnonymous }: { currentlyAnonymous: boolean }) {
  const [confirming, setConfirming] = useState(false);
  const [result, setResult] = useState<ToggleResult | null>(null);
  const [pending, startTransition] = useTransition();

  function onToggle() {
    if (!confirming) {
      setConfirming(true);
      return;
    }
    setConfirming(false);
    startTransition(async () => {
      setResult(await toggleAnonymousMode());
    });
  }

  if (result?.ok) {
    return (
      <p className="flex items-start gap-2 border-r-4 border-gold bg-yellow-50 px-3 py-2.5 text-xs leading-relaxed text-[#3a4255]">
        <RefreshCw aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 animate-spin text-[#8a6d0f]" />
        {result.message}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={onToggle}
        disabled={pending}
        className={`inline-flex items-center gap-2 rounded-none px-4 py-2 text-xs font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 ${
          confirming
            ? "bg-red-600 text-white hover:bg-red-700"
            : "border border-[#e7e9f0] bg-white text-navy hover:border-navy"
        }`}
      >
        {pending ? (
          <>
            <RefreshCw aria-hidden className="h-3.5 w-3.5 animate-spin" />
            מעדכן את Vercel...
          </>
        ) : confirming ? (
          <>
            {currentlyAnonymous ? <ShieldOff aria-hidden className="h-3.5 w-3.5" /> : <ShieldCheck aria-hidden className="h-3.5 w-3.5" />}
            {currentlyAnonymous ? "בטוח? הזהות תיחשף באתר. לחיצה נוספת מאשרת" : "בטוח? הזהות תוסתר. לחיצה נוספת מאשרת"}
          </>
        ) : (
          <>
            {currentlyAnonymous ? <ShieldOff aria-hidden className="h-3.5 w-3.5" /> : <ShieldCheck aria-hidden className="h-3.5 w-3.5" />}
            {currentlyAnonymous ? "כיבוי המצב האנונימי" : "הפעלת המצב האנונימי"}
          </>
        )}
      </button>
      {confirming ? (
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="block text-[11px] text-text-main/50 underline underline-offset-2 hover:text-navy"
        >
          ביטול
        </button>
      ) : null}
      {result && !result.ok ? (
        <p className="border-r-4 border-red-400 bg-red-50 px-3 py-2 text-xs text-red-700">{result.message}</p>
      ) : null}
      <p className="text-[11px] leading-relaxed text-text-main/50">
        ההחלפה מעדכנת את Vercel ומפעילה פריסה חדשה (~2 דק׳). המצב שמוצג כאן מתעדכן
        אחרי שהפריסה עולה.
      </p>
    </div>
  );
}
