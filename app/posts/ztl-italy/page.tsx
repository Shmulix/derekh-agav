import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import type { Metadata } from "next";
import {
  AlertTriangle,
  XCircle,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  Camera,
  Hotel,
  MapPin,
  Euro,
  Clock,
} from "lucide-react";

const mobileTocItems = [
  { id: "what-is-ztl", label: "מה זה בדיוק ZTL?" },
  { id: "how-it-works", label: "איך זה עובד בפועל?" },
  { id: "sign-analysis", label: "איך מזהים אזור ZTL?" },
  { id: "cost", label: "כמה זה עולה?" },
  { id: "how-fine-arrives", label: "איך מגיע הקנס לרכב שכור?" },
  { id: "by-city", label: "ZTL לפי ערים" },
  { id: "hotel-inside", label: "המלון בתוך אזור ZTL?" },
  { id: "tips", label: "7 טיפים לא לקבל קנס" },
];

export const metadata: Metadata = {
  title: "ZTL באיטליה: המדריך המלא לאזורי תנועה מוגבלת ברכב שכור",
  description:
    "Zona Traffico Limitato באיטליה: איך לזהות, כמה זה עולה, ZTL לפי ערים (רומא, פירנצה, מילאנו, פיזה, ונציה) ואיך לא לקבל קנס. מדריך מעשי מניסיון.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/ztl-italy",
  },
  openGraph: {
    title: "ZTL באיטליה: אזורי תנועה מוגבלת ברכב שכור | דרך אגב",
    description:
      "מעל 60% מהתיירים שמשכירים רכב באיטליה נכנסים ל-ZTL בלי לדעת. כל מה שחייבים לדעת לפני שיוצאים לדרך.",
    url: "https://derekh-agav.vercel.app/posts/ztl-italy",
    type: "article",
    images: [
      {
        url: "/ztl-italy-hero.avif",
        width: 1920,
        height: 1080,
        alt: "ZTL Italy . Zona Traffico Limitato sign in Florence",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ZTL באיטליה: המדריך המלא לאזורי תנועה מוגבלת ברכב שכור",
  description:
    "Zona Traffico Limitato באיטליה: איך לזהות, כמה זה עולה, ZTL לפי ערים ואיך לא לקבל קנס ברכב שכור.",
  image: "https://derekh-agav.vercel.app/ztl-italy-hero.avif",
  datePublished: "2026-05-21",
  dateModified: "2026-05-21",
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
  url: "https://derekh-agav.vercel.app/posts/ztl-italy",
};

const cities = [
  {
    name: "רומא",
    icon: "🏛️",
    desc: "העיר הכי מסובכת. כמה אזורי ZTL שונים בשכונות שונות. Centro Storico הוא הקפדני ביותר. אזור Trastevere נפתח בערב ובסופ״ש.",
    hours: "משתנה לפי אזור",
    intensity: "high",
  },
  {
    name: "פירנצה",
    icon: "🏛",
    desc: "כנראה ה-ZTL הכי מפחיד באיטליה. כל המרכז ההיסטורי (אתר אונסקו) סגור. מצלמות בכל פינה. אלפי תיירים מקבלים קנסות כל שנה.",
    hours: "ב׳-ו׳: 7:30-20:00 | ש׳: 7:30-16:00",
    intensity: "high",
  },
  {
    name: "מילאנו",
    icon: "🏙",
    desc: "Area C: אזור גודש שדורש תשלום לכניסה. פלוס אזורי ZTL נוספים. מגבלות סביבתיות לפי סוג הרכב.",
    hours: "ב׳-ו׳: 7:30-19:30",
    intensity: "medium",
  },
  {
    name: "פיזה",
    icon: "🗼",
    desc: "ZTL פעיל 24 שעות ביממה. כן, גם בלילה. כן, גם בסופ״ש. באתם לראות את המגדל הנטוי? חנו מחוץ למרכז.",
    hours: "פעיל 24/7",
    intensity: "high",
  },
  {
    name: "בולוניה",
    icon: "🏰",
    desc: "מרכז היסטורי סגור. רחובות ימי הביניים הצרים עושים את הנהיגה בלתי אפשרית בכל מקרה.",
    hours: "ב׳-ו׳: 7:00-20:00",
    intensity: "medium",
  },
  {
    name: "ונציה",
    icon: "🚤",
    desc: "ZTL ייחודי. גישה לאי מוגבלת 24/7. חניה ב-Piazzale Roma או Tronchetto בלבד. אחרי זה: רגל או ואפורטו.",
    hours: "פעיל 24/7",
    intensity: "high",
  },
];

const signElements = [
  {
    letter: "A",
    icon: <Camera size={16} />,
    title: "מצלמת אכיפה",
    text: "מותקנת מעל השלט. מצלמת את לוחית הרישוי ברגע שחוצים את הקו. אין פלאש, אין רעש: רק צילום שקט שנשלח ישירות למערכת האכיפה.",
  },
  {
    letter: "B",
    icon: <XCircle size={16} />,
    title: "שלט ראשי . Zona Traffico Limitato",
    text: "העיגול האדום משמעו כניסה אסורה לרכבים לא מורשים. ברגע שרואים עיגול אדום עם הכיתוב הזה: אתם על סף אזור מוגבל. עצרו.",
  },
  {
    letter: "C",
    icon: <CheckCircle size={16} />,
    title: "לוח מידע מפורט",
    text: "מפרט מי אסור (רכבים ואופנועים לא מורשים) ומי מותר (נכים, משטרה, אמבולנס, כיבוי אש). כולל שעות פריקה: 8:00-10:00 ו-15:00-17:00.",
  },
  {
    letter: "D",
    icon: <AlertTriangle size={16} />,
    title: "שלט דיגיטלי . ZTL CLOSED",
    text: "האלמנט הכי חשוב בשטח. אותיות אדומות \"ZTL CLOSED\" משמען האזור סגור. \"VARCO NON ATTIVO\" בירוק משמעו אפשר לעבור. בספק? אל תיכנסו.",
  },
  {
    letter: "E",
    icon: <Camera size={16} />,
    title: "בקרה אלקטרונית",
    text: "Controllo elettronico degli accessi: הכל מצולם, הכל אוטומטי. אין מקום לטעויות או לשכנועים בדלפק. מספר טלפון חינם למידע.",
  },
];

const tips = [
  {
    title: "חנו מחוץ למרכז.",
    text: "כל עיר גדולה באיטליה מציעה חניונים בפריפריה עם קישור בתחבורה ציבורית למרכז. יותר זול, יותר בטוח, אפס סיכון לקנס.",
  },
  {
    title: "השתמשו ב-Waze.",
    text: 'לאפליקציה יש תכונת "ZTL Pass" שמנסה לנתב סביב אזורים מוגבלים. לא מושלם, אבל עוזר. יש גם אפליקציות ייעודיות: חפשו "ZTL Italy" בחנויות.',
  },
  {
    title: "בדקו לפני הנסיעה.",
    text: 'חפשו בגוגל "ZTL + שם העיר": רוב העיריות מפרסמות מפות ושעות פעילות. שתי דקות מחקר חוסכות מאות אירו.',
  },
  {
    title: "אל תעקבו אחרי רכבים אחרים.",
    text: 'רואים מכוניות נכנסות ל-ZTL וחושבים "אם הם נכנסים, אני גם"? הם תושבים עם היתר. אתם: לא.',
  },
  {
    title: "שלחו את מספר הרכב למלון מיד.",
    text: "קיבלתם את המפתח בדלפק התחנה? הודעה למלון לפני שמתניעים. זה הכלל מספר אחת.",
  },
  {
    title: "בימים ובשעות \"פתוחים\" בדקו שוב.",
    text: "בפירנצה אפשר להיכנס בימי ראשון ובחגים. אבל בדקו לפני: זה משתנה מעיר לעיר ומעונה לעונה.",
  },
  {
    title: "שמרו את כל הקבלות והתיעוד.",
    text: "אם קיבלתם קנס: יש לכם 60 יום לערער. תיעוד של רישום המלון או הזמנת חניון יכול להציל אתכם.",
  },
];

export default function ZtlItalyPost() {
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
            src="/ztl-italy-hero.avif"
            alt="ZTL באיטליה . Zona Traffico Limitato בפירנצה"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 via-navy/65 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-3">
              יעד . איטליה
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              ZTL באיטליה: אזורי התנועה המוגבלת
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl">
              כל מה שחייבים לדעת על ה-Zona Traffico Limitato לפני שנוסעים. מדריך מלא ומעודכן למאי 2026.
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
                <p className="text-slate-400 text-xs mt-0.5">
                  מומחה השכרת רכב בינלאומית · עודכן לאחרונה: מאי 2026
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

            {/* MAIN ARTICLE */}
            <article className="min-w-0">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
                <Link href="/" className="hover:text-navy">דרך אגב</Link>
                <ChevronLeft size={12} />
                <Link href="/posts" className="hover:text-navy">מאמרים</Link>
                <ChevronLeft size={12} />
                <span className="text-gray-600">ZTL באיטליה</span>
              </nav>

              {/* Intro */}
              <p className="text-lg text-gray-800 leading-relaxed mb-5">
                אתם יוצאים מארוחה במרכז פירנצה. עולים לרכב, מתניעים, נוסעים בנחת חזרה למלון. שום שוטר עוצר אתכם, שום מחסום פיזי, שום סימן שמשהו קרה. כמה חודשים אחר כך, מגיע מכתב הביתה. עם קנס שלא ידעתם עליו.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                ככה איטליה גובה מאות מיליוני אירו בשנה מתיירים שלא יודעים בכלל מה קרה להם. למערכת קוראים ZTL.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                ואני אומר את זה בלי כעס, באמת. זה רעיון מבריק. אף אחד אחר באירופה לא חשב על זה לפניהם, וצריך לתת לזה כבוד.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                הבעיה היחידה? אתם הצד שמשלם. ואני בצד שלכם. במאמר הזה אסביר לכם איך זה עובד, ואיך לא לגלות את זה רק כשהמכתב מגיע הביתה.
              </p>

              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">נתון שכדאי לדעת</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      למעלה מ-60% מהתיירים ששוכרים רכב באיטליה נכנסים לאזור ZTL בלי לדעת. הקנס? בין 80 ל-335 אירו. לכל כניסה. פלוס עמלה של חברת ההשכרה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 . What is ZTL */}
              <h2 id="what-is-ztl" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                מה זה בדיוק ZTL?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                ZTL זה ראשי תיבות של <strong>Zona a Traffico Limitato</strong>: "אזור תנועה מוגבלת". הרעיון פשוט: מרכזי הערים ההיסטוריות באיטליה הם אתרים עתיקים, צפופים, ורגישים. האיטלקים הבינו שאם כל מי שרוצה ייכנס לשם ברכב, המקומות האלה פשוט יתפוררו.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                אז מה עשו? סגרו את האזורים האלה לרכבים לא מורשים. מי שיכול להיכנס? תושבים עם היתר, אוטובוסים ציבוריים, מוניות, רכבי חירום, ולפעמים אורחי מלונות שנרשמו מראש. מי שלא יכול? כל השאר. כולל אתם עם רכב השכרה.
              </p>

              {/* Section 2 . How it works */}
              <h2 id="how-it-works" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך זה עובד בפועל?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                בכל כניסה לאזור ZTL מותקנות <strong>מצלמות אוטומטיות</strong> (נקראות "varchi elettronici"). המצלמה מצלמת את לוחית הרישוי שלכם ובודקת מול מאגר של רכבים מורשים. אם הרכב שלכם לא ברשימה: הקנס נוצר אוטומטית. בלי התערבות אנושית. בלי ויכוח. בלי "אבל".
              </p>

              <div className="callout-info mb-8">
                <div className="flex items-start gap-3">
                  <Camera size={18} className="text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-navy text-sm mb-1">הדבר הכי חשוב להבין</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      אין שום סימן פיזי שתפסו אתכם. אין פלאש, אין סירנה, אין שוטר. אתם ממשיכים לנסוע כאילו כלום לא קרה. ואז, חודשים אחרי: מגיע המכתב.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 . Sign analysis */}
              <h2 id="sign-analysis" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך מזהים אזור ZTL? ניתוח שלט אמיתי
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                הנה דוגמה אמיתית של כניסה לאזור ZTL באיטליה. בואו נפרק את כל האלמנטים:
              </p>

              <div className="grid md:grid-cols-[280px_1fr] gap-6 mb-6 items-start">
                <div className="bg-gradient-to-b from-gray-900 to-gray-700 rounded-none p-4 flex items-center justify-center">
                  <Image
                    src="/ztl-sign.avif"
                    alt="שלט ZTL Zona Traffico Limitato באיטליה"
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain max-h-[420px]"
                  />
                </div>

                <div className="space-y-3">
                  {signElements.map((el) => (
                    <div key={el.letter} className="flex items-start gap-3 border border-[#e7e9f0] rounded-none p-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
                        {el.letter}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gold">{el.icon}</span>
                          <p className="font-bold text-navy text-sm">{el.title}</p>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{el.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="callout-tip mb-10">
                <p className="text-sm font-bold text-amber-800 mb-1">טיפ מניסיון</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  לא בכל עיר יש שלטים דיגיטליים. בערים קטנות יש רק שלטי מתכת. השלט מופיע רגע לפני הכניסה, כשאתם כבר בתנועה. לא בטוחים? עצרו, חנו, קראו ברוגע. ואל תתבלבלו בין ZTL (מותר למורשים) לבין "Zona Pedonale" (אסור לכל רכב).
                </p>
              </div>

              {/* Section 4 . Cost */}
              <h2 id="cost" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                כמה זה עולה? בואו נדבר על הכסף.
              </h2>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border border-red-200 bg-red-50 rounded-none p-5">
                  <Euro size={20} className="text-red-600 mb-2" />
                  <p className="font-bold text-red-800 text-sm mb-1">הקנס עצמו</p>
                  <p className="text-2xl font-bold text-red-700 mb-1">80-335 €</p>
                  <p className="text-xs text-red-600 leading-relaxed">תלוי בעיר ובסוג העבירה.</p>
                </div>
                <div className="border border-amber-200 bg-amber-50 rounded-none p-5">
                  <Euro size={20} className="text-amber-700 mb-2" />
                  <p className="font-bold text-amber-800 text-sm mb-1">עמלת חברת ההשכרה</p>
                  <p className="text-2xl font-bold text-amber-700 mb-1">30-60 €</p>
                  <p className="text-xs text-amber-600 leading-relaxed">"עמלת טיפול" עבור העברת הפרטים שלכם למשטרה.</p>
                </div>
                <div className="border border-navy/30 bg-[#f0f4ff] rounded-none p-5">
                  <AlertTriangle size={20} className="text-navy mb-2" />
                  <p className="font-bold text-navy text-sm mb-1">וזכרו</p>
                  <p className="text-base font-bold text-navy mb-1">כל כניסה = קנס נפרד</p>
                  <p className="text-xs text-gray-600 leading-relaxed">נכנסתם ויצאתם מאותו אזור? שני קנסות.</p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-10">
                נשמע מוגזם? ככה זה עובד. נכנסתם למרכז פירנצה כדי להוריד מזוודות, יצאתם לחפש חניה, חזרתם לאסוף את בני הזוג? זה שלוש כניסות. שלושה קנסות. בלי הנחות.
              </p>

              {/* Section 5 . How fine arrives */}
              <h2 id="how-fine-arrives" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך מגיע הקנס ברכב שכור?
              </h2>

              <div className="space-y-3 mb-6">
                {[
                  "המצלמה מצלמת את לוחית הרישוי.",
                  "המערכת בודקת: הרכב לא מורשה, הקנס נוצר אוטומטית.",
                  "הקנס נשלח לחברת ההשכרה (הבעלים הרשומים של הרכב).",
                  "חברת ההשכרה מחייבת את כרטיס האשראי שלכם בעמלת \"טיפול מנהלי\" (30-60 אירו).",
                  "חברת ההשכרה מעבירה את הפרטים שלכם למשטרה המקומית.",
                  "הקנס הרשמי מגיע אליכם הביתה: לפעמים אחרי 6 עד 12 חודשים.",
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
                      תשלום תוך 5 ימים מקבלת ההודעה מזכה בהנחה של 30%. אל תתעלמו מהקנס: איטליה עוקבת אחרי עבריינים בינלאומיים, וזה יכול לגרום לבעיות בכניסות עתידיות למדינה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 . By city */}
              <h2 id="by-city" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                ה-ZTL לפי ערים: כי כל עיר זה כללים אחרים
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                אין חוק אחיד בכל איטליה. כל עירייה מחליטה לעצמה מתי ואיפה ה-ZTL פעיל. הנה הערים הראשיות:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="border border-[#e7e9f0] rounded-none p-5 bg-white  transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{city.icon}</span>
                      <p className="font-bold text-navy text-base">{city.name}</p>
                      {city.intensity === "high" && (
                        <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">קפדני</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{city.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 border-t border-[#e7e9f0] pt-2">
                      <Clock size={12} />
                      <span>{city.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 7 . Hotel inside ZTL */}
              <h2 id="hotel-inside" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                המלון שלכם בתוך אזור ZTL? הנה מה לעשות.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                זה מצב נפוץ: הזמנתם מלון מקסים במרכז ההיסטורי, ורק עכשיו גיליתם שהוא בתוך אזור ZTL. אל פאניקה. יש פתרון, ובחינם.
              </p>

              <div className="border border-green-200 bg-green-50 rounded-none p-5 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-800 mb-1">הכלל הזהב</p>
                    <p className="text-sm text-green-700 leading-relaxed">
                      ברגע שקיבלתם את מפתח הרכב מדלפק ההשכרה, שלחו את מספר הלוחית למלון. מיד. עוד <strong>לפני</strong> שאתם נוסעים לשם. המלון ירשום אתכם ב"רשימה הלבנה" (Lista Bianca) של העירייה, וזה ימנע את הקנס.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
                הנקודה שכמעט אף אחד לא מסביר: <strong>אי אפשר לשלוח את מספר הלוחית מראש</strong>, כי לא יודעים איזה רכב יקבלו עד הרגע שמגיעים לדלפק ההשכרה. כל מי שמספר לכם "תשלחו 48 שעות לפני" פשוט לא מבין איך זה עובד עם רכב שכור. הרישום הוא בזמן אמת: ברגע שיש לכם לוחית, מעבירים אותה, והמלון מזין אותה למערכת תוך דקות מול העירייה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                ההרשמה הזאת מכסה כניסה ויציאה לצורך פריקת מזוודות וחניה בחניון מאושר של המלון. היא <strong>לא</strong> מאפשרת לכם לנסוע ברכב בתוך מרכז ההיסטורי.
              </p>

              <div className="space-y-4 mb-6">
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <Hotel size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">1. הודיעו למלון מראש שאתם מגיעים ברכב</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        כשמזמינים, או בימים שלפני ההגעה, כתבו למלון שתגיעו ברכב שכור ותעבירו את מספר הלוחית ביום ההגעה. בקשו את האימייל או הוואטסאפ שאליו לשלוח את המספר. ככה כשתגיעו לדלפק ההשכרה, אתם כבר יודעים לאן לשלוח.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">2. שלחו את הלוחית ברגע שקיבלתם את הרכב</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        ברגע שיצאתם מדלפק ההשכרה עם המפתחות, שלחו למלון את מספר הלוחית, דגם וצבע הרכב. <strong>לפני שאתם נוסעים לכיוון המלון.</strong> למלונות יש מערכת ייעודית מול העירייה והם יכולים לרשום אתכם תוך דקות.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="callout-info">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-navy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">3. בקשו אישור בכתב שהרישום בוצע</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        אל תתקדמו לכיוון המלון לפני שקיבלתם הודעת חזרה שאומרת שהלוחית נרשמה. ואת ההודעה הזאת? שמרו אותה. אם בכל זאת יגיע קנס, היא תהיה ההוכחה שלכם בערעור.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="callout-tip mb-6">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={16} className="text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-amber-800 text-sm mb-1">קיבלתם קנס בכל זאת? אפשר לערער, גם בדיעבד.</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      אם המלון שכח לרשום אתכם, או שהרישום נעשה באיחור, יש לכם 60 יום מקבלת הקנס לערער. צרפו את אישור ההזמנה במלון, את ההתכתבות עם הקבלה, וכל הוכחה שהייתם אורחים באותו לילה. במקרים רבים העירייה מבטלת את הקנס לאחר שמוצג שהייתם זכאים לפטור. הרישום ברשימה הלבנה יכול להיעשות גם רטרואקטיבית, אם המלון מוכן לשתף פעולה.
                    </p>
                  </div>
                </div>
              </div>

              <div className="callout-warning mb-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-1">Airbnb</p>
                    <p className="text-sm text-red-700 leading-relaxed">
                      אם שוכרים דירת Airbnb ולא מלון, התהליך הרבה יותר מסובך. ברוב הערים, דירות פרטיות לא יכולות לרשום רכבים ברשימה הלבנה. ההמלצה היא לחנות מחוץ לאזור ה-ZTL בחניון ציבורי, ולהיכנס לאזור ההיסטורי ברגל או בתחבורה ציבורית. אם בכל זאת צריך להוריד מזוודות, מבקשים היתר זמני באתר של העירייה (תהליך באיטלקית).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 . 7 tips */}
              <h2 id="tips" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                7 טיפים פרקטיים כדי לא לקבל קנס
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

              {/* Conclusion */}
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                בואו נסכם את זה.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                ה-ZTL באיטליה הוא לא מלכודת תיירים. הוא מערכת אמיתית שנועדה לשמור על ערים בנות מאות שנים. אבל אם לא מכירים את הכללים, קל מאוד ליפול.
              </p>

              <div className="border-r-4 border-gold bg-yellow-50 rounded-none p-5 mb-10">
                <p className="font-bold text-amber-800 mb-3">שלושה דברים לזכור:</p>
                <ol className="space-y-2">
                  {[
                    "אל תיכנסו ברכב למרכז עיר היסטורי באיטליה בלי לבדוק אם יש ZTL.",
                    "שלחו את מספר הרכב למלון לפני שמגיעים.",
                    "במקרה של ספק: חנו מחוץ למרכז ותשתמשו בתחבורה ציבורית.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-amber-800">
                      <span className="font-bold flex-shrink-0 w-5">{i + 1}.</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-10">
                זהו. שלושה כללים פשוטים. תעקבו אחריהם, ואיטליה תישאר חוויה מדהימה. בלי הפתעות במכתב חודשים אחר כך. נסעו בהנאה.
              </p>

              {/* Mobile-only author + disclaimer */}
              <div className="lg:hidden space-y-4 mb-8">
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
                    המידע מבוסס על ניסיון אישי של מעל עשר שנים. אינני גוף רשמי. ממליץ לאמת פרטים קריטיים מול חברת ההשכרה לפני הנסיעה.
                  </p>
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
                <p className="text-white font-bold text-lg mb-2">מוכן להזמין את הרכב הבא שלך באיטליה?</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
                  עכשיו שאתה יודע איך להימנע מקנסות ZTL, השאלה הבאה היא פשוטה: איפה הכי כדאי להזמין? השוואה בין חברות ההשכרה המובילות, לפי מחיר, ביטוח ושירות.
                </p>
                <a href="/posts/rental-platforms" className="btn-gold text-sm px-8 py-2.5">
                  איפה הכי כדאי להזמין? השוואה מלאה ←
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
                    השוואה בין חברות ההשכרה המובילות לפי מחיר, ביטוח ושירות.
                  </p>
                  <a href="/posts/rental-platforms" className="btn-gold text-xs px-4 py-2 w-full block text-center">
                    איפה להזמין? ←
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

                <div className="border border-[#e7e9f0] rounded-none p-4 bg-surface">
                  <div className="flex items-start gap-2">
                    <ExternalLink size={14} className="text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500 leading-relaxed">
                      חוקי ZTL משתנים. תמיד בדקו את האתר הרשמי של העירייה לפני הנסיעה.
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
