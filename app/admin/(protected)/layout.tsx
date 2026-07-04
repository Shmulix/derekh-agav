// Verrou n°2 de l'admin : le layout protege verifie la session cote serveur
// (en plus du middleware). force-dynamic : aucune page admin ne doit jamais
// etre prerendue statiquement (le contenu sortirait du perimetre du middleware).
// Ce layout ne porte que la topbar commune : la sidebar de la documentation
// vit dans app/admin/(protected)/docs/layout.tsx.
import type { Metadata } from "next";
import Link from "next/link";
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
    <div dir="rtl" className="flex min-h-screen flex-col bg-surface">
      <header className="sticky top-0 z-40 bg-[#0d1f3c] shadow-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link
            href="/admin"
            className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span className="text-lg font-bold text-white">דרך אגב</span>
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="mr-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white/60">
              ניהול
            </span>
          </Link>
          <LogoutButton />
        </div>
      </header>
      {children}
    </div>
  );
}
