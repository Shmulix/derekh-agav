# דרך אגב — Hebrew RTL Car Rental Information & Affiliate Website

## PROJECT GOAL
Build a Hebrew RTL car rental **information & passive affiliate** website for Israeli travelers renting abroad.
Site name: **דרך אגב** (double meaning: "by the way" + "דרך" = road)
Expert-written content (10+ years industry experience). Maximum trust, zero fluff.

---

## ESPACE /admin SÉCURISÉ (RÈGLES PERMANENTES, MANDATORY)

Le site héberge une zone `/admin` protégée par mot de passe : une **documentation technique interactive en hébreu** (14 sections, pour une passation du projet). Détails complets dans `docs/site-architecture.md`. Règles à ne JAMAIS violer :

1. **Aucun lien vers `/admin` depuis le site public.** L'URL n'est référencée nulle part (ni nav, ni footer, ni sitemap).
2. **Anti-fuite statique** : le contenu de la doc (`lib/admin-docs/**`) est importé UNIQUEMENT par des Server Components. JAMAIS par un fichier `"use client"` (sinon il part dans les chunks JS publics de `/_next/static`). Les composants clients de `components/admin/` reçoivent tout par **props**.
3. **`/admin` reste noindex même après le lancement** : `app/robots.ts` doit garder `Disallow: /admin` dans les deux branches, et jamais l'ajouter à `app/sitemap.ts`.
4. **Secrets** : `ADMIN_PASSWORD_HASH` (format `scrypt:N:r:p:sel:hash`) et `ADMIN_SESSION_SECRET`, en env vars uniquement (jamais dans le repo). Ne JAMAIS logger mot de passe / hash / jeton. Rotation via `scripts/admin-hash-password.mjs`.
5. Les pages `/admin` sont dynamiques (`force-dynamic`) : ne jamais ajouter de `generateStaticParams` sous `/admin`.

---

## BRAND IDENTITY & TONE OF VOICE

### Site Name
**דרך אגב** — Logo: text-based, navy + gold dot or road-dash accent.
Tagline: "כי מי שיודע, לא מחכה לדלפק"

### Tone of Voice
**Friendly-professional with character. Raw but smart. No corporate speak.**

Key attributes:
- **Direct and confident** — Says what it means. No hedging, no "it depends," no empty disclaimers.
- **Slightly raw / blunt** — Willing to say "זה טעות", "זה לא שווה כלום", "אף אחד לא יגיד לך את זה בדלפק."
- **Warm and human** — Talks TO the reader, not AT them. Uses "אתה" naturally.
- **Expert without ego** — The authority comes from experience, not from being preachy.
- **Occasional dry humor** — A well-placed sarcastic line when warranted. Not forced.

### What this tone is NOT:
- ❌ Not corporate/formal ("ברוכים הבאים לאתר המידע שלנו...")
- ❌ Not overly casual/slang ("וואלה חבר'ה...")
- ❌ Not preachy or condescending
- ❌ Not generic SEO filler content

### Voice Examples (use as reference for all copy):
- Instead of: "חשוב לוודא שברשותך את כל המסמכים הנדרשים"
  Write: "בלי רישיון פיזי? אין רכב. זה לא עיניים צרות. ככה זה עובד."
- Instead of: "מומלץ לרכוש ביטוח מקיף"
  Write: "CDW בלי SCDW זה כמו לצאת בגשם עם מטרייה שבורה. כיסוי חלקי זה לא כיסוי."
- Instead of: "האתר מספק מידע מקצועי ואמין"
  Write: "המדריך הזה נכתב על ידי מי שעמד מהצד השני של הדלפק. לא גוגל. אני."

---

## WRITING RULES — MANDATORY

### ⛔ EM DASH ABSOLUTE BAN — THIS IS A HARD RULE, NO EXCEPTIONS
**NEVER write the character `—` (em dash / U+2014) anywhere in site content.**
This has been violated repeatedly. It is unacceptable.
- Replace with a period `.`
- Or with a colon `:`
- Or restructure the sentence entirely
- This applies to ALL files: page.tsx, components, MDX posts, tooltips, callouts, accordion text, JSON-LD, everything.
- Before writing ANY sentence, check it has no `—` character.
- **If you see yourself about to write `—`, stop and rewrite the sentence.**

