// ──────────────────────────────────────────────────────────────
//  Les interrupteurs (ANONYMOUS_MODE, INDEXING_ENABLED) vivent dans
//  site-mode.mjs à la racine : source unique lue aussi par next.config.mjs
//  (redirections de /samuel.avif et /guide-ebook.pdf en mode anonyme).
//  Pour changer de mode : éditer site-mode.mjs, npm run build, /deploy-site.
// ──────────────────────────────────────────────────────────────
import { ANONYMOUS_MODE, INDEXING_ENABLED } from "@/site-mode.mjs";

export { ANONYMOUS_MODE, INDEXING_ENABLED };

// URL canonique du site (une seule définition pour metadata + JSON-LD).
export const SITE_URL = "https://derekh-agav.vercel.app";

// Identité de l'auteur selon le mode.
export const author = {
  name: ANONYMOUS_MODE ? "מומחה דרך אגב" : "סמואל פרץ",
  title: "מומחה השכרת רכב בינלאומית",
  image: ANONYMOUS_MODE ? "/avatar-anon.avif" : "/samuel.avif",
  initials: ANONYMOUS_MODE ? "דא" : "ס",
  // Affiche le récit personnel détaillé (carrière) dans le guide.
  showStory: !ANONYMOUS_MODE,
} as const;

// Intro / bio de l'auteur (home + sidebar guide).
// En mode anonyme : GÉNÉRALISÉ, sans le parcours pro spécifique (pour ne pas
// donner l'impression que c'est lui, même maquillé).
export const authorIntro = ANONYMOUS_MODE
  ? {
      headline: ["מעל עשר שנים בתעשייה.", "עכשיו בצד שלך."],
      paragraphs: [
        "התוכן באתר מבוסס על למעלה מעשר שנים של ניסיון מקצועי בתעשיית השכרת הרכב הבינלאומית.",
        "מתוך הניסיון הזה ברור מה עובד, מה לא, ולמה נופלים שוב ושוב על אותם דברים.",
        "האתר הזה הוא מה שהיינו רוצים שיהיה קיים כשלקוחות שואלים ׳אז מה לעשות?׳",
      ],
      sidebar: "מבוסס על למעלה מעשר שנים של ניסיון בתעשיית השכרת הרכב הבינלאומית.",
    }
  : {
      headline: ["עשר שנים מאחורי הדלפק.", "עכשיו אני בצד שלך."],
      paragraphs: [
        "עבדתי מעל עשר שנים בתחום השכרת הרכב הבינלאומי: סוכן הזמנות, ניהול אופרציה, ניהול מוקד, ובסוף שיווק שותפים.",
        "כלומר, הבנתי בדיוק מה עובד, מה לא, ולמה אנשים נופלים על אותם דברים שוב ושוב.",
        "האתר הזה הוא מה שהייתי רוצה שיהיה קיים כשהלקוחות שלי שאלו אותי ״אז מה לעשות?״",
      ],
      sidebar: "עשר שנים בתעשיית השכרת הרכב: תפעול, ניהול ושירות לקוחות מהצד של חברת ההשכרה. המדריך הזה מבוסס על מה שראיתי בשטח.",
    };

// Auteur pour le JSON-LD : Personne nommée (normal) ou Organisation (anonyme).
export const authorJsonLd = ANONYMOUS_MODE
  ? { "@type": "Organization", name: "דרך אגב", url: SITE_URL }
  : { "@type": "Person", name: "סמואל פרץ", url: SITE_URL };

// PDF du guide servi selon le mode (anonyme = version sans identité, même style v2).
export const pdfHref = ANONYMOUS_MODE ? "/guide-ebook-anon.pdf" : "/guide-ebook.pdf";

// CTA « où réserver » : lien d'affiliation (normal) ou téléchargement du PDF (anonyme).
export const booking = ANONYMOUS_MODE
  ? { href: pdfHref, download: true, short: "הורד את המדריך ←", long: "הורד את המדריך המלא (PDF) ←" }
  : { href: "/posts/rental-platforms", download: false, short: "איפה להזמין? ←", long: "איפה הכי כדאי להזמין? השוואה מלאה ←" };
