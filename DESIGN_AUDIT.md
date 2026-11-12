# Design Audit: Twezule Pathways Website

| | |
|---|---|
| **Audit date** | 12 November 2026 |
| **Baseline audited** | Commit `7709842` ("Restore original logo with transparency (RGBA)"), the last commit before the redesign |
| **Method** | Source inspection of every page, component and stylesheet, plus rendered testing in headless Google Chrome (Playwright) at nine screen widths with automated contrast, overflow, heading and error checks. Rules applied: UI/UX Pro Max (priority rules and checklist), Anthropic Frontend Design and Vercel Web Interface Guidelines. |
| **Target standard** | WCAG 2.2 AA |

Before and after screenshots are in [`docs/design-review/`](docs/design-review/).

---

## 1. Overview of the original website

| Item | Finding |
|---|---|
| Framework | React 18.2 (Create React App, `react-scripts` 5.0.1), `react-router-dom` 7.9.6, `react-icons` 4.12 |
| Styling | Plain CSS: one global `styles.css` plus 10 component stylesheets, 10,987 lines in total. CRA bundles everything into one global stylesheet, with no scoping. |
| Pages (routes) | `/` Home, `/about`, `/programs`, `/impact`, `/contact`, `/get-involved`, `/donate`, `/newsletter`, `/privacy-policy`, `/terms-of-service` |
| Integrations | YouTube embed (home), Google Maps embed (contact), Omprakash donation page (external link), `mailto:`/`tel:` links, a PDF newsletter (embedded and downloadable), Google Fonts, Font Awesome CDN |
| Forms | Contact form (custom validation) and Get Involved form (native `required` validation). **Neither sends data anywhere.** Both simulate success with a `setTimeout`. There is no backend. |
| Logo | `src/assets/TwezuleLogo.png`: 1024×1024 RGBA PNG, 1.59 MB, 86% transparent pixels. Measured logo colours: golden yellow `#E7B94C` (sun), sage green `#77A875` (leaves), plum `#5C324B` (wordmark), plus minor shading tones `#320B1F`, `#669A5E`, `#E9B22D` and `#C8B556`. |

## 2. Visual design assessment

The site had real strengths: warm, authentic photography of the women it serves, clear mission copy, and a sensible page structure. The visual layer worked against them:

1. **The logo's colours were the interface.** Gold, plum and sage, the three colours of the logo, were used for buttons, headings, borders, backgrounds, gradients, shadows, hover effects and focus rings. The logo was no longer distinctive because everything around it shared its palette.
2. **Too many effects competing for attention.** There were 170 gradients, 119 box-shadows, 22 backdrop blurs, 37 `@keyframes` animations (24 of them looping forever), floating decorative blobs, glowing cards, shimmer effects and gradient-filled text.
3. **No consistent component system.** Every page restyled its own buttons, cards, headings and badges. The home page alone had four different button styles in a single row.
4. **Photographs were recoloured.** The home hero photo sat under a green tint overlay, and the programs header photo under a green/plum gradient. Both shifted the women's skin tones and clothing away from their natural colour.
5. **Decorative chrome everywhere.** Pill badges with star icons above most headings, one word per heading painted in a gold gradient, accent lines, card glows and decorative circles that carried no meaning.

## 3. Colour audit

### 3.1 Summary

| Metric (original CSS) | Count |
|---|---|
| Distinct HEX colours (normalised, `#FFF` = `#FFFFFF`) | **85** |
| Distinct `rgb()` / `rgba()` values | **111** |
| `gradient()` declarations | **170** |
| `box-shadow` declarations | **119** (plus 9 `text-shadow`) |
| Text painted with `background-clip: text` (gradient text) | **24** rules, affecting up to **74** text elements on one page |
| Undefined CSS variables referenced | **6**: `--vibrant-teal`, `--vibrant-coral`, `--vibrant-orange`, `--vibrant-pink`, `--vibrant-purple`, `--deep-teal` |
| Different near-white "background" tints | **13** |
| Different light border greys | **7** |
| Different dark text greys/slates/greens | **14** |

### 3.2 Colour table

"Uses" counts the CSS declarations that resolve to the colour, including through variables.

