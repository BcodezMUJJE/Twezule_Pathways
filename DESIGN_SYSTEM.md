# Twezule Pathways Design System

The single source of truth is [`src/styles.css`](src/styles.css). Every value below exists there as a CSS custom property. **Components must use the tokens, never raw values.**

> **Direction (owner decision, 12 November 2026):** the interface uses the official Twezule Pathways brand palette (Golden Yellow, Sage Green, Plum, White and Black). This replaces the earlier monochrome direction, in which only the logo carried colour.

---

## 1. Brand and logo rules

- Display `src/assets/TwezuleLogo.png` exactly as supplied: no recolouring, filters, shadows, blend modes, opacity changes, redrawing, cropping or distortion. Keep its 1:1 aspect ratio.
- The logo always sits on white. In the navbar it sits on a white rounded plate, so its plum lettering stays legible when the bar is transparent over the home hero photo.
- The interface may use only the five brand colours below, plus the documented tints (2.2). **Do not introduce other colours** without the owner's approval.
- Don't use all three brand colours heavily in one section. A typical section uses white or a sage tint as its surface, plus *one* of plum or gold for emphasis.
- No decorative gradients. The only gradient on the site is the neutral black scrim that keeps text readable over the home hero photo. Photographs are never colour-tinted.

## 2. Colour

### 2.1 Official palette

| Token | HEX | Meaning | Use |
|---|---|---|---|
| `--color-gold` | `#E7B94C` | Golden Yellow, the sun | **Giving**: every Donate button. Highlights on plum (kickers, statistics, focus ring). Never as text on white. |
| `--color-sage` | `#77A875` | Sage Green, the leaves and hills | Soft accents: list markers, tag borders, hover underlines, mobile current-page marker, and its 10% tint for alternate sections. Never as text on white. |
| `--color-plum` | `#5C324B` | Plum, the "TWEZULE PATHWAYS" lettering | **Primary actions** (buttons), links, current-page pill, kickers, statistics, structural rules, the founders band and the footer |
| `--color-white` | `#FFFFFF` | — | Page background, cards, text on plum and photos |
| `--color-black` | `#000000` | — | Headings, strong text, secondary-button outlines, the hero backdrop |

### 2.2 Tints (black, white or a brand colour at reduced strength)

| Token | HEX | Derived from | Use |
|---|---|---|---|
| `--color-sage-tint` | `#F1F6F1` | Sage at 10% | Alternate section surface (`.section--alt`), nav link group, tags, form status |
| `--color-ink` | `#1A1A1A` | Black at 90% | Body text |
| `--color-ink-muted` | `#4D4D4D` | Black at 70% | Secondary text, lead paragraphs |
| `--color-ink-subtle` | `#6B6B6B` | Black at 58% | Placeholders, meta, "coming soon" |
| `--color-line` | `#E5E5E5` | Black at 10% | Hairlines and dividers (also light text in the plum footer) |
| `--color-line-strong` | `#8A8A8A` | Black at 46% | Form-control borders |
| `rgba(255,255,255,0.8)` | ≈ `#DED6DB` on plum | White at 80% | Secondary text on plum |
| `rgba(255,255,255,0.24)` | — | White at 24% | Dividers on plum |
| `rgba(0,0,0,0.42–0.8)` | — | Black | Hero scrim, nav link group over the photo, Menu button and kicker pills over the photo |

### 2.3 Semantic roles (use these in components)

| Token | Value | Use |
|---|---|---|
| `--surface` / `--surface-alt` / `--surface-inverse` | white / sage tint / **plum** | Section backgrounds |
| `--text` / `--text-strong` | ink / black | Paragraphs / headings and values |
| `--text-muted` / `--text-subtle` | `#4D4D4D` / `#6B6B6B` | Descriptions / hints |
| `--text-brand` | plum | Kickers, links, statistics |
| `--text-inverse` / `--text-inverse-muted` | white / white 80% | Text on plum |
| `--border` / `--border-strong` / `--border-inverse` | `#E5E5E5` / `#8A8A8A` / white 24% | Dividers / form controls / dividers on plum |
| `--focus-ring` | plum (gold on plum sections, white over photos and in the transparent navbar) | Keyboard focus outline |

