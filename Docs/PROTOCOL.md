eactCraft Project Protocol (V 2.5)
# Last Updated: January 2026

## 1. 🛑 Standard Enforcement (The ACE Protocol)
- This document is the single source of truth.
- All code must pass Linting/Formatting to maintain professional craft.
- Follow the Mobile-First strategy and Semantic HTML standards.

---

## 2. 🛠️ Technology Stack & Environment
- **Frontend:** React + Vite (Functional Components & Hooks).
- **Styling:** CSS Modules (`.module.css`) + Custom Properties (Variables).
- **Architecture:** Component-Centric with **Barrel Exports** (`index.js`).
- **Environment:** Chromebook (Linux/Crostini).

---

## 3. 📱 Mobile-First Standard
- **Base Style:** Target mobile viewports first.
- **Expansion:** Use `min-width` queries ONLY. `max-width` is prohibited for layout.
- **A11y:** Semantic HTML tags (`<main>`, `<nav>`) are mandatory.

---

## 4. 🏷️ Conventional Commits
Format: `type(scope): description`
- `feat`: New capabilities or components.
- `fix`: Resolving bugs or **Git conflicts**.
- `docs`: Updates to README or this Protocol.
- `chore`: Maintenance (e.g., updating `package.json`).

---

## 5. ⚠️ Conflict Resolution Action Plan (The "Git Protocol")
Use this when `git status` shows "Both Modified":

1. **Save State:** `git stash push -m "CONFLICT_SAVE"`
2. **Open Files:** Manually resolve markers (`<<<<<<<`, `=======`, `>>>>>>>`).
3. **Stage Fixed Files:** `git add <file-name>`
4. **Resume:** `git rebase --continue` (or `git merge --continue`).
5. **Final Push:** `git push --force-with-lease` (if rebasing).

---

## 📅 Daily Startup Routine
1. **Sync:** `git pull origin main`
2. **Install:** `npm install` (if `package.json` changed).
3. **Dev:** `npm run dev`


## 📂 Project Structure Map (The Barrel Pattern)
src/components/ComponentName/
├── ComponentName.jsx
├── ComponentName.module.css
└── index.js (Export { default } from './ComponentName')

paulzolik@penguin:~/react-projects/portfolio2023-main$ find . -maxdepth 4 -not -path '*/.*' -not -path './node_modules*' -not -path './dist*' | sed -e 's/[^-][^\/]*\// |  /g' -e 's/|  \([^ ]\)/|-- \1/'
.
 |-- src
 |   |-- assets
 |   |   |-- images
 |   |   |   |-- boat.svg
 |   |   |   |-- face.jpg
 |   |   |   |-- image4.jpeg
 |   |   |   |-- mephoto.jpg
 |   |   |-- videos
 |   |   |   |-- videobg.mp4
 |   |-- components
 |   |   |-- About
 |   |   |   |-- About.jsx
 |   |   |   |-- About.module.css
 |   |   |   |-- index.js
 |   |   |-- Burger
 |   |   |   |-- Burger.module.css
 |   |   |   |-- index.js
 |   |   |   |-- Burger.jsx
 |   |   |-- ContactForm
 |   |   |   |-- ContactForm.jsx
 |   |   |   |-- ContactForm.module.css
 |   |   |   |-- index.js
 |   |   |-- Footer
 |   |   |   |-- Footer.jsx
 |   |   |   |-- Footer.module.css
 |   |   |   |-- index.js
 |   |   |-- HeroCard
 |   |   |   |-- index.js
 |   |   |   |-- HeroCard.jsx
 |   |   |   |-- HeroCard.module.css
 |   |   |-- ProjectCard
 |   |   |   |-- projectInfo.js
 |   |   |   |-- ProjectCard.jsx
 |   |   |   |-- ProjectCard.module.css
 |   |   |   |-- index.js
 |   |   |   |-- projectCardList
 |   |   |-- Section
 |   |   |   |-- Section.module.css
 |   |   |   |-- Section.jsx
 |   |   |   |-- index.js
 |   |   |-- SocialFollow
 |   |   |   |-- SocialFollow.jsx
 |   |   |   |-- SocialFollow.module.css
 |   |   |   |-- index.js
 |   |   |-- WaterVideo
 |   |   |   |-- index.js
 |   |   |   |-- WaterVideo.jsx
 |   |   |   |-- WaterVideo.module.css
 |   |-- hooks
 |   |   |-- useTheme.js
 |   |-- index.css
 |   |-- index.jsx
 |   |-- App.module.css
 |   |-- App.jsx
 |-- README.md
 |-- index.html
 |-- public
 |   |-- favicon.ico
 |-- vite.config.js
 |-- Docs
 |   |-- MyJourney.md
 |   |-- currenttask.md
 |   |-- svg1.html
 |   |-- svg2.html
 |   |-- svg3.html
 |   |-- svg4.html
 |   |-- svg5.html
 |   |-- svg6.html
 |   |-- svgsnake.html
 |   |-- protocolRC.txt
 |-- install.
 |   |-- _
 |   |   |-- h
 |   |   |-- pre-commit
 |   |   |-- pre-merge-commit
 |   |   |-- prepare-commit-msg
 |   |   |-- commit-msg
 |   |   |-- post-commit
 |   |   |-- applypatch-msg
 |   |   |-- pre-applypatch
 |   |   |-- post-applypatch
 |   |   |-- pre-rebase
 |   |   |-- post-rewrite
 |   |   |-- post-checkout
 |   |   |-- post-merge
 |   |   |-- pre-push
 |   |   |-- pre-auto-gc
 |   |   |-- husky.sh
 |-- commitlint.config.js
 |-- package.json
 |-- package-lock.json

1/"Upon startup, verify the local file tree against the 📂 Project Structure Map (V 2.5) to ensure architectural integrity before executing npm run dev."
2/This session is now closed. When you're ready to start again, just say "Startup portfolio2023-main" and we'll dive straight into the code. See you then!

To help me manage state polllution of all my other conversations i will do you following:-
Trigger: Use "Open session: [Topic]" to set the context.

Action: I will prioritize relevant saved information and logic for that specific field.

Trigger: Use "Close session: [Topic]" to clear that context.

Benefit: Prevents "State Pollution" and ensures high-accuracy responses.
Use this as part of my state prevention protocol

6. (Feature Branching Protocol): Once a stable baseline 
is pushed to the remote repository (origin/main), 
all subsequent development must occur on 
a dedicated feature branch.
 This ensures the main branch remains 
 deployable and provides a clean point for 
 rollbacks or branch deletion 
 if the experimental logic fails. 
 Branch Creation: Use git checkout -b <type>/<description> (e.g., feat/contact-form).
.' This terminology aligns with standard CI/CD (Continuous Integration/Continuous Deployment) workflows used in professional dev shops."

Protocol Evaluation & Logic Order
The order is logical, but for a "Startup Routine," we should ensure the Feature Branching happens before you start coding. Here is the suggested professional flow for your daily work:

Sync & Maintenance: (Pull, Install, Clean tree check).

State Protection: (Feature Branching Protocol — Create your branch before opening the IDE).

Execution: (npm run dev).

Iteration: (ACE Protocol, Mobile-First, Conventional Commits).

Cleanup/Resolution: (Conflict Action Plan if needed).