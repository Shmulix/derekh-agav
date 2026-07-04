import type { DocSection } from "../types";

export const architectureSection: DocSection = {
  slug: "architecture",
  title: "ארכיטקטורה: ראוטים וקומפוננטות",
  subtitle: "מפת הקבצים המלאה: כל עמוד, כל קומפוננטה, ומה תפקידם.",
  icon: "network",
  blocks: [
    { type: "heading", id: "routes", text: "כל הראוטים" },
    {
      type: "routeTable",
      routes: [
        { path: "/", file: "app/page.tsx", status: "ציבורי", note: "עמוד הבית: הירו, חיפוש, 3 פוסטים אחרונים" },
        { path: "/guide", file: "app/guide/page.tsx", status: "ציבורי", note: "המדריך המלא, 19 סקציות" },
        { path: "/posts", file: "app/posts/page.tsx", status: "ציבורי", note: "ארכיון המאמרים" },
        { path: "/posts/[slug]", file: "app/posts/*/page.tsx", status: "ציבורי", note: "כל פוסט הוא קובץ tsx ידני. אין ראוט דינמי" },
        { path: "/posts/rental-platforms", file: "app/posts/rental-platforms/page.tsx", status: "ציבורי", note: "עמוד ההמרה. לא רשום ב־lib/posts.ts בכוונה" },
        { path: "/admin", file: "app/admin/(protected)/page.tsx", status: "מוגן", note: "לוח הבקרה: כניסה לתיעוד ולאנליטיקס + מצב האתר" },
        { path: "/admin/docs", file: "app/admin/(protected)/docs/page.tsx", status: "מוגן", note: "אינדקס 14 פרקי התיעוד" },
        { path: "/admin/docs/[slug]", file: "app/admin/(protected)/docs/[slug]/page.tsx", status: "מוגן", note: "פרקי התיעוד" },
        { path: "/admin/analytics", file: "app/admin/(protected)/analytics/page.tsx", status: "מוגן", note: "דשבורד הצפיות (קורא מ־Neon)" },
        { path: "/admin/login", file: "app/admin/login/page.tsx", status: "ציבורי", note: "כניסת מנהל. בלי תוכן רגיש" },
        { path: "/api/hit", file: "app/api/hit/route.ts", status: "ציבורי", note: "איסוף אנלייטיקה בלי עוגיות. מסנן בוטים, לא שומר IP" },
        { path: "/robots.txt", file: "app/robots.ts", status: "ציבורי", note: "נשלט על ידי INDEXING_ENABLED. תמיד חוסם /admin" },
        { path: "/sitemap.xml", file: "app/sitemap.ts", status: "ציבורי", note: "נבנה מ־lib/posts.ts. לעולם לא כולל /admin" },
        { path: "(404)", file: "app/not-found.tsx", status: "ציבורי", note: "עמוד שגיאה ממותג" },
        { path: "(error)", file: "app/error.tsx", status: "ציבורי", note: "Error boundary עם כפתור ניסיון חוזר" },
      ],
    },
    { type: "heading", id: "file-tree", text: "מבנה הפרויקט" },
    {
      type: "fileTree",
      root: "car rental project/",
      nodes: [
        {
          name: "app/",
          note: "כל הראוטים (App Router)",
          children: [
            { name: "layout.tsx", note: "פונטים, metadata, dir=rtl" },
            { name: "page.tsx", note: "עמוד הבית" },
            { name: "guide/", note: "המדריך" },
            { name: "posts/", note: "עמוד ארכיון + תיקייה לכל פוסט" },
            { name: "admin/", note: "אזור הניהול המוגן (התיעוד הזה)" },
            { name: "robots.ts / sitemap.ts", note: "SEO" },
          ],
        },
        {
          name: "components/",
          note: "קומפוננטות לפי אזור",
          children: [
            { name: "v2/", note: "HeaderV2, FooterV2, LaneDash, Testimonials" },
            { name: "guide/", note: "אקורדיון, טאבים, TOC, CTA צף" },
            { name: "posts/", note: "Byline, Breadcrumb, גלריית IDP" },
            { name: "admin/", note: "קומפוננטות התיעוד. חוקים בפרק 11" },
            { name: "HeroSearch.tsx", note: "חיפוש fuse.js בעמוד הבית" },
          ],
        },
        {
          name: "lib/",
          note: "לוגיקה ותצורה",
          children: [
            { name: "site-config.ts", note: "זהות, מצבים, CTA. הלב של האתר" },
            { name: "posts.ts", note: "רישום הפוסטים. מקור אמת יחיד" },
            { name: "article-jsonld.ts", note: "בניית JSON-LD לכל פוסט" },
            { name: "data/idp-locations.ts", note: "66 תחנות IDP" },
            { name: "admin/", note: "אימות: session, סיסמה, throttle" },
            { name: "admin-docs/", note: "תוכן התיעוד הזה (14 פרקים)" },
            { name: "analytics/db.ts", note: "חיבור למסד האנליטיקס (Neon)" },
          ],
        },
        { name: "middleware.ts", note: "שער האבטחה של /admin" },
        { name: "site-mode.mjs", note: "שני דגלי המצב של האתר (פרק 08)" },
        { name: "next.config.mjs", note: "כותרות אבטחה, redirects" },
        { name: "public/", note: "תמונות AVIF, לוגו, PDF" },
        { name: "docs/", note: "תיעוד חי בקבצי markdown (פרק 13)" },
        { name: "ebook/", note: "מקור ה־HTML של ה־PDF" },
        { name: "scripts/", note: "כלי עזר (hash לסיסמת אדמין)" },
      ],
    },
    { type: "heading", id: "components-detail", text: "קומפוננטות: מי עושה מה" },
    {
      type: "accordion",
      items: [
        {
          title: "שלד האתר (components/v2)",
          blocks: [
            {
              type: "table",
              headers: ["קובץ", "תפקיד"],
              rows: [
                ["`v2/HeaderV2.tsx`", "ההדר האמיתי: ניווט, תפריט מובייל, CTA קצר"],
                ["`v2/FooterV2.tsx`", "פוטר עם גילוי נאות אפילייט"],
                ["`v2/LaneDash.tsx`", "קו מקווקו זהוב, חתימת המותג"],
                ["`Header.tsx` / `Footer.tsx`", "קבצי re-export לתאימות. לא לגעת"],
              ],
            },
          ],
        },
        {
          title: "קומפוננטות המדריך (components/guide)",
          blocks: [
            {
              type: "table",
              headers: ["קובץ", "תפקיד"],
              rows: [
                ["`Accordion.tsx`", "אקורדיון נגיש (aria-expanded)"],
                ["`InsuranceTabs.tsx`", "טאבים של סוגי ביטוח. כולל לוגיקת כתום/אדום (פרק 06)"],
                ["`AcrissTable.tsx`", "טבלת קטגוריות רכב ACRISS"],
                ["`TableOfContents.tsx` + `MobileTOC.tsx`", "תוכן עניינים לדסקטופ ולמובייל"],
                ["`MobileFloatingCTA.tsx`", "כפתור צף במובייל שנפתח לגיליון תחתון"],
                ["`DocTiles.tsx`", "אריחי המסמכים הנדרשים"],
                ["`EbookCTA.tsx`", "הורדת ה־PDF"],
                ["`LexiconSection.tsx`", "מילון המונחים"],
              ],
            },
          ],
        },
        {
          title: "קומפוננטות הפוסטים (components/posts)",
          blocks: [
            {
              type: "table",
              headers: ["קובץ", "תפקיד"],
              rows: [
                ["`AuthorByline.tsx`", "כרטיס הכותב. מכבד את המצב האנונימי"],
                ["`ArticleBreadcrumb.tsx`", "פירורי לחם אחידים לכל פוסט"],
                ["`IDPLocations.tsx`", "חיפוש 66 התחנות לפי עיר"],
                ["`IDPGallery.tsx`", "גלריה עם lightbox נגיש"],
              ],
            },
          ],
        },
        {
          title: "הוקים משותפים",
          blocks: [
            {
              type: "table",
              headers: ["קובץ", "תפקיד"],
              rows: [
                ["`useSheetDialog.ts`", "התנהגות דיאלוג נגיש: Escape, לכידת פוקוס, החזרת פוקוס"],
                ["`useScrollCollapse.ts`", "כיווץ הכפתור הצף לפי גלילה"],
                ["`Reveal.tsx`", "אנימציית הופעה עדינה בגלילה"],
              ],
            },
          ],
        },
      ],
    },
    {
      type: "callout",
      variant: "info",
      title: "עדכון התיעוד",
      text: "כל שינוי מבני (ראוט חדש, קומפוננטה חדשה, מחיקה) חייב להתעדכן גם ב־`docs/site-architecture.md` וגם כאן, בפרק הזה. פירוט מלא של שיטת התיעוד: פרק 13.",
    },
  ],
};
