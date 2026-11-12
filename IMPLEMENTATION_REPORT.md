# Implementation Report: Monochrome Redesign

| | |
|---|---|
| **Date** | 12 November 2026 |
| **Baseline** | Commit `7709842` |
| **Scope** | Skill installation, full design audit (`DESIGN_AUDIT.md`), redesign of all 10 pages on a shared neutral design system (`DESIGN_SYSTEM.md`), and testing |
| **Stack** | Unchanged: React 18.2, Create React App 5.0.1, React Router 7.9.6, react-icons 4.12. **No dependencies added or removed.** |

---

## A. Skills installation

### A.1 Environment

- **Agent:** Claude Code (VS Code extension), on macOS with Node 26.5 and npm 11.17.
- **Skills location:** project-scoped `.claude/skills/`. No global configuration was changed, and there were no existing project skills to overwrite.

### A.2 Installed skills

| Skill | Source | Licence | Version | Location | How installed |
|---|---|---|---|---|---|
| **ui-ux-pro-max** (UI/UX Pro Max) | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), npm `ui-ux-pro-max-cli` | MIT | Skill 2.15.0 · CLI 2.15.0 · repo commit `6ae86f6` (10 Nov 2026) | `.claude/skills/ui-ux-pro-max/` | `npx ui-ux-pro-max-cli@2.15.0 init --ai claude`. The `claude` identifier was confirmed in the repository README and the CLI's `templates/platforms/claude.json`, not guessed. |
| **frontend-design** (Anthropic) | [anthropics/skills → skills/frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Apache-2.0 (`LICENSE.txt` included) | Repo commit `2c5958e` (6 Nov 2026) | `.claude/skills/frontend-design/` | Copied from a sparse checkout of the official repository |
| **web-design-guidelines** (Vercel) | [vercel-labs/agent-skills → skills/web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | MIT | Skill metadata 1.0.0 · repo commit `1a2c79d` (27 Oct 2026). Rules from [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) (MIT, commit `434b7f9`). | `.claude/skills/web-design-guidelines/` | Copied from the official repository |

### A.3 Security and licence review (before anything ran)

- **ui-ux-pro-max-cli:**
  - No `preinstall`/`install`/`postinstall` scripts.
  - Four well-known runtime dependencies (`chalk`, `commander`, `ora`, `prompts`).
  - The compiled CLI makes network calls only in `--legacy` mode, and only to the GitHub API for its own repository. Default `init` copies bundled files.
  - `init` writes only under `<project>/.claude/skills/` and skips existing folders unless `--force`.
  - `--dry-run` is documented in the README but not supported by 2.15.0, so I read the `init` source instead.
  - The search scripts are Python standard library only, with no network access.
- **frontend-design:** one Markdown instruction file plus its licence. No scripts.
- **web-design-guidelines:** one Markdown instruction file. At review time it downloads its rule list from `raw.githubusercontent.com/vercel-labs/web-interface-guidelines`, which I reviewed and which is MIT-licensed. This means its rules can change upstream, so treat future output with normal judgement.
- All three are free and from the vendor or an established open-source maintainer.

### A.4 Bundled extras removed

The UI/UX Pro Max installer also adds six sub-skills. I removed them from the project because each duplicates something already available, needs a paid service, or contradicts the brief:

| Sub-skill | Reason removed |
|---|---|
| `design`, `banner-design` | Generate logos and banners through the Gemini API (requires a paid API key); logo generation conflicts with the "do not change the logo" rule |
| `brand` | Extracts logo colours into design tokens, the opposite of this brief |
| `design-system` | Duplicates the `design:design-system` plugin skill already available to this agent |
| `ui-styling` | shadcn/ui + Tailwind, not this project's stack |
| `slides` | Presentation decks; out of scope |

Running the installer again restores them if they're ever wanted.

### A.5 Considered but not installed

- `vercel-labs/agent-skills` → `react-best-practices`: React/Next.js *performance* guidance, not design review.
- `composition-patterns`, `react-view-transitions`, `deploy-to-vercel`, `vercel-cli-with-tokens`, `vercel-optimize`, `writing-guidelines`: either out of scope, already covered, or require a Vercel account.

### A.6 Verification

| Check | Result |
|---|---|
| `SKILL.md` frontmatter (`name`, `description`) parses for all three | Pass |
| Claude Code discovers them | Pass. After a session restart, `frontend-design`, `ui-ux-pro-max` and `web-design-guidelines` appear in the agent's skill list, and each was loaded through the Skill tool. |
| UI/UX Pro Max search engine runs | Pass (`python3 .claude/skills/ui-ux-pro-max/scripts/search.py … --design-system`, `--domain typography`, `--domain style`) |

### A.7 Installation issues

1. Skills installed during a running session are not discovered until the next session. This is expected Claude Code behaviour.
2. Running the UI/UX Pro Max script with `python3 -I` (isolated mode) breaks its sibling imports; run it normally.
3. Running the script created `.claude/skills/ui-ux-pro-max/scripts/__pycache__/*.pyc`. These three files were included in commit `2013307`, which was made during the work. They should be untracked; see section D.6.

### A.8 How each skill shaped the work

- **UI/UX Pro Max:**
  - The design-system query recommended the "Trust & Authority" pattern and the "Accessible & Ethical" style.
  - The monochrome style query ("Minimalism & Swiss": no gradients, no unnecessary shadows) matched the brief.
  - Its typography results suggested the Newsreader editorial pairing.
  - Its priority rules set the quality floor: 4.5:1 contrast, 44px touch targets, visible labels, errors below fields, reduced motion, consistent tokens.
  - Its default *colour* suggestion (cyan and orange) was rejected because the brief takes precedence.
- **Frontend Design:**
  - The two-pass process (plan, review against generic defaults, then build).
  - Its concrete guidance: no single-word accent in headlines (removed all gradient words), no all-caps labels, kickers only where informative, one bold moment per page (the dark founders' quote), structure through type and rules instead of boxed cards.
  - Two changes came out of the plan review. Fraunces was dropped for Newsreader as too trendy for a donor-trust audience. A full-bleed hero with a dark scrim was replaced by a split hero so the photograph keeps its natural colour.
- **Web Interface Guidelines:** the rule list for the final compliance pass (section D.5).

---

## B. Website changes

### B.1 Pages reviewed and redesigned

All 10 routes: Home, About, Programs, Our Impact, Contact, Get Involved, Donate, Newsletter, Privacy Policy and Terms of Service, plus the shared navigation and footer. No page was removed. Unused files (`Service.js`, `DestinationData.js`, `MenuItems.js` content) were left untouched.

### B.2 Files changed

| File | Change |
|---|---|
| `src/styles.css` | **Rewritten** as the design system: tokens, base, typography, layout, buttons, cards, lists, stats, forms, reduced-motion and forced-colours support |
| `src/App.js` | Skip link, focusable `<main id="main">`, `ScrollManager` (scroll to top on page change, scroll to `#section` targets) |
| `src/components/Navbar.js` + `NavbarStyles.css` | Rebuilt as a function component: `NavLink` active state, visible hamburger/close icon, Escape to close, background scroll lock, auto-close on page change or resize, desktop layout from 1080px |
| `src/components/Footer.js` + `FooterStyles.css` | Dark neutral footer; router links; working section anchors; correct heading levels; neutral social links |
| `src/components/Hero.js` + `HeroStyles.css` | Home: split hero, video, intro + stats, core programs, dark founders' quote; closing CTA exported as `HomeCallToAction` |
| `src/routes/Home.js` | Order: Hero → Programs (embedded) → CTA |
| `src/components/Destinations.js` + `DestinationStyles.css` | Programs page and home embed (heading levels adapt); section anchors `#shg-training`, `#safety-training`, `#leadership`, `#community` |
| `src/components/AboutUs.js` + `AboutUsStyles.css` | Story with photograph, purpose, approach, team profile rows (data-driven) |
| `src/components/Impact.js` + `ImpactStyles.css` | Header, ruled metrics grid, stories, partners (data-driven) |
| `src/components/GetInvolved.js` + `GetInvolvedStyles.css` | Option cards with anchors `#partner`, `#volunteer`, `#champion`; donation panel; accessible form; real social links |
| `src/routes/Contact.js` + `src/components/ContactStyles.css` | Accessible validation; details list; map frame |
| `src/components/Donate.js` + `DonateStyles.css` | Impact levels as a ruled list; sticky "How to donate" card |
| `src/components/Newsletter.js` + `NewsletterStyles.css` | Download button in the header with an icon (was a ⬇ emoji); neutral PDF frame |
| `src/routes/PrivacyPolicy.js`, `TermsOfService.js` | Inline plum styles removed; shared page header |
| `public/index.html` | One font request (Newsreader + Public Sans); unused Font Awesome CDN removed; `theme-color` `#FFFFFF`; meta description added; favicon and apple-touch-icon |
| `public/manifest.json` | `theme_color` `#FFFFFF`; one valid icon entry; references to two missing screenshots removed |
| `public/TwezuleLogo.png` | **New:** byte-identical copy of `src/assets/TwezuleLogo.png`, fixing the favicon/manifest 404 |
| `DESIGN_AUDIT.md`, `IMPLEMENTATION_REPORT.md`, `DESIGN_SYSTEM.md`, `docs/design-review/*.jpg` | New documentation and before/after screenshots |

**Net CSS:** 10,987 → 2,164 lines (−80%). Gzipped CSS bundle 27.63 kB → 7.13 kB (−74%).

### B.3 Old and new design decisions

| Area | Before | After |
|---|---|---|
| Palette | 85 HEX + 111 rgba values built around the logo's gold/plum/sage | 9 neutral tokens; logo is the only colour |
| Effects | 170 gradients, 119 shadows, 22 backdrop blurs, 37 keyframe animations (24 infinite) | 0 gradients, 0 decorative shadows, 0 blurs, 1 keyframe (the form-submit spinner) |
| Typography | Playfair Display + Open Sans loaded; Inter + Poppins referenced but not loaded | Newsreader (headings) + Public Sans (body), loaded once |
| Home hero | Photo under a green tint, centred gradient title, gold and outline pill buttons | Split layout: large serif title on white, photograph in natural colour, black and white buttons |
| Structure | Identical rounded shadowed cards everywhere | Black-ruled columns and hairline lists; cards only for actionable options and entities |
| Founders' quote | White text on near-white (invisible) | The one dark band: large white italic serif on `#111111` |
| Headings | Plum, one word per heading in a gold gradient | Black, no highlighted words |
| Decoration | Floating blobs, star badges, coloured circles, card glows, accent lines | Removed; About's decorative circles replaced with an existing, previously unused photograph (`Tw7.JPG`) |

### B.4 Content changes (complete list)

All text content is preserved. The only edits were:

1. Redundant decorative badges removed: "Watch Our Story", the star icons in badges, and the rocket badge (its text "Expanding Our Impact" is kept as the subtitle). Informative kickers kept as plain text.
2. Words inside gradient `<span>`s are now plain text (the wording is unchanged).
3. Home CTA button "Get Involved" was relabelled **"Donate via Omprakash"**, because it always opened the Omprakash donation page. The label now matches the destination and the wording used elsewhere on the site.
4. Home CTA phone shown as `+256 772 444 876` (was `+256772444876`); phone and email are now tappable `tel:`/`mailto:` links.
5. Typography only: `...` → `…`, straight apostrophes in headings → `’`, curly quotes on quotations.
6. More descriptive alt text on 8 existing photographs (e.g. "Two women embracing and laughing together outdoors" instead of "Twezule Pathways"), plus new alt text for `Tw7.JPG` on the About page.
7. Get Involved social "buttons", which only logged to the browser console, became links to the same Facebook, Instagram and LinkedIn URLs the footer already used.

### B.5 Neutral palette, typography, spacing, buttons and forms

Specified in full in `DESIGN_SYSTEM.md`. In summary:
- **Colours:** `#FFFFFF`, `#F7F7F7`, `#EAEAEA`, `#9CA3AF`, `#404040`, `#1F1F1F` and `#111111` as briefed, plus `#8A8A8A` and `#6B6B6B` added for contrast.
- **Type scale:** 13 / 15 / 17 / 20 / 24px, with fluid h2 (30–44px), h1 (40–68px) and display (48–100px).
- **Spacing:** 4px-based scale; sections 64–120px; 1200px container.
- **Buttons:** 48px high (40px small), 6px radius; primary is black with white text, secondary is white with a grey border.
- **Inputs:** 48px high, `#8A8A8A` border, black focus ring, icon-and-text errors.

### B.6 Navigation improvements

- Clear active page: semibold label, 2px bar and `aria-current="page"`.
- Tablet fix: desktop links appear only from 1080px. At 768–1079px the hamburger is used, so nothing is clipped. (Before, "Get Involved" and "Donate" were unreachable at 768px.)
- Mobile menu: visible icon that animates to ×, full-screen white panel, large serif links with dividers, full-width actions, Escape closes it, background scroll locked, closes on navigation.
- Logo shown at 64px (56px on mobile) instead of 52px, with no filters or hover transforms.
- One primary action in the bar (Donate, black); "Get Involved" is secondary and shows a black border when that page is open.

### B.7 Responsive improvements

- Mobile-first grid layouts with intrinsic `auto-fit` columns replaced 36 ad-hoc media-query conditions.
- Sticky header; no hard-coded content offsets.
- `overflow-x: hidden` on `html`/`body` removed (it was hiding real overflow). The new layout has no overflow at any tested width.
- Images carry `width`/`height` (no layout shift); below-the-fold images lazy-load.

---

## C. Colour implementation

| UI element | Previous style | New style |
|---|---|---|
| **Logo** | Original brand colours (plus a drop-shadow filter and a gold glow and scale on hover) | **Original brand colours preserved.** The file is byte-identical, with no filter or transform, at a 1:1 aspect ratio. |
| Background | White mixed with 13 tinted near-whites, sage and plum gradient bands | `#FFFFFF`, with `#F7F7F7` for alternate sections; `#111111` for one band (home quote) and the footer |
| Main text | Greens `#2D4A28`, `#3D5A3A`, `#4A6741` and assorted slates | `#1F1F1F` body, `#111111` headings |
| Secondary text | `#666666`, `#4B5563`, `#9CA3AF` (2.54:1) and others | `#404040` (10.37:1); `#6B6B6B` for meta; `#9CA3AF` only on dark |
| Buttons | Gold gradient, sage outline, plum gradient, white pill: four styles | Primary `#111111` with white text; secondary white with `#111111` text and a `#9CA3AF` border |
| Borders | 7 light greys + sage `#B7C8A3` + gold bars | `#EAEAEA` dividers; `#111111` structural rules; `#8A8A8A` form controls |
| Icons | Gold or plum on gradient tiles, coloured social icons | `#111111` in an outlined square; white/grey on dark |
| Links | Gold hover, sage hover, social brand colours | `#111111` with a grey underline that turns black and thickens on hover; `#EAEAEA` → white on dark |
| Headings | Plum `#5B2245` with gold gradient words | `#111111` |
| Focus ring | Gold `#D4AF37` (2.10:1) | `#111111` (18.88:1), white on dark |
| Form errors | Red `#EF4444` | Black border + ring, icon and bold message |
| Browser theme colour | `#000000` / `#A8C090` | `#FFFFFF` |

**Verification:** a scan of every `.css` and `.js` file under `src/` finds **no colour values other than the 9 neutral tokens**. The compiled production CSS contains only those 9 values plus `transparent`.

---

## D. Testing

**Tools:** production builds served locally and tested with Playwright (`playwright-core` 1.49.1) driving Google Chrome headless, using custom scripts for overflow, headings, WCAG contrast (computed per text element against its effective background), tap targets, console errors and functional flows. Plus the CRA development server and Jest runner.

### D.1 Build

| | Before | After |
|---|---|---|
| `react-scripts build` | Compiled successfully | **Compiled successfully, no warnings** |
| JS (gzip) | 77.63 kB | 77.22 kB |
| CSS (gzip) | 27.63 kB | **7.13 kB** |
| Dev server (`react-scripts start`) | — | Compiled successfully. All 10 pages at 375px and 1280px show **no React warnings or console errors** in development mode. |
| Unit tests (`react-scripts test`) | No tests exist | No tests exist ("No tests found"). None were present before. |

### D.2 Pages × screen sizes (automated sweep)

10 pages × 9 widths (320, 375, 390, 430, 768, 1024, 1280, 1440, 1920) = 90 combinations, before and after:

| Check | Before | After |
|---|---|---|
| Horizontal scrolling | None (masked by `overflow-x: hidden`) | None, with no masking |
| Elements overflowing the viewport | Navigation on all 10 pages at 768px | **0** |
| `<h1>` per page | 2 on Home (all widths) | **1 on every page** |
| Text below WCAG AA contrast | 3–10 elements on **every** page | **0** (42–114 elements checked per page) |
| Text on gradients (unverifiable contrast) | Up to 74 elements per page | **0** |
| Undersized tap targets (under 24px) | 2–5 per page | **0** |
| Images without `alt` | 0 | 0 |
| Console errors / HTTP errors | Favicon 404 | **0** |

Extra edge widths 1079, 1080, 1120 and 1200px: no overflow. At 1080px the desktop nav fits with 160px to spare.

### D.3 Functional tests: 34/34 passed

| Area | Checks |
|---|---|
| Keyboard | Skip link is the first Tab stop, becomes visible, and moves focus to `<main>`. 2px focus ring visible on links. |
| Logo | Served file is SHA-256 identical to the original; no filter, blend or opacity change; rendered 64×64 (1:1). |
| Fonts | Newsreader and Public Sans loaded and applied. |
| Navigation | All 7 footer section links reach their targets (previously all broken). Page changes scroll to the top. All 9 internal link targets render a page. External links use `rel="noopener"`. |
| Mobile menu | Opens; Escape closes; background scroll locked; navigating closes it and marks the page `aria-current`. |
| Contact form | Empty submit shows 3 inline errors, focuses the first field, and sets `aria-invalid`/`aria-describedby`. An invalid email is rejected with focus on the email field. Errors clear while typing. "Sending…" disables the button. The success message is announced and the fields reset. |
| Get Involved | "Join Our Team" scrolls to the form and focuses its heading. Native `required` validation blocks an empty submit. Success message shown. Social links are real links. |
| Media | Every image on every page loads. The newsletter PDF downloads (HTTP 200, `application/pdf`) and is embedded. The YouTube embed renders. |
| Motion | Under `prefers-reduced-motion`, transitions drop to 0.01ms and smooth scrolling is off. |
| States | Primary button hover changes `#111111` → `#404040`. |
| Console | No errors from site code during the full run. |

### D.4 Accessibility checks (WCAG 2.2 AA)

Contrast, focus visibility, skip link, heading order, landmarks (`header`/`nav`/`main`/`footer`, labelled `nav`s), form labels and error association, live regions, `alt` text, decorative icons `aria-hidden`, target size, reduced motion and forced-colours borders: all checked as described above.

**Not performed:** testing with a real screen reader (VoiceOver/NVDA), on real phones and tablets, or in Safari and Firefox. Only Chromium was automated.

### D.5 Web Interface Guidelines pass (final code)

Zero `transition: all`, inline styles, `console` calls, emoji icons and clickable `<div>`/`<span>`s. Every input has `autocomplete`, and loading text uses "…". The three `outline: none` rules each have a `:focus-visible` replacement or apply to a non-interactive `tabindex="-1"` target. The only `<img>` tags without dimensions are in the unused `DestinationData.js`.

### D.6 Issues fixed during testing

1. Footer email broke mid-word at 1440px. Added a break opportunity after "@".
2. On the Get Involved page the "Get Involved" nav button showed no active state. Added a black border in that state.
3. Test-tooling issues (not site defects): lazy images not captured until the test scrolled, and a raw PDF link mistaken for a page. Both corrected and re-run.

### D.7 Remaining known issues and notes

| # | Item | Recommendation |
|---|---|---|
| 1 | **Forms don't send messages** (unchanged from before; both forms simulate success) | Connect to a form service (e.g. Formspree, Netlify Forms or an email API) or your own backend. Until then, visitors are told their message was sent when it wasn't. |
| 2 | Content inconsistencies listed in `DESIGN_AUDIT.md` §9 ("1+" vs "25+" years; `/donate` page vs Omprakash; placeholder legal pages; impact data "coming soon") | Content decisions for the organisation |
| 3 | The logo PNG is 1.59 MB and loads on every page | Ask the designer for a smaller export (e.g. 256px PNG/WebP or SVG) of the **same artwork**. I did not resize it myself, to honour the "do not alter the logo" rule. |
| 4 | Photos are 1920px JPEGs (50–660 kB each) | Add WebP versions and `srcset` |
| 5 | The `build/` folder and `build.zip` (your deployment artifacts) were **not regenerated** | Run `npm run build` (and re-zip) when you're ready to deploy |
| 6 | Commit `2013307` (made during the work and pushed) includes all source changes except the final navbar active-state tweak and the new documentation, and contains 3 Python `__pycache__/*.pyc` files | Add `__pycache__/` to `.gitignore` and run `git rm -r --cached .claude/skills/ui-ux-pro-max/scripts/__pycache__` |
| 7 | Not tested on Safari/Firefox, real devices or with screen readers | Recommended before launch |
| 8 | Footer social URLs have not been verified to exist | Confirm each profile URL |

---

## E. Final assessment

The site moved from a decorative, logo-coloured interface to a quiet, editorial black-and-white system where the logo and the photographs of the women Twezule Pathways serves are the only colour. Concretely:

- **Brand clarity:** the logo now stands alone. No gold, plum or sage appears anywhere else.
- **Professional polish:** one type pairing, one spacing scale, one button system and one way to build a section, used on every page. The CSS shrank by 80% and every global class collision is gone.
- **Accessibility:** contrast failures went from present on every page to zero. The site gained a skip link, visible focus, correct headings, accessible forms and reduced-motion support. The invisible quote and invisible About highlights are now readable.
- **Function:** tablet navigation is reachable again, the mobile menu works properly, seven broken footer links now land on their sections, page changes start at the top, and the favicon loads.
- **Preserved:** every page, all content, the YouTube video, Google Map, newsletter PDF, Omprakash donation links, contact links and both forms' existing behaviour. No new dependencies.

The highest-value next steps are making the forms actually deliver messages (D.7 #1), resolving the content inconsistencies, and optimising the logo and photo file sizes.

---

## F. Round 2: navigation bar and landing page (12 November 2026)

A second pass focused only on the navbar and the home page, done with the UI/UX Pro Max (landing pattern and navigation rules), Frontend Design and Web Interface Guidelines skills. Other pages are unchanged apart from the shared navbar.

### F.1 Problems found in the round-1 design

| Area | Problem |
|---|---|
| Navbar | Logo (a stacked mark-plus-wordmark lockup) shown at 56–64px, so the name was barely legible |
| Navbar | At 1024px, a common laptop and iPad-landscape width, all links and both buttons were hidden behind an unlabelled hamburger icon |
| Navbar | On phones, Donate was only reachable inside the menu |
| Navbar | Desktop links and buttons crammed to the right, leaving an unbalanced gap after the logo |
| Landing | The hero headline and tagline never said what the organisation actually does |
| Landing | Hero photo boxed in a rounded card with large dead margins |
| Landing | Programs appeared twice (icon columns, then the full embedded Programs page) with no link into them from the top of the page |
| Landing | The closing call to action did not point to the specific ways to get involved |

### F.2 What changed

**Navbar** (`Navbar.js`, `NavbarStyles.css`, `styles.css` header token):
- Three-zone desktop layout (logo, centred links, actions), measured centred to the pixel.
- 88px bar with a 72px logo, up from 64px; the logo file is untouched.
- Full desktop navigation from **1024px** (was 1080px).
- Mobile and tablet bar: logo, a visible **Donate** button and a **Menu** button with a text label.
- Menu panel: large serif links, current-page marker, "Get Involved" button, email and phone links.
- Header hairline appears only after scrolling.
- Accessibility: the open menu moves focus into itself and makes the rest of the page `inert`; Escape returns focus to the Menu button.
- `App.js` moves focus to `<main>` after every page change.

**Landing page** (`Hero.js`, `HeroStyles.css`, `routes/Home.js`):

| Section | Change |
|---|---|
| Hero | The photograph runs to the right edge of the screen at full hero height, in natural colour (stacked full-width on phones). The lead now says what the organisation does. Primary action "Get Involved", secondary "Discover Our Story". Sized so the hero ends inside the first screen at 1024×768, 1280×800 and 1440×900. |
| Our Core Programs | One photo-led section. Each program is a single link to its section on `/programs`, plus a "View All Programs" button. |
| Video | Placed beside its heading on desktop |
| Founders band (dark) | Titled "Ugandan Women Leading Change". Quote with founders beside it, the stats, and a "Meet Our Leaders" link. |
| Closing call to action | Donate via Omprakash + Contact Us, phone and email links, and a "Ways to Get Involved" list linking to `#partner`, `#volunteer` and `#champion` |

**Content notes** (no placeholder content added):
- The hero lead combines two existing sentences: "Lighting pathways from vulnerability to self-reliance across Uganda — a women-led organization empowering grassroots women through entrepreneurship, group savings, and leadership development."
- The three "Ways to Get Involved" lines are the first sentences of the existing Get Involved page copy.
- The home page no longer embeds the whole Programs page (detailed rows and Future Programs). That content is unchanged and remains at `/programs`.
- The "Explore Programs" button is replaced by "View All Programs".

### F.3 Testing

| Test | Result |
|---|---|
| Production build | Compiled successfully, no warnings (77.76 kB JS, 7.92 kB CSS gzipped) |
| Development server | Compiled successfully; no React warnings on any page at 390px and 1280px |
| Layout and accessibility sweep: 10 pages × 10 widths (320, 375, 390, 430, 768, 1023, 1024, 1280, 1440, 1920) | **100/100 pass**: no overflow or horizontal scroll, one `<h1>` per page, zero contrast failures, no undersized targets, no console or HTTP errors |
| Navbar and landing functional suite | **43/43 pass**, in both the production build and the development server (React StrictMode) |

The functional suite covers:
- logo integrity (SHA-256 identical, no filter, 1:1)
- links centred on the page
- sticky header and scroll-triggered border
- all 6 links with correct active state, focus moved to `<main>` and scroll reset
- Get Involved and Donate buttons
- keyboard Tab order
- the 1023/1024px breakpoint
- the mobile menu: label, focus into the menu, inert page, scroll lock, focus kept inside the header across 16 Tabs, Escape, closing on navigation and on resize
- the hero fitting the first screen at three desktop sizes, with no photo filter or overlay
- every landing-page link, including whole-item program clicks and `#section` targets
- the Donate, phone, email and YouTube integrations
- image loading, reduced motion, and zero console errors

Screenshots: `docs/design-review/landing-nav-{1440,1024,390}-{before,after}.jpg` and `mobile-menu-390-after.jpg`.

**Not covered:** Safari and Firefox, real devices, and screen-reader testing. Only Chromium was automated.
