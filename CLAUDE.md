# דרך אגב — Hebrew RTL Car Rental Information & Affiliate Website

## PROJECT GOAL
Build a Hebrew RTL car rental information & affiliate website for Israeli travelers renting abroad.
Site name: **דרך אגב** (double meaning: "by the way" + "דרך" = road)
Expert-written content (10+ years industry experience). Maximum trust, zero fluff.

---

## BRAND IDENTITY & TONE OF VOICE

### Site Name
**דרך אגב** — Logo: text-based, navy + gold dot or road-dash accent.
Tagline: "כי מי שיודע — לא מחכה לדלפק"

### Tone of Voice
**Friendly-professional with character. Raw but smart. No corporate speak.**

This site stands out because it sounds like a person who actually knows what they're talking about — not a content farm, not a PR department.

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

## TECH STACK

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Fonts: Heebo (Google Fonts)
- Icons: Lucide React
- Search: Fuse.js (client-side fuzzy search)
- MDX: next-mdx-remote (blog posts & guides)
- Images: next/image with optimization
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
/                    → Home page
/guide               → Full car rental guide (from car rental guide.txt)
/posts               → Blog/articles index
/posts/[slug]        → Individual MDX post
/about               → About page
```

Source content: `car rental guide.txt` (Hebrew, comprehensive guide — use as basis for /guide page and future MDX posts)

---

## HOME PAGE SECTIONS (in order)

1. **Header** (sticky) — Logo + Nav + CTA affiliate button
2. **Hero** — H1 + subtitle + Fuse.js **content** search bar (searches guides & articles, NOT a booking form — no date pickers, no pickup/return fields, no car search) + 2 CTAs
3. **About the site** — 3-column: reliable info / all topics / no conflict of interest
4. **Who am I** — Author credibility, 10+ years experience, trust metrics
5. **Why this content is better** — 4-column dark navy section
6. **The Guide** — Split layout, topics grid, CTA to /guide
7. **Latest Posts** — 3-column card grid (3 placeholder posts)
8. **Final CTA Banner** — Navy + gold, affiliate button
9. **Footer** — Logo + links + affiliate disclaimer + copyright

---

## TECHNICAL REQUIREMENTS

- Full RTL (`dir="rtl"`, `lang="he"` on `<html>`)
- Fuse.js: indexes guide sections + post titles/tags — live dropdown results (content search only, NOT car/date search)
- **NO booking forms anywhere on the site** — no date pickers, no pickup/return fields, no "search for cars" widgets
- This is an INFORMATION site. The only search is for content (guides, articles, topics).
- Mobile-first, fully responsive
- All affiliate links: placeholder `#`
- SEO: proper metadata, Open Graph, semantic HTML
- No popups, no cookie banners, no chat widgets
- Smooth scroll only — no heavy animations

---

## SKILLS TO USE (when & which)

### `/senior-dev`
**When:** Scaffolding the project, creating Next.js pages, API routes, layout, components, Tailwind config, TypeScript types.
Use for: initial `npx create-next-app`, folder structure, `layout.tsx` RTL setup, reusable components.

### `/frontend-design`
**When:** Building any UI component — hero, cards, header, footer, CTA sections.
Use to ensure design quality matches the institutional/professional style. Avoid generic AI aesthetics.

### `/react-best-practices`
**When:** Optimizing any page or component — before finalizing a page, review with this skill.
Focus on: no waterfalls, proper `use client` isolation, image optimization, bundle size.

### `/seo-expert`
**When:** Writing `<head>` metadata, structuring H1/H2/H3, adding schema markup, checking Core Web Vitals.
Must use before any page is considered "done". Hebrew SEO specifics apply.

### `/israeli-accessibility`
**When:** Building forms, navigation, modals, or any interactive component.
The site must comply with IS 5568 (Israeli accessibility law). Use this skill on every major component.

### `/content-writer`
**When:** Writing or refining Hebrew copy — hero text, section titles, card excerpts, meta descriptions.
Brand voice: direct, professional, ground-level ("גובה העיניים"), no marketing fluff. Reference `car rental guide.txt` for tone.

### `/website-testing`
**When:** After building pages — run Playwright tests for navigation, search functionality, responsive breakpoints, SEO validation.
Use before any Vercel deployment.

---

## AFFILIATE STRATEGY

- All CTA buttons link to `#` (placeholder — will be replaced with real affiliate links)
- Affiliate disclaimer visible in footer on every page
- No intrusive popups or forced affiliate redirects

---

## CONTENT SOURCE

`car rental guide.txt` — Full Hebrew guide. Use this to:
- Populate `/guide` page sections
- Extract topics for Fuse.js search index
- Create individual MDX post drafts under `/posts`
- Define site's navigation topics

---

## DEPLOYMENT

The site is live on Vercel: **https://derekh-agav.vercel.app**
GitHub repo: **https://github.com/Shmulix/derekh-agav**

Vercel is connected to GitHub — every push to `main` triggers an automatic redeploy.

### MANDATORY: After every modification — NO EXCEPTIONS
Every single code change, no matter how small, must be applied to BOTH:
- **Local project** (`C:\Users\sampe\Desktop\car rental project`) — edit the files directly
- **GitHub + Vercel** — commit and push immediately after

The two versions must ALWAYS be identical. Never finish a task without pushing.

```bash
git add .
git commit -m "description of change"
git push
```

Do NOT wait until "the end of the session" to push. Push after every change.

---

## COMMANDS TO REMEMBER

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run Playwright tests
npx playwright test
```
