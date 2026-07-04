import type { DocSection } from "../types";

export const seoSection: DocSection = {
  slug: "seo",
  title: "SEO ו־JSON-LD",
  subtitle: "המצב הנוכחי (noindex מכוון), התשתית שמוכנה, ומה קורה ביום ההשקה.",
  icon: "trending-up",
  blocks: [
    {
      type: "callout",
      variant: "info",
      title: "המצב עכשיו: האתר מוסתר בכוונה",
      text: "כל האתר ב־noindex כי הוא עוד לא הושק רשמית. זו החלטה מודעת שנשלטת על ידי הדגל INDEXING_ENABLED (פרק 08). התשתית מוכנה: ההשקה היא שינוי דגל אחד.",
    },
    { type: "heading", id: "infrastructure", text: "מה כבר בנוי" },
    {
      type: "table",
      headers: ["רכיב", "איפה", "מה הוא עושה"],
      rows: [
        ["Metadata מלא", "`app/layout.tsx` + כל עמוד", "title, description, Open Graph, canonical"],
        ["JSON-LD לפוסטים", "`lib/article-jsonld.ts`", "סכמת Article עם כותב, תאריכים, תמונה"],
        ["robots.txt דינמי", "`app/robots.ts`", "נשלט על ידי הדגל. חוסם /admin תמיד"],
        ["sitemap.xml", "`app/sitemap.ts`", "נבנה אוטומטית מהפוסטים שפורסמו"],
        ["HTML סמנטי", "בכל האתר", "היררכיית כותרות, עוגנים, breadcrumbs"],
        ["ביצועים", "AVIF, פונטים עצמיים, אפס JS מיותר", "Core Web Vitals חזקים מהיסוד"],
      ],
    },
    { type: "heading", id: "jsonld", text: "איך עובד ה־JSON-LD" },
    {
      type: "code",
      language: "ts",
      filename: "app/posts/<slug>/page.tsx",
      code: "const articleJsonLd = buildArticleJsonLd({\n  slug: \"ztl-italy\",\n  headline: \"...\",\n  description: \"...\",\n  image: \"/ztl-italy-hero.avif\",\n  datePublished: \"2026-05-21\",\n  dateModified: \"2026-07-04\", // לעדכן בכל עריכה!\n});",
      caption: "הכותב בסכמה עוקב אוטומטית אחרי המצב האנונימי: Person או Organization.",
    },
    {
      type: "callout",
      variant: "danger",
      title: "כלל ה־dateModified",
      text: "כל עריכה של קובץ פוסט מחייבת עדכון של השדה dateModified לתאריך של היום. גוגל משווה את הסכמה לתוכן, וחוסר עקביות פוגע באמינות.",
    },
    { type: "heading", id: "launch", text: "יום ההשקה: מה בדיוק קורה" },
    {
      type: "paragraph",
      text: "כשהופכים את `INDEXING_ENABLED` ל־true ופורסים: ה־noindex יורד מכל העמודים הציבוריים, robots.txt נפתח (חוץ מ־/admin), וה־sitemap מוצהר. הצעדים המשלימים שצריך לעשות ידנית באותו יום: לרשום את האתר ב־Google Search Console, להגיש את ה־sitemap, ולעקוב אחרי האינדוקס בשבועות הראשונים. הרשימה המלאה: פרק 14.",
    },
    { type: "heading", id: "domain", text: "דומיין" },
    {
      type: "paragraph",
      text: "האתר רץ כרגע על תת־הדומיין של Vercel (`derekh-agav.vercel.app`). לקראת השקה אמיתית שווה לחבר דומיין משלו (למשל דומיין .co.il לחיזוק האמון הישראלי). החיבור נעשה בלוח הבקרה של Vercel או בפקודת `npx vercel domains`, ואז לעדכן את `SITE_URL` ב־`lib/site-config.ts` ולפרוס מחדש.",
    },
  ],
};
