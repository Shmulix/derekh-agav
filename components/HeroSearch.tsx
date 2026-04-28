"use client";

import { useState, useRef, useEffect } from "react";
import { Search, BookOpen, Newspaper, ArrowLeft } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";

type SearchItem = {
  title: string;
  href: string;
  tags: string[];
  type: "guide" | "post";
  category: string;
};

const searchableContent: SearchItem[] = [
  { title: "מסמכים נדרשים להשכרת רכב", href: "/guide#documents", tags: ["מסמכים", "רישיון", "דרכון"], type: "guide", category: "מסמכים" },
  { title: "רישיון נהיגה בינלאומי", href: "/guide#international-license", tags: ["רישיון", "בינלאומי"], type: "guide", category: "מסמכים" },
  { title: "כרטיס אשראי ופיקדון", href: "/guide#deposit", tags: ["אשראי", "פיקדון", "כרטיס"], type: "guide", category: "פיקדון" },
  { title: "ביטוח CDW ו-SCDW", href: "/guide#insurance", tags: ["ביטוח", "CDW", "SCDW", "השתתפות עצמית"], type: "guide", category: "ביטוח" },
  { title: "מה לא מכוסה בביטוח", href: "/guide#not-covered", tags: ["ביטוח", "שמשה", "צמיגים"], type: "guide", category: "ביטוח" },
  { title: "כיסוי ביטוח משלים", href: "/guide#supplemental", tags: ["ביטוח", "כיסוי", "החזר"], type: "guide", category: "ביטוח" },
  { title: "נהג צעיר: גיל ותוספות", href: "/guide#young-driver", tags: ["נהג צעיר", "גיל", "תוספת"], type: "guide", category: "גיל הנהג" },
  { title: "מדיניות דלק: Full to Full", href: "/guide#fuel", tags: ["דלק", "מלא", "Full to Full"], type: "guide", category: "דלק" },
  { title: "קילומטרז׳: חופשי או מוגבל?", href: "/guide#mileage", tags: ["קילומטרז", "ק״מ", "unlimited"], type: "guide", category: "קילומטרז'" },
  { title: "קנסות ודוחות בחו״ל", href: "/guide#fines", tags: ["קנסות", "דוחות", "ZTL", "מצלמות"], type: "guide", category: "קנסות" },
  { title: "רישיון נהיגה ישראלי בהשכרת רכב בחו״ל", href: "/posts/driving-license-abroad", tags: ["רישיון ישראלי", "מסמכים", "רישיון פג", "רישיון זמני", "צילום בטלפון"], type: "post", category: "מסמכים" },
  { title: "רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר", href: "/posts/international-driving-permit", tags: ["IDP", "רישיון בינלאומי", "אמנת ז'נבה", "אמנת וינה", "מסמכים"], type: "post", category: "מסמכים" },
  { title: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל?", href: "/posts/idp-stations", tags: ["IDP", "תחנות", "מנפיקים", "אופטיקה הלפרין", "מוסך מורשה", "ישראל"], type: "post", category: "מסמכים" },
];

const fuse = new Fuse(searchableContent, {
  keys: ["title", "tags"],
  threshold: 0.35,
  includeScore: true,
});

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const hits = fuse.search(query).slice(0, 6).map((r) => r.item);
    setResults(hits);
    setOpen(hits.length > 0);
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
          placeholder="חפש נושא... למשל: ביטוח, פיקדון, נהג צעיר"
          className="flex-1 px-5 py-3 text-text-main text-base outline-none bg-transparent placeholder:text-gray-400"
          dir="rtl"
        />
        <div className="px-4 text-gray-400">
          <Search size={20} />
        </div>
      </div>

      {open && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
          <div className="px-5 py-2 bg-surface/60 border-b border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {results.length} תוצאות
            </p>
          </div>
          {results.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-start gap-3 px-5 py-3 hover:bg-surface transition-colors border-b border-gray-50 last:border-0 group"
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center mt-0.5 ${
                item.type === "guide" ? "bg-gold/10 text-gold" : "bg-navy/10 text-navy"
              }`}>
                {item.type === "guide" ? <BookOpen size={16} /> : <Newspaper size={16} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    item.type === "guide" ? "text-gold" : "text-navy"
                  }`}>
                    {item.type === "guide" ? "מדריך" : "מאמר"}
                  </span>
                  <span className="text-[10px] text-gray-400">·</span>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
                <p className="text-text-main text-sm font-medium leading-snug group-hover:text-navy transition-colors">
                  {item.title}
                </p>
              </div>
              <ArrowLeft size={14} className="text-gray-300 group-hover:text-navy transition-colors flex-shrink-0 mt-2.5" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
