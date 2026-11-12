# Animation and Transition Implementation Report

| | |
|---|---|
| **Date** | 12 November 2026 |
| **Code** | Commits `3ede8ca` and `454da82` (all motion work), on top of the site-wide redesign |
| **Stack** | React 18.3.1, React Router 7.9.6 (`BrowserRouter`), Create React App 5.0.1 |
| **Result** | Motion on every page, navbar, forms and footer. **No new dependencies**, about 1 kB extra JS and 1 kB extra CSS (gzipped). All tests pass, including reduced motion. |

---

## 1. Approach selected

**CSS transitions and keyframes, plus one small `IntersectionObserver` component, and no animation library.**

Before starting I checked the project: no animation libraries were installed (no Framer Motion, Motion, GSAP, React Spring, AOS or React Transition Group). The site already used CSS transitions and had global reduced-motion handling.

| Option | Decision |
|---|---|
| CSS transitions/keyframes | **Used** for every interaction, entrance and hover. They run on the compositor (opacity and transforms only) and cost nothing until used. |
| `IntersectionObserver` (built into browsers) | **Used** for scroll reveals: one ~120-line component configures the whole site from a single list |
| CSS scroll-driven animation (`animation-timeline: view()`) | **Used as a progressive enhancement** for the gentle hero-photo drift. Browsers without support simply don't show it. |
| Framer Motion / Motion | Not used. It would add about 40 kB, and its main extra, route *exit* animations, delays every navigation, which the brief rules out. |
| React Router view transitions | Not used. The `viewTransition` option needs a migration from `BrowserRouter` to a data router, an architecture change this doesn't justify. |
| GSAP | Not used. Nothing here needs timeline choreography. |

**Rules followed everywhere:**
- Only `opacity` and transforms are animated, using the individual `translate` / `scale` properties for entrances so they never conflict with hover `transform`s.
- No animation loops.
- Every animation is inside `prefers-reduced-motion: no-preference`, or zeroed by the global reduced-motion rule.

## 2. Libraries

None added, and none existing to reuse. `package.json` is unchanged.

## 3. Page transitions

| What happens | How |
|---|---|
| When a page opens, its hero content rises in sequence: kicker (40ms), headline (110ms), supporting text (220ms), buttons (330ms), 700ms each with a calm decelerating ease | `hero-rise` keyframes on `.page-hero__content > *` (`PageHero.css`). `PageHero` re-mounts on every route, so every page gets the entrance. |
| Photo heroes (home, About) settle from a slight zoom (1.08 → 1 over 1.8s) | `hero-settle` on `.page-hero__image` |
| **No blank or white flash** | The hero's plum or black background is never faded, only its content. The transparent navbar always has a dark hero behind it. |
| **No scroll-position flash** | Scroll-to-top on navigation now runs *before paint* (`useLayoutEffect` in `App.js`). Previously the new page could appear for a frame at the old scroll position. |
| No artificial delays | Pages render immediately; there are no exit animations |
| The navbar changes smoothly from transparent to solid white as you scroll | Existing background, border and colour transitions (220ms) |

## 4. Homepage animations

- **Hero:**
  - the headline, supporting text and buttons enter in sequence
  - the photo settles from a gentle zoom
  - on screens 600px and wider in supporting browsers (Chrome, Edge), the photo drifts slightly slower than the page as you scroll past (`hero-drift`, scroll-linked, no JavaScript)
- **Content sections** fade up as they enter the viewport. Related items stagger 80ms apart:
  - program cards
  - founders, and the stats
  - "Ways to Get Involved" rows
- **Images:** the video frame rises in, and program-card photos zoom gently (1.05) on hover and keyboard focus, because the cards are links.

## 5. Navigation bar

