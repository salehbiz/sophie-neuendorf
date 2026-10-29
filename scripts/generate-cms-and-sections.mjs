import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROUTES } from './fetch-snapshot.mjs';

const PAGES_DIR = path.resolve('.cache/snapshot/pages');
const assetMap = JSON.parse(fs.readFileSync(path.resolve('public/assets/asset-map.json'), 'utf8'));

// Build deterministic neutral data-anim-id map from original data-w-id
const animIdMap = new Map();
function getAnimId(wid) {
  if (!animIdMap.has(wid)) {
    const short = crypto.createHash('md5').update(wid).digest('hex').slice(0, 8);
    animIdMap.set(wid, `anim-${short}`);
  }
  return animIdMap.get(wid);
}

// Clean HTML string:
// 1. Replace all remote asset URLs with local /assets/... paths
// 2. Fix route typos (/blog-categoties -> /blog-categories, web-dessign -> web-design)
// 3. Replace data-w-id="..." with data-anim-id="anim-..."
// 4. Strip all data-wf-* attributes and data-turnstile-sitekey
// 5. Rename w-* classes and w-node-* IDs to ui-*
export function cleanHtmlFragment(rawHtml) {
  let html = rawHtml;

  // Replace HTML-escaped &amp; inside URLs first so assetMap matches
  for (const [remoteUrl, localUrl] of Object.entries(assetMap)) {
    html = html.split(remoteUrl).join(localUrl);
    const escapedRemote = remoteUrl.replace(/&/g, '&amp;');
    if (escapedRemote !== remoteUrl) {
      html = html.split(escapedRemote).join(localUrl);
    }
  }

  // Fix template route typos
  html = html.replace(/\/blog-categoties\/web-dessign/g, '/blog-categories/web-design');
  html = html.replace(/\/blog-categoties\//g, '/blog-categories/');
  html = html.replace(/\/utility-pages\/[a-z0-9-]+/g, '/');

  // Map data-w-id to data-anim-id
  html = html.replace(/\sdata-w-id="([^"]+)"/g, (_, wid) => ` data-anim-id="${getAnimId(wid)}"`);

  // Strip data-wf-* and data-turnstile-sitekey and HTML comments
  html = html.replace(/\sdata-wf-[a-z0-9-]+="[^"]*"/gi, '');
  html = html.replace(/\sdata-turnstile-sitekey="[^"]*"/gi, '');
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // Rename w-node-* IDs
  html = html.replace(/id="w-node-([^"]+)"/g, 'id="ui-node-$1"');

  // Rename w-* classes inside class="..."
  html = html.replace(/class="([^"]+)"/g, (_, clsStr) => {
    const updated = clsStr
      .split(/\s+/)
      .map((c) => {
        if (c === 'w-layout-blockcontainer') return 'ui-blockcontainer';
        if (c === 'w-layout-grid') return 'ui-grid';
        if (c.startsWith('w--')) return 'ui--' + c.slice(3);
        if (c.startsWith('w-')) return 'ui-' + c.slice(2);
        return c;
      })
      .join(' ');
    return `class="${updated}"`;
  });

  return html.trim();
}

const VOID_TAGS = new Set([
  'img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base',
  'col', 'embed', 'param', 'source', 'track', 'wbr',
]);

export function splitDirectChildren(htmlStr) {
  let pos = 0;
  const n = htmlStr.length;
  const children = [];

  while (pos < n) {
    while (pos < n && /\s/.test(htmlStr[pos])) pos++;
    if (pos >= n) break;
    if (htmlStr[pos] !== '<') {
      const next = htmlStr.indexOf('<', pos);
      if (next === -1) break;
      pos = next;
    }
    const openMatch = htmlStr.slice(pos).match(/^<([a-zA-Z0-9-]+)([^>]*?)(\/?)>/);
    if (!openMatch) break;
    const tag = openMatch[1].toLowerCase();
    const attrs = openMatch[2];
    const selfClose = Boolean(openMatch[3]) || VOID_TAGS.has(tag);
    const start = pos;
    pos += openMatch[0].length;
    if (selfClose) {
      children.push({ tag, attrs, html: htmlStr.slice(start, pos) });
      continue;
    }
    let depth = 1;
    const tagRe = new RegExp(`<(/?)(${tag})\\b([^>]*?)(/?)>`, 'gi');
    tagRe.lastIndex = pos;
    while (depth > 0 && pos < n) {
      const tm = tagRe.exec(htmlStr);
      if (!tm) {
        pos = n;
        break;
      }
      const isClose = Boolean(tm[1]);
      const isSelf = Boolean(tm[4]) || VOID_TAGS.has(tag);
      pos = tagRe.lastIndex;
      if (isClose) depth--;
      else if (!isSelf) depth++;
    }
    children.push({ tag, attrs, html: htmlStr.slice(start, pos) });
  }
  return children;
}

