# Voyra Photography Studio — Standalone Next.js Clone Design Specification

## 1. Overview & Objectives
Convert the published `https://voyra.webflow.io/` photography studio website into a 100% standalone, component-driven Next.js (App Router) codebase with zero Webflow dependencies, zero CDN links to `website-files.com` or `cloudfront.net`, and zero Webflow or template-identifying artifacts.

## 2. Route Architecture (27 Total Pages)
Every static page, utility page linked in the footer, and CMS detail item on `https://voyra.webflow.io/` is included:

### 2.1 Static Core & Utility Pages (10 Routes)
1. `/` (`src/app/page.tsx`) — Home
2. `/about` (`src/app/about/page.tsx`) — About
3. `/works` (`src/app/works/page.tsx`) — Projects / Works Listing (supports page 1 & page 2 pagination)
4. `/blogs` (`src/app/blogs/page.tsx`) — Blogs Listing
5. `/contact` (`src/app/contact/page.tsx`) — Contact Form & Info
6. `/404` (`src/app/404/page.tsx` & `src/app/not-found.tsx`) — 404 Page Not Found
7. `/style-guide` (`src/app/style-guide/page.tsx`) — Style Guide
8. `/changelog` (`src/app/changelog/page.tsx`) — Changelog
9. `/licenses` (`src/app/licenses/page.tsx`) — Licenses
10. `/instructions` (`src/app/instructions/page.tsx`) — Instructions

### 2.2 Dynamic CMS Routes & Typed Data (17 Routes)
All CMS collections are extracted from the published HTML into strongly typed TypeScript data modules under `src/data/`:
- **Works (`src/data/works.ts` → `src/app/works/[slug]/page.tsx`, 9 routes):**
  - `event-photography`
  - `food-photography`
  - `lifestyle-photography`
  - `portrait-photography`
  - `travel-photography`
  - `wedding-photography`
  - `creative-photography`
  - `editorial-photography`
  - `personal-stories`
- **Blog Posts (`src/data/blogs.ts` → `src/app/blogs/[slug]/page.tsx`, 8 routes):**
  - `creating-mood-through-color-and-light`
  - `finding-emotion-in-everyday-frames`
  - `from-ordinary-scenes-to-visual-stories`
  - `how-light-can-transform-a-photograph`
  - `the-art-of-capturing-a-genuine-moment`
  - `the-story-behind-every-portrait`
  - `what-makes-a-photograph-feel-timeless`
  - `why-composition-matters-in-photography`

## 3. De-Webflow-ification & Neutral `ui-` Class Prefixing
- Strip all HTML comments, `<meta name="generator" content="Webflow">`, `data-wf-*`, `data-w-id`, and Webflow JS bundles.
- Rename all `w-*` classes and `w-node-*` IDs in both `src/styles/globals.css` and all React components to `ui-*` (`ui-container`, `ui-blockcontainer`, `ui-inline-block`, `ui-button`, `ui-nav*`, `ui-slider*`, `ui-form*`, `ui-richtext`, `ui-dyn-*`, `ui--current`, `ui--open`, `ui-node-*`).

## 4. Exact Interactions Audit (`interactions.md`) & GSAP Engine
- Extract all 31 GSAP IX3 interactions and timelines into `interactions.md`.
- Implement all 31 IX3 interactions + 3 `.ui-slider` carousels + `.faq-iteam` accordions + `.menu-button` toggle in `src/lib/animations/gsap-engine.ts`.

## 5. Local Asset Pipeline & Formspree Integration
- All 324 unique image/SVG assets (including responsive `srcset` variants and CSS background images) are stored locally in `public/assets/images/` and `public/assets/icons/`.
- Contact form submits to `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` and renders `.ui-form-done` / `.ui-form-fail`.
