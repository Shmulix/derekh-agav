"use client";

import { useState, useEffect, useRef } from "react";
import { List, X, FileText } from "lucide-react";
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
  crossborder: Globe,
  winter: Snowflake,
  fuel: Fuel,
  mileage: Route,
  fines: Mail,
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
  const panelRef = useRef<HTMLDivElement>(null);

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
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="lg:hidden" ref={panelRef}>
      {/* Panel — slides up above the button */}
      {open && (
        <div className="fixed bottom-[10.5rem] right-4 z-50 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="bg-navy px-4 py-3 flex items-center justify-between">
            <p className="text-xs font-bold text-gold uppercase tracking-widest">תוכן עניינים</p>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="סגור תוכן עניינים"
            >
              <X size={14} />
            </button>
          </div>
          <nav className="flex flex-col p-2 max-h-[60vh] overflow-y-auto">
            {items.map((item) => {
              const Icon = iconMap[item.id] ?? FileText;
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg transition-all duration-100 ${
                    isActive
                      ? "bg-navy text-white font-semibold"
                      : "text-gray-600 hover:bg-surface hover:text-navy"
                  }`}
                >
                  <Icon size={13} className="flex-shrink-0 text-gold" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-[4.5rem] right-4 z-50 h-12 rounded-full shadow-lg flex items-center gap-2 px-4 transition-all duration-150 active:scale-95 ${
          open
            ? "bg-navy text-white w-12 justify-center"
            : "bg-white border border-gray-200 text-navy hover:bg-navy hover:text-white hover:border-navy pr-5"
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
