// Dashboard analytics : lecture seule sur la base Neon alimentee par
// /api/hit. Rendu 100% serveur, aucune dependance de chart (SVG maison).
// Style aligne sur la refonte v2 : coins carres, bordures #e7e9f0.
import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Download, Eye, MonitorSmartphone, MousePointerClick, Users } from "lucide-react";
import { requireSession } from "@/lib/admin/auth";
import { getSql } from "@/lib/analytics/db";
import { publishedPosts } from "@/lib/posts";
import Callout from "@/components/admin/Callout";

export const metadata: Metadata = { title: "אנליטיקס" };

const mono = "[font-family:var(--font-mono-v2)]";
const DAY_FMT = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jerusalem" });

function israelDay(offsetDays: number): string {
  const date = new Date(Date.now() - offsetDays * 24 * 60 * 60 * 1000);
  return DAY_FMT.format(date);
}

function pageLabel(path: string): string {
  if (path === "/") return "עמוד הבית";
  if (path === "/guide") return "המדריך המלא";
  if (path === "/posts") return "ארכיון המאמרים";
  if (path === "/posts/rental-platforms") return "עמוד ההשוואה (המרה)";
  const post = publishedPosts.find((p) => `/posts/${p.slug}` === path);
  return post ? post.title : path;
}

type DayRow = { day: string; views: number; uniques: number };

function StatCard({ label, views, uniques }: { label: string; views: number; uniques: number }) {
  return (
    <div className="bg-white p-5">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>{label}</p>
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-2xl font-extrabold text-navy">{views.toLocaleString("he-IL")}</p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
            <Eye aria-hidden className="h-3 w-3" /> צפיות
          </p>
        </div>
        <div className="text-left">
          <p className="text-2xl font-extrabold text-[#8a6d0f]">{uniques.toLocaleString("he-IL")}</p>
          <p className="mt-0.5 flex items-center justify-end gap-1 text-[11px] text-gray-500">
            <Users aria-hidden className="h-3 w-3" /> מבקרים
          </p>
        </div>
      </div>
    </div>
  );
}

function EventCard({
  label,
  icon: Icon,
  total30,
  today,
  note,
}: {
  label: string;
  icon: typeof Download;
  total30: number;
  today: number;
  note: string;
}) {
  return (
    <div className="bg-white p-5">
      <div className="flex items-center justify-between gap-2">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>{label}</p>
        <Icon aria-hidden className="h-4 w-4 text-navy/40" />
      </div>
      <p className="mt-3 text-3xl font-extrabold text-navy">{total30.toLocaleString("he-IL")}</p>
      <p className="mt-0.5 text-[11px] text-gray-500">
        ב־30 הימים האחרונים · {today.toLocaleString("he-IL")} היום
      </p>
      <p className="mt-2 text-xs leading-relaxed text-[#3a4255]">{note}</p>
    </div>
  );
}

