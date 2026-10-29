import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { ROUTES } from './fetch-snapshot.mjs';

const LIVE_BASE = 'https://conax.webflow.io';
const LOCAL_BASE = process.env.LOCAL_BASE_URL || 'http://localhost:3000';
const BREAKPOINTS = [1440, 991, 767, 390];
const OUT_DIR = path.resolve('verification');

fs.mkdirSync(OUT_DIR, { recursive: true });

// Normalize animation/marquee state and hide the Webflow badge on the live site before screenshot
// so that layout, typography, colors, spacing, and images are compared deterministically.
async function stabilizePage(page) {
  await page.evaluate(async () => {
    // Wait for fonts
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // Force eager loading on all lazy images and wait for them to decode
    const imgs = Array.from(document.querySelectorAll('img'));
    for (const img of imgs) {
      img.loading = 'eager';
      if (!img.complete) {
        await new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
          setTimeout(resolve, 1500);
        });
      }
    }

    // Remove the fixed Webflow badge on the live site if present, and settle all scroll reveals / marquees
    const style = document.createElement('style');
    style.textContent = `
      .w-webflow-badge { display: none !important; }
      .page-transition-overlay, .overlay-column { display: none !important; opacity: 0 !important; }
      * {
        animation-play-state: paused !important;
        transition: none !important;
      }
      .image-gallery-marqee-track, .marquee-track {
        transform: translate3d(0px, 0px, 0px) !important;
      }
      [style*="opacity: 0"], [style*="opacity:0"] {
        opacity: 1 !important;
        transform: none !important;
      }
      .image-item-blog.ghost {
        height: 100% !important;
        width: 100% !important;
        transform: none !important;
      }
      .image-work-collection-item.absolute {
        height: auto !important;
        width: 100% !important;
        transform: none !important;
      }
      .blog-list-wrap .text-body-5,
      .blog-list-wrap .author-blog,
      .work-collection-item-wrap .text-body-4.semibold,
      .gsap_split_line,
      .gsap_split_word,
      .gsap_split_char {
        opacity: 1 !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(250);
}

function createSideBySideAndDiff(liveBuf, localBuf) {
  const livePng = PNG.sync.read(liveBuf);
  const localPng = PNG.sync.read(localBuf);

  const w = Math.max(livePng.width, localPng.width);
  const h = Math.max(livePng.height, localPng.height);

  const padPng = (src) => {
    if (src.width === w && src.height === h) return src;
    const dst = new PNG({ width: w, height: h });
    PNG.bitblt(src, dst, 0, 0, src.width, src.height, 0, 0);
    return dst;
  };

  const pLive = padPng(livePng);
  const pLocal = padPng(localPng);
  const diffPng = new PNG({ width: w, height: h });

  const diffPixels = pixelmatch(pLive.data, pLocal.data, diffPng.data, w, h, {
    threshold: 0.15,
  });

  // Create side-by-side image: [Live | Local | Diff]
  const sbs = new PNG({ width: w * 3, height: h });
  PNG.bitblt(pLive, sbs, 0, 0, w, h, 0, 0);
  PNG.bitblt(pLocal, sbs, 0, 0, w, h, w, 0);
  PNG.bitblt(diffPng, sbs, 0, 0, w, h, w * 2, 0);

  const totalPixels = w * h;
  const diffRatio = totalPixels > 0 ? diffPixels / totalPixels : 0;

  return {
    sbsBuffer: PNG.sync.write(sbs),
    diffPixels,
    totalPixels,
    diffPercent: Number((diffRatio * 100).toFixed(2)),
    liveHeight: livePng.height,
    localHeight: localPng.height,
  };
}

async function runVerification() {
  const filterRoute = process.env.VERIFY_ROUTE;
  const filterSet = filterRoute ? new Set(filterRoute.split(',').map((s) => s.trim())) : null;
  const targetRoutes = filterSet
    ? ROUTES.filter((r) => filterSet.has(r.route))
    : ROUTES;

  console.log(`Starting 4-breakpoint visual verification for ${targetRoutes.length} pages...`);
  const browser = await chromium.launch({ headless: true });

  const report = [];
  const concurrency = 4;
  let routeIdx = 0;

  async function worker() {
    const context = await browser.newContext({ deviceScaleFactor: 1 });
    const livePage = await context.newPage();
    const localPage = await context.newPage();

    while (routeIdx < targetRoutes.length) {
      const item = targetRoutes[routeIdx++];
      const slugSafe = item.file.replace('.html', '');
      const pageDir = path.join(OUT_DIR, slugSafe);
      fs.mkdirSync(pageDir, { recursive: true });

      const pageResults = { route: item.route, breakpoints: {} };

      for (const width of BREAKPOINTS) {
        await livePage.setViewportSize({ width, height: 900 });
        await localPage.setViewportSize({ width, height: 900 });

        await Promise.all([
          livePage.goto(`${LIVE_BASE}${item.livePath}`, { waitUntil: 'load', timeout: 60000 }),
          localPage.goto(`${LOCAL_BASE}${item.route}`, { waitUntil: 'load', timeout: 60000 }),
        ]);

        // Re-trigger resize on local page so breakpoint-conditional interactions evaluate at the new viewport width
        await localPage.evaluate(() => {
          window.dispatchEvent(new Event('resize'));
        });

        await Promise.all([stabilizePage(livePage), stabilizePage(localPage)]);

        const [liveBuf, localBuf] = await Promise.all([
          livePage.screenshot({ fullPage: true }),
          localPage.screenshot({ fullPage: true }),
        ]);

        fs.writeFileSync(path.join(pageDir, `live-${width}.png`), liveBuf);
        fs.writeFileSync(path.join(pageDir, `local-${width}.png`), localBuf);

        const cmp = createSideBySideAndDiff(liveBuf, localBuf);
        fs.writeFileSync(path.join(pageDir, `sbs-${width}.png`), cmp.sbsBuffer);

        pageResults.breakpoints[width] = {
          diffPercent: cmp.diffPercent,
          liveHeight: cmp.liveHeight,
          localHeight: cmp.localHeight,
          heightDelta: cmp.localHeight - cmp.liveHeight,
        };
      }

      report.push(pageResults);
      console.log(
        `  Verified ${item.route}: ` +
          BREAKPOINTS.map(
            (w) => `${w}px=${pageResults.breakpoints[w].diffPercent}% (Δh=${pageResults.breakpoints[w].heightDelta}px)`
          ).join(', ')
      );
    }

    await context.close();
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  await browser.close();

  const reportPath = path.join(OUT_DIR, 'report.json');
  let finalReport = report;
  if (filterRoute && fs.existsSync(reportPath)) {
    const existing = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const map = new Map(existing.map((r) => [r.route, r]));
    for (const r of report) map.set(r.route, r);
    finalReport = Array.from(map.values());
  }
  fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2), 'utf8');
  console.log('Visual verification complete. Report saved to verification/report.json');
}

runVerification().catch((err) => {
  console.error(err);
  process.exit(1);
});
