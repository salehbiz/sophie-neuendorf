import fs from 'node:fs';
import path from 'node:path';

const PAGES_DIR = path.resolve('.cache/snapshot/pages');
const ASSET_MAP_PATH = path.resolve('public/assets/asset-map.json');
const DATA_DIR = path.resolve('src/data');

fs.mkdirSync(DATA_DIR, { recursive: true });

const assetMap = JSON.parse(fs.readFileSync(ASSET_MAP_PATH, 'utf8'));
// Sort asset URLs longest-first so longer query/filename URLs replace before substrings
const sortedAssets = Object.entries(assetMap).sort((a, b) => b[0].length - a[0].length);

// Build a deterministic map of data-w-id -> anim-N across all snapshot pages
const wIdToAnimId = new Map();
let animCounter = 1;

function registerWIds(html) {
  for (const m of html.matchAll(/data-w-id="([^"]+)"/g)) {
    const wid = m[1];
    if (!wIdToAnimId.has(wid)) {
      wIdToAnimId.set(wid, `anim-${animCounter++}`);
    }
  }
}

const allHtmlFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html')).sort();
for (const f of allHtmlFiles) {
  registerWIds(fs.readFileSync(path.join(PAGES_DIR, f), 'utf8'));
}

export function cleanHtmlFragment(raw) {
  let out = raw;

  // 1. Replace all remote CDN URLs with local paths (both raw and HTML-entity escaped)
  for (const [remoteUrl, localPath] of sortedAssets) {
    out = out.split(remoteUrl).join(localPath);
    const escapedRemote = remoteUrl.replace(/&/g, '&amp;');
    if (escapedRemote !== remoteUrl) {
      out = out.split(escapedRemote).join(localPath);
    }
  }

  // 2. Replace any https://voyra.webflow.io internal links with relative paths
  out = out.replace(/https?:\/\/voyra\.webflow\.io(\/[^"'\s)]*)?/gi, (_, p1) => p1 || '/');

  // 3. Replace data-w-id="..." with data-anim-id="anim-N"
  out = out.replace(/data-w-id="([^"]+)"/g, (_, wid) => {
    if (!wIdToAnimId.has(wid)) {
      wIdToAnimId.set(wid, `anim-${animCounter++}`);
    }
    return `data-anim-id="${wIdToAnimId.get(wid)}"`;
  });

  // 4. Strip all data-wf-* attributes and turnstile sitekey
  out = out.replace(/\s*data-wf-[a-zA-Z0-9_-]+="[^"]*"/g, '');
  out = out.replace(/\s*data-turnstile-sitekey="[^"]*"/g, '');

  // 5. Rename id="w-node-..." -> id="ui-node-..." and wf-form IDs/names
  out = out.replace(/id="w-node-([^"]+)"/g, 'id="ui-node-$1"');
  out = out.replace(/id="wf-form-([^"]+)"/g, 'id="form-$1"');
  out = out.replace(/name="wf-form-([^"]+)"/g, 'name="form-$1"');

  // 6. Rename w-layout-blockcontainer -> ui-blockcontainer, w-layout-grid -> ui-grid, w--* -> ui--*, w-* -> ui-* inside class="..."
  out = out.replace(/class="([^"]+)"/g, (_, cls) => {
    const updated = cls
      .split(/\s+/)
      .map(token => {
        if (token === 'w-layout-blockcontainer') return 'ui-blockcontainer';
        if (token === 'w-layout-grid') return 'ui-grid';
        if (token.startsWith('w--')) return 'ui--' + token.slice(3);
        if (token.startsWith('w-')) return 'ui-' + token.slice(2);
        return token;
      })
      .join(' ');
    return `class="${updated}"`;
  });

  // 7. Strip HTML comments
  out = out.replace(/<!--[\s\S]*?-->/g, '');

  // 8. Replace any remaining case-insensitive "webflow" references in body markup with "Voyra" / "voyra"
  out = out.replace(/webflow/gi, match => (match[0] === 'W' ? 'Voyra' : 'voyra'));

  return out.trim();
}

function findTagEnd(html, start) {
  let inQuote = null;
  for (let i = start + 1; i < html.length; i++) {
    const ch = html[i];
    if (inQuote) {
      if (ch === inQuote) inQuote = null;
    } else {
      if (ch === '"' || ch === "'") inQuote = ch;
      else if (ch === '>') return i;
    }
  }
  return -1;
}

export function parseDirectChildren(html) {
  const children = [];
  const voidTags = new Set([
    'img', 'br', 'hr', 'input', 'meta', 'link', 'source',
    'track', 'wbr', 'area', 'base', 'col', 'embed', 'param',
  ]);
  let i = 0;
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt === -1) break;
    if (html.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt + 4);
      i = end === -1 ? html.length : end + 3;
      continue;
    }
    const gt = findTagEnd(html, lt);
    if (gt === -1) break;
    const openTag = html.slice(lt, gt + 1);
    const m = openTag.match(/^<([a-zA-Z0-9-]+)(?:\s|>|\/)/);
    if (!m) {
      i = gt + 1;
      continue;
    }
    const tag = m[1].toLowerCase();
    if (voidTags.has(tag) || openTag.endsWith('/>')) {
      children.push({ tag, openTag, outerHTML: openTag, innerHTML: '' });
      i = gt + 1;
      continue;
    }
    let depth = 1;
    let pos = gt + 1;
    while (pos < html.length && depth > 0) {
      const nextLt = html.indexOf('<', pos);
      if (nextLt === -1) break;
      if (html.startsWith('<!--', nextLt)) {
        const end = html.indexOf('-->', nextLt + 4);
        pos = end === -1 ? html.length : end + 3;
        continue;
      }
      const nextGt = findTagEnd(html, nextLt);
      if (nextGt === -1) break;
      const tok = html.slice(nextLt, nextGt + 1);
      const tm = tok.match(/^<(\/?)([a-zA-Z0-9-]+)(?:\s|>|\/)/);
      if (tm && tm[2].toLowerCase() === tag) {
        if (tm[1] === '/') {
          depth--;
          if (depth === 0) {
            children.push({
              tag,
              openTag,
              outerHTML: html.slice(lt, nextGt + 1),
              innerHTML: html.slice(gt + 1, nextLt),
            });
            i = nextGt + 1;
            break;
          }
        } else if (!tok.endsWith('/>') && !voidTags.has(tag)) {
          depth++;
        }
      }
      pos = nextGt + 1;
    }
    if (depth > 0) break;
  }
  return children;
}

function getPageElements(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return [];
  const body = bodyMatch[1];
  const topChildren = parseDirectChildren(body).filter(c => c.tag !== 'script');
  if (topChildren.length === 1 && topChildren[0].openTag.includes('class="main"')) {
    return parseDirectChildren(topChildren[0].innerHTML);
  }
  return topChildren;
}

function cleanMetadataText(str) {
  if (!str) return '';
  return str
    .replace(/\s*[-–—|]?\s*Voyra\s+Webflow\s+HTML\s+website\s+template/gi, ' — Voyra Photography Studio')
    .replace(/\s*[-–—|]?\s*Webflow\s+HTML\s+website\s+template/gi, ' — Photography Studio')
    .replace(/Voyra\s+Webflow\s+template/gi, 'Voyra studio template')
    .replace(/Webflow\s+template/gi, 'studio template')
    .replace(/Webflow\s+website/gi, 'studio website')
    .replace(/Webflow/gi, 'Voyra')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .trim();
}

function extractPageMeta(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch =
    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i) ||
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const ogImgMatch =
    html.match(/<meta\s+content="([^"]*)"\s+property="og:image"/i) ||
    html.match(/<meta\s+property="og:image"\s+content="([^"]*)"/i);

  const rawTitle = titleMatch ? titleMatch[1].trim() : 'Voyra';
  const rawDesc = descMatch ? descMatch[1].trim() : '';
  const rawOgImg = ogImgMatch ? ogImgMatch[1].trim() : '';
  const localOgImg = assetMap[rawOgImg] || '/assets/images/317995e6281f706bfde0e5122c75b7de-frame-2147239763-3-1-969ca4.webp';

  return {
    title: cleanMetadataText(rawTitle),
    description: cleanMetadataText(rawDesc),
    ogImage: localOgImg,
  };
}

function stripActiveLinkState(html) {
  return html
    .replace(/\s+aria-current="page"/g, '')
    .replace(/class="([^"]+)"/g, (_, cls) => {
      const filtered = cls
        .split(/\s+/)
        .filter(c => c !== 'ui--current' && c !== 'w--current')
        .join(' ');
      return `class="${filtered}"`;
    });
}

// 1. Extract metadata and cleaned elements for all pages
const pageMetadata = {};
const cleanedPages = {};

for (const file of allHtmlFiles) {
  const key = file.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(PAGES_DIR, file), 'utf8');
  if (key !== 'works_page2') {
    const routePath =
      key === 'index'
        ? '/'
        : '/' + key.replace(/__/g, '/');
    pageMetadata[routePath] = extractPageMeta(html);
  }
  const elements = getPageElements(html).map(el => ({
    tag: el.tag,
    openTag: cleanHtmlFragment(el.openTag),
    outerHTML: cleanHtmlFragment(el.outerHTML),
  }));
  cleanedPages[key] = elements;
}

// 2. Write src/data/anim-id-map.ts
fs.writeFileSync(
  path.join(DATA_DIR, 'anim-id-map.ts'),
  `export const ANIM_ID_MAP: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(wIdToAnimId.entries()),
    null,
    2
  )};\n`,
  'utf8'
);

