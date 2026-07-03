// ──────────────────────────────────────────────────────────────
//  INTERRUPTEURS DU SITE (backend only)
//  Source de vérité UNIQUE, lue à la fois par next.config.mjs
//  (redirections des fichiers d'identité) et par lib/site-config.ts.
//  Modifiable UNIQUEMENT ici via Claude Code, jamais exposé au front.
//  Après modification : npm run build + /deploy-site.
// ──────────────────────────────────────────────────────────────

// true  = identité de l'auteur masquée partout, CTA affiliation -> PDF,
//         ET /samuel.avif + /guide-ebook.pdf redirigés vers les versions anonymes.
// false = comportement normal.
export const ANONYMOUS_MODE = true;

// false = site en noindex + robots.txt Disallow (pré-lancement).
// true  = indexation Google activée (robots + sitemap + metadata). À passer
//         à true UNIQUEMENT au lancement SEO officiel.
export const INDEXING_ENABLED = false;
