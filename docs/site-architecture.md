# Architecture du site - דרך אגב

> Fichier d'état VIVANT. À mettre à jour à chaque ajout/suppression/renommage de page, route ou composant.
> Dernière mise à jour : 2026-07-04 (admin au design v2, login pro avec logo, events PDF/CTA, toggle mode anonyme depuis l'admin).

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
| `/admin/login` | `app/admin/login/page.tsx` | 🔒 Public | Page de connexion admin. Aucun contenu doc. noindex. |
| `/admin` | `app/admin/(protected)/page.tsx` | 🔒 Protégé | HUB : cartes תיעוד + אנליטיקס, état live du site |
| `/admin/docs` | `app/admin/(protected)/docs/page.tsx` | 🔒 Protégé | Index de la doc (14 cartes). Layout sidebar : `docs/layout.tsx` |
| `/admin/docs/[slug]` | `app/admin/(protected)/docs/[slug]/page.tsx` | 🔒 Protégé | Rendu d'une section de doc (14 sections) |
| `/admin/analytics` | `app/admin/(protected)/analytics/page.tsx` | 🔒 Protégé | Dashboard analytics (lit Neon) |
| `/api/hit` | `app/api/hit/route.ts` | Public (edge) | Collecte analytics sans cookies. Filtre bots, valide les paths, ne stocke pas d'IP |

Pas de route dynamique `[slug]` côté public : chaque post est une page `.tsx` autonome (pas de MDX). Le seul `[slug]` du site est `/admin/docs/[slug]` (protégé, jamais prérendu).

---

## Espace /admin sécurisé + documentation technique (2026-07-04)

Zone d'administration protégée qui héberge une **documentation technique interactive en hébreu** (14 sections, pensée pour une passation du projet de A à Z). Rien sous `/admin` n'est accessible sans authentification.

**Trois verrous indépendants** (défense en profondeur) :
1. `middleware.ts` (Edge, matcher `/admin/:path*`) : vérifie la session, redirige vers login sinon, pose `X-Robots-Tag: noindex` + `Cache-Control: no-store`.
2. `app/admin/(protected)/layout.tsx` : `requireSession()` côté serveur + `export const dynamic = "force-dynamic"`.
3. Chaque page protégée refait `requireSession()`.

**Crypto (zéro dépendance nouvelle)** : session = jeton maison `v1.<payload>.<HMAC-SHA256>` signé/vérifié via Web Crypto (`lib/admin/session.ts`, compatible Edge + Node). Mot de passe = scrypt via node:crypto (`lib/admin/auth.ts`, importé uniquement par la Server Action de login). Cookie `__Secure-admin_session` (HttpOnly, Secure, SameSite=Strict, Path=/admin, 12h). Throttle best-effort `lib/admin/throttle.ts`.

**Secrets (env vars, jamais dans le repo)** : `ADMIN_PASSWORD_HASH` (format `scrypt:N:r:p:sel:hash`, séparateur `:` car dotenv mange les segments `$`) et `ADMIN_SESSION_SECRET` (64 octets). Définis en local (`.env.local`, gitignored) et sur Vercel (production + preview + development). Fail-closed : var manquante = admin verrouillé.

**Règle anti-fuite (critique)** : `lib/admin-docs/**` (contenu de la doc) importé UNIQUEMENT par des Server Components. Jamais par un fichier `"use client"` (sinon le contenu partirait dans les chunks JS publics). Les composants clients reçoivent tout par props. Vérifié au build : 0 sentinelle hébreu dans `.next/static`, routes `/admin` toutes dynamiques (ƒ).

**robots/sitemap** : `/admin` en Disallow dans les DEUX branches de `app/robots.ts` (le flip de lancement n'ouvre jamais l'admin) ; jamais dans `app/sitemap.ts`.

**Contenu** : `lib/admin-docs/sections/01-overview.ts` … `14-launch-checklist.ts` + `lib/admin-docs/types.ts` (modèle de blocs) + `lib/admin-docs/index.ts` (registre, recherche). Composants UI : `components/admin/*` (BlockRenderer serveur + blocs, DocSearch/CopyButton/ColorPalette/AdminAccordion/ChecklistBlock clients). Rotation du mot de passe : `scripts/admin-hash-password.mjs`.

**⚠️ Aucun lien vers /admin depuis le site public.** L'URL n'est référencée nulle part.

## Analytics maison sans cookies (2026-07-04)

Mesure d'audience auto-hébergée, conforme à la règle "pas de bannière cookies" : **aucun cookie, aucun identifiant persistant, aucune IP stockée**. Le "visiteur unique" est un hash HMAC journalier (IP + UA + jour + `ANALYTICS_SALT`) qui change chaque jour : pas de suivi inter-jours possible.

- **Collecte** : `components/AnalyticsBeacon.tsx` (monté dans `app/layout.tsx`, n'émet jamais sur /admin) → POST `/api/hit` (edge). Validation stricte des paths publics, filtre bots, referrer réduit au hostname externe. Réponse toujours 204.
- **Stockage** : Neon Postgres, projet `derekh-agav-analytics` (ID `wandering-resonance-48421106`), table `pageviews` (day en fuseau Asia/Jerusalem). Pas de colonne pays (audience israélienne, décision Samuel).
- **Dashboard** : `/admin/analytics` (protégé) : aujourd'hui/7j/30j (vues + uniques), courbe 30 jours, top pages, mobile vs desktop, sources de trafic. Rendu serveur, zéro dépendance de chart.
- **Env vars** : `DATABASE_URL` + `ANALYTICS_SALT` (local + Vercel 3 environnements). Absents → collecte inactive et dashboard en mode "non configuré" (fail-safe, jamais d'erreur publique).
- **Dépendance ajoutée** : `@neondatabase/serverless` (driver HTTP léger, edge-compatible). Seule exception au "zéro dépendance" de l'admin, justifiée.
- **Événements de conversion** (2026-07-04) : table `events` (type `pdf` | `cta`, page, device, hash journalier). Le beacon écoute les clics délégués : lien contenant `guide-ebook`/`.pdf` → `pdf` ; lien `=== booking.href` → `cta`. Cartes "Conversions" sur `/admin/analytics`. En mode anonyme le CTA EST le PDF : comptés comme `pdf` (précédence).

## Toggle mode anonyme depuis l'admin (2026-07-04)

`NEXT_PUBLIC_ANONYMOUS_MODE` (env var, inlinée au build, fallback true) remplace le booléen codé en dur de `site-mode.mjs`. Le hub `/admin` a un bouton de bascule (`components/admin/AnonymousModeToggle.tsx`, confirmation 2 clics) → server action `toggleAnonymousMode()` dans `app/admin/(protected)/actions.ts` : revérifie la session, PATCH la variable sur les 3 environnements via l'API Vercel (`VERCEL_TOKEN`), puis POST `/v13/deployments` (gitSource GitHub repoId 1195524489, ref master) pour redéployer. Le changement est effectif après le build (~2 min). `INDEXING_ENABLED` reste géré dans le code, volontairement (pas de bouton pour l'indexation).

## Design admin = design v2 du site (2026-07-04)

L'admin suit le langage de la refonte publique : coins carrés (`rounded-none`), bordures `#e7e9f0`, fonds `#f7f8fb`, navy foncé `#0e1a30`, grilles éditoriales `gap-px`, micro-labels mono uppercase `tracking-[0.18em]`, LaneDash sous la topbar, logo `/logo.svg` inversé (`brightness-0 invert`) sur fond sombre. Login : fond navy, logo, carte blanche avec LaneDash. Callouts admin = mêmes classes que les Callout du guide public (bg-red-50/yellow-50/blue-50, filet droit 4px).

---

## Interrupteurs (backend only) : `site-mode.mjs` (racine)

Source de vérité UNIQUE, lue par `next.config.mjs` ET `lib/site-config.ts` (qui la ré-exporte).

- `ANONYMOUS_MODE` (actuellement **true**) : identité générique partout, CTA -> PDF anonyme, et **redirections** `/samuel.avif` -> `/avatar-anon.avif`, `/guide-ebook.pdf` -> `/guide-ebook-anon.pdf` (les fichiers d'identité ne sont plus servables en URL directe).
- `INDEXING_ENABLED` (actuellement **false**) : noindex metadata + robots Disallow. Passer à true au lancement SEO (active robots Allow + déclare le sitemap).

## Sécurité (next.config.mjs)

Headers sur toutes les routes : CSP stricte (`default-src 'self'`, `frame-ancestors 'none'`), HSTS 2 ans, X-Content-Type-Options, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy. `poweredByHeader: false`. Next.js épinglé >= 14.2.35 (correctifs critiques).

---

## Composants

**Globaux** : `Header.tsx` / `Footer.tsx` ré-exportent `v2/HeaderV2` / `v2/FooterV2` (un seul système réel ; la home et `/posts` importent les V2 directement, les autres pages via le ré-export). `HeroSearch.tsx` (recherche Fuse.js, pattern combobox accessible + navigation clavier), `Reveal.tsx`, `AuthorAvatar.tsx`, `BookingCTA.tsx`, `v2/TestimonialsV2.tsx`, `v2/LaneDash.tsx`.

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
4. `logo.svg` pèse 130 KB (probablement raster embarqué) : à optimiser.
