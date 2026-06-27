"use client";

import { useEffect, useRef, useState } from "react";

// Replie les FAB en fonction de la VITESSE de scroll :
//  - scroll doux  -> reste déplié (false)
//  - scroll rapide -> se replie (true)
//  - quand ça ralentit / s'arrête -> se redéploie (false)
// threshold en px/ms. Respecte prefers-reduced-motion (jamais de repli).
export function useScrollCollapse(threshold = 0.6, idleMs = 350) {
  const [collapsed, setCollapsed] = useState(false);
  const lastY = useRef(0);
  const lastT = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lastY.current = window.scrollY;
    lastT.current = performance.now();

    const onScroll = () => {
      const y = window.scrollY;
      const t = performance.now();
      const dt = t - lastT.current || 16;
      const v = Math.abs(y - lastY.current) / dt; // vitesse px/ms
      lastY.current = y;
      lastT.current = t;

      setCollapsed(v > threshold); // rapide -> replié, doux -> déplié

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCollapsed(false), idleMs); // arrêt -> redéploie
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [threshold, idleMs]);

  return collapsed;
}
