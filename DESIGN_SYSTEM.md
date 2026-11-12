# Twezule Pathways Design System

The single source of truth is [`src/styles.css`](src/styles.css). Every value below exists there as a CSS custom property. **Components must use the tokens, never raw values.**

---

## 1. The logo rule

> **The logo is the only coloured brand element on the website.**

- Display `src/assets/TwezuleLogo.png` exactly as supplied: no recolouring, filters, shadows, blend modes, opacity changes, redrawing, cropping or distortion. Keep its 1:1 aspect ratio.
- **Never extract the logo's colours** (golden yellow `#E7B94C`, sage green `#77A875`, plum `#5C324B`, and their shading tones `#320B1F`, `#669A5E`, `#E9B22D`, `#C8B556`) for buttons, links, text, borders, icons, backgrounds, gradients, highlights or hover effects.
- Place the logo on white (`#FFFFFF`) or off-white (`#F7F7F7`). The plum wordmark has too little contrast on dark surfaces, so the dark footer uses the organisation name set in type instead.
- Photographs, videos, the Google Map and the PDF newsletter keep their natural colours. Never tint or overlay a photograph with colour, and never convert real photographs to black and white to "match" the interface.
- Introducing any new brand or accent colour requires the owner's explicit approval.

## 2. Colour tokens

### 2.1 Palette

| Token | HEX | Role |
|---|---|---|
| `--color-white` | `#FFFFFF` | Page background, cards, inputs, text on dark |
| `--color-off-white` | `#F7F7F7` | Alternate section surface, hover fill |
| `--color-grey-200` | `#EAEAEA` | Hairlines, dividers, card borders |
| `--color-grey-400` | `#9CA3AF` | Secondary text **on dark only**, secondary-button border, tag border |
| `--color-grey-500` | `#8A8A8A` | Form-control borders *(adjusted shade, see 2.3)* |
| `--color-grey-600` | `#6B6B6B` | Placeholders, meta text, disabled text *(adjusted shade)* |
| `--color-grey-700` | `#404040` | Secondary text, primary-button hover, dividers on dark |
| `--color-charcoal` | `#1F1F1F` | Body text |
| `--color-black` | `#111111` | Headings, primary buttons, focus ring, dark bands, footer |

### 2.2 Semantic roles (use these in components)

| Token | Value | Use |
|---|---|---|
| `--surface` / `--surface-alt` / `--surface-inverse` | white / off-white / black | Section backgrounds |
| `--text` | charcoal | Paragraphs |
| `--text-strong` | black | Headings, labels, values |
| `--text-muted` | `#404040` | Lead paragraphs, descriptions |
| `--text-subtle` | `#6B6B6B` | Placeholders, "coming soon", hints |
| `--text-inverse` / `--text-inverse-muted` | white / `#9CA3AF` | Text on `#111111` |
| `--border` / `--border-strong` / `--border-inverse` | `#EAEAEA` / `#8A8A8A` / `#404040` | Dividers / form controls / dividers on dark |
| `--focus-ring` | black (white inside `.section--inverse` and the footer) | Keyboard focus outline |

### 2.3 Contrast (WCAG 2.2 AA)

| Foreground on background | Ratio | Allowed use |
|---|---|---|
| `#111111` on `#FFFFFF` | 18.88:1 | Any text |
| `#1F1F1F` on `#FFFFFF` | 16.48:1 | Any text |
| `#404040` on `#FFFFFF` | 10.37:1 | Any text |
| `#404040` on `#F7F7F7` | 9.68:1 | Any text |
| `#6B6B6B` on `#FFFFFF` | 5.33:1 | Small text OK |
| `#6B6B6B` on `#F7F7F7` | 4.97:1 | Small text OK |
| `#8A8A8A` on `#FFFFFF` | 3.45:1 | **Non-text only** (input borders: meets 3:1) |
| `#9CA3AF` on `#FFFFFF` | 2.54:1 | **Never for text on light surfaces** (decorative/disabled only) |
| `#9CA3AF` on `#111111` | 7.44:1 | Secondary text on dark |
| `#EAEAEA` on `#111111` | 15.70:1 | Links on dark |
| `#FFFFFF` on `#111111` | 18.88:1 | Primary button label, text on dark |
| `#FFFFFF` on `#404040` | 10.37:1 | Primary button label on hover |

