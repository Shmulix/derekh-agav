import type { DocSection } from "../types";

export const launchChecklistSection: DocSection = {
  slug: "launch-checklist",
  title: "צ׳קליסט השקה ומסירה",
  subtitle: "רשימות אינטראקטיביות: מה חייב לקרות לפני השקה, ומה בהעברת בעלות.",
  icon: "clipboard-check",
  blocks: [
    {
      type: "paragraph",
      text: "הסימונים נשמרים בדפדפן הזה בלבד (localStorage): אפשר לסמן התקדמות בלי לשנות שום דבר באתר עצמו.",
    },
    { type: "heading", id: "pre-launch", text: "לפני השקה ציבורית" },
    {
      type: "checklist",
      id: "pre-launch",
      items: [
        {
          text: "להחליף את התוכן הזמני בעמוד ההשוואה בקישורי אפילייט אמיתיים",
          detail: "לחתום על תוכניות שותפים (DiscoverCars, Rentalcars וכדומה) ולכתוב את ההשוואה האמיתית. פרק 02",
        },
        {
          text: "להחליט על המצב האנונימי: להשאיר או לחשוף את הזהות",
          detail: "ANONYMOUS_MODE ב־site-mode.mjs. חשיפה מחזירה את שם הכותב ואת משפך האפילייט. פרק 08",
        },
        {
          text: "לרענן את ה־PDF של המדריך",
          detail: "התוכן באתר תוקן ושופר אחרי יצירת ה־PDF. לעדכן את ebook/guide-ebook.html ולייצר מחדש. פרק 06",
        },
        {
          text: "לפרסם או למחוק את שלוש הטיוטות",
          detail: "cdw-vs-scdw, usa-car-rental, 7-mistakes מסומנות published: false ב־lib/posts.ts",
        },
        {
          text: "לחבר דומיין קבוע",
          detail: "כרגע על derekh-agav.vercel.app. לעדכן גם את SITE_URL ב־lib/site-config.ts. פרק 10",
        },
        {
          text: "להפוך את INDEXING_ENABLED ל־true ולפרוס",
          detail: "הצעד שהופך את האתר לגלוי בגוגל. נוהל מדויק בפרק 08",
        },
        {
          text: "לרשום ב־Google Search Console ולהגיש sitemap",
          detail: "ביום ההשקה עצמו. לעקוב אחרי האינדוקס בשבועות הראשונים",
        },
      ],
    },
    { type: "heading", id: "handover", text: "מסירת הפרויקט לבעלים חדש" },
    {
      type: "checklist",
      id: "handover",
      items: [
        {
          text: "לוודא שהבעלים החדש קרא את 14 פרקי התיעוד",
          detail: "זה המסמך שנבנה בדיוק בשביל הרגע הזה",
        },
        {
          text: "להעביר את הריפוזיטורי ב־GitHub",
          detail: "Settings, Transfer ownership. הבעלים החדש מקבל את כל ההיסטוריה",
        },
        {
          text: "להעביר את הפרויקט ב־Vercel",
          detail: "או שהבעלים החדש יוצר פרויקט חדש ומחבר את הריפוזיטורי שלו",
        },
        {
          text: "הבעלים החדש מגדיר סודות אדמין חדשים",
          detail: "סיסמה חדשה + ADMIN_SESSION_SECRET חדש. הישנים של הבעלים הקודם לא עוברים הלאה. נוהל בפרק 11",
        },
        {
          text: "להעביר את חשבונות האפילייט",
          detail: "או לחתום מחדש על שם הבעלים החדש, ולעדכן את הקישורים בעמוד ההשוואה",
        },
        {
          text: "להעביר את הדומיין",
          detail: "אם חובר דומיין קבוע: העברת רישום או שינוי DNS",
        },
        {
          text: "לעדכן את זהות הכותב",
          detail: "lib/site-config.ts: שם, תמונה, סיפור. או להישאר במצב אנונימי",
        },
        {
          text: "למסור את קבצי הידע המקומיים",
          detail: "תיקיית docs/ נמצאת ב־git, אבל .claude/journal מקומי בלבד. לצרף אותו אם רוצים היסטוריה מלאה",
        },
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "העצה האחרונה",
      text: "האתר בנוי להיות זול ופשוט לתחזוקה: אין שרת, אין מסד נתונים, אין מנויים. העלות היחידה היא הדומיין ותוכנית Vercel (החינמית מספיקה בהתחלה). מה שדורש השקעה זה התוכן: והוא כבר כתוב ברמה שקשה לשחזר. לשמור על הטון, לא למהר לשנות.",
    },
  ],
};
