export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  readTime: string;
  image: string | null;
  publishedAt: string;
  date: string;
  published: boolean;
};

const HEBREW_MONTHS = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

function hebrewMonthYear(iso: string): string {
  const [yearStr, monthStr] = iso.split("-");
  const monthIndex = Number(monthStr) - 1;
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) return iso;
  return `${HEBREW_MONTHS[monthIndex]} ${yearStr}`;
}

const rawPosts: Omit<Post, "date">[] = [
  {
    slug: "ztl-italy",
    title: "ZTL באיטליה: אזורי תנועה מוגבלת ברכב שכור",
    excerpt:
      "מעל 60% מהתיירים שמשכירים רכב באיטליה נכנסים לאזור ZTL בלי לדעת. קנס של 80-335 אירו לכל כניסה, פלוס עמלה מחברת ההשכרה. איך לזהות, איך להימנע, ומה לעשות אם המלון בתוך האזור.",
    tag: "יעדים",
    tagColor: "bg-[#2563eb] text-white",
    readTime: "8 דק׳ קריאה",
    image: "/ztl-italy-hero.avif",
    publishedAt: "2026-05-21",
    published: true,
  },
  {
    slug: "driving-license-abroad",
    title: "רישיון נהיגה ישראלי בהשכרת רכב בחו״ל",
    excerpt:
      "מה הדלפק מקבל ומה לא. רישיון פג, רישיון זמני, צילום בטלפון, שם שונה. כל הטעויות שגורמות לאנשים לפספס את הרכב שלהם.",
    tag: "מסמכים",
    tagColor: "bg-gold text-navy",
    readTime: "6 דק׳ קריאה",
    image: "/israeli-driving-license.avif",
    publishedAt: "2026-04-09",
    published: true,
  },
  {
    slug: "international-driving-permit",
    title: "רישיון נהיגה בינלאומי (IDP): חובה שאף אחד לא מסביר",
    excerpt:
      "הרישיון הישראלי לא מספיק לבד. לפי החוק הבינלאומי צריך גם רישיון נהיגה בינלאומי. למה הדלפק לא תמיד מבקש, ואיך מוציאים אחד בפחות מרבע שעה.",
    tag: "מסמכים",
    tagColor: "bg-gold text-navy",
    readTime: "5 דק׳ קריאה",
    image: "/idp-travel.avif",
    publishedAt: "2026-04-09",
    published: true,
  },
  {
    slug: "idp-stations",
    title: "איפה מנפיקים רישיון נהיגה בינלאומי בישראל?",
    excerpt:
      "66 תחנות מורשות ברחבי הארץ, עם חיפוש לפי עיר. כתובת, טלפון ושעות פתיחה לכל תחנה. מבוסס על נתוני משרד התחבורה, עדכני לאפריל 2026.",
    tag: "מסמכים",
    tagColor: "bg-gold text-navy",
    readTime: "כלי חיפוש",
    image: "/idp-counter.avif",
    publishedAt: "2026-04-27",
    published: true,
  },
  {
    slug: "cdw-vs-scdw",
    title: "CDW או SCDW: מה באמת שווה לקחת?",
    excerpt:
      "ההבדל בין ביטוח בסיסי למשלים יכול להסתכם באלפי יורו. הנה איך להחליט נכון, לפי המצב שלך ולא לפי מה שמציעים בדלפק.",
    tag: "ביטוח",
    tagColor: "bg-navy text-white",
    readTime: "5 דק׳ קריאה",
    image: null,
    publishedAt: "2026-06-01",
    published: false,
  },
  {
    slug: "usa-car-rental",
    title: "השכרת רכב בארה״ב: כל מה שישראלים צריכים לדעת",
    excerpt:
      "ארה״ב זה לא אירופה. הכללים שונים, הביטוח שונה, ואפילו הפיקדון עובד אחרת. הנה מה שחייבים לבדוק לפני שמזמינים.",
    tag: "יעדים",
    tagColor: "bg-[#2563eb] text-white",
    readTime: "7 דק׳ קריאה",
    image: null,
    publishedAt: "2026-06-01",
    published: false,
  },
  {
    slug: "7-mistakes",
    title: "7 טעויות שכולם עושים כשמשכירים רכב בחו״ל",
    excerpt:
      "מרישיון בינלאומי שנשכח ועד מיכל דלק שלא מלא. הטעויות שחוזרות על עצמן שוב ושוב ואיך להימנע מהן.",
    tag: "חיסכון",
    tagColor: "bg-green-700 text-white",
    readTime: "6 דק׳ קריאה",
    image: null,
    publishedAt: "2026-06-01",
    published: false,
  },
];

export const posts: Post[] = rawPosts.map((p) => ({
  ...p,
  date: p.published ? hebrewMonthYear(p.publishedAt) : "בקרוב",
}));

export function postHref(post: Post): string {
  return `/posts/${post.slug}`;
}

export const publishedPosts: Post[] = posts
  .filter((p) => p.published)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const allPostsSorted: Post[] = [...posts].sort((a, b) => {
  if (a.published !== b.published) return a.published ? -1 : 1;
  return b.publishedAt.localeCompare(a.publishedAt);
});

export function latestPosts(n = 3): Post[] {
  return publishedPosts.slice(0, n);
}
