"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";

const searchableContent = [
  { title: "מסמכים נדרשים להשכרת רכב", href: "/guide#documents", tags: ["מסמכים", "רישיון", "דרכון"] },
  { title: "רישיון נהיגה בינלאומי", href: "/guide#international-license", tags: ["רישיון", "בינלאומי"] },
  { title: "כרטיס אשראי ופיקדון", href: "/guide#deposit", tags: ["אשראי", "פיקדון", "כרטיס"] },
  { title: "ביטוח CDW ו-SCDW", href: "/guide#insurance", tags: ["ביטוח", "CDW", "SCDW", "השתתפות עצמית"] },
  { title: "מה לא מכוסה בביטוח", href: "/guide#not-covered", tags: ["ביטוח", "שמשה", "צמיגים"] },
  { title: "כיסוי ביטוח משלים", href: "/guide#supplemental", tags: ["ביטוח", "כיסוי", "החזר"] },
  { title: "נהג צעיר — גיל ותוספות", href: "/guide#young-driver", tags: ["נהג צעיר", "גיל", "תוספת"] },
  { title: "מדיניות דלק — Full to Full", href: "/guide#fuel", tags: ["דלק", "מלא", "Full to Full"] },
  { title: "קילומטרז׳ — חופשי או מוגבל?", href: "/guide#mileage", tags: ["קילומטרז", "ק״מ", "unlimited"] },
  { title: "קנסות ודוחות בחו״ל", href: "/guide#fines", tags: ["קנסות", "דוחות", "ZTL", "מצלמות"] },
  { title: "השכרת רכב בארה״ב", href: "/posts/usa-car-rental", tags: ["ארה״ב", "אמריקה", "USA"] },
  { title: "CDW או SCDW — מה לקחת?", href: "/posts/cdw-vs-scdw", tags: ["ביטוח", "CDW", "SCDW"] },
  { title: "7 טעויות נפוצות בהשכרת רכב", href: "/posts/7-mistakes", tags: ["טעויות", "טיפים"] },
];

const fuse = new Fuse(searchableContent, {
  keys: ["title", "tags"],
  threshold: 0.35,
  includeScore: true,
});

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchableContent>([]);
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
          {results.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center gap-3 px-5 py-3 hover:bg-surface transition-colors border-b border-gray-50 last:border-0"
            >
              <Search size={14} className="text-gray-400 flex-shrink-0" />
              <span className="text-text-main text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
