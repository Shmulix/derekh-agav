// Hub de l'admin : etat live du site + acces aux deux espaces (תיעוד, אנליטיקס).
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, BookOpenText, ExternalLink } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { docSections } from "@/lib/admin-docs";
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

export default async function AdminHubPage() {
  await requireSession(); // verrou n°3 : chaque page reverifie

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-navy sm:text-3xl">לוח הבקרה של דרך אגב</h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-text-main/70">
            הכול במקום אחד: התיעוד הטכני המלא של האתר, והנתונים על מי שמבקר בו.
          </p>
        </div>

        {/* Les deux espaces */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/admin/docs"
            className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
              <BookOpenText aria-hidden className="h-6 w-6" />
            </span>
            <span className="text-lg font-bold text-navy group-hover:text-[#8a6d0f]">תיעוד טכני</span>
            <span className="mt-1.5 text-sm leading-relaxed text-text-main/60">
              {docSections.length} פרקים, מ־א׳ ועד ת׳: ארכיטקטורה, תוכן, אבטחה, פריסה
              וצ׳קליסט מסירה. הכול אינטראקטיבי ובעברית.
            </span>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold">
              לתיעוד
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </span>
          </Link>

          <Link
            href="/admin/analytics"
            className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
              <BarChart3 aria-hidden className="h-6 w-6" />
            </span>
            <span className="text-lg font-bold text-navy group-hover:text-[#8a6d0f]">אנליטיקס</span>
            <span className="mt-1.5 text-sm leading-relaxed text-text-main/60">
              צפיות, מבקרים ייחודיים, עמודים מובילים, מקורות תנועה ומובייל מול דסקטופ.
              בלי עוגיות ובלי מעקב אישי.
            </span>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold">
              לנתונים
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </span>
          </Link>
        </div>

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

        <Callout
          variant="danger"
          title="אזור מאובטח"
          text="הגישה לכאן מוגנת בסיסמה ובחתימת session. אין לקשר לאזור הזה משום עמוד ציבורי, והוא חסום לחלוטין בפני מנועי חיפוש."
        />
      </div>
    </main>
  );
}
