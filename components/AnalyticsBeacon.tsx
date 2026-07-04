"use client";

// Beacon analytics maison : une requete POST legere vers /api/hit a chaque
// changement de page. Sans cookies, sans localStorage, sans identifiant :
// conforme a la regle du site (pas de banniere cookies necessaire).
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsBeacon() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === lastPath.current) return;
    if (pathname.startsWith("/admin")) return; // jamais de tracking de l'admin
    const isFirstView = lastPath.current === null;
    lastPath.current = pathname;

    // Le referrer n'a de sens que sur la premiere vue (les navigations
    // internes suivantes gardent le meme document.referrer).
    const payload = JSON.stringify({
      path: pathname,
      ref: isFirstView ? document.referrer : "",
    });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/hit", new Blob([payload], { type: "application/json" }));
      } else {
        fetch("/api/hit", { method: "POST", body: payload, keepalive: true });
      }
    } catch {
      // la collecte ne doit jamais gener la page
    }
  }, [pathname]);

  return null;
}
