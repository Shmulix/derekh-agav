// ──────────────────────────────────────────────────────────────
//  MODE ANONYME (backend only)
//  Interrupteur unique. Modifiable UNIQUEMENT ici (via Claude Code).
//  Jamais exposé au front, pas d'interface admin.
//
//  true  = anonymise tout (nom/photo/récit de Samuel remplacés par une
//          identité générique) ET remplace tous les CTA d'affiliation
//          (« où réserver ») par le téléchargement du PDF.
//  false = comportement normal, rien ne change.
// ──────────────────────────────────────────────────────────────
export const ANONYMOUS_MODE = false;

// Identité de l'auteur selon le mode.
export const author = {
  name: ANONYMOUS_MODE ? "מומחה דרך אגב" : "סמואל פרץ",
  title: "מומחה השכרת רכב בינלאומית",
  image: ANONYMOUS_MODE ? "/avatar-anon.png" : "/samuel.avif",
  initials: ANONYMOUS_MODE ? "דא" : "ס",
  // Affiche le récit personnel détaillé (carrière) dans le guide.
  showStory: !ANONYMOUS_MODE,
} as const;

// Auteur pour le JSON-LD : Personne nommée (normal) ou Organisation (anonyme).
export const authorJsonLd = ANONYMOUS_MODE
  ? { "@type": "Organization", name: "דרך אגב", url: "https://derekh-agav.vercel.app" }
  : { "@type": "Person", name: "סמואל פרץ", url: "https://derekh-agav.vercel.app/about" };

// CTA « où réserver » : lien d'affiliation (normal) ou téléchargement du PDF (anonyme).
export const booking = ANONYMOUS_MODE
  ? { href: "/guide-ebook.pdf", download: true, short: "הורד את המדריך ←", long: "הורד את המדריך המלא (PDF) ←" }
  : { href: "/posts/rental-platforms", download: false, short: "איפה להזמין? ←", long: "איפה הכי כדאי להזמין? השוואה מלאה ←" };
