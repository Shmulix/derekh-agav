"use client";

// Accordeon admin. Le CONTENU arrive deja rendu (ReactNode) depuis le
// BlockRenderer serveur : ce composant client ne voit que des noeuds, jamais
// les donnees de lib/admin-docs.
import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

function AccordionRow({ title, content }: { title: string; content: ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-navy/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-right transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
      >
        <span className="text-sm font-bold text-navy">{title}</span>
        <ChevronDown
          aria-hidden
          size={18}
          className={`shrink-0 text-navy/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div id={contentId} className="space-y-4 border-t border-navy/10 px-5 pb-5 pt-4">
          {content}
        </div>
      ) : null}
    </div>
  );
}

export default function AdminAccordion({
  items,
}: {
  items: { title: string; content: ReactNode }[];
}) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionRow key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
