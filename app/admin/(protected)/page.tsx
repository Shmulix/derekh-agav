// Hub de l'admin : etat live du site + acces aux deux espaces (תיעוד, אנליטיקס).
// Style aligne sur la refonte v2 : coins carres, bordures #e7e9f0, LaneDash.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, BookOpenText, ExternalLink } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { docSections } from "@/lib/admin-docs";
import AnonymousModeToggle from "@/components/admin/AnonymousModeToggle";
import { ANONYMOUS_MODE, INDEXING_ENABLED, SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = { title: "לוח בקרה" };

const mono = "[font-family:var(--font-mono-v2)]";

function ModeBadge({ on, labelOn, labelOff }: { on: boolean; labelOn: string; labelOff: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold ${
        on ? "bg-yellow-50 text-[#8a6d0f]" : "bg-[#f7f8fb] text-navy"
      }`}
    >
      <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${on ? "bg-gold" : "bg-navy/40"}`} />
      {on ? labelOn : labelOff}
    </span>
  );
}

export default async function AdminHubPage() {
  await requireSession(); // verrou n°3 : chaque page reverifie

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
      <div className="space-y-12">
        <div>
          <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>
            Dashboard
          </p>
          <h1 className="text-2xl font-extrabold text-navy sm:text-3xl">לוח הבקרה של דרך אגב</h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-[#3a4255]">
            הכול במקום אחד: התיעוד הטכני המלא של האתר, הנתונים על מי שמבקר בו, ושליטה
            במצב האתר.
          </p>
        </div>

        {/* Les deux espaces */}
        <div className="grid gap-px border border-[#e7e9f0] bg-[#e7e9f0] sm:grid-cols-2">
          <Link
            href="/admin/docs"
            className="group flex flex-col bg-white p-7 transition-colors hover:bg-[#f7f8fb] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center bg-navy text-gold">
              <BookOpenText aria-hidden className="h-6 w-6" />
            </span>
            <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>
              Docs
            </span>
            <span className="mt-1 text-xl font-extrabold text-navy">תיעוד טכני</span>
            <span className="mt-2 text-sm leading-relaxed text-[#3a4255]">
              {docSections.length} פרקים, מ־א׳ ועד ת׳: ארכיטקטורה, תוכן, אבטחה, פריסה
              וצ׳קליסט מסירה. הכול אינטראקטיבי ובעברית.
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-[#8a6d0f]">
              לתיעוד
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </Link>

          <Link
            href="/admin/analytics"
            className="group flex flex-col bg-white p-7 transition-colors hover:bg-[#f7f8fb] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center bg-navy text-gold">
              <BarChart3 aria-hidden className="h-6 w-6" />
            </span>
            <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>
              Analytics
            </span>
            <span className="mt-1 text-xl font-extrabold text-navy">אנליטיקס</span>
            <span className="mt-2 text-sm leading-relaxed text-[#3a4255]">
              צפיות, מבקרים ייחודיים, עמודים מובילים, הורדות המדריך וקליקים על הכפתורים.
              בלי עוגיות ובלי מעקב אישי.
            </span>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy group-hover:text-[#8a6d0f]">
              לנתונים
              <ArrowLeft aria-hidden className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </Link>
        </div>

        {/* Etat live du site : lu directement depuis site-mode.mjs a chaque rendu */}
        <section aria-labelledby="live-state">
          <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>
            Status
          </p>
          <h2 id="live-state" className="mb-4 text-lg font-extrabold text-navy">
            מצב האתר עכשיו
          </h2>
          <div className="grid gap-px border border-[#e7e9f0] bg-[#e7e9f0] sm:grid-cols-2">
            <div className="bg-white p-5">
              <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Live URL</p>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="mt-1.5 inline-flex items-center gap-1.5 break-all text-sm font-bold text-navy hover:text-[#8a6d0f]"
              >
                {SITE_URL}
                <ExternalLink aria-hidden className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>
            <div className="bg-white p-5">
              <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Repo</p>
              <p dir="ltr" className="mt-1.5 break-all text-sm font-bold text-navy">
                github.com/Shmulix/derekh-agav
              </p>
            </div>
            <div className="bg-white p-5">
              <p className="mb-2 text-xs font-medium text-[#3a4255]">מצב אנונימי (ANONYMOUS_MODE)</p>
              <div className="mb-3">
                <ModeBadge on={ANONYMOUS_MODE} labelOn="פעיל: זהות הכותב מוסתרת" labelOff="כבוי: זהות מלאה מוצגת" />
              </div>
              <AnonymousModeToggle currentlyAnonymous={ANONYMOUS_MODE} />
            </div>
            <div className="bg-white p-5">
              <p className="mb-2 text-xs font-medium text-[#3a4255]">אינדוקס בגוגל (INDEXING_ENABLED)</p>
              <ModeBadge on={!INDEXING_ENABLED} labelOn="חסום: noindex פעיל, טרם הושק" labelOff="פתוח: האתר גלוי למנועי חיפוש" />
              <p className="mt-3 text-[11px] leading-relaxed text-text-main/50">
                נשלט בקוד בלבד (site-mode.mjs). ההשקה היא החלטה גדולה מדי בשביל כפתור.
              </p>
            </div>
          </div>
        </section>

        <p className="border-r-4 border-red-400 bg-red-50 px-4 py-3 text-sm leading-relaxed text-[#3a4255]">
          <strong className="font-bold">אזור מאובטח.</strong> הגישה מוגנת בסיסמה ובחתימת
          session. אין לקשר לכאן משום עמוד ציבורי, והאזור חסום לחלוטין בפני מנועי חיפוש.
        </p>
      </div>
    </main>
  );
}