| Interaction | Implementation |
|---|---|
| **Sliding active-page pill** | One pill glides (480ms) to the new page's link: plum on the white bar, white over a hero. It's measured before paint on each page change and re-measured on resize and font load. The first placement is instant. The new link's text changes colour as the pill arrives (120ms delay). |
| Link hover | A soft pill fades in (black 6% on white, white 16% over a hero) |
| "Get Involved" hover | Underline fades in (sage on white, gold over a hero) |
| Buttons (Donate etc.) | Shared button motion (section 6) |
| Mobile menu | The panel fades and slides in (220ms); links rise in one after another (40ms apart), then the Get Involved button and contact details. On close, everything fades out together and faster. The Menu icon morphs into ×. |
| Sticky behaviour | Background, border and text colour transitions between the transparent and solid states |
| Dropdowns | The site has no dropdown menus, so none were added |

## 6. Buttons and cards

| Element | Hover / press |
|---|---|
| All buttons | Lift 2px on hover (pointer devices only); a trailing icon nudges 2px; pressing compresses to 98% in 80ms; colours ease over 220ms. Disabled and "Sending…" buttons never move. |
| Get Involved option cards (they carry actions) | Lift 4px with a plum outline |
| Newsletter page previews (links) | Lift 4px, plum outline, photo zooms 1.03 |
| Home program cards (links) | Photo zooms 1.05 |
| Footer social icons | Lift 2px and fill gold |
| Non-interactive cards (future programs, partners, metrics) | **No hover effects**, deliberately, so nothing suggests a click that does nothing |

## 7. Scroll animations

`src/motion/ScrollReveal.js` configures reveals for the whole site in one list (about 40 selectors across all pages):

| Type | Used for |
|---|---|
| Fade-up (28px) | Section headers, feature columns, text blocks, cards, team members, newsletter sections, form card, CTA band |
| Image reveal | `.split` photos on Programs, Impact and About: the frame stays put while the photo fades in and settles from 1.08 to 1 |
| Slide in from the right | Founder cards in the homepage band |
| Fade | Newsletter contents panel, CTA buttons, Impact closing note, footer bottom bar |
| Stagger (80ms, capped at 5 steps) | Grids and lists: programs, cards, metrics, stats, highlights, donation levels, contact details, newsletter page previews, footer columns |

**Behaviour:**
- Each element reveals **once** and is never hidden again.
- After its entrance it hands back its own hover and focus styles.
- Nested reveals are skipped, and the hero is excluded because it has its own entrance.
- 157 reveal targets across the 10 pages.
- **Content is never at risk:** elements are only hidden after the script marks them, so with JavaScript off or reduced motion on, everything is simply visible.

## 8. Footer and forms

| Area | Implementation |
|---|---|
| Footer entrance | Columns rise in with a stagger the first time the footer is scrolled into view (once per visit), then the bottom bar fades in |
| Footer links | Colour and gold underline fade on hover |
| Form field focus | The label of the field being typed in turns plum; border and focus ring transitions |
| Validation errors | Each message fades and slides into place (`feedback-in`, 220ms) |
| Success message | Fades up with a slight scale (`status-in`, 420ms) in the existing live region |
| Loading | Existing spinner and "Sending…" with the button disabled; the spinner stops under reduced motion |

All form behaviour, validation and messages are unchanged.

## 9. Performance

