# Architecture du site - דרך אגב

> Fichier d'état VIVANT. À mettre à jour à chaque ajout/suppression/renommage de page, route ou composant.
> Dernière mise à jour : 2026-07-03 (audit sécurité + qualité complet, refactor).

Site live : https://derekh-agav.vercel.app | Repo : https://github.com/Shmulix/derekh-agav (`master`)

---

## Routes / Pages

| Route | Fichier | Statut | Notes |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ En ligne | Home : hero + recherche Fuse.js + sections + 3 derniers posts |
| `/guide` | `app/guide/page.tsx` | ✅ En ligne | Guide complet, 19 sections (voir `docs/content/guide.md`) |
| `/posts` | `app/posts/page.tsx` | ✅ En ligne | Archive des articles, grille 3/2/1 col |
| `/posts/ztl-italy` | `app/posts/ztl-italy/page.tsx` | ✅ En ligne | Post ZTL Italie |
| `/posts/driving-license-abroad` | `app/posts/driving-license-abroad/page.tsx` | ✅ En ligne | Permis israélien à l'étranger |
| `/posts/international-driving-permit` | `app/posts/international-driving-permit/page.tsx` | ✅ En ligne | Permis international (IDP) |
| `/posts/idp-stations` | `app/posts/idp-stations/page.tsx` | ✅ En ligne | 66 stations IDP (données dans `lib/data/idp-locations.ts`) |
| `/posts/rental-platforms` | `app/posts/rental-platforms/page.tsx` | ✅ En ligne (placeholder) | Comparatif éditorial simulé. Cible des CTAs en mode normal. Volontairement hors registre `lib/posts.ts` (pas dans l'archive). |
| 404 | `app/not-found.tsx` | ✅ | Page 404 hébreu RTL, charte navy/gold |
| erreur | `app/error.tsx` | ✅ | Error boundary générique avec bouton retry |
| `/robots.txt` | `app/robots.ts` | ✅ | Piloté par `INDEXING_ENABLED` (site-mode.mjs). Actuellement : Disallow all. |
| `/sitemap.xml` | `app/sitemap.ts` | ✅ | Généré depuis `lib/posts.ts`. Prêt pour le lancement SEO. |
| favicon | `app/icon.svg` + `app/apple-icon.png` | ✅ | Carré navy, point gold + tirets de route |

Pas de route dynamique `[slug]` : chaque post est une page `.tsx` autonome (pas de MDX).

---

## Interrupteurs (backend only) : `site-mode.mjs` (racine)

Source de vérité UNIQUE, lue par `next.config.mjs` ET `lib/site-config.ts` (qui la ré-exporte).

- `ANONYMOUS_MODE` (actuellement **true**) : identité générique partout, CTA -> PDF anonyme, et **redirections** `/samuel.avif` -> `/avatar-anon.avif`, `/guide-ebook.pdf` -> `/guide-ebook-anon.pdf` (les fichiers d'identité ne sont plus servables en URL directe).
- `INDEXING_ENABLED` (actuellement **false**) : noindex metadata + robots Disallow. Passer à true au lancement SEO (active robots Allow + déclare le sitemap).

## Sécurité (next.config.mjs)

Headers sur toutes les routes : CSP stricte (`default-src 'self'`, `frame-ancestors 'none'`), HSTS 2 ans, X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy. `poweredByHeader: false`. Next.js épinglé >= 14.2.35 (correctifs critiques).

---

## Composants

**Globaux** : `Header.tsx` / `Footer.tsx` (guide + pages posts), `HeaderV2.tsx` / `FooterV2.tsx` (home + archive `/posts`) : deux systèmes coexistent depuis la refonte v2, candidats à unification. `HeroSearch.tsx` (recherche Fuse.js, pattern combobox accessible + navigation clavier), `Reveal.tsx`, `AuthorAvatar.tsx`, `BookingCTA.tsx`, `v2/TestimonialsV2.tsx`, `v2/LaneDash.tsx`.

**Hooks partagés** : `useScrollCollapse.ts` (repli FAB par position), `useSheetDialog.ts` (dialog accessible : Escape, focus trap, retour focus).

**Guide** (`components/guide/`) : `Accordion` (aria-expanded), `TableOfContents`, `MobileTOC` + `MobileFloatingCTA` (bottom-sheets `role="dialog"`), `BackToTop`, `InsuranceTabs` (roles tabs), `DocTiles`, `AcrissTable`, `LexiconSection`, `EbookCTA`.

**Posts** (`components/posts/`) : `IDPLocations` (recherche stations, data dans `lib/data/`), `IDPGallery` (galerie + lightbox dialog), `ArticleBreadcrumb` (fil d'Ariane commun), `AuthorByline` (carte auteur commune).

**Lib** : `site-config.ts` (identité/CTA selon mode + `SITE_URL`), `posts.ts` (registre), `article-jsonld.ts` (`buildArticleJsonLd`, JSON-LD Article partagé, auteur suit le mode anonyme), `data/idp-locations.ts` (66 stations).

Supprimés (2026-07-03) : `components/Testimonials.tsx` (mort), `public/exemple-idp.png`, `public/intro.mp3` (orphelins), `public/robots.txt` (remplacé par `app/robots.ts`).

---

## Stack technique (résumé)

Next.js 14.2.35 (App Router) · TypeScript strict · Tailwind CSS · Heebo (`next/font/google`) · Lucide React · Fuse.js · next/image + AVIF (sharp) · SEO via `next/metadata` + `buildArticleJsonLd` par post. Pas de shadcn/ui, pas de MDX. Détails dans le CLAUDE.md (TECH STACK).

---

## ⚠️ Problèmes connus / à faire

1. **Site en `noindex`** (voulu, pré-lancement) : flipper `INDEXING_ENABLED` dans `site-mode.mjs` au lancement SEO.
2. `rental-platforms` : liens plateformes = sites officiels, à remplacer par les vrais liens d'affiliation.
3. Duplication restante des **heros d'article** (5 posts) : candidat à un composant `ArticleHero` (non fait, risque visuel vs bénéfice).
4. Double Header/Footer v1/v2 : à unifier quand la refonte v2 sera généralisée.
5. `logo.svg` pèse 130 KB (probablement raster embarqué) : à optimiser.
