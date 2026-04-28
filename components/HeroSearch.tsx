"use client";

import { useState, useRef, useEffect } from "react";
import { Search, BookOpen, Newspaper, Hash } from "lucide-react";
import Fuse, { FuseResult } from "fuse.js";
import Link from "next/link";

type SearchItem = {
  title: string;
  href: string;
  tags: string[];
  type: "guide-main" | "guide-section" | "post";
  category?: string;
  content?: string;
};

type SearchResultWithSnippet = SearchItem & { snippet?: string };

const searchableContent: SearchItem[] = [
  {
    title: "המדריך המלא להשכרת רכב בחו״ל",
    href: "/guide",
    tags: ["מדריך", "המדריך המלא", "השכרת רכב", "מדריך מלא", "מסמכים", "ביטוח", "פיקדון", "דלק", "קנסות", "ציוד חורף", "כבישי אגרה", "חציית גבול"],
    type: "guide-main",
  },

  { title: "מסמכים נדרשים להשכרת רכב", href: "/guide#documents", tags: ["מסמכים", "רישיון", "דרכון", "כרטיס אשראי", "IDP", "רישיון בינלאומי"], type: "guide-section", category: "מסמכים" },
  { title: "פיקדון בכרטיס אשראי", href: "/guide#deposit", tags: ["פיקדון", "כרטיס אשראי", "deposit", "הפקדה", "אשראי"], type: "guide-section", category: "פיקדון" },
  { title: "קטגוריית הרכב (ACRISS)", href: "/guide#category", tags: ["קטגוריה", "ACRISS", "קוד", "סוג רכב", "דגם"], type: "guide-section", category: "רכב" },
  { title: "ביטוח: CDW, SCDW וכיסויים", href: "/guide#insurance", tags: ["ביטוח", "CDW", "SCDW", "TP", "LDW", "השתתפות עצמית", "כיסוי", "השלמה", "צמיגים", "שמשה", "החזר"], type: "guide-section", category: "ביטוח" },
  { title: "גיל הנהג: צעיר ומבוגר", href: "/guide#young-driver", tags: ["גיל", "נהג צעיר", "נהג מבוגר", "תוספת גיל", "young driver"], type: "guide-section", category: "גיל הנהג" },
  { title: "איסוף והחזרת הרכב", href: "/guide#pickup", tags: ["איסוף", "החזרה", "after-hours", "one-way", "שעות", "תחנה"], type: "guide-section", category: "איסוף והחזרה" },
  { title: "כבישי אגרה ותשלומי vignette", href: "/guide#tolls", tags: ["כבישי אגרה", "אגרה", "vignette", "tolls", "ZTL", "אוטוסטרדה"], type: "guide-section", category: "כבישי אגרה" },
  { title: "חציית גבול עם רכב שכור", href: "/guide#crossborder", tags: ["גבול", "חציית גבול", "border", "מדינות", "אירופה"], type: "guide-section", category: "חציית גבול" },
  { title: "ציוד חורף ושרשראות שלג", href: "/guide#winter", tags: ["ציוד חורף", "חורף", "שלג", "שרשראות שלג", "צמיגי חורף", "snow", "winter"], type: "guide-section", category: "ציוד חורף" },
  { title: "כיסאות בטיחות וציוד משלים", href: "/guide#extras", tags: ["כיסא בטיחות", "ציוד", "תינוק", "GPS", "תיבה אוטומטית", "ילדים", "booster"], type: "guide-section", category: "ציוד משלים" },
  { title: "מדיניות דלק (Full to Full)", href: "/guide#fuel", tags: ["דלק", "Full to Full", "מלא", "fuel", "תדלוק", "סולר", "בנזין"], type: "guide-section", category: "דלק" },
  { title: "קילומטרז׳: חופשי או מוגבל?", href: "/guide#mileage", tags: ["קילומטרז", "ק״מ", "unlimited", "מוגבל", "חופשי"], type: "guide-section", category: "קילומטרז'" },
  { title: "קנסות ודוחות בחו״ל", href: "/guide#fines", tags: ["קנסות", "דוחות", "ZTL", "מצלמות", "תנועה", "חניה"], type: "guide-section", category: "קנסות" },
  { title: "דמי ביטול ואי הגעה", href: "/guide#cancellation", tags: ["ביטול", "דמי ביטול", "no-show", "אי הגעה", "החזר כספי"], type: "guide-section", category: "ביטול" },
  { title: "תאונה ותקלה מכנית", href: "/guide#emergency", tags: ["תאונה", "תקלה", "חירום", "סיוע בדרכים", "טרקטור", "גרירה"], type: "guide-section", category: "חירום" },
  { title: "מילון מונחים בהשכרת רכב", href: "/guide#lexicon", tags: ["מילון", "מונחים", "פירוש", "lexicon", "הגדרות"], type: "guide-section", category: "מילון" },

  {
    title: "רישיון נהיגה ישראלי בהשכרת רכב בחו״ל",
    href: "/posts/driving-license-abroad",
    tags: ["רישיון ישראלי", "מסמכים", "רישיון פג", "רישיון זמני", "צילום בטלפון"],
    type: "post",
    category: "מסמכים",
    content: "הרישיון הישראלי הוא המסמך החשוב ביותר בהשכרת רכב בחו״ל. בלי רישיון פיזי בתוקף אין רכב. רישיון פג זה לא בסדר, גם אם רק לכמה ימים. צילום של הרישיון בטלפון לא מספיק לדלפק. השם על הרישיון חייב להתאים בדיוק לשם שעל הדרכון. אם הרישיון העיקרי אבד אפשר להשתמש ברישיון זמני, אבל לא כל חברת השכרה תקבל אותו. רישיון נהיגה חדש שטרם הגיע פיזית הביתה לא מתקבל בדלפק. השכרת רכב בחו״ל דורשת רישיון תקף לפחות שנה לפני הנסיעה.",
  },
  {
    title: "רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר",
    href: "/posts/international-driving-permit",
    tags: ["IDP", "רישיון בינלאומי", "אמנת ז'נבה", "אמנת וינה", "מסמכים"],
    type: "post",
    category: "מסמכים",
    content: "רישיון נהיגה בינלאומי הוא חובה לפי אמנת ז'נבה 1949 ואמנת וינה 1968. הוא לא מחליף את הרישיון הישראלי, רק מתרגם אותו לעשר שפות. עלות הוצאת IDP בישראל היא כ-110 ש״ח, תקף לשנה. הדלפק לא תמיד מבקש אותו אבל המשטרה במדינות זרות כן עלולה לדרוש. נהיגה ללא רישיון בינלאומי תקף בחו״ל יכולה לגרור קנס, פסילת רכב ואפילו ביטול ביטוח. אפשר להוציא רישיון בינלאומי בכמה דקות באופטיקה הלפרין או במוסך מורשה. צריך להביא רישיון נהיגה ישראלי בתוקף, תעודת זהות ושתי תמונות פספורט. הרישיון תקף רק יחד עם הרישיון הישראלי.",
  },
  {
    title: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל?",
    href: "/posts/idp-stations",
    tags: ["IDP", "תחנות", "מנפיקים", "אופטיקה הלפרין", "מוסך מורשה", "ישראל"],
    type: "post",
    category: "מסמכים",
    content: "בישראל יש 66 תחנות מורשות שמנפיקות רישיון נהיגה בינלאומי. אופטיקה הלפרין היא הרשת הגדולה והמוכרת ביותר עם סניפים בכל הארץ. בנוסף יש מוסכים מורשים שגם הם רשאים להנפיק. כל תחנה דורשת רישיון נהיגה ישראלי בתוקף, תעודת זהות ושתי תמונות פספורט. שעות פעילות משתנות בין הסניפים, חלק פתוחים גם בערב ובימי שישי. עדיף להגיע מוקדם בעונת השיא כי יש תורים. אפשר לחפש תחנה לפי עיר. הנפקה בפועל לוקחת 5 עד 10 דקות, מקבלים את הרישיון מיד במקום.",
  },
];

