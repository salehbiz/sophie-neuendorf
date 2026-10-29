# Conax Standalone Next.js Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clone the entire `https://conax.webflow.io/` website (40 canonical routes) into a standalone Next.js (App Router) codebase with modular swappable section components, exact GSAP animations documented in `interactions.md`, neutral `ui-` class prefixes, local assets, Formspree integration, per-page metadata/sitemap, and 4-breakpoint visual verification (1440px, 991px, 767px, 390px).

**Architecture:** Next.js App Router (`src/app/`) with TypeScript, local CSS (`src/styles/globals.css`) transformed from the published stylesheet with all `w-*` classes renamed to `ui-*`, strongly-typed CMS data modules (`src/data/services.ts`, `works.ts`, `blogs.ts`, `members.ts`), modular page section components (`src/components/sections/`), and a dedicated GSAP animation engine (`src/lib/animations/`) reproducing every interaction documented in `interactions.md`.

**Tech Stack:** Next.js 15+ (App Router), React 19, TypeScript, GSAP (`gsap`, `@gsap/react`, `split-type` / custom SplitText engine), Playwright (for 4-breakpoint side-by-side screenshot verification).

## Global Constraints

- **Zero Webflow Affiliation:** No `webflow` strings, comments, `<meta name="generator">`, `data-wf-*`, `data-w-id`, `w-*` classes, `w-node-*` IDs, or external calls to `cdn.prod.website-files.com` / `d3e54v103j8qbb.cloudfront.net` / `createsomething.workers.dev`.
- **Neutral Prefix:** Rename all `w-*` classes and `w-node-*` IDs to `ui-*` (`ui-container`, `ui-blockcontainer`, `ui-grid`, `ui-inline-block`, `ui-button`, `ui-nav*`, `ui-form*`, `ui-richtext`, `ui-embed`, `ui-dyn-*`, `ui--current`, `ui--open`, `ui-node-*`) across CSS and markup simultaneously while keeping custom template classes untouched.
- **Route Cleanup:** Exclude `/utility-pages/*` (`/style-guide`, `/licenses`, `/changelog`) and `/401`. Fix route typos: only `/blog-categories/[category]` and slug `web-design` (no `/blog-categoties` or `web-dessign` routes). Total: 40 routes.
- **Exact Interactions Audit First:** Before stripping `data-w-id`, generate `interactions.md` listing every interaction from the published bundles with its trigger, target selector, and exact numerical values (keyframes, durations, easings, staggers, scrollTrigger start/end). GSAP code must match those exact values.
- **Modular Section Components:** Every page section must be its own standalone React component under `src/components/sections/<page>/` so sections can be swapped independently.
- **Metadata & Sitemap:** Every page must export `metadata` / `generateMetadata` (`title`, `description`, `openGraph`, `twitter`) with "Webflow HTML Website Template" removed, plus `src/app/sitemap.ts` covering all 40 routes.
- **Formspree Integration:** Forms post to `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` and render `.ui-form-done` / `.ui-form-fail` states.
- **Definition of Done:** Side-by-side screenshots of all 40 pages at `1440`, `991`, `767`, and `390` widths compared against the live site, with all visual diffs resolved.

---

### Task 1: Download Raw Snapshot & Audit All Interactions (`interactions.md`)

**Files:**
- Create: `scripts/fetch-snapshot.mjs`
- Create: `scripts/extract-interactions.mjs`
- Create: `interactions.md`
- Test: `scripts/verify-interactions-doc.mjs`

**Interfaces:**
- Consumes: Live published pages and JS/CSS bundles at `https://conax.webflow.io/`
- Produces: Raw cached HTML/CSS/JS snapshot in `.cache/snapshot/` (gitignored) and committed `interactions.md` at repository root documenting 100% of interactions.

- [ ] **Step 1: Write the failing verification script for `interactions.md`**

```javascript
// scripts/verify-interactions-doc.mjs
import fs from 'node:fs';
import assert from 'node:assert';

assert.ok(fs.existsSync('interactions.md'), 'interactions.md must exist');
const content = fs.readFileSync('interactions.md', 'utf8');
assert.ok(content.includes('## Global / Shared Component Interactions'), 'Missing shared interactions section');
assert.ok(content.includes('## Page-Level & ScrollTrigger Interactions'), 'Missing page interactions section');
assert.ok(content.includes('duration'), 'Missing exact duration values');
assert.ok(content.includes('ease'), 'Missing exact easing values');
assert.ok(content.includes('stagger'), 'Missing stagger values');
console.log('interactions.md verification passed.');
```