---

## VOCABULARY RULES — MANDATORY

- **Never use "ספק"** — it's a B2B term. Always use:
  - "חברת ההשכרה" (the rental company) — singular reference
  - "חברות ההשכרה" — plural
  - "התחנה" — when referring to a physical counter/location
- This applies to ALL content: guide, posts, UI copy, tooltips, everything.

---

## TECH STACK

- Framework: Next.js 14.2.5 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS (PAS de shadcn/ui : UI faite main avec Tailwind)
- Fonts: Heebo (next/font/google)
- Icons: Lucide React
- Search: Fuse.js (client-side fuzzy search)
- Content: pages React `.tsx` natives. Le guide et CHAQUE post sont des composants `.tsx` (PAS de MDX, PAS de next-mdx-remote). Métadonnées des posts centralisées dans `lib/posts.ts`.
- Images: next/image + AVIF (sharp pour l'optimisation)
- SEO: API next/metadata + JSON-LD (`articleJsonLd` dans chaque post)
- Deployment: Vercel

---

## DESIGN SYSTEM

- Primary: #1a2f5e (deep navy)
- Accent: #c9a227 (gold)
- Background: #ffffff / #f8f9fc (light grey sections)
- Text: #1a1a2e
- Danger boxes: bg #fff3f3 border #e53e3e
- Tip boxes: bg #fffbea border #c9a227
- Info boxes: bg #f0f4ff border #1a2f5e
- Style: ultra-professional, institutional — maximum trust
- NO flashy animations, NO gradient abuse
- RTL throughout: `dir="rtl"`, `text-align: right`, `lang="he"`

---

## FICHIERS D'ÉTAT VIVANTS (NE PAS dupliquer ici)

L'état qui CHANGE avec le site ne vit PAS dans ce CLAUDE.md (qui ne contient que des règles stables). Il est dans des fichiers dédiés, à tenir à jour :

- **`docs/site-architecture.md`** : toutes les routes, pages, composants, liens cassés, problèmes connus.
  Règle : mettre à jour à chaque ajout / suppression / renommage de page, route ou composant.
- **`docs/content/`** : état du contenu. `_index.md` (sommaire posts + guide) + `guide.md` + un fichier par post.
  Règle : mettre à jour `_index.md` ET le fichier concerné à chaque création ou modification substantielle d'un post ou d'une section du guide.

Ces fichiers complètent la mémoire (`project_context.md`) et le journal (`.claude/journal/JOURNAL.md`). AVANT de travailler sur une page ou un contenu, lire le fichier correspondant.

---

## TECHNICAL REQUIREMENTS

- Full RTL (`dir="rtl"`, `lang="he"` on `<html>`)
- Fuse.js: indexes guide sections + post titles/tags — live dropdown (content search ONLY)
- **NO booking forms anywhere** — no date pickers, no pickup/return fields, no car search widgets
- This is an INFORMATION site. The only search is content search.
- Mobile-first, fully responsive
- SEO: proper metadata, Open Graph, semantic HTML
- No popups, no cookie banners, no chat widgets

---

## IMAGES — RÈGLE DE TRAITEMENT (MANDATORY)

Toute image mise en ligne doit être traitée et optimisée AVANT intégration. Jamais d'image brute (PNG/JPG lourd, mauvaise dimension) servie telle quelle.

**Étape 1 — Cadrer l'usage (avant de toucher l'image).**
Que l'utilisateur fournisse l'image OU que Claude décide d'en ajouter une, TOUJOURS clarifier d'abord (demander à l'utilisateur si ce n'est pas évident, sinon se le poser) :
1. **But de l'image** : à quoi sert-elle (hero, illustration d'article, vignette, icône, image OG) ?
2. **Emplacement** : sur quelle page et dans quel bloc exactement ?
3. **Taille d'affichage réelle** : pleine largeur, carte, demi-colonne… (détermine la dimension cible).

**Étape 2 — Traiter (avec `sharp`, déjà installé).**
- **Format : AVIF**, toujours.
- **Dimensions adaptées à l'usage réel** : ne pas servir du 4000px pour un affichage de 600px. Viser ~1.5x à 2x la taille d'affichage max (pour les écrans Retina), pas plus.
- **Compresser** pour le meilleur ratio poids / qualité (pas de perte visible).
- Renseigner `width`/`height` et un `alt` descriptif (perf + SEO + accessibilité).

