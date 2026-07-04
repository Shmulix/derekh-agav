"use client";

// Bouton copier dans le presse-papiers. Recoit le texte par props uniquement
// (jamais d'import de contenu doc dans un composant client).
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponible : on n'affiche simplement pas la confirmation
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label ?? "העתקה"}
      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
    >
      {copied ? (
        <>
          <Check aria-hidden className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400">הועתק</span>
        </>
      ) : (
        <>
          <Copy aria-hidden className="h-3.5 w-3.5" />
          <span>העתקה</span>
        </>
      )}
    </button>
  );
}
