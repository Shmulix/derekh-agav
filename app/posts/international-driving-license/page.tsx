import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTOC from "@/components/guide/MobileTOC";
import MobileFloatingCTA from "@/components/guide/MobileFloatingCTA";
import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, ExternalLink, ChevronLeft, Info } from "lucide-react";

const mobileTocItems = [
  { id: "what-is-idp", label: "מה זה רישיון נהיגה בינלאומי?" },
  { id: "not-enough", label: "למה הרישיון הישראלי לא מספיק לבד?" },
  { id: "why-not-asked", label: "למה הדלפק לא תמיד מבקש?" },
  { id: "when-required", label: "כשהוא כן נדרש" },
  { id: "how-to-get", label: "איך מוציאים רישיון נהיגה בינלאומי" },
  { id: "looks-like", label: "איך הוא נראה" },
  { id: "validity", label: "כמה זמן בתוקף" },
];

export const metadata: Metadata = {
  title: "רישיון נהיגה בינלאומי (IDP) בישראל: המדריך המלא",
  description:
    "איך מוציאים רישיון נהיגה בינלאומי בישראל, כמה זה עולה, כמה זמן לוקח, ולמה הוא חובה גם אם הדלפק לא תמיד מבקש אותו.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/international-driving-license",
  },
  openGraph: {
    title: "רישיון נהיגה בינלאומי (IDP) בישראל | דרך אגב",
    description:
      "איך מוציאים IDP, כמה עולה, כמה זמן בתוקף, ולמה הרישיון הישראלי לא מספיק לבד בחו״ל.",
    url: "https://derekh-agav.vercel.app/posts/international-driving-license",
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
  url: "https://derekh-agav.vercel.app/posts/international-driving-license",
};

