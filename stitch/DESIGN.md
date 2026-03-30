# Design System Document: דרך אגב

## 1. Overview & Creative North Star

**Site Name: דרך אגב**
Double meaning: "by the way" (casual, confident) + "דרך" = road/route (on-topic).
This duality defines the entire brand: expert knowledge delivered with a human, direct voice.

**Tagline:** "כי מי שיודע — לא מחכה לדלפק"

**The Creative North Star: "The Expert Friend"**

Not a government portal. Not a corporate FAQ. This is the guy at the airport who actually worked in car rental for 10 years — and is now telling you everything the rental companies don't want you to know.

The aesthetic is **editorial and authoritative** but with **personality**. Think: a premium financial newspaper written by someone who also has a sense of humor. Clean, structured, high-trust — but with a voice that cuts through the noise.

The design must support a tone that is:
- Direct and confident (strong typography, no visual clutter)
- Slightly irreverent (not sterile, not stiff)
- Human (author presence, real credibility signals — not stock-photo testimonials)

RTL (Right-to-Left) is the foundation. All layout, reading flow, and component hierarchy are designed for Hebrew readers from the ground up.

---

## 2. Colors & Surface Philosophy

### Brand Palette

*   **Primary:** `#1a2f5e` — Deep Navy. The bedrock of trust and authority.
*   **Accent:** `#c9a227` — Warm Gold. Used exclusively for CTAs, highlights, and emphasis. Never decorative.
*   **Background:** `#ffffff` — Primary surface.
*   **Surface Alt:** `#f8f9fc` — Light grey. Used for alternating sections to create rhythm without borders.
*   **Text:** `#1a1a2e` — Near black. Soft enough to avoid harshness, dark enough for authority.
*   **Danger/Warning:** Background `#fff3f3`, border `#e53e3e`
*   **Tip:** Background `#fffbea`, border `#c9a227`
*   **Info:** Background `#f0f4ff`, border `#1a2f5e`

### The Section Rhythm Rule
Sections alternate between `#ffffff` and `#f8f9fc`. This creates visual separation without borders or dividers. Never use 1px lines between page sections.

### No Gradient Rule
Gradients are **prohibited** except for the hero image overlay (semi-transparent navy at 65–75% opacity over the background photo). No gradient buttons, no gradient backgrounds, no gradient text.

### No Glassmorphism
Glassmorphism is prohibited. All surfaces are fully opaque. This is an institutional site, not a mobile app.

---

## 3. Typography

Single font family: **Heebo** (Google Fonts) — optimized for Hebrew and RTL layouts.

### Scale

*   **H1 (Hero):** 3rem–3.5rem, weight 800, color `#ffffff` (on dark bg) or `#1a2f5e`
*   **H2 (Section titles):** 2rem–2.25rem, weight 700, color `#1a2f5e`
*   **H3 (Card titles, subsections):** 1.25rem–1.5rem, weight 600, color `#1a1a2e`
*   **Body:** 1rem, weight 400, color `#1a1a2e`, line-height 1.75
*   **Small / Meta:** 0.875rem, weight 400, color `#64748b`
*   **Badge / Tag:** 0.75rem, weight 600, uppercase or normal, letter-spacing 0.03em

### Hierarchy Rule
One H1 per page. H2 for major sections. H3 for cards and subsections. Never skip levels. This is critical for both SEO and accessibility.

### RTL Rule
All text: `text-align: right`. All layout: `dir="rtl"`. The `<html>` tag must carry `lang="he" dir="rtl"`.

---

## 4. Spacing & Layout

### Grid
12-column grid. Max content width: `1200px`. Horizontal padding: `1.5rem` (mobile) → `2rem` (tablet) → `4rem` (desktop).

### Spacing Scale (Tailwind-based)
*   Section vertical padding: `py-16` to `py-24`
*   Card internal padding: `p-6` (1.5rem)
*   Between cards: `gap-6` to `gap-8`
*   Component internal gaps: `gap-3` to `gap-4`

### White Space as Structure
White space is not empty — it signals quality and reduces cognitive load. Every section must "breathe." If it feels crowded, add more vertical space.

---

## 5. Elevation & Depth

### Cards
*   Background: `#ffffff`
*   Border: none (use background color contrast instead)
*   Shadow: `0 2px 8px rgba(26, 47, 94, 0.08)` — tinted navy, very subtle
*   Border-radius: `8px` (subtle rounding only — never pill shapes for content cards)

### Hover States
Cards: subtle shadow increase + `translateY(-2px)`. No color changes on hover for cards.

### No Heavy Shadows
No `box-shadow` with spread > 20px. No multiple layered shadows. One clean ambient shadow per elevated element.

---

## 6. Components

### Buttons

**Primary (Navy):**
*   Background: `#1a2f5e`
*   Text: `#ffffff`, weight 600
*   Border-radius: `6px` (NOT pill-shaped)
*   Padding: `0.75rem 1.5rem`
*   Hover: slight darken `#162748`, no upward shift

