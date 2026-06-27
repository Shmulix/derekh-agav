"use client";

import { useState, useEffect, useRef } from "react";
import { List, X, FileText, Receipt, Package, AlertTriangle, CalendarX } from "lucide-react";
import { useScrollCollapse } from "@/components/useScrollCollapse";
import {
  BookOpen, Car, CreditCard, MapPin, Globe, Shield, User,
  Fuel, Route, Mail, CheckCircle, BookMarked, Snowflake, MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  intro: BookOpen,
  documents: FileText,
  deposit: CreditCard,
  category: Car,
  insurance: Shield,
  "young-driver": User,
  pickup: MapPin,
  tolls: Receipt,
  crossborder: Globe,
  winter: Snowflake,
  extras: Package,
  fuel: Fuel,
  mileage: Route,
  fines: Mail,
  cancellation: CalendarX,
  emergency: AlertTriangle,
  summary: CheckCircle,
  faq: MessageCircle,
  lexicon: BookMarked,
};

interface TocItem {
  id: string;
  label: string;
}

export default function MobileTOC({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const collapsedByScroll = useScrollCollapse();
  const [touched, setTouched] = useState(false);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shrunk = collapsedByScroll && !touched;

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
    window.addEventListener("mobileFloatTOCClose", handler);
    return () => window.removeEventListener("mobileFloatTOCClose", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent("mobileFloatCTAClose"));
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
            className="fixed inset-0 z-[55] bg-black/50 animate-fade-in"
            onClick={() => setOpen(false)}
          />
          {/* Bottom sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-2xl shadow-2xl animate-sheet-up flex flex-col" style={{maxHeight: "95vh"}}>
            {/* Drag handle */}
            <div className="flex justify-center pt-2 pb-1 flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-gray-200" />
            </div>
            {/* Header */}
            <div className="bg-navy mx-4 mb-2 rounded-lg px-4 py-2.5 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="text-xs font-bold text-gold uppercase tracking-widest">תוכן עניינים</p>
                {activeId && (
                  <p className="text-xs text-white/60 mt-0.5">
                    {items.find((i) => i.id === activeId)?.label}
                  </p>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="סגור"
              >
                <X size={16} />
              </button>
            </div>
            {/* Nav list */}
            <nav className="flex flex-col px-3 pb-6">
              {items.map((item) => {
                const Icon = iconMap[item.id] ?? FileText;
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-2 px-3 border-r-2 transition-all duration-100 ${
                      isActive
                        ? "border-r-gold text-navy font-bold bg-[#f7f8fb]"
                        : "border-r-transparent text-[#5b6377] active:bg-[#f7f8fb]"
                    }`}
                  >
                    <Icon size={14} className={`flex-shrink-0 ${isActive ? "text-gold" : "text-[#9aa3b5]"}`} />
                    <span className="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </>
      )}

      {/* Floating button */}
      <div className="fixed bottom-[4.7rem] right-4 z-50 animate-fab-pop" style={{ animationDelay: "650ms" }}>
        <button
          onClick={onFab}
          onPointerDown={reveal}
          className={`h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ease-out active:scale-95 shadow-lg shadow-black/10 ${
            open ? "bg-navy text-white w-11" : "bg-white border border-[#e7e9f0] text-navy ps-3.5 pe-3.5"
          }`}
          aria-label="תוכן עניינים"
        >
          {open ? (
            <X size={18} />
          ) : (
            <>
              <List size={16} className="flex-shrink-0" />
              <span
                className={`whitespace-nowrap text-xs font-bold transition-all duration-300 ease-out ${
                  shrunk ? "max-w-0 opacity-0 ms-0" : "max-w-[10rem] opacity-100 ms-2"
                }`}
              >
                תוכן עניינים
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