export default async function AdminAnalyticsPage() {
  await requireSession(); // verrou n°3 : chaque page reverifie

  const sql = getSql();

  const header = (
    <div>
      <nav aria-label="פירורי לחם" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
        <Link href="/admin" className="hover:text-navy">
          לוח בקרה
        </Link>
        <span aria-hidden>/</span>
        <span className="font-medium text-navy">אנליטיקס</span>
      </nav>
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-navy text-gold">
          <BarChart3 aria-hidden className="h-6 w-6" />
        </span>
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Analytics</p>
          <h1 className="mt-0.5 text-2xl font-extrabold text-navy sm:text-3xl">אנליטיקס</h1>
          <p className="mt-1.5 leading-relaxed text-[#3a4255]">
            מדידה עצמית, בלי עוגיות ובלי מעקב אישי: מבקר ייחודי הוא ערך גיבוב שמתאפס כל
            יום. הימים לפי שעון ישראל.
          </p>
        </div>
      </div>
    </div>
  );

  if (!sql) {
    return (
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
        <div className="space-y-6">
          {header}
          <Callout
            variant="danger"
            title="האנליטיקס לא מחוברת"
            text="משתנה הסביבה DATABASE_URL חסר, ולכן אין איסוף ואין נתונים. להגדיר אותו (ראה פרק האבטחה בתיעוד) ולפרוס מחדש."
          />
        </div>
      </main>
    );
  }

  const today = israelDay(0);
  const d7 = israelDay(6);
  const d30 = israelDay(29);

  const [todayRows, week, month, daily, topPages, devices, referrers, events] = await Promise.all([
    sql`SELECT count(*)::int AS views, count(DISTINCT visitor_hash)::int AS uniques FROM pageviews WHERE day = ${today}`,
    sql`SELECT count(*)::int AS views, count(DISTINCT visitor_hash)::int AS uniques FROM pageviews WHERE day >= ${d7}`,
    sql`SELECT count(*)::int AS views, count(DISTINCT visitor_hash)::int AS uniques FROM pageviews WHERE day >= ${d30}`,
    sql`SELECT day::text AS day, count(*)::int AS views, count(DISTINCT visitor_hash)::int AS uniques FROM pageviews WHERE day >= ${d30} GROUP BY day ORDER BY day`,
    sql`SELECT path, count(*)::int AS views, count(DISTINCT visitor_hash)::int AS uniques FROM pageviews WHERE day >= ${d30} GROUP BY path ORDER BY views DESC LIMIT 8`,
    sql`SELECT device, count(*)::int AS views FROM pageviews WHERE day >= ${d30} GROUP BY device`,
    sql`SELECT referrer, count(*)::int AS views FROM pageviews WHERE day >= ${d30} AND referrer <> '' GROUP BY referrer ORDER BY views DESC LIMIT 8`,
    sql`SELECT type, count(*) FILTER (WHERE day >= ${d30})::int AS total30, count(*) FILTER (WHERE day = ${today})::int AS today FROM events WHERE day >= ${d30} GROUP BY type`,
  ]);

  const totals30 = { views: Number(month[0]?.views ?? 0), uniques: Number(month[0]?.uniques ?? 0) };
  const pdfStats = events.find((e) => e.type === "pdf");
  const ctaStats = events.find((e) => e.type === "cta");

  // Serie continue de 30 jours (les jours sans trafic = 0).
  const byDay = new Map<string, DayRow>(
    daily.map((r) => [String(r.day), { day: String(r.day), views: Number(r.views), uniques: Number(r.uniques) }])
  );
  const series: DayRow[] = [];
  for (let i = 29; i >= 0; i--) {
    const day = israelDay(i);
    series.push(byDay.get(day) ?? { day, views: 0, uniques: 0 });
  }
  const maxViews = Math.max(1, ...series.map((r) => r.views));

  const mobile = Number(devices.find((d) => d.device === "mobile")?.views ?? 0);
  const desktop = Number(devices.find((d) => d.device === "desktop")?.views ?? 0);
  const deviceTotal = mobile + desktop;
  const mobilePct = deviceTotal ? Math.round((mobile / deviceTotal) * 100) : 0;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <div className="space-y-10">
        {header}

        {totals30.views === 0 ? (
          <Callout
            variant="info"
            title="עדיין אין נתונים"
            text="האיסוף פעיל, אבל ב־30 הימים האחרונים לא נרשמה אף צפייה. ברגע שמישהו יבקר באתר הציבורי, המספרים יופיעו כאן."
          />
        ) : null}

        {/* Cartes de synthese */}
        <section aria-label="סיכום" className="grid gap-px border border-[#e7e9f0] bg-[#e7e9f0] sm:grid-cols-3">
          <StatCard label="Today" views={Number(todayRows[0]?.views ?? 0)} uniques={Number(todayRows[0]?.uniques ?? 0)} />
          <StatCard label="7 Days" views={Number(week[0]?.views ?? 0)} uniques={Number(week[0]?.uniques ?? 0)} />
          <StatCard label="30 Days" views={totals30.views} uniques={totals30.uniques} />
        </section>

        {/* Conversions : PDF + CTA */}
        <section aria-labelledby="conversions-title">
          <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Conversions</p>
          <h2 id="conversions-title" className="mb-4 text-lg font-extrabold text-navy">
            הורדות וקליקים
          </h2>
          <div className="grid gap-px border border-[#e7e9f0] bg-[#e7e9f0] sm:grid-cols-2">
            <EventCard
              label="PDF Downloads"
              icon={Download}
              total30={Number(pdfStats?.total30 ?? 0)}
              today={Number(pdfStats?.today ?? 0)}
              note="הורדות המדריך (guide-ebook.pdf), מכל כפתור באתר."
            />
            <EventCard
              label="CTA Clicks"
              icon={MousePointerClick}
              total30={Number(ctaStats?.total30 ?? 0)}
              today={Number(ctaStats?.today ?? 0)}
              note='קליקים על "איפה להזמין". במצב אנונימי הכפתור מוביל ל־PDF, אז הקליקים נספרים כהורדות.'
            />
          </div>
        </section>

        {/* Graphique 30 jours */}
        <section aria-labelledby="chart-title">
          <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Trend</p>
          <h2 id="chart-title" className="mb-4 text-lg font-extrabold text-navy">
            צפיות ביום, 30 הימים האחרונים
          </h2>
          <div className="border border-[#e7e9f0] bg-white p-4">
            <div dir="ltr" className="flex h-36 items-end gap-[3px]">
              {series.map((row) => (
                <div
                  key={row.day}
                  className="group relative flex-1 bg-navy/85 transition-colors hover:bg-gold"
                  style={{ height: `${Math.max(2, Math.round((row.views / maxViews) * 100))}%` }}
                  title={`${row.day}: ${row.views} צפיות, ${row.uniques} מבקרים`}
                />
              ))}
            </div>
            <div dir="ltr" className={`mt-2 flex justify-between text-[10px] text-gray-400 ${mono}`}>
              <span>{series[0]?.day}</span>
              <span>{series[series.length - 1]?.day}</span>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Top pages */}
          <section aria-labelledby="top-pages">
            <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Top Pages</p>
            <h2 id="top-pages" className="mb-4 text-lg font-extrabold text-navy">
              עמודים מובילים (30 יום)
            </h2>
            <div className="border border-[#e7e9f0] bg-white">
              {topPages.length === 0 ? (
                <p className="p-4 text-sm text-gray-500">אין נתונים עדיין.</p>
              ) : (
                <ul className="divide-y divide-[#e7e9f0]">
                  {topPages.map((row) => (
                    <li key={String(row.path)} className="flex items-center justify-between gap-3 px-4 py-2.5">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-text-main">{pageLabel(String(row.path))}</p>
                        <p dir="ltr" className={`truncate text-right text-[11px] text-gray-400 ${mono}`}>
                          {String(row.path)}
                        </p>
                      </div>
                      <div className="shrink-0 text-left">
                        <span className="text-sm font-bold text-navy">{Number(row.views).toLocaleString("he-IL")}</span>
                        <span className="mr-1 text-[11px] text-gray-500">צפיות</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <div className="space-y-8">
            {/* Device */}
            <section aria-labelledby="devices-title">
              <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Devices</p>
              <h2 id="devices-title" className="mb-4 text-lg font-extrabold text-navy">
                מובייל מול דסקטופ (30 יום)
              </h2>
              <div className="border border-[#e7e9f0] bg-white p-4">
                {deviceTotal === 0 ? (
                  <p className="text-sm text-gray-500">אין נתונים עדיין.</p>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-sm font-medium text-text-main">
                      <span className="flex items-center gap-1.5">
                        <MonitorSmartphone aria-hidden className="h-4 w-4 text-navy/50" />
                        מובייל {mobilePct}%
                      </span>
                      <span>דסקטופ {100 - mobilePct}%</span>
                    </div>
                    <div className="mt-2 flex h-2.5 overflow-hidden bg-[#f7f8fb]" dir="rtl">
                      <div className="bg-gold" style={{ width: `${mobilePct}%` }} />
                      <div className="bg-navy" style={{ width: `${100 - mobilePct}%` }} />
                    </div>
                    <p className="mt-2 text-[11px] text-gray-500">
                      {mobile.toLocaleString("he-IL")} צפיות מובייל · {desktop.toLocaleString("he-IL")} דסקטופ
                    </p>
                  </>
                )}
              </div>
            </section>

            {/* Referrers */}
            <section aria-labelledby="referrers-title">
              <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 ${mono}`}>Sources</p>
              <h2 id="referrers-title" className="mb-4 text-lg font-extrabold text-navy">
                מקורות תנועה (30 יום)
              </h2>
              <div className="border border-[#e7e9f0] bg-white">
                {referrers.length === 0 ? (
                  <p className="p-4 text-sm text-gray-500">
                    אין עדיין תנועה מקישורים חיצוניים. כניסות ישירות לא נספרות כמקור.
                  </p>
                ) : (
                  <ul className="divide-y divide-[#e7e9f0]">
                    {referrers.map((row) => (
                      <li key={String(row.referrer)} className="flex items-center justify-between gap-3 px-4 py-2.5">
                        <span dir="ltr" className={`truncate text-right text-sm font-medium text-text-main ${mono}`}>
                          {String(row.referrer)}
                        </span>
                        <span className="shrink-0 text-sm font-bold text-navy">
                          {Number(row.views).toLocaleString("he-IL")}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>
        </div>

        <Callout
          variant="tip"
          title="איך זה עובד"
          text="כל עמוד ציבורי שולח אות קטן ל־`/api/hit`, וכל קליק על PDF או CTA נרשם כאירוע. בוטים מסוננים, אזור הניהול לא נמדד, וכתובות IP לא נשמרות. הנתונים יושבים במסד Neon (חינמי) ונקראים רק מהעמוד הזה."
        />
      </div>
    </main>
  );
}
