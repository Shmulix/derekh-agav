import type { DocSection } from "../types";

export const designSystemSection: DocSection = {
  slug: "design-system",
  title: "מערכת העיצוב",
  subtitle: "צבעים, פונטים, קופסאות וכללי RTL. לחיצה על צבע מעתיקה את הקוד.",
  icon: "palette",
  blocks: [
    {
      type: "paragraph",
      text: "העיקרון: **מראה מוסדי שבונה אמון מקסימלי**. בלי אנימציות ראוותניות, בלי גרדיאנטים מיותרים. כחול כהה מקצועי, זהב כמבטא יוקרתי מדוד, והרבה אוויר לבן.",
    },
    { type: "heading", id: "colors", text: "פלטת הצבעים" },
    {
      type: "colorPalette",
      colors: [
        { name: "Navy (primary)", hex: "#1a2f5e", usage: "צבע המותג: כותרות, הדר, כפתורים ראשיים. בטיילווינד: navy" },
        { name: "Navy כהה", hex: "#0d1f3c", usage: "רקעים כהים: הירו, פוטר, סרגל האדמין הזה" },
        { name: "Gold (accent)", hex: "#c9a227", usage: "מבטא: נקודת הלוגו, קווים מקווקווים, hover. בטיילווינד: gold" },
        { name: "רקע משני", hex: "#f8f9fc", usage: "סקציות אפורות בהירות. בטיילווינד: surface" },
        { name: "טקסט", hex: "#1a1a2e", usage: "צבע הטקסט הראשי. בטיילווינד: text-main" },
        { name: "לבן", hex: "#ffffff", usage: "רקע ברירת המחדל" },
      ],
    },
    { type: "heading", id: "boxes", text: "קופסאות התוכן" },
    {
      type: "table",
      headers: ["סוג", "רקע", "מסגרת", "מתי"],
      rows: [
        ["סכנה / אזהרה", "`#fff3f3`", "`#e53e3e`", "טעויות יקרות, מלכודות"],
        ["טיפ", "`#fffbea`", "`#c9a227`", "עצה מהשטח"],
        ["מידע", "`#f0f4ff`", "`#1a2f5e`", "הקשר והרחבה"],
      ],
      caption: "אותה שפה בדיוק משמשת גם בקופסאות של התיעוד הזה.",
    },
    { type: "heading", id: "fonts", text: "טיפוגרפיה" },
    {
      type: "table",
      headers: ["פונט", "שימוש", "טעינה"],
      rows: [
        ["Heebo", "כל הטקסט באתר. תומך עברית מצוין", "next/font/google, משתנה CSS"],
        ["JetBrains Mono", "קוד, נתיבי קבצים, ערכים טכניים", "next/font/google, משתנה --font-mono-v2"],
      ],
    },
    { type: "heading", id: "rtl", text: "כללי RTL" },
    {
      type: "paragraph",
      text: "כל האתר RTL מלא: `dir=\"rtl\"` ו־`lang=\"he\"` על תגית ה־html. יישור טקסט לימין כברירת מחדל. שני חריגים קבועים: בלוקים של קוד ונתיבי קבצים מקבלים `dir=\"ltr\"` פנימי, ומספרי טלפון וכתובות URL מסומנים `dir=\"ltr\"` או `dir=\"auto\"` כדי לא להישבר.",
    },
    { type: "heading", id: "a11y", text: "נגישות (ת״י 5568)" },
    {
      type: "paragraph",
      text: "האתר שואף לעמידה בתקן הישראלי: טבעות פוקוס זהובות גלויות (`focus-visible`), ניווט מקלדת מלא בכל רכיב אינטראקטיבי, `aria-expanded` באקורדיונים, תפקידי combobox בחיפוש, לכידת פוקוס בדיאלוגים (`useSheetDialog`), והיררכיית כותרות סמנטית. כל רכיב חדש חייב לשמור על הרמה הזאת.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "חתימת המותג הקטנה",
      text: "הקו המקווקו הזהוב (`LaneDash`) שמופיע מתחת לכותרות מרכזיות הוא סימון נתיב של כביש. זה הפרט הוויזואלי שמייחד את האתר: להשתמש בו במשורה, במקומות אסטרטגיים בלבד.",
    },
  ],
};