const fuse = new Fuse(searchableContent, {
  keys: [
    { name: "title", weight: 3 },
    { name: "tags", weight: 2 },
    { name: "content", weight: 1 },
  ],
  threshold: 0.3,
  includeMatches: true,
  includeScore: true,
  ignoreLocation: true,
  minMatchCharLength: 3,
});

function extractSnippet(result: FuseResult<SearchItem>): string | null {
  if (result.item.type !== "post" || !result.item.content) return null;
  const contentMatch = result.matches?.find((m) => m.key === "content");
  if (!contentMatch || !contentMatch.indices?.length) return null;

  const [start, end] = [...contentMatch.indices].sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]))[0];
  const content = result.item.content;
  const padding = 45;
  let snippetStart = Math.max(0, start - padding);
  let snippetEnd = Math.min(content.length, end + 1 + padding);

  while (snippetStart > 0 && content[snippetStart] !== " " && content[snippetStart] !== ".") snippetStart--;
  while (snippetEnd < content.length && content[snippetEnd] !== " " && content[snippetEnd] !== ".") snippetEnd++;

  let snippet = content.slice(snippetStart, snippetEnd).trim();
  if (snippetStart > 0) snippet = "... " + snippet;
  if (snippetEnd < content.length) snippet = snippet + " ...";

  return snippet;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegex(query.trim())})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <mark key={i} className="bg-gold/25 text-text-main rounded-sm px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultWithSnippet[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    const queryWords = trimmed.toLowerCase().split(/\s+/).filter((w) => w.length >= 2);

    const validated = fuse
      .search(trimmed)
      .filter((h) => {
        const haystack = (
          h.item.title +
          " " +
          h.item.tags.join(" ") +
          " " +
          (h.item.content ?? "")
        ).toLowerCase();
        return queryWords.some((word) => haystack.includes(word));
      })
      .slice(0, 6);

    const enriched = validated.map((h) => ({ ...h.item, snippet: extractSnippet(h) ?? undefined }));
    setResults(enriched);
    setOpen(enriched.length > 0);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden h-14">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="חפש נושא... למשל: ביטוח, פיקדון, ציוד חורף"
          className="flex-1 px-5 py-3 text-text-main text-base outline-none bg-transparent placeholder:text-gray-400"
          dir="rtl"
        />
        <div className="px-4 text-gray-400">
          <Search size={20} />
        </div>
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden max-h-[70vh] overflow-y-auto text-right">
          {results.map((item, i) => {
            const isMain = item.type === "guide-main";
            const isSection = item.type === "guide-section";
            const isPost = item.type === "post";
            const hasSnippet = isPost && !!item.snippet;

            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => { setOpen(false); setQuery(""); }}
                className={`flex gap-3 px-5 py-3 transition-colors border-b border-gray-50 last:border-0 group ${
                  hasSnippet ? "items-start" : "items-center"
                } ${
                  isMain ? "bg-gold/5 hover:bg-gold/10" : "hover:bg-surface"
                }`}
              >
                <div className={`flex-shrink-0 text-gray-400 group-hover:text-navy transition-colors ${
                  hasSnippet ? "mt-1" : ""
                }`}>
                  {isMain && <BookOpen size={18} className="text-gold" />}
                  {isSection && <Hash size={16} />}
                  {isPost && <Newspaper size={16} />}
                </div>
                <div className="flex-1 min-w-0">
                  {isMain && (
                    <span className="block text-[10px] font-bold text-gold uppercase tracking-widest mb-1">
                      המדריך המלא
                    </span>
                  )}
                  {isSection && (
                    <span className="block text-[10px] text-gray-400 mb-0.5">
                      מתוך המדריך המלא <span className="text-gray-300">›</span> {item.category}
                    </span>
                  )}
                  {isPost && (
                    <span className="block text-[10px] text-gray-400 mb-0.5">
                      מאמר <span className="text-gray-300">›</span> {item.category}
                    </span>
                  )}
                  <p className={`text-text-main leading-snug group-hover:text-navy transition-colors ${
                    isMain ? "text-base font-bold" : "text-sm font-medium"
                  }`}>
                    <HighlightedText text={item.title} query={query} />
                  </p>
                  {hasSnippet && (
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                      <HighlightedText text={item.snippet!} query={query} />
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