export function extractPageSections(fileName) {
  const raw = fs.readFileSync(path.join(PAGES_DIR, fileName), 'utf8');
  const titleMatch = raw.match(/<title>(.*?)<\/title>/s);
  const descMatch = raw.match(/<meta\s+content="([^"]*)"\s+name="description"/i) ||
                    raw.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const ogImgMatch = raw.match(/<meta\s+content="([^"]*)"\s+property="og:image"/i);

  const cleanTitle = (titleMatch ? titleMatch[1] : 'Conax')
    .replace(/\s*-\s*Webflow HTML Website Template/gi, '')
    .replace(/Webflow HTML Website Template/gi, 'Creative Design & Digital Agency')
    .replace(/Webflow/gi, 'Digital')
    .trim();

  const cleanDesc = (descMatch ? descMatch[1] : '')
    .replace(/Webflow HTML template/gi, 'digital agency studio')
    .replace(/Webflow/gi, 'modern')
    .trim();

  const rawOg = ogImgMatch ? ogImgMatch[1] : '';
  const localOg = assetMap[rawOg] || '/assets/images/og-image-58fc08.png';

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyNoScripts = bodyMatch[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').trim();
  const topChildren = splitDirectChildren(bodyNoScripts);
  let innerChildren = topChildren;
  if (topChildren.length === 1 && topChildren[0].attrs.includes('page-wrapper')) {
    const innerHtml = topChildren[0].html
      .replace(/^<div[^>]*>/i, '')
      .replace(/<\/div>$/i, '')
      .trim();
    innerChildren = splitDirectChildren(innerHtml);
  }

  let navbarVariant = 'black';
  const sections = [];

  for (const child of innerChildren) {
    const cls = (child.attrs.match(/class="([^"]+)"/) || [null, ''])[1];
    if (cls.includes('page-transition-overlay')) continue;
    if (cls.includes('annoucement-bar')) continue;
    if (cls.includes('navbar')) {
      navbarVariant = cls.includes('white') ? 'white' : 'black';
      continue;
    }
    if (cls.includes('footer')) continue;
    sections.push({
      tag: child.tag,
      className: cls,
      html: cleanHtmlFragment(child.html),
    });
  }

  return {
    title: cleanTitle,
    description: cleanDesc,
    ogImage: localOg,
    navbarVariant,
    sections,
  };
}

// Extract shared layout fragments (AnnouncementBar, Navbar white/black, Footer)
const homeRaw = fs.readFileSync(path.join(PAGES_DIR, 'index.html'), 'utf8');
const aboutRaw = fs.readFileSync(path.join(PAGES_DIR, 'about-us.html'), 'utf8');

function extractSharedFragments() {
  const homeBody = homeRaw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').trim();
  const homeInner = splitDirectChildren(
    splitDirectChildren(homeBody)[0].html.replace(/^<div[^>]*>/i, '').replace(/<\/div>$/i, '').trim()
  );
  const aboutBody = aboutRaw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').trim();
  const aboutInner = splitDirectChildren(
    splitDirectChildren(aboutBody)[0].html.replace(/^<div[^>]*>/i, '').replace(/<\/div>$/i, '').trim()
  );

  const pageTransitionOverlay = cleanHtmlFragment(homeInner.find(c => c.attrs.includes('page-transition-overlay')).html);
  const announcementBar = cleanHtmlFragment(homeInner.find(c => c.attrs.includes('annoucement-bar')).html);
  const navbarWhite = cleanHtmlFragment(homeInner.find(c => c.attrs.includes('navbar')).html);
  const navbarBlack = cleanHtmlFragment(aboutInner.find(c => c.attrs.includes('navbar')).html);
  const footer = cleanHtmlFragment(homeInner.find(c => c.attrs.includes('footer')).html);

  return { pageTransitionOverlay, announcementBar, navbarWhite, navbarBlack, footer };
}

