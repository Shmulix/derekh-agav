"use client";

import { useState } from "react";
import Link from "next/link";

const docs = [
  {
    id: "israeli",
    icon: "🪪",
    title: "רישיון ישראלי",
    items: ["פיזי, מפלסטיק, בתוקף", "על שם הנהג שבהזמנה", "רישיון זמני: לא. צילום בטלפון: לא."],
    text: "הרישיון הישראלי חייב להיות הפלסטיק. לא צילום, לא אפליקציה, לא עותק. ראיתי אנשים מגיעים עם הדפסה מאתר משרד הרישוי. זה לא עובד. הרכב לא יוצא. ואם הרישיון שלך פג תוקף וקיבלת רישיון זמני בנייר בזמן שהקבוע בדרך, תדע: הנייר הזה לא מוכר בחו״ל. בכלל. הדלפק רואה נייר, לא רישיון. אם אתה עומד לנסוע ויש לך רישיון זמני, אתה צריך את הפלסטיק לפני הטיסה.",
    textLink: { label: "קרא את המדריך שלנו על רישיון נהיגה לחו״ל", href: "/posts/driving-license-abroad" },
  },
  {
    id: "international",
    icon: "🌍",
    title: "רישיון בינלאומי",
    items: ["70% לא מבקשים, 30% כן", "פיזי, על שם הנהג", "יחד עם הרישיון הישראלי"],
    text: "נכון ש-70% מהפעמים לא מבקשים אותו. אבל ה-30% האחרים אלה בדיוק הרגעים שבהם אתה עומד בדלפק אחרי טיסה ארוכה, עם מזוודות, ומחכה לרכב שלך. לא הזמן לגלות. הרישיון הבינלאומי מוציאים בנקודות מורשות של משרד התחבורה, לא בדואר. תכנן את זה לפני הנסיעה.",
    textLink: { label: "איך מוציאים רישיון נהיגה בינלאומי בישראל", href: "/posts/international-driving-license" },
  },
  {
    id: "passport",
    icon: "📘",
    title: "דרכון",
    items: ["פיזי בלבד — לא צילום, לא תמונה בטלפון", "אצלך, לא במלון", "בזמן איסוף הרכב"],
    text: "הדרכון חייב להיות הפיזי. לא צילום, לא תמונה בטלפון, לא סריקה בוואטסאפ. הדלפק צריך לראות את הדרכון האמיתי. אם אתה אוסף את הרכב ישר מהשדה תעופה אחרי הנחיתה, ברור שהדרכון אצלך. אבל יש מצב שאתה מגיע ליעד, מבלה כמה ימים, ורק אז הולך לאסוף רכב בעיר. שם בדיוק אנשים שוכחים. הדרכון נשאר בכספת המלון, ובדלפק מבקשים אותו. בלי דרכון, אין אימות. אין אימות, אין רכב.",
  },
  {
    id: "card",
    icon: "💳",
    title: "כרטיס אשראי",
    items: ["פיזי בלבד — לא ארנק דיגיטלי", "על שם הנהג הראשי", "לא דביט, לא כרטיס נטען", "קוד PIN ידוע — חייבים לדעת אותו"],
    text: "הכרטיס חייב להיות הפלסטיק הפיזי. Apple Pay, Google Pay וארנק דיגיטלי לא מתקבלים בדלפק. הספק צריך לראות את הכרטיס עצמו. בנוסף, חייבים לדעת את קוד ה-PIN הסודי של הכרטיס, כי הפיקדון נחסם עם הכנסת PIN. אנשים שלא יודעים את הקוד שלהם תקועים בדלפק. בדוק את זה לפני הטיסה. הכרטיס חייב להיות על שם הנהג הראשי, לא על שם בן הזוג או חבר שהשלים תשלום. הספק חוסם פיקדון על הכרטיס הזה. אם השם לא תואם, אין עסקה. דביט ופרה-פייד לא מתקבלים, גם אם הבנק שלך קורא להם \"כרטיס אשראי\". ויזה ומאסטרקארד הם הבטוחים — יש ספקים שלא מקבלים דיינרס או אמריקן אקספרס. לפני שנוסעים, תיכנס לתנאי ההזמנה של הספק ותוודא איזה כרטיסים הם מקבלים.",
  },
];

export default function DocTiles() {
  const [active, setActive] = useState("israeli");
  const activeDoc = docs.find((d) => d.id === active)!;

  return (
    <div className="mb-5">
      {/* Tiles grid */}
      <div className="grid grid-cols-2 gap-3 mb-0">
        {docs.map((doc) => {
          const isActive = doc.id === active;
          return (
            <button
              key={doc.id}
              onClick={() => setActive(doc.id)}
              className={`text-right rounded-lg p-4 border transition-all ${
                isActive
                  ? "bg-orange-50 border-orange-400 shadow-sm"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{doc.icon}</span>
                  <p className={`font-bold text-sm ${isActive ? "text-orange-700" : "text-navy"}`}>{doc.title}</p>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0 bg-navy text-white">
                  חובה
                </span>
              </div>
              <ul className="space-y-1">
                {doc.items.map((item) => (
                  <li key={item} className={`text-xs flex items-start gap-1.5 ${isActive ? "text-orange-800" : "text-gray-500"}`}>
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${isActive ? "bg-orange-400" : "bg-gray-300"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      {/* Active tile detail */}
      <div className="mt-3 border border-orange-200 rounded-lg bg-orange-50/60 px-5 py-4">
        <div className="flex gap-3 items-start">
          <span className="text-xl flex-shrink-0">{activeDoc.icon}</span>
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">{activeDoc.text}</p>
            {"textLink" in activeDoc && activeDoc.textLink && (
              <Link
                href={(activeDoc as { textLink: { href: string; label: string } }).textLink.href}
                className="inline-block mt-3 text-xs font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-900"
              >
                {(activeDoc as { textLink: { href: string; label: string } }).textLink.label} ←
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
