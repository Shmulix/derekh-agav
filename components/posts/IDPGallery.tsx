"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "cover", label: "כריכה" },
  { id: "inside", label: "פנים הרישיון" },
  { id: "translations", label: "תרגומים" },
];

const coverPages = [
  { src: "/idp1out.avif", alt: "כריכה קדמית של רישיון נהיגה בינלאומי ישראלי", caption: "עמוד 1 — חזית" },
  { src: "/idp2out.avif", alt: "עמוד אמצעי של כריכת הרישיון הבינלאומי", caption: "עמוד 2" },
  { src: "/idp3out.avif", alt: "כריכה אחורית של רישיון נהיגה בינלאומי ישראלי", caption: "עמוד 3 — גב" },
];

const insidePages = [
  { src: "/idp1in.avif", alt: "עמוד פנימי ראשון של הרישיון הבינלאומי", caption: "עמוד 1 — פרטי הנהג" },
  { src: "/idp2in.avif", alt: "עמוד פנימי שני של הרישיון הבינלאומי", caption: "עמוד 2" },
  { src: "/idp3in.avif", alt: "עמוד פנימי שלישי של הרישיון הבינלאומי", caption: "עמוד 3" },
];

const translationPages = [
  { src: "/transen.avif", lang: "English" },
  { src: "/transfr.avif", lang: "Français" },
  { src: "/transdu.avif", lang: "Deutsch" },
  { src: "/transit.avif", lang: "Italiano" },
  { src: "/transsp.avif", lang: "Español" },
  { src: "/transrs.avif", lang: "Русский" },
  { src: "/tranasiat.avif", lang: "中文" },
  { src: "/transarab.avif", lang: "العربية" },
];

export default function IDPGallery() {
  const [active, setActive] = useState("cover");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="mb-8">

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2.5 text-sm font-semibold transition-colors relative ${
              active === tab.id
                ? "text-navy border-b-2 border-navy -mb-px"
                : "text-gray-400 hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cover */}
      {active === "cover" && (
        <div>
          <p className="text-xs text-gray-400 mb-4">הכריכה החיצונית של החוברת — שלושה עמודים</p>
          <div className="grid grid-cols-3 gap-3">
            {coverPages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-navy/30 transition-all hover:shadow-md"
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
        <div>
          <p className="text-xs text-gray-400 mb-4">עמודי הפנים — תמונת הנהג, פרטים אישיים ודרגת הרישיון</p>
          <div className="grid grid-cols-3 gap-3">
            {insidePages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                className="group relative rounded-xl overflow-hidden border border-gray-100 hover:border-navy/30 transition-all hover:shadow-md"
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
        <div>
          <p className="text-xs text-gray-400 mb-4">הרישיון כולל תרגום שמות הקטגוריות ב-8 שפות — זה מה שמאפשר לשימוש בו ברחבי העולם</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {translationPages.map((page) => (
              <button
                key={page.src}
                onClick={() => setLightbox(page.src)}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:border-navy/30 transition-all hover:shadow-md"
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
          <div className="relative max-w-lg w-full max-h-[90vh]">
            <Image
              src={lightbox}
              alt="תצוגה מוגדלת"
              width={600}
              height={840}
              className="w-full h-auto object-contain rounded-xl"
            />
            <button
              onClick={() => setLightbox(null)}
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
