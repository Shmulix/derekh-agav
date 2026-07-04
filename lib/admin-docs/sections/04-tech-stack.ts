import type { DocSection } from "../types";

export const techStackSection: DocSection = {
  slug: "tech-stack",
  title: "הסטאק הטכנולוגי",
  subtitle: "כל תלות, למה היא שם, ואילו החלטות התקבלו במודע.",
  icon: "layers",
  blocks: [
    {
      type: "paragraph",
      text: "העיקרון המנחה: **מינימום תלויות, מקסימום שליטה**. אין ספריית UI חיצונית, אין CMS, אין מסד נתונים. כל התוכן חי בקוד TypeScript ונבנה סטטית.",
    },
    { type: "heading", id: "dependencies", text: "תלויות ריצה" },
    {
      type: "table",
      headers: ["חבילה", "גרסה", "למה היא כאן"],
      rows: [
        ["`next`", "14.2.x", "הפריימוורק. App Router, רנדור סטטי, next/image, next/font"],
        ["`react` + `react-dom`", "18", "הבסיס של Next"],
        ["`fuse.js`", "7", "חיפוש התוכן בעמוד הבית + החיפוש בתיעוד הזה. פאזי, צד לקוח, בלי שרת"],
        ["`lucide-react`", "0.4xx", "כל האייקונים. עקבי, קל, tree-shakeable"],
        ["`clsx`", "2", "הרכבת מחלקות Tailwind מותנות"],
      ],
    },
    { type: "heading", id: "dev-dependencies", text: "תלויות פיתוח" },
    {
      type: "table",
      headers: ["חבילה", "למה"],
      rows: [
        ["`tailwindcss` 3.4 + `postcss` + `autoprefixer`", "כל העיצוב. אין CSS כתוב ידנית מלבד globals.css"],
        ["`typescript` 5 + `@types/*`", "TypeScript במצב strict"],
        ["`sharp`", "עיבוד תמונות לפני העלאה (המרה ל־AVIF, שינוי גודל). לא רץ באתר עצמו"],
      ],
    },
    { type: "heading", id: "decisions", text: "החלטות מודעות (ולמה)" },
    {
      type: "table",
      headers: ["החלטה", "נימוק"],
      rows: [
        [
          "בלי MDX / Markdown",
          "כל עמוד תוכן הוא קומפוננטת `.tsx` מלאה. שליטה מלאה בעיצוב של כל פסקה, בלי שכבת תרגום",
        ],
        [
          "בלי shadcn/ui או ספריית קומפוננטות",
          "ה־UI כולו נבנה ידנית עם Tailwind. פחות תלויות, אין מראה גנרי",
        ],
        ["בלי מסד נתונים", "אין תוכן דינמי. רשימת 66 תחנות ה־IDP היא קובץ TypeScript"],
        ["פונטים דרך next/font/google", "Heebo (טקסט) + JetBrains Mono (קוד). נטענים עצמית, בלי בקשות לגוגל בזמן ריצה"],
        ["אנימציות מינימליות", "עיקרון עיצובי: אתר מוסדי שבונה אמון. אין אפקטים ראוותניים"],
      ],
    },
    { type: "heading", id: "scripts", text: "פקודות npm" },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: "npm run dev     # שרת פיתוח על פורט 3000\nnpm run build   # בניית פרודקשן (חובה לפני כל פריסה)\nnpm run start   # הרצת תוצר הבנייה מקומית\nnpm run lint    # ESLint",
    },
    {
      type: "callout",
      variant: "tip",
      title: "שדרוגי גרסאות",
      text: "לפני שדרוג Next צריך לקרוא את הערות השחרור בעיון: האתר משתמש ב־middleware לאבטחת האדמין (פרק 11) וב־headers מותאמים ב־`next.config.mjs`. לבדוק שהתנהגותם לא השתנתה, להריץ `npm run build` ואת בדיקות האבטחה של פרק 11 אחרי כל שדרוג.",
    },
  ],
};
