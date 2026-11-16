# The ACE Protocol: portfolio2023-main

## 1. Architectural Standards

* **Standard 1: Single Source of Truth** — This document governs all architectural, styling, and structural decisions.
* **Standard 2: Mobile-First Escalation** — Target mobile viewports first. Use `min-width` queries only. `max-width` queries are strictly prohibited for layout structure.
* **Standard 3: Semantic HTML** — Mandatory use of `<main>`, `<section>`, `<article>`, and `<nav>` for accessibility (A11y) and SEO.
* **Standard 4: DRY Global Values** — Centralize all design tokens and colors via CSS Variables (`var(--name)`) defined in `:root`.
* **Standard 5: Component-Centricity** — Mandatory use of barrel export files (`index.js`) inside every component folder.
* **Standard 6: Fluid Scaling** — Use `clamp()`, `vw`, or `vh` for typography, spacing, and major layout dimensions.
* **Standard 7: Property Lean Inheritance** — Define base layout properties at the mobile level; redeclare in `@media` blocks only when values change.
* **Standard 8: Interactive Transparency & Physics** — Visual overlays must use `pointer-events: none` to prevent pointer hijacking. Interactive physics must strictly follow the `0.95` dampening factor or a `0.6s` cubic-bezier timing.
* **Standard 9: Linting & Commit Standards** — All commits must pass Husky hooks and Commitlint with strictly lowercase scopes (e.g., `feat(hero): description`).
* **Standard 10: JavaScript Casing (camelCase)** — Class names in CSS Modules must strictly use `camelCase` (e.g., `.waterVideo`, `.aboutContainer`) to ensure native JavaScript dot-notation (`styles.waterVideo`).

---

## 2. Technology Stack & Environment

* **Core Engine:** React + Vite (Functional Components & Custom Hooks)
* **Styling Layer:** CSS Modules (`*.module.css`) + Custom CSS Properties
* **Version Control:** Git with Conventional Commits (`type(scope): description`)

---

## 3. Sequential Daily Routine

1. **Sync State:** `git pull origin main`
2. **Environment Verification:** `npm install` + verify workspace tree
3. **Branch Protection:** `git checkout -b <type>/<description>`
4. **Dev Execution:** `npm run dev`
5. **Session Management:** Execute official "Session Start" and "Session Stop" protocols to manage context.

---

## 4. Git Conflict Resolution Protocol

1. **Save Current State:** `git stash push -m "CONFLICT_SAVE"`
2. **Build Gate Verification:** Run `npm run build` to confirm baseline integrity.
3. **Stage Fixed Dependencies:** `git add <filename>`
4. **Resume Process:** `git rebase --continue` (or `git merge --continue`)
5. **Safe Push:** `git push --force-with-lease`

---

## 5. Architectural Decisions & Milestones

* **Scroll-Sync Parallax Decision:** Deprecated hover-zoom for `ProjectCard` stickers in favor of scroll-sync parallax for consistent behavior across touch and desktop interfaces.
* **Physics Constant:** All floating and interactive elements operate with a `0.95` dampening multiplier to deliver a heavy, fluid feel.

---

## 6. Project Roadmap Status

* [x] **Phase 1: Structural Core** (Hero, Burger Menu layout)
* [x] **Phase 2: Design System** (`.modularBox` glassmorphism, fluid `clamp()` typography)
* [x] **Phase 3: Glass & Physics Sprint** (`0.95` dampening calibration, mobile avatar physics)
* [▶] **Phase 4 & 5: Hardening & Deployment Pipeline** (CURRENT STATION)