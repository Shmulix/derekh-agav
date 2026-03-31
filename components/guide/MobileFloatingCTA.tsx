"use client";

import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function MobileFloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Expanded panel — slides up above the button */}
      {open && (
        <div className="fixed bottom-[3.5rem] right-4 z-[60] w-64 bg-gold rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="relative px-4 pt-9 pb-3">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 left-3 text-navy/40 hover:text-navy transition-colors"
              aria-label="סגור"
            >
              <X size={14} />
            </button>
            <p className="text-xs font-bold text-navy/60 uppercase tracking-widest mb-1">בחירת פלטפורמה</p>
            <p className="text-sm font-bold text-navy leading-snug mb-3">
              גלה איפה הכי כדאי להזמין לפני שמגיעים לדלפק
            </p>
            <a
              href="/posts/rental-platforms"
              className="flex items-center justify-between w-full bg-navy text-white text-sm font-bold px-4 py-3 rounded-xl hover:bg-navy/90 transition-colors active:scale-95"
              onClick={() => setOpen(false)}
            >
              <span>איפה הכי כדאי להזמין?</span>
              <ArrowLeft size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Floating button — sits above the TOC button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-4 right-4 z-50 shadow-lg transition-all duration-150 active:scale-95 ${
          open
            ? "bg-navy text-white h-10 w-10 rounded-full flex items-center justify-center"
            : "bg-gold text-navy h-10 rounded-full flex items-center gap-2 px-4 font-bold text-sm hover:bg-gold/90"
        }`}
        aria-label="איפה הכי כדאי להזמין?"
      >
        {open ? (
          <X size={16} />
        ) : (
          <>
            <span>איפה להזמין?</span>
            <ArrowLeft size={14} />
          </>
        )}
      </button>
    </div>
  );
}