function main() {
  fs.mkdirSync(path.resolve('src/data'), { recursive: true });

  const servicesList = [];
  const worksList = [];
  const blogsList = [];
  const blogCategoriesList = [];
  const membersList = [];
  const staticPages = {};
  const metadataMap = {};

  for (const r of ROUTES) {
    const parsed = extractPageSections(r.file);
    metadataMap[r.route] = {
      title: parsed.title,
      description: parsed.description,
      ogImage: parsed.ogImage,
      navbarVariant: parsed.navbarVariant,
    };

    if (r.route.startsWith('/services/')) {
      const slug = r.route.slice('/services/'.length);
      servicesList.push({ slug, route: r.route, ...parsed });
    } else if (r.route.startsWith('/works/')) {
      const slug = r.route.slice('/works/'.length);
      worksList.push({ slug, route: r.route, ...parsed });
    } else if (r.route.startsWith('/blog/')) {
      const slug = r.route.slice('/blog/'.length);
      blogsList.push({ slug, route: r.route, ...parsed });
    } else if (r.route.startsWith('/blog-categories/')) {
      const category = r.route.slice('/blog-categories/'.length);
      blogCategoriesList.push({ category, route: r.route, ...parsed });
    } else if (r.route.startsWith('/member/')) {
      const slug = r.route.slice('/member/'.length);
      membersList.push({ slug, route: r.route, ...parsed });
    } else {
      staticPages[r.route] = parsed;
    }
  }

  const shared = extractSharedFragments();

  fs.writeFileSync(
    path.resolve('src/data/services.ts'),
    `export interface ServiceItem {\n  slug: string;\n  route: string;\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n  sections: { tag: string; className: string; html: string }[];\n}\n\nexport const SERVICES: ServiceItem[] = ${JSON.stringify(servicesList, null, 2)};\n\nexport function getServiceBySlug(slug: string): ServiceItem | undefined {\n  return SERVICES.find((s) => s.slug === slug);\n}\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.resolve('src/data/works.ts'),
    `export interface WorkItem {\n  slug: string;\n  route: string;\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n  sections: { tag: string; className: string; html: string }[];\n}\n\nexport const WORKS: WorkItem[] = ${JSON.stringify(worksList, null, 2)};\n\nexport function getWorkBySlug(slug: string): WorkItem | undefined {\n  return WORKS.find((w) => w.slug === slug);\n}\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.resolve('src/data/blogs.ts'),
    `export interface BlogPostItem {\n  slug: string;\n  route: string;\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n  sections: { tag: string; className: string; html: string }[];\n}\n\nexport interface BlogCategoryItem {\n  category: string;\n  route: string;\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n  sections: { tag: string; className: string; html: string }[];\n}\n\nexport const BLOG_POSTS: BlogPostItem[] = ${JSON.stringify(blogsList, null, 2)};\n\nexport const BLOG_CATEGORIES: BlogCategoryItem[] = ${JSON.stringify(blogCategoriesList, null, 2)};\n\nexport function getBlogPostBySlug(slug: string): BlogPostItem | undefined {\n  return BLOG_POSTS.find((b) => b.slug === slug);\n}\n\nexport function getBlogCategoryBySlug(category: string): BlogCategoryItem | undefined {\n  return BLOG_CATEGORIES.find((c) => c.category === category);\n}\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.resolve('src/data/members.ts'),
    `export interface MemberItem {\n  slug: string;\n  route: string;\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n  sections: { tag: string; className: string; html: string }[];\n}\n\nexport const MEMBERS: MemberItem[] = ${JSON.stringify(membersList, null, 2)};\n\nexport function getMemberBySlug(slug: string): MemberItem | undefined {\n  return MEMBERS.find((m) => m.slug === slug);\n}\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.resolve('src/data/metadata.ts'),
    `import type { Metadata } from 'next';\n\nexport interface PageMetaEntry {\n  title: string;\n  description: string;\n  ogImage: string;\n  navbarVariant: 'white' | 'black';\n}\n\nexport const PAGE_METADATA: Record<string, PageMetaEntry> = ${JSON.stringify(metadataMap, null, 2)};\n\nexport function buildPageMetadata(route: string): Metadata {\n  const entry = PAGE_METADATA[route] || PAGE_METADATA['/'];\n  return {\n    title: entry.title,\n    description: entry.description,\n    openGraph: {\n      title: entry.title,\n      description: entry.description,\n      images: [entry.ogImage],\n      type: 'website',\n    },\n    twitter: {\n      card: 'summary_large_image',\n      title: entry.title,\n      description: entry.description,\n      images: [entry.ogImage],\n    },\n  };\n}\n`,
    'utf8'
  );

  fs.writeFileSync(
    path.resolve('src/data/layout-fragments.ts'),
    `export const SHARED_LAYOUT_FRAGMENTS = ${JSON.stringify(shared, null, 2)};\n`,
    'utf8'
  );

  // Also save animIdMap so our GSAP engine can resolve original data-w-id -> data-anim-id
  fs.writeFileSync(
    path.resolve('src/data/anim-id-map.ts'),
    `export const ANIM_ID_MAP: Record<string, string> = ${JSON.stringify(Object.fromEntries(animIdMap.entries()), null, 2)};\n`,
    'utf8'
  );

  // Save static pages sections JSON for section component generation
  fs.writeFileSync(
    path.resolve('.cache/snapshot/static-pages-parsed.json'),
    JSON.stringify(staticPages, null, 2),
    'utf8'
  );

  console.log('Generated src/data/{services,works,blogs,members,metadata,layout-fragments,anim-id-map}.ts');
}

main();
