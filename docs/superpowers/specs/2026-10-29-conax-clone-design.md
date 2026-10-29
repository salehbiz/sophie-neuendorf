# Standalone Agency Website Clone — Design Specification

## 1. Overview & Objectives
Convert the published `https://conax.webflow.io/` website into a 100% standalone, component-driven Next.js (App Router) codebase with zero Webflow dependencies, zero CDN links to `website-files.com` or `cloudfront.net`, and zero Webflow or template-identifying artifacts.

## 2. Route Architecture (40 Total Pages)
All template utility pages (`/utility-pages/style-guide`, `/utility-pages/licenses`, `/utility-pages/changelog`) and the `/401` password page are excluded. Template route typos (`/blog-categoties`, `web-dessign`) are replaced with clean canonical paths (`/blog-categories`, `web-design`) and all internal links are updated accordingly.

### 2.1 Static Core Pages (9 Routes)
1. `/` (`src/app/page.tsx`) — Home
2. `/about-us` (`src/app/about-us/page.tsx`) — About Us
3. `/services` (`src/app/services/page.tsx`) — Services Overview
4. `/work` (`src/app/work/page.tsx`) — Works Portfolio
5. `/blog` (`src/app/blog/page.tsx`) — Blog Listing
6. `/pricing` (`src/app/pricing/page.tsx`) — Pricing & Plans
7. `/contact` (`src/app/contact/page.tsx`) — Contact Form & Info
8. `/privacy-policy` (`src/app/privacy-policy/page.tsx`) — Privacy Policy
9. `/terms-of-service` (`src/app/terms-of-service/page.tsx`) — Terms of Service
10. `/404` (`src/app/not-found.tsx`) — Custom 404 Page Not Found

### 2.2 Dynamic CMS Routes & Typed Data (30 Routes)
All CMS collections are extracted from the published HTML into strongly typed TypeScript data modules under `src/data/`:
- **Services (`src/data/services.ts` → `src/app/services/[slug]/page.tsx`, 4 routes):**
  - `ui-ux-design`
  - `brand-identity`
  - `web-development`
  - `digital-strategy`
- **Works (`src/data/works.ts` → `src/app/works/[slug]/page.tsx`, 6 routes):**
  - `zenith-brand-refresh`
  - `veloce-e-commerce`
  - `aura-fintech-app`
  - `stellar-saas-dashboard`
  - `luma-health`
  - `northland-studio-website`
- **Blog Posts (`src/data/blogs.ts` → `src/app/blog/[slug]/page.tsx`, 6 routes):**
  - `how-ai-is-redefining-the-next-generation-of-user-interfaces`
  - `why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech`
  - `implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention`
  - `motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability`
  - `why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography`
  - `how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions`
- **Blog Categories (`src/data/blogs.ts` → `src/app/blog-categories/[category]/page.tsx`, 3 routes):**
  - `support`
  - `development`
  - `web-design` (fixed from `web-dessign`; all category links across the site point to `/blog-categories/...`)
- **Team Members (`src/data/members.ts` → `src/app/member/[slug]/page.tsx`, 11 routes):**
  - `aris-thorne`, `chloe-whitmore`, `viktor-petrov`, `sarah-jenkins`, `david-jones`, `elena-moretti`, `sophia-chen`, `marcus-thorne`, `lily-vance`, `alex-reed`, `julian-frost`

## 3. Modular Section Component Architecture
Every page is composed of standalone, swappable section components under `src/components/sections/` plus shared layout components under `src/components/layout/`:
- **Layout Components (`src/components/layout/`):**
  - `Navbar.tsx` (top navigation bar, scroll background transition, mobile drawer menu, active route detection)
  - `GridOverlay.tsx` (background structural grid lines `.grid-overlay`)
  - `Footer.tsx` (footer CTA, navigation links, newsletter/contact links, copyright)
