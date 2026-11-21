# Current Task: portfolio2023-main

🎯 Active Target: Step 4 — Form Handler Integration, Nav Audit & Deployment

## Active Backlog & Next Immediate Actions

### 1. Navigation & Dropdown Fixes
- [ ] Add explicit `id` attributes to main section containers (`#about`, `#projects`, `#skills`, `#contact`).
- [ ] Wire mobile/burger dropdown links (`handleNavClick`) to smooth-scroll handlers and close mobile overlay state on click.
- [ ] Ensure `html { scroll-behavior: smooth; }` is active in global CSS.

### 2. Contact Form & Theme Hardening
- [ ] Audit dark/light theme glass reactivity across sub-components in light mode.
- [ ] Obtain Web3Forms Access Key from web3forms.com.
- [ ] Create/update local `.env` with `VITE_WEB3FORMS_ACCESS_KEY` (and verify `.env` is in `.gitignore`).
- [ ] Update `ContactForm.jsx` to post JSON payload asynchronously to `https://api.web3forms.com/submit`.
- [ ] Complete final `pointer-events` / overlay interaction checks on interactive layers.

### 3. Production Deployment & Hosting
- [ ] Create `vercel.json` (or `public/_redirects`) for SPA fallback routing.
- [ ] Configure environment variable (`VITE_WEB3FORMS_ACCESS_KEY`) in host dashboard (Vercel/Netlify).
- [ ] Run final `npm run build` gate and push to trigger automated deployment.

---

## Session Wrap-Up Anchors
- **Current Station:** Phase 4 & 5 — Hardening, Form & Navigation Setup
- **Branch State:** `main` (up to date with `origin/main`)