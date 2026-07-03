"use client";

import { useState, useMemo, useEffect } from "react";
import { idpLocations as locations } from "@/lib/data/idp-locations";

const PER_PAGE = 5;

export default function IDPLocations() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(
      (l) =>
        l.city.toLowerCase().includes(q) ||
        l.name.toLowerCase().includes(q)
    );
  }, [search]);

  // Reset to page 1 on new search
  useEffect(() => { setPage(1); }, [search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div dir="rtl">
      {/* Search */}
      <div className="relative mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="חפש לפי עיר או שם המקום..."
          aria-label="חיפוש תחנה לפי עיר או שם המקום"
          className="w-full border border-[#e7e9f0] rounded-none px-4 py-3 text-sm bg-white text-right focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            aria-label="נקה חיפוש"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-xs text-gray-500 mb-3" aria-live="polite">
        {search
          ? `${filtered.length} תוצאות · עמוד ${page} מתוך ${totalPages || 1}`
          : `${locations.length} תחנות מורשות · עמוד ${page} מתוך ${totalPages}`}
      </p>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-sm border border-[#e7e9f0] rounded-none">
          לא נמצאו תחנות לחיפוש זה
        </div>
      ) : (
        <div className="grid gap-2">
          {paginated.map((loc) => (
            <div
              key={`${loc.name}|${loc.address}`}
              className="bg-white border border-[#e7e9f0] rounded-none px-4 py-3 hover:border-orange-200  transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-bold text-navy text-sm leading-snug">{loc.name}</span>
                <span className="text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100 px-2 py-0.5 rounded flex-shrink-0">
                  {loc.city}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">{loc.address}</p>
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#e7e9f0]">
                <a
                  href={`tel:${loc.phone.replace(/-/g, "")}`}
                  className="text-xs font-bold text-orange-700 hover:text-orange-900"
                  dir="ltr"
                >
                  {loc.phone}
                </a>
                <span className="text-xs text-gray-500 text-left leading-tight">{loc.hours}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="text-sm font-semibold px-4 py-2 rounded-none border border-[#e7e9f0] bg-white text-gray-600 hover:border-navy hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            → הקודם
          </button>
          <span className="text-xs text-gray-500">{page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="text-sm font-semibold px-4 py-2 rounded-none border border-[#e7e9f0] bg-white text-gray-600 hover:border-navy hover:text-navy disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            הבא ←
          </button>
        </div>
      )}

      {/* Source */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        מקור: רשימת התחנות המורשות של{" "}
        <a
          href="https://www.gov.il/he/departments/dynamiccollectors/photo_driving_license_stock"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-600"
        >
          משרד התחבורה
        </a>
        . עדכני לאפריל 2026. מומלץ לאשר לפני הגעה.
      </p>
    </div>
  );
}
