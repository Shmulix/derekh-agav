import type { ReactNode } from "react";
import { booking } from "@/lib/site-config";

// CTA « où réserver ».
//  - Mode normal  : garde EXACTEMENT le libellé d'origine (children) -> lien d'affiliation.
//  - Mode anonyme : bascule sur le téléchargement du PDF, libellé adapté (short/long).
export default function BookingCTA({
  children,
  anon = "short",
  className = "",
}: {
  children: ReactNode;
  anon?: "short" | "long";
  className?: string;
}) {
  const label = booking.download ? (anon === "long" ? booking.long : booking.short) : children;
  return (
    <a
      href={booking.href}
      {...(booking.download ? { download: true } : {})}
      className={className}
    >
      {label}
    </a>
  );
}
