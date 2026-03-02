🛠Consolidated Session State:portfolio2023-main
1.Active Logic & Standards

Dampening: 0.95 (Verified & Locked).

Vertical Math: rect.height / 2 (Implemented).

Fluid Scaling: clamp() or vw/vh mandatory for all new UI.

Breakout Pattern: margin-left: -50vw; left: 50%; width: 100vw;.

2.Technical Debt / "Stubborn Issues"

Typography Ceiling: Inspect index.css for global h2 overrides.

Nest Hub Overflow: Needs max-height: 650px media query fix.

Burger Refactor: Transition from "Slide-in" to "Top-Down" drop-down.

📋 Active Checklist (The "Current Task" Registry)
[ ] Task 7.1: HeroCard Visual Audit

Apply final 50vw breakout logic to HeroCard.module.css.

Check for overflow-x on 1024px+ screens.

[ ] Task 7.2: About.jsx Semantic P3 Audit

Swap generic <div> for <section> and <article>.

Add aria-labels where necessary for A11y.

[ ] Task 7.3: About Section "Rule of Thirds"

Implement grid-template-columns: repeat(3, 1fr) for Desktop ONLY.

Ensure Mobile-First inheritance (Standard 7).

[ ] Task 7.4: Final Parity Sync

Balance visual appeal across all breakpoints.

Professional Note: Reference Hero Physics Alignment

We confirmed that pointer-events: none on overlays is required for passive mouse tracking. Transitions MUST have units (e.g., 2s) to prevent the "rocket" effect.