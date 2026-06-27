"use client";

import { useEffect, useState } from "react";

// Replie les FAB selon la POSITION dans la page :
//  - déplié dans les premiers `startPct` et les derniers `endPct` de la page
//  - replié au milieu
// Respecte prefers-reduced-motion (jamais de repli).
export function useScrollCollapse(startPct = 0.2, endPct = 0.2) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;

    const compute = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setCollapsed(false);
        return;
      }
      const p = window.scrollY / max; // 0 (haut) .. 1 (bas)
      setCollapsed(p > startPct && p < 1 - endPct);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startPct, endPct]);

  return collapsed;
}