Two shades were added to the brief's palette purely for accessibility. `#8A8A8A` exists because the brief's `#9CA3AF` is below the 3:1 minimum for form-control borders. `#6B6B6B` exists because `#9CA3AF` is below 4.5:1 for placeholder and meta text.

### 2.4 What not to do

- No gradients (`linear-`, `radial-`, `conic-gradient`), glows, coloured shadows or `background-clip: text`.
- No third-party brand colours on social links.
- No colour-only meaning: errors use a thicker black border, an icon and text.

## 3. Typography

| Role | Family | Token |
|---|---|---|
| Headings, display, quotes, statistics | **Newsreader** (Google Fonts, variable, optical sizes 6–72, weights 400–600, italic 400–500) | `--font-display` |
| Body, interface, labels, buttons, navigation | **Public Sans** (Google Fonts, variable, weights 400–700) | `--font-body` |

Loaded once in `public/index.html` with `display=swap`. Fallbacks: Georgia / Times New Roman, and system-ui / Segoe UI / Roboto / Arial.

### 3.1 Type scale

| Token | Size | Used for |
|---|---|---|
| `--text-display` | `clamp(3rem → 6.25rem)`, 48→100px | Display text (the home hero title uses its own `clamp(3.25rem → 6.25rem)`, 52→100px) |
| `--text-3xl` | `clamp(2.5rem → 4.25rem)`, 40→68px | `h1` / `.heading-1` (page titles) |
| `--text-2xl` | `clamp(1.875rem → 2.75rem)`, 30→44px | `h2` / `.heading-2` (section titles) |
| `--text-xl` | 1.5rem, 24px | `h3` / `.heading-3` (item titles) |
| `--text-lg` | 1.25rem, 20px | `.lead` paragraphs, person names |
| `--text-base` | 1.0625rem, 17px | Body text |
| `--text-sm` | 0.9375rem, 15px | Labels, buttons, navigation, meta |
| `--text-xs` | 0.8125rem, 13px | Tags, fine print |

`h4` / `.heading-4` uses Public Sans 17px semibold for small labelled groups.

### 3.2 Weights and line heights

| Token | Value | Use |
|---|---|---|
| `--weight-regular` | 400 | Body, hero title, quotes, statistics |
| `--weight-medium` | 500 | Headings (Newsreader), nav links |
| `--weight-semibold` | 600 | Labels, buttons, active nav, kickers |
| `--weight-bold` | 700 | Reserved |
| `--leading-tight` | 1.04 | `h1` |
| `--leading-heading` | 1.15 | `h2` |
| `--leading-snug` | 1.3 | `h3`, `h4` |
| `--leading-body` | 1.65 | Paragraphs |

Rules:
- Headings use `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
- Keep line length under about 68 characters (`--measure`).
- Don't highlight one word in a heading with a different colour, weight or gradient.
- No all-caps labels. Sentence or title case, as written.
- A **kicker** (`.kicker`, small semibold grey line above a page title) is used only when it adds information (e.g. "Empowering Communities Since 2025").

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
| `--container` | 75rem (1200px) content width (`.container`) |
| `--container-narrow` | 47.5rem (760px) reading width (`.container--narrow`) |
| `--header-height` | 88px desktop, 72px below 1024px |

## 5. Borders, radii and elevation

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Buttons, inputs, icon tiles, focus targets |
| `--radius-md` | 12px | Cards, photographs, embeds |
| `--radius-lg` | 20px | Home hero photo, large panels |
| `--radius-full` | 999px | Tags, footer social pills |

- **Dividers:** `1px solid var(--border)` (`#EAEAEA`).
- **Section/feature rules:** `1px solid var(--color-black)` above a feature column or list group, to signal structure.
- **Cards:** `1px solid var(--border)`, no shadow. Use them only for things that carry an action or are distinct entities (Get Involved options, future programs, partners, forms).
- **Elevation:** none. There are no box-shadows apart from the inset ring on invalid inputs and on the active "Get Involved" nav button.