### 2.4 Contrast rules (WCAG 2.2 AA, computed)

| Pairing | Ratio | Verdict |
|---|---|---|
| Black on White | 21.00:1 | Any text |
| Ink `#1A1A1A` on White | 17.40:1 | Any text |
| Plum on White / on Sage tint | 10.43 / 9.53:1 | Any text: links, kickers, statistics |
| White on Plum | 10.43:1 | Any text: primary buttons, plum sections |
| Gold on Plum | 5.68:1 | Any text: kickers and statistics on plum |
| White 80% on Plum | 7.33:1 | Secondary text on plum |
| Black on Gold | 11.44:1 | Donate button label |
| Black on Sage | 7.64:1 | Allowed (text on solid sage) |
| `#4D4D4D` on White / Sage tint | 8.45 / 7.73:1 | Any text |
| `#6B6B6B` on White / Sage tint | 5.33 / 4.87:1 | Small text OK |
| `#8A8A8A` on White | 3.45:1 | Non-text only (form borders) |
| **White on Gold** | **1.84:1** | ❌ Never |
| **White on Sage** | **2.75:1** | ❌ Never |
| **Gold text on White** | **1.84:1** | ❌ Never |
| **Sage text on White** | **2.75:1** | ❌ Never; sage is decorative on light surfaces |

**Text over photographs:** these contrast figures come from real pixels, not formulas. They were measured behind the hero and navbar text at 320 to 1920px, against the brightest 5% of the photo behind each line. Worst case: 4.32:1 on large headline text (3:1 required). Small text over the photo (nav links, the Menu button, the kicker) sits on a translucent black pill.

### 2.5 What not to do

- No decorative gradients, glows, coloured shadows or `background-clip: text`.
- No colour tints on photographs.
- No third-party brand colours on social links.
- No colour-only meaning: errors use a thicker black border, an icon and text.
- Never place white text on gold or sage, or gold or sage text on white.

## 3. Typography

| Role | Family | Token |
|---|---|---|
| Headings, body, interface | **Figtree** (Google Fonts, variable, weights 400–700, true italics 400–600) | `--font-display`, `--font-body` |

Figtree is geometric like the logo's lettering and matches the clean, confident sans of the reference design. It is loaded once in `public/index.html` with `display=swap`; the fallback is system-ui / Segoe UI / Roboto / Arial.

### 3.1 Type scale

| Token | Size | Used for |
|---|---|---|
| Home hero title | `clamp(2.5rem → 5.25rem)`, 40→84px, weight 500, tracking −0.04em | Home `h1` only |
| `--text-3xl` | `clamp(2.5rem → 4.25rem)`, 40→68px | `h1` / `.heading-1` (page titles) |
| `--text-2xl` | `clamp(1.875rem → 2.75rem)`, 30→44px | `h2` / `.heading-2` (section titles) |
| `--text-xl` | 1.5rem, 24px, weight 600 | `h3` / `.heading-3` (item titles) |
| `--text-lg` | 1.25rem, 20px | `.lead` paragraphs, person names |
| `--text-base` | 1.0625rem, 17px | Body text |
| `--text-sm` | 0.9375rem, 15px | Labels, buttons, navigation, meta |
| `--text-xs` | 0.8125rem, 13px | Tags, fine print |

### 3.2 Weights and line heights

| Token | Value | Use |
|---|---|---|
| `--weight-regular` | 400 | Body, quotes, statistics |
| `--weight-medium` | 500 | `h1`/`h2`, nav links |
| `--weight-semibold` | 600 | `h3`, labels, buttons, active nav, kickers |
| `--weight-bold` | 700 | Reserved |
| `--leading-tight` / `--leading-heading` / `--leading-snug` / `--leading-body` | 1.04 / 1.15 / 1.3 / 1.65 | `h1` / `h2` / `h3`–`h4` / paragraphs |

Headings are tracked tight (−0.02 to −0.04em) and use `text-wrap: balance`; paragraphs use `text-wrap: pretty`. Keep lines under about 68 characters. Don't highlight single words in headings. No all-caps labels. A **kicker** (`.kicker`, plum, small semibold) appears above a title only when it adds information.

## 4. Spacing scale (4px base)

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--space-1` | 4px | | `--space-7` | 40px |
| `--space-2` | 8px | | `--space-8` | 48px |
| `--space-3` | 12px | | `--space-9` | 64px |
| `--space-4` | 16px | | `--space-10` | 80px |
| `--space-5` | 24px | | `--space-11` | 96px |
| `--space-6` | 32px | | | |

| Layout token | Value |
|---|---|
| `--section-space` | `clamp(4rem → 7.5rem)`, 64→120px vertical padding per section |
| `--gutter` | `clamp(1.25rem → 3rem)`, 20→48px side padding |
| `--container` / `--container-narrow` | 1200px / 760px |
| `--header-height` | 88px desktop, 72px below 1024px |

## 5. Borders, radii and elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Inputs, icon tiles |
| `--radius-md` | 12px | Cards, photographs, embeds |
| `--radius-lg` | 20px | Large panels |
| `--radius-full` | 999px | **All buttons**, nav link pills, tags, social pills |

- Dividers: `1px solid var(--border)`.
- Structural rules: `2px solid var(--color-plum)` above feature columns and the "Ways to Get Involved" list.
- Cards: `1px solid var(--border)`, no shadow; only for actions or distinct entities.
- Elevation: none. The only box-shadows are the inset rings on invalid inputs.

## 6. Buttons (pill shaped)

| Variant | Class | Rest | Hover | Use |
|---|---|---|---|---|
| Primary | `.btn--primary` | Plum, white text | Black, white text | Main action on light surfaces |
| **Accent** | `.btn--accent` | **Gold, black text** | Black, gold text | **Donate / giving only** |
| Secondary | `.btn--secondary` | White, black text, black outline | Black, white text | Alternative actions |
| Primary on plum | inside `.section--inverse` | Gold, black text | White, plum text | Plum bands |
| Secondary on plum | inside `.section--inverse` | Transparent, white text, white outline | White, plum text | Plum bands |
| Primary over photo | inside `.on-photo` | White, black text | Gold, black text | Home hero |
| Secondary over photo | inside `.on-photo` | Transparent, white outline | White, black text | Home hero |

Buttons are 48px tall (`.btn--sm` 42px), padded 0 32px (`.btn--sm` 0 24px), Figtree 15px weight 600, with a 1.5px border. Pressed: down 1px. Disabled: `#E5E5E5` with `#6B6B6B` text and the `disabled` attribute. Loading: spinner + "Sending…" + `aria-busy`. Links that open a new tab carry a visually hidden "(opens in a new tab)".

## 7. Form inputs

| Element | Specification |
|---|---|
| Label | Figtree 15px semibold black, always visible, linked with `htmlFor`; required fields end with ` *` and set `required` + `aria-required` |
| Control | 48px minimum height, 16px text, white background, `1px solid #8A8A8A`, 6px radius; hover border `#4D4D4D` |
| Focus | Black border + 2px plum outline |
| Invalid | Black border + inset ring, icon + message linked by `aria-describedby`; focus moves to the first invalid field |
| Success | `.form-status` (sage tint, sage border, 4px plum left edge) in a `role="status"` live region |

## 8. Layout components

