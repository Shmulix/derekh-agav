"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowLeft } from "lucide-react";
import { booking } from "@/lib/site-config";
import { useScrollCollapse } from "@/components/useScrollCollapse";
import { useSheetDialog } from "@/components/useSheetDialog";

export default function MobileFloatingCTA() {
  const [open, setOpen] = useState(false);
  const collapsedByScroll = useScrollCollapse();
  const [touched, setTouched] = useState(false);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shrunk = collapsedByScroll && !touched;
  const { sheetRef, triggerRef } = useSheetDialog(open, () => setOpen(false));

  // Nettoie le timer de "toucher" au démontage.
  useEffect(() => {
    return () => {
      if (touchTimer.current) clearTimeout(touchTimer.current);
    };
  }, []);

  // Le scroll re-réduit (oublie le toucher).
  useEffect(() => {
    const reset = () => setTouched(false);
    window.addEventListener("scroll", reset, { passive: true });
    return () => window.removeEventListener("scroll", reset);
  }, []);

  // Toucher un bouton réduit le ré-agrandit, sans clic.
  const reveal = () => {
    if (!shrunk) return;
    setTouched(true);
    if (touchTimer.current) clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => setTouched(false), 2500);
  };

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("mobileFloatCTAClose", handler);
    return () => window.removeEventListener("mobileFloatCTAClose", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent("mobileFloatTOCClose"));
    setOpen(true);
  };

  // Un seul tap : ouvre (ou ferme), même quand le bouton est réduit.
  const onFab = () => {
    if (open) setOpen(false);
    else handleOpen();
  };

  return (
    <div className="lg:hidden">
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[55] bg-black/40 animate-fade-in"
            onClick={() => setOpen(false)}
          />
          {/* Bottom sheet */}
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label={booking.download ? "הורדת המדריך" : "בחירת פלטפורמה"}
            tabIndex={-1}
            className="fixed bottom-0 left-0 right-0 z-[60] bg-gold rounded-t-2xl shadow-2xl animate-sheet-up outline-none"
          >
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
                {booking.download ? "המדריך המלא" : "בחירת פלטפורמה"}
              </p>
              <p className="text-xl font-bold text-navy leading-snug mb-2">
                {booking.download ? "קח את המדריך איתך" : "גלה איפה הכי כדאי להזמין"}
              </p>
              <p className="text-sm text-navy/70 leading-relaxed mb-6">
                {booking.download
                  ? "גרסת PDF ידידותית, לקריאה גם בלי אינטרנט."
                  : "לפני שמגיעים לדלפק. השוואה מלאה של הפלטפורמות הגדולות."}
              </p>
              <a
                href={booking.href}
                {...(booking.download ? { download: true } : {})}
                className="flex items-center justify-between w-full bg-navy text-white text-base font-bold px-5 py-4 rounded-none active:scale-95 transition-transform"
                onClick={() => setOpen(false)}
              >
                <span>{booking.download ? "הורד את המדריך" : "איפה הכי כדאי להזמין?"}</span>
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </>
      )}

      {/* Floating button */}
      <div className="fixed bottom-4 right-4 z-50 animate-fab-pop" style={{ animationDelay: "750ms" }}>
        <button
          ref={triggerRef}
          onClick={onFab}
          onPointerDown={reveal}
          className={`h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ease-out active:scale-95 shadow-lg shadow-black/10 ${
            open ? "bg-navy text-white w-11" : "bg-gold text-navy ps-3.5 pe-3.5 hover:bg-gold/90"
          }`}
          aria-label="איפה הכי כדאי להזמין?"
          aria-expanded={open}
        >
          {open ? (
            <X size={18} />
          ) : (
            <>
              <ArrowLeft size={16} className="flex-shrink-0" />
              <span
                className={`whitespace-nowrap font-bold text-sm transition-all duration-300 ease-out ${
                  shrunk ? "max-w-0 opacity-0 ms-0" : "max-w-[12rem] opacity-100 ms-2"
                }`}
              >
                {booking.download ? "הורד את המדריך" : "איפה להזמין?"}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