**Objectif** : l'image la plus légère possible, à la dimension juste, en AVIF. Priorité à la vitesse de chargement, au SEO et à la cohérence d'affichage.

Référence d'images existantes et hero des posts : voir `docs/site-architecture.md`.

---

## AFFILIATE STRATEGY

**Passive affiliation through content — NOT direct booking.**

- CTAs never link to booking engines or price comparison widgets
- All CTAs link to `/posts/rental-platforms` — an editorial post comparing the main platforms (Rentalcars, DiscoverCars, Kayak, etc.) by service quality, not just price
- Affiliation is natural: user reads the comparison, clicks a platform link, books there
- No intrusive popups, no forced redirects, no sales panels
- Affiliate disclaimer visible in footer on every page

> NOTE (état actuel) : tous les CTAs pointent vers `/posts/rental-platforms`. Tant que les affiliations réelles ne sont pas en place, cette page contient un **contenu simulé (placeholder éditorial)** pour éviter le 404. À remplacer par le vrai comparatif quand les deals affiliés seront prêts.

### CTA text convention:
- Long CTAs (hero, end of guide, final banner): `"איפה הכי כדאי להזמין? השוואה מלאה ←"`
- Short CTAs (header, aside, floating button): `"איפה להזמין? ←"`

---

## CONTENU (GUIDE & POSTS)

L'état détaillé du guide (19 sections) et de chaque post vit dans `docs/content/` : `_index.md` (sommaire), `guide.md`, et un fichier `post-*.md` par article. La logique d'exclusion d'assurance à maintenir (catégories orange / rouge) est documentée dans `docs/content/guide.md`.

---

## MODE ANONYME (backend only)

Interrupteur centralisé dans `lib/site-config.ts` : `export const ANONYMOUS_MODE = false | true`.
Modifiable UNIQUEMENT via Claude Code (pas d'UI admin, pas exposé au front).

Quand `true` :
- L'identité de l'auteur (nom « סמואל פרץ », photo `/samuel.avif`, récit de carrière dans le guide) est remplacée par une identité générique (`מומחה דרך אגב`, avatar `/avatar-anon.png`, récit masqué).
- Tous les CTA d'affiliation (« où réserver » → `/posts/rental-platforms`) deviennent le téléchargement du PDF (`/guide-ebook.pdf`).
- JSON-LD auteur passe en `Organization`.

Quand `false` : comportement normal, rien ne change.

Tout passe par `lib/site-config.ts` (`author`, `authorJsonLd`, `booking`) + les composants `components/BookingCTA.tsx` et `components/AuthorAvatar.tsx`. Pour activer/désactiver : changer le booléen, `npm run build`, `/deploy-site`.

---

## DEPLOYMENT

The site is live on Vercel: **https://derekh-agav.vercel.app**
GitHub repo: **https://github.com/Shmulix/derekh-agav**
Branch: **master**

### VERCEL ACCESS — already authenticated, no need to search

The Vercel CLI is logged in as user **`shmulix`**, team **`samuels-projects-963d06d6`**.
The project on Vercel is **`derekh-agav`** → live URL **https://derekh-agav.vercel.app**.

I have full account access through the CLI (no web dashboard clicking, but everything else):

```bash
npx vercel whoami                       # confirm logged-in user
npx vercel projects ls                  # list all projects on the account
npx vercel ls derekh-agav               # list deployments for this project
npx vercel inspect <deployment-url>     # details of a specific deployment
npx vercel logs <deployment-url>        # build + runtime logs
npx vercel env ls                       # list env variables
npx vercel domains ls                   # list domains
npx vercel --prod                       # deploy current local code to production
```

To check whether the LIVE site matches local code: compare the latest production
deployment age (`npx vercel ls derekh-agav`) against recent local commits (`git log`).
If local is ahead, run `/deploy-site` to sync.

### MANDATORY: After every modification — NO EXCEPTIONS

Use the **`/deploy-site` skill** after every single code change, no matter how small.

```
/deploy-site description of what was changed
```

The skill will automatically:
1. `git add . && git commit`
2. `git push origin master` (best effort — continues even if it times out with HTTP 408)
3. `npx vercel --prod` — **this is the only reliable deploy method**
4. Confirm: `✓ Site deployed: https://derekh-agav.vercel.app`

**Never** finish a task without running `/deploy-site`. Local, GitHub and Vercel must always be in sync.

### MANDATORY: Update dateModified on every post edit

After every modification to a post page (any file under `app/posts/`), update the `dateModified` field in the `articleJsonLd` object at the top of that page to today's date in `YYYY-MM-DD` format.

```ts
dateModified: "2026-04-15", // update this on every edit
```

---

## JOURNAL DE BORD : MÉMOIRE DE SESSION (MANDATORY)

Le projet tient un journal de bord persistant pour garder le contexte propre d'une session à l'autre. Tout est sous `.claude/journal/` (local, hors git). Deux niveaux :

1. **Capture automatique (déterministe, via hooks)** : `.claude/journal/auto-YYYY-MM.log`
   Chaque prompt et chaque fin de tour avec changements de fichiers y sont écrits automatiquement par les hooks utilisateur `UserPromptSubmit` et `Stop`. C'est le filet de sécurité. Ne pas éditer à la main.

2. **Journal curé (lisible, écrit par Claude)** : `.claude/journal/JOURNAL.md`
   À LA FIN DE CHAQUE ITÉRATION qui modifie le projet ou prend une décision, AJOUTER une entrée en bas du fichier, AVANT de lancer `/deploy-site` :

   ```
   ## YYYY-MM-DD HH:MM : titre court de l'itération
   - Demande : ce que l'utilisateur a demandé (1 ligne)
   - Fait : ce qui a été fait (puces courtes)
   - Fichiers : fichiers touchés
   - Déploiement : oui (URL) / non / n/a
   ```

   Ne PAS journaliser les échanges triviaux (questions sans action, "merci"). Une entrée = une itération de travail réelle.

Au démarrage, le hook `SessionStart` affiche automatiquement les dernières entrées du JOURNAL.md + l'activité auto récente. Lire ce bloc en premier pour savoir où on en est.

Pour l'état GLOBAL haut niveau (vue d'ensemble, pas chronologique), continuer à mettre à jour la mémoire `project_context.md` aux jalons importants.