**Secondary / Affiliate (Gold):**
*   Background: `#c9a227`
*   Text: `#1a2f5e`, weight 700
*   Border-radius: `6px`
*   Padding: `0.75rem 1.5rem`
*   Hover: slight darken `#b8911f`

**Ghost (Gold Outline):**
*   Background: transparent
*   Border: `2px solid #c9a227`
*   Text: `#c9a227`, weight 600
*   Border-radius: `6px`
*   Hover: background `#c9a227`, text `#1a2f5e`

### Search Bar
*   Background: `#ffffff`
*   Border: `2px solid #e2e8f0`
*   Border-radius: `8px`
*   Focus: border `#1a2f5e`, no glow effect
*   Height: `56px` (prominent, accessible)
*   Search icon: left side (RTL = visual left)
*   Results dropdown: white bg, `8px` radius, subtle shadow

### Info Boxes (Callouts)

**Warning:** `background: #fff3f3`, `border-right: 4px solid #e53e3e` (RTL border placement)
**Tip:** `background: #fffbea`, `border-right: 4px solid #c9a227`
**Info:** `background: #f0f4ff`, `border-right: 4px solid #1a2f5e`

### Tags / Badges
*   Background: topic-specific color (navy for info, gold for tips, soft colors for post categories)
*   Border-radius: `4px` (not pill)
*   Padding: `0.2rem 0.6rem`
*   Font size: `0.75rem`, weight 600

### Navigation (Sticky Header)
*   Background: `#ffffff`
*   Bottom: `1px solid #e2e8f0`
*   Height: `64px`
*   Nav links: `#1a1a2e`, hover `#1a2f5e`, no underline
*   Active link: `#1a2f5e`, weight 600

### Trust Metric Badges
*   Background: `#1a2f5e`
*   Text: `#ffffff`
*   Border-radius: `6px`
*   Padding: `0.4rem 1rem`
*   Font: small, weight 600

### Post Cards
*   White background, `8px` radius, subtle shadow
*   Tag badge top
*   H3 title (navy, bold)
*   Excerpt (grey, 2 lines max, `overflow: hidden`)
*   Bottom row: read time (grey) + "קרא ←" link (gold)

---

## 7. Hero Section Specifics

*   Full-width image with dark navy overlay at 70% opacity
*   Overlay color: `#1a2f5e`
*   All hero content: white text, centered
*   Badge: `border: 1px solid #c9a227`, text `#c9a227`, background transparent, `border-radius: 4px`
*   H1: white, 3rem–3.5rem, weight 800
*   Subtitle: `#cbd5e1`, 1.125rem, weight 400
*   Search bar: white background card, full width on mobile, max-width `640px` on desktop

### ⚠️ CRITICAL — This is NOT a Booking Site

**The hero search bar is a CONTENT search only.**
It searches through guide sections and article titles/tags using Fuse.js.

**Strictly prohibited in the hero (and everywhere on the site):**
*   ❌ Date pickers (pickup date / return date)
*   ❌ Location/airport input fields
*   ❌ "Search for cars" or "Find a vehicle" forms
*   ❌ Any booking widget or reservation form
*   ❌ Price comparison widgets embedded in the page

The only CTA that leads to car rental prices is a simple button linking to an affiliate partner (`href="#"`). There is no embedded booking engine.

**The hero search placeholder text:** "חפש מדריך, מדינה, נושא... למשל: ביטוח, פיקדון, נהג צעיר"
This makes it immediately clear the search is for information, not for booking.

---

## 8. Do's and Don'ts

### Do:
*   **Do** use color-shift (white → light grey) to separate sections — not borders
*   **Do** keep CTAs gold. Gold = action. Navy = authority.
*   **Do** use `border-right` (not `border-left`) for callout boxes — this is RTL
*   **Do** give every section room to breathe with generous vertical padding
*   **Do** use semantic HTML: one H1, logical H2/H3 hierarchy
*   **Do** keep navigation simple: logo right, links center, CTA left (RTL layout)

### Don't:
*   **Don't** use gradients anywhere except the hero overlay
*   **Don't** use glassmorphism or blur effects
*   **Don't** use pill-shaped buttons (border-radius: full) — this is not an app
*   **Don't** use animations beyond subtle hover states (no slide-ins, no parallax)
*   **Don't** use black `#000000` for text — always `#1a1a2e`
*   **Don't** center Hebrew body text — right-align only
*   **Don't** use 1px dividers between sections — use background color shifts
*   **Don't** add popups, cookie banners, or chat widgets

---

## 9. Responsive Behavior

*   **Mobile first** — base styles are mobile, scale up
*   **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
*   Multi-column sections collapse to 1 column on mobile
*   Header: hamburger menu below `md`
*   Hero search: full width on mobile
*   Section padding reduces on mobile: `py-12` instead of `py-20`
*   Font sizes scale down slightly on mobile (use `clamp()` or Tailwind responsive prefixes)
