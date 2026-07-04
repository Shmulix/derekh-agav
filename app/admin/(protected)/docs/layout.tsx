// Shell de l'espace documentation : sidebar (desktop), nav mobile et
// recherche. La session est deja verifiee par le layout parent et par chaque
// page ; ici on ne fait que la mise en page.
import { buildSearchIndex, docSections } from "@/lib/admin-docs";
import AdminNav from "@/components/admin/AdminNav";
import DocSearch from "@/components/admin/DocSearch";

export default function AdminDocsLayout({ children }: { children: React.ReactNode }) {
  const navItems = docSections.map((section) => ({
    slug: section.slug,
    title: section.title,
    icon: section.icon,
  }));
  const searchIndex = buildSearchIndex();

  return (
    <div className="flex flex-1">
      {/* Sidebar (droite en RTL), desktop uniquement */}
      <aside className="sticky top-[63px] hidden h-[calc(100vh-63px)] w-72 shrink-0 flex-col overflow-y-auto bg-[#0e1a30] p-4 lg:flex">
        <AdminNav items={navItems} variant="sidebar" />
        <p className="mt-auto px-3 pb-2 pt-6 text-[11px] leading-relaxed text-slate-500">
          תיעוד טכני פנימי. אין לקשר לאזור הזה מהאתר הציבורי.
        </p>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barre outils doc : recherche + nav mobile */}
        <div className="sticky top-[63px] z-30 border-t border-white/10 bg-[#0e1a30]">
          <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 [font-family:var(--font-mono-v2)]">
              Docs
            </span>
            <DocSearch entries={searchIndex} />
          </div>
          <div className="border-t border-white/10 lg:hidden">
            <AdminNav items={navItems} variant="mobile" />
          </div>
        </div>

        <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