- **Home Sections (`src/components/sections/home/`):**
  - `HeroSection.tsx`
  - `PartnerLogosSection.tsx`
  - `AboutIntroSection.tsx`
  - `ServicesSection.tsx`
  - `SelectedWorkSection.tsx`
  - `OurApproachSection.tsx`
  - `WhyChooseUsSection.tsx`
  - `PricingSection.tsx`
  - `TestimonialsSection.tsx`
  - `AwardsSection.tsx`
  - `TeamSection.tsx`
  - `FaqSection.tsx`
  - `BlogPreviewSection.tsx`
- **About Us Sections (`src/components/sections/about/`):**
  - `AboutHeroSection.tsx`
  - `AboutStorySection.tsx`
  - `AboutStatsSection.tsx`
  - `AboutValuesSection.tsx`
  - `AboutTeamSection.tsx`
  - `AboutAwardsSection.tsx`
- **Services Sections (`src/components/sections/services/`):**
  - `ServicesHeroSection.tsx`
  - `ServicesListSection.tsx`
  - `ServiceDetailHeroSection.tsx`
  - `ServiceDetailContentSection.tsx`
  - `OtherServicesSection.tsx`
- **Work Sections (`src/components/sections/work/`):**
  - `WorkHeroSection.tsx`
  - `WorkGridSection.tsx`
  - `WorkDetailHeroSection.tsx`
  - `WorkDetailContentSection.tsx`
  - `RelatedWorksSection.tsx`
- **Blog Sections (`src/components/sections/blog/`):**
  - `BlogHeroSection.tsx`
  - `BlogFilterAndGridSection.tsx`
  - `BlogPostHeroSection.tsx`
  - `BlogPostContentSection.tsx`
  - `RelatedBlogsSection.tsx`
- **Pricing Sections (`src/components/sections/pricing/`):**
  - `PricingHeroSection.tsx`
  - `PricingPlansSection.tsx`
  - `PricingCompareSection.tsx`
- **Contact Sections (`src/components/sections/contact/`):**
  - `ContactHeroAndFormSection.tsx`
- **Member Sections (`src/components/sections/member/`):**
  - `MemberProfileSection.tsx`
- **Legal & Error Sections (`src/components/sections/legal/`):**
  - `LegalDocumentSection.tsx`
  - `NotFoundSection.tsx`

## 4. De-Webflow-ification & Neutral `ui-` Class Prefixing
- **Zero Webflow Affiliation:**
  - Strip all HTML comments, `<meta name="generator" content="Webflow">`, `data-wf-domain`, `data-wf-page`, `data-wf-site`, `data-wf-component-id`, `data-wf-element-id`, and `window.__WF_REVIEW_BRIDGE`.
  - Remove all Webflow JS bundles (`webflow.*.js`, `jquery-3.5.1.min.*.js`, `webfont.js`, `review.js`).
  - Remove "Webflow HTML Website Template" from page `<title>` and meta descriptions (e.g., use clean titles like `"Conax — Creative Design & Digital Agency"`).
