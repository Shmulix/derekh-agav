"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "דף הבית" },
  { href: "/guide", label: "המדריך" },
  { href: "/posts", label: "מאמרים" },
];

export default function HeaderV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onLight ? "bg-white/95 backdrop-blur-sm border-b border-[#e7e9f0]" : "bg-transparent"
      }`}
    >
      {!onLight && <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-transparent" />}
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="דרך אגב"
            width={116}
            height={38}
            priority
            className={`transition-[filter] duration-300 ${onLight ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:right-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                onLight ? "text-[#3a4255] hover:text-navy" : "text-slate-200 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/posts/rental-platforms"
            className={`text-sm font-bold px-5 py-2.5 rounded-none transition-colors ${
              onLight
                ? "bg-navy text-white hover:bg-[#0e1a30]"
                : "bg-gold text-navy hover:bg-[#b8941f]"
            }`}
          >
            איפה להזמין? ←
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${onLight ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e7e9f0] px-6 py-5 flex flex-col gap-4">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-[#3a4255]">
              {l.label}
            </Link>
          ))}
          <a href="/posts/rental-platforms" className="bg-navy text-white text-sm font-bold text-center px-5 py-3 rounded-none mt-1">
            איפה להזמין? ←
          </a>
        </div>
      )}
    </header>
  );
}
