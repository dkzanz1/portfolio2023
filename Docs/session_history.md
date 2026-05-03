📜 Master Project History: portfolio2023-main
Current Version: 2.9 (Liquid Physics & ACE Compliance)

Lead Developer State: Job-Ready / Build Green

🏗️ Core Architecture (Locked)
Pattern: Component-Centric Barrel Pattern (index.js exports).

Semantics: Mandatory <main>, <section>, <article>, <nav>, and <footer> (A11y/SEO).

Fluidity: Global clamp() scaling and --section-gap variables; zero max-width media queries.

The "Spine": Verified 10vw vertical alignment across "About", "Skills", and "Projects" sections.

🌊 Phase 3: The "Glass & Physics" Sprint (2026-03-28 to 2026-05-02)
1. Navigation & UI Refinement
Hierarchy: Moved SocialFollow inside the Footer (Standard 5) and synced Burger within the HeroCard container for seamless overlaying.

A11y: Implemented <time> for copyright, aria-labels for social links, and converted sub-footers to <nav> to avoid nesting.

The "Glassy" Aesthetic: 60% deep-sea tint (rgba(10, 20, 30, 0.6)) + 15px backdrop-blur across all modular "SkillBoxes".

2. Physics & "Nautical Float"
True Drift: Implemented requestAnimationFrame with a Lerp speed of 0.005 for inertia.

Scroll-Sync Parallax: Replaced "Hover-Zoom" with scroll-based vertical movement on Project stickers.

Optimization: Added will-change: transform to prevent Safari frame-rate drops during glass-blur scrolling.

⚙️ Established Active Constants
Constant,Value,Context
Dampening,0.95,UI Tracking & Nautical Inertia
Physics Multiplier,0.05,"Applied to 0.95 dampening for ""Heavy"" feel"
Vertical Math,rect.height / 2,Centering logic for viewport triggers
Hover Scale,1.08,"Subtle ""Swell"" effect (Standard 8)"
Aspect Ratio,4:5 (Mobile) / 16:9 (Desktop),Cross-browser stability