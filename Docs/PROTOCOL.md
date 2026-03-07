1. 🛡️ Standard Enforcement (The ACE Protocol)
Single Source of Truth: This document governs all architectural decisions.

Mobile-First: Target mobile viewports first. Use min-width queries ONLY. max-width is prohibited for layout.

Semantic HTML: Mandatory use of <main>, <section>, <article>, and <nav> for A11y/SEO.

Standard 6 (Fluid Scaling): Use clamp() or vw/vh for typography and major margins.

Standard 7 (DRY Inheritance): Define layout properties (position, display, pointer-events) at the Mobile level. Do not repeat in @media unless the value changes.

Standard 8 (Interactive Transparency): Overlays must use pointer-events: none to prevent interaction hijacking on parallax/background logic. Use clamp() for all standalone decorative assets (SVGs/Icons).

2. 🛠️ Technology Stack & Environment
Stack: React + Vite (Functional Components & Hooks).

Styling: CSS Modules (.module.css) + Custom Properties (Variables).

Architecture: Component-Centric with Barrel Exports (index.js).

Commits: type(scope): description (Scopes MUST be lowercase).

3. 📅 Sequential Daily Routine (Logic Order)
Sync: git pull origin main

Maintenance: npm install (if needed) + Verify local tree against Project Map.

State Protection: Create feature branch: git checkout -b <type>/<description>.

Execution: npm run dev.

Context Control: Use "Open session: [Topic]" to start and "Close session: [Topic]" to clear AI state.

4. ⚠️ Conflict Resolution (The "Git Protocol")
Save State: git stash push -m "CONFLICT_SAVE"

Resolve: Manually fix markers (<<<<<<<, =======, >>>>>>>).

Stage: git add <file-name>

Resume: git rebase --continue or git merge --continue.

Push: git push --force-with-lease (if rebasing).

📂 Project Structure Map (The Barrel Pattern)
Plaintext
src/components/ComponentName/
├── ComponentName.jsx
├── ComponentName.module.css
└── index.js (Export { default } from './ComponentName')
(Tree layout maintained in internal logs as of 12-02-25)
ulzolik@penguin:~/react-projects/portfolio2023-main$ tree -I 'node_modules'
.
├── commitlint.config.js
├── Docs
│   ├── currenttask1.md
│   ├── MyJourney.md
│   ├── PROTOCOL.md
│   ├── session_history.md
│   ├── svg1.html
│   ├── svg2.html
│   ├── svg3.html
│   ├── svg4.html
│   ├── svg5.html
│   ├── svg6.html
│   └── svgsnake.html
├── index.html
├── install.
│   └── _
│       ├── applypatch-msg
│       ├── commit-msg
│       ├── h
│       ├── husky.sh
│       ├── post-applypatch
│       ├── post-checkout
│       ├── post-commit
│       ├── post-merge
│       ├── post-rewrite
│       ├── pre-applypatch
│       ├── pre-auto-gc
│       ├── pre-commit
│       ├── pre-merge-commit
│       ├── prepare-commit-msg
│       ├── pre-push
│       └── pre-rebase
├── package.json
├── package-lock.json
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── App.jsx
│   ├── App.module.css
│   ├── assets
│   │   ├── images
│   │   │   ├── boat.svg
│   │   │   ├── face.jpg
│   │   │   ├── image4.jpeg
│   │   │   └── mephoto.jpg
│   │   └── videos
│   │       └── videobg.mp4
│   ├── components
│   │   ├── About
│   │   │   ├── About.jsx
│   │   │   ├── About.module.css
│   │   │   └── index.js
│   │   ├── Burger
│   │   │   ├── Burger.jsx
│   │   │   ├── Burger.module.css
│   │   │   └── index.js
│   │   ├── ContactForm
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactForm.module.css
│   │   │   └── index.js
│   │   ├── Footer
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.module.css
│   │   │   └── index.js
│   │   ├── HeroCard
│   │   │   ├── HeroCard.jsx
│   │   │   ├── HeroCard.module.css
│   │   │   └── index.js
│   │   ├── ProjectCard
│   │   │   ├── index.js
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── projectCardList
│   │   │   │   ├── index.js
│   │   │   │   ├── ProjectCardList.jsx
│   │   │   │   └── ProjectCardList.module.css
│   │   │   ├── ProjectCard.module.css
│   │   │   └── projectInfo.js
│   │   ├── Section
│   │   │   ├── index.js
│   │   │   ├── Section.jsx
│   │   │   └── Section.module.css
│   │   ├── SocialFollow
│   │   │   ├── index.js
│   │   │   ├── SocialFollow.jsx
│   │   │   └── SocialFollow.module.css
│   │   └── WaterVideo
│   │       ├── index.js
│   │       ├── WaterVideo.jsx
│   │       └── WaterVideo.module.css
│   ├── hooks
│   │   └── useTheme.js
│   ├── index.css
│   └── index.jsx
└── vite.config.js

21 directories, 75 files
What was removed/merged:
Duplicates: The "[2026-02-27] Standard 7 & 8 Addition" block at the very end was merged into the main Standard Enforcement section.

Redundancy: Removed the repeated "Mobile-First" descriptions by consolidating them into the core ACE rules.

Clarity: Reorganized the "Startup Routine" into a numbered list that includes the Feature Branching Protocol, so you don't forget to branch out before you code.
Constraint Rule: Prohibit max-width media queries to prevent "Breakpoint Snapping" and logic conflicts. Use min-width for layout escalations and clamp() for internal element fluidity.
(Note: max-width on an element is okay/reasonably good; but max-width in a @media query is the problem!)