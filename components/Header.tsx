"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/guide", label: "המדריך המלא" },
  { href: "/posts", label: "מאמרים" },
  { href: "/about", label: "אודות" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — right side in RTL */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="דרך אגב" width={120} height={40} priority />
        </Link>

        {/* Desktop nav — center */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-main font-medium hover:text-navy transition-colors duration-150 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — left side in RTL */}
        <div className="hidden md:block">
          <a href="#" className="btn-gold text-sm py-2 px-5">
            השווה מחירים ←
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-main font-medium hover:text-navy text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="#" className="btn-gold text-sm text-center mt-2">
            השווה מחירים ←
          </a>
        </div>
      )}
    </header>
  );
}