- **Neutral `ui-` Prefix Mapping:**
  - Preserve the template's custom semantic classes (e.g., `.header-our-approach`, `.heading-h1`, `.testimonial-wrap`) untouched for pixel-identical layout.
  - Deterministically rename all `w-*` classes and `w-node-*` IDs in both `src/styles/globals.css` and all React components to `ui-*`:
    - `w-layout-blockcontainer` → `ui-blockcontainer`
    - `w-container` → `ui-container`
    - `w-layout-grid` → `ui-grid`
    - `w-inline-block` → `ui-inline-block`
    - `w-button` → `ui-button`
    - `w-nav*` → `ui-nav*` (`ui-nav`, `ui-nav-menu`, `ui-nav-link`, `ui-nav-button`, `ui-nav-overlay`, `ui-nav-brand`)
    - `w-dropdown*` → `ui-dropdown*`
    - `w-tab*` → `ui-tab*`
    - `w-slider*` → `ui-slider*`, `w-slide` → `ui-slide`
    - `w-form*` → `ui-form*` (`ui-form`, `ui-form-done`, `ui-form-fail`, `ui-input`, `ui-select`, `ui-checkbox`, `ui-radio`)
    - `w-richtext` → `ui-richtext`
    - `w-embed` → `ui-embed`
    - `w-dyn-*` → `ui-dyn-*` (`ui-dyn-list`, `ui-dyn-items`, `ui-dyn-item`, `ui-dyn-empty`)
    - `w-condition-invisible` → `ui-condition-invisible`
    - `w--current` → `ui--current`, `w--open` → `ui--open`, `w--redirected-checked` → `ui--checked`
    - `w-mod-js` → `ui-mod-js`, `w-mod-touch` → `ui-mod-touch`, `w-mod-ix3` → `ui-mod-ix3`
    - `id="w-node-..."` → `id="ui-node-..."`

## 5. Exact Interactions Audit (`interactions.md`) & GSAP Engine
1. **Audit Before Stripping (`interactions.md`):**
   - Before removing `data-w-id` attributes or Webflow JS bundles, parse all per-page Webflow JS chunks and inline `<style>` blocks to extract every interaction definition (`events`, `actionLists`, `timelines`, `triggers`, `targets`, `keyframes`, `durations`, `easings`, `staggers`, `scrollTrigger` start/end offsets, and media query conditions).
   - Document every interaction in `interactions.md` at the repository root with its trigger, target selector / component, initial state, animated properties, exact duration, easing curve, and stagger values.
2. **Exact GSAP Implementation (`src/lib/animations/`):**
   - Use `gsap` and `@gsap/react` (`ScrollTrigger`, custom cubic-bezier / ease curves, and word/line/char splitting matching the bundle) to reproduce every interaction documented in `interactions.md` with exact numerical fidelity and zero approximations.

## 6. Local Asset Pipeline
- Download every image (`.webp`, `.png`, `.jpg`), icon (`.svg`), and favicon referenced across all 40 pages and CSS into `public/assets/images/` and `public/assets/icons/`.
- Download all responsive `srcset` variants (`-p-500.webp`, `-p-800.webp`, `-p-1080.webp`, `-p-1600.webp`, `-p-2000.webp`, etc.) and rewrite `src` and `srcSet` attributes to local `/assets/...` paths.
- Load Google Fonts (`Geist`, `Inter`, `Inter Tight`, `Space Grotesk`, `Droid Sans`) via standard `<link>` / `next/font/google` in `src/app/layout.tsx`.

## 7. Metadata, SEO, Sitemap & Formspree Integration
- **Per-Page Metadata:** Every static and dynamic page exports `metadata` / `generateMetadata` with clean `title`, `description`, and `openGraph` (`title`, `description`, `images`, `type`) + `twitter` card metadata (with all "Webflow HTML Website Template" strings cleaned).
- **Sitemap:** `src/app/sitemap.ts` dynamically generates `/sitemap.xml` listing all 40 canonical routes (static pages + all CMS slugs).
- **Formspree Forms:** Contact and newsletter forms submit via `fetch` (`POST`, `Accept: application/json`) to `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` (with `.env.example` documenting `NEXT_PUBLIC_FORMSPREE_ENDPOINT`), displaying the exact `.ui-form-done` success and `.ui-form-fail` error states.

## 8. Visual Verification & Pixel-Diff Gate
- **4-Breakpoint Side-by-Side Verification:**
  - Capture full-page screenshots of all 40 pages at **1440px**, **991px**, **767px**, and **390px** viewports on both the live site (`https://conax.webflow.io`) and the local Next.js build (`http://localhost:3000`).
  - Run automated pixel/structural comparisons and side-by-side visual checks across all 4 breakpoints for every page, fixing any layout, typography, spacing, image, or animation state discrepancies before completion.