export default function InternationalDrivingLicensePost() {
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
            src="/idp.avif"
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
                      { href: "#why-not-asked", label: "למה הדלפק לא תמיד מבקש?" },
                      { href: "#when-required", label: "כשהוא כן נדרש" },
                      { href: "#how-to-get", label: "איך מוציאים רישיון נהיגה בינלאומי" },
                      { href: "#looks-like", label: "איך הוא נראה" },
                      { href: "#validity", label: "כמה זמן בתוקף" },
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
                אם קראת כבר על הרישיון הישראלי בחו״ל, טוב מאוד. אבל יש מקרים שבהם הרישיון הישראלי שלך, גם אם הוא תקין לגמרי, לא שווה כלום בלי המסמך שהולך לידו. המסמך הזה הוא ה-IDP ( International Driving Permit ), רישיון הנהיגה הבינלאומי, והוא הכרחי.
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

              <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-8">
                <Info size={20} className="text-navy flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy mb-1">רישיון הנהיגה הבינלאומי תמיד יחד עם הרישיון הישראלי</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    רישיון הנהיגה הבינלאומי לא תקף לבד. הוא חייב להיות מוצג תמיד יחד עם הרישיון הישראלי המקורי, הפלסטיק הפיזי בתוקף.
                    אחד בלי השני? כאילו אין כלום.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <h2 id="not-enough" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                למה הרישיון הישראלי לא מספיק לבד
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                כאן מגיע הבלבול הכי נפוץ.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                הרישיון הישראלי כתוב בעברית ובאנגלית. הוא עומד בתקן האירופאי. חברות ההשכרה ברחבי אירופה מכירות אותו. כל זה נכון. אבל הכרה לא שווה מספיקות.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הרבה ישראלים חושבים שכי יש להם רישיון באנגלית, הם פטורים מרישיון הנהיגה הבינלאומי. הם מגיעים לדלפק התחנה בביטחון, ואז מגלים שהפקיד מחפש גם מסמך נוסף.
                לא כי הוא מתנכל, כי זה מה שהנוהל דורש.
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
                למה הדלפק לא תמיד מבקש
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
                  לא לכולם עושים בדיקה מלאה. רוב האנשים עוברים בלי שנוגעים בתיק שלהם. אבל אם נבחרת לבדיקה ואין לך את מה שצריך, לא עולים על הטיסה.
                  אותו עיקרון חל על רישיון הנהיגה הבינלאומי. לא נבדקת עשר פעמים? טוב לך. הפעם האחת עשרה שבה יבדקו, ואין לך? הרכב לא יוצא.
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
                    זה המקרה הכי כואב. חברת הביטוח יכולה לטעון שנהגת ללא המסמכים החוקיים הנדרשים, ולכן הכיסוי הביטוחי פוקע.
                    הכסף שחסכת על רישיון הנהיגה הבינלאומי יכול לעלות לך בכמה אלפי אירו.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-8">
                <Info size={20} className="text-navy flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  רישיון הנהיגה הבינלאומי לא מבטיח שהביטוח יכסה הכל. אבל בלי רישיון הנהיגה הבינלאומי, חברת הביטוח יכולה להשתמש בזה כעילה לסירוב. עם רישיון הנהיגה הבינלאומי, אפשרות הסירוב הזו לא קיימת.
                </p>
              </div>

              {/* Section 5 */}
              <h2 id="how-to-get" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך מוציאים רישיון נהיגה בינלאומי בישראל
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                הידיעה הטובה: זה ממש קל. לוקח פחות מרבע שעה ועולה פחות מחמישה עשר שקלים.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { num: "1", title: "מגיעים לתחנת צילום מורשית", text: "רק בתחנות מורשות מטעם משרד התחבורה. החברות המורשות הן אופטיקה הלפרין ומרמנת. לא ניתן להוציא רישיון נהיגה בינלאומי בדואר, בטלפון, או על ידי מיופה כוח." },
                  { num: "2", title: "מביאים תעודה מזהה בתוקף", text: "תעודת זהות, דרכון, או רישיון נהיגה. אחת מהן מספיקה." },
                  { num: "3", title: "משלמים 10.10 ש״ח", text: "זה המחיר הרשמי עבור הפקת הצילום לרישיון הבינלאומי. ניתן לשלם בתחנה." },
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

              <a
                href="https://www.gov.il/he/service/drivers_license_photo_stations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:opacity-80 mb-3"
              >
                לרשימת תחנות הצילום המורשות באתר gov.il
                <ExternalLink size={14} />
              </a>
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

              {/* Section 6 */}
              <h2 id="looks-like" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
                איך הוא נראה
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                רישיון הנהיגה הבינלאומי הוא חוברת קטנה בפורמט A6. הכריכה מודפסת בכמה שפות, כולל את שם המדינה המנפיקה.
                בפנים: תמונת הנהג, הפרטים האישיים, ודרגת הרישיון, עם תרגום לאנגלית.
              </p>

              <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
                <Image
                  src="/idp.avif"
                  alt="רישיון נהיגה בינלאומי IDP ישראלי"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 text-center mb-8">דוגמה לרישיון נהיגה בינלאומי ישראלי</p>

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

              {/* Section 7 */}
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

              {/* Connecting to prior post */}
              <Link
                href="/posts/driving-license-abroad"
                className="block border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 hover:bg-[#e8eeff] transition-colors mb-10"
              >
                <p className="text-xs font-semibold text-navy mb-1">מאמר קשור</p>
                <p className="font-bold text-navy text-base mb-1">רישיון נהיגה ישראלי בהשכרת רכב בחו״ל</p>
                <p className="text-sm text-gray-600">
                  מה דלפק התחנה מקבל, מה לא, ומה קורה אם הרישיון פג או אבד לפני הנסיעה.
                </p>
                <span className="inline-block mt-3 text-navy text-sm font-semibold">לקריאה ←</span>
              </Link>

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
                <p className="text-white font-bold text-lg mb-2">מוכן לבחור את הרכב הבא שלך?</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
                  עכשיו שאתה יודע מה לקחת איתך, השאלה הבאה היא פשוטה: איפה הכי כדאי להזמין? כתבתי השוואה בין חברות ההשכרה המובילות. כולל מחיר, ביטוח ושירות.
                </p>
                <a href="/posts/rental-platforms" className="btn-gold text-sm px-8 py-2.5">
                  איפה הכי כדאי להזמין? השוואה מלאה ←
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
