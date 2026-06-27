# Architecture du site - דרך אגב

> Fichier d'état VIVANT. À mettre à jour à chaque ajout/suppression/renommage de page, route ou composant.
> Dernière mise à jour : 2026-06-27 (scan live + code local).

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
| `/posts/idp-stations` | `app/posts/idp-stations/page.tsx` | ✅ En ligne | 66 stations IDP, outil de recherche |
| `/posts/rental-platforms` | `app/posts/rental-platforms/page.tsx` | ✅ En ligne (placeholder) | Comparatif éditorial simulé. Cible de tous les CTAs. Liens plateformes = sites officiels, à remplacer par les liens d'affiliation. Pas dans `posts.ts` (hors archive). |
| `/about` | (à créer) | ❌ 404 | Lien « אודות » présent dans la nav (`Header.tsx`) mais page inexistante. |

Pas de route dynamique `[slug]` : chaque post est une page `.tsx` autonome (pas de MDX).

---

## Composants

**Globaux** : `Header.tsx` (nav + CTA gold vers `/posts/rental-platforms`), `Footer.tsx` (liens + disclaimer affiliation + copyright), `HeroSearch.tsx` (recherche Fuse.js : indexe les 19 sections du guide + posts publiés).

**Guide** (`components/guide/`) : `Accordion`, `TableOfContents`, `MobileTOC` (bottom-[4.5rem]), `MobileFloatingCTA` (pill gold bottom-4 right-4, z-50 / panel z-[60]), `BackToTop`, `InsuranceTabs` (logique exclusion orange/rouge), `DocTiles`, `AcrissTable`, `LexiconSection`.

**Posts** (`components/posts/`) : `IDPLocations` (recherche des 66 stations, utilisé par `idp-stations`), `IDPGallery` (galerie de traductions du permis, utilisé par `international-driving-permit`).

---

## Stack technique (résumé)

Next.js 14.2.5 (App Router) · TypeScript · Tailwind CSS · police Heebo (`next/font/google`) · Lucide React (icônes) · Fuse.js (recherche) · next/image + AVIF (sharp) · SEO via `next/metadata` + `articleJsonLd` par post. Pas de shadcn/ui, pas de MDX. Détails dans le CLAUDE.md (TECH STACK).

---

## ⚠️ Problèmes connus

1. ~~`/posts/rental-platforms` = 404~~ RÉSOLU (2026-06-27) : page placeholder en ligne (contenu simulé). Reste à remplacer les liens plateformes par les vrais liens d'affiliation.
2. **`/about` = 404** : lien cassé dans la nav.
3. **Site en `noindex`** : `app/layout.tsx` a `robots: { index: false, follow: false }`. Google ne référence rien. À retirer au lancement SEO.
4. **Écart live / local** : déploiement live du 2026-05-21 (~37 j). Local en avance (intro ZTL réécrite, .gitignore, centralisation posts) non déployé.
