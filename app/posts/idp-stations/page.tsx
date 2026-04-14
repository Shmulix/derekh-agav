import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IDPLocations from "@/components/posts/IDPLocations";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import { ChevronLeft, Info, AlertTriangle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל | כל התחנות המורשות",
  description:
    "רשימה מלאה של 66 תחנות הנפקה מורשות לרישיון נהיגה בינלאומי בישראל. חיפוש לפי עיר, כתובת, טלפון ושעות פתיחה. עדכני לאפריל 2026.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/idp-stations",
  },
  openGraph: {
    title: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל",
    description: "כל 66 התחנות המורשות ממשרד התחבורה. חפש לפי עיר וקבל כתובת, טלפון ושעות פתיחה.",
    url: "https://derekh-agav.vercel.app/posts/idp-stations",
    type: "article",
    images: [
      {
        url: "/idp-location.avif",
        width: 1200,
        height: 630,
        alt: "תחנות הנפקת רישיון נהיגה בינלאומי בישראל",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל — כל 66 התחנות המורשות",
  description:
    "רשימה מלאה של תחנות ההנפקה המורשות לרישיון נהיגה בינלאומי בישראל, מבוססת על נתוני משרד התחבורה. עדכני לאפריל 2026.",
  image: "https://derekh-agav.vercel.app/idp-location.avif",
  inLanguage: "he",
  author: {
    "@type": "Person",
    name: "סמואל פרץ",
    url: "https://derekh-agav.vercel.app/about",
  },
  publisher: {
    "@type": "Organization",
    name: "דרך אגב",
    url: "https://derekh-agav.vercel.app",
  },
  url: "https://derekh-agav.vercel.app/posts/idp-stations",
  dateModified: "2026-04-01",
};

const mobileTocItems = [
  { id: "intro", label: "מה זה אומר בפועל" },
  { id: "what-to-bring", label: "מה להביא לתחנה" },
  { id: "search", label: "חיפוש תחנות" },
  { id: "season", label: "עונת השיא" },
  { id: "source", label: "על הרשימה" },
];

const whatToBring = [
  { icon: "🪪", text: "רישיון נהיגה ישראלי פיזי בתוקף" },
  { icon: "📘", text: "תעודת זהות או דרכון" },
  { icon: "💵", text: "10.10 ₪ לתשלום בתחנה" },
  { icon: "🕐", text: "כ-15 דקות מזמנך" },
];

export default function IDPStationsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="bg-white min-h-screen">

        {/* Hero */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/idp-location.avif"
            alt="תחנות הנפקת רישיון נהיגה בינלאומי בישראל"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-navy/70 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-3">
              מסמכים נדרשים
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              איפה מנפיקים רישיון נהיגה בינלאומי בישראל?
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              66 תחנות מורשות ברחבי הארץ. חפש לפי עיר, קבל כתובת, טלפון ושעות פתיחה.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/samuel.avif"
                alt="סמואל פרץ"
                width={36}
                height={36}
                className="rounded-full border-2 border-white/30 flex-shrink-0"
              />
              <div>
                <p className="text-white text-sm font-semibold leading-none">סמואל פרץ</p>
                <p className="text-slate-400 text-xs mt-0.5">מומחה השכרת רכב בינלאומית · עודכן לאחרונה: אפריל 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-column layout */}
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr_190px] lg:gap-10 items-start">

            {/* RIGHT SIDEBAR — TOC + author card */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                    תוכן עניינים
                  </p>
                  <nav className="space-y-1">
                    {[
                      { href: "#intro", label: "מה זה אומר בפועל" },
                      { href: "#what-to-bring", label: "מה להביא לתחנה" },
                      { href: "#search", label: "חיפוש תחנות" },
                      { href: "#season", label: "עונת השיא" },
                      { href: "#source", label: "על הרשימה" },
                    ].map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-500 hover:text-navy py-1 px-2 rounded hover:bg-surface transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="border border-gray-100 rounded-xl p-4 bg-white">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/samuel.avif"
                      alt="סמואל פרץ"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-gold/40 flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-navy text-sm leading-tight">סמואל פרץ</p>
                      <p className="text-xs text-gold font-semibold mt-0.5">10+ שנות ניסיון בתחום</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mt-3">
                    המידע באתר מבוסס על ניסיון אישי של מעל עשר שנים בתחום השכרת הרכב. אינני גוף רשמי או ממשלתי. ממליץ לאמת פרטים קריטיים מול חברת ההשכרה לפני הנסיעה.
                  </p>
                </div>

              </div>
            </aside>

            {/* MAIN CONTENT */}
            <article className="min-w-0">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
                <Link href="/" className="hover:text-navy">דרך אגב</Link>
                <ChevronLeft size={12} />
                <Link href="/posts" className="hover:text-navy">מאמרים</Link>
                <ChevronLeft size={12} />
                <span className="text-gray-600">תחנות הנפקת רישיון נהיגה בינלאומי</span>
              </nav>

              {/* Intro */}
              <div id="intro" className="scroll-mt-24 mb-10">
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  משרד התחבורה מנפיק רישיון נהיגה בינלאומי ב-66 תחנות מורשות ברחבי הארץ. לא צריך לתאם פגישה מראש, לא צריך לשלוח בקשות, לא צריך לחכות שבועות. מגיעים, משלמים 10.10 ₪, יוצאים עם רישיון. כל התהליך לוקח ברוב התחנות פחות מרבע שעה.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  למטה תמצא את כל 66 התחנות המורשות לפי נתוני משרד התחבורה, עם חיפוש לפי עיר. כתובת, טלפון ושעות פתיחה לכל תחנה. מעודכן לאפריל 2026.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  אם אתה לא יודע עדיין למה בכלל צריך רישיון נהיגה בינלאומי כשיש לך רישיון ישראלי, כדאי לקרוא קודם את{" "}
                  <a href="/posts/international-driving-permit" className="text-navy font-semibold underline underline-offset-2 hover:opacity-75">
                    המאמר שלנו על הרישיון נהיגה הבינלאומי
                  </a>
                  . הקיצור: בלי רישיון בינלאומי אתה עלול להיפסל מהרכב בדלפק, גם אם הרישיון הישראלי שלך בתוקף מושלם.
                </p>
              </div>

              {/* What to bring */}
              <div id="what-to-bring" className="scroll-mt-24 bg-[#f0f4ff] border border-navy/15 rounded-xl p-5 mb-8">
                <p className="font-bold text-navy text-sm mb-4 flex items-center gap-2">
                  <Info size={16} />
                  מה להביא לתחנה
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {whatToBring.map((item) => (
                    <div key={item.text} className="bg-white rounded-lg p-3 text-center border border-navy/10">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <p className="text-xs text-gray-700 leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search component */}
              <div id="search" className="scroll-mt-24 mb-10">
                <IDPLocations />
              </div>

              {/* High season warning */}
              <div id="season" className="scroll-mt-24 border border-orange-200 bg-orange-50 rounded-xl p-4 mb-8 flex items-start gap-3">
                <AlertTriangle size={17} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-orange-800 text-sm mb-1">מרץ–יולי: עונת השיא</p>
                  <p className="text-sm text-orange-700 leading-relaxed">
                    לפני קיץ, תחנות ההנפקה עמוסות. תורים יכולים להתארך. אל תשאיר את זה לשבוע האחרון לפני הטיסה.
                  </p>
                </div>
              </div>

              {/* Source note */}
              <div id="source" className="scroll-mt-24 bg-surface border border-gray-200 rounded-xl p-5 mb-10">
                <p className="text-sm font-bold text-navy mb-2">על הרשימה הזו</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  הרשימה מבוססת על נתוני{" "}
                  <a
                    href="https://www.gov.il/he/departments/dynamiccollectors/photo_driving_license_stock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy font-semibold underline underline-offset-2 hover:opacity-80"
                  >
                    משרד התחבורה והבטיחות בדרכים
                  </a>{" "}
                  ועודכנה לאחרונה באפריל 2026. לאחר מועד זה, ייתכנו שינויים בפרטי תחנות בודדות. לרשימה הרשמית והמעודכנת ביותר:
                </p>
                <a
                  href="https://www.gov.il/he/departments/dynamiccollectors/photo_driving_license_stock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:opacity-75"
                >
                  לרשימה הרשמית באתר gov.il
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Article navigation — prev / next */}
              <div className="space-y-3 mb-10">
                <Link
                  href="/posts/international-driving-permit"
                  className="block border border-gray-200 rounded-xl p-4 hover:border-navy/40 hover:bg-[#f0f4ff] transition-colors"
                >
                  <p className="text-xs text-gray-400 mb-1">→ המאמר הקודם</p>
                  <p className="font-bold text-navy text-sm leading-snug">רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">למה הרישיון הישראלי לא מספיק לבד, ומה קורה כשלא מביאים IDP</p>
                </Link>
                <div className="block bg-navy rounded-xl p-5">
                  <p className="text-xs text-gold font-semibold mb-1">המאמר הבא ←</p>
                  <p className="font-bold text-white text-base leading-snug mb-1">הדרכון בהשכרת רכב בחו״ל</p>
                  <p className="text-sm text-slate-300 leading-snug">הדרכון נשאר בכספת המלון. הרכב לא יוצא. כל מה שצריך לדעת לפני שזה קורה לך.</p>
                  <span className="inline-block mt-3 bg-white/10 text-slate-300 text-xs px-2 py-1 rounded">בקרוב</span>
                </div>
              </div>

            </article>

            {/* LEFT SIDEBAR — CTA + disclaimer + related */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">

                <div className="bg-navy rounded-xl p-5">
                  <p className="text-white font-bold text-sm leading-tight mb-2">מוכן להזמין?</p>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">
                    השוואה בין חברות ההשכרה המובילות לפי מחיר, ביטוח ושירות.
                  </p>
                  <a
                    href="/posts/rental-platforms"
                    className="btn-gold text-xs px-4 py-2 w-full block text-center"
                  >
                    איפה להזמין? ←
                  </a>
                </div>

                <div className="bg-[#fffbea] border border-gold/30 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך.
                  </p>
                </div>

                <div className="border border-gray-100 rounded-xl p-4">
                  <p className="text-xs font-bold text-navy mb-2">מאמרים נוספים</p>
                  <div className="space-y-2">
                    <a href="/posts/international-driving-permit" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      המאמר שלנו על הרישיון נהיגה הבינלאומי ←
                    </a>
                    <a href="/posts/driving-license-abroad" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      רישיון ישראלי בחו״ל ←
                    </a>
                    <a href="/guide" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      המדריך המלא להשכרת רכב ←
                    </a>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

      </main>
      <MobileTOC items={mobileTocItems} />
      <MobileFloatingCTA />
      <Footer />
    </>
  );
}
