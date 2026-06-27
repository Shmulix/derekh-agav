"use client";

import { useEffect, useRef, useState } from "react";

// Renvoie `true` pendant que l'utilisateur scrolle, repasse `false` après une
// courte inactivité. Sert à replier les FAB en onglet pendant le scroll.
// Respecte prefers-reduced-motion (jamais de repli).
export function useScrollCollapse(idleMs = 650) {
  const [collapsed, setCollapsed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 4) setCollapsed(true);
      lastY = y;
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCollapsed(false), idleMs);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [idleMs]);

  return collapsed;
}