## 6. Buttons

| Variant | Class | Rest | Hover | Use |
|---|---|---|---|---|
| Primary | `.btn .btn--primary` | `#111111` background, white text | `#404040` background | One main action per view |
| Secondary | `.btn .btn--secondary` | White background, `#111111` text, `#9CA3AF` border | `#F7F7F7` background, `#111111` border | Alternative actions |
| Primary on dark | inside `.section--inverse` | White background, black text | `#EAEAEA` background | Dark bands |
| Secondary on dark | inside `.section--inverse` | Transparent, white text, `#9CA3AF` border | `#1F1F1F` background, white border | Dark bands |

| Property | Value |
|---|---|
| Height | 48px (`--control-height`); `.btn--sm` 40px |
| Padding | 0 24px (`.btn--sm`: 0 16px) |
| Font | Public Sans 15px, weight 600 |
| Radius | 6px |
| Icons | Optional, 1em, before or after the label; always `aria-hidden="true"` |
| Pressed | `translateY(1px)` |
| Disabled | `#EAEAEA` background, `#6B6B6B` text, `cursor: not-allowed`, plus the `disabled` attribute |
| Loading | `.spinner` + "Sending…", `disabled` and `aria-busy="true"` |
| Groups | `.btn-group` (wraps; buttons go full-width below 480px) |
| Links that open a new tab | Add `<span className="visually-hidden"> (opens in a new tab)</span>` |

Use `<Link>` / `<NavLink>` for internal pages, `<a>` for external URLs and `<button>` for actions.

## 7. Form inputs

| Element | Specification |
|---|---|
| Wrapper | `.field`: label above the control, 8px gap |
| Label | Public Sans 15px semibold `#111111`, always visible, connected with `htmlFor`. Required fields end with ` *` and carry `required` + `aria-required="true"`. |
| Control | `.input`: 48px minimum height, 12px 16px padding, 16px text (prevents iOS zoom), white background, `1px solid #8A8A8A`, 6px radius |
| Textarea | `.input`: 152px minimum height, vertical resize |
| Placeholder | `#6B6B6B`; ends with "…" when it invites free text. Never a replacement for a label. |
| Hover | Border `#404040` |
| Focus | Border `#111111` + `2px solid #111111` outline, 1px offset |
| Invalid | `aria-invalid="true"`: black border + 1px inset black ring; message below in `.field-error` with an icon, linked through `aria-describedby`; focus moves to the first invalid field on submit |
| Success | `.form-status` inside a `role="status" aria-live="polite"` region |
| Autofill | `autoComplete="name"` / `"email"`; `spellCheck={false}` on email |

## 8. Layout components

| Class | Purpose |
|---|---|
| `.page-header` | Top of every inner page: optional `.kicker`, `h1`, `.lead`, optional `.btn-group`; hairline below |
| `.section`, `.section--alt`, `.section--ruled`, `.section--inverse` | Vertical rhythm; off-white surface; hairline top border; dark band (max one per page, plus the footer) |
| `.section-header` | Heading and lead above a section's content (max 46rem) |
| `.feature-grid` + `.feature` | Columns separated by a black top rule (instead of boxed cards) |
| `.split` (+ `.split--reverse`) | Image + text row, two columns from 900px |
| `.media` (+ `.media--portrait`) | Photo frame, 3:2 or 4:5, `object-fit: cover`, 12px radius |
| `.stat-row` + `.stat` | `<dl>` statistics: label in the DOM first, value shown first |
| `.info-list` | Contact details with hairline dividers |
| `.check-list` | List with a short black rule as the bullet |
| `.icon-mark` | 44px outlined square holding a black icon |
| `.tag` | Status/location pill with a grey border |
| `.card` | Bordered container (see section 5) |

### 8.1 Header and navigation

