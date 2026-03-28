📜 Master Project History: portfolio2023-main
Latest Standard: V 2.8 (Liquid Physics & ACE Compliance)

Current Branch: feat/nav-glass-refinement

🏗️ Core Architecture (Locked)
Pattern: Component-Centric Barrel Pattern (index.js exports).

Semantics: A11y/SEO compliant using <main>, <section>, and <article>.

Fluidity: Global clamp() scaling and --section-gap variables established.

Hero Breakout: 100vw "Full-Bleed" logic via calc(-50vw + 50%).

🌊 Phase 3: The "Glass & Physics" Sprint (2026-03-28)
Focus: Unified Navigation & Cinematic Overlay

1. Navigation & Header Unity
Architecture Sync: Moved <Burger /> inside the HeroCard container to allow the navigation to sit directly over the WaterVideo without layout gaps.

The "Bursting" Fix: Transitioned burgerTrigger and topDownMenu from fixed to absolute. This anchors the menu within the Hero’s rounded-corner container (Standard 8).

Grid Alignment: Synchronized desktopNav (left: 10%) with the HeroCard overlay (padding-left: 10%) for a unified vertical line of sight.

2. Physics & Visuals
True Drift: Implemented requestAnimationFrame with a Lerp speed of 0.005 for a heavy, nautical inertia.

Liquid Glass: Applied 60% deep-sea tint (rgba(10, 20, 30, 0.6)) + 15px backdrop-blur for premium depth.

Branding: Verified 4:5 "Oval Standard" for stickers using aspect-ratio and border-radius: 100% for cross-browser stability.

3. Standards Applied
Standard 6 (Fluidity): Replaced all max-width media queries with clamp() and aspect-ratio: 16/9.

Standard 8 (Transparency): pointer-events: none verified on all text overlays to prevent mobile scroll-stutter.
Constant,Value,Context
Dampening,0.95,UI Tracking & Boat Inertia
Physics Speed,0.005,"Lerp ""True Drift"" weight"
Vertical Math,rect.height / 2,Centering logic
Aspect Ratio,4:5 (Mobile) / 16:9 (Desktop),Project Card Standards