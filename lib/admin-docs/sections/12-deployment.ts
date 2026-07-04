import type { DocSection } from "../types";

export const deploymentSection: DocSection = {
  slug: "deployment",
  title: "פריסה: git ל־Vercel",
  subtitle: "איך שינוי בקוד מגיע לאוויר, ואילו פקודות שימושיות ביומיום.",
  icon: "rocket",
  blocks: [
    {
      type: "paragraph",
      text: "שרשרת הפריסה פשוטה: קומיט ל־git, דחיפה ל־GitHub (ענף `master`), ופריסה ישירה ל־Vercel עם ה־CLI. **הפקודה `npx vercel --prod` היא דרך הפריסה האמינה**: היא בונה ומעלה ישירות, בלי תלות באינטגרציית GitHub.",
    },
    { type: "heading", id: "flow", text: "נוהל הפריסה המלא" },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: "# 1. לוודא שהבנייה עוברת מקומית\nnpm run build\n\n# 2. קומיט ודחיפה\ngit add .\ngit commit -m \"תיאור השינוי\"\ngit push origin master\n\n# 3. פריסה לפרודקשן\nnpx vercel --prod",
      caption: "הדחיפה ל־GitHub לפעמים איטית (timeout 408). זה לא חוסם: הפריסה נעשית עם ה־CLI בכל מקרה, ואז דוחפים שוב.",
    },
    {
      type: "callout",
      variant: "danger",
      title: "כלל הברזל",
      text: "אף שינוי לא נשאר רק מקומי. אחרי כל עבודה: קומיט, דחיפה ופריסה. שלושת המקומות (מקומי, GitHub, Vercel) חייבים להיות מסונכרנים תמיד.",
    },
    { type: "heading", id: "cli", text: "פקודות Vercel שימושיות" },
    {
      type: "code",
      language: "bash",
      filename: "terminal",
      code: "npx vercel whoami                 # מי מחובר (צריך להיות shmulix)\nnpx vercel ls derekh-agav         # רשימת הפריסות האחרונות\nnpx vercel inspect <url>          # פרטי פריסה ספציפית\nnpx vercel logs <url>             # לוגים של בנייה וריצה\nnpx vercel env ls                 # משתני הסביבה\nnpx vercel domains ls             # דומיינים מחוברים",
    },
    {
      type: "paragraph",
      text: "כדי לבדוק אם האתר החי מעודכן: להשוות את גיל הפריסה האחרונה (`npx vercel ls derekh-agav`) מול הקומיטים המקומיים (`git log`). אם המקומי מקדים, לפרוס.",
    },
    { type: "heading", id: "accounts", text: "חשבונות וגישה" },
    {
      type: "keyValue",
      pairs: [
        { key: "Vercel", value: "משתמש shmulix, צוות samuels-projects, פרויקט derekh-agav" },
        { key: "GitHub", value: "Shmulix/derekh-agav, ענף עבודה יחיד: master" },
        { key: "אימות CLI", value: "ה־CLI מחובר מקומית. במכונה חדשה: npx vercel login" },
        { key: "משתני סביבה", value: "שני סודות האדמין (פרק 11) מוגדרים בשלוש הסביבות" },
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "העברת בעלות",
      text: "במסירת הפרויקט: להעביר את הריפוזיטורי ב־GitHub (Settings, Transfer ownership), להעביר את הפרויקט ב־Vercel לצוות של הבעלים החדש, ולוודא שהוא מגדיר מחדש את שני משתני הסביבה עם ערכים חדשים משלו. הצ׳קליסט המלא: פרק 14.",
    },
  ],
};
