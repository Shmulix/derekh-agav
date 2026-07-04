"use client";

// Beacon analytics maison : une requete POST legere vers /api/hit a chaque
// changement de page, plus deux evenements de conversion (telechargement du
// PDF, clic sur un CTA "איפה להזמין"). Sans cookies, sans localStorage, sans
// identifiant : conforme a la regle du site (pas de banniere cookies).
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { booking } from "@/lib/site-config";

function send(payload: Record<string, string>) {
  const body = JSON.stringify(payload);
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/hit", new Blob([body], { type: "application/json" }));
    } else {
      fetch("/api/hit", { method: "POST", body, keepalive: true });
    }
  } catch {
    // la collecte ne doit jamais gener la page
  }
}

export default function AnalyticsBeacon() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  // Vues de page
  useEffect(() => {
    if (!pathname || pathname === lastPath.current) return;
    if (pathname.startsWith("/admin")) return; // jamais de tracking de l'admin
    const isFirstView = lastPath.current === null;
    lastPath.current = pathname;

    // Le referrer n'a de sens que sur la premiere vue (les navigations
    // internes suivantes gardent le meme document.referrer).
    send({ path: pathname, ref: isFirstView ? document.referrer : "" });
  }, [pathname]);

  // Evenements : clics delegues sur tout le document. Un telechargement du
  // PDF prime sur le CTA (en mode anonyme, le CTA EST le telechargement).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const page = window.location.pathname;
      if (page.startsWith("/admin")) return;

      if (href.includes("guide-ebook") || href.endsWith(".pdf")) {
        send({ event: "pdf", path: page });
      } else if (href === booking.href) {
        send({ event: "cta", path: page });
      }
    };
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