| Existing colour | Where it is used | Problem identified | Recommended replacement |
|---|---|---|---|
| `#D4AF37` gold (logo sun) | 240 uses in all 11 stylesheets: `.btn-primary`, nav "Get Involved" button, badges, icon tiles, gradient text, borders, card top bars, **global focus ring**, 37 shadows | Logo colour reused across the whole UI. As text on white it measures **2.10:1** (fails AA), and as a focus ring 2.10:1 (fails the 3:1 non-text minimum). | Primary buttons `#111111`; focus ring `#111111`; remove from text, borders and decoration |
| `#E8C547`, `#F2D962`, `#F0D974`, `#E5BC4A`, `#C9A227`, `#B8941F`, `#9B7B2C`, `#FFD700` golds | 70+ uses: gradient stops, hover states, "coming soon" text, story location badges | Seven extra shades of the logo gold | Removed; hover uses `#404040` / `#F7F7F7` |
| `#5B2245` plum (logo wordmark) | 97 uses: **every heading h1–h6**, member names, mission icon, gradient stops, shadows | Logo colour applied to all headings, competing with the wordmark | Headings `#111111` |
| `#7A3A63`, `#3D1730`, `#6B2D5B`, `#7A3D60`, `#8E4585`, `#7B3A6B`, `#3A1A33`, `#6A4C93`, `#7A3A5E` plum/purple variants | Contact, footer and Impact hero gradients, Get Involved cards and donation card | Nine more plum variants, used as heavy dark gradient backgrounds | Dark band `#111111` (no gradient) |
| `#B7C8A3`, `#A8C090`, `#C4D3B0`, `#8FAB73`, `#6B8A56`, `#C5D4A8`, `#C9D4B5`, `#9FB085`, `#D4E0C8` sage (logo mark) | 100+ uses: navbar border, nav hover, section backgrounds, secondary button, decorative circles, manifest `theme_color` | Logo green reused for structure. `#B7C8A3` as a border is **1.78:1**, barely visible. | Borders `#EAEAEA`; surfaces `#F7F7F7`; secondary button border `#9CA3AF` |
| `#4A6741`, `#2D4A28`, `#3D5A3A`, `#4A5D45`, `#4A5D3F` deep greens | 130+ uses: body text, paragraph text, button text, shadow tints | Body text tinted green to match the logo, inconsistently across files | Body `#1F1F1F`; secondary text `#404040` |
| `#F0F4ED`, `#F7F9F5`, `#F8F9FA`, `#FAF8F3`, `#FEFDFB`, `#FDFCFB`, `#F9F9F9`, `#F9FAFB`, `#FCF9F4`, `#FEFAF0`, `#E8F0DF`, `#F8FAF6`, `#FAFAFA` | Section and card backgrounds across 9 files | 13 near-white tints (green, cream, blue-grey); pages felt subtly different from each other | `#FFFFFF` and `#F7F7F7` only |
| `#E3E9DF`, `#E8E4DC`, `#F0E6ED`, `#DDDDDD`, `#CCCCCC`, `#E0E0E0`, `#D1D5DB` | Card, input and divider borders | Seven different "light grey" borders | `#EAEAEA` (dividers), `#8A8A8A` (form controls) |
| `#666666`, `#4B5563`, `#374151`, `#2D3748`, `#333333`, `#2D2D2D`, `#2A2A2A`, `#1A1A1A`, `#1A1A2E`, `#111827`, `#1F2937`, `#000000` | Subtitles, partner text, team bios, overlays | Twelve near-identical dark greys/slates from different palettes | `#1F1F1F`, `#404040`, `#111111` |
| `#F8F6F3` cream | Footer text (9 uses) | Warm tint, inconsistent with other text | `#EAEAEA` / `#9CA3AF` on `#111111` |
| `#EF4444` red | Contact form errors | Colour-only error emphasis; outside the palette | Black 2px border, icon and bold message text (not colour alone) |
| `#1877F2`, `#0077B5`, `#E1306C`, `#1DA1F2`, `#FF0000`, `#F09433`→`#BC1888` (Instagram gradient) | Footer and Get Involved social link hovers | Third-party brand colours flashing on hover | Neutral hover: white text and white border on dark |
| `#FF1493`, `#FF6F61`, `#FF6B35`, `#06D6A0` | Hero contact card glow, involvement card accents | Stray saturated accents unrelated to any palette | Removed |
| `#9CA3AF` | Contact info helper text | **2.54:1** on white (fails AA for text) | Kept only on dark surfaces (7.44:1) and for disabled/decorative use |
| `#2F3D2A` | `drop-shadow` filter on the navbar logo; logo also scaled and filtered gold on hover | Modified how the logo renders | Removed: logo shown with no filter or transform |
| `#000000` (`theme-color`) vs `#A8C090` (manifest) | Browser UI colour | Two conflicting theme colours | `#FFFFFF` in both |