- [ ] **Step 2: Run verification script to confirm it fails**

Run: `node scripts/verify-interactions-doc.mjs`
Expected: FAIL with `interactions.md must exist`

- [ ] **Step 3: Write `scripts/fetch-snapshot.mjs` and `scripts/extract-interactions.mjs` to download all 40 pages, CSS, and JS bundles, and generate `interactions.md`**

```javascript
// scripts/fetch-snapshot.mjs
// Downloads all 40 live routes, shared CSS, and all per-page Webflow JS chunks into .cache/snapshot/
```

- [ ] **Step 4: Run snapshot fetch and interaction extractor, then verify `interactions.md`**

Run: `node scripts/fetch-snapshot.mjs && node scripts/extract-interactions.mjs && node scripts/verify-interactions-doc.mjs`
Expected: PASS (`interactions.md verification passed.`)

- [ ] **Step 5: Commit `interactions.md` and extraction scripts**

```bash
git add interactions.md scripts/
git commit -m "docs(interactions): extract exact interaction definitions from published bundles"
```

---

### Task 2: Download All Local Media Assets & Transform Stylesheet (`w-*` -> `ui-*`)

**Files:**
- Create: `scripts/download-assets.mjs`
- Create: `scripts/transform-css.mjs`
- Create: `public/assets/images/...`
- Create: `public/assets/icons/...`
- Create: `src/styles/globals.css`
- Test: `scripts/verify-zero-webflow-css.mjs`

**Interfaces:**
- Consumes: `.cache/snapshot/` HTML & CSS files
- Produces: `public/assets/asset-map.json` (mapping original CDN URLs to `/assets/...`), all local image/SVG files under `public/assets/`, and `src/styles/globals.css` with `ui-*` classes and local asset URLs.

- [ ] **Step 1: Write failing test `scripts/verify-zero-webflow-css.mjs`**

```javascript
// scripts/verify-zero-webflow-css.mjs
import fs from 'node:fs';
import assert from 'node:assert';

assert.ok(fs.existsSync('src/styles/globals.css'), 'globals.css must exist');
const css = fs.readFileSync('src/styles/globals.css', 'utf8');
assert.ok(!css.includes('website-files.com'), 'CSS must not reference website-files.com');
assert.ok(!css.includes('webflow'), 'CSS must not contain webflow branding');
assert.ok(!/\.(w-container|w-layout-blockcontainer|w-layout-grid|w-inline-block|w-button|w-nav|w-form|w-richtext|w-embed|w-dyn-)/.test(css), 'CSS must not contain w-* utility classes');
assert.ok(css.includes('.ui-container'), 'CSS must contain .ui-container');
assert.ok(css.includes('.ui-blockcontainer'), 'CSS must contain .ui-blockcontainer');
console.log('CSS verification passed.');
```

- [ ] **Step 2: Run test to confirm it fails**

Run: `node scripts/verify-zero-webflow-css.mjs`
Expected: FAIL with `globals.css must exist`

- [ ] **Step 3: Implement `scripts/download-assets.mjs` and `scripts/transform-css.mjs`**

Download all unique images, responsive srcset variants, SVGs, and favicons referenced in HTML and CSS into `public/assets/`, and transform `shared.css` into `src/styles/globals.css` replacing all `w-*` selectors with `ui-*` and stripping `.w-webflow-badge`.

- [ ] **Step 4: Run asset downloader, CSS transformer, and verification**

Run: `node scripts/download-assets.mjs && node scripts/transform-css.mjs && node scripts/verify-zero-webflow-css.mjs`
Expected: PASS (`CSS verification passed.`)

- [ ] **Step 5: Commit assets and transformed stylesheet**

```bash
git add public/assets/ src/styles/globals.css scripts/
git commit -m "feat(assets,css): download all media assets locally and transform w-* classes to ui-*"
```

---

