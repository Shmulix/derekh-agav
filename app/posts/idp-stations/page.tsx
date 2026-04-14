import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IDPLocations from "@/components/posts/IDPLocations";
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
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל — כל 66 התחנות המורשות",
  description:
    "רשימה מלאה של תחנות ההנפקה המורשות לרישיון נהיגה בינלאומי בישראל, מבוססת על נתוני משרד התחבורה. עדכני לאפריל 2026.",
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

        {/* Hero — navy, no image */}
        <section className="bg-navy py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">דרך אגב</Link>
              <ChevronLeft size={12} />
              <Link href="/posts" className="hover:text-white transition-colors">מאמרים</Link>
              <ChevronLeft size={12} />
              <span className="text-slate-300">תחנות הנפקת רישיון נהיגה בינלאומי</span>
            </nav>
            <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded mb-4">
              מסמכים נדרשים
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
              איפה מנפיקים רישיון נהיגה בינלאומי בישראל?
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              66 תחנות מורשות פרוסות ברחבי הארץ. חפש לפי עיר, קבל כתובת מדויקת, טלפון ושעות פתיחה. בלי לחפש בין עמודים.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 text-slate-200 px-3 py-1.5 rounded-full">66 תחנות</span>
              <span className="bg-white/10 text-slate-200 px-3 py-1.5 rounded-full">עדכני לאפריל 2026</span>
              <span className="bg-white/10 text-slate-200 px-3 py-1.5 rounded-full">מבוסס על נתוני משרד התחבורה</span>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 py-10">

          {/* Intro text */}
          <div className="prose prose-sm max-w-none mb-10 text-right">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              משרד התחבורה מנפיק רישיון נהיגה בינלאומי ב-66 תחנות מורשות ברחבי הארץ. לא צריך לתאם פגישה מראש, לא צריך לשלוח בקשות, לא צריך לחכות שבועות. מגיעים, משלמים 10.10 ₪, יוצאים עם רישיון. כל התהליך לוקח ברוב התחנות פחות מרבע שעה.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              הבעיה היחידה: אתר משרד התחבורה מפוזר, לא קל לחיפוש, ולפעמים פשוט לא נטען. אז לקחנו את הרשימה הרשמית ועשינו ממנה כלי שמחפש לפי עיר ומציג את מה שצריך: כתובת, טלפון ושעות פתיחה. בלי סינונים מיותרים, בלי לחפש בין עמודים.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              אם אתה לא יודע עדיין למה בכלל צריך רישיון נהיגה בינלאומי כשיש לך רישיון ישראלי, כדאי לקרוא קודם את{" "}
              <a href="/posts/international-driving-permit" className="text-navy font-semibold underline underline-offset-2 hover:opacity-75">
                המדריך המלא על IDP
              </a>
              . הקיצור: בלי רישיון בינלאומי אתה עלול להיפסל מהרכב בדלפק, גם אם הרישיון הישראלי שלך בתוקף מושלם.
            </p>
          </div>

          {/* What to bring */}
          <div className="bg-[#f0f4ff] border border-navy/15 rounded-xl p-5 mb-8">
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

          {/* Important note */}
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertTriangle size={17} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800 text-sm mb-1">לפני שמגיעים: וודאו שהתחנה מספקת את השירות</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                לא כל תחנת צילום מבצעת גם הנפקת רישיון נהיגה בינלאומי. כל התחנות ברשימה זו מורשות לכך מטעם משרד התחבורה. עדיין מומלץ להתקשר ולאשר לפני הגעה, במיוחד בתקופות חג.
              </p>
            </div>
          </div>

          {/* Search component */}
          <div className="mb-10">
            <IDPLocations />
          </div>

          {/* High season warning */}
          <div className="border border-orange-200 bg-orange-50 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertTriangle size={17} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-orange-800 text-sm mb-1">מרץ–יולי: עונת השיא</p>
              <p className="text-sm text-orange-700 leading-relaxed">
                לפני קיץ, תחנות ההנפקה עמוסות. תורים יכולים להתארך. אל תשאיר את זה לשבוע האחרון לפני הטיסה.
              </p>
            </div>
          </div>

          {/* Source note */}
          <div className="bg-surface border border-gray-200 rounded-xl p-5 mb-10">
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

          {/* Internal links */}
          <div className="space-y-3 mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">מאמרים קשורים</p>
            <Link
              href="/posts/international-driving-permit"
              className="block border border-gray-200 rounded-xl p-4 hover:border-navy/30 hover:bg-[#f0f4ff] transition-colors"
            >
              <p className="text-xs text-gray-400 mb-1">מדריך מלא</p>
              <p className="font-bold text-navy text-sm leading-snug">רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר</p>
              <p className="text-xs text-gray-500 mt-1">למה הרישיון הישראלי לא מספיק לבד, ומה קורה כשלא מביאים IDP</p>
            </Link>
            <Link
              href="/posts/driving-license-abroad"
              className="block border border-gray-200 rounded-xl p-4 hover:border-navy/30 hover:bg-[#f0f4ff] transition-colors"
            >
              <p className="text-xs text-gray-400 mb-1">מאמר</p>
              <p className="font-bold text-navy text-sm leading-snug">רישיון נהיגה ישראלי בהשכרת רכב בחו״ל</p>
              <p className="text-xs text-gray-500 mt-1">מה הדלפק מקבל ומה לא. רישיון פג, רישיון זמני, צילום בטלפון.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-xl p-7 text-center">
            <p className="text-white font-bold text-lg mb-2">הכל מסודר. עכשיו בוא נמצא רכב.</p>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed max-w-lg mx-auto">
              השוואה בין חברות ההשכרה המובילות לפי מחיר, ביטוח ושירות. כולל טיפים מה לבדוק לפני שמאשרים.
            </p>
            <Link href="/posts/rental-platforms" className="btn-gold text-sm px-8 py-2.5">
              איפה הכי כדאי להזמין? השוואה מלאה ←
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
