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
  Camera,
  MapPin,
  Clock,
  CreditCard,
} from "lucide-react";

const mobileTocItems = [
  { id: "what-is-aet", label: "מה זה בדיוק אגרה אלקטרונית?" },
  { id: "where", label: "איפה זה קיים בפועל?" },
  { id: "systems", label: "E-ZPass, SunPass, FasTrak" },
  { id: "rental-programs", label: "איך חברות ההשכרה גובות" },
  { id: "no-pass", label: "עברתם אגרה בלי להירשם?" },
  { id: "alternatives", label: "האלטרנטיבה: הטרנספונדר שלכם" },
  { id: "tips", label: "טיפים לפני שיוצאים לדרך" },
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

const systems = [
  {
    name: "E-ZPass",
    coverage: "כ-20 מדינות: מניו אינגלנד במזרח, דרך פלורידה (בזכות SunPass PRO), ועד מינסוטה במערב.",
    note: "הרשת הכי נפוצה בארה״ב, אבל היא לא מכסה את קליפורניה או טקסס.",
  },
  {
    name: "SunPass / SunPass PRO",
    coverage: "פלורידה, פלוס ג'ורג'יה, קרוליינה הצפונית וטקסס, ועוד כל מדינות ה-E-ZPass.",
    note: "נכון ל-2026, הכיסוי הרחב ביותר מכל מדבקת אגרה בודדת בארה״ב.",
  },
  {
    name: "FasTrak",
    coverage: "קליפורניה בלבד.",
    note: "חוק פרטיות מדינתי חסם עד היום חיבור לרשתות אחרות. תיקון חקיקה מתקדם ב-2026 ועשוי לשנות את זה.",
  },
  {
    name: "TxTag / TollTag",
    coverage: "טקסס, פלוס אוקלהומה וקנזס במועדון נפרד משלהן.",
    note: "לא תואם ל-E-ZPass. אם שוכרים רכב בטקסס, זה המידע הרלוונטי.",
  },
];

const rentalPrograms = [
  {
    company: "Hertz . PlatePass",
    payPerUse: "האגרה המלאה + 9.99$ לכל יום שנעשה בו שימוש (בפלורידה, ג'ורג'יה וטקסס: 5.95$ בלבד).",
    flat: "אופציית \"הכל כלול\": 27.99$ ליום קבוע, עד תקרה של 139.95$ לשבוע, גם אם לא נגעתם בכביש אגרה.",
  },
  {
    company: "Avis / Budget . e-Toll",
    payPerUse: "6.95$ לכל יום שנעשה בו שימוש, עד תקרה של 34.95$ לכל תקופת ההשכרה (עד 30 יום).",
    flat: "e-Toll Unlimited: 10.99$-25.99$ ליום קבוע (תלוי בסניף האיסוף), עד 54.95$-181.93$ לשבוע.",
  },
  {
    company: "Enterprise / National / Alamo . TollPass",
    payPerUse: "4.95$-5.35$ לכל יום שימוש (עמלת \"TCC\") בתוספת האגרה עצמה, עד תקרה של 34.65$ לכל ההשכרה.",
    flat: "בצפון מזרח: שכירת טרנספונדר תמורת 3.95$ ליום, עד 19.75$. אין חיוב כלל בימים שלא נסעתם בכביש אגרה.",
  },
];

const tips = [
  {
    title: "תכננו לפי מספר הנסיעות, לא לפי הרגש.",
    text: "מתכננים לנסוע כל יום על כביש אגרה? אולי המסלול הקבוע (\"הכל כלול\") באמת ישתלם. יוצאים פעם או פעמיים בכל הנסיעה? התשלום לפי שימוש כמעט תמיד זול יותר.",
  },
  {
    title: "הביאו טרנספונדר נייד משלכם.",
    text: "מכשירים כמו Uni או SunPass PRO עולים כ-15$ בקנייה חד פעמית, עובדים בעשרות מדינות, ומדביקים לשמשה בתוך שתי דקות. הם עוקפים לגמרי את עמלת היום של חברת ההשכרה.",
  },
  {
    title: "רשמו את לוחית הרכב השכור לחשבון האישי שלכם.",
    text: "אם כבר יש לכם חשבון FasTrak, E-ZPass או דומה: אפשר להוסיף את מספר הרכב השכור לתקופת ההשכרה בלבד, ולשלם את התעריף הרגיל בלי שום מעורבות של חברת ההשכרה.",
  },
  {
    title: "בדקו את חלון התשלום הישיר.",
    text: "רשויות אגרה רבות נותנות ימים בודדים לשלם ישירות באתר שלהן, בלי לערב את חברת ההשכרה בכלל, לפני שהחיוב עובר אליה.",
  },
  {
    title: "אל תתעלמו מאגרה גם אם לא נרשמתם לשום דבר.",
    text: "המצלמה מצלמת בכל מקרה, נרשמתם או לא. ההתעלמות לא מבטלת את החיוב: היא רק מוסיפה חודשיים של המתנה עד שהוא מגיע.",
  },
  {
    title: "בדקו את דוח כרטיס האשראי גם אחרי שחזרתם הביתה.",
    text: "חיובי אגרה מרכב שכור יכולים לצוץ גם שישה עד שמונה שבועות אחרי סוף ההשכרה. תסמנו תזכורת ליומן.",
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
              בלי קופות, בלי מחסומים, בלי שום סימן שקרה משהו. רק מצלמה, וכרטיס אשראי שמתחייב שבועות אחר כך.
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
                אתם נוסעים מניו יורק לניו ג'רזי דרך מנהרת לינקולן. אין קופה, אין מחסום, אין אף שוטר שעוצר אתכם. אתם ממשיכים בנסיעה כאילו לא קרה כלום. שבועיים אחרי שהחזרתם את הרכב, מגיע חיוב בכרטיס האשראי. אגרה, פלוס עמלה על האגרה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                מכירים את כביש 6 בארץ? ככה זה עובד, בערך. רק שבארה״ב זה לא כביש אחד: זו שיטת התשלום הרגילה בעשרות כבישים, גשרים ומנהרות, בעשרות מדינות, עם כמה מערכות שכלל לא מדברות אחת עם השנייה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                ואני אומר את זה בלי דרמה. זו לא מלכודת, זו פשוט שיטה שונה מזו שהכרתם באירופה או בארץ. השאלה היחידה היא אם אתם מכירים את הכללים לפני שאתם נכנסים לרכב, או אחרי שהחיוב כבר בכרטיס.
              </p>

              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">נתון שכדאי לדעת</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      חיובי אגרה מרכב שכור בארה״ב מגיעים בממוצע 4 עד 8 שבועות אחרי סוף ההשכרה, כולל עמלת טיפול מחברת ההשכרה שיכולה להיות גבוהה מהאגרה עצמה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 . What is AET */}
              <h2 id="what-is-aet" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                מה זה בדיוק אגרה אלקטרונית (AET)?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                AET, קיצור של <strong>All-Electronic Tolling</strong>, זו שיטת אגרה בלי שום קופה פיזית. מצלמה מעל הכביש קוראת את לוחית הרישוי שלכם ברגע שאתם עוברים מתחתיה. אם יש לכם טרנספונדר פעיל ברכב, המערכת מזהה אותו ומחייבת את החשבון המקושר. אם אין טרנספונדר, או שהוא לא נקלט: המצלמה פשוט מצלמת את הלוחית, והחיוב ממשיך לרוץ בלעדיו.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                כשמדובר ברכב שכור, הלוחית רשומה על שם חברת ההשכרה. אז זה מה שקורה: רשות האגרה שולחת את החשבון לחברת ההשכרה, וזו מעבירה אותו אליכם, בתוספת עמלה משלה.
              </p>

              {/* Section 2 . Where */}
              <h2 id="where" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איפה זה קיים בפועל?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                כמעט בכל מדינה מרכזית לתיירות יש היום קטעי כביש, גשרים או מנהרות במעבר חשמלי בלבד, בלי אופציה לשלם במזומן בכלל:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "ניו יורק וניו ג'רזי: כל מעברי רשות הנמלים (Port Authority) סגורים לתשלום מזומן, כולל גשר ג'ורג' וושינגטון, מנהרת לינקולן ומנהרת הולנד.",
                  "פלורידה: רוב כבישי האגרה סביב אורלנדו ומיאמי הם אלקטרוניים בלבד.",
                  "קליפורניה: גשרי מפרץ סן פרנסיסקו וכבישי אגרה מרכזיים פועלים באותה שיטה.",
                  "טקסס ואילינוי: אותו עיקרון, עם מערכות מקומיות משלהם.",
                ].map((line, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pt-0.5">{line}</p>
                  </div>
                ))}
              </div>
              <div className="callout-info mb-10">
                <div className="flex items-start gap-3">
                  <Camera size={18} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-navy text-sm mb-1">הנקודה החשובה</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      לא צריך לתכנן מסלול מיוחד כדי "להיתקל" באגרה. אם אתם נוסעים בין ערים גדולות, עוברים גשר או מנהרה מרכזית, סביר שתעברו לפחות כביש אגרה אחד בלי לשים לב.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 . Regional systems */}
              <h2 id="systems" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                E-ZPass, SunPass, FasTrak: המערכות האזוריות
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                בניגוד לישראל, אין בארה״ב מדבקת אגרה אחת שעובדת בכל המדינה. יש כמה רשתות אזוריות, וחלקן לא מדברות אחת עם השנייה בכלל:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {systems.map((s) => (
                  <div key={s.name} className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                    <p className="font-bold text-navy text-base mb-2">{s.name}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.coverage}</p>
                    <div className="flex items-start gap-1.5 text-xs text-gray-500 border-t border-[#e7e9f0] pt-2">
                      <ExternalLink size={12} className="flex-shrink-0 mt-0.5" />
                      <span>{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 4 . Rental company programs */}
              <h2 id="rental-programs" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך חברות ההשכרה גובות על זה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                כל חברת השכרה גדולה מריצה תוכנית אגרה משלה, בדרך כלל עם שתי אופציות: תשלום לפי שימוש בפועל, או תעריף יומי קבוע שכולל הכול. הנה המספרים הרלוונטיים נכון ל-2026:
              </p>
              <div className="space-y-4 mb-6">
                {rentalPrograms.map((p) => (
                  <div key={p.company} className="border border-[#e7e9f0] rounded-none p-5 bg-white">
                    <p className="font-bold text-navy text-base mb-3">{p.company}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-[#f0f4ff] rounded-none p-3">
                        <p className="text-xs font-bold text-navy mb-1">תשלום לפי שימוש</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{p.payPerUse}</p>
                      </div>
                      <div className="bg-[#fffbea] rounded-none p-3">
                        <p className="text-xs font-bold text-amber-800 mb-1">תעריף קבוע / הכל כלול</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{p.flat}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="callout-tip mb-10">
                <p className="text-sm font-bold text-amber-800 mb-1">טיפ מניסיון</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  ברוב התוכניות האלה, אם לא השתמשתם בשום כביש אגרה באותו יום, לא מחייבים אתכם על אותו יום. חוץ מהתעריף ה"קבוע" (Unlimited), שגובה בין אם השתמשתם ובין אם לא.
                </p>
              </div>

              {/* Section 5 . No pass */}
              <h2 id="no-pass" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                לא נרשמתם לשום תוכנית, ובכל זאת עברתם אגרה? הנה מה שקורה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                כאן הנקודה שכמעט אף אחד לא מסביר בדלפק: המצלמה לא בודקת אם נרשמתם. היא פשוט מצלמת את הלוחית. אם עברתם כביש אגרה בלי טרנספונדר, החיוב ירוץ בדיוק כמו של מי שכן נרשם, רק בתוספת עמלת "טיפול מנהלי" שנוספת אוטומטית.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "המצלמה מצלמת את הלוחית ברגע המעבר.",
                  "רשות האגרה שולחת חשבון לחברת ההשכרה, הבעלים הרשומים של הרכב.",
                  "חברת ההשכרה מזהה מי שכר את הרכב באותו תאריך, ומחייבת את כרטיס האשראי שלכם.",
                  "לחיוב מתווספת עמלת טיפול, שיכולה להיות גבוהה יותר מהאגרה עצמה.",
                  "כל זה קורה בממוצע 4 עד 8 שבועות אחרי שהחזרתם את הרכב, לפעמים אחרי שכבר חזרתם לישראל.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">חשוב</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      זה לא תרחיש נדיר. ברוב הכבישים והגשרים החשמליים בארה״ב, מי שלא נרשם מראש עדיין מחויב אוטומטית. ההתעלמות מהאגרה לא חוסכת ממנה, היא רק דוחה את החיוב לרגע פחות נוח.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 . Alternatives */}
              <h2 id="alternatives" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                האלטרנטיבה: הטרנספונדר האישי שלכם
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                יש דרך לעקוף את עמלת היום של חברת ההשכרה כמעט לגמרי, והיא לא מסובכת כמו שזה נשמע.
              </p>
              <div className="space-y-4 mb-6">
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <CreditCard size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">1. טרנספונדר נייד אישי</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        מכשירים כמו Uni או SunPass PRO נמכרים תמורת כ-15$, מדביקים לשמשה הקדמית עם וואקום, ועובדים בעשרות מדינות. הם מחליפים לגמרי את הצורך בתוכנית האגרה של חברת ההשכרה: אתם משלמים את התעריף הרגיל, בלי שום עמלה יומית נוספת.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">2. רישום זמני לחשבון קיים</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        כבר יש לכם חשבון FasTrak, E-ZPass או דומה מנסיעה קודמת? ברוב המערכות אפשר להוסיף את מספר הלוחית של הרכב השכור לתקופת ההשכרה בלבד, ולשלם ישירות דרך החשבון שלכם.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">3. תשלום ישיר באתר רשות האגרה</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        לרוב רשויות האגרה יש חלון זמן קצר לתשלום ישיר באתר שלהן, לפני שהחיוב בכלל מגיע לחברת ההשכרה. זה משתנה מרשות לרשות, אז שווה לבדוק את זה מראש אם יודעים בדיוק באילו כבישים תיסעו.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="callout-tip mb-10">
                <p className="text-sm font-bold text-amber-800 mb-1">טיפ מניסיון</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  אם בחרתם להביא טרנספונדר משלכם, ודאו מול דלפק ההשכרה שהמכשיר המובנה ברכב מנוטרל או מכובה. שני טרנספונדרים פעילים באותו רכב יכולים לגרום לחיוב כפול על אותה אגרה.
                </p>
              </div>

              {/* Section 7 . Tips */}
              <h2 id="tips" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                טיפים מעשיים לפני שיוצאים לדרך
              </h2>
              <div className="space-y-3 mb-10">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 border border-[#e7e9f0] rounded-none p-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-navy text-sm mb-1">{tip.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">לפני שיוצאים לדרך</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      וודאו קודם שהמסמכים שלכם בסדר: רישיון ישראלי לבד לא תמיד מספיק. המדריך המלא על{" "}
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
                בואו נסכם את זה.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                האגרה האלקטרונית בארה״ב היא לא מלכודת, היא פשוט שיטה אחרת. הבעיה היחידה היא שאף אחד לא מסביר אותה לפני שמקבלים את המפתחות, ואז החיוב מגיע בשקט, שבועות אחרי שכבר שכחתם מהנסיעה.
              </p>
              <div className="border-r-4 border-gold bg-yellow-50 rounded-none p-5 mb-10">
                <p className="font-bold text-amber-800 mb-3">שלושה דברים לזכור:</p>
                <ol className="space-y-2">
                  {[
                    "בדקו מראש אם המסלול שלכם עובר בגשר, מנהרה או כביש אגרה חשמלי.",
                    "החליטו לפני ההשכרה: תשלום לפי שימוש, טרנספונדר אישי, או תעריף קבוע.",
                    "בדקו את דוח כרטיס האשראי גם חודשיים אחרי הנסיעה, לא רק ביום ההחזרה.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                      <span className="font-bold flex-shrink-0 w-5">{i + 1}.</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-10">
                שלושה כללים פשוטים, ואף חיוב לא יפתיע אתכם באמצע החופש הבא. סעו בבטחה.
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