### 3.3 Measured contrast failures (rendered, WCAG formula)

| Page | Element | Ratio | Required |
|---|---|---|---|
| Home | Founders' quote, white (inline `style={{color:'white'}}`) on a near-white section | ≈1.0:1, **invisible** | 3:1 (large) |
| About | Story highlight labels ("Women-Led Organization" and the others), white on pale cards | ≈1.0:1, **invisible** | 4.5:1 |
| Impact | Story headings (gold) | 2.10:1 | 3:1 |
| Impact | "More impact stories coming soon" | 1.99:1 | 4.5:1 |
| Impact | Location badges | 3.89:1 | 4.5:1 |
| Donate | Amounts `$25`…`$250` (gold) | 2.10:1 | 3:1 |
| Contact | "Send us an email anytime" and other helper lines | 2.54:1 | 4.5:1 |
| Get Involved | Social buttons | 3.73–4.26:1 | 4.5:1 |
| All pages | Footer social labels | 2.98–3.37:1 | 4.5:1 |
| All pages | Focus ring (gold on white) | 2.10:1 | 3:1 |

Text on gradients or photographs (up to 74 elements per page) could not be guaranteed to meet any ratio, because the background changes across the element.

## 4. Typography assessment

| Issue | Detail |
|---|---|
| Four font families declared, two loaded | Playfair Display (52 declarations) and Open Sans were loaded. **Inter** (16 declarations) and **Poppins** (5) were never loaded, so the nav, buttons and many paragraphs silently fell back to system fonts. Rendering differed by device. |
| Fonts loaded twice | Same Google Fonts request in `index.html` and as an `@import` in `styles.css` (render-blocking) |
| Unused icon font | Font Awesome 6.5.2 CSS loaded from a CDN on every page; the site uses `react-icons` and no `fa-` classes |
| Gradient text in headings | One word per heading painted with a gold or plum gradient ("Our *Story*", "Together We *Rise*"). It reads as generic, and its contrast can't be guaranteed. |
| Heavy text shadows | Hero title "Rise" had multiple glow shadows |
| All-caps buttons | Nav buttons forced uppercase with letter-spacing |
| No type scale | Font sizes set independently per component, with many `clamp()` values and no shared scale |

## 5. Layout assessment

1. **Global class collisions (critical).** Because all CSS is global, **41 class names were defined in two or more stylesheets**, and whichever loaded last won. Visible breakages:
   - `.program-card` (Home vs Programs): the Programs page's two-column grid squeezed the home "Our Core Programs" cards into a narrow text column (see `docs/design-review/home-desktop-before.jpg` and the baseline screenshots).
   - `.partner-card` (Impact vs Get Involved), `.contact-info` / `.contact-item` / `.contact-icon` (Footer vs Home vs Get Involved), `.section-title` (four files), `.success-message` / `.form-subtitle` (Contact vs Get Involved), `.stat-number`, `.story-badge` and 30 more.
2. **Specificity battles**: 54 `!important` declarations and 36 distinct media-query conditions (e.g. 260px, 319px, 360px, 374px, 479px, 480px, 575px, 576px, 600px, 640px, 767px, 768px, 850px, 968px, 991px, 992px…).
3. **Home page flow**: the closing call to action sat in the middle of the page, followed by the full programs section, which repeated an `<h1>`.
4. **Everything centred and boxed**: content cut into identical rounded cards with soft shadows; long paragraphs centred.
5. **Fixed header** compensated with hard-coded `margin-top` values per breakpoint.

## 6. Responsiveness findings

Tested at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px on all 10 pages (90 combinations).

