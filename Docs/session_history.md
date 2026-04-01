# 📜 Master Project History: portfolio2023-main

Latest Standard: V 2.8 (Liquid Physics & ACE Compliance)

Current Branch: feat/nav-glass-refinement

🏗️ Core Architecture (Locked)
Pattern: Component-Centric Barrel Pattern (index.js exports).

Semantics: A11y/SEO compliant using main, section and Article.

Fluidity: Global clamp() scaling and --section-gap variables established.

Hero Breakout: 100vw "Full-Bleed" logic via calc(-50vw + 50%).

🌊 Phase 3: The "Glass & Physics" Sprint (2026-03-28)
Focus: Unified Navigation & Cinematic Overlay

1. Navigation & Header Unity
Architecture Sync: Moved Burger component inside the HeroCard container to allow the navigation to sit directly over the WaterVideo without layout gaps.

The "Bursting" Fix: Transitioned burgerTrigger and topDownMenu from fixed to absolute. This anchors the menu within the Hero’s rounded-corner container (Standard 8).

Grid Alignment: Synchronized desktopNav (left: 10%) with the HeroCard overlay (padding-left: 10%) for a unified vertical line of sight.

1. Physics & Visuals
True Drift: Implemented requestAnimationFrame with a Lerp speed of 0.005 for a heavy, nautical inertia.

Liquid Glass: Applied 60% deep-sea tint (rgba(10, 20, 30, 0.6)) + 15px backdrop-blur for premium depth.

Branding: Verified 4:5 "Oval Standard" for stickers using aspect-ratio and border-radius: 100% for cross-browser stability.

1. Standards Applied
Standard 6 (Fluidity): Replaced all max-width media queries with clamp() and aspect-ratio: 16/9.

2. Standard 8 (Transparency): pointer-events: none verified on all text overlays to prevent mobile scroll-stutter.
Constant,Value,Context
Dampening,0.95,UI Tracking & Boat Inertia
Physics Speed,0.005,"Lerp ""True Drift"" weight"
Vertical Math,rect.height / 2,Centering logic
Aspect Ratio,4:5 (Mobile) / 16:9 (Desktop),Project Card Standards

Refactored grid to Rule of Thirds (1fr 2fr) on desktop via Standard 7.

⚙️ Active Project Constants
Dampening: 0.95 (UI Tracking) / 0.95 (Boat Inertia).

Vertical Math: rect.height / 2 (Centering logic).

Scaling: Fluid clamp() mandatory for all layout/typography.

🎯 Current Task Queue
ProjectCard Audit: Hunt for max-width media queries and convert to fluid gaps.

Mobile Scaling Audit: Physical device verification of z-index and menu links.

Stress Test: Verify boat physics smoothness on mobile Safari.
🎯 Active Tasks
[X] Task 1: ProjectCard Audit (Standard 6) — GRID LOCKED. clamp(), aspect-ratio, and width: 100% implemented.

[ ] Task 2: Mobile Scaling Audit — Physical device check for "Curtain" menu z-index.

[ ] Task 3: Physics Stress Test — Safari/Chrome .95 dampening verification for "Liquid Glass" bounce.

🛑 Session Stop Summary (2026-03-22)
Current Branch: feat/nav-glass-refinement

Status: CLEAN (GitHub synced)

Accomplishments:
System Recovery: Fixed Linux container boot hang via Crosh/Settings initialization.

Surgical CSS Breakout: Refactored ProjectCard.module.css.

Standard 6 Enforcement: Deleted all max-width media queries; replaced with clamp() and aspect-ratio: 16/9.

Bug Squashing: Fixed the 100px width constraint and syntax errors in the overlay positioning.
Component,Status,Standard Applied
Navigation,LOCKED,Liquid Glass + .95 Physics Bounce
About Section,LOCKED,Standard 6 (Zero Fluidity Debt)
ProjectCards,LOCKED,Fluid Grid + aspect-ratio + clamp()
Performance,LOCKED,GPU Acceleration (will-change)
Session Stop Summary: portfolio2023-main
Current Branch: feat/nav-glass-refinement

Status: Clean (CSS Transition Conflict Resolved).

Accomplishments:

Burger Menu: Full Standard 6 (clamp) and Standard 8 (pointer-events) integration.

ProjectCard: Aspect-ratio and fluid typography locked in.

HeroCard: Removed CSS transition to allow for clean JS physics.

The "Float" Goal: We established that the current weight isn't right yet. We need to find the sweet spot between "snappy" and "drifting" without losing the "float."
🎯 Current Task: [Task Name]
Status: 🟡 In Progress / 🔴 Blocked / 🟢 Completed

Branch: feat/[scope]-[description]

1. Task Objective
Brief description of the goal (e.g., "Refine Burger Menu Dimensions for fluid scaling").

2. ACE Protocol Checklist
Before marking a task as complete, verify against the standards:

[ ] Standard 2 (Mobile-First): Are all layout changes using min-width only?

[ ] Standard 6 (Fluid): Are clamp() or vw/vh used for new dimensions?

[ ] Standard 7 (Inheritance): Are properties inherited from mobile without redundancy?

[ ] Standard 8 (Transparency): Do new overlays have pointer-events: none?

[ ] Standard 9 (Linting): Does the commit message use lowercase scopes?

3. Sub-Tasks (Execution)
[ ] Step 1: [e.g., Identify current hard-coded widths in Burger.module.css]

[ ] Step 2: [e.g., Replace pixels with clamp() values]

[ ] Step 3: [e.g., Physics stress test for .95 dampening]

4. Technical Notes / Blockers
Note: [e.g., Found a 100px width constraint in the parent container.]

Fix: [e.g., Removed and replaced with width: 100%.]

5. Definition of Done (DoD)
[ ] Browser resize test (No layout snapping).

[ ] npm run build passes with zero errors.

[ ] Pushed to GitHub with git push --force-with-lease (if rebased).
📝 Session Summary: portfolio2023-main
Status: CLEAN & SYNCED

ProjectCard: Successfully hunted the missing bracket and removed the "copy-paste" glitch in .projectCardTitle.

Burger Menu: Implemented clamp() for the trigger and links. Verified Standard 8 pointer-events to protect the WaterVideo background interaction.

Physics: Confirmed the .95 dampening feel remains active via the cubic-bezier transition.
