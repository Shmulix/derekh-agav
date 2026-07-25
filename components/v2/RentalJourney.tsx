"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Timeline verticale du parcours de location. Chaque étape confronte deux faces :
// ce qui déraille quand on arrive sans savoir, et la réponse que le site apporte.
// La route (motif LaneDash à la verticale) se remplit à mesure du scroll et les
// jalons s'allument au passage. Neutralisé sous prefers-reduced-motion.

export type JourneyStep = {
  n: string;
  title: string;
  problem: string;
  solution: string;
  href: string;
};

const RAIL_IDLE = "repeating-linear-gradient(to bottom, #dfe3ec 0 14px, transparent 14px 28px)";
const RAIL_LIVE = "repeating-linear-gradient(to bottom, #c9a227 0 14px, transparent 14px 28px)";
const mono = "[font-family:var(--font-mono-v2)]";

export default function RentalJourney({ steps }: { steps: JourneyStep[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReached(steps.length);
      if (fillRef.current) fillRef.current.style.height = "100%";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const list = listRef.current;
      const fill = fillRef.current;
      if (!list || !fill) return;
      const r = list.getBoundingClientRect();
      // La route avance jusqu'à la ligne de mire, aux deux tiers de l'écran.
      const aim = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (aim - r.top) / r.height));
      fill.style.height = `${(progress * 100).toFixed(2)}%`;

      let passed = 0;
      list.querySelectorAll("[data-marker]").forEach((m) => {
        if (m.getBoundingClientRect().top + 16 <= aim) passed += 1;
      });
      setReached((current) => (current === passed ? current : passed));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <ol ref={listRef} className="relative mt-16">
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[2px]"
        style={{ background: RAIL_IDLE }}
      />
      <div
        ref={fillRef}
        aria-hidden="true"
        className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] overflow-hidden"
        style={{ background: RAIL_LIVE, height: 0 }}
      />

      {steps.map((s, i) => {
        const live = i < reached;
        return (
          <li key={s.n} className="relative pb-16 md:pb-24 last:pb-0">
            <div className="flex flex-col items-center text-center">
              <span
                data-marker
                className={`relative z-10 w-12 h-12 flex items-center justify-center border-2 font-bold transition-colors duration-500 ${mono} ${
                  live ? "bg-navy border-navy text-white" : "bg-white border-[#dfe3ec] text-[#9aa3b5]"
                }`}
              >
                {s.n}
              </span>
              {/* Fond opaque : la route passe derrière le jalon, pas à travers le titre */}
              <h3 className="mt-4 bg-[#f8f9fc] px-5 text-2xl md:text-3xl font-black text-navy tracking-tight">{s.title}</h3>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-24">
              {/* Face problème : à droite, là où commence la lecture */}
              <div className="relative z-10 bg-white border border-[#e7e9f0] border-r-[3px] border-r-[#c53030] p-6 md:p-7">
                <p className={`text-[11px] font-bold text-[#c53030] ${mono}`}>מה משתבש</p>
                <p className="text-[#3a4255] leading-relaxed mt-3">{s.problem}</p>
              </div>

              {/* Face réponse : à gauche, le poids visuel du bloc sombre */}
              <div className="relative z-10 bg-[#0e1a30] border-r-[3px] border-r-gold p-6 md:p-7 flex flex-col">
                <p className={`text-[11px] font-bold text-gold ${mono}`}>מה שיש כאן</p>
                <p className="text-slate-200 leading-relaxed mt-3">{s.solution}</p>
                <Link
                  href={s.href}
                  className="group mt-auto pt-5 inline-flex items-center gap-2 text-gold text-sm font-bold hover:text-[#e0b84a] transition-colors"
                >
                  לפרק המלא
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
