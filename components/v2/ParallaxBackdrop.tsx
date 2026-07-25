"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Fond photo en parallaxe : l'image glisse doucement à contre-sens du scroll.
// Le décalage est volontairement faible (quelques dizaines de pixels) et le
// conteneur déborde de 12% pour qu'aucun bord ne se découvre jamais.
// Neutralisé quand l'utilisateur demande moins d'animations.
export default function ParallaxBackdrop({
  src,
  alt = "",
  opacity = 0.3,
  amplitude = 44,
}: {
  src: string;
  alt?: string;
  opacity?: number;
  amplitude?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const host = hostRef.current;
      const layer = layerRef.current;
      if (!host || !layer) return;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      // -1 quand le bloc entre par le bas, +1 quand il sort par le haut
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2 + r.height / 2);
      layer.style.transform = `translate3d(0, ${(progress * amplitude).toFixed(1)}px, 0)`;
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
  }, [amplitude]);

  return (
    <div ref={hostRef} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div ref={layerRef} className="absolute inset-[-12%] will-change-transform" style={{ opacity }}>
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
    </div>
  );
}