### Task 3: Scaffold Next.js App Router Project, Fonts, Layout, Sitemap & Typed CMS Data

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.env.example`, `.gitignore`
- Create: `src/data/services.ts`, `src/data/works.ts`, `src/data/blogs.ts`, `src/data/members.ts`, `src/data/metadata.ts`
- Create: `src/app/layout.tsx`, `src/app/sitemap.ts`
- Create: `src/components/layout/Navbar.tsx`, `src/components/layout/GridOverlay.tsx`, `src/components/layout/Footer.tsx`
- Test: `scripts/verify-cms-data.mjs`

**Interfaces:**
- Consumes: `.cache/snapshot/` HTML pages, `public/assets/asset-map.json`, `src/styles/globals.css`
- Produces: Typed CMS datasets (`services`, `works`, `blogs`, `blogCategories`, `members`), per-page metadata map, shared `Navbar`, `GridOverlay`, `Footer` components, and `/sitemap.xml`.

- [ ] **Step 1: Write failing test `scripts/verify-cms-data.mjs`**

```javascript
// scripts/verify-cms-data.mjs
import fs from 'node:fs';
import assert from 'node:assert';

for (const f of ['src/data/services.ts', 'src/data/works.ts', 'src/data/blogs.ts', 'src/data/members.ts', 'src/app/sitemap.ts']) {
  assert.ok(fs.existsSync(f), `Missing ${f}`);
}
const blogs = fs.readFileSync('src/data/blogs.ts', 'utf8');
assert.ok(blogs.includes('web-design'), 'blogs.ts must use fixed slug web-design');
assert.ok(!blogs.includes('web-dessign'), 'blogs.ts must not contain typo web-dessign');
assert.ok(!blogs.includes('blog-categoties'), 'blogs.ts must not contain typo blog-categoties');
console.log('CMS data verification passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-cms-data.mjs`
Expected: FAIL with `Missing src/data/services.ts`

- [ ] **Step 3: Initialize Next.js project, extract CMS data into `src/data/*.ts`, and create `Navbar`, `GridOverlay`, `Footer`, `layout.tsx`, and `sitemap.ts`**

- [ ] **Step 4: Run verification script**

Run: `node scripts/verify-cms-data.mjs`
Expected: PASS

- [ ] **Step 5: Commit Next.js scaffold, CMS data, and layout components**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts .env.example .gitignore src/
git commit -m "feat(core): scaffold Next.js app, extract typed CMS data, and build shared layout"
```

---

### Task 4: Build Modular Section Components & All 40 Page Routes + Formspree Integration

**Files:**
- Create: `src/components/sections/home/*`
- Create: `src/components/sections/about/*`
- Create: `src/components/sections/services/*`
- Create: `src/components/sections/work/*`
- Create: `src/components/sections/blog/*`
- Create: `src/components/sections/pricing/*`
- Create: `src/components/sections/contact/*`
- Create: `src/components/sections/member/*`
- Create: `src/components/sections/legal/*`
- Create: `src/app/page.tsx`, `src/app/about-us/page.tsx`, `src/app/services/page.tsx`, `src/app/services/[slug]/page.tsx`, `src/app/work/page.tsx`, `src/app/works/[slug]/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/blog-categories/[category]/page.tsx`, `src/app/pricing/page.tsx`, `src/app/contact/page.tsx`, `src/app/member/[slug]/page.tsx`, `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`, `src/app/not-found.tsx`
- Test: `scripts/verify-routes-and-sections.mjs`

**Interfaces:**
- Consumes: `src/data/*`, `src/components/layout/*`
- Produces: All 40 Next.js routes composed of standalone swappable section components, with Formspree form submission on `/contact`.

- [ ] **Step 1: Write failing test `scripts/verify-routes-and-sections.mjs`**

```javascript
// scripts/verify-routes-and-sections.mjs
import fs from 'node:fs';
import assert from 'node:assert';

const requiredRoutes = [
  'src/app/page.tsx',
  'src/app/about-us/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/[slug]/page.tsx',
  'src/app/work/page.tsx',
  'src/app/works/[slug]/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/app/blog-categories/[category]/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/member/[slug]/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-of-service/page.tsx',
  'src/app/not-found.tsx',
];
for (const r of requiredRoutes) {
  assert.ok(fs.existsSync(r), `Missing route file ${r}`);
}
assert.ok(!fs.existsSync('src/app/401'), '/401 must not exist');
assert.ok(!fs.existsSync('src/app/utility-pages'), '/utility-pages must not exist');
assert.ok(!fs.existsSync('src/app/blog-categoties'), '/blog-categoties typo route must not exist');
console.log('Routes and sections verification passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-routes-and-sections.mjs`
Expected: FAIL

- [ ] **Step 3: Generate modular section components for each page and wire all 40 routes with per-page `metadata` / `generateMetadata` and Formspree contact form**

- [ ] **Step 4: Run verification script**

Run: `node scripts/verify-routes-and-sections.mjs`
Expected: PASS

- [ ] **Step 5: Commit all section components and routes**

```bash
git add src/components/sections/ src/app/ scripts/
git commit -m "feat(pages): build modular section components and all 40 Next.js routes"
```

---

### Task 5: Implement Exact GSAP Animation Engine Matching `interactions.md`

**Files:**
- Create: `src/lib/animations/gsap-engine.ts`
- Create: `src/components/animations/AnimationProvider.tsx`
- Modify: `src/app/layout.tsx`
- Test: `scripts/verify-zero-webflow-codebase.mjs`

**Interfaces:**
- Consumes: Exact parameters documented in `interactions.md`
- Produces: Client-side GSAP + ScrollTrigger + SplitText animation engine reproducing every scroll reveal, split-text stagger, line expansion, navbar background scroll, button hover, FAQ accordion, and marquee/slider interaction.

- [ ] **Step 1: Write failing test `scripts/verify-zero-webflow-codebase.mjs`**

```javascript
// scripts/verify-zero-webflow-codebase.mjs
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

assert.ok(fs.existsSync('src/lib/animations/gsap-engine.ts'), 'gsap-engine.ts must exist');

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full));
    else if (/\.(ts|tsx|css|json)$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of walk('src')) {
  const text = fs.readFileSync(file, 'utf8');
  assert.ok(!text.includes('website-files.com'), `Found website-files.com in ${file}`);
  assert.ok(!text.includes('data-wf-'), `Found data-wf- in ${file}`);
  assert.ok(!text.includes('data-w-id'), `Found data-w-id in ${file}`);
  assert.ok(!text.toLowerCase().includes('webflow'), `Found webflow in ${file}`);
}
console.log('Zero-Webflow codebase verification passed.');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-zero-webflow-codebase.mjs`
Expected: FAIL with `gsap-engine.ts must exist`

- [ ] **Step 3: Implement `src/lib/animations/gsap-engine.ts` and `src/components/animations/AnimationProvider.tsx`, then run `npm run build` to verify static + dynamic route compilation**

- [ ] **Step 4: Run verification and Next.js build**

Run: `node scripts/verify-zero-webflow-codebase.mjs && npm run build`
Expected: PASS and clean Next.js build of all 40 pages.

- [ ] **Step 5: Commit GSAP engine**

```bash
git add src/ scripts/
git commit -m "feat(animations): implement exact GSAP animation engine matching interactions.md"
```

---

### Task 6: 4-Breakpoint Side-by-Side Screenshot Verification (1440, 991, 767, 390) & Diff Fixes

**Files:**
- Create: `scripts/visual-verify.mjs`
-Test: `verification/report.json`

**Interfaces:**
- Consumes: Running local server (`http://localhost:3000`) and live site (`https://conax.webflow.io`)
- Produces: Side-by-side screenshots and diff analysis for all 40 pages across `1440`, `991`, `767`, and `390` widths, plus fixes for any layout/style discrepancies.

- [ ] **Step 1: Write `scripts/visual-verify.mjs` using Playwright to capture all 40 pages at `1440`, `991`, `767`, and `390` widths (live vs local) and generate side-by-side comparison images and diff metrics**

- [ ] **Step 2: Run visual verification across all 40 pages x 4 breakpoints (160 viewport captures)**

Run: `node scripts/visual-verify.mjs`
Expected: Side-by-side comparison report generated in `verification/report.json`.

- [ ] **Step 3: Inspect any reported diffs, fix CSS/layout/animation initial state discrepancies, and re-run verification until all 40 pages match across all 4 breakpoints**

- [ ] **Step 4: Commit visual verification scripts and final fixes**

```bash
git add src/ scripts/
git commit -m "test(visual): verify all 40 pages at 1440, 991, 767, and 390 against live site"
```
