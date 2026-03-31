"use client";

import { useState, useEffect } from "react";
import { List, X, FileText, Receipt, Package, AlertTriangle, CalendarX } from "lucide-react";
import {
  BookOpen, Car, CreditCard, MapPin, Globe, Shield, User,
  Fuel, Route, Mail, CheckCircle, BookMarked, Snowflake,
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
  lexicon: BookMarked,
};

interface TocItem {
  id: string;
  label: string;
}

export default function MobileTOC({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

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

  const handleOpen = () => {
    window.dispatchEvent(new CustomEvent("mobileFloatCTAClose"));
    setOpen(true);
  };

  return (
    <div className="lg:hidden">
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[55] bg-black/50"
            onClick={() => setOpen(false)}
          />
          {/* Bottom sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-200 flex flex-col max-h-[80vh]">
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-gray-200" />
            </div>
            {/* Header */}
            <div className="bg-navy mx-4 mb-3 rounded-xl px-4 py-3 flex items-center justify-between flex-shrink-0">
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
            <nav className="flex flex-col px-4 pb-10 overflow-y-auto">
              {items.map((item) => {
                const Icon = iconMap[item.id] ?? FileText;
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-3 px-3 rounded-xl transition-all duration-100 ${
                      isActive
                        ? "bg-navy text-white font-semibold"
                        : "text-gray-600 active:bg-surface"
                    }`}
                  >
                    <Icon size={15} className={`flex-shrink-0 ${isActive ? "text-gold" : "text-gold/70"}`} />
                    <span className="text-sm">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </>
      )}

      {/* Floating button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        className={`fixed bottom-[4.5rem] right-4 z-50 h-12 rounded-full shadow-lg flex items-center gap-2 px-4 transition-all duration-150 active:scale-95 ${
          open
            ? "bg-navy text-white w-12 justify-center"
            : "bg-white border border-gray-200 text-navy pr-5"
        }`}
        aria-label="תוכן עניינים"
      >
        {open ? (
          <X size={18} />
        ) : (
          <>
            <List size={16} className="flex-shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold whitespace-nowrap">תוכן עניינים</span>
              {activeId && (
                <span className="text-[10px] text-navy/50 whitespace-nowrap font-normal">
                  {items.find((i) => i.id === activeId)?.label}
                </span>
              )}
            </div>
          </>
        )}
      </button>
    </div>
  );
}
