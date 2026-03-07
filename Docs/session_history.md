📂 NEW Session History: portfolio2023-main
Project Standard: V 2.7 (Fluid Parity & ACE Compliance)

✅ Completed Milestones (Archive)

Architecture: Moved Navigation to App.jsx to resolve stacking context/clipping issues.

Hero Section: Implemented 100vw "Full-Bleed" breakout via left: 50% / margin-left: -50vw.

Navigation: Deleted react-burger-menu; implemented custom "Curtain" drop-down with translateY.

Semantics: Swapped div for <section> and <article> in About.jsx (WCAG compliant).

Typography: Established clamp() as the mandatory fluid scaling standard.

Physics: Applied pointer-events: none to all decorative overlays to prevent interaction hijacking.

⚙️ Active Project Constants

Dampening (Precision): 0.95 (UI tracking).

Dampening (Lag): .07 (Organic boat movement).

Vertical Math: rect.height / 2 (Centering logic).

Scaling Standard: Fluid clamp() (No static px or rem for layout).

⚠️ Technical Debt (Revisit List)

Nest Hub Audit: Implement @media (max-height: 700px) for smart display overflow.

Global Overrides: Audit index.css for h2 styles clashing with module clamp().

Interaction Wake-up: Test mousemove listeners for "click-to-start" on mobile Safari.