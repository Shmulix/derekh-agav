// Dashboard admin : etat live du site + acces aux 14 sections de la doc.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { docSections } from "@/lib/admin-docs";
import { sectionIcon } from "@/components/admin/icons";
import Callout from "@/components/admin/Callout";
import { ANONYMOUS_MODE, INDEXING_ENABLED, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = { title: "לוח בקרה" };

function ModeBadge({ on, labelOn, labelOff }: { on: boolean; labelOn: string; labelOff: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
        on ? "bg-[#fffbea] text-[#8a6d0f]" : "bg-navy/[0.06] text-navy"
      }`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${on ? "bg-[#c9a227]" : "bg-navy/40"}`} />
      {on ? labelOn : labelOff}
    </span>
  );
}

export default async function AdminDashboardPage() {
  await requireSession(); // verrou n°3 : chaque page reverifie

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy sm:text-3xl">תיעוד טכני: דרך אגב</h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-text-main/70">
          כל מה שצריך לדעת כדי לתחזק, לפתח או לקבל לידיים את האתר. מהמודל העסקי ועד פקודת
          הפריסה האחרונה. 14 פרקים, מ־א׳ ועד ת׳.
        </p>
      </div>

      <Callout
        variant="danger"
        title="אזור מאובטח"
        text="הגישה לכאן מוגנת בסיסמה ובחתימת session. אין לקשר לאזור הזה משום עמוד ציבורי, והוא חסום לחלוטין בפני מנועי חיפוש."
      />

      {/* Etat live du site : lu directement depuis site-mode.mjs a chaque rendu */}
      <section aria-labelledby="live-state">
        <h2 id="live-state" className="mb-3 text-lg font-bold text-navy">
          מצב האתר עכשיו
        </h2>
        <div className="grid gap-px overflow-hidden rounded-xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
          <div className="bg-white p-4">
            <p className="text-xs font-medium text-text-main/60">כתובת חיה</p>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="mt-1 inline-flex items-center gap-1.5 break-all text-sm font-bold text-navy hover:text-gold"
            >
              {SITE_URL}
              <ExternalLink aria-hidden className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>
          <div className="bg-white p-4">
            <p className="text-xs font-medium text-text-main/60">ריפוזיטורי</p>
            <p dir="ltr" className="mt-1 break-all text-sm font-bold text-navy">
              github.com/Shmulix/derekh-agav
            </p>
          </div>
          <div className="bg-white p-4">
            <p className="mb-1.5 text-xs font-medium text-text-main/60">מצב אנונימי (ANONYMOUS_MODE)</p>
            <ModeBadge on={ANONYMOUS_MODE} labelOn="פעיל: זהות הכותב מוסתרת" labelOff="כבוי: זהות מלאה מוצגת" />
          </div>
          <div className="bg-white p-4">
            <p className="mb-1.5 text-xs font-medium text-text-main/60">אינדוקס בגוגל (INDEXING_ENABLED)</p>
            <ModeBadge on={!INDEXING_ENABLED} labelOn="חסום: noindex פעיל, טרם הושק" labelOff="פתוח: האתר גלוי למנועי חיפוש" />
          </div>
        </div>
      </section>

      {/* Cartes des 14 sections */}
      <section aria-labelledby="doc-sections">
        <h2 id="doc-sections" className="mb-3 text-lg font-bold text-navy">
          פרקי התיעוד
        </h2>
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
      </section>
    </div>
  );
}