- Only `opacity`, `translate`, `scale` and `transform` are animated, all compositor-friendly. **Exception:** the nav pill also animates `width`, on one small absolutely positioned element that affects no other layout.
- One shared `IntersectionObserver` per page, disconnected on page change; no scroll listeners for reveals.
- Hover zooms and lifts are limited to pointer devices (`@media (hover: hover)`).
- No `will-change` hints, so no extra layers are held in memory.
- **Measured:**
  - cumulative layout shift from all motion: **0.0005** at worst, across all 10 pages (Google's "good" threshold is 0.1)
  - 95th-percentile frame time while scrolling the three longest pages: **17 ms**, with no frame over 50 ms
  - no infinite animations

## 10. Accessibility and reduced motion

With `prefers-reduced-motion: reduce`:
- nothing is marked for reveal, so all content is visible immediately
- the hero text appears at full opacity on load
- no keyframe animations run
- all transitions drop to about 0s
- smooth scrolling is off
- the spinner stops

This was verified on all 10 pages.

Keyboard focus rings remain immediate (never animated away), focus states mirror hover where it matters (program cards, option cards, newsletter previews), and the mobile menu's focus trap and Escape handling are unchanged. Animations never block input.

## 11. Files and components

| File | Change |
|---|---|
| `src/motion/ScrollReveal.js` | **New:** site-wide scroll-reveal system |
| `src/App.js` | Mounts `ScrollReveal`; scroll reset moved before paint |
| `src/styles.css` | Motion tokens (`--duration-slow`, `--duration-reveal`, `--ease-out-expo`, `--ease-in-out`, `--stagger`); button hover, press and icon nudge; form label, error and success motion; reveal styles; `feedback-in` and `status-in` keyframes |
| `src/components/PageHero.css` | Hero entrance, photo settle, scroll-linked drift |
| `src/components/Navbar.js` + `NavbarStyles.css` | Sliding active-page pill; mobile menu stagger |
| `src/components/HeroStyles.css` | Program-card photo zoom |
| `src/components/GetInvolvedStyles.css` | Option-card hover lift |
| `src/components/NewsletterStyles.css` | Page-preview hover lift and zoom |
| `src/components/FooterStyles.css` | Social icon lift |

## 12. Testing and results

Automated in headless Google Chrome (Playwright), on the production build and on the development server (React StrictMode).

| Test | Result |
|---|---|
| Production build | Compiled successfully, no warnings (82.2 kB JS, 10.3 kB CSS gzipped) |
| Motion suite (production): hero entrance on all 10 pages, reveals once on all pages, cleanup, CLS, loops, nav pill glide, hover feedback, button lift/press, form label/error/success/sending states, card hovers, mobile menu stagger, scroll frame timing, reduced motion on all pages | **35/35** |
| Motion suite (dev server, StrictMode) | **15/15**, no console errors or React warnings |
| Layout and accessibility sweep: 10 pages × 10 widths (320–1920px) after all reveals have played | **100/100**: no overflow, every reveal shown, one `h1`, no contrast failures, no console or HTTP errors |
| Real-pixel contrast of text over heroes and the transparent navbar, measured after the entrance finishes | **678/678 lines pass** on 10 pages × 7 sizes (worst 3.81:1, on large headline text where 3:1 is required) |
| Navbar and landing behaviour | **51/51** |
| Site-wide functional (forms, footer, anchors, downloads, images, logo) | **44/44** |
| Newsletter (fidelity to the PDF, links, downloads) | **14/14** |
| Navbar zone overlap, 13 widths | No overlap |

**Issues found and fixed during testing:**
1. The sliding pill was invisible. Its base selector outranked the "visible" and "over a hero" rules; specificity fixed.
2. The pill jumped instead of gliding. A font-load re-measure on every page change overrode the animation; it now runs only on first load and resize.
3. The reveal styles would have temporarily overridden cards' own hover transitions. Reveals now hand the element back after the entrance.
4. A `padding-left` transition (a layout property) slipped into the CTA rows; removed.
5. The scroll reset ran after paint, causing a possible one-frame flash; moved before paint.

## 13. Remaining notes

- **The hero-photo drift** needs CSS scroll-driven animations: supported in Chrome and Edge; Safari and Firefox show the static photo, with everything else identical.
- **The nav pill passes behind other links while gliding,** so those links' text briefly loses contrast for about 0.3 seconds. This is inherent to a sliding pill.
- **Not tested on real devices,** in Safari or Firefox, or with screen readers. All testing was automated in Chromium.
- **To add a reveal to new content,** add its selector to `RULES` in `src/motion/ScrollReveal.js`; there's no need to edit components.
