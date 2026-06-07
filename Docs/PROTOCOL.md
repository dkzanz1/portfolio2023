# The ACE Protocol: portfolio2023-main

## 1. Standard Enforcement (Architectural Control)
* **Standard 1: Single Source of Truth** – This document governs all architectural and logical decisions.
* **Standard 2: Mobile-First Escalation** – Target mobile viewports first. Use min-width queries ONLY. max-width media queries are strictly prohibited for layout.
* **Standard 3: Semantic HTML** – Mandatory use of <main>, <section>, <article>, and <nav> for A11y and SEO.
* **Standard 4: DRY Global Values** – Use CSS Variables (--var) for all repeating values. Define in :root.
* **Standard 5: Component-Centricity** – Mandatory use of Barrel Files (index.js) inside every component folder.
* **Standard 6: Fluid Scaling** – Use clamp(), vw, or vh for typography and major layout margins.
* **Standard 7: Property Lean Inheritance** – Define layout at the Mobile level; do not redeclare in @media unless values change.
* **Standard 8: Interactive Transparency** – Overlays must use pointer-events: none to prevent interaction hijacking.
* **Standard 9: Linting Enforcement** – All commits must pass commitlint (lowercase scopes) and husky hooks.
* **Standard 10: JavaScript-Ready Casing (camelCase)** — All class names in CSS Modules must strictly use camelCase (e.g., `.waterVideo`, `.boatContainer`) rather than kebab-case (`.water-video`). This guarantees clean JavaScript dot notation (`styles.waterVideo`) inside React modules and avoids syntax friction.
## 2. Technology Stack & Environment
* **Core:** React + Vite (Functional Components & Hooks).
* **Styling:** CSS Modules (.module.css) + Custom Properties.
* **Commits:** type(scope): description (Scopes MUST be lowercase).

## 3. Sequential Daily Routine (Logic Order)
1. **Sync:** `git pull origin main`
2. **Maintenance:** `npm install` + Verify local tree.
3. **State Protection:** `git checkout -b <type>/<description>`
4. **Execution:** `npm run dev`
5. **Context Control:** Use "Open session" and "Close session" to manage AI state.

## 4. Conflict Resolution (The Git Protocol)
1. **Save State:** `git stash push -m "CONFLICT_SAVE"`
2. **Validation Gate:** Run `npm run build`. Do not proceed if the app is crashed.
3. **Stage:** `git add filename`
4. **Resume:** `git rebase --continue` (or `merge --continue`).
5. **Push:** `git push --force-with-lease` (required for rebasing).

## 5. Architectural Decisions
* **Decision (2026-04-13):** Deprecating Hover-Zoom for ProjectCard stickers in favor of Scroll-Sync Parallax.
* **Rationale:** To achieve the "Nautical Float" objective; visual movement must be tied to scrolling for consistency across Desktop and Mobile Safari.
* **Physics Standard:** Interaction must maintain the 0.95 Dampening constant to ensure the parallax feels "heavy" and fluid, not "jittery".
# Engineering Protocols Reference

## UI Layout Standards
- Standard 2: Desktop Escalation requires layout handshakes with the grid slot.
- Standard 6: Fluid scaling utilizes clamp functions and aspect ratios without strict layout snapping.
- Standard 8: Interactive physics constants use a strict .95 dampening or 0.6s cubic-bezier timing.

## Git Workflow Standards
- All examples provided must utilize lowercase scopes within commit messages to prevent Commitlint pipeline failures.