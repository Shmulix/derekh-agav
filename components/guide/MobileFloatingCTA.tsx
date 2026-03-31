"use client";

import { useState, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function MobileFloatingCTA() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("mobileFloatCTAClose", handler);
    return () => window.removeEventListener("mobileFloatCTAClose", handler);
  }, []);

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent("mobileFloatTOCClose"));
    setOpen(true);
  };

  return (
    <div className="lg:hidden">
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[55] bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Bottom sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-gold rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-200">
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-navy/20" />
            </div>
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 left-5 text-navy/40 hover:text-navy transition-colors"
              aria-label="סגור"
            >
              <X size={16} />
            </button>
            {/* Content */}
            <div className="px-6 pt-3 pb-10">
              <p className="text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">
                בחירת פלטפורמה
              </p>
              <p className="text-xl font-bold text-navy leading-snug mb-2">
                גלה איפה הכי כדאי להזמין
              </p>
              <p className="text-sm text-navy/70 leading-relaxed mb-6">
                לפני שמגיעים לדלפק. השוואה מלאה של הפלטפורמות הגדולות.
              </p>
              <a
                href="/posts/rental-platforms"
                className="flex items-center justify-between w-full bg-navy text-white text-base font-bold px-5 py-4 rounded-2xl active:scale-95 transition-transform"
                onClick={() => setOpen(false)}
              >
                <span>איפה הכי כדאי להזמין?</span>
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </>
      )}

      {/* Floating button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
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
