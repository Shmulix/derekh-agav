import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { AlertTriangle, XCircle, CheckCircle, ExternalLink, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "רישיון נהיגה ישראלי להשכרת רכב בחו״ל: מה שחייבים לדעת",
  description:
    "הרישיון הישראלי בהשכרת רכב בחו״ל: מה מתקבל, מה לא, ומה קורה אם הרישיון פג או אבד לפני הנסיעה. מידע מעשי מניסיון אמיתי.",
  alternates: {
    canonical: "https://derekh-agav.vercel.app/posts/driving-license-abroad",
  },
  openGraph: {
    title: "רישיון נהיגה ישראלי להשכרת רכב בחו״ל | דרך אגב",
    description:
      "מה הדלפק מקבל ומה לא. רישיון פג, רישיון זמני, צילום בטלפון, שם שונה. כל הטעויות שגורמות לאנשים לפספס את הרכב שלהם.",
    url: "https://derekh-agav.vercel.app/posts/driving-license-abroad",
    type: "article",
    images: [
      {
        url: "/driving-license-post.avif",
        width: 1200,
        height: 630,
        alt: "רישיון נהיגה ישראלי להשכרת רכב בחו״ל",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "רישיון נהיגה ישראלי להשכרת רכב בחו״ל: מה שחייבים לדעת",
  description:
    "הרישיון הישראלי בהשכרת רכב בחו״ל: מה מתקבל, מה לא, ומה קורה אם הרישיון פג או אבד לפני הנסיעה.",
  image: "https://derekh-agav.vercel.app/driving-license-post.avif",
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
  url: "https://derekh-agav.vercel.app/posts/driving-license-abroad",
};

export default function DrivingLicenseAbroadPost() {
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
            src="/driving-license-post.avif"
            alt="רישיון נהיגה ישראלי להשכרת רכב בחו״ל"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/85 via-navy/60 to-transparent" />
          <div className="absolute bottom-0 right-0 left-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-3">
              מסמכים נדרשים
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
              רישיון נהיגה ישראלי בהשכרת רכב בחו״ל
            </h1>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              מה הדלפק מקבל, מה הוא לא מקבל, ואיך לא לפספס את הרכב שלך
            </p>
            {/* Author + date */}
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

        {/* Article body — 3-column layout on desktop */}
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="lg:grid lg:grid-cols-[220px_1fr_190px] lg:gap-10 items-start">

            {/* RIGHT SIDEBAR — תוכן עניינים */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-bold text-navy uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                  תוכן עניינים
                </p>
                <nav className="space-y-1">
                  {[
                    { href: "#documents", label: "הרישיון הישראלי" },
                    { href: "#invalid", label: "מה לא מתקבל" },
                    { href: "#why-strict", label: "למה כך" },
                    { href: "#renewal", label: "הרישיון פג?" },
                    { href: "#eu-standard", label: "תקן אירופאי" },
                    { href: "#idp", label: "ישראלי לא שווה בינלאומי" },
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
            </aside>

            {/* MAIN ARTICLE */}
            <article className="min-w-0">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-navy">דרך אגב</Link>
            <ChevronLeft size={12} />
            <Link href="/posts" className="hover:text-navy">מאמרים</Link>
            <ChevronLeft size={12} />
            <span className="text-gray-600">רישיון נהיגה ישראלי בחו״ל</span>
          </nav>

          {/* Intro */}
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            לקחת טיסה בלי דרכון זה לא קורה. כולם יודעים שבלי דרכון אין כניסה.
            אבל בהשכרת רכב בחו״ל, אנשים מגיעים לדלפק בלי רישיון ישראלי תקין, ומגלים את זה רק שם.
            אחרי שהמזוודות כבר הורדו. אחרי שהמשפחה כבר עומדת ליד.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            זה לא קורה כי אנשים רשלנים. זה קורה כי אף אחד לא הסביר להם מה בדיוק "רישיון תקין" אומר בפועל, בדלפק השכרת רכב בחו״ל.
            המאמר הזה נועד לסגור את הפער הזה.
          </p>

          {/* Section 1 — הרישיון הישראלי: המסמך שפותח הכל */}
          <h2 id="documents" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            הרישיון הישראלי: המסמך שפותח הכל
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            כדי לאסוף רכב שכור בחו״ל, הרישיון הישראלי הוא המסמך הראשון שהדלפק מבקש. בלעדיו, שום דבר לא זז.
            הרישיון הבינלאומי, כרטיס האשראי, ההזמנה, אף אחד מהם לא מספיק לבד. הרישיון הישראלי הוא הבסיס.
          </p>

          <div className="flex items-start gap-4 bg-surface border border-gray-200 rounded-xl p-5 mb-6">
            <div className="flex-shrink-0">
              <Image
                src="/driving-license.png"
                alt="אייקון רישיון נהיגה"
                width={48}
                height={48}
              />
            </div>
            <div>
              <p className="font-bold text-navy mb-1">שלושה תנאים שחייבים להתקיים במקביל:</p>
              <ul className="space-y-1.5">
                {[
                  "הרישיון הוא הכרטיס הפלסטיק המקורי, לא עותק ולא סריקה",
                  "הרישיון בתוקף בתאריך האיסוף",
                  "הרישיון על שם הנהג הרשום בהזמנה",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {/* Section 2 — מה הדלפק לא מקבל */}
          <h2 id="invalid" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            מה הדלפק לא מקבל: רשימת הכשלים שחוזרים שוב ושוב
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-5">
            כל אחת מהמקרים הבאים נגמר בדרך אחת: ללא רכב. אין חריגים, אין "בסדר הפעם", אין מנהל שאפשר לשכנע.
          </p>

          <div className="space-y-4 mb-8">

            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-bold text-red-800">רישיון פג תוקף</p>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                הדלפק בודק את תאריך התפוגה. אם הרישיון פג, הביטוח לא תקף, וחברת ההשכרה לא מוסרת רכב. נסיון לשכנע לא עובד. הפתרון היחיד הוא לחדש לפני הנסיעה.
              </p>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-bold text-red-800">רישיון זמני (נייר)</p>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                קיבלת מכתב מהמשרד שהרישיון החדש בדרך? הנייר הזה לא מוכר מחוץ לישראל. הדלפק רואה נייר, לא רישיון.
                זה לא מה שמסביר לך הפקיד כשנותן לך את המכתב, אבל ככה זה עובד בפועל.
              </p>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-bold text-red-800">צילום, תמונה בטלפון, סריקה</p>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                Apple Wallet לא עובד. תמונה בוואטסאפ לא עובדת. PDF לא עובד.
                הדלפק צריך לראות את הכרטיס הפיזי עצמו, כי הוא סורק אותו ומוודא שהוא אמיתי.
              </p>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-bold text-red-800">צילום מאושר / עותק נוטריוני</p>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                גם עותק מאושר על ידי נוטריון לא עובד. זה נכון עבור מסמכים רשמיים רבים, אבל לא לרישיון נהיגה בדלפק השכרה.
                אין תחליף לפלסטיק המקורי.
              </p>
            </div>

            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-2">
                <XCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-bold text-red-800">שם שונה מזה שמופיע בהזמנה</p>
              </div>
              <p className="text-sm text-red-700 leading-relaxed">
                הרישיון חייב להיות על שם הנהג הראשי כפי שנרשם בהזמנה. אם ישנה אי-התאמה בין שמות, גם אם מדובר בהבדל קטן, חברת ההשכרה רשאית לסרב.
                חשוב לוודא שהשם זהה בכל המסמכים ובהזמנה.
              </p>
            </div>

          </div>

          {/* Callout: no exceptions */}
          <div className="callout-warning mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 mb-1">אין חריגים ואין חלופה</p>
                <p className="text-sm text-red-700 leading-relaxed">
                  חברות ההשכרה לא ממציאות כללים. הן חייבות לוודא שלנהג יש רישיון תקין לפי חוק, כי בלי זה הביטוח לא חל.
                  אם תגיע עם רישיון לא תקין, אין מנהל שיעזור. אין כרטיס נאמנות שיפתח דלת. יש רכב שיישאר בחניה.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 — למה הכללים כל כך קשיחים */}
          <h2 id="why-strict" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            למה הכללים כאלה קשיחים
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            קודם כל, ההיגיון הפשוט: בדיוק כמו שאי אפשר לעלות למטוס בלי דרכון תקף, אי אפשר לנהוג ברכב שכור בלי רישיון תקף. זה לא פרוצדורה בירוקרטית. זה תנאי יסודי.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            מעבר להיגיון, שלוש סיבות ספציפיות מחייבות את חברת ההשכרה לוודא זאת:
          </p>
          <div className="space-y-3 mb-8">
            {[
              {
                title: "חוק מקומי",
                text: "ברוב המדינות, חברת ההשכרה מחויבת על פי חוק לוודא שהנהג מחזיק ברישיון תקף בעת האיסוף. מסירת רכב לנהג ללא רישיון תקין חושפת את החברה לאחריות פלילית.",
              },
              {
                title: "ביטוח",
                text: "פוליסת הביטוח של הרכב השכור מותנית בכך שהנהג מחזיק ברישיון תקף. נהג עם רישיון לא תקין נוהג ללא כיסוי. בתאונה, חברת הביטוח לא תשלם שקל.",
              },
              {
                title: "אחריות בתאונה",
                text: "אם קרתה תאונה ומתגלה שהנהג נהג ללא רישיון תקין, כל עלויות הנזק, לרכב, לרכוש, ולנפגעים, יכולות ליפול על הנהג באופן אישי. סכומים שיכולים להגיע לעשרות אלפי יורו.",
              },
            ].map((item) => (
              <div key={item.title} className="callout-info">
                <p className="font-bold text-navy text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Section 4 — הרישיון פג? יש מה לעשות */}
          <h2 id="renewal" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            הרישיון פג לפני הנסיעה? יש מה לעשות
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            יש פתרון מהיר. ניתן לשלם עבור חידוש הרישיון ולקבל אותו תוך יממה עסקית.
            זה שירות רשמי שמשרד התחבורה מפעיל, לא שמועה.
          </p>

          <div className="callout-tip mb-5">
            <p className="text-sm font-bold text-amber-800 mb-3">איך מזמינים רישיון מהיר</p>
            <ol className="space-y-2">
              {[
                { step: "משלמים את אגרת החידוש", detail: "באתר משרד התחבורה, בעמדת רישיומט, או במוקד *5678" },
                { step: "מצטלמים אם נדרש", detail: "רק אם משרד התחבורה מבקש עדכון תמונה. בתחנות הצילום המורשות." },
                { step: "נכנסים לאתר הרישיון המהיר (fastdl.co.il)", detail: "ביממת העסקים שלאחר התשלום, בוחרים אופן קבלה" },
                { step: "בוחרים איך לקבל", detail: "איסוף עצמי בנתב״ג, משלוח מהיר הביתה, איסוף מדפוס בארי, מסירה במעברי גבול נבחרים ועוד" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-amber-700">
                  <span className="font-bold text-amber-800 flex-shrink-0 w-5">{i + 1}.</span>
                  <span className="flex flex-col gap-0.5"><span className="font-semibold">{item.step}</span>{item.detail && <span className="font-normal text-amber-600">{item.detail}</span>}</span>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-2">
            תאריך תפוגת הרישיון מופיע על הכרטיס בשדה 4b. בדוק אותו לפחות חודש לפני הנסיעה.
            רישיון שפג ממש לפני הטיסה זה תרחיש נפוץ, ועם השירות המהיר אפשר לפתור אותו בזמן.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            שימו לב: אם נדרשת תמונה חדשה, ניתן לבחור את אופן ההפצה רק ביממת העסקים שלאחר הצילום, לא מיד אחרי התשלום.
            תכננו זאת בהתאם.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://www.gov.il/he/pages/fast_license"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:text-navy-dark"
            >
              חידוש מהיר של רישיון נהיגה באתר gov.il
              <ExternalLink size={14} />
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://fastdl.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:text-navy-dark"
            >
              אתר הרישיון המהיר: fastdl.co.il
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Section 5 — מקור רשמי */}
          <h2 id="eu-standard" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            הרישיון הישראלי בתקן אירופאי
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            הרישיון הישראלי הממוחשב עומד בתקן האירופאי (EU Standard). זה אומר שהפורמט שלו זהה לפורמט שמוכר בכל מדינות האיחוד האירופי ובמדינות רבות נוספות.
            הרישיון נושא תמונה של בעל הרישיון ומכיל את כל הפרטים שהדלפק צריך לאמת.
          </p>

          <div className="mb-5">
            <Image
              src="/RISHUY_driving_licence.avif"
              alt="רישיון נהיגה ישראלי בתקן אירופאי רצו ושמאל"
              width={600}
              height={380}
              className="rounded-xl w-full object-cover"
            />
            <p className="text-xs text-gray-400 mt-2 text-center">רישיון הנהיגה הישראלי בפורמט EU Standard. כל השדות מסומנים לפי התקן האירופאי.</p>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-3">
            מה מופיע על הרישיון (השדות הרלוונטיים):
          </p>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              { field: "4b", label: "תוקף הרישיון" },
              { field: "4d", label: "מספר תעודת זהות" },
              { field: "1–2", label: "שם מלא" },
              { field: "9", label: "דרגת הרישיון" },
              { field: "3", label: "תאריך לידה" },
              { field: "5", label: "מספר הרישיון" },
            ].map((item) => (
              <div key={item.field} className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2 text-sm">
                <span className="font-mono font-bold text-navy text-xs bg-navy/10 px-1.5 py-0.5 rounded">{item.field}</span>
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="callout-warning mb-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={17} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 text-sm mb-1">תקן אירופאי לא שווה רישיון בינלאומי</p>
                <p className="text-sm text-red-700 leading-relaxed">
                  העובדה שהרישיון הישראלי עומד בתקן האירופאי אומרת שהפורמט שלו סטנדרטי ומוכר לקריאה. היא לא אומרת שהוא מחליף את הרישיון הבינלאומי (IDP). שני מסמכים שונים לגמרי.
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://www.gov.il/he/pages/driving_licence_european_standard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline underline-offset-2 hover:text-navy-dark mb-8"
          >
            רישיון נהיגה ישראלי בתקן אירופאי באתר gov.il
            <ExternalLink size={14} />
          </a>

          {/* Section 6 — Transition to IDP */}
          <h2 id="idp" className="text-xl md:text-2xl font-bold text-navy mb-4 scroll-mt-24">
            רישיון ישראלי לא שווה רישיון בינלאומי
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            עד כאן, הרישיון הישראלי. הוא חובה, ובלעדיו אין כלום.
            אבל יש עוד מסמך שחייב ללכת איתו. לא במקומו.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            הרישיון הבינלאומי (International Driving Permit, IDP) הוא מסמך נלווה שלפי החוק הבינלאומי חייב להיות בידי כל נהג שנוהג מחוץ למדינת מגוריו.
            בפועל, לא כל דלפק מבקש אותו. אבל החוק קובע שהוא חובה, ובמקרים שבהם הדלפק יבקש אותו, בלעדיו אין רכב.
          </p>

          <div className="flex items-start gap-4 border border-navy/20 bg-[#f0f4ff] rounded-xl p-5 mb-6">
            <Image
              src="/icon-idp.png"
              alt="אייקון רישיון בינלאומי IDP"
              width={44}
              height={44}
              className="flex-shrink-0"
            />
            <div>
              <p className="font-bold text-navy mb-1">חובה חוקית שלא תמיד נאכפת</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                ב-70% מהמקרים הדלפק לא בודק IDP. אבל זה לא אומר שהוא לא נדרש. זה אומר שהפעם הפקיד לא בדק.
                ב-30% הנותרים הדלפק יבקש אותו, ואז אין ויכוח. IDP זול, פשוט ולוקח כמה דקות להוציא. אין סיבה לנסוע בלי.
              </p>
            </div>
          </div>

          <Link
            href="/posts/international-driving-license"
            className="block bg-navy text-white rounded-xl p-5 hover:bg-navy-dark transition-colors mb-10"
          >
            <p className="text-xs font-semibold text-gold mb-1">המאמר הבא</p>
            <p className="font-bold text-base mb-1">איך מוציאים רישיון נהיגה בינלאומי (IDP) בישראל</p>
            <p className="text-sm text-slate-300">
              איפה מוציאים, כמה זה עולה, כמה זמן לוקח, ומה לעשות אם שכחת לפני הנסיעה.
            </p>
            <span className="inline-block mt-3 text-gold text-sm font-semibold">קרא את המאמר ←</span>
          </Link>

          {/* Final CTA */}
          <div className="bg-navy rounded-xl p-7 text-center">
            <p className="text-white font-bold text-lg mb-2">מוכן לבחור את הרכב הבא שלך?</p>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
              עכשיו שהמסמכים ברורים, הצעד הבא הוא לבחור איפה להזמין נכון. השוואה בין הפלטפורמות המובילות, כולל מחירים, ביטוח ושירות.
            </p>
            <a href="/posts/rental-platforms" className="btn-gold text-sm px-8 py-2.5">
              איפה הכי כדאי להזמין? השוואה מלאה ←
            </a>
          </div>

            </article>

            {/* LEFT SIDEBAR — CTA + disclaimer */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="bg-navy rounded-xl p-5 text-center">
                  <p className="text-white font-bold text-sm mb-2 leading-snug">מוכן להזמין?</p>
                  <p className="text-slate-300 text-xs mb-3 leading-relaxed">
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
                    <a href="/posts/international-driving-license" className="block text-xs text-gray-600 hover:text-navy transition-colors leading-snug">
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
      <Footer />
    </>
  );
}
