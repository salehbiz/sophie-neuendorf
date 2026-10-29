import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const PAGES_DIR = path.resolve('.cache/snapshot/pages');
const PUBLIC_ASSETS_DIR = path.resolve('public/assets');
const IMAGES_DIR = path.join(PUBLIC_ASSETS_DIR, 'images');
const ICONS_DIR = path.join(PUBLIC_ASSETS_DIR, 'icons');

fs.mkdirSync(IMAGES_DIR, { recursive: true });
fs.mkdirSync(ICONS_DIR, { recursive: true });

// Extract all cdn.prod.website-files.com URLs from all 40 pages
const urls = new Set();

for (const file of fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
  for (const m of html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<>]+/g)) {
    const u = m[0].replace(/&amp;/g, '&').replace(/,+$/, '');
    if (u.endsWith('.css') || u.endsWith('.js')) continue;
    urls.add(u);
  }
}

console.log(`Found ${urls.size} unique media asset URLs across all 40 pages.`);

function toCleanLocalPath(remoteUrl) {
  const u = new URL(remoteUrl);
  const rawBase = decodeURIComponent(path.basename(u.pathname));
  const ext = path.extname(rawBase).toLowerCase() || '.webp';
  // Strip the 24-hex ID prefix if present: e.g. 6a34a6d8629fe0b582276168__arrow-top-right.svg
  const withoutId = rawBase.replace(/^[0-9a-f]{24}_+/i, '');
  const stem = path.basename(withoutId, path.extname(withoutId))
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'asset';
  const shortHash = crypto.createHash('md5').update(remoteUrl).digest('hex').slice(0, 6);
  const subDir = ext === '.svg' ? 'icons' : 'images';
  const fileName = `${stem}-${shortHash}${ext}`;
  return {
    localUrl: `/assets/${subDir}/${fileName}`,
    diskPath: path.join(PUBLIC_ASSETS_DIR, subDir, fileName),
  };
}

async function downloadAll() {
  const assetMap = {};
  const list = Array.from(urls).sort();
  let downloaded = 0;

  // Download with concurrency of 8
  const concurrency = 8;
  let idx = 0;

  async function worker() {
    while (idx < list.length) {
      const currentIdx = idx++;
      const remoteUrl = list[currentIdx];
      const { localUrl, diskPath } = toCleanLocalPath(remoteUrl);
      assetMap[remoteUrl] = localUrl;

      if (!fs.existsSync(diskPath)) {
        const res = await fetch(remoteUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) {
          throw new Error(`Failed to download ${remoteUrl}: ${res.status}`);
        }
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(diskPath, buf);
        downloaded++;
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  fs.writeFileSync(
    path.join(PUBLIC_ASSETS_DIR, 'asset-map.json'),
    JSON.stringify(assetMap, null, 2),
    'utf8'
  );
  console.log(`Assets ready: ${list.length} total mapped (${downloaded} newly downloaded).`);
}

downloadAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