| Issue | Where |
|---|---|
| **Desktop navigation shown at 768px and overflowing to x = 994px.** `html { overflow-x: hidden }` hid the overflow, so the "Get Involved" and "Donate" buttons were cut off and unreachable on tablets. | All pages, 768px |
| Mobile menu toggle drew an empty bordered box; the three bars and close icon were invisible | All pages, under 768px |
| Mobile menu: Escape did not close it; the page behind kept scrolling; link text was dark green on a translucent grey overlay | All pages, mobile |
| No horizontal page scroll at any width (but only because `overflow-x: hidden` masked overflowing elements) | — |

## 7. Accessibility findings (WCAG 2.2 AA)

| # | Finding | Criterion |
|---|---|---|
| 1 | Text contrast failures on every page (section 3.3); two pieces of text effectively invisible | 1.4.3 |
| 2 | Focus ring was gold on white (2.10:1) and applied with `:focus` instead of `:focus-visible` | 1.4.11, 2.4.7 |
| 3 | No "skip to main content" link | 2.4.1 |
| 4 | Two `<h1>` elements on the home page; footer jumped from `<h2>` to `<h4>` | 1.3.1 |
| 5 | Contact form errors not linked to their fields (`aria-describedby` missing); focus not moved to the first error | 3.3.1, 1.3.1 |
| 6 | Get Involved success message not announced (no live region) | 4.1.3 |
| 7 | Social "buttons" on Get Involved did nothing except write to the browser console | 2.1.1, 4.1.2 |
| 8 | Decorative icons exposed to screen readers (not `aria-hidden`) | 1.1.1 |
| 9 | Hero image alt text "Twezule Pathways" did not describe the photo | 1.1.1 |
| 10 | 24 infinite animations; only 6 of 11 stylesheets honoured `prefers-reduced-motion` | 2.3.3 (AAA), best practice |
| 11 | 49 `transition: all` declarations | Guideline |
| 12 | 16 `<img>` without `width`/`height`, causing layout shift | Guideline |
| 13 | Inputs without `autocomplete` | 1.3.5 |

## 8. Functional defects found during the audit

| Defect | Impact |
|---|---|
| **7 footer links pointed to anchors that did not exist** (`/programs#shg-training`, `#safety-training`, `#leadership`, `#community`, `/get-involved#volunteer`, `#partner`, `#champion`) | Links landed at the top of the page instead of the section |
| 11 internal links used `<a href>` instead of the router | Full page reload on every click |
| Page changes kept the previous scroll position | Clicking a footer link opened the next page already scrolled to the bottom |
| Favicon and manifest icon (`/TwezuleLogo.png`) returned **404**; manifest referenced two screenshots that did not exist | Broken browser tab icon; install prompt errors |
| No `<meta name="description">` | Weaker search results snippet |

## 9. Content issues (flagged, not changed)

These affect credibility but are content decisions for the organisation:

1. Home says **"1+ Years Combined Experience"**, while About says **"25+ Years Experience"** and describes founders with 20–25+ years each. One of these is probably a typo.
2. The `/donate` page says online donations are "being set up" and asks people to make contact, while every "Donate" button sends visitors to Omprakash. The `/donate` page is also not linked from the navigation.
3. **The Contact and Get Involved forms do not deliver messages.** They show "Message Sent Successfully!" but nothing is sent. Visitors may believe they have contacted you.
4. Privacy Policy and Terms of Service are placeholder text.
5. All four Impact metrics read "Impact data coming soon".
6. Footer social URLs (Facebook, Instagram, Twitter, LinkedIn, YouTube) have not been verified; "Twitter" is now "X".

## 10. Recommended improvements

1. Use the logo as the only coloured brand element; move the interface to a strict neutral token system.
2. Remove gradients, glows, shadows, looping animations and decorative shapes; let photography carry warmth, shown in natural colour with no tints.
3. Replace the 11 independent stylesheets with one shared design system (tokens and shared components) plus small, page-scoped files.
4. Choose one heading face and one body face, load them once, and set a real type scale.
5. Fix the navigation breakpoint, the mobile menu, focus states, the skip link, heading order, form accessibility and contrast.
6. Fix broken anchors, router links, scroll restoration, the favicon and the manifest.
7. Connect the forms to a real delivery service (organisation decision; see the implementation report).

All of items 1–6 have been implemented. See `IMPLEMENTATION_REPORT.md`.
