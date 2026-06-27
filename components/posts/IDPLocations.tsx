"use client";

import { useState, useMemo, useEffect } from "react";

const locations = [
  // אופטיקה הלפרין
  { name: "אופטיקה הלפרין", city: "תל אביב", address: "אבן גבירול 93", phone: "03-6018483", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "תל אביב", address: "דיזינגוף 50 בניין A (מול זארה)", phone: "03-5254535", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "ירושלים", address: "קניון מלחה, ספורט בית\"ר 1", phone: "02-6306402", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "חיפה", address: "משה פלימן 4 - קניון G", phone: "04-8225145", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "חיפה - קריות", address: "ההסתדרות 248 - מתחם ביג", phone: "04-8491884", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "באר שבע", address: "חיל ההנדסה 1 - מרכז ביג", phone: "08-6233442", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "ראשון לציון", address: "לח\"י 4 מתחם G", phone: "03-9615882", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "פתח תקווה", address: "קניון עופר סירקין, אליעזר פרידמן 9 (קומה 2)", phone: "03-6726436", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "רמת גן", address: "קניון ביאליק, ביאליק 76 פינת ז'בוטינסקי", phone: "03-6722002", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "הרצליה", address: "סוקולוב 27", phone: "09-9510017", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "כפר סבא", address: "קניון שבירו, רפפורט 1 (קומת קרקע)", phone: "09-8356573", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "מודיעין", address: "ישפרו סנטר, שד׳ המלכול 121", phone: "08-9268205", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "חולון", address: "אילת 54", phone: "03-6518579", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "אור יהודה", address: "דוד כהן 3", phone: "03-6349771", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "ראש העין", address: "מתחם שפיר החדש, זוהרה אלפסי פינת שייקה אופיר", phone: "03-6196561", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "שוהם", address: "מרכז מסחרי איירפורט סיטי, חנות 32", phone: "03-9731213", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "אריאל", address: "הבנאי 6 - מתחם מגה אור (רמי לוי)", phone: "03-6582532", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "נהריה", address: "שד הגעתון 32", phone: "04-9924020", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "עפולה", address: "קניון העמקים, יהושע חנקין 14א", phone: "04-6404781", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "יוקנעם", address: "מתחם ביג, שד רבין 9", phone: "04-9891181", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "חריש", address: "דרך הארץ 35", phone: "04-8385745", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "פרדס חנה", address: "מרכז ביג, התדהר 1", phone: "04-9532274", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "מעלות", address: "צים סנטר, רח׳ שלמה שרירא 3", phone: "04-8169045", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "קצרין", address: "זויתן 119", phone: "04-9525397", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "קריית שמונה", address: "תל חי - צמוד למשביר 106", phone: "04-6950444", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "צפת", address: "העלייה ב׳ 4", phone: "04-6925656", hours: "א׳-ה׳: 10:00-14:00 | ג׳: 9:00-14:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "טבריה", address: "בניין לב הגליל, רח׳ הבנים 2", phone: "04-6721000", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ג׳: 9:00-14:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "בית שאן", address: "צים סנטר, העמל 7", phone: "04-6323494", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "גן יבנה", address: "קניון פרנדלי, המגינים 56", phone: "08-9219723", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "ערד", address: "מרכז צים סנטר, שמיר 11", phone: "08-6582733", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "אשקלון", address: "מתחם פאוואר סנטר סילבר", phone: "08-6729040", hours: "א׳-ה׳: 10:00-15:00, 16:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "קריית גת", address: "מתחם ביג, דרך הדרום 3", phone: "08-6816655", hours: "א׳-ה׳: 10:00-15:00, 16:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "שדרות", address: "סמטת הפלגה 20", phone: "08-6616161", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "נתיבות", address: "גלובוס סנטר, בעלי המלאכה 203", phone: "08-9934303", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "דימונה", address: "גולדה מאיר 20", phone: "08-6610442", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "אופקים", address: "מנחם בגין 6", phone: "08-9718255", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "קריית מלאכי", address: "רש\"י 1 פינת בן גוריון", phone: "08-8502500", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "גוש עציון", address: "צומת גוש עציון, מול רמי לוי", phone: "02-5618129", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "מעלה אדומים", address: "קניון עופר, דרך קדם 5", phone: "02-6269543", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "בית שמש", address: "מרכז ביג, יגאל אלון 3", phone: "02-9921347", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה הלפרין", city: "אילת", address: "שדרות התמרים 2 - מול תחנת הדלק פז", phone: "08-6326262", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 9:00-13:00" },
  // אופטיקל סנטר
  { name: "אופטיקל סנטר", city: "תל אביב", address: "שנקין 10", phone: "03-6280880", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "בת ים", address: "הקומיות 9", phone: "03-6474887", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "רמת השרון", address: "סוקולוב 90", phone: "03-5544084", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "רעננה", address: "החרושת 32", phone: "09-8658558", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "נתניה", address: "מתחם סיטי פולג, גיבורי ישראל 5", phone: "09-8932999", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 9:30-12:00" },
  { name: "אופטיקל סנטר", city: "בני ברק", address: "רבי עקיבא 128", phone: "03-5242524", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "חיפה", address: "ביג צ׳ק פוסט, דרך ישראל בר יהודה 111", phone: "04-3748666", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "עכו", address: "קניון עזריאלי, החרושת 2", phone: "04-8532214", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "חדרה", address: "מתחם מיקס, צה\"ל 35", phone: "04-3748889", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "כרמיאל", address: "מרכז מסחרי מיי סנטר, מעלה כמון 9", phone: "04-6202105", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "אשדוד", address: "קניון סיטי - תחנה מרכזית, מנחם בגין 1", phone: "08-9226062", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "באר שבע", address: "מרכז מול 7, הע\"ל 30", phone: "08-8525525", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00 | ו׳: 10:00-12:00" },
  { name: "אופטיקל סנטר", city: "רמלה", address: "קניון רמלוד, הצופית 40", phone: "08-6554545", hours: "א׳-ה׳: 10:00-18:00 | ו׳: 10:00-12:00" },
  // מרכז האופטיקה
  { name: "מרכז האופטיקה", city: "ירושלים", address: "קניון אחים ישראל, יד חרוצים 18", phone: "02-6416656", hours: "א׳-ה׳: 9:00-18:00 | ו׳: 9:00-12:00" },
  { name: "מרכז האופטיקה", city: "באר שבע", address: "יצחק בן צבי 4", phone: "08-6442828", hours: "א׳-ה׳: 9:00-19:00 | ו׳: 9:00-12:30" },
  // אחרות
  { name: "אופטיקלי לוד", city: "לוד", address: "ציונות 1", phone: "08-9204440", hours: "א׳-ה׳: 9:30-18:30 | ו׳: 9:00-13:00" },
  { name: "אופטיקה לעיונק", city: "כפר יאסיף", address: "כביש 70", phone: "04-9969080", hours: "ב׳-ה׳: 8:30-13:30, 16:00-19:00 | ו׳: 8:30-12:30" },
  { name: "אופטימודה", city: "רהט", address: "רחוב אלמוכתאר 115/25", phone: "08-6463535", hours: "א׳-ה׳: 10:00-19:00 | שבת וחג: 10:00-19:00" },
  { name: "אופטיקה חורי", city: "סכנין", address: "אלחסנין 18, שכונת הנוצרים", phone: "04-6743413", hours: "ב׳-ה׳: 10:00-14:00, 16:00-18:00 | ו׳: 10:00-14:00" },
  { name: "לה אופטיקה", city: "נוף הגליל", address: "שדרות מעלה יצחק 14", phone: "04-6001661", hours: "א׳-ה׳: 9:00-14:00, 16:00-19:00 | ו׳: 9:00-13:00" },
  { name: "אופטיקה ואיל נאסר", city: "נצרת", address: "בניין אלאנדולס, פאולוס השישי 81", phone: "04-6577824", hours: "ב׳-ה׳: 9:30-18:30 | ד׳ ו׳: 9:30-15:00" },
  { name: "אופטיקה כפר קאסם", city: "כפר קאסם", address: "סולטאני 26", phone: "03-9071708", hours: "א׳-ה׳: 10:00-14:00, 16:00-20:00" },
  { name: "רים אופטיקה אנד פאשיין", city: "שפרעם", address: "רח׳ 240, אלפואר", phone: "04-9502022", hours: "א׳-ה׳: 10:00-15:00, 16:00-19:00 | ו׳: 10:00-13:00" },
  { name: "אופטיקה דה וינצ׳י", city: "טירה", address: "טארק עבד אלחי 213", phone: "09-7931064", hours: "א׳-ה׳: 9:00-14:00, 16:00-20:00 | ו׳: סגור" },
  { name: "אופטיקה היא", city: "אום אל-פחם", address: "אלשאגור - מתחם אלונית", phone: "04-9020033", hours: "א׳-ה׳: 10:00-14:00, 15:00-19:00" },
];

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
          className="w-full border border-[#e7e9f0] rounded-none px-4 py-3 text-sm bg-white text-right focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-xs text-gray-500 mb-3">
        {search
          ? `${filtered.length} תוצאות — עמוד ${page} מתוך ${totalPages || 1}`
          : `${locations.length} תחנות מורשות — עמוד ${page} מתוך ${totalPages}`}
      </p>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-sm border border-[#e7e9f0] rounded-none">
          לא נמצאו תחנות לחיפוש זה
        </div>
      ) : (
        <div className="grid gap-2">
          {paginated.map((loc, i) => (
            <div
              key={i}
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
                <span className="text-xs text-gray-400 text-left leading-tight">{loc.hours}</span>
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
          <span className="text-xs text-gray-400">{page} / {totalPages}</span>
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
      <p className="text-xs text-gray-400 mt-4 text-center">
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
