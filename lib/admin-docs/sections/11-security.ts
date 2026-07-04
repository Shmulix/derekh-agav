import type { DocSection } from "../types";

export const securitySection: DocSection = {
  slug: "security",
  title: "אבטחה: כותרות והאדמין",
  subtitle: "שכבות ההגנה של האתר הציבורי, והארכיטקטורה של האזור שאתה נמצא בו עכשיו.",
  icon: "shield",
  blocks: [
    { type: "heading", id: "headers", text: "כותרות האבטחה (כל האתר)" },
    {
      type: "paragraph",
      text: "מוגדרות ב־`next.config.mjs` וחלות על כל ראוט. האתר סטטי בלי סקריפטים חיצוניים, ולכן ה־CSP יכולה להיות הדוקה מאוד:",
    },
    {
      type: "table",
      headers: ["כותרת", "ערך (תמצית)", "מה היא מונעת"],
      rows: [
        ["Content-Security-Policy", "default-src 'self', בלי מקורות חיצוניים", "הזרקת סקריפטים, טעינת תוכן זר"],
        ["Strict-Transport-Security", "שנתיים + subdomains", "שנמוך ל־HTTP"],
        ["X-Frame-Options + frame-ancestors", "DENY / none", "clickjacking (הטמעה ב־iframe)"],
        ["X-Content-Type-Options", "nosniff", "ניחוש MIME זדוני"],
        ["Referrer-Policy", "strict-origin-when-cross-origin", "דליפת כתובות מלאות החוצה"],
        ["Permissions-Policy", "מצלמה, מיקרופון, מיקום: כבויים", "שימוש ב־API רגישים"],
      ],
      caption: "בנוסף: poweredByHeader כבוי (לא מסגירים את הטכנולוגיה).",
    },
    { type: "heading", id: "admin-auth", text: "האימות של האדמין: שלושה מנעולים" },
    {
      type: "paragraph",
      text: "כל בקשה לאזור `/admin` עוברת שלוש בדיקות בלתי תלויות: **1. Middleware** (`middleware.ts`, רץ ב־Edge לפני הכול): מאמת את חתימת ה־session ומפנה ללוגין אם אין. **2. ה־layout המוגן** מריץ `requireSession()` בצד השרת. **3. כל עמוד** מריץ `requireSession()` שוב. גם אם שכבה אחת נעקפת (היו חולשות כאלה ב־Next בעבר), השתיים האחרות עומדות.",
    },
    {
      type: "table",
      headers: ["רכיב", "מימוש", "קובץ"],
      rows: [
        ["סיסמה", "scrypt (N=16384) עם השוואה בזמן קבוע. נשמר רק hash", "`lib/admin/auth.ts`"],
        ["Session", "חתימת HMAC-SHA256 עם תפוגת 12 שעות. בלי JWT מלא בכוונה", "`lib/admin/session.ts`"],
        ["עוגייה", "HttpOnly, Secure, SameSite=Strict, Path=/admin", "נקבעת בפעולת הלוגין"],
        ["בלימת ניסיונות", "5 כישלונות לרבע שעה לכל IP + השהיה קבועה", "`lib/admin/throttle.ts`"],
        ["הסתרה מגוגל", "X-Robots-Tag + Disallow קבועים", "middleware + robots.ts"],
      ],
    },
    {
      type: "callout",
      variant: "danger",
      title: "כלל אנטי־דליפה: תוכן התיעוד חי רק בצד השרת",
      text: "קבצי `lib/admin-docs` נטענים אך ורק על ידי Server Components מאחורי האימות. אסור בתכלית האיסור לייבא אותם מקובץ עם \"use client\": התוכן היה נארז אז בקבצי ה־JS הסטטיים הציבוריים שה־middleware לא מגן עליהם. קומפוננטות צד לקוח מקבלות הכול דרך props בלבד.",
    },
    { type: "heading", id: "secrets", text: "הסודות (משתני סביבה)" },
    {
      type: "table",
      headers: ["משתנה", "מה הוא", "איפה"],
      rows: [
        ["`ADMIN_PASSWORD_HASH`", "hash של סיסמת האדמין (scrypt). לא הסיסמה עצמה", "Vercel (שלוש הסביבות) + .env.local"],
        ["`ADMIN_SESSION_SECRET`", "מפתח חתימת ה־sessions, 64 בייטים", "Vercel (שלוש הסביבות) + .env.local"],
        ["`DATABASE_URL`", "חיבור למסד האנליטיקס (Neon Postgres, פרויקט derekh-agav-analytics)", "Vercel (שלוש הסביבות) + .env.local"],
        ["`ANALYTICS_SALT`", "מלח לגיבוב המבקר היומי באנליטיקס. בלעדיו אין איסוף", "Vercel (שלוש הסביבות) + .env.local"],
      ],
      caption: "אם משתנה אדמין חסר, האדמין ננעל לחלוטין (fail-closed). אם משתנה אנליטיקס חסר, האיסוף פשוט כבוי.",
    },
    { type: "heading", id: "rotation", text: "החלפת סיסמה (rotation)" },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: "# 1. לבחור סיסמה חדשה וליצור hash\nnode scripts/admin-hash-password.mjs \"הסיסמה החדשה\"\n# 2. לעדכן ב־Vercel (לכל אחת משלוש הסביבות)\nnpx vercel env rm ADMIN_PASSWORD_HASH production\nnpx vercel env add ADMIN_PASSWORD_HASH production\n# 3. לעדכן גם ב־.env.local המקומי\n# 4. לפרוס מחדש\nnpx vercel --prod",
      caption: "החלפת ADMIN_SESSION_SECRET באותה שיטה מנתקת מיידית את כל המחוברים: זה מתג החירום.",
    },
    {
      type: "callout",
      variant: "danger",
      title: "האימות הוא גם גבול האנונימיות",
      text: "התיעוד הזה מכיל את הזהות האמיתית של בעל האתר בזמן שהאתר הציבורי אנונימי. כל עוד הסיסמה חזקה והכללים נשמרים, הגבול מחזיק. לא להוריד את רמת האבטחה של האדמין בלי להבין את ההשלכה הזאת.",
    },
    { type: "heading", id: "practices", text: "כללי עבודה קבועים" },
    {
      type: "paragraph",
      text: "1. לעולם לא לרשום סיסמאות, hashes או עוגיות בלוגים (לוגי Vercel נשמרים). 2. לעולם לא לקשר ל־/admin משום עמוד ציבורי. 3. אחרי כל שדרוג Next: להריץ מחדש את בדיקות האבטחה (curl בלי עוגייה חייב לקבל 307). 4. ה־session תקף 12 שעות: אין \"זכור אותי\", בכוונה.",
    },
  ],
};