| Part | Desktop (≥1024px) | Mobile & tablet (<1024px) |
|---|---|---|
| Layout | Three zones on a grid: logo left, links centred on the page, actions right | Logo left; **Donate** button and a labelled **Menu** button right |
| Height / logo | 88px bar, logo 72×72px | 72px bar, logo 60×60px (52px under 360px) |
| Links | Public Sans 15px, weight 500, `#404040`; hover `#111111` with a grey 2px bar; current page semibold `#111111` with a black 2px bar on the header's bottom edge | Full-screen white panel: Newsreader 24–32px links divided by hairlines; current page marked with a short black bar |
| Actions | "Get Involved" (secondary, small) + "Donate" (primary, small). "Get Involved" gains a black border on its own page. | Donate stays in the bar; "Get Involved" and the email/phone links sit at the bottom of the panel |
| Border | Transparent at the top of the page; `#EAEAEA` hairline once scrolled or when the menu is open | Same |
| Behaviour | Sticky. Every link sets `aria-current="page"` via `NavLink`. | Opening moves focus to the first link, makes the rest of the page `inert`, and locks background scroll. Escape closes and returns focus to the Menu button; choosing a link or widening to desktop also closes it. |

After any in-app page change, focus moves to `<main id="main">` (`tabindex="-1"`) and the page scrolls to the top, or to the `#section` in the link.

**CSS scoping:** shared classes live in `styles.css`. Page-specific classes are prefixed per page (`home-`, `about-`, `impact-`, `gi-`, `contact-`, `donate-`, `newsletter__`, `programs-`, `site-nav__`, `site-footer__`). The old site broke because 41 classes collided across files, so never add an unprefixed class to a page stylesheet.

## 9. Responsive breakpoints

Mobile-first (`min-width`) unless noted.

| Breakpoint | What changes |
|---|---|
| < 480px | Buttons in `.btn-group` and form submit buttons go full width |
| 600px | Footer becomes two columns; Impact metrics become two columns |
| 700–800px | Founders sit side by side (700); team rows put the photo beside the text (720); donation panel and newsletter header go side by side (800) |
| **900px** | Main two-column layouts: home hero (copy + photo to the screen edge), `.split` rows, footer middle |
| 960px | Content + sidebar layouts: Contact, Get Involved form, Donate, home CTA, team header |
| 1024px | Impact metrics become four columns |
| **1024px** | Desktop navigation appears (below it: Donate + labelled Menu button + full-screen panel); home founders band goes side by side; video beside its text |
| 1080px | Footer becomes five columns |

Verified at 320, 375, 390, 430, 768, 1023, 1024, 1079, 1080, 1120, 1200, 1280, 1440 and 1920px.

## 10. Interaction states

| State | Treatment |
|---|---|
| Hover (links) | Underline appears or thickens to 2px; colour moves to `#111111` |
| Hover (buttons) | Background or border darkens/lightens (section 6) |
| Focus | `:focus-visible` only: `2px solid` ring in `--focus-ring`, 3px offset (white on dark surfaces). Never remove an outline without a replacement. |
| Active page | Desktop nav: semibold black label with a 2px black bar at the header's bottom edge. Mobile: short bar before the label. Both set `aria-current="page"` (automatic via `NavLink`). |
| Pressed | Buttons move down 1px |
| Disabled | See section 6 |
| Motion | Transitions list their properties (never `all`): 150ms for colour, 220ms for the menu panel, `cubic-bezier(0.2, 0, 0, 1)`. No looping or decorative animation. |
| Reduced motion | `prefers-reduced-motion: reduce` disables transitions, animations and smooth scrolling |
| Forced colours | Buttons, inputs, cards and tags get `CanvasText` borders |

## 11. Accessibility checklist for new work

- [ ] One `<h1>` per page; heading levels in order (use `.heading-N` classes to change size, not level)
- [ ] Text meets the contrast table in 2.3
- [ ] Every image has meaningful `alt` (or `alt=""` if decorative), plus `width`/`height`; below-the-fold images get `loading="lazy"`
- [ ] Icons next to text are `aria-hidden="true"`
- [ ] Interactive targets are at least 24×24px (buttons 40–48px)
- [ ] Forms follow section 7
- [ ] Works from 320px to 1920px with no horizontal scrolling
- [ ] Keyboard: everything reachable, the focus ring is visible, and Escape closes overlays
