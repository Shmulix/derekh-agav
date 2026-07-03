"use client";

import { useState } from "react";
import Image from "next/image";
import { useSheetDialog } from "@/components/useSheetDialog";

const tabs = [
  { id: "cover", label: "כריכה" },
  { id: "inside", label: "פנים הרישיון" },
  { id: "translations", label: "תרגומים" },
];

const coverPages = [
  { src: "/idp-cover-1.avif", alt: "טופס רישיון נהיגה בינלאומי ישראלי בעברית ובאנגלית", caption: "עמוד 1 . טופס הרישיון" },
  { src: "/idp-cover-2.avif", alt: "עמוד פרטי הנהג וטבלת קטגוריות הרכב ברישיון הבינלאומי", caption: "עמוד 2 . פרטי נהג וקטגוריות" },
  { src: "/idp-cover-3.avif", alt: "עמוד התמונה, הקטגוריות והתנאים המגבילים ברישיון הבינלאומי", caption: "עמוד 3 . תמונה וסיווגים" },
];

const insidePages = [
  { src: "/idp-inside-1.avif", alt: "תנאי תוקף הרישיון הבינלאומי וההגבלות לשימוש בו", caption: "עמוד 1 . תנאי תוקף" },
  { src: "/idp-inside-2.avif", alt: "רשימת המדינות המכירות ברישיון נהיגה בינלאומי", caption: "עמוד 2 . רשימת מדינות" },
  { src: "/idp-inside-3.avif", alt: "המשך רשימת המדינות המכירות ברישיון הבינלאומי לפי אמנות 1949 ו-1968", caption: "עמוד 3 . המשך רשימת מדינות" },
];

const translationPages = [
  { src: "/transen.avif", lang: "אנגלית" },
  { src: "/transfr.avif", lang: "צרפתית" },
  { src: "/transdu.avif", lang: "גרמנית" },
  { src: "/transit.avif", lang: "איטלקית" },
  { src: "/transsp.avif", lang: "ספרדית" },
  { src: "/transrs.avif", lang: "רוסית" },
  { src: "/tranasiat.avif", lang: "סינית" },
  { src: "/transarab.avif", lang: "ערבית" },
];

export default function IDPGallery() {
  const [active, setActive] = useState("cover");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { sheetRef } = useSheetDialog(!!lightbox, () => setLightbox(null));

  return (
    <div className="mb-8">

      {/* Tabs */}
      <div className="flex border-b border-[#e7e9f0] mb-6" role="tablist" aria-label="עמודי הרישיון הבינלאומי">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`idp-panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2.5 text-sm font-semibold transition-colors relative ${
              active === tab.id
                ? "text-navy border-b-2 border-navy -mb-px"
                : "text-gray-500 hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cover */}
      {active === "cover" && (
        <div id="idp-panel-cover" role="tabpanel">
          <p className="text-xs text-gray-500 mb-4">שלושת העמודים הראשיים של החוברת. זה מה שהדלפק רואה כשפותחים את הרישיון.</p>
          <div className="grid grid-cols-3 gap-3">
            {coverPages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                aria-label={`הגדל תמונה: ${page.caption}`}
                className="group relative rounded-none overflow-hidden border border-[#e7e9f0] hover:border-navy/30 transition-all "
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={300}
                  height={420}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <p className="text-xs text-gray-500 text-center py-2 bg-white">{page.caption}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Inside */}
      {active === "inside" && (
        <div id="idp-panel-inside" role="tabpanel">
          <p className="text-xs text-gray-500 mb-4">עמודי הפנים: תמונת הנהג, פרטים אישיים ודרגת הרישיון</p>
          <div className="grid grid-cols-3 gap-3">
            {insidePages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                aria-label={`הגדל תמונה: ${page.caption}`}
                className="group relative rounded-none overflow-hidden border border-[#e7e9f0] hover:border-navy/30 transition-all "
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={300}
                  height={420}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <p className="text-xs text-gray-500 text-center py-2 bg-white">{page.caption}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Translations */}
      {active === "translations" && (
        <div id="idp-panel-translations" role="tabpanel">
          <p className="text-xs text-gray-500 mb-4">הרישיון כולל תרגום שמות הקטגוריות ב-8 שפות. זה מה שמאפשר לשימוש בו ברחבי העולם</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {translationPages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                aria-label={`הגדל תמונה: תרגום ל${page.lang}`}
                className="group rounded-none overflow-hidden border border-[#e7e9f0] hover:border-navy/30 transition-all "
              >
                <div className="relative">
                  <Image
                    src={page.src}
                    alt={`תרגום ל${page.lang}`}
                    width={300}
                    height={420}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <p className="text-xs font-semibold text-navy text-center py-2 bg-white">{page.lang}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="תצוגה מוגדלת"
            tabIndex={-1}
            className="relative max-w-lg w-full max-h-[90vh] outline-none"
          >
            <Image
              src={lightbox}
              alt="תצוגה מוגדלת"
              width={600}
              height={840}
              className="w-full h-auto object-contain rounded-none"
            />
            <button
              onClick={() => setLightbox(null)}
              aria-label="סגור תצוגה מוגדלת"
              className="absolute top-2 left-2 bg-white/20 hover:bg-white/40 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
