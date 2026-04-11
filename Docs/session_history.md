# 📜 Master Project History: portfolio2023-main

**STATUS:** 🟢 Job-Ready / Build Green  
**BRANCH:** feat/nav-glass-refinement  
**VERSION:** V 2.8
🏗️ 1. Core Architecture (Locked)
Pattern: Component-Centric Barrel Pattern (index.js).
Semantics: A11y/SEO compliant `(<main><section>, <article>)`.
The Spine: 10vw vertical alignment across Nav, Hero, and About.
Fluidity: Global clamp() scaling--section-gap variables.
Hero Breakout: 100vw Full-Bleed via calc(-50vw + 50%).

🌊 2. Phase 3: The "Glass & Physics" Sprint
FeatureTechnical Implementation
Nav UnityBurger moved inside HeroCard for zero-gap overlay.
Anchoring burger trigger transitioned from fixed → absolute.
True Drift request Animation Frame + Lerp speed of 0.005.
Liquid Glassrgba(10, 20, 30, 0.6) tint + 15px backdrop-blur.
Bento Mosaic3-column layout (2x2, 1x1, 3x1 spans).

⚙️ 3. Active Project ConstantsReference these for all new component logic to maintain the "Nautical" feel.
Dampening: 0.95 (UI Tracking & Nautical Inertia)
Physics Speed: 0.005 (Lerp "True Drift" weight)Vertical Math: rect.height / 2 (Centering logic)
Hover Zoom: scale(1.08) (600ms cubic-bezier ease)
Standard Ratios: 4:5 (Mobile) / 16:9 (Desktop)

✅ 4. Completed Milestones
Standard 6:🗑️ Deleted all max-width layout media queries.
GPU Stability: ⚡ Flickering resolved via will-change.
Alignment: 📏 Mirrored 10vw padding on "About" section.
Grid Fix:🖼️ Images stretching perfectly (Desktop aspect-ratio removed).