### Ancrage permanent (à chaque session ET chaque prompt)

Sources de vérité à consulter en continu, dans cet ordre : **CLAUDE.md** (ce fichier, instructions projet) → **mémoire** (`MEMORY.md` + `project_context.md`) → **journal de bord** (`.claude/journal/JOURNAL.md`).

- Le CLAUDE.md et la mémoire sont **auto-chargés à chaque démarrage de session** et persistent toute la session (ré-injectés même après une compaction de contexte).
- Le hook `UserPromptSubmit` **ré-injecte à chaque prompt** un rappel + les dernières entrées du journal.
- Toujours raisonner à partir de ces sources pour ne jamais perdre le fil. En cas de doute sur l'état du projet, relire `project_context.md` et le journal AVANT d'agir.

---

## SESSION STARTUP — MANDATORY

Au début de chaque nouvelle session (pas `-c` continue), faire dans cet ordre :

1. **Vérifier si Claude Code est à jour**
```bash
claude update
```
Si une mise à jour est disponible, signaler à l'utilisateur avant de continuer.

2. **Lire le Claude Code Guide** via le skill dédié :
```
/claude-code-guide
```
Permet de connaître les dernières fonctionnalités disponibles (hooks, MCP, slash commands, etc.) et d'en tirer parti pour ce projet.

3. **Lire la mémoire du projet** (auto-chargée via MEMORY.md — vérifier qu'elle est à jour)

---

## COMMANDS TO REMEMBER

```bash
# Start dev server (Windows — use PowerShell Start-Process, not nohup)
powershell -Command "Start-Process -FilePath 'C:\\Program Files\\nodejs\\npm.cmd' -ArgumentList 'run','dev' -WorkingDirectory 'C:\\Users\\sampe\\Desktop\\car rental project' -RedirectStandardOutput 'C:\\Temp\\nextdev-out.log' -RedirectStandardError 'C:\\Temp\\nextdev-err.log' -WindowStyle Hidden"

# Build for production
npm run build

# Run Playwright tests
npx playwright test
```
