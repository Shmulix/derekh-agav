"use client";

import { useEffect, useRef, useState } from "react";

// Replie les FAB selon la VITESSE de scroll, avec hystérésis (anti-clignotement) :
//  - se replie quand la vitesse dépasse `high`
//  - se redéploie quand elle redescend sous `low`, ou à l'arrêt
//  - scroll doux (< low) => reste déplié
// Vitesse en px/ms. Respecte prefers-reduced-motion (jamais de repli).
export function useScrollCollapse(high = 0.75, low = 0.32, idleMs = 450) {
  const [collapsed, setCollapsed] = useState(false);
  const state = useRef(false);
  const lastY = useRef(0);
  const lastT = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lastY.current = window.scrollY;
    lastT.current = performance.now();

    const apply = (v: boolean) => {
      if (state.current !== v) {
        state.current = v;
        setCollapsed(v);
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const t = performance.now();
      const dt = t - lastT.current || 16;
      const vel = Math.abs(y - lastY.current) / dt;
      lastY.current = y;
      lastT.current = t;

      if (!state.current && vel > high) apply(true);
      else if (state.current && vel < low) apply(false);

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => apply(false), idleMs);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [high, low, idleMs]);

  return collapsed;
}
