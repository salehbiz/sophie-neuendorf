import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const BASE_URL = 'https://voyra.webflow.io';
const SNAPSHOT_DIR = path.resolve('.cache/snapshot');
const PAGES_DIR = path.join(SNAPSHOT_DIR, 'pages');
const JS_DIR = path.join(SNAPSHOT_DIR, 'js');
const CSS_DIR = path.join(SNAPSHOT_DIR, 'css');

fs.mkdirSync(PAGES_DIR, { recursive: true });
fs.mkdirSync(JS_DIR, { recursive: true });
fs.mkdirSync(CSS_DIR, { recursive: true });

export const ROUTES = [
  { route: '/', livePath: '/', file: 'index.html' },
  { route: '/404', livePath: '/404', file: '404.html' },
  { route: '/about', livePath: '/about', file: 'about.html' },
  { route: '/works', livePath: '/works', file: 'works.html' },
  { route: '/works/event-photography', livePath: '/works/event-photography', file: 'works__event-photography.html' },
  { route: '/works/food-photography', livePath: '/works/food-photography', file: 'works__food-photography.html' },
  { route: '/works/lifestyle-photography', livePath: '/works/lifestyle-photography', file: 'works__lifestyle-photography.html' },
  { route: '/works/portrait-photography', livePath: '/works/portrait-photography', file: 'works__portrait-photography.html' },
  { route: '/works/travel-photography', livePath: '/works/travel-photography', file: 'works__travel-photography.html' },
  { route: '/works/wedding-photography', livePath: '/works/wedding-photography', file: 'works__wedding-photography.html' },
  { route: '/works/creative-photography', livePath: '/works/creative-photography', file: 'works__creative-photography.html' },
  { route: '/works/editorial-photography', livePath: '/works/editorial-photography', file: 'works__editorial-photography.html' },
  { route: '/works/personal-stories', livePath: '/works/personal-stories', file: 'works__personal-stories.html' },
  { route: '/blogs', livePath: '/blogs', file: 'blogs.html' },
  { route: '/blogs/creating-mood-through-color-and-light', livePath: '/blogs/creating-mood-through-color-and-light', file: 'blogs__creating-mood-through-color-and-light.html' },
  { route: '/blogs/finding-emotion-in-everyday-frames', livePath: '/blogs/finding-emotion-in-everyday-frames', file: 'blogs__finding-emotion-in-everyday-frames.html' },
  { route: '/blogs/from-ordinary-scenes-to-visual-stories', livePath: '/blogs/from-ordinary-scenes-to-visual-stories', file: 'blogs__from-ordinary-scenes-to-visual-stories.html' },
  { route: '/blogs/how-light-can-transform-a-photograph', livePath: '/blogs/how-light-can-transform-a-photograph', file: 'blogs__how-light-can-transform-a-photograph.html' },
  { route: '/blogs/the-art-of-capturing-a-genuine-moment', livePath: '/blogs/the-art-of-capturing-a-genuine-moment', file: 'blogs__the-art-of-capturing-a-genuine-moment.html' },
  { route: '/blogs/the-story-behind-every-portrait', livePath: '/blogs/the-story-behind-every-portrait', file: 'blogs__the-story-behind-every-portrait.html' },
  { route: '/blogs/what-makes-a-photograph-feel-timeless', livePath: '/blogs/what-makes-a-photograph-feel-timeless', file: 'blogs__what-makes-a-photograph-feel-timeless.html' },
  { route: '/blogs/why-composition-matters-in-photography', livePath: '/blogs/why-composition-matters-in-photography', file: 'blogs__why-composition-matters-in-photography.html' },
  { route: '/contact', livePath: '/contact', file: 'contact.html' },
  { route: '/style-guide', livePath: '/style-guide', file: 'style-guide.html' },
  { route: '/changelog', livePath: '/changelog', file: 'changelog.html' },
  { route: '/licenses', livePath: '/licenses', file: 'licenses.html' },
  { route: '/instructions', livePath: '/instructions', file: 'instructions.html' },
];

async function fetchText(url, allow404 = false) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
  });
  if (!res.ok && !(allow404 && res.status === 404)) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return await res.text();
}

async function main() {
  const cssUrls = new Set();
  const jsUrls = new Set();

  await Promise.all(
    ROUTES.map(async (item) => {
      const outPath = path.join(PAGES_DIR, item.file);
      let html;
      if (fs.existsSync(outPath)) {
        html = fs.readFileSync(outPath, 'utf8');
      } else {
        const url = `${BASE_URL}${item.livePath}`;
        html = await fetchText(url, item.route === '/404');
        fs.writeFileSync(outPath, html, 'utf8');
        console.log(`  Saved page: ${item.route}`);
      }

      for (const m of html.matchAll(/href="(https:\/\/cdn\.prod\.website-files\.com\/[^"]+\.css)"/g)) {
        cssUrls.add(m[1]);
      }
      for (const m of html.matchAll(/src="(https:\/\/cdn\.prod\.website-files\.com\/[^"]+\.js)"/g)) {
        jsUrls.add(m[1]);
      }
    })
  );

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

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
