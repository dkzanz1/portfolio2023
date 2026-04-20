# The ACE Protocol:portfolio2023-main

1.Standard Enforcement (Architectural Control)
Standard 1: Single Source of Truth – This document governs all architectural and logical decisions.

Standard 2: Mobile-First Escalation – Target mobile viewports first. Use min-width queries ONLY. max-width media queries are strictly prohibited for layout.

Standard 3: Semantic HTML – Mandatory use of `<main>, <section>, <article>, and <nav>` for A11y and SEO.

Standard 4: DRY Global Values – Use CSS Variables (--var) for all repeating values. Define in :root.

Standard 5: Component-Centricity – Mandatory use of Barrel Files (index.js) inside every component folder.

Standard 6: Fluid Scaling – Use clamp(), vw, or vh for typography and major layout margins.

Standard 7: Property Lean Inheritance – Define layout at the Mobile level; do not redeclare in @media unless values change.

Standard 8: Interactive Transparency – Overlays must use pointer-events: none to prevent interaction hijacking.

Standard 9: Linting Enforcement – All commits must pass commitlint (lowercase scopes) and husky hooks.

2.Technology Stack & Environment
Core: React + Vite (Functional Components & Hooks).

Styling: CSS Modules (.module.css) + Custom Properties.

Commits: type(scope): description (Scopes MUST be lowercase).

3.Sequential Daily Routine (Logic Order)
Sync: git pull origin main

Maintenance: npm install + Verify local tree.

State Protection: git checkout -b `<type>`/`<description>`

Execution: npm run dev

Context Control: Use "Open session" and "Close session" to manage AI state.

4.Conflict Resolution (The Git Protocol)
Save State: git stash push -m "CONFLICT_SAVE"

Validation Gate: Run npm run build. Do not proceed if the app is crashed.
`
Stage: git add filename

Resume: git rebase --continue (or merge --continue).

Push: git push --force-with-lease (required for rebasing).

5.Architectural Decision (2026-04-13)
Decision: Deprecating Hover-Zoom for ProjectCard stickers in favor of Scroll-Sync Parallax.

Rationale: To achieve the "Nautical Float" objective; visual movement must be tied to scrolling for consistency across Desktop and Mobile Safari.

Physics Standard: Interaction must maintain the .95 Dampening constant to ensure the parallax feels "heavy" and fluid, not "jittery"
