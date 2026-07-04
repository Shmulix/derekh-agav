// Verrou n°2 de l'admin : le layout protege verifie la session cote serveur
// (en plus du middleware). force-dynamic : aucune page admin ne doit jamais
// etre prerendue statiquement (le contenu sortirait du perimetre du middleware).
// Ce layout ne porte que la topbar commune : la sidebar de la documentation
// vit dans app/admin/(protected)/docs/layout.tsx.
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LaneDash from "@/components/v2/LaneDash";
import { requireSession } from "@/lib/admin/auth";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "ניהול | דרך אגב", template: "%s | ניהול דרך אגב" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireSession();

  return (
    <div dir="rtl" className="flex min-h-screen flex-col bg-[#f7f8fb]">
      <header className="sticky top-0 z-40 bg-[#0e1a30]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/admin"
            className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <Image src="/logo.svg" alt="דרך אגב" width={104} height={34} className="brightness-0 invert" />
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 [font-family:var(--font-mono-v2)] sm:inline">
              Admin
            </span>
          </Link>
          <LogoutButton />
        </div>
        <LaneDash />
      </header>
      {children}
    </div>
  );
}
