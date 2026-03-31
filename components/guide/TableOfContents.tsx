"use client";

import { useState, useEffect } from "react";
import {
  BookOpen, Car, FileText, CreditCard, MapPin, Globe, Shield, User,
  Fuel, Route, Mail, AlertTriangle, LayoutGrid, CheckCircle, BookMarked,
  Snowflake, Receipt, Package, CalendarX, MessageCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  intro: BookOpen,
  category: Car,
  documents: FileText,
  deposit: CreditCard,
  pickup: MapPin,
  crossborder: Globe,
  winter: Snowflake,
  insurance: Shield,
  "young-driver": User,
  fuel: Fuel,
  mileage: Route,
  fines: Mail,
  tolls: Receipt,
  extras: Package,
  cancellation: CalendarX,
  emergency: AlertTriangle,
  platforms: LayoutGrid,
  summary: CheckCircle,
  faq: MessageCircle,
  lexicon: BookMarked,
};

interface TocItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
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

  return (
    <nav className="flex flex-col gap-0.5">
      {items.map((item) => {
        const Icon = iconMap[item.id] ?? FileText;
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 text-sm py-1.5 px-3 rounded transition-all duration-150 ${
              isActive
                ? "bg-navy text-white font-semibold"
                : "text-gray-600 hover:text-navy hover:bg-surface"
            }`}
          >
            <Icon size={13} className="flex-shrink-0 text-gold" />
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
