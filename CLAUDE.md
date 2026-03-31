# דרך אגב — Hebrew RTL Car Rental Information & Affiliate Website

## PROJECT GOAL
Build a Hebrew RTL car rental **information & passive affiliate** website for Israeli travelers renting abroad.
Site name: **דרך אגב** (double meaning: "by the way" + "דרך" = road)
Expert-written content (10+ years industry experience). Maximum trust, zero fluff.

---

## BRAND IDENTITY & TONE OF VOICE

### Site Name
**דרך אגב** — Logo: text-based, navy + gold dot or road-dash accent.
Tagline: "כי מי שיודע — לא מחכה לדלפק"

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
  Write: "בלי רישיון פיזי? אין רכב. זה לא עיניים צרות — ככה זה עובד."
- Instead of: "מומלץ לרכוש ביטוח מקיף"
  Write: "CDW בלי SCDW זה כמו לצאת בגשם עם מטרייה שבורה. כיסוי חלקי זה לא כיסוי."
- Instead of: "האתר מספק מידע מקצועי ואמין"
  Write: "המדריך הזה נכתב על ידי מי שעמד מהצד השני של הדלפק. לא גוגל. אני."

---

## VOCABULARY RULES — MANDATORY

- **Never use "ספק"** — it's a B2B term. Always use:
  - "חברת ההשכרה" (the rental company) — singular reference
  - "חברות ההשכרה" — plural
  - "התחנה" — when referring to a physical counter/location
- This applies to ALL content: guide, posts, UI copy, tooltips, everything.

---

## TECH STACK

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Fonts: Heebo (Google Fonts)
- Icons: Lucide React
- Search: Fuse.js (client-side fuzzy search)
- MDX: next-mdx-remote (blog posts & guides)
- Images: next/image with optimization (AVIF format preferred)
- SEO: next/metadata API
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

## SITE STRUCTURE

```
/                        → Home page
/guide                   → Full car rental guide
/posts                   → Blog/articles index
/posts/[slug]            → Individual MDX post
/posts/rental-platforms  → Platform comparison post (planned — main CTA target)
/about                   → About page
```

---

## HOME PAGE SECTIONS (in order)

1. **Header** (sticky) — Logo + Nav + CTA → `/posts/rental-platforms`
2. **Hero** — H1 + subtitle + Fuse.js content search + 2 CTAs
3. **About the site** — 3-column: reliable info / all topics / no conflict of interest
4. **Who am I** — Author credibility, 10+ years experience, trust metrics
5. **Why this content is better** — 4-column dark navy section
6. **The Guide** — Split layout, topics grid, CTA to /guide
7. **Latest Posts** — 3-column card grid
8. **Final CTA Banner** — Navy + gold, links to `/posts/rental-platforms`
9. **Footer** — Logo + links + affiliate disclaimer + copyright

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

## IMAGES

- Home hero: `/public/hero-bg.avif` (1920×1080, AVIF)
- Guide banner: `/public/hero-bg-banner.avif` (1920×480, AVIF, cropped 200px above bottom)
- Both use `next/image fill priority` + gradient overlay: `from-[#0d1f3c]/90 via-navy/80 to-[#0a1628]/85`

---

## AFFILIATE STRATEGY

**Passive affiliation through content — NOT direct booking.**

- CTAs never link to booking engines or price comparison widgets
- All CTAs link to `/posts/rental-platforms` — an editorial post comparing the main platforms (Rentalcars, DiscoverCars, Kayak, etc.) by service quality, not just price
- Affiliation is natural: user reads the comparison, clicks a platform link, books there
- No intrusive popups, no forced redirects, no sales panels
- Affiliate disclaimer visible in footer on every page

### CTA text convention:
- Long CTAs (hero, end of guide, final banner): `"איפה הכי כדאי להזמין? השוואה מלאה ←"`
- Short CTAs (header, aside, floating button): `"איפה להזמין? ←"`

---

## /guide PAGE — CURRENT STATE

Sections implemented:
1. מסמכים נדרשים (DocTiles) — Israeli license, international license, passport, credit card
2. פיקדון — deposit mechanics
3. קטגוריית הרכב — ACRISS codes, vehicle category table
4. ביטוח (InsuranceTabs + AccordionItem) — CDW/TP/LDW, SCDW/Super TP, supplemental coverage
5. גיל הנהג — young driver, senior driver
6. איסוף והחזרה — including after-hours, one-way fee
7. חציית גבול — border crossing, with tip to declare destination at booking
8. ציוד חורף — winter equipment by country table
9. דלק — all fuel policy types
10. קילומטרז׳ — unlimited vs. limited
11. קנסות ודוחות
12. השורה התחתונה
13. מילון מונחים (glossary)

Insurance exclusion logic (important — maintain this):
- **Orange category** (AlertCircle): "לא מכוסה בדרך הביטוח הבסיסי" — coverable via supplemental insurance
- **Red category** (XCircle): "לא מכוסה בשום מקרה, עם שום ביטוח או כיסוי" — never covered regardless

Mobile components:
- `MobileFloatingCTA` — gold pill at `bottom-4 right-4`, z-50; expands to panel z-[60]
- `MobileTOC` — repositioned to `bottom-[4.5rem]` to avoid overlap with CTA

**Planned sections to add:**
- כבישי אגרה (toll roads) — vignettes, automatic systems, admin fees from rental companies
- ציוד לטיול משפחתי / פריטים לפריבוק — child seats, GPS, automatic transmission, baby equipment

---

## PLANNED POSTS

- `/posts/rental-platforms` — Main platform comparison: Rentalcars, DiscoverCars, Kayak, etc. Compared by service quality (not just price): cancellation policy, insurance options, customer support, extras. **This is the primary affiliate target of all CTAs.**
- Individual posts extractable from guide sections (licenses abroad, insurance deep-dive, etc.)

---

## DEPLOYMENT

The site is live on Vercel: **https://derekh-agav.vercel.app**
GitHub repo: **https://github.com/Shmulix/derekh-agav**
Branch: **master**

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
