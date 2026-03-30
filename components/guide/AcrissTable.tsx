"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    id: "category",
    title: "אות 1 — קטגוריה",
    subtitle: "Category",
    rows: [
      ["M", "מיני", "Mini"], ["N", "מיני אליט", "Mini Elite"],
      ["E", "קטנה", "Economy"], ["H", "קטנה אליט", "Economy Elite"],
      ["C", "קומפקט", "Compact"], ["D", "קומפקט אליט", "Compact Elite"],
      ["I", "בינונית", "Intermediate"], ["J", "בינונית אליט", "Intermediate Elite"],
      ["S", "סטנדרט", "Standard"], ["R", "סטנדרט אליט", "Standard Elite"],
      ["F", "גדולה", "Fullsize"], ["G", "גדולה אליט", "Fullsize Elite"],
      ["P", "פרימיום", "Premium"], ["U", "פרימיום אליט", "Premium Elite"],
      ["L", "יוקרה", "Luxury"], ["W", "יוקרה אליט", "Luxury Elite"],
      ["O", "גדול במיוחד", "Oversize"], ["X", "מיוחד", "Special"],
    ],
  },
  {
    id: "type",
    title: "אות 2 — סוג מרכב",
    subtitle: "Type",
    rows: [
      ["B", "2-3 דלתות", "2-3 Door"], ["C", "2/4 דלתות", "2/4 Door"],
      ["D", "4-5 דלתות", "4-5 Door"], ["W", "סטיישן", "Wagon / Estate"],
      ["V", "מיניוון", "Passenger Van"], ["L", "לימוזינה / סדאן", "Limousine / Sedan"],
      ["S", "ספורט", "Sport"], ["T", "קבריולה", "Convertible"],
      ["F", "SUV", "SUV"], ["J", "שטח פתוח", "Open Air All Terrain"],
      ["E", "קופה", "Coupe"], ["M", "מונוספייס", "Monospace"],
      ["G", "קרוסאובר", "Crossover"], ["P", "פיקאפ קבינה רגילה", "Pick-up Single Cab"],
      ["Q", "פיקאפ קבינה כפולה", "Pick-up Double Cab"], ["K", "ואן מסחרי", "Commercial Van"],
      ["R", "רכב פנאי", "Recreational Vehicle"], ["H", "בית נייד", "Motor Home"],
    ],
  },
  {
    id: "transmission",
    title: "אות 3 — הילוכים והנעה",
    subtitle: "Transmission",
    rows: [
      ["M", "ידני", "Manual"], ["A", "אוטומטי", "Automatic"],
      ["N", "ידני 4x4", "Manual 4WD"], ["B", "אוטומטי 4x4", "Automatic 4WD"],
      ["C", "ידני כל-גלגלי", "Manual AWD"], ["D", "אוטומטי כל-גלגלי", "Automatic AWD"],
    ],
  },
  {
    id: "fuel",
    title: "אות 4 — דלק ומיזוג",
    subtitle: "Fuel / Air",
    rows: [
      ["R", "בנזין עם מיזוג", "Petrol / Air"], ["N", "בנזין ללא מיזוג", "Petrol / No Air"],
      ["D", "דיזל עם מיזוג", "Diesel / Air"], ["Q", "דיזל ללא מיזוג", "Diesel / No Air"],
      ["H", "היברידי", "Hybrid"], ["I", "היברידי פלאג-אין", "Hybrid Plug-in"],
      ["E", "חשמלי", "Electric"], ["C", "חשמלי (חלופי)", "Electric (alt)"],
      ["L", "גז נוזלי LPG", "LPG / Gas"], ["S", "גז דחוס CNG", "Compressed Gas"],
      ["A", "מימן", "Hydrogen"], ["M", "דו-דלק", "Multi Fuel"],
      ["U", "אתנול", "Ethanol"],
    ],
  },
];

function AcrissSection({ title, subtitle, rows, open, onToggle }: {
  title: string; subtitle: string; rows: string[][];
  open: boolean; onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-navy text-white hover:bg-navy/90 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold">{title}</span>
          <span className="text-xs text-slate-400 font-normal">— {subtitle}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gold flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <table className="w-full text-xs">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-right px-3 py-2 font-bold text-gray-500 w-12">קוד</th>
              <th className="text-right px-3 py-2 font-bold text-gray-500">עברית</th>
              <th className="text-right px-3 py-2 font-bold text-gray-500 text-gray-400">English</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([code, he, en], i) => (
              <tr key={code} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-3 py-1.5 font-bold text-navy">{code}</td>
                <td className="px-3 py-1.5 text-gray-700">{he}</td>
                <td className="px-3 py-1.5 text-gray-400">{en}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default function AcrissTable() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 leading-relaxed mb-4">
        כל הזמנה כוללת קוד של 4 אותיות. לדוגמה: <strong className="text-navy">CDMR</strong> = קומפקט / 4 דלתות / הילוכים ידניים / בנזין עם מיזוג.
      </p>
      {sections.map((s) => (
        <AcrissSection
          key={s.id}
          title={s.title}
          subtitle={s.subtitle}
          rows={s.rows}
          open={openId === s.id}
          onToggle={() => setOpenId(openId === s.id ? null : s.id)}
        />
      ))}
    </div>
  );
}
