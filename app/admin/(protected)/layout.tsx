// Verrou n°2 de l'admin : le layout protege verifie la session cote serveur
// (en plus du middleware). force-dynamic : aucune page admin ne doit jamais
// etre prerendue statiquement (le contenu sortirait du perimetre du middleware).
import type { Metadata } from "next";
import Link from "next/link";
import { requireSession } from "@/lib/admin/auth";
import { buildSearchIndex, docSections } from "@/lib/admin-docs";
import AdminNav from "@/components/admin/AdminNav";
import DocSearch from "@/components/admin/DocSearch";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "ניהול | דרך אגב", template: "%s | ניהול דרך אגב" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireSession();

  const navItems = docSections.map((section) => ({
    slug: section.slug,
    title: section.title,
    icon: section.icon,
  }));
  const searchIndex = buildSearchIndex();

  return (
    <div dir="rtl" className="flex min-h-screen bg-surface">
      {/* Sidebar (droite en RTL), desktop uniquement */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col overflow-y-auto bg-[#0d1f3c] p-4 lg:flex">
        <Link
          href="/admin"
          className="mb-6 flex items-center gap-2 px-3 pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          <span className="text-xl font-bold text-white">דרך אגב</span>
          <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="mr-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white/60">
            ניהול
          </span>
        </Link>
        <AdminNav items={navItems} variant="sidebar" />
        <p className="mt-auto px-3 pb-2 pt-6 text-[11px] leading-relaxed text-white/30">
          תיעוד טכני פנימי. אין לקשר לאזור הזה מהאתר הציבורי.
        </p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 bg-[#0d1f3c] shadow-md">
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <Link
              href="/admin"
              className="flex items-center gap-2 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span className="text-lg font-bold text-white">דרך אגב</span>
              <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            </Link>
            <div className="hidden lg:block" />
            <div className="flex items-center gap-2">
              <DocSearch entries={searchIndex} />
              <LogoutButton />
            </div>
          </div>
          {/* Nav mobile horizontale */}
          <div className="border-t border-white/10 lg:hidden">
            <AdminNav items={navItems} variant="mobile" />
          </div>
        </header>

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
