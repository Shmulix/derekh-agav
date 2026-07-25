"use client";

import { useEffect, useRef, useState } from "react";

// Jeu d'icônes maison, dessinées pour ce site : angles nets, trait 1.75, même
// grille de 32. Chacune joue une micro animation quand elle entre dans l'écran
// (le trait qui compte se dessine, la roue se redresse). Zéro dépendance, les
// keyframes vivent dans globals.css et sont neutralisées en reduced-motion.

export type FactIconName = "deposit" | "shield" | "glass" | "card" | "wheel";

const COMMON = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Shape({ name }: { name: FactIconName }) {
  switch (name) {
    // Carte bancaire dont le cadenas se referme : le dépôt est bloqué, pas débité
    case "deposit":
      return (
        <>
          <path d="M3 8h26v11" />
          <path d="M3 8v16h13" />
          <path d="M3 13h26" />
          <rect className="draw" style={{ "--len": "34" } as React.CSSProperties} x="19" y="19" width="10" height="8" />
          <path className="draw" style={{ "--len": "16" } as React.CSSProperties} d="M21.5 19v-2.5a2.5 2.5 0 0 1 5 0V19" />
        </>
      );
    // Bouclier fendu : la couverture de base n'est pas une couverture totale
    case "shield":
      return (
        <>
          <path d="M16 3l11 4v8c0 6.5-4.5 11-11 13C9 26 4.5 21.5 4.5 15V7z" />
          <polyline className="draw" style={{ "--len": "26" } as React.CSSProperties} points="16,9 13,16 18.5,17.5 15,24" />
        </>
      );
    // Pare-brise et sa fissure : les pièces qui cassent le plus sont hors couverture
    case "glass":
      return (
        <>
          <path d="M4 23l3.5-13a2 2 0 0 1 2-1.5h13a2 2 0 0 1 2 1.5L28 23z" />
          <path d="M8 17h16" />
          <polyline className="draw" style={{ "--len": "24" } as React.CSSProperties} points="16,9 15,14 19,16 14,22" />
        </>
      );
    // Carte au mauvais nom : la ligne du titulaire barrée
    case "card":
      return (
        <>
          <rect x="3" y="7" width="26" height="18" />
          <path d="M3 12h26" />
          <path d="M7 19h9" />
          <path className="draw" style={{ "--len": "13" } as React.CSSProperties} d="M19 17l6 6" />
          <path className="draw" style={{ "--len": "13" } as React.CSSProperties} d="M25 17l-6 6" />
        </>
      );
    // Volant : qui conduit vraiment, et qui est écrit au contrat
    case "wheel":
      return (
        <g className="spin">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="3.5" />
          <path d="M16 4v8.5" />
          <path d="M5.6 22l7.3-4.2" />
          <path d="M26.4 22l-7.3-4.2" />
        </g>
      );
  }
}

export default function FactIcon({ name, className = "" }: { name: FactIconName; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setOn(true);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <svg ref={ref} data-on={on} aria-hidden="true" className={`fact-icon ${className}`} {...COMMON}>
      <Shape name={name} />
    </svg>
  );
}
