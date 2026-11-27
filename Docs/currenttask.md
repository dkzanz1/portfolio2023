# Current Task: portfolio2023-main

🎯 Active Target: Step 4 — Live Page Feedback & Corrections Sweep

---

## 1. CSS & Theme Reactivity audit
- [x] **Task 1.1: Fix Lighthouse Border Theme Switch (Item 2)**
  * Audit border styling on the lighthouse photo container in `About.module.css`.
  * Replace hardcoded blue border with a theme-aware CSS custom property via  index.css and set standard colors([data-theme='light']`).
  * Verify border transitions smoothly between dark and light themes without getting stuck on blue.

- [x] **Task 1.2: Upgrade Projects Text & Title Contrast (Item 3)**
  * Audit typography and background tint rules inside `Projects.module.css`.
  * Set project card body text to crisp high-contrast light text (`var(--text-primary)` / `#ffffff`).
  * Highlight project card titles with the signature blue accent while maintaining a 4.5:1 minimum accessibility contrast ratio.

- [ ] **Task 1.3: Align Social Icon Colors in Light Mode (Item 8)**
  * Inspect fill/stroke and color rules for social icons in `Footer.module.css` / `Burger.module.css`.
  * Replace static blue overrides with theme custom properties so icons update when toggling light mode.
  * Ensure hover states maintain proper contrast against light-theme backgrounds.

---

## 2. Mobile Layout & Overflow Fixes
- [ ] **Task 2.1: Center & Contain Mobile Social Icons (Item 4)**
  * Check `.footerContents` and mobile social link wrappers in `Footer.module.css`.
  * Replace fixed offsets or `100vw` container widths with centered flex wrapping (`flex-wrap: wrap; justify-content: center;`).
  * Ensure all social tap targets remain at least `44px × 44px` and stay within safe viewport bounds on narrow screens (`375px`).

- [ ] **Task 2.2: Stabilize Avatar Loading & Stack Alignment (Item 5)**
  * Inspect avatar image layers and `<picture>` elements in `HeroCard.jsx` / `HeroCard.module.css`.
  * Enforce strict `aspect-ratio` and absolute overlay centering (`inset: 0`) on image stack containers.
  * Prevent pre-styled or secondary avatar frames from rendering higher or out of alignment during initial load.

---

## 3. Navigation & Section Landing Alignment
- [ ] **Task 3.1: Calibrate Viewport Section Landing (Item 1)**
  * Evaluate anchor navigation targets (`#about`, `#skills`, `#projects`, `#contact`).
  * Apply `scroll-margin-top` to section containers or implement a viewport-aware smooth scroll helper.
  * Ensure clicked sections land comfortably in the middle of the viewport on desktop/ultrawide displays rather than clipping at the top.

---

## 4. Visual Polish, Destinations & Live Verification
- [ ] **Task 4.1: Redesign / Polish Boat Icon (Item 6)**
  * Review current boat graphic implementation (SVG / CSS asset).
  * Evaluate vector alternatives: minimal stroke SVG silhouette, subtle wave integration, or streamlined motion accent.
  * Preserve `0.95` physics dampening feel without visually cluttering smaller screen sizes.

- [ ] **Task 4.2: Audit Social Links & External Destinations (Item 7)**
  * Review active social icons across Hero and Footer sections.
  * Prune or hide placeholder links (e.g., unused Facebook links).
  * Direct active icons strictly to verified profile targets (GitHub, LinkedIn, Email / `#contact`).

- [ ] **Task 4.3: Cross-Viewport & Live Production Check**
  * Run cross-viewport check on mobile (`375px`), Chromebook, and ultrawide viewports.
  * Log any remaining visual, contrast, or alignment tweaks onto the live page corrections list.
  * Validate live Web3Forms contact submission on the deployed domain.

---

## Session Wrap-Up Anchors
- **Current Focus:** Task 1.1 (Lighthouse border theme reactivity) & Task 1.2 (Projects text contrast)
- **Branch State:** `main` (synced, `projectHistory.md` saved)