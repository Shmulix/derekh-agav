"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 lg:hidden w-11 h-11 rounded-full bg-navy text-white shadow-lg flex items-center justify-center hover:bg-navy/90 active:scale-95 transition-all"
      aria-label="חזרה לראש הדף"
    >
      <ArrowUp size={18} />
    </button>
  );
}
