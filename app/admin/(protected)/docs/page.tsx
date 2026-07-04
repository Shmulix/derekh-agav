// Index de la documentation : les 14 chapitres.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { docSections } from "@/lib/admin-docs";
import { sectionIcon } from "@/components/admin/icons";

export const metadata: Metadata = { title: "תיעוד טכני" };

export default async function AdminDocsIndexPage() {
  await requireSession(); // verrou n°3 : chaque page reverifie

  return (
    <div className="space-y-8">
      <div>
        <nav aria-label="פירורי לחם" className="mb-4 flex items-center gap-1.5 text-xs text-text-main/50">
          <Link href="/admin" className="hover:text-navy">
            לוח בקרה
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-navy">תיעוד טכני</span>
        </nav>
        <h1 className="text-2xl font-bold text-navy sm:text-3xl">תיעוד טכני: דרך אגב</h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-text-main/70">
          כל מה שצריך לדעת כדי לתחזק, לפתח או לקבל לידיים את האתר. מהמודל העסקי ועד פקודת
          הפריסה האחרונה. {docSections.length} פרקים, מ־א׳ ועד ת׳.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {docSections.map((section, index) => {
          const Icon = sectionIcon(section.icon);
          return (
            <Link
              key={section.slug}
              href={`/admin/docs/${section.slug}`}
              className="group flex items-start gap-3.5 rounded-xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/[0.06] text-navy transition-colors group-hover:bg-gold/15 group-hover:text-[#8a6d0f]">
                <Icon aria-hidden className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-text-main/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate text-sm font-bold text-navy group-hover:text-[#8a6d0f]">
                    {section.title}
                  </span>
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-text-main/60">
                  {section.subtitle}
                </span>
              </span>
              <ArrowLeft
                aria-hidden
                className="mr-auto mt-1 h-4 w-4 shrink-0 text-navy/20 transition-transform group-hover:-translate-x-0.5 group-hover:text-gold"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
