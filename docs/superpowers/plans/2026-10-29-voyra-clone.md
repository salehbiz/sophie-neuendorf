# Voyra Photography Studio — Standalone Next.js Clone Implementation Plan

**Goal:** Clone the entire `https://voyra.webflow.io/` website (27 routes) into a standalone Next.js (App Router) codebase with modular swappable section components, exact GSAP animations documented in `interactions.md`, neutral `ui-` class prefixes, local assets, Formspree integration, per-page metadata/sitemap, and 4-breakpoint visual verification (1440px, 991px, 767px, 390px).

- [x] **Task 1:** Download Raw Snapshot & Audit All 31 Interactions (`interactions.md`)
- [x] **Task 2:** Download All 324 Local Media Assets & Transform Stylesheet (`w-*` -> `ui-*`)
- [x] **Task 3:** Build GSAP Engine & Interactive Widgets (`src/lib/animations/gsap-engine.ts`)
- [x] **Task 4:** Extract CMS Data, Build Modular Section Components & All 27 Next.js Routes
- [x] **Task 5:** Run Build, Zero-Webflow Verification & 4-Breakpoint Visual Verification
