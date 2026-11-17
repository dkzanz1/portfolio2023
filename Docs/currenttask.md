# Current Task: portfolio2023-main

## 🎯 Active Target: Phase 4 & 5 — Hardening & Deployment Pipeline


- [ ] **Hero Viewport & Typography Audit:** Fine-tune `clamp()` scale bounds on Hero header and subheadline to guarantee full visibility across viewports without crowding the avatar or video container.
- [ ] **Step 4 (Deployment Pipeline):** Finalize production build verification (`npm run build`) and configure Vercel/Netlify pipeline.

---

## 📐 Technical Architecture & Guidelines

### CSS `clamp()` Impact & Fluid Scaling Rules
`clamp(MIN, VAL, MAX)` acts as a responsive boundary control system across all viewports:
* **`MIN` (Floor):** Hard lower bound (rem/px). Prevents text from shrinking into unreadable sizes or collapsing container heights on small mobile screens.
* **`VAL` (Fluid Ideal):** Dynamic scaling factor (`vw` / `%`). Responsively resizes elements smoothly in lockstep with the viewport width without requiring heavy media queries.
* **`MAX` (Ceiling):** Hard upper bound (rem/px). Caps font size and avatar scaling on ultra-wide displays to prevent line-wrapping overflow, awkward spacing, or crowding sibling UI components.

---

## 📌 Project Roadmap Status

- [x] **Phase 1: Structural Core** (Hero layout, Burger Menu)
- [x] **Phase 2: Design System** (.modularBox glass, fluid clamp typography)
- [x] **Phase 3: Glass & Physics Sprint** (.95 dampening calibration, mobile avatar physics)
- [▶] **Phase 4 & 5: Hardening & Deployment Pipeline** (CURRENT STATION)