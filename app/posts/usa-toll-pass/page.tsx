import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import type { Metadata } from "next";
import { author, booking } from "@/lib/site-config";
import { buildArticleJsonLd } from "@/lib/article-jsonld";
import AuthorByline from "@/components/posts/AuthorByline";
import ArticleBreadcrumb from "@/components/posts/ArticleBreadcrumb";
import {
  AlertTriangle,
  XCircle,
  CheckCircle,
  ExternalLink,
  GitCompare,
  Receipt,
  Scale,
} from "lucide-react";

const mobileTocItems = [
  { id: "old-vs-new", label: "העולם הישן מול העולם החדש" },
  { id: "where", label: "איפה זה מחכה לכם" },
  { id: "systems", label: "E-ZPass, SunPass, FasTrak" },
  { id: "rental-programs", label: "מי גובה בפועל" },
  { id: "mock-invoice", label: "ככה נראה החיוב" },
  { id: "decide", label: "מה מתאים לכם" },
  { id: "checklist", label: "לפני ואחרי הנסיעה" },
];

export const metadata: Metadata = {
  title: "אגרות כביש בארה״ב ברכב שכור: המדריך המלא לתשלום",
  description:
    "בארה״ב אין קופות אגרה. מצלמה מצלמת את הלוחית וחברת ההשכרה מחייבת אתכם שבועות אחר כך, כולל עמלה. איך המערכת עובדת, כמה זה עולה בפועל, ואיך נמנעים מהפתעות בכרטיס האשראי.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/usa-toll-pass",
  },
  openGraph: {
    title: "אגרות כביש בארה״ב ברכב שכור: איך זה עובד וכמה זה עולה | דרך אגב",
    description:
      "בלי קופות, בלי מחסומים: מצלמה קוראת את הלוחית וחברת ההשכרה מחייבת שבועות אחר כך. כל מה שחייבים לדעת לפני שיוצאים לדרך בארה״ב.",
    url: "https://derekh-agav.vercel.app/posts/usa-toll-pass",
    type: "article",
    images: [
      {
        url: "/usa-toll-pass-hero.avif",
        width: 1920,
        height: 1080,
        alt: "מצלמת אגרה אלקטרונית מעל כביש מהיר בארה״ב",
      },
    ],
  },
};

const articleJsonLd = buildArticleJsonLd({
  slug: "usa-toll-pass",
  headline: "אגרות כביש בארה״ב ברכב שכור: המדריך המלא לתשלום",
  description:
    "איך עובדת האגרה האלקטרונית בארה״ב, מה ההבדל בין E-ZPass, SunPass ו-FasTrak, כמה גובות חברות ההשכרה, ואיך נמנעים מעמלות מיותרות.",
  image: "/usa-toll-pass-hero.avif",
  datePublished: "2026-07-10",
  dateModified: "2026-07-10", // update this on every edit
});

const locations = [
  {
    emoji: "🌉",
    name: "ניו יורק וניו ג'רזי",
    desc: "כל מעברי רשות הנמלים סגורים למזומן: גשר ג'ורג' וושינגטון, מנהרת לינקולן, מנהרת הולנד.",
  },
  {
    emoji: "🌴",
    name: "פלורידה",
    desc: "רוב כבישי האגרה סביב אורלנדו ומיאמי אלקטרוניים בלבד.",
  },
  {
    emoji: "🌉",
    name: "קליפורניה",
    desc: "גשרי מפרץ סן פרנסיסקו וכבישי אגרה מרכזיים, אותה שיטה בדיוק.",
  },
  {
    emoji: "🛣️",
    name: "טקסס ואילינוי",
    desc: "אותו עיקרון, עם מערכות אזוריות משלהן.",
  },
];

const systems = [
  {
    name: "E-ZPass",
    coverage: "כ-20 מדינות: מניו אינגלנד ועד מינסוטה, דרך פלורידה בזכות SunPass PRO.",
    gap: "לא מכסה קליפורניה או טקסס.",
  },
  {
    name: "SunPass / SunPass PRO",
    coverage: "פלורידה, ג'ורג'יה, קרוליינה הצפונית, טקסס, ועוד כל מדינות ה-E-ZPass.",
    gap: "הכיסוי הרחב ביותר נכון ל-2026, אבל עדיין לא כל הארץ.",
  },
  {
    name: "FasTrak",
    coverage: "קליפורניה בלבד.",
    gap: "חוק פרטיות מדינתי חוסם חיבור לרשתות אחרות. תיקון חקיקה עשוי לשנות את זה.",
  },
  {
    name: "TxTag / TollTag",
    coverage: "טקסס, אוקלהומה וקנזס, במועדון נפרד משלהן.",
    gap: "לא תואם ל-E-ZPass בכלל.",
  },
];

const rentalPrograms = [
  {
    company: "Hertz . PlatePass",
    payPerUse: "אגרה מלאה + 9.99$ ליום שימוש (5.95$ בפלורידה, ג'ורג'יה וטקסס)",
    flat: "27.99$ ליום קבוע, עד 139.95$ לשבוע",
  },
  {
    company: "Avis / Budget . e-Toll",
    payPerUse: "6.95$ ליום שימוש, עד 34.95$ לתקופת ההשכרה",
    flat: "10.99$-25.99$ ליום קבוע, עד 54.95$-181.93$ לשבוע",
  },
  {
    company: "Enterprise / National / Alamo",
    payPerUse: "4.95$-5.35$ ליום שימוש + האגרה, עד 34.65$ לתקופה",
    flat: "טרנספונדר בצפון מזרח: 3.95$ ליום, עד 19.75$",
  },
];

export default function UsaTollPassPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative h-[320px] md:h-[460px] overflow-hidden">
          <Image
            src="/usa-toll-pass-hero.avif"
            alt="מצלמת אגרה אלקטרונית מעל כביש מהיר בארה״ב"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/75 via-navy/35 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded mb-3">
              יעד . ארה״ב
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              אגרות כביש בארה״ב עם רכב שכור: איך זה עובד וכמה זה עולה
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl">
              מצלמה אחת, כמה מערכות שלא מדברות ביניהן, וחיוב שמגיע כשכבר שכחתם מהנסיעה.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src={author.image}
                alt={author.name}
                width={36}
                height={36}
                className="rounded-full border-2 border-white/30 flex-shrink-0"
              />
              <div>
                <p className="text-white text-sm font-semibold leading-none">{author.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  מומחה השכרת רכב בינלאומית · עודכן לאחרונה: יולי 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr_190px] lg:gap-10 items-start">
            {/* RIGHT SIDEBAR */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-widest mb-4 border-b border-[#e7e9f0] pb-2">
                    תוכן עניינים
                  </p>
                  <nav className="space-y-1">
                    {mobileTocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-500 hover:text-navy py-1 px-2 rounded hover:bg-surface transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="border border-[#e7e9f0] rounded-none p-4 bg-white">
                  <AuthorByline note="המידע באתר מבוסס על ניסיון אישי של מעל עשר שנים בתחום השכרת הרכב. אינני גוף רשמי או ממשלתי. ממליץ לאמת פרטים מול חברת ההשכרה ומול רשות האגרה לפני הנסיעה." />
                </div>
              </div>
            </aside>

            {/* MAIN ARTICLE */}
            <article className="min-w-0">
              <ArticleBreadcrumb title="אגרות כביש בארה״ב" />

              {/* Intro */}
              <p className="text-lg text-gray-800 leading-relaxed mb-5">
                שאלה פשוטה לפני שמתחילים: מה קורה כשעוברים תחת מצלמת אגרה בלי לשלם? בישראל וגם באירופה יש לזה תשובה מוכרת. בארה״ב זו בדיוק אותה תשובה, רק שאף אחד לא טורח להזכיר לכם את זה בדלפק ההשכרה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                והמיתוס שכדאי לשבור מיד: "בארה״ב זה כמו באירופה, יש עמדת תשלום, שמים מטבע, ממשיכים". לא. ברוב הכבישים המרכזיים אין שום עמדה. יש רק מצלמה מעל הכביש, ולוחית רישוי שהיא הכתובת היחידה שהמערכת מכירה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                נסעתם פעם בכביש 6? אתם כבר מכירים את העיקרון. ההבדל האמריקאי: לא מערכת אחת, אלא כמה, פזורות בעשרות מדינות, שלא תמיד מדברות אחת עם השנייה. וזה בדיוק מה שהופך את זה למבלבל, לא הרעיון עצמו.
              </p>

              {/* Section 1 . Old vs new world compare */}
              <h2 id="old-vs-new" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                העולם הישן מול העולם החדש
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">מה שהכרתם</p>
                  <p className="font-bold text-navy text-base mb-2">עמדת תשלום פיזית</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    עוצרים, משלמים במזומן או בכרטיס, המחסום נפתח. אם אין כסף, לא עוברים. פשוט וברור.
                  </p>
                </div>
                <div className="border border-navy/30 bg-[#f0f4ff] rounded-none p-5">
                  <p className="text-xs font-bold text-navy/70 uppercase tracking-wide mb-2">מה שמחכה לכם</p>
                  <p className="font-bold text-navy text-base mb-2">זיהוי לוחית ברשת</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    אין עצירה, אין מחסום, אין הזדמנות לשלם במקום. המצלמה מזהה, והחיוב רץ בלי קשר אם שמתם לב או לא.
                  </p>
                </div>
              </div>
              <div className="callout-info mb-10">
                <div className="flex items-start gap-3">
                  <GitCompare size={18} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-navy text-sm mb-1">מה זה אומר עבורכם</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      אין רגע שבו אתם יכולים "לתקן" את המצב בשטח. כל החלטה (להירשם, להביא טרנספונדר, לשלם ישירות) חייבת להתקבל לפני שמתניעים, לא ליד המחסום, כי מחסום כזה פשוט לא קיים.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 . Where */}
              <h2 id="where" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איפה זה מחכה לכם
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                לא צריך לתכנן מסלול חריג כדי להיתקל בזה. אם היעד הוא אחת מהערים הגדולות, סביר שתעברו לפחות כביש אגרה אחד בלי לשים לב:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {locations.map((loc) => (
                  <div key={loc.name} className="flex items-start gap-3 border border-[#e7e9f0] rounded-none p-3 bg-white">
                    <span className="text-xl flex-shrink-0">{loc.emoji}</span>
                    <div>
                      <p className="font-bold text-navy text-sm">{loc.name}</p>
                      <p className="text-xs text-gray-600 leading-relaxed mt-0.5">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 3 . Regional systems (real table) */}
              <h2 id="systems" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                E-ZPass, SunPass, FasTrak: המערכות האזוריות
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                בניגוד לישראל, אין בארה״ב מדבקת אגרה אחת שעובדת בכל המדינה. יש כמה רשתות אזוריות, וחלקן לא מדברות אחת עם השנייה בכלל:
              </p>
              <div className="overflow-x-auto mb-10 border border-[#e7e9f0]">
                <table className="w-full text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fc] border-b border-[#e7e9f0]">
                      <th className="p-3 font-bold text-navy">מערכת</th>
                      <th className="p-3 font-bold text-navy">כיסוי</th>
                      <th className="p-3 font-bold text-navy">מה חשוב לדעת</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systems.map((s, i) => (
                      <tr key={s.name} className={i % 2 === 1 ? "bg-[#f8f9fc]/50" : ""}>
                        <td className="p-3 font-bold text-navy align-top whitespace-nowrap">{s.name}</td>
                        <td className="p-3 text-gray-700 align-top">{s.coverage}</td>
                        <td className="p-3 text-gray-600 align-top">{s.gap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 4 . Rental company programs (real table) */}
              <h2 id="rental-programs" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                מי גובה בפועל: חברות ההשכרה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                כל חברת השכרה גדולה מריצה תוכנית אגרה משלה, עם שתי אופציות קבועות: תשלום לפי שימוש בפועל, או תעריף יומי שכולל הכול. המספרים הרלוונטיים נכון ל-2026:
              </p>
              <div className="overflow-x-auto mb-6 border border-[#e7e9f0]">
                <table className="w-full text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fc] border-b border-[#e7e9f0]">
                      <th className="p-3 font-bold text-navy">חברה</th>
                      <th className="p-3 font-bold text-navy">תשלום לפי שימוש</th>
                      <th className="p-3 font-bold text-navy">תעריף קבוע</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalPrograms.map((p, i) => (
                      <tr key={p.company} className={i % 2 === 1 ? "bg-[#f8f9fc]/50" : ""}>
                        <td className="p-3 font-bold text-navy align-top whitespace-nowrap">{p.company}</td>
                        <td className="p-3 text-gray-700 align-top">{p.payPerUse}</td>
                        <td className="p-3 text-gray-700 align-top">{p.flat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="callout-tip mb-10">
                <p className="text-sm font-bold text-amber-800 mb-1">טיפ מניסיון</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  ברוב התוכניות האלה, יום שבו לא נגעתם בכביש אגרה הוא יום חינם. חוץ מהתעריף הקבוע, שגובה גם ביום שבו לא ראיתם אגרה אחת.
                </p>
              </div>

              {/* Section 5 . Mock invoice */}
              <h2 id="mock-invoice" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                לא נרשמתם לשום דבר? ככה נראה החיוב שמחכה לכם
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                כאן הנקודה שכמעט אף אחד לא מסביר בדלפק: המצלמה לא בודקת אם נרשמתם לתוכנית כלשהי. היא מצלמת, רשות האגרה שולחת את החשבון לחברת ההשכרה, וזו מעבירה אותו אליכם עם עמלה מתווספת. משהו כזה, כ-4 עד 8 שבועות אחרי שכבר החזרתם את הרכב:
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-none p-6 bg-[#f8f9fc] max-w-md mx-auto mb-6">
                <div className="flex items-center gap-2 justify-center mb-4">
                  <Receipt size={16} className="text-gray-400" />
                  <p className="text-xs text-gray-500 tracking-wide">חיוב לדוגמה, לא אמיתי</p>
                </div>
                <div className="space-y-2 text-sm text-gray-800 font-mono">
                  <div className="flex justify-between">
                    <span>אגרה: גשר ג'ורג' וושינגטון</span>
                    <span>1.50$</span>
                  </div>
                  <div className="flex justify-between">
                    <span>עמלת טיפול מנהלי (חברת ההשכרה)</span>
                    <span>9.99$</span>
                  </div>
                  <div className="border-t border-dashed border-gray-300 my-2" />
                  <div className="flex justify-between font-bold text-navy">
                    <span>סה״כ לחיוב בכרטיס האשראי</span>
                    <span>11.49$</span>
                  </div>
                </div>
              </div>
              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">חשוב</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      זה לא תרחיש נדיר, זה ברירת המחדל. ההתעלמות מאגרה לא מבטלת אותה, היא רק דוחה את הרגע הפחות נוח לכרטיס האשראי שלכם.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 . Decision helper */}
              <h2 id="decide" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                מה מתאים לכם: לשלם לפי שימוש או להביא פתרון משלכם?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                אין תשובה אחת נכונה לכולם. זה תלוי במסלול שלכם, לא בהרגשה:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                  <p className="font-bold text-navy text-base mb-2">נסיעה קצרה, כביש אגרה אחד או שניים</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    התשלום לפי שימוש של חברת ההשכרה כמעט תמיד יוצא זול יותר מטרנספונדר אישי או מתעריף קבוע. אין טעם להתאמץ בשביל אגרה אחת.
                  </p>
                </div>
                <div className="border border-navy/30 bg-[#f0f4ff] rounded-none p-5">
                  <p className="font-bold text-navy text-base mb-2">מסלול ארוך, כמה מדינות, נסיעה יומיומית באגרה</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    כאן טרנספונדר נייד אישי (Uni או SunPass PRO, כ-15$ בקנייה חד פעמית) או תעריף קבוע ישתלמו יותר מהחיוב היומי של חברת ההשכרה.
                  </p>
                </div>
              </div>
              <div className="callout-tip mb-10">
                <div className="flex items-start gap-2">
                  <Scale size={16} className="text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-800 text-sm mb-1">כבר יש לכם חשבון אגרה מנסיעה קודמת?</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      ברוב מערכות ה-FasTrak וה-E-ZPass אפשר להוסיף את מספר הלוחית של הרכב השכור לחשבון הקיים שלכם, לתקופת ההשכרה בלבד, ולשלם ישירות בלי מעורבות של חברת ההשכרה. ודאו רק שהמכשיר המובנה ברכב מנוטרל, שלא תחויבו פעמיים על אותה אגרה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 . Before/after checklist */}
              <h2 id="checklist" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                לפני שיוצאים לדרך, ואחרי שחוזרים הביתה
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                  <p className="font-bold text-navy text-sm mb-3">לפני שיוצאים לדרך</p>
                  <div className="space-y-2.5">
                    {[
                      "החליטו מראש: תשלום לפי שימוש, טרנספונדר אישי, או תעריף קבוע.",
                      "אם מביאים טרנספונדר משלכם: ודאו שהמכשיר המובנה ברכב מנוטרל.",
                      "בדקו את המסמכים: רישיון ישראלי לבד לא תמיד מספיק.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-navy flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-gold/30 bg-[#fffbea] rounded-none p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">אחרי שחזרתם הביתה</p>
                  <div className="space-y-2.5">
                    {[
                      "בדקו את דוח כרטיס האשראי גם חודשיים אחרי הנסיעה, לא רק ביום ההחזרה.",
                      "מצאתם חיוב מוזר? בקשו מחברת ההשכרה את פירוט האגרה, לא רק את הסכום הכולל.",
                      "חלון תשלום ישיר אצל רשות האגרה כבר עבר? זה לא אומר שהחיוב יעלם, רק שהוא יגיע דרך חברת ההשכרה.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-amber-700 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">לפני שממשיכים לדבר על הדרך</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      וודאו שהמסמכים שלכם בסדר, לא רק שיטת התשלום. המדריך המלא על{" "}
                      <Link href="/posts/international-driving-permit" className="underline hover:text-red-800">
                        רישיון נהיגה בינלאומי (IDP)
                      </Link>{" "}
                      מסביר בדיוק מה חסר לפני שמגיעים לדלפק.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                אז מה, בעצם, כדאי לזכור?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                חזרנו לשאלה שפתחנו איתה: מה קורה כשעוברים תחת מצלמת אגרה בלי לשלם? עכשיו אתם יודעים את התשובה, וזה כבר חצי מהעבודה.
              </p>
              <blockquote className="border-r-4 border-gold pr-4 py-1 mb-8">
                <p className="text-lg text-navy font-semibold leading-relaxed italic">
                  המצלמה לא שואלת אם נרשמתם. היא רק שואלת מה מספר הלוחית.
                </p>
              </blockquote>
              <p className="text-base text-gray-700 leading-relaxed mb-10">
                תחליטו לפני שמתניעים, לא ליד המחסום שלא קיים. ותבדקו את דוח האשראי גם חודשיים אחרי שכבר שכחתם מהחופש. סעו בבטחה.
              </p>

              {/* Mobile-only author + disclaimer */}
              <div className="lg:hidden space-y-4 mb-8">
                <div className="border border-[#e7e9f0] rounded-none p-4 bg-white">
                  <AuthorByline note="המידע מבוסס על ניסיון אישי של מעל עשר שנים. אינני גוף רשמי. ממליץ לאמת פרטים מול חברת ההשכרה ומול רשות האגרה לפני הנסיעה." />
                </div>
                <div className="bg-[#fffbea] border border-gold/30 rounded-none p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך.
                  </p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-navy rounded-none p-7 text-center">
                <p className="text-white font-bold text-lg mb-2">מתכננים נסיעה לארה״ב?</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
                  עכשיו שאתם יודעים איך לא להיות מופתעים מחיוב אגרה, המדריך המלא שלנו יעזור לכם להימנע מעוד כמה טעויות נפוצות בהשכרת רכב בחו״ל.
                </p>
                <a href={booking.href} className="btn-gold text-sm px-8 py-2.5">
                  {booking.long}
                </a>
              </div>
            </article>

            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="space-y-4">
                <div className="bg-navy rounded-none p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-white font-bold text-sm leading-tight">מוכן להזמין?</p>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">
                    כל מה שצריך לדעת לפני שמזמינים רכב לחו״ל.
                  </p>
                  <a href={booking.href} className="btn-gold text-xs px-4 py-2 w-full block text-center">
                    {booking.short}
                  </a>
                </div>

                <div className="bg-[#fffbea] border border-gold/30 rounded-none p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך.
                  </p>
                </div>

                <div className="border border-[#e7e9f0] rounded-none p-4">
                  <p className="text-xs font-bold text-navy mb-2">מאמרים נוספים</p>
                  <div className="space-y-2">
                    <a href="/posts/international-driving-permit" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      איך מוציאים IDP בישראל ←
                    </a>
                    <a href="/posts/driving-license-abroad" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      רישיון נהיגה ישראלי בחו״ל ←
                    </a>
                    <a href="/guide" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
                      המדריך המלא להשכרת רכב ←
                    </a>
                  </div>
                </div>

                <div className="border border-[#e7e9f0] rounded-none p-4 bg-surface">
                  <div className="flex items-start gap-2">
                    <ExternalLink size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500 leading-relaxed">
                      תעריפי האגרה ועמלות חברות ההשכרה משתנים. תמיד בדקו את התעריף העדכני מול חברת ההשכרה ומול רשות האגרה לפני הנסיעה.
                    </p>
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
