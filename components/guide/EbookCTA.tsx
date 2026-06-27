import { Download, BookOpen } from "lucide-react";

const PDF_HREF = "/guide-ebook.pdf";
const PDF_NAME = "דרך-אגב-המדריך-המלא.pdf";

// Tuile pour la gouttière (sidebar sticky, desktop)
export function EbookTile() {
  return (
    <a
      href={PDF_HREF}
      download={PDF_NAME}
      className="block mt-6 rounded-none bg-navy p-4 hover:bg-navy-dark transition-colors"
    >
      <div className="w-9 h-9 rounded-none bg-gold/15 flex items-center justify-center mb-3">
        <BookOpen size={18} className="text-gold" />
      </div>
      <p className="text-white font-bold text-sm leading-snug">המדריך כ-PDF</p>
      <p className="text-slate-400 text-xs mt-1 leading-relaxed">
        גרסת ebook להורדה, לקריאה גם בלי אינטרנט.
      </p>
      <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-3">
        <Download size={13} /> הורדה ←
      </span>
    </a>
  );
}

// Bannière inline (le long du guide, avec parcimonie)
export function EbookBanner() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy rounded-none p-5 my-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-none bg-gold/15 flex items-center justify-center flex-shrink-0">
          <BookOpen size={20} className="text-gold" />
        </div>
        <div>
          <p className="text-white font-bold text-sm">קח את המדריך איתך</p>
          <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
            גרסת PDF ידידותית. מצוינת לקריאה במטוס, וגם כשאתה מול הדלפק בלי אינטרנט.
          </p>
        </div>
      </div>
      <a
        href={PDF_HREF}
        download={PDF_NAME}
        className="btn-gold text-xs py-2.5 px-5 flex items-center gap-2 flex-shrink-0 justify-center"
      >
        <Download size={15} /> הורד PDF
      </a>
    </div>
  );
}
