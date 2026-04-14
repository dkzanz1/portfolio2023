# 🛡️ The ACE Protocol: portfolio2023-main

## 1. Standard Enforcement (Architectural Control)

Standard 1: Single Source of Truth – This document governs all architectural and logical decisions.

Standard 2: Mobile-First Escalation – Target mobile viewports first. Use min-width queries ONLY. max-width media queries are strictly prohibited for layout to prevent "breakpoint snapping."

Standard 3: Semantic HTML – Mandatory use of `<main>, <section>, <article>, and <nav>`for A11y and SEO.

Standard 4: DRY Global Values – Use CSS Variables (--var) for all repeating values (colors, timing, easing). Define in :root. Never hard-code hex codes or speeds twice.

Standard 5: Component-Centricity – Mandatory use of Barrel Files (index.js) inside every component folder to ensure internal logic is isolated.

Standard 6: Fluid Scaling – Use clamp(), vw, or vh for typography and major layout margins to ensure seamless scaling.

Standard 7: Property Lean Inheritance – Define layout (position, display, pointer-events) at the Mobile level. Do not redeclare in @media unless the value changes.

Standard 8: Interactive Transparency – Overlays must use pointer-events: none to prevent interaction hijacking. Use clamp() for decorative assets.

Standard 9: Linting Enforcement – All commits must pass commitlint (lowercase scopes) and husky pre-commit hooks.

1. Technology Stack & Environment
Core: React + Vite (Functional Components & Hooks).

Styling: CSS Modules (.module.css) + Custom Properties (Variables).

Architecture: Component-Centric with Barrel Exports.

Commits: type(scope): description (Scopes MUST be lowercase).

1. Sequential Daily Routine (Logic Order)
Sync: git pull origin main

Maintenance: npm install (if needed) + Verify local tree against Project Map.

State Protection: Create feature branch: git checkout -b `<type>/<description>.`

Execution: npm run dev.

Context Control: Use "Open session" and "Close session" to manage AI state.

1. Conflict Resolution (The Git Protocol)
Save State: git stash push -m "CONFLICT_SAVE"

Resolve: Manually fix markers (<<<<<<<, =======, >>>>>>>).

Validation Gate: Run npm run build. Do not proceed if the app is crashed.

Stage: git add `<file-name>`

Resume: git rebase --continue (or merge --continue).

Push: git push --force-with-lease (required for rebasing).

1. Project Structure Map (The Barrel Pattern)
Component Level
src/components/ComponentName/

ComponentName.jsx

ComponentName.module.css

index.js (Export { default } from './ComponentName')

Full Project Tree
Plaintext
├── commitlint.config.js
├── Docs/
│   ├── currenttask.md
│   ├── MyJourney.md
│   ├── PROTOCOL.md
│   └── session_history.md
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── About/
│   │   ├── Burger/
│   │   ├── HeroCard/
│   │   └── ProjectCard/
│   └── hooks/
└── vite.config.js

Architectural Decision (2026-04-13):
We are deprecating Hover-Zoom for ProjectCard stickers in favor of Scroll-Sync Parallax which work better one mobile.

Rationale: To achieve the "Nautical Float" objective, visual movement must be tied to the user’s primary navigation (scrolling), not just pointer proximity. This ensures a consistent premium experience on both Desktop and Touch/Mobile Safari.

Standard: Interaction must maintain the .95 Dampening constant to ensure the parallax feels "heavy" and fluid, not "jittery."
