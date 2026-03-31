"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface AccordionProps {
  title: string;
  icon?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  headerImage?: { src: string; alt: string };
  expandLabel?: string;
}

export function AccordionItem({ title, icon, defaultOpen = false, children, headerImage, expandLabel }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-surface transition-colors text-right"
      >
        <div className="flex items-center gap-3">
          {headerImage && (
            <Image
              src={headerImage.src}
              alt={headerImage.alt}
              width={36}
              height={36}
              className="rounded-full object-cover flex-shrink-0 ring-2 ring-gold lg:hidden"
            />
          )}
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-semibold text-navy text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {expandLabel && !open && <span className="text-xs text-gray-400">{expandLabel}</span>}
          <ChevronDown
            size={18}
            className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-white border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}
