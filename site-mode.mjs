// ──────────────────────────────────────────────────────────────
//  INTERRUPTEURS DU SITE
//  Source de vérité UNIQUE, lue à la fois par next.config.mjs
//  (redirections des fichiers d'identité) et par lib/site-config.ts.
// ──────────────────────────────────────────────────────────────

// MODE ANONYME : piloté par la variable d'environnement
// NEXT_PUBLIC_ANONYMOUS_MODE ("true"/"false"), inlinée AU BUILD.
// Deux façons de la changer :
//   1. Le bouton dans l'admin (/admin) : met à jour la variable sur Vercel
//      et déclenche automatiquement un redéploiement (~2 min).
//   2. À la main : modifier la variable (Vercel + .env.local) puis redéployer.
// Fallback si la variable est absente : true (anonyme), le mode le plus sûr.
// true  = identité de l'auteur masquée partout, CTA affiliation -> PDF,
//         ET /samuel.avif + /guide-ebook.pdf redirigés vers les versions anonymes.
// false = comportement normal.
export const ANONYMOUS_MODE = process.env.NEXT_PUBLIC_ANONYMOUS_MODE
  ? process.env.NEXT_PUBLIC_ANONYMOUS_MODE === "true"
  : true;

// false = site en noindex + robots.txt Disallow (pré-lancement).
// true  = indexation Google activée (robots + sitemap + metadata). À passer
//         à true UNIQUEMENT au lancement SEO officiel. Reste géré dans le code.
export const INDEXING_ENABLED = false;
