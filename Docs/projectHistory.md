# Project History & Engineering Archive: portfolio2023-main

**Current Baseline:** Vercel Production Live | `main` synced with `origin/main`  
**Build Performance:** Clean Vite bundle (`~8.89s–9.33s`, zero errors/warnings)  
**Engineering Standards:** ACE Protocol Compliant | CSS Modules (camelCase) | Fluid `clamp()` Scaling

---

## 1. Major Architectural Milestones

### Production Deployment & Hosting (Vercel Integration)
* **Live Deployment:** Successfully launched `portfolio2023-main` to production on Vercel under workspace **Zogg World**.
* **Peer Dependency Resolution:** Resolved `ERESOLVE` build conflicts between `vite@6.4.2` and `vite-imagetools` by pinning `vite-imagetools@9`.
* **SPA Routing & Security:** Configured `vercel.json` rewrite fallback rules and integrated live `VITE_WEB3FORMS_ACCESS_KEY` environment variables.

### Core Component Architecture & Layout
* **Hero Section (`HeroCard`):** 
  * Replaced legacy `#0ee1ac` accents with a 5-layer state-driven theme reactivity system (blue cybernetic / gold accents).
  * Built `100vw` full-bleed breakout layout using fluid `clamp()` text scaling.
  * Calibrated dynamic JS boat LERP drift using the `0.95` dampening factor (`0.05` multiplier).
  * Configured multi-format `<picture>` pipeline using `vite-imagetools` (`herophoto.jpg`).
* **About Section:**
  * Converted layout to `.modularBox` dark glass styling (`rgba(10, 20, 30, 0.6)` + `15px` backdrop blur).
  * Established `1.2fr 2fr` desktop grid ratio with zero-CLS `<picture>` elements (`aboutphoto.jpg` < 8 kB).
* **Burger Menu & Navigation:**
  * Upgraded from bubble overlay to a full-bleed `100dvh` curtain layout.
  * Aligned `translateY(-50%)` rotation math and enforced Standard 8 `pointer-events` layer protection.
* **Projects & Skills Sections:**
  * Converted `ProjectCard` internal architecture to an adaptive Flexbox column model with scroll-sync parallax.
  * Applied `.modularBox` glassmorphism and `1.08` hover scale across the Skills grid.
* **Footer & Global Theme System:**
  * Standardized `var(--background-color)` and `[data-theme='dark']` variables.
  * Aligned footer social links to the `12.5vw` vertical layout spine with `44px` interactive touch targets.

### Viewport Scaling & Performance Optimization
* **Multi-Tier Responsive Escalation:** Added `1600px+` and `2200px+` scaling tiers with ultrawide capping (`max-width: 1950px`).
* **Hardware & iOS Audit:** Verified stable rendering, 60fps animations, and `-webkit-backdrop-filter` compatibility via port `4173` preview server.

---

## 2. Completed Task Log

### Phase 4: Hardening & Validation
- [x] Audit dark/light theme glass reactivity across `HeroCard`, `About`, `Projects`, `Skills`, and `ContactForm` CSS modules.
- [x] Refactor hardcoded colors, borders, and box-shadows onto global CSS custom properties.
- [x] Fix light-mode contrast on the hero scroll indicator.
- [x] Add explicit `id` attributes to section anchors (`#about`, `#projects`, `#skills`, `#contact`).
- [x] Ensure `html { scroll-behavior: smooth; }` is enforced globally.
- [x] Complete Standard 8 `pointer-events` and visual layer audit across interactive overlays.

### Phase 5: Deployment & Contact System Setup
- [x] Create `.env` configuration file for local environment variables and verify inclusion in `.gitignore`.
- [x] Obtain and configure `VITE_WEB3FORMS_ACCESS_KEY` in local `.env` and Vercel host dashboard.
- [x] Update `ContactForm.jsx` (react-hook-form) with asynchronous JSON submission to Web3Forms API.
- [x] Move contact form status feedback styles into `ContactForm.module.css`.
- [x] Add `vercel.json` SPA rewrite configuration to root directory.
- [x] Pass local `npm run build` gate and execute clean deployment push to Vercel `main`.

---

## 3. Core Physics & Token Reference
* **Physics Dampening Factor:** `0.95` (UI tracking, boat LERP, menu transitions)
* **Viewport Centering Math:** `rect.height / 2`
* **Layout Spine Alignment:** `10vw` vertical alignment margin
* **Hover Transform Scale:** `1.08`
* **Media Asset Limits:** Video background `< 2.0MB` (`1.8MB` actual), About image `< 8KB`