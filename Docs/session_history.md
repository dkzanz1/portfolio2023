# Master Project History: portfolio2023-main
Current Version: 2.9 (Liquid Physics & ACE Compliant) | Status: BUILD GREEN

## 🏗️️ Architectural Core (Locked Standards)
- Pattern: Component-Centric Barrel Pattern (index.js).
- Semantics: Mandatory <main>, <section>, <article>, <nav>, <footer> (A11y/SEO optimized).
- Fluidity: Global clamp() typography & --section-gap. Zero max-width layout media queries (Fluid Scaling Standard 6).
- The Spine: Rigid 10vw vertical alignment across About, Skills, and Projects sections.
- Naming Standard: Strict camelCase CSS Module classes and JSX properties (Standard 10).
- Commit Standard: Strict lowercase scope (e.g., feat(theme):, docs(skills):).

## ⚙️️ Engineering & Physics Constraints
- Dampening: 0.95 (UI tracking, cinematic inertia & menu bezier transition)
- Multiplier: 0.05 (Applied to dampening for "Heavy" feel)
- Vertical Math: rect.height / 2 (Viewport centering logic for active scroll triggers)
- Hover Scale: 1.08 (Subtle element "Swell" effect - Standard 8 compliant)
- Aspect Ratio: 4:5 (Mob) / 16:9 (Desk) (Core layout wrapper & asset stability)
- Video Target: < 2.0MB (videobg.mp4 compressed to 1.8MB - verified)

## 🏁 Phase Tracking & Milestones
- [x] Phase 1: Structural Core
- [x] Phase 2: Design System
- [x] Phase 3: Glass & Physics Sprint
- [x] Phase 4: Hardening & Validation (In Progress)
- [ ] Phase 5: Deployment Pipeline (Pending)

## 🏆 Completed Component Milestones
- HeroCard: Purged legacy neon colors (#0ee1ac). Applied 100vw breakout layout, fluid clamp() text scaling, vite-imagetools pipeline asset injection (herophoto.jpg), split avatar asset (hero-avatar-split), and calibrated custom JS boat drift.
- About Section: Applied .modularBox dark glass utility (rgba(10, 20, 30, 0.6) + 15px backdrop blur). Upgraded desktop grid ratio to 1.2fr 2fr. Shifted body copy (.blurb) to clamp(1.1rem, 1vw, 1.3rem). Replaced legacy photo with optimized WebP/AVIF aboutphoto.jpg (< 8 kB) inside <picture> elements to eliminate CLS. Surgically corrected Aboutblurb to aboutBlurb.
- Burger Menu: Reengineered to full curtain layout (100dvh). Symmetrically aligned rotation math via translateY(-50%) and applied Standard 8 pointer-events protection. Refined dimensions and media query nesting trap in Burger.module.css. Hover accent set to #ffd700.
- Skills Section: Propagated .modularBox dark glass design system across grid. Calibrated hover scaling to 1.08. Bound text overflow via .skillName.
- ProjectCard & List: Converted internal card architecture to adaptive Flexbox column model. Introduced .heroCard [class*="projectCardContentWrapper"] for Bento tile vertical text centering. Updated project descriptions with 2026 technical metrics (8.89s build optimization, AVIF/WebP image pipeline). Upgraded card container to semantic <article>. Purged hover/scroll transform conflicts to protect .95 dampening.
- Footer: Synced .footerContents, integrated semantic <time> tags, and moved social navigation inline.
- Theme System: Replaced hardcoded background with var(--background-color) in App.module.css. Standardized [data-theme='dark'] in index.css. Corrected 100hv viewport typo to 100vh.
- iOS Hardware Audit: Tested via Crostini Port 4173. Zero dropped frames, zero CLS, stable -webkit-backdrop-filter.

## 📋 Current Task Log & Startup Backlog
1. [ ] Avatar Image Alignment: Correct image stack alignment during dynamic stack/unstack sequences in HeroCard.
2. [ ] Rogue Oval Removal: Diagnose and eliminate the rogue empty oval element rendering on initial page load.
3. [ ] Sub-Component Glass Reactivity: Verify dark glass theme reactivity across all sub-components in light mode.
4. [ ] Serverless Form Handler: Open src/components/Contact (or Form Handler) to audit endpoint wire-up.
5. [ ] Standard 8 Interface Audit: Final cross-browser overlay compliance check on Footer/Social interactive layers (pointer-events: none).
6. [ ] Deployment Pipeline: Finalize hosting platform selection (Vercel / Netlify / GitHub Pages) and asset pipeline tests.

## 💾 Environment & Git State Protocol
- Startup Protocol:
  1. git stash pop
  2. npm run dev
  3. Load protocol and currenttask files.
- Build Verification: npm run build green (~8.89s threshold, zero compiler/PostCSS warnings).
- Working Tree: Clean, tracked, synchronized with remote origin/main.