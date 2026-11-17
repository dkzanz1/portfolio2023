# Current Task: portfolio2023-main

## 🎯 Active Target: Phase 4 & 5 — Hardening & Deployment Pipeline


- [ ] **Hero Viewport & Typography Audit:** Fine-tune `clamp()` scale bounds on Hero header and subheadline to guarantee full visibility across viewports without crowding the avatar or video container.
- [ ] **Step 4 (Deployment Pipeline):** Finalize production build verification (`npm run build`) and configure Vercel/Netlify pipeline.

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

- [x] **Phase 1: Structural Core** (Hero layout, Burger Menu)
- [x] **Phase 2: Design System** (.modularBox glass, fluid clamp typography)
- [x] **Phase 3: Glass & Physics Sprint** (.95 dampening calibration, mobile avatar physics)
- [▶] **Phase 4 & 5: Hardening & Deployment Pipeline** (CURRENT STATION)
current task first thing 
How to Fix It In-Protocol
To fix the layout for tablets and devices like the Nest Hub while strictly adhering to min-width only, we can introduce an intermediate tablet tier using min-width (e.g., 768px) before triggering the full desktop grid at 1200px+.

For example, sticking purely to min-width escalation:

Base styles: Mobile layout (0px upwards).

@media (min-width: 768px): Tablet tier (stacked or balanced spacing, perfect for Nest Hub and iPads).

@media (min-width: 1200px): Full desktop 2-column grid.

That way, every screen size is handled smoothly, and we stay 100% compliant with our min-width protocol standard.