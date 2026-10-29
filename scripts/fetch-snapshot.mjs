import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://conax.webflow.io';
const SNAPSHOT_DIR = path.resolve('.cache/snapshot');
const PAGES_DIR = path.join(SNAPSHOT_DIR, 'pages');
const JS_DIR = path.join(SNAPSHOT_DIR, 'js');
const CSS_DIR = path.join(SNAPSHOT_DIR, 'css');

fs.mkdirSync(PAGES_DIR, { recursive: true });
fs.mkdirSync(JS_DIR, { recursive: true });
fs.mkdirSync(CSS_DIR, { recursive: true });

// All 40 canonical pages mapped to their live URLs (including the live typo routes that map to our clean routes)
export const ROUTES = [
  { route: '/', livePath: '/', file: 'index.html' },
  { route: '/404', livePath: '/404', file: '404.html' },
  { route: '/about-us', livePath: '/about-us', file: 'about-us.html' },
  { route: '/services', livePath: '/services', file: 'services.html' },
  { route: '/services/ui-ux-design', livePath: '/services/ui-ux-design', file: 'services__ui-ux-design.html' },
  { route: '/services/brand-identity', livePath: '/services/brand-identity', file: 'services__brand-identity.html' },
  { route: '/services/web-development', livePath: '/services/web-development', file: 'services__web-development.html' },
  { route: '/services/digital-strategy', livePath: '/services/digital-strategy', file: 'services__digital-strategy.html' },
  { route: '/work', livePath: '/work', file: 'work.html' },
  { route: '/works/zenith-brand-refresh', livePath: '/works/zenith-brand-refresh', file: 'works__zenith-brand-refresh.html' },
  { route: '/works/veloce-e-commerce', livePath: '/works/veloce-e-commerce', file: 'works__veloce-e-commerce.html' },
  { route: '/works/aura-fintech-app', livePath: '/works/aura-fintech-app', file: 'works__aura-fintech-app.html' },
  { route: '/works/stellar-saas-dashboard', livePath: '/works/stellar-saas-dashboard', file: 'works__stellar-saas-dashboard.html' },
  { route: '/works/luma-health', livePath: '/works/luma-health', file: 'works__luma-health.html' },
  { route: '/works/northland-studio-website', livePath: '/works/northland-studio-website', file: 'works__northland-studio-website.html' },
  { route: '/blog', livePath: '/blog', file: 'blog.html' },
  { route: '/blog/how-ai-is-redefining-the-next-generation-of-user-interfaces', livePath: '/blog/how-ai-is-redefining-the-next-generation-of-user-interfaces', file: 'blog__how-ai-is-redefining-the-next-generation-of-user-interfaces.html' },
  { route: '/blog/how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions', livePath: '/blog/how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions', file: 'blog__how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions.html' },
  { route: '/blog/implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention', livePath: '/blog/implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention', file: 'blog__implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention.html' },
  { route: '/blog/motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability', livePath: '/blog/motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability', file: 'blog__motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability.html' },
  { route: '/blog/why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography', livePath: '/blog/why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography', file: 'blog__why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography.html' },
  { route: '/blog/why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech', livePath: '/blog/why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech', file: 'blog__why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech.html' },
  { route: '/blog-categories/support', livePath: '/blog-categoties/support', file: 'blog-categories__support.html' },
  { route: '/blog-categories/development', livePath: '/blog-categoties/development', file: 'blog-categories__development.html' },
  { route: '/blog-categories/web-design', livePath: '/blog-categoties/web-dessign', file: 'blog-categories__web-design.html' },
  { route: '/pricing', livePath: '/pricing', file: 'pricing.html' },
  { route: '/contact', livePath: '/contact', file: 'contact.html' },
  { route: '/privacy-policy', livePath: '/privacy-policy', file: 'privacy-policy.html' },
  { route: '/terms-of-service', livePath: '/terms-of-service', file: 'terms-of-service.html' },
  { route: '/member/alex-reed', livePath: '/member/alex-reed', file: 'member__alex-reed.html' },
  { route: '/member/aris-thorne', livePath: '/member/aris-thorne', file: 'member__aris-thorne.html' },
  { route: '/member/chloe-whitmore', livePath: '/member/chloe-whitmore', file: 'member__chloe-whitmore.html' },
  { route: '/member/david-jones', livePath: '/member/david-jones', file: 'member__david-jones.html' },
  { route: '/member/elena-moretti', livePath: '/member/elena-moretti', file: 'member__elena-moretti.html' },
  { route: '/member/julian-frost', livePath: '/member/julian-frost', file: 'member__julian-frost.html' },
  { route: '/member/lily-vance', livePath: '/member/lily-vance', file: 'member__lily-vance.html' },
  { route: '/member/marcus-thorne', livePath: '/member/marcus-thorne', file: 'member__marcus-thorne.html' },
  { route: '/member/sarah-jenkins', livePath: '/member/sarah-jenkins', file: 'member__sarah-jenkins.html' },
  { route: '/member/sophia-chen', livePath: '/member/sophia-chen', file: 'member__sophia-chen.html' },
  { route: '/member/viktor-petrov', livePath: '/member/viktor-petrov', file: 'member__viktor-petrov.html' },
];

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  return await res.text();
}

async function main() {
  const jsUrls = new Set();
  const cssUrls = new Set();

  console.log(`Downloading ${ROUTES.length} pages...`);
  for (const item of ROUTES) {
    const outPath = path.join(PAGES_DIR, item.file);
    let html;
    if (fs.existsSync(outPath)) {
      html = fs.readFileSync(outPath, 'utf8');
    } else {
      html = await fetchText(BASE_URL + item.livePath);
      fs.writeFileSync(outPath, html, 'utf8');
      console.log(`  Saved ${item.route} -> ${item.file}`);
    }

    for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
      if (m[1].includes('website-files.com') && m[1].endsWith('.js')) {
        jsUrls.add(m[1]);
      }
    }
    for (const m of html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)) {
      cssUrls.add(m[1]);
    }
  }

  for (const cssUrl of cssUrls) {
    const name = path.basename(new URL(cssUrl).pathname);
    const out = path.join(CSS_DIR, name);
    if (!fs.existsSync(out)) {
      const css = await fetchText(cssUrl);
      fs.writeFileSync(out, css, 'utf8');
      console.log(`  Saved CSS: ${name}`);
    }
  }

  for (const jsUrl of jsUrls) {
    const name = path.basename(new URL(jsUrl).pathname);
    const out = path.join(JS_DIR, name);
    if (!fs.existsSync(out)) {
      const js = await fetchText(jsUrl);
      fs.writeFileSync(out, js, 'utf8');
      console.log(`  Saved JS: ${name}`);
    }
  }

  console.log(`Snapshot complete: ${ROUTES.length} pages, ${cssUrls.size} CSS, ${jsUrls.size} JS bundles.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
