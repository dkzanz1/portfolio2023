# Enterprise Developer Portfolio (`portfolio2023`)

[![CI Build & Test](https://github.com/dkzanz1/portfolio2023/actions/workflows/node.js.yml/badge.svg)](https://github.com/dkzanz1/portfolio2023/actions/workflows/node.js.yml)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Vite%20%7C%20CSS%20Modules-blue)

An enterprise-grade, highly optimized personal developer portfolio built with React and Vite. Designed around modular CSS architecture, fluid layout scaling, and custom interaction physics.

---

## 🚀 Key Engineering Highlights

- **Fluid Layout Architecture:** Implements responsive design systems using advanced CSS `clamp()` fluid typography and CSS Grid/Flexbox layouts without rigid breakpoints.
- **Custom Animation Physics:** Features mouse-tracking LERP physics for interactive UI elements.
- **Modular Component Design:** Built using localized CSS Modules, strict separation of concerns, and semantic HTML5 markup.
- **Automated CI/CD Pipeline:** Integrated with GitHub Actions to enforce automated build, test, and compilation verification on every push and pull request.

---

## 🛠️ Tech Stack

- **Frontend Core:** React, Vite, JavaScript (ES6+)
- **Styling:** CSS Modules, Custom CSS Variables, Fluid Typography Scaling
- **Quality & Governance:** ESLint, Prettier, Husky Pre-Commit Hooks, Commitlint (Strict lowercase scope convention)
- **CI/CD & Version Control:** Git, GitHub Actions (Node.js CI)

---

## 📂 Project Structure

```text
portfolio2023/
├── .github/
│   └── workflows/        # Automated CI/CD pipeline configurations
├── Docs/                 # Architectural rules & protocol guides
├── public/               # Static assets
└── src/
    ├── components/       # Reusable, modular UI components
    ├── styles/           # Global styles, variables, and mixins
    ├── App.jsx           # Root application component
    └── main.jsx          # Application entry point
