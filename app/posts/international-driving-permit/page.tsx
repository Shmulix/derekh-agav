import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import IDPGallery from "@/components/posts/IDPGallery";
import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, ExternalLink, ChevronLeft, Info } from "lucide-react";

const mobileTocItems = [
  { id: "what-is-idp", label: "מה זה רישיון נהיגה בינלאומי?" },
  { id: "not-enough", label: "למה הרישיון הישראלי לא מספיק לבד?" },
  { id: "why-not-asked", label: "למה חברות השכרה לא תמיד מבקשות את רישיון הנהיגה הבינלאומי?" },
  { id: "when-required", label: "כשהוא כן נדרש" },
  { id: "which-countries", label: "באיזו מדינה צריך רישיון בינלאומי?" },
  { id: "validity", label: "כמה זמן בתוקף" },
  { id: "conventions", label: "אמנת 1949 לעומת 1968: מה זה אומר לך בפועל" },
  { id: "japan", label: "רישיון בינלאומי ליפן" },
  { id: "how-to-get", label: "איך מוציאים רישיון נהיגה בינלאומי" },
  { id: "stations", label: "כל תחנות ההנפקה בישראל" },
  { id: "looks-like", label: "איך הוא נראה" },
  { id: "faq", label: "שאלות נפוצות" },
];

export const metadata: Metadata = {
  title: "רישיון נהיגה בינלאומי (IDP) בישראל: המדריך המלא",
  description:
    "איך מוציאים רישיון נהיגה בינלאומי בישראל, כמה זה עולה, כמה זמן לוקח, ולמה הוא חובה גם אם הדלפק לא תמיד מבקש אותו.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/international-driving-permit",
  },
  openGraph: {
    title: "רישיון נהיגה בינלאומי (IDP) בישראל | דרך אגב",
    description:
      "איך מוציאים רישיון נהיגה בינלאומי, כמה עולה, כמה זמן בתוקף, ולמה הרישיון הישראלי לא מספיק לבד בחו״ל.",
    url: "https://derekh-agav.vercel.app/posts/international-driving-permit",
    type: "article",
    images: [
      {
        url: "/idp.avif",
        width: 1200,
        height: 630,
        alt: "רישיון נהיגה בינלאומי IDP",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "רישיון נהיגה בינלאומי (IDP) בישראל: המדריך המלא",
  description:
    "איך מוציאים רישיון נהיגה בינלאומי בישראל, כמה זה עולה, כמה זמן לוקח, ולמה הוא חובה גם אם הדלפק לא תמיד מבקש.",
  image: "https://derekh-agav.vercel.app/idp.avif",
  datePublished: "2026-04-09",
  dateModified: "2026-04-14",
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
  url: "https://derekh-agav.vercel.app/posts/international-driving-permit",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "דרך אגב",
      item: "https://derekh-agav.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "מאמרים",
      item: "https://derekh-agav.vercel.app/posts",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "רישיון נהיגה בינלאומי (IDP)",
      item: "https://derekh-agav.vercel.app/posts/international-driving-permit",
    },
  ],
};

export default function InternationalDrivingLicensePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="relative h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="/idp-hero.avif"
            alt="רישיון נהיגה בינלאומי IDP"
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
              רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              גם אם הדלפק לא ביקש, גם אם כולם אומרים שזה לא נחוץ
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

        {/* Article body */}
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr_190px] lg:gap-10 items-start">

            {/* RIGHT SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-5">

                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                    תוכן עניינים
                  </p>
                  <nav className="space-y-1">
                    {[
                      { href: "#what-is-idp", label: "מה זה רישיון נהיגה בינלאומי?" },
                      { href: "#not-enough", label: "למה הרישיון הישראלי לא מספיק?" },
                      { href: "#why-not-asked", label: "למה חברות השכרה לא תמיד מבקשות את רישיון הנהיגה הבינלאומי?" },
                      { href: "#when-required", label: "כשהוא כן נדרש" },
                      { href: "#which-countries", label: "באיזו מדינה צריך?" },
                      { href: "#validity", label: "כמה זמן בתוקף" },
                      { href: "#conventions", label: "אמנת 1949 לעומת 1968" },
                      { href: "#japan", label: "רישיון בינלאומי ליפן" },
                      { href: "#how-to-get", label: "איך מוציאים רישיון נהיגה בינלאומי" },
                      { href: "#stations", label: "כל תחנות ההנפקה בישראל" },
                      { href: "#looks-like", label: "איך הוא נראה" },
                      { href: "#faq", label: "שאלות נפוצות" },
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

            {/* MAIN ARTICLE */}
            <article className="min-w-0">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
                <Link href="/" className="hover:text-navy">דרך אגב</Link>
                <ChevronLeft size={12} />
                <Link href="/posts" className="hover:text-navy">מאמרים</Link>
                <ChevronLeft size={12} />
                <span className="text-gray-600">רישיון נהיגה בינלאומי (IDP)</span>
              </nav>

              {/* Intro */}
              <p className="text-lg text-gray-800 leading-relaxed mb-5">
                אם קראת כבר על הרישיון הישראלי בחו״ל, טוב מאוד. אבל יש מקרים שבהם הרישיון הישראלי שלך, גם אם הוא תקין לגמרי, לא שווה כלום בלי המסמך שהולך לידו. המסמך הזה הוא רישיון הנהיגה הבינלאומי (International Driving Permit, בקיצור IDP), והוא הכרחי.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                המאמר הזה יסביר מה זה רישיון הנהיגה הבינלאומי, למה הוא חובה לפי החוק הבינלאומי, למה הדלפק לא תמיד מבקש, ואיך מוציאים אותו בישראל תוך כמה דקות.
              </p>

              {/* Section 1 */}
              <h2 id="what-is-idp" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                מה זה רישיון הנהיגה הבינלאומי
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                IDP זה ראשי תיבות של International Driving Permit, בעברית: רישיון נהיגה בינלאומי.
                זה לא רישיון עצמאי ולא מחליף את הרישיון הישראלי. זה תרגום רשמי של הרישיון שלך לאנגלית, מוכר בינלאומית, ומאפשר לרשויות ולחברות השכרה בכל מקום בעולם לאמת את פרטי הנהג, גם אם הם לא קוראים עברית.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                הבסיס המשפטי שלו הוא אמנת וינה משנת 1968, אמנה בינלאומית שחתמו עליה עשרות מדינות, לפיה כל נהג שנוהג מחוץ למדינתו חייב לשאת רישיון נהיגה בינלאומי יחד עם הרישיון המקומי שלו.
                ישראל חתומה על האמנה. כלומר, לפי הדין הבינלאומי, כל ישראלי שנוהג בחו״ל חייב להחזיק רישיון נהיגה בינלאומי. לא מומלץ. חייב.
              </p>

              <div className="border border-red-200 bg-red-50 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-2">רישיון נהיגה בינלאומי לא תקף לבד — חובה להציגו יחד עם הרישיון הישראלי</p>
                    <p className="text-sm text-red-700 leading-relaxed mb-3">
                      הרישיון הבינלאומי הוא תרגום רשמי של הרישיון הישראלי. בלי המקור, התרגום לא שווה כלום. שניהם, פיזית, ביד. תמיד.
                    </p>
                    <p className="text-sm font-bold text-red-800 mb-1">מה לא עובד בדלפק:</p>
                    <ul className="space-y-1.5 text-sm text-red-700">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />רישיון בינלאומי בלי רישיון ישראלי פיזי. אין רכב.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />צילום של הרישיון הישראלי בטלפון. אין רכב.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />רישיון ישראלי זמני מנייר (שקיבלתם בזמן שהפלסטיק בדרך). אין רכב.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />רישיון בינלאומי בלבד, בלי הישראלי. אין רכב.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <h2 id="not-enough" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                למה הרישיון הישראלי לא מספיק לבד
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                כאן מגיע הבלבול הכי נפוץ.
              </p>

              {/* Quote from clients */}
              <div className="border-r-4 border-orange-400 bg-orange-50 pr-4 pl-3 py-3 mb-5 rounded-l-lg">
                <p className="text-sm font-bold text-orange-800 mb-1">"מה? אבל הרישיון הישראלי הוא בינלאומי!"</p>
                <p className="text-sm text-orange-700 leading-relaxed">
                  שמעתי את המשפט הזה מאות פעמים, מלקוחות שעמדו בדלפק התחנה בטוחים שהם מסודרים. לא. הרישיון הישראלי אינו רישיון נהיגה בינלאומי. שני מסמכים שונים לגמרי.
                </p>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-4">
                הרישיון הישראלי כתוב בעברית ובאנגלית. הוא עומד בתקן האירופאי. חברות ההשכרה ברחבי אירופה מכירות אותו. כל זה נכון. אבל הכרה לא שווה מספיקות.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הרבה ישראלים מגיעים לדלפק התחנה בביטחון, ואז מגלים שהפקיד מחפש גם מסמך נוסף. לא כי הוא מתנכל. כי זה מה שהנוהל דורש.
              </p>

              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800 mb-1">הרישיון הישראלי תקין. רישיון הנהיגה הבינלאומי הוא מסמך אחר לגמרי.</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      עמידה בתקן אירופאי אומרת שהפורמט סטנדרטי ומוכר לקריאה. היא לא אומרת שהרישיון הישראלי מחליף את רישיון הנהיגה הבינלאומי. שני מסמכים שונים עם שתי מטרות שונות.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <h2 id="why-not-asked" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                למה חברות השכרה לא תמיד מבקשות את רישיון הנהיגה הבינלאומי
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                זו השאלה שגורמת לכל הבלבול.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                הרבה אנשים שכרו רכב חמש פעמים ולא התבקשו פעם אחת להציג רישיון נהיגה בינלאומי. הם מסיקים שהוא לא נחוץ. זו הסקה לא נכונה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הדלפק לא מבקש מכמה סיבות: הפקיד מכיר את הרישיון הישראלי ומוותר על הבדיקה, הנוהל הפנימי של החברה שונה, יש לחץ של תור ארוך, או פשוט פיקוח לא עקבי.
                אבל כל הסיבות האלה שייכות לפקיד הספציפי שעמד מולך. הן לא אומרות שהחובה ירדה מהרישיון שלך.
              </p>

              <div className="bg-navy rounded-xl p-6 mb-8">
                <p className="text-white font-bold text-base mb-3 text-center">כמו בדיקת ביטחון בשדה התעופה</p>
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  לא בודקים את כולם. אבל כולם חייבים להיות מוכנים לבדיקה.
                  מי שנבחר ולא עומד בתנאים, לא עולה על הטיסה. ברכב זה בדיוק אותו דבר.
                  לא ביקשו ממך עשר פעמים? מזל. הפעם האחת עשרה שיבקשו ואין לך, הרכב נשאר בחניה.
                </p>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-8">
                ועוד משהו חשוב: הדלפק הוא לא הנקודה היחידה שבה רישיון הנהיגה הבינלאומי יכול להידרש.
                הכביש מלא בהפתעות שהדלפק לא יכול לחזות.
              </p>

              {/* Section 4 */}
              <h2 id="when-required" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                כשרישיון הנהיגה הבינלאומי כן נדרש בפועל
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                גם אם עברת את דלפק התחנה בלי בעיה, זה לא גמר. יש שני מצבים שבהם היעדר רישיון הנהיגה הבינלאומי יכול לעלות לך בהרבה.
              </p>

              <div className="space-y-4 mb-8">

                <div className="border border-red-200 bg-red-50 rounded-xl p-5">
                  <p className="font-bold text-red-800 mb-2">עצירה על ידי המשטרה</p>
                  <p className="text-sm text-red-700 leading-relaxed">
                    שוטר מקומי יכול לבקש את רישיון הנהיגה הבינלאומי בכל רגע. בלי רישיון הנהיגה הבינלאומי? אתה חשוף לקנס, ובמקרים מסוימים לעיכוב. לא כי אתה פושע, כי פורמלית אתה נוהג בלי המסמכים הנדרשים לפי החוק המקומי.
                  </p>
                </div>

                <div className="border border-red-200 bg-red-50 rounded-xl p-5">
                  <p className="font-bold text-red-800 mb-2">תאונה וביטוח</p>
                  <p className="text-sm text-red-700 leading-relaxed">
                    אני אישית לא שמעתי על מקרה מוכח שבו חברת ביטוח סירבה לשלם תביעה רק בגלל שהנהג לא היה עם רישיון בינלאומי. יתכן שזו אגדה עירונית. אבל בשביל עשרה שקלים ורבע שעה, אני לא בקטע לבדוק את זה על חשבון החופשה שלי.
                  </p>
                </div>

                <div className="border border-amber-300 bg-amber-50 rounded-xl p-5">
                  <p className="font-bold text-amber-900 mb-2">הטריק שלא יספרו לך בדלפק: פטנט עונת השיא</p>
                  <p className="text-sm text-amber-800 leading-relaxed mb-3">
                    בעונת השיא, כשביקוש הרכבים גבוה, יש מצב שבו הרכב שהזמנת חודשים מראש במחיר מוקדם שווה עכשיו, בדלפק, פי שניים או שלושה ממה ששילמת. נהג שמגיע ללא הזמנה מראש ישלם את המחיר היומי הנוכחי, הרבה יותר גבוה.
                  </p>
                  <p className="text-sm text-amber-800 leading-relaxed mb-3">
                    יש נציגים בדלפק שמבינים את החשבון הזה. אם הם מוצאים סיבה טכנית לגיטימית לסרב לך, הרכב חוזר למלאי ויוצא לנהג הבא בתעריף גבוה יותר. הם לא ייתפסו בשקר. כי טכנית הם צודקים.
                  </p>
                  <p className="text-sm font-bold text-amber-900 leading-relaxed">
                    העדר רישיון נהיגה בינלאומי הוא הזדמנות מושלמת לזה. דרישה חוקית לגיטימית, שאי אפשר לערער עליה. אין לך רישיון בינלאומי? אין רכב. עם רישיון בינלאומי, הנשק הזה לא קיים.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-8">
                <Info size={20} className="text-navy flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  אגדה עירונית או לא, רישיון הנהיגה הבינלאומי עולה עשרה שקלים ולוקח רבע שעה להוציא. אם אי פעם ייטענו נגדך שנהגת ללא המסמכים החוקיים, לא תרצה שהתשובה תהיה שחסכת עשרה שקלים.
                </p>
              </div>

              {/* Section 4b */}
              <h2 id="which-countries" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                באיזו מדינה צריך רישיון נהיגה בינלאומי?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                זו השאלה שכולם שואלים. "אני נוסע לאיטליה, צריך?" "לארה״ב?" "לגרמניה?"
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                התשובה שלי: בכל מדינה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                לא בגלל שאני מגזים. בגלל שזה מה שמשרד התחבורה קובע. ההנחיה הרשמית היא שרישיון נהיגה בינלאומי נדרש לנהיגה מחוץ לישראל. לא קיימת רשימה רשמית של מדינות שבהן הרישיון הישראלי לבדו מספיק. לא של משרד התחבורה, לא של שום גוף רשמי אחר.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                אני לא עושה רשימת מדינות "שלא דורשות רישיון נהיגה בינלאומי" בכוונה. כי מה שקורה בפועל הוא שגם במדינות שנחשבות ל"לא דורשות", יש נציגים בדלפק שדורשים. אמריקה, גרמניה, צרפת. עשיתי שכירויות בכולן. שמעתי על מקרים בכולן. הפקיד שעומד מולך לא קרא את אותה רשימה שקראת ברשת.
              </p>

              <div className="bg-navy rounded-xl p-6 mb-8">
                <p className="text-white font-bold text-base mb-3 text-center">למה אני לא כותב רשימת מדינות</p>
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  רשימת "מדינות שלא צריך בהן רישיון נהיגה בינלאומי" תיצור אצלך ביטחון שגוי. תגיע לדלפק בלי רישיון בינלאומי כי "קראתי שלא צריך", והפקיד שם ידרוש אותו. אני לא מוכן להיות הסיבה שבגללה נשארת בלי רכב.
                </p>
              </div>

              <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-8">
                <Info size={20} className="text-navy flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  אתה יוצא מישראל לנהוג על רכב שכור? לך תוציא רישיון נהיגה בינלאומי. זה עולה עשרה שקלים. זה לוקח רבע שעה. זה מבטל את כל הסיכונים האלה בבת אחת.
                </p>
              </div>

              {/* Section validity */}
              <h2 id="validity" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                כמה זמן הוא בתוקף
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                רישיון הנהיגה הבינלאומי בתוקף לשלוש שנים מיום ההנפקה, או עד שפג תוקף הרישיון הישראלי, לפי המוקדם מביניהם.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                מה זה אומר בפועל: אם הרישיון הישראלי שלך פג בעוד שנה, רישיון הנהיגה הבינלאומי שתוציא היום יהיה בתוקף שנה בלבד, לא שלוש.
                לפני נסיעה ארוכה או טיול מרוחק, כדאי לבדוק את שני המסמכים במקביל.
              </p>

              <div className="border border-gray-200 rounded-xl p-5 bg-surface mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-navy">3 שנים</p>
                    <p className="text-xs text-gray-500 mt-1">תוקף מקסימלי</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy">10.10 ₪</p>
                    <p className="text-xs text-gray-500 mt-1">עלות ההנפקה</p>
                  </div>
                </div>
              </div>

              {/* Section 4c */}
              <h2 id="conventions" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                אמנת 1949 לעומת 1968: מה זה אומר לך בפועל
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                יש שתי אמנות בינלאומיות שמסדירות את נושא רישיון הנהיגה הבינלאומי: אמנת ז׳נבה 1949 ואמנת וינה 1968. שתיהן קיימות במקביל, ומדינות שונות חתומות על אחת מהן, על שתיהן, או על אף אחת מהן.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="font-bold text-navy mb-2 text-sm">אמנת ז׳נבה 1949</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />תוקף הרישיון: שנה אחת</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />נפוצה יותר מחוץ לאירופה</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />יפן חתומה על אמנה זו בלבד</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />ישראל חתומה גם על אמנה זו (אושרר 1955)</li>
                  </ul>
                </div>
                <div className="border border-navy/30 rounded-xl p-4 bg-[#f0f4ff]">
                  <p className="font-bold text-navy mb-2 text-sm">אמנת וינה 1968</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0 mt-1.5" />תוקף הרישיון: שלוש שנים</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0 mt-1.5" />מרבית מדינות אירופה ועוד</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0 mt-1.5" />ישראל חתומה גם על אמנה זו (אושרר 1971)</li>
                  </ul>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-5">
                ישראל חתומה על שתי האמנות. הרישיון הבינלאומי הישראלי תקף לפי שתי האמנות ומוכר ברוב מדינות העולם. לרוב יעדי הנסיעה: אין בעיה. הכול עובד. יש חריגה אחת שחשוב להכיר.
              </p>

              {/* Section 4d */}
              <h2 id="japan" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                רישיון נהיגה בינלאומי ליפן: מה ישראלים חייבים לדעת
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                הרישיון הבינלאומי הישראלי תקף ביפן. יפן מופיעה ברשימת המדינות המוכרות. אין בעיה עם הכרה.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הבעיה היא בתוקף. יפן חתומה על אמנת 1949 בלבד. כשפקיד יפני בודק את הרישיון הבינלאומי שלך, הוא מיישם את כללי 1949. כלומר, מכיר בתוקף של שנה אחת מיום ההנפקה, לא שלוש. גם אם כתוב על הרישיון שלך שהוא תקף שלוש שנים.
              </p>

              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800 mb-2">נוסעים ליפן? כך מחשבים את התוקף</p>
                    <ul className="space-y-2 text-sm text-amber-700">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" /><span>הרישיון הבינלאומי חייב להיות בתוקף ביום הכניסה ליפן: לא יותר משנה מיום ההנפקה.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" /><span>מותר לנהוג מיום הכניסה ועד שנה מיום ההנפקה.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" /><span>דוגמה: הנפקתם רישיון בינלאומי ב-1 בינואר, נחתתם ביפן ב-1 במרץ. מותר לנהוג עד 1 בינואר של השנה הבאה, לא עד 1 במרץ.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" /><span>אם הרישיון הבינלאומי הונפק לפני יותר משנה ביום הנחיתה, הוא לא תקף. תוציאו חדש לפני הטיסה.</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-8">
                <Info size={20} className="text-navy flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  לא צריך לעשות כלום מיוחד בתחנת ההנפקה. הרישיון הבינלאומי הישראלי הרגיל תקף ביפן. רק וודאו שתאריך ההנפקה שלו לא עבר שנה ביום הנחיתה.
                </p>
              </div>

              {/* Section 5 */}
              <h2 id="how-to-get" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך מוציאים רישיון נהיגה בינלאומי בישראל
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הידיעה הטובה: זה ממש קל. מרגע שהגיע תורך בתחנה, כל התהליך לוקח כחמש דקות ועולה 10.10 ש״ח.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { num: "1", title: "מגיעים לתחנת הנפקה מורשית", text: "רק בתחנות מורשות מטעם משרד התחבורה. לא ניתן להוציא רישיון נהיגה בינלאומי בדואר, בטלפון, או על ידי מיופה כוח. רשימת כל 66 התחנות עם כתובות ושעות פתיחה — בהמשך הדף." },
                  { num: "2", title: "מביאים תעודה מזהה בתוקף", text: "תעודת זהות, דרכון, או רישיון נהיגה ישראלי. אחד מהם מספיק." },
                  { num: "3", title: "מצלמים במקום ומשלמים 10.10 ש״ח", text: "מינואר 2026 הצילום נלקח ישירות בתחנה. לא נעשה שימוש בתמונה ממאגר הנתונים. המחיר הרשמי הוא 10.10 ש״ח, ניתן לשלם בתחנה." },
                  { num: "4", title: "מקבלים את הרישיון במקום", text: "מדפיסים ומוסרים על המקום. לא מחכים, לא שולחים בדואר. יוצאים עם המסמך ביד." },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 bg-white">
                    <div className="w-8 h-8 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-bold text-navy text-sm mb-1">{step.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fake online IDP warning */}
              <div className="border border-red-200 bg-red-50 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800 mb-2">רישיון נהיגה בינלאומי אונליין? לא קיים. לא תקף. לא לגיטימי.</p>
                    <p className="text-sm text-red-700 leading-relaxed mb-3">
                      רק המדינה שהנפיקה את הרישיון המקומי שלך מוסמכת להנפיק את הרישיון הבינלאומי המתאים לו. בישראל: רק תחנות מורשות מטעם משרד התחבורה. אף גוף אחר, אף חברה, אף אתר אינטרנט, לא מוסמך לעשות זאת.
                    </p>
                    <p className="text-sm text-red-700 leading-relaxed mb-2">
                      מה שמוכרים אונליין תחת השם "International Driving Permit" — הקובצי PDF להדפסה, האפליקציות, הכרטיסים הדיגיטליים — הם מסמכים ללא כל תוקף חוקי. חברות ההשכרה יסרבו לקבל אותם. המשטרה לא תכיר בהם.
                    </p>
                    <p className="text-sm font-bold text-red-800">
                      רישיון נהיגה בינלאומי מוציאים רק פיזית, בתחנה מורשית בישראל. זה עולה 10.10 ש״ח. אין קיצורי דרך.
                    </p>
                  </div>
                </div>
              </div>

              {/* High season note */}
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                <AlertTriangle size={17} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800 text-sm mb-1">בחודשים מרץ עד יולי: קחו בחשבון תור</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    עצם ההנפקה לוקחת כחמש דקות. אבל בעונת השיא של הנסיעות לחו״ל, התחנות עמוסות יותר והמתנה יכולה להתארך. אל תשאירו את זה לשעות הבוקר של יום הטיסה. יום-יומיים לפני, ובבוקר מוקדם, זה תמיד יותר בטוח.
                  </p>
                </div>
              </div>

              {/* Photo update Jan 2026 */}
              <div className="bg-[#f0f4ff] border border-navy/20 rounded-xl p-5 mb-6 flex items-start gap-3">
                <Info size={17} className="text-navy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy text-sm mb-1">עדכון ינואר 2026: הצילום נלקח עכשיו בתחנה</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    עד סוף 2025, הרישיון הבינלאומי הודפס עם התמונה שנשמרה במאגר הנתונים של רישיון הנהיגה הישראלי. מינואר 2026 השתנה הנוהל: צילום חדש נלקח ישירות בתחנת ההנפקה בעת הבקשה. מגיעים, מצלמים במקום, מקבלים את הרישיון.
                  </p>
                </div>
              </div>

              <Link
                href="/posts/idp-stations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:opacity-80 mb-3"
              >
                לרשימת כל 66 תחנות ההנפקה המורשות עם חיפוש לפי עיר ←
              </Link>
              <br />
              <a
                href="https://www.gov.il/he/service/license-international"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:opacity-80 mb-8"
              >
                המידע הרשמי על הוצאת רישיון נהיגה בינלאומי באתר gov.il
                <ExternalLink size={14} />
              </a>

              <div className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800 mb-1">לא ניתן לעשות את זה מחו״ל</p>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      רישיון הנהיגה הבינלאומי מוציאים רק בישראל, לפני הנסיעה. אם שכחת ונזכרת בשדה התעופה, כבר מאוחר. תזמן את זה לפני שאתה עוזב.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 — Stations link */}
              <div id="stations" className="scroll-mt-24 border border-orange-200 bg-orange-50 rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-navy text-base mb-1">66 תחנות ברחבי הארץ — רשימה מלאה עם חיפוש</p>
                  <p className="text-sm text-gray-600 leading-relaxed">כתובת, טלפון ושעות לפי עיר. כל התחנות המורשות ממשרד התחבורה.</p>
                </div>
                <Link
                  href="/posts/idp-stations"
                  className="flex-shrink-0 bg-navy text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-navy/90 transition-colors whitespace-nowrap"
                >
                  לרשימה המלאה ←
                </Link>
              </div>

              {/* Section 7 */}
              <h2 id="looks-like" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך הוא נראה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                רישיון הנהיגה הבינלאומי הוא חוברת קטנה בפורמט A6. הכריכה מודפסת בכמה שפות, כולל את שם המדינה המנפיקה.
                בפנים: תמונת הנהג, הפרטים האישיים, ודרגת הרישיון, עם תרגום לאנגלית.
              </p>

              <IDPGallery />

              <div className="space-y-2 mb-8">
                {[
                  "תמיד מוצג יחד עם הרישיון הישראלי המקורי. אסור להציג אחד בלי השני.",
                  "כולל תמונה של הנהג, שם מלא, ופרטי הרישיון.",
                  "מודפס על ידי המדינה המנפיקה. לא ניתן לזייף, לא ניתן להחליף בצילום.",
                  "הפורמט זהה בכל מדינות העולם שחתמו על אמנת וינה.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 id="faq" className="text-xl md:text-2xl font-bold text-navy mb-5 scroll-mt-24">
                שאלות נפוצות
              </h2>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    { "@type": "Question", "name": "האם רישיון נהיגה בינלאומי הוא חובה לישראלים בחו״ל?", "acceptedAnswer": { "@type": "Answer", "text": "כן. לפי אמנת וינה 1968, שישראל חתומה עליה, כל ישראלי שנוהג מחוץ למדינתו חייב לשאת רישיון נהיגה בינלאומי יחד עם הרישיון הישראלי. חברות השכרה לא תמיד בודקות, אבל כשהן בודקות ואין, הרכב לא יוצא." } },
                    { "@type": "Question", "name": "כמה עולה רישיון נהיגה בינלאומי בישראל?", "acceptedAnswer": { "@type": "Answer", "text": "10.10 ש״ח. זה המחיר הרשמי הקבוע. משלמים ישירות בתחנת ההנפקה." } },
                    { "@type": "Question", "name": "כמה זמן לוקח להוציא רישיון נהיגה בינלאומי?", "acceptedAnswer": { "@type": "Answer", "text": "מרגע שהגיע תורך, התהליך לוקח כחמש דקות. בחודשים מרץ עד יולי יש לעיתים תור, כדאי להגיע מוקדם ולא להשאיר לרגע האחרון לפני הטיסה." } },
                    { "@type": "Question", "name": "האם אפשר להוציא רישיון נהיגה בינלאומי אונליין או בדואר?", "acceptedAnswer": { "@type": "Answer", "text": "לא. אי אפשר להוציא רישיון נהיגה בינלאומי בדואר, אונליין, בטלפון, או באמצעות מיופה כוח. חייבים להגיע פיזית לתחנת הנפקה מורשית." } },
                    { "@type": "Question", "name": "כמה זמן רישיון נהיגה בינלאומי בתוקף?", "acceptedAnswer": { "@type": "Answer", "text": "שלוש שנים מיום ההנפקה, או עד שפג תוקף הרישיון הישראלי, לפי המוקדם מביניהם. אם הרישיון הישראלי פג בעוד שנה, גם הרישיון הבינלאומי יהיה בתוקף שנה בלבד." } },
                    { "@type": "Question", "name": "האם רישיון נהיגה בינלאומי ישראלי תקף ביפן?", "acceptedAnswer": { "@type": "Answer", "text": "כן, אבל עם מגבלה: יפן חתומה על אמנת 1949 בלבד ומכירה בתוקף של שנה אחת מיום ההנפקה. הרישיון חייב להיות בתוקף ביום הכניסה ליפן. אם עבר יותר משנה מיום ההנפקה ביום הנחיתה, הוא לא תקף שם." } },
                    { "@type": "Question", "name": "האם רישיון נהיגה בינלאומי תקף בלי הרישיון הישראלי?", "acceptedAnswer": { "@type": "Answer", "text": "לא. הרישיון הבינלאומי הוא תרגום של הרישיון הישראלי. הוא לא תקף לבד. שניהם חייבים להיות איתך, פיזית, בדלפק ועל הכביש." } },
                    { "@type": "Question", "name": "האם אפשר להוציא רישיון נהיגה בינלאומי בנתב״ג?", "acceptedAnswer": { "@type": "Answer", "text": "לא. אין הנפקת רישיון נהיגה בינלאומי בנמל התעופה בן גוריון. צריך להגיע לאחת מ-66 התחנות המורשות ברחבי הארץ לפני הנסיעה." } },
                    { "@type": "Question", "name": "האם הרישיון הבינלאומי מכסה נהיגת אופנוע?", "acceptedAnswer": { "@type": "Answer", "text": "כן, אם הרישיון הישראלי כולל קטגוריית אופנוע (A, A1 או A2) — הרישיון הבינלאומי יכסה את אותן קטגוריות בדיוק. אם הרישיון מוגבל לקטגוריה B בלבד, הרישיון הבינלאומי לא יאפשר נהיגת אופנוע בחו״ל." } },
                  ]
                })}}
              />
              <div className="space-y-3 mb-10">
                {[
                  { q: "האם רישיון נהיגה בינלאומי הוא חובה לישראלים בחו״ל?", a: "כן. לפי אמנת וינה 1968, שישראל חתומה עליה, כל ישראלי שנוהג מחוץ למדינתו חייב לשאת רישיון נהיגה בינלאומי יחד עם הרישיון הישראלי. חברות השכרה לא תמיד בודקות, אבל כשהן בודקות ואין, הרכב לא יוצא." },
                  { q: "כמה עולה רישיון נהיגה בינלאומי בישראל?", a: "10.10 ש״ח. זה המחיר הרשמי הקבוע. משלמים ישירות בתחנת ההנפקה." },
                  { q: "כמה זמן לוקח להוציא רישיון נהיגה בינלאומי?", a: "מרגע שהגיע תורך, התהליך לוקח כחמש דקות. בחודשים מרץ עד יולי יש לעיתים תור בתחנות. כדאי להגיע מוקדם ולא להשאיר לרגע האחרון לפני הטיסה." },
                  { q: "האם אפשר להוציא רישיון נהיגה בינלאומי אונליין או בדואר?", a: "לא. אי אפשר להוציא רישיון נהיגה בינלאומי בדואר, אונליין, בטלפון, או באמצעות מיופה כוח. חייבים להגיע פיזית לתחנת הנפקה מורשית." },
                  { q: "כמה זמן רישיון נהיגה בינלאומי בתוקף?", a: "שלוש שנים מיום ההנפקה, או עד שפג תוקף הרישיון הישראלי, לפי המוקדם מביניהם. אם הרישיון הישראלי שלך פג בעוד שנה, גם הרישיון הבינלאומי יהיה בתוקף שנה בלבד." },
                  { q: "האם רישיון נהיגה בינלאומי ישראלי תקף ביפן?", a: "כן, אבל עם מגבלה: יפן מכירה בתוקף של שנה אחת מיום ההנפקה בלבד. הרישיון חייב להיות בתוקף ביום הכניסה ליפן. אם עבר יותר משנה מיום ההנפקה ביום הנחיתה, הוא לא תקף שם." },
                  { q: "האם רישיון נהיגה בינלאומי תקף בלי הרישיון הישראלי?", a: "לא. הרישיון הבינלאומי הוא תרגום של הרישיון הישראלי. הוא לא תקף לבד. שניהם חייבים להיות איתך פיזית, גם בדלפק וגם על הכביש." },
                  { q: "האם אפשר להוציא רישיון נהיגה בינלאומי בנתב״ג?", a: "לא. אין הנפקת רישיון נהיגה בינלאומי בנמל התעופה בן גוריון. אי אפשר לסדר את זה ברגע האחרון לפני הטיסה. צריך להגיע לאחת מ-66 התחנות המורשות ברחבי הארץ. יום-יומיים לפני הנסיעה זה הזמן הנכון." },
                  { q: "האם הרישיון הבינלאומי מכסה נהיגת אופנוע?", a: "כן, אם הרישיון הישראלי שלך כולל קטגוריית אופנוע (A, A1 או A2) — הרישיון הבינלאומי יכסה את אותן קטגוריות בדיוק. אם הרישיון הישראלי מוגבל לקטגוריה B בלבד, הרישיון הבינלאומי לא יאפשר נהיגת אופנוע בחו״ל." },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-5 py-3">
                      <p className="font-bold text-navy text-sm">{item.q}</p>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Article navigation — prev / next */}
              <div className="space-y-3 mb-10">
                <Link
                  href="/posts/driving-license-abroad"
                  className="block border border-gray-200 rounded-xl p-4 hover:border-navy/40 hover:bg-[#f0f4ff] transition-colors"
                >
                  <p className="text-xs text-gray-400 mb-1">→ המאמר הקודם</p>
                  <p className="font-bold text-navy text-sm leading-snug">רישיון נהיגה ישראלי בחו״ל</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">מה דלפק התחנה מקבל ומה לא</p>
                </Link>
                <Link
                  href="/posts/idp-stations"
                  className="block bg-navy rounded-xl p-5 hover:bg-navy/90 transition-colors"
                >
                  <p className="text-xs text-gold font-semibold mb-1">המאמר הבא ←</p>
                  <p className="font-bold text-white text-base leading-snug mb-1">איפה מנפיקים רישיון נהיגה בינלאומי בישראל?</p>
                  <p className="text-sm text-slate-300 leading-snug">66 תחנות מורשות ברחבי הארץ עם חיפוש לפי עיר. כתובת, טלפון ושעות פתיחה לכל תחנה.</p>
                  <span className="inline-block mt-3 text-gold text-sm font-semibold">לקריאה ←</span>
                </Link>
              </div>

              {/* Mobile: author + CTA + disclaimer */}
              <div className="lg:hidden space-y-4 mb-8">

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
                    המידע מבוסס על ניסיון אישי של מעל עשר שנים. אינני גוף רשמי. ממליץ לאמת פרטים קריטיים מול חברת ההשכרה לפני הנסיעה.
                  </p>
                </div>

                <div className="bg-[#fffbea] border border-gold/30 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-800 mb-1">גילוי נאות</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    האתר משתמש בקישורי שותפות. הזמנה דרך הקישורים מסייעת להמשך פעילות האתר ללא עלות נוספת עבורך.
                  </p>
                </div>

              </div>

              {/* Final CTA */}
              <div className="bg-navy rounded-xl p-7 text-center">
                <p className="text-white font-bold text-lg mb-2">אז איפה בדיוק עושים את זה?</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
                  66 תחנות מורשות ברחבי הארץ, עם חיפוש לפי עיר. כתובת, טלפון ושעות פתיחה לכל תחנה.
                </p>
                <a href="/posts/idp-stations" className="btn-gold text-sm px-8 py-2.5">
                  איפה מנפיקים רישיון נהיגה בינלאומי בישראל ←
                </a>
              </div>

            </article>

            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">

                <div className="bg-navy rounded-xl p-5">
                  <p className="text-white font-bold text-sm leading-tight mb-3">מוכן להזמין?</p>
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
