"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, PlaneLanding, ClipboardList, TriangleAlert, Car } from "lucide-react";

// Le fil conducteur de la section problème : la route (motif LaneDash) se trace
// d'une étape à la suivante, de droite à gauche, et chaque temps de la journée
// s'allume dans son sillage. Horizontale sur desktop, verticale sur mobile.
// Chaque segment appartient à son étape : l'alignement sur le centre des
// pastilles reste exact quelle que soit la largeur des colonnes.

const ICONS = {
  booking: CalendarCheck,
  landing: PlaneLanding,
  counter: ClipboardList,
  alert: TriangleAlert,
} as const;

export type TimelineStep = {
  icon: keyof typeof ICONS;
  title: string;
  text: string;
  alert?: boolean;
};

// Marquage routier : doré tant que la journée se déroule bien, rouge sur le
// segment qui mène au moment où ça bascule.
const dash = (vertical: boolean, danger: boolean) =>
  `repeating-linear-gradient(to ${vertical ? "bottom" : "left"}, ${danger ? "#c53030" : "#c9a227"} 0 14px, transparent 14px 28px)`;

export default function ProblemTimeline({ steps }: { steps: TimelineStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setAnimate(false);
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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Point d'arrêt de la voiture : juste à droite de la dernière pastille.
  // En RTL, chaque pastille est collée au bord droit de sa colonne de grille,
  // d'où le calcul à partir de la largeur de colonne (gap desktop = 24px).
  const cols = steps.length;
  const carStop = `calc(${100 - 100 / cols}% + ${((24 * (cols - 1)) / cols - 38).toFixed(1)}px)`;

  return (
    <div ref={ref} className="mt-14">
      <ol className="relative grid gap-9 md:grid-cols-4 md:gap-6">
        {/* La voiture parcourt la route pendant que les segments se tracent et
            s'arrête juste avant le dernier temps : elle n'atteint jamais le
            moment où ça bascule. */}
        <span
          aria-hidden="true"
          className="hidden md:block absolute top-[14px] z-10 text-navy"
          style={{
            right: animate && !on ? "0.875rem" : carStop,
            transition: animate ? "right 2600ms cubic-bezier(0.33,0,0.2,1) 260ms" : undefined,
          }}
        >
          <Car size={28} strokeWidth={1.75} />
        </span>

        {steps.map((s, i) => {
          const Icon = ICONS[s.icon];
          const stepDelay = 200 + i * 150;
          const segDelay = stepDelay + 90;
          const last = i === steps.length - 1;
          const toDanger = !!steps[i + 1]?.alert;

          return (
            <li
              key={s.title}
              className="relative flex md:block items-start gap-5"
              style={
                animate
                  ? {
                      opacity: on ? 1 : 0,
                      transform: on ? "none" : "translateY(14px)",
                      transition: `opacity 560ms cubic-bezier(0.16,1,0.3,1) ${stepDelay}ms, transform 560ms cubic-bezier(0.16,1,0.3,1) ${stepDelay}ms`,
                    }
                  : undefined
              }
            >
              {/* Segment de route vers l'étape suivante (horizontal md+, vertical en dessous) */}
              {!last && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden md:block absolute top-7 right-7 left-[calc(-1.5rem-1.75rem)] h-[2px] origin-right"
                    style={{
                      background: dash(false, toDanger),
                      ...(animate
                        ? {
                            transform: on ? "scaleX(1)" : "scaleX(0)",
                            transition: `transform 520ms cubic-bezier(0.16,1,0.3,1) ${segDelay}ms`,
                          }
                        : null),
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="md:hidden absolute right-[27px] top-14 bottom-[calc(-2.25rem)] w-[2px] origin-top"
                    style={{
                      background: dash(true, toDanger),
                      ...(animate
                        ? {
                            transform: on ? "scaleY(1)" : "scaleY(0)",
                            transition: `transform 520ms cubic-bezier(0.16,1,0.3,1) ${segDelay}ms`,
                          }
                        : null),
                    }}
                  />
                </>
              )}

              <span
                className={`relative z-10 shrink-0 w-14 h-14 flex items-center justify-center border-2 ${
                  s.alert ? "border-[#c53030] text-[#c53030] bg-[#fff3f3]" : "border-[#e7e9f0] text-navy bg-white"
                }`}
              >
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="md:mt-5">
                <h3 className={`text-lg font-bold ${s.alert ? "text-[#c53030]" : "text-navy"}`}>{s.title}</h3>
                <p className="text-[#5b6377] leading-relaxed mt-1">{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
