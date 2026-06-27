import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTOC from "@/components/guide/MobileTOC";
import type { Metadata } from "next";
import { CheckCircle, AlertTriangle, ExternalLink, ChevronLeft } from "lucide-react";

// NOTE (placeholder) : contenu éditorial SIMULÉ en attendant les vraies affiliations.
// Les `url` des plateformes pointent vers les sites officiels. À remplacer par les
// liens d'affiliation réels quand les deals seront prêts.

const mobileTocItems = [
  { id: "why-not-cheapest", label: "למה לא הזול ביותר" },
  { id: "criteria", label: "לפי מה אני בודק" },
  { id: "platforms", label: "הפלטפורמות בפועל" },
  { id: "bottom-line", label: "השורה התחתונה" },
];

const tocItems = [
  { href: "#why-not-cheapest", label: "למה לא הזול ביותר" },
  { href: "#criteria", label: "לפי מה אני בודק" },
  { href: "#platforms", label: "הפלטפורמות בפועל" },
  { href: "#bottom-line", label: "השורה התחתונה" },
];

const criteria = [
  {
    title: "מדיניות ביטול",
    text: "התוכניות משתנות מאתר לאתר. רכב שאי אפשר לבטל בחינם הוא התחייבות, לא מציאה. ביטול חינם עד 48 שעות לפני שווה לפעמים יותר מהנחה של חמישה אחוז.",
  },
  {
    title: "אפשרויות ביטוח",
    text: "מה מוכרים לך, ומי עומד מאחורי הכיסוי. ביטוח של הפלטפורמה וביטוח של חברת ההשכרה זה שני עולמות. תקרא מה מכוסה לפני שאתה מסמן, לא בדלפק.",
  },
  {
    title: "תמיכה אנושית",
    text: "כשמשהו משתבש בחו״ל בשבע בערב, אתה רוצה מישהו שמרים טלפון. לא צ׳אט בוט ולא טופס. בדוק אם יש מוקד אנושי בשפה שאתה מבין.",
  },
  {
    title: "שקיפות מחיר",
    text: "המחיר שאתה רואה מול המחיר בדלפק. תוספות, פיקדון, מדיניות דלק. פלטפורמה טובה לא מפתיעה אותך בתחנה עם מספר אחר.",
  },
];

const platforms = [
  {
    name: "DiscoverCars",
    url: "https://www.discovercars.com/",
    tagline: "מנוע השוואה רחב עם דגש על ביטוח משלים",
    good: "כשאתה רוצה לראות הרבה חברות השכרה במקום אחד, עם אפשרות ביטוח ביטול בתוספת קטנה. מדיניות הביטול ברורה יחסית.",
    watch: "הביטוח שהם מציעים הוא של צד שלישי. תקרא בדיוק מה הוא מכסה. לא כל מה שנקרא ׳מלא׳ באמת מלא.",
  },
  {
    name: "Rentalcars.com",
    url: "https://www.rentalcars.com/",
    tagline: "המלאי הגדול בעולם, גב של קבוצת Booking",
    good: "כשאתה מחפש זמינות כמעט בכל יעד, כולל תחנות קטנות. ממשק נוח והזמנה מהירה.",
    watch: "רוחב המלאי מביא איתו שונות באיכות חברת ההשכרה בפועל. בדוק את הדירוג של התחנה הספציפית, לא רק את הפלטפורמה.",
  },
  {
    name: "Kayak",
    url: "https://www.kayak.com/cars",
    tagline: "מטא חיפוש: משווה את המשווים",
    good: "כשאתה רוצה מבט על של טווח המחירים בשוק תוך חצי דקה. נקודת פתיחה מצוינת לסקר שוק.",
    watch: "קייאק לא מוכר לך ישירות. הוא שולח אותך לאתר אחר שמשלים את ההזמנה. אחרי הקליק אתה במגרש של מישהו אחר, עם מדיניות ותמיכה שלו.",
  },
  {
    name: "AutoEurope",
    url: "https://www.autoeurope.com/",
    tagline: "ותיק, חזק באירופה, שירות אנושי",
    good: "כשאתה נוסע באירופה ורוצה מוקד אנושי שמרים טלפון. חזקים בעסקאות כל כלול.",
    watch: "פחות מלאי מחוץ לאירופה. השווה את המחיר מול מנוע רחב לפני שאתה סוגר.",
  },
];