// 3. Write src/data/metadata.ts
fs.writeFileSync(
  path.join(DATA_DIR, 'metadata.ts'),
  `export interface RouteMetadata {\n  title: string;\n  description: string;\n  ogImage: string;\n}\n\nexport const PAGE_METADATA: Record<string, RouteMetadata> = ${JSON.stringify(
    pageMetadata,
    null,
    2
  )};\n`,
  'utf8'
);

// 4. Write src/data/layout-fragments.ts (Navbar default from index, Navbar v2 from about, Footer from index)
const navbarDefaultEl = cleanedPages['index'].find(el => el.openTag.includes('navbar'));
const navbarV2El = cleanedPages['about'].find(el => el.openTag.includes('navbar'));
const footerEl = cleanedPages['index'].find(el => el.openTag.includes('footer'));

const navbarDefaultHtml = stripActiveLinkState(navbarDefaultEl.outerHTML);
const navbarV2Html = stripActiveLinkState(navbarV2El.outerHTML);
const footerHtml = stripActiveLinkState(footerEl.outerHTML);

fs.writeFileSync(
  path.join(DATA_DIR, 'layout-fragments.ts'),
  `export const NAVBAR_DEFAULT_HTML = ${JSON.stringify(navbarDefaultHtml)};\n\nexport const NAVBAR_V2_HTML = ${JSON.stringify(navbarV2Html)};\n\nexport const FOOTER_HTML = ${JSON.stringify(footerHtml)};\n`,
  'utf8'
);

// 5. Write src/data/works.ts
const workFiles = allHtmlFiles.filter(f => f.startsWith('works__')).sort();
const worksData = workFiles.map(file => {
  const key = file.replace(/\.html$/, '');
  const slug = key.replace(/^works__/, '');
  const els = cleanedPages[key];
  const heroEl = els.find(el => el.openTag.includes('work-detail-hero'));
  const detailEl = els.find(el => el.openTag.includes('project-detail'));
  const h1Match = heroEl?.outerHTML.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = h1Match ? h1Match[1].trim() : slug;
  return {
    slug,
    title,
    heroHtml: heroEl ? heroEl.outerHTML : '',
    detailHtml: detailEl ? detailEl.outerHTML : '',
  };
});

const worksListPage1El = cleanedPages['works'].find(el => el.openTag.includes('all-project'));
const worksListPage2El = cleanedPages['works_page2'].find(el => el.openTag.includes('all-project'));

fs.writeFileSync(
  path.join(DATA_DIR, 'works.ts'),
  `export interface WorkItem {\n  slug: string;\n  title: string;\n  heroHtml: string;\n  detailHtml: string;\n}\n\nexport const WORKS: WorkItem[] = ${JSON.stringify(
    worksData,
    null,
    2
  )};\n\nexport const WORKS_BY_SLUG: Record<string, WorkItem> = Object.fromEntries(\n  WORKS.map(item => [item.slug, item])\n);\n\nexport const WORKS_LIST_PAGE_1_HTML = ${JSON.stringify(
    worksListPage1El ? worksListPage1El.outerHTML : ''
  )};\n\nexport const WORKS_LIST_PAGE_2_HTML = ${JSON.stringify(
    worksListPage2El ? worksListPage2El.outerHTML : ''
  )};\n`,
  'utf8'
);

// 6. Write src/data/blogs.ts
const blogFiles = allHtmlFiles.filter(f => f.startsWith('blogs__')).sort();
const blogsData = blogFiles.map(file => {
  const key = file.replace(/\.html$/, '');
  const slug = key.replace(/^blogs__/, '');
  const els = cleanedPages[key];
  const heroEl = els.find(el => el.openTag.includes('blog-detail-hero'));
  const detailEl = els.find(el => el.openTag.includes('class="section blog-detail"'));
  const h1Match = heroEl?.outerHTML.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = h1Match ? h1Match[1].trim() : slug;
  return {
    slug,
    title,
    heroHtml: heroEl ? heroEl.outerHTML : '',
    detailHtml: detailEl ? detailEl.outerHTML : '',
  };
});

fs.writeFileSync(
  path.join(DATA_DIR, 'blogs.ts'),
  `export interface BlogItem {\n  slug: string;\n  title: string;\n  heroHtml: string;\n  detailHtml: string;\n}\n\nexport const BLOGS: BlogItem[] = ${JSON.stringify(
    blogsData,
    null,
    2
  )};\n\nexport const BLOGS_BY_SLUG: Record<string, BlogItem> = Object.fromEntries(\n  BLOGS.map(item => [item.slug, item])\n);\n`,
  'utf8'
);

// 7. Save cleanedPages to .cache/snapshot/cleaned-pages.json for build-routes-and-sections.mjs
fs.writeFileSync(
  path.resolve('.cache/snapshot/cleaned-pages.json'),
  JSON.stringify(cleanedPages, null, 2),
  'utf8'
);

console.log(
  `Generated CMS data: ${worksData.length} works, ${blogsData.length} blogs, ${Object.keys(pageMetadata).length} route metadata entries.`
);