| Class | Purpose |
|---|---|
| `.page-header` | Top of inner pages: optional plum `.kicker`, `h1`, `.lead` |
| `.section` / `--alt` / `--ruled` / `--inverse` | Rhythm; sage-tint surface; hairline top; plum band |
| `.feature-grid` + `.feature` | Columns under a 2px plum rule |
| `.split`, `.media` | Image + text rows; photo frames (12px radius, natural colour) |
| `.stat-row` + `.stat` | Statistics in plum (gold on plum) |
| `.check-list` | List with a 2px sage marker |
| `.icon-mark` | 44px outlined square with a plum icon (gold on plum) |
| `.tag` | Pill with a sage border on a sage tint |
| `.on-photo` | Context for controls placed over photographs |

### 8.1 Header and navigation

| Part | Desktop (≥1024px) | Mobile & tablet (<1024px) |
|---|---|---|
| Layout | Logo plate left · centred link group · "Get Involved" text link + gold "Donate" pill right | Logo plate left · gold "Donate" + labelled "Menu" right |
| Logo | 64px on a white 16px-radius plate | 52px plate (46px under 360px) |
| Link group | Pill with a sage-tint background; links are 38px pills; hover is black at 6%; **current page is a plum pill with white text** | Full-screen white panel, Figtree 24–32px links; current page in plum with a sage marker |
| Over the home hero (top of page) | Bar transparent with white text; link group is translucent black; current page is a white pill; hover underlines are gold | Menu button sits on a translucent black pill |
| After scrolling / other pages | Solid white bar with a `#E5E5E5` hairline | Same |
| Behaviour | Sticky; `aria-current="page"`; focus moves to `<main>` on page change | Focus moves into the open menu; the rest of the page is `inert`; scroll locked; Escape returns focus to Menu |

### 8.2 Home hero

A full-screen photograph runs under the transparent navbar, with the headline, supporting text and buttons at the bottom left. The neutral black scrim is stronger at the top (for the nav) and the bottom-left (for the text), and the photo is cropped so the women's faces sit above the text. On phones (<600px) the photograph sits on top and fades into black, and the text sits below on black, so no text covers a face.

**CSS scoping:** shared classes live in `styles.css`; page classes are prefixed (`home-`, `about-`, `impact-`, `gi-`, `contact-`, `donate-`, `newsletter__`, `programs-`, `site-nav__`, `site-footer__`). Never add unprefixed classes to a page stylesheet.

## 9. Responsive breakpoints

| Breakpoint | What changes |
|---|---|
| < 480px | Buttons in `.btn-group` go full width |
| < 600px | Home hero stacks: photo on top, text on black below |
| 600px | Footer two columns; Impact metrics two columns |
| 700–800px | Founders side by side; team rows; donation panel; newsletter header |
| 900px | `.split` rows; footer middle row |
| 960px | Content + sidebar layouts (Contact, Get Involved form, Donate, home CTA) |
| **1024px** | Desktop navigation; founders band beside the quote; video beside its text; Impact metrics four columns |
| 1080px | Footer five columns |

Verified at 320, 375, 390, 430, 768, 1023, 1024, 1280, 1440 and 1920px.

## 10. Interaction states

| State | Treatment |
|---|---|
| Hover (nav links) | Pill fill: black 6% (white 16% over the photo) |
| Hover (text links) | Underline appears or thickens: plum, sage on "Get Involved" and "Ways" titles, gold over the photo |
| Hover (buttons) | See section 6 |
| Focus | `:focus-visible` 2px ring, 3px offset: plum, gold on plum, white over photos |
| Active page | Plum pill (white pill over the photo); mobile plum label + sage marker; `aria-current="page"` |
| Motion | Explicit-property transitions (150ms colour, 220ms panel/header); none under `prefers-reduced-motion` |

## 11. Accessibility checklist for new work

- [ ] One `<h1>` per page; heading levels in order
- [ ] Every colour pairing appears as allowed in 2.4; text over photos is measured against the real image
- [ ] Images have meaningful `alt`, plus `width`/`height`; lazy-load below the fold
- [ ] Icons beside text are `aria-hidden="true"`
- [ ] Targets ≥24×24px (buttons 42–48px)
- [ ] Works from 320px to 1920px with no horizontal scroll
- [ ] Keyboard: everything reachable, focus visible, Escape closes overlays
