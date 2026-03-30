"use client";

import { useState } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const tabs = [
  { id: "basic", label: "CDW / TP / LDW", sublabel: "ביטוח בסיסי" },
  { id: "scdw", label: "SCDW / Super TP", sublabel: "ללא השתתפות" },
  { id: "supplemental", label: "כיסוי משלים", sublabel: "דרך ברוקר" },
];

const covered = ["נזקי תאונה (CDW)", "גניבת הרכב (TP)"];
const notCovered = [
  { item: "שמשות ומראות", note: "נזק שלא קרה בתאונה רגילה" },
  { item: "צמיגים", note: "פנצ׳ר, קרע, נזק מדרך" },
  { item: "מרכב תחתון", note: "נזק לתחתית הרכב" },
  { item: "מצמד ומצבר", note: "כשל מכני" },
  { item: "אובדן מפתחות", note: "אובדן או גניבת מפתח" },
];
const neverCovered = [
  { item: "אלכוהול / סמים", note: "נהיגה תחת השפעה" },
  { item: "נהיגה בשטח לא סלול", note: "כביש עפר, שביל, חוף" },
  { item: "ריפודים פנימיים וגג", note: "נזק פנימי לרכב" },
  { item: "רשלנות מוכחת", note: "נזק שנגרם בזדון או אי זהירות" },
  { item: "אסון טבע", note: "שיטפון, ברד, רעידת אדמה" },
];

export default function InsuranceTabs() {
  const [active, setActive] = useState("basic");

  return (
    <div className="my-6">
      {/* Tab buttons */}
      <div className="flex gap-2 mb-0 overflow-x-auto pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-shrink-0 px-4 py-2.5 rounded-t-lg text-sm font-semibold border border-b-0 transition-colors ${
              active === tab.id
                ? "bg-white border-gray-200 text-navy"
                : "bg-gray-50 border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <span className="block text-xs font-bold">{tab.label}</span>
            <span className="block text-xs font-normal opacity-70">{tab.sublabel}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white border border-gray-200 rounded-b-lg rounded-tl-none p-5">
        {active === "basic" && (
          <div>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              הביטוח שמגיע בכל השכרה. מכסה נזקי תאונה וגניבה, אבל תמיד עם <strong>השתתפות עצמית</strong>: בדרך כלל 300 עד 3,000 יורו. אתה משלם עד לתקרה הזו, גם אם הנזק מכוסה.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>בארה״ב:</strong> תראה LDW בלבד — Loss Damage Waiver. זה לא ביטוח אחר, זה אותו עיקרון: CDW ו-TP מאוחדים לכיסוי אחד. אותה השתתפות עצמית, אותם חריגים.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1"><CheckCircle size={12} /> מכוסה</p>
                <ul className="space-y-1">
                  {covered.map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-orange-600 mb-1 flex items-center gap-1"><AlertCircle size={12} /> לא מכוסה בדרך כלל</p>
                <p className="text-xs text-gray-400 mb-2 leading-relaxed">יכול להיות מכוסה בחבילת פרימיום. תבדוק לפני.</p>
                <ul className="space-y-2">
                  {notCovered.map(({ item, note }) => (
                    <li key={item} className="text-xs text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </span>
                      <span className="text-gray-400 text-xs pr-3">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-xs font-bold text-red-700 mb-1 flex items-center gap-1"><XCircle size={12} /> לא מכוסה בשום מקרה, עם שום ביטוח</p>
              <p className="text-xs text-red-400 mb-2 leading-relaxed">לא הספק, לא כרטיס אשראי, לא שום חבילה. אין כיסוי.</p>
              <ul className="space-y-2">
                {neverCovered.map(({ item, note }) => (
                  <li key={item} className="text-xs text-gray-700">
                    <span className="font-semibold">{item}</span>
                    <span className="text-gray-400"> — {note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "scdw" && (
          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              אותו כיסוי של CDW/TP, אבל <strong>בלי השתתפות עצמית</strong>. במקרה של נזק, תשלם בדרך כלל רק דמי טיפול: 40 עד 60 יורו. הפיקדון עדיין נדרש.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
              <p className="text-sm font-bold text-green-800 mb-1">ההבדל בפועל</p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-500 mb-1">עם CDW בלבד:</p>
                  <p className="font-bold text-red-600">עד 3,000 יורו מכיסך</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">עם SCDW:</p>
                  <p className="font-bold text-green-700">40-60 יורו דמי טיפול בלבד</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              שמשות, צמיגים ומרכב תחתון עדיין לא תמיד מכוסים גם עם SCDW. תבדוק את תנאי הכיסוי הספציפי.
            </p>
          </div>
        )}

        {active === "supplemental" && (
          <div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              כיסוי שנרכש דרך ברוקר, סוכנות נסיעות, או עצמאית. לא מונע חיוב, אלא <strong>מחזיר כסף בדיעבד</strong>.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs font-bold text-green-700 mb-2 flex items-center gap-1"><CheckCircle size={12} /> מכוסה בכיסוי משלים</p>
                <ul className="space-y-1.5">
                  {notCovered.map(({ item }) => (
                    <li key={item} className="text-xs text-gray-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs font-bold text-red-700 mb-2 flex items-center gap-1"><XCircle size={12} /> לא מכוסה גם כאן</p>
                <ul className="space-y-1.5">
                  {neverCovered.map(({ item }) => (
                    <li key={item} className="text-xs text-gray-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {[
                { step: "1", text: "חברת ההשכרה מחייבת אותך קודם." },
                { step: "2", text: "אתה מגיש בקשת החזר עם חשבונית, קבלה ודו״ח נזק רשמי." },
                { step: "3", text: "הכיסוי מחזיר עד לתקרה שלו, בדרך כלל 2,500 עד 3,000 יורו." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {s.step}
                  </span>
                  <p className="text-sm text-gray-700">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border-r-4 border-gold p-3 rounded-sm">
              <p className="text-xs text-gray-700">
                <strong>בלי חיוב בפועל, אין מה להחזיר.</strong> בלי מסמכים, אין מה לתבוע. זה לא עניין של רצון טוב.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
