import type { DocSection } from "../types";

export const modesSection: DocSection = {
  slug: "modes",
  title: "מצבי האתר: אנונימי ואינדוקס",
  subtitle: "שני דגלים בקובץ אחד שולטים בזהות הכותב ובחשיפה לגוגל.",
  icon: "toggle-left",
  blocks: [
    {
      type: "paragraph",
      text: "כל מצבי האתר חיים בקובץ יחיד בשורש הפרויקט: `site-mode.mjs`. גם `next.config.mjs` וגם `lib/site-config.ts` קוראים ממנו, כך שאין סכנה של חוסר סנכרון. המצב האנונימי נשלט מהמשתנה `NEXT_PUBLIC_ANONYMOUS_MODE` (ויש לו כפתור החלפה בלוח הבקרה). האינדוקס נשאר בקוד בלבד, בכוונה.",
    },
    {
      type: "code",
      language: "ts",
      filename: "site-mode.mjs",
      code: "// נקרא מהמשתנה NEXT_PUBLIC_ANONYMOUS_MODE, ברירת מחדל: אנונימי\nexport const ANONYMOUS_MODE =\n  process.env.NEXT_PUBLIC_ANONYMOUS_MODE\n    ? process.env.NEXT_PUBLIC_ANONYMOUS_MODE === \"true\"\n    : true;\nexport const INDEXING_ENABLED = false;  // האתר חסום למנועי חיפוש",
      caption: "לוח הבקרה של האדמין מציג תמיד את הערכים של הפריסה הנוכחית.",
    },
    { type: "heading", id: "anonymous", text: "ANONYMOUS_MODE: מה קורה כשהוא דולק" },
    {
      type: "table",
      headers: ["תחום", "מצב רגיל (false)", "מצב אנונימי (true)"],
      rows: [
        ["שם הכותב", "סמואל פרץ + תמונה אמיתית", "\"מומחה דרך אגב\" + אווטאר גנרי"],
        ["סיפור הקריירה במדריך", "מוצג במלואו", "מוסתר"],
        ["JSON-LD של הכותב", "Person", "Organization"],
        ["כפתורי CTA", "מובילים לעמוד ההשוואה", "הופכים להורדת ה־PDF"],
        ["קבצים חושפי זהות", "נגישים", "redirect: samuel.avif לאווטאר, ה־PDF לגרסה האנונימית"],
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "איך זה ממומש",
      text: "כל מה שתלוי בזהות עובר דרך `lib/site-config.ts` (אובייקטים `author`, `authorJsonLd`, `booking`) ודרך הקומפוננטות `BookingCTA` ו־`AuthorAvatar`. ה־redirects של הקבצים מוגדרים ב־`next.config.mjs` ופועלים לפני הגשת קבצים סטטיים, כך שגם גישה ישירה ל־URL לא חושפת כלום.",
    },
    { type: "heading", id: "indexing", text: "INDEXING_ENABLED: החשיפה לגוגל" },
    {
      type: "table",
      headers: ["רכיב", "false (עכשיו)", "true (אחרי השקה)"],
      rows: [
        ["metadata robots", "noindex, nofollow בכל האתר", "אינדוקס רגיל"],
        ["/robots.txt", "Disallow הכול", "Allow הכול חוץ מ־/admin + הצהרת sitemap"],
        ["/sitemap.xml", "קיים אבל לא מוצהר", "מוצהר ב־robots"],
      ],
    },
    {
      type: "callout",
      variant: "danger",
      title: "/admin חסום תמיד",
      text: "בלי קשר לדגלים: אזור האדמין נשאר עם noindex קשיח (כותרת X-Robots-Tag מה־middleware ומה־config) ועם Disallow ב־robots.txt בשני המצבים. הפיכת האתר לציבורי לא חושפת את האדמין.",
    },
    { type: "heading", id: "flip", text: "נוהל שינוי מצב, צעד אחר צעד" },
    {
      type: "paragraph",
      text: "**מצב אנונימי, הדרך הקלה:** הכפתור בלוח הבקרה של האדמין. הוא מעדכן את המשתנה ב־Vercel ומפעיל פריסה חדשה אוטומטית (כ־2 דקות). הדגל מוטמע בקוד בזמן הבנייה, ולכן חובה שתהיה פריסה: אין שינוי מיידי, וזה מכוון.",
    },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: "# מצב אנונימי ידנית (אם הכפתור לא זמין):\n# 1. לעדכן את NEXT_PUBLIC_ANONYMOUS_MODE ב־Vercel (שלוש הסביבות) וב־.env.local\n# 2. לפרוס\nnpx vercel --prod\n\n# אינדוקס (INDEXING_ENABLED): לערוך את site-mode.mjs בקוד, ואז\nnpm run build\nnpx vercel --prod\n# לוודא בפרודקשן: לוח הבקרה מציג את המצב החדש,\n# ו־view-source של עמוד הבית מראה את ה־robots הנכון",
    },
    {
      type: "paragraph",
      text: "רשימת כל הצעדים העסקיים סביב ההשקה (לא רק הטכניים): פרק 14.",
    },
  ],
};