export const metadata: Metadata = {
  title: "איפה הכי כדאי להזמין רכב שכור? השוואת הפלטפורמות",
  description:
    "לא לפי המחיר הזול ביותר. השוואה בין פלטפורמות ההזמנה המובילות לפי מה שבאמת משנה: ביטול, ביטוח, תמיכה ושקיפות מחיר.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/rental-platforms",
  },
  openGraph: {
    title: "איפה הכי כדאי להזמין רכב שכור? | דרך אגב",
    description:
      "השוואה בין פלטפורמות ההזמנה לפי איכות השירות, לא רק לפי המחיר. ביטול, ביטוח, תמיכה ושקיפות.",
    url: "https://derekh-agav.vercel.app/posts/rental-platforms",
    type: "article",
    images: [
      {
        url: "/hero-bg.avif",
        width: 1200,
        height: 630,
        alt: "השוואת פלטפורמות להזמנת רכב שכור",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "איפה הכי כדאי להזמין רכב שכור? השוואת הפלטפורמות",
  description:
    "השוואה בין פלטפורמות ההזמנה המובילות לפי איכות השירות: ביטול, ביטוח, תמיכה ושקיפות מחיר.",
  image: "https://derekh-agav.vercel.app/hero-bg.avif",
  datePublished: "2026-06-27",
  dateModified: "2026-06-27", // update this on every edit
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
  inLanguage: "he",
  url: "https://derekh-agav.vercel.app/posts/rental-platforms",
};

export default function RentalPlatformsPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/hero-bg.avif"
            alt="השוואת פלטפורמות להזמנת רכב שכור"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-navy/70 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-3">
              השוואה
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              איפה הכי כדאי להזמין רכב שכור?
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              לא לפי המחיר הזול ביותר. לפי מה שבאמת משנה כשמשהו משתבש.
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
                <p className="text-slate-400 text-xs mt-0.5">מומחה השכרת רכב בינלאומית · עודכן לאחרונה: יוני 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body — 3-column layout on desktop */}
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr_190px] lg:gap-10 items-start">

            {/* RIGHT SIDEBAR — TOC + author */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-widest mb-4 border-b border-[#e7e9f0] pb-2">
                    תוכן עניינים
                  </p>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
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

                <div className="border border-[#e7e9f0] rounded-none p-4 bg-white">
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
                    ההשוואה מבוססת על ניסיון אישי של מעל עשר שנים בתחום השכרת הרכב. אינני גוף רשמי. ממליץ לאמת תנאים קריטיים מול הפלטפורמה וחברת ההשכרה לפני שסוגרים.
                  </p>
                </div>
              </div>
            </aside>

            {/* MAIN ARTICLE */}
            <article className="min-w-0">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
                <Link href="/" className="hover:text-navy">דרך אגב</Link>
                <ChevronLeft size={12} />
                <Link href="/posts" className="hover:text-navy">מאמרים</Link>
                <ChevronLeft size={12} />
                <span className="text-gray-600">איפה הכי כדאי להזמין</span>
              </nav>

              {/* Intro */}
              <p className="text-lg text-gray-800 leading-relaxed mb-5">
                כולם שואלים את אותה שאלה: איפה הכי זול. זאת השאלה הלא נכונה.
                המחיר הזול ביותר הוא לרוב המחיר שמסתיר משהו: ביטול שאי אפשר לבטל, ביטוח שלא מכסה, תחנה שאף אחד לא ערב לאיכותה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                במקום לשלוח אותך לרוץ אחרי המספר הקטן ביותר, אני אראה לך לפי מה אני באמת בודק פלטפורמת הזמנה, ומה החוזקה והחולשה של כל אחת מהמובילות. ככה תבחר נכון, לא רק זול.
              </p>

              {/* Section 1 */}
              <h2 id="why-not-cheapest" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                למה המחיר הזול ביותר זה מלכודת
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                המחיר שאתה רואה בעמוד התוצאות הוא לא המחיר שתשלם בסוף. בדלפק מחכים פיקדון, ביטוח שמנסים למכור, מדיניות דלק, ולפעמים תוספות שלא ידעת עליהן. פלטפורמה זולה עם תנאים גרועים תעלה לך יותר מפלטפורמה יקרה במעט עם תנאים נקיים.
              </p>
              <div className="callout-warning mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">הזול שהתברר כיקר</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      רכב ב׳מבצע׳ בלי ביטול חינם, עם ביטוח חלקי ובלי תמיכה אנושית, הוא הימור. אם הטיסה מתעכבת או התוכניות משתנות, אתה משלם את ההפרש בלחץ, בדלפק, בלי גיבוי.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <h2 id="criteria" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                לפי מה אני בודק פלטפורמה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                ארבעה דברים, לפי הסדר הזה. המחיר נכנס רק אחרי שכל אלה עברו את הסף.
              </p>
              <div className="space-y-3 mb-8">
                {criteria.map((item) => (
                  <div key={item.title} className="callout-info">
                    <p className="font-bold text-navy text-sm mb-1">{item.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Section 3 — Platforms */}
              <h2 id="platforms" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                הפלטפורמות בפועל
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                אין אחת ש׳מנצחת׳ בכל מצב. לכל אחת יש מצב שבו היא הבחירה הנכונה, ומצב שבו כדאי להמשיך הלאה. הנה איך אני מסתכל על המובילות.
              </p>

              <div className="space-y-5 mb-8">
                {platforms.map((p) => (
                  <div key={p.name} className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                    <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                      <div>
                        <p className="font-bold text-navy text-lg leading-tight">{p.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{p.tagline}</p>
                      </div>
                      {/* TODO: remplacer par le lien d'affiliation quand prêt */}
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="btn-gold text-xs px-4 py-2 flex-shrink-0"
                      >
                        לאתר ←
                      </a>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-navy">מתי כדאי: </span>{p.good}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-navy">על מה לשים לב: </span>{p.watch}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 4 — Bottom line */}
              <h2 id="bottom-line" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                השורה התחתונה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                אין ׳הכי טוב׳ אחד. יש הכי טוב בשבילך, ליעד הזה, לטיול הזה. התחל ממנוע רחב כדי לסקור את השוק, ואז בדוק את האותיות הקטנות: ביטול, ביטוח, תמיכה ושקיפות. המחיר הוא המספר הראשון שאתה רואה, לא האחרון שאתה משלם.
              </p>
              <div className="callout-tip mb-10">
                <p className="text-sm font-bold text-amber-800 mb-2">הדרך המהירה להחליט</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  סקור מחירים במנוע רחב, סנן לפי ביטול חינם, קרא מה הביטוח באמת מכסה, ובדוק את דירוג התחנה הספציפית ביעד שלך. אם כל אלה נקיים, אז תסתכל על המחיר.
                </p>
              </div>

              {/* Mobile: disclaimer */}
              <div className="lg:hidden space-y-4 mb-8">
                <div className="bg-[#fffbea] border border-gold/30 rounded-none p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך. ההמלצות נכתבות לפי שיקול מקצועי בלבד.
                  </p>
                </div>
              </div>

              {/* Final CTA — vers le guide (cette page EST la destination de réservation) */}
              <div className="bg-navy rounded-none p-7 text-center">
                <p className="text-white font-bold text-lg mb-2">לפני שאתה סוגר, ודא שאתה מוכן לדלפק</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
                  בחירת הפלטפורמה היא חצי מהעבודה. החצי השני זה להגיע לדלפק עם המסמכים הנכונים ובלי הפתעות. המדריך המלא מכסה את הכל.
                </p>
                <a href="/guide" className="btn-gold text-sm px-8 py-2.5">
                  למדריך המלא להשכרת רכב ←
                </a>
              </div>

            </article>

            {/* LEFT SIDEBAR — disclaimer + more articles */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="space-y-4">
                <div className="bg-[#fffbea] border border-gold/30 rounded-none p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך. ההמלצות נכתבות לפי שיקול מקצועי בלבד.
                  </p>
                </div>

                <div className="border border-[#e7e9f0] rounded-none p-4">
                  <p className="text-xs font-bold text-navy mb-2">מאמרים נוספים</p>
                  <div className="space-y-2">
                    <a href="/posts/driving-license-abroad" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      רישיון נהיגה ישראלי בחו״ל ←
                    </a>
                    <a href="/posts/international-driving-permit" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      איך מוציאים IDP בישראל ←
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
      <Footer />
    </>
  );
}
