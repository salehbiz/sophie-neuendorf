import fs from 'node:fs';
import path from 'node:path';

const CLEANED_PAGES_PATH = path.resolve('.cache/snapshot/cleaned-pages.json');
const cleanedPages = JSON.parse(fs.readFileSync(CLEANED_PAGES_PATH, 'utf8'));

function unwrapOuterElement(outerHTML) {
  const openEnd = outerHTML.indexOf('>');
  const openTag = outerHTML.slice(0, openEnd + 1);
  const tagMatch = openTag.match(/^<([a-zA-Z0-9-]+)/);
  const tag = tagMatch ? tagMatch[1] : 'div';
  const classMatch = openTag.match(/class="([^"]+)"/);
  const className = classMatch ? classMatch[1] : '';
  const closeIdx = outerHTML.lastIndexOf(`</${tag}>`);
  const innerHTML = closeIdx !== -1 ? outerHTML.slice(openEnd + 1, closeIdx) : outerHTML;
  return { tag, className, innerHTML };
}

function writeComponent(relPath, code) {
  const fullPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, code, 'utf8');
}

function createStaticSectionComponent(componentName, elementObj) {
  const { tag, className, innerHTML } = unwrapOuterElement(elementObj.outerHTML);
  return `const SECTION_INNER_HTML = ${JSON.stringify(innerHTML)};

export function ${componentName}() {
  return (
    <${tag}
      className=${JSON.stringify(className)}
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
`;
}

// 1. Shared Layout Components: Navbar.tsx and Footer.tsx
writeComponent(
  'src/components/layout/Navbar.tsx',
  `'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NAVBAR_DEFAULT_HTML, NAVBAR_V2_HTML } from '@/data/layout-fragments';

export interface NavbarProps {
  variant?: 'default' | 'v2';
}

function unwrapNavbarInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</div>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

function applyActiveLinksToHtml(innerHtml: string, pathname: string): string {
  return innerHtml.replace(/<a\\s+([^>]*?)href="([^"]+)"([^>]*?)>/gi, (full, before, href, after) => {
    const isCurrent = href === pathname;
    if (!isCurrent) return full;
    const combined = before + 'href="' + href + '"' + after;
    const withAria = combined.includes('aria-current=')
      ? combined
      : combined.replace('href="' + href + '"', 'href="' + href + '" aria-current="page"');
    const withClass = withAria.replace(/class="([^"]+)"/, (_, cls) => {
      const tokens = cls.split(/\\s+/).filter(Boolean);
      if (!tokens.includes('ui--current')) tokens.push('ui--current');
      return 'class="' + tokens.join(' ') + '"';
    });
    return '<a ' + withClass + '>';
  });
}

export function Navbar({ variant = 'default' }: NavbarProps) {
  const pathname = usePathname() || '/';
  const navRef = useRef<HTMLDivElement>(null);

  const rawOuter = variant === 'v2' ? NAVBAR_V2_HTML : NAVBAR_DEFAULT_HTML;
  const innerHtml = useMemo(
    () => applyActiveLinksToHtml(unwrapNavbarInner(rawOuter), pathname),
    [rawOuter, pathname]
  );

  useEffect(() => {
    const root = navRef.current;
    if (!root) return;
    const links = root.querySelectorAll<HTMLAnchorElement>('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === pathname) {
        link.classList.add('ui--current');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('ui--current');
        link.removeAttribute('aria-current');
      }
    });
  }, [pathname]);

  return (
    <div
      ref={navRef}
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={variant === 'v2' ? 'navbar v2 ui-nav' : 'navbar ui-nav'}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
`
);

writeComponent(
  'src/components/layout/Footer.tsx',
  `'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FOOTER_HTML } from '@/data/layout-fragments';

function unwrapFooterInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

function applyActiveLinksToHtml(innerHtml: string, pathname: string): string {
  return innerHtml.replace(/<a\\s+([^>]*?)href="([^"]+)"([^>]*?)>/gi, (full, before, href, after) => {
    const isCurrent = href === pathname;
    if (!isCurrent) return full;
    const combined = before + 'href="' + href + '"' + after;
    const withAria = combined.includes('aria-current=')
      ? combined
      : combined.replace('href="' + href + '"', 'href="' + href + '" aria-current="page"');
    const withClass = withAria.replace(/class="([^"]+)"/, (_, cls) => {
      const tokens = cls.split(/\\s+/).filter(Boolean);
      if (!tokens.includes('ui--current')) tokens.push('ui--current');
      return 'class="' + tokens.join(' ') + '"';
    });
    return '<a ' + withClass + '>';
  });
}

export function Footer() {
  const pathname = usePathname() || '/';
  const footerRef = useRef<HTMLElement>(null);

  const innerHtml = useMemo(
    () => applyActiveLinksToHtml(unwrapFooterInner(FOOTER_HTML), pathname),
    [pathname]
  );

  useEffect(() => {
    const root = footerRef.current;
    if (!root) return;
    const links = root.querySelectorAll<HTMLAnchorElement>('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === pathname) {
        link.classList.add('ui--current');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('ui--current');
        link.removeAttribute('aria-current');
      }
    });
  }, [pathname]);

  return (
    <section
      ref={footerRef}
      className="footer"
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
`
);

// 2. Home Section Components
const homeEls = cleanedPages['index'];
const homeMap = [
  ['HomeHeroSection', el => el.openTag.includes('section hero')],
  ['HomeAboutUsSection', el => el.openTag.includes('section about-us')],
  ['HomeWorkSection', el => el.openTag.includes('section work"')],
  ['HomeServiceSection', el => el.openTag.includes('service-section')],
  ['HomeChooseSection', el => el.openTag.includes('section choose')],
  ['HomeFaqSection', el => el.openTag.includes('section faq')],
  ['HomeTestimonialSection', el => el.openTag.includes('section testimonial')],
  ['HomeTickerSection', el => el.openTag.includes('text-ticker-wrap')],
];
for (const [compName, pred] of homeMap) {
  const matchEl = homeEls.find(pred);
  writeComponent(
    `src/components/sections/home/${compName}.tsx`,
    createStaticSectionComponent(compName, matchEl)
  );
}

// 3. About Section Components
const aboutEls = cleanedPages['about'];
const aboutMap = [
  ['AboutHeroSection', el => el.openTag.includes('section about"')],
  ['AboutStorySection', el => el.openTag.includes('section story')],
  ['AboutPassionSection', el => el.openTag.includes('section passion')],
  ['AboutTestimonialSection', el => el.openTag.includes('section testimonial')],
  ['AboutTickerSection', el => el.openTag.includes('text-ticker-wrap')],
];
for (const [compName, pred] of aboutMap) {
  const matchEl = aboutEls.find(pred);
  writeComponent(
    `src/components/sections/about/${compName}.tsx`,
    createStaticSectionComponent(compName, matchEl)
  );
}

// 4. Works Section Components
const worksHeroEl = cleanedPages['works'].find(el => el.openTag.includes('section work-hero'));
writeComponent(
  'src/components/sections/works/WorksHeroSection.tsx',
  createStaticSectionComponent('WorksHeroSection', worksHeroEl)
);

writeComponent(
  'src/components/sections/works/WorksGridSection.tsx',
  `'use client';

import { useEffect, useState } from 'react';
import { WORKS_LIST_PAGE_1_HTML, WORKS_LIST_PAGE_2_HTML } from '@/data/works';

export interface WorksGridSectionProps {
  initialPage?: number;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorksGridSection({ initialPage = 1 }: WorksGridSectionProps) {
  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    const syncFromUrl = () => {
      const sp = new URLSearchParams(window.location.search);
      const raw = sp.get('054d80ea_page') || sp.get('page');
      setPage(raw === '2' ? 2 : 1);
    };
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const rawHtml = page === 2 ? WORKS_LIST_PAGE_2_HTML : WORKS_LIST_PAGE_1_HTML;

  return (
    <section
      className="section all-project"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(rawHtml) }}
    />
  );
}
`
);

writeComponent(
  'src/components/sections/works/WorkDetailHeroSection.tsx',
  `export interface WorkDetailHeroSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorkDetailHeroSection({ html }: WorkDetailHeroSectionProps) {
  return (
    <section
      className="section work-detail-hero"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
`
);

writeComponent(
  'src/components/sections/works/WorkDetailContentSection.tsx',
  `export interface WorkDetailContentSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorkDetailContentSection({ html }: WorkDetailContentSectionProps) {
  return (
    <section
      className="section project-detail"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
`
);

// 5. Blogs Section Components
const blogsHeroEl = cleanedPages['blogs'].find(el => el.openTag.includes('section blog-hero'));
const blogsGridEl = cleanedPages['blogs'].find(el => el.openTag.includes('section all-blog'));
writeComponent(
  'src/components/sections/blogs/BlogsHeroSection.tsx',
  createStaticSectionComponent('BlogsHeroSection', blogsHeroEl)
);
writeComponent(
  'src/components/sections/blogs/BlogsGridSection.tsx',
  createStaticSectionComponent('BlogsGridSection', blogsGridEl)
);

writeComponent(
  'src/components/sections/blogs/BlogDetailHeroSection.tsx',
  `export interface BlogDetailHeroSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function BlogDetailHeroSection({ html }: BlogDetailHeroSectionProps) {
  return (
    <section
      className="section blog-detail-hero"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
`
);

writeComponent(
  'src/components/sections/blogs/BlogDetailContentSection.tsx',
  `export interface BlogDetailContentSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function BlogDetailContentSection({ html }: BlogDetailContentSectionProps) {
  return (
    <section
      className="section blog-detail"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
`
);

// 6. Contact Section Components
const contactFormEl = cleanedPages['contact'].find(el => el.openTag.includes('section contact'));
const contactTickerEl = cleanedPages['contact'].find(el => el.openTag.includes('text-ticker-wrap'));
const { innerHTML: contactInnerHtml } = unwrapOuterElement(contactFormEl.outerHTML);

writeComponent(
  'src/components/sections/contact/ContactFormSection.tsx',
  `'use client';

import { useEffect, useRef } from 'react';

const CONTACT_SECTION_INNER_HTML = ${JSON.stringify(contactInnerHtml)};

export function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const form = root.querySelector<HTMLFormElement>('form');
    const doneEl = root.querySelector<HTMLElement>('.ui-form-done');
    const failEl = root.querySelector<HTMLElement>('.ui-form-fail');
    const submitBtn = form?.querySelector<HTMLInputElement>('input[type="submit"]');
    if (!form) return;

    const originalSubmitValue = submitBtn?.value || 'Send Message';

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.value = submitBtn.getAttribute('data-wait') || 'Please wait...';
      }
      if (failEl) failEl.style.display = 'none';

      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';
      const formData = new FormData(form);

      try {
        if (endpoint.includes('/placeholder')) {
          form.style.display = 'none';
          if (doneEl) doneEl.style.display = 'block';
          return;
        }
        const res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.style.display = 'none';
          if (doneEl) doneEl.style.display = 'block';
        } else {
          if (failEl) failEl.style.display = 'block';
          if (submitBtn) submitBtn.value = originalSubmitValue;
        }
      } catch {
        if (failEl) failEl.style.display = 'block';
        if (submitBtn) submitBtn.value = originalSubmitValue;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section contact"
      dangerouslySetInnerHTML={{ __html: CONTACT_SECTION_INNER_HTML }}
    />
  );
}
`
);

writeComponent(
  'src/components/sections/contact/ContactTickerSection.tsx',
  createStaticSectionComponent('ContactTickerSection', contactTickerEl)
);

// 7. Utility Section Components
const notFoundEl = cleanedPages['404'].find(el => el.openTag.includes('utility-page-wrap'));
writeComponent(
  'src/components/sections/utility/NotFoundSection.tsx',
  createStaticSectionComponent('NotFoundSection', notFoundEl)
);

const utilityPages = [
  ['style-guide', 'StyleGuideHeroSection', 'StyleGuideContentSection'],
  ['changelog', 'ChangelogHeroSection', 'ChangelogContentSection'],
  ['licenses', 'LicensesHeroSection', 'LicensesContentSection'],
  ['instructions', 'InstructionsHeroSection', 'InstructionsContentSection'],
];

for (const [pageKey, heroComp, contentComp] of utilityPages) {
  const els = cleanedPages[pageKey];
  const heroEl = els.find(el => el.openTag.includes('section utility'));
  const contentEl = els.find(el => el.openTag.includes('section style'));
  writeComponent(
    `src/components/sections/utility/${heroComp}.tsx`,
    createStaticSectionComponent(heroComp, heroEl)
  );
  writeComponent(
    `src/components/sections/utility/${contentComp}.tsx`,
    createStaticSectionComponent(contentComp, contentEl)
  );
}

// 8. Root Layout & Sitemap & Route Pages under src/app/
writeComponent(
  'src/app/layout.tsx',
  `import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AnimationProvider } from '@/components/animations/AnimationProvider';
import { PAGE_METADATA } from '@/data/metadata';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const rootMeta = PAGE_METADATA['/'];

export const metadata: Metadata = {
  title: rootMeta.title,
  description: rootMeta.description,
  openGraph: {
    title: rootMeta.title,
    description: rootMeta.description,
    images: [rootMeta.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: rootMeta.title,
    description: rootMeta.description,
    images: [rootMeta.ogImage],
  },
  icons: {
    icon: [
      {
        url: '/assets/images/group-184-850a7e.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/images/group-183-1158ad.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/assets/images/group-184-290738.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/images/group-184-638cea.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/images/group-184-55eca1.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/assets/images/group-184-78c01c.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="ui-mod-js ui-mod-ix3"
      style={{ ['--body-font' as string]: \`\${inter.style.fontFamily}, Inter, sans-serif\` }}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
`
);

writeComponent(
  'src/app/sitemap.ts',
  `import type { MetadataRoute } from 'next';
import { PAGE_METADATA } from '@/data/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://voyra.studio';
  return Object.keys(PAGE_METADATA)
    .filter(route => route !== '/404')
    .map(route => ({
      url: \`\${baseUrl}\${route === '/' ? '' : route}\`,
      lastModified: new Date('2026-10-26T00:00:00.000Z'),
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1.0 : 0.8,
    }));
}
`
);

writeComponent(
  'src/app/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { HomeAboutUsSection } from '@/components/sections/home/HomeAboutUsSection';
import { HomeWorkSection } from '@/components/sections/home/HomeWorkSection';
import { HomeServiceSection } from '@/components/sections/home/HomeServiceSection';
import { HomeChooseSection } from '@/components/sections/home/HomeChooseSection';
import { HomeFaqSection } from '@/components/sections/home/HomeFaqSection';
import { HomeTestimonialSection } from '@/components/sections/home/HomeTestimonialSection';
import { HomeTickerSection } from '@/components/sections/home/HomeTickerSection';

const meta = PAGE_METADATA['/'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function HomePage() {
  return (
    <div className="main">
      <Navbar variant="default" />
      <HomeHeroSection />
      <HomeAboutUsSection />
      <HomeWorkSection />
      <HomeServiceSection />
      <HomeChooseSection />
      <HomeFaqSection />
      <HomeTestimonialSection />
      <HomeTickerSection />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/about/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection';
import { AboutStorySection } from '@/components/sections/about/AboutStorySection';
import { AboutPassionSection } from '@/components/sections/about/AboutPassionSection';
import { AboutTestimonialSection } from '@/components/sections/about/AboutTestimonialSection';
import { AboutTickerSection } from '@/components/sections/about/AboutTickerSection';

const meta = PAGE_METADATA['/about'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutPassionSection />
      <AboutTestimonialSection />
      <AboutTickerSection />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/works/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorksHeroSection } from '@/components/sections/works/WorksHeroSection';
import { WorksGridSection } from '@/components/sections/works/WorksGridSection';

const meta = PAGE_METADATA['/works'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default async function WorksPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = searchParams ? await searchParams : {};
  const rawPage = sp['054d80ea_page'] || sp.page;
  const pageValue = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const initialPage = pageValue === '2' ? 2 : 1;

  return (
    <div className="main">
      <Navbar variant="v2" />
      <WorksHeroSection />
      <WorksGridSection initialPage={initialPage} />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/works/[slug]/page.tsx',
  `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WORKS, WORKS_BY_SLUG } from '@/data/works';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkDetailHeroSection } from '@/components/sections/works/WorkDetailHeroSection';
import { WorkDetailContentSection } from '@/components/sections/works/WorkDetailContentSection';

export function generateStaticParams() {
  return WORKS.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PAGE_METADATA[\`/works/\${slug}\`] || PAGE_METADATA['/works'];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = WORKS_BY_SLUG[slug];
  if (!item) notFound();

  return (
    <div className="main">
      <Navbar variant="default" />
      <WorkDetailHeroSection html={item.heroHtml} />
      <WorkDetailContentSection html={item.detailHtml} />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/blogs/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogsHeroSection } from '@/components/sections/blogs/BlogsHeroSection';
import { BlogsGridSection } from '@/components/sections/blogs/BlogsGridSection';

const meta = PAGE_METADATA['/blogs'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function BlogsPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <BlogsHeroSection />
      <BlogsGridSection />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/blogs/[slug]/page.tsx',
  `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOGS, BLOGS_BY_SLUG } from '@/data/blogs';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogDetailHeroSection } from '@/components/sections/blogs/BlogDetailHeroSection';
import { BlogDetailContentSection } from '@/components/sections/blogs/BlogDetailContentSection';

export function generateStaticParams() {
  return BLOGS.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PAGE_METADATA[\`/blogs/\${slug}\`] || PAGE_METADATA['/blogs'];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = BLOGS_BY_SLUG[slug];
  if (!item) notFound();

  return (
    <div className="main">
      <Navbar variant="default" />
      <BlogDetailHeroSection html={item.heroHtml} />
      <BlogDetailContentSection html={item.detailHtml} />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/contact/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { ContactTickerSection } from '@/components/sections/contact/ContactTickerSection';

const meta = PAGE_METADATA['/contact'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function ContactPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <ContactFormSection />
      <ContactTickerSection />
      <Footer />
    </div>
  );
}
`
);

writeComponent(
  'src/app/not-found.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NotFoundSection } from '@/components/sections/utility/NotFoundSection';

const meta = PAGE_METADATA['/404'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function NotFound() {
  return (
    <>
      <Navbar variant="v2" />
      <NotFoundSection />
      <Footer />
    </>
  );
}
`
);

writeComponent(
  'src/app/404/page.tsx',
  `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NotFoundSection } from '@/components/sections/utility/NotFoundSection';

const meta = PAGE_METADATA['/404'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function Custom404Page() {
  return (
    <>
      <Navbar variant="v2" />
      <NotFoundSection />
      <Footer />
    </>
  );
}
`
);

const utilityRoutes = [
  ['style-guide', 'StyleGuidePage', 'StyleGuideHeroSection', 'StyleGuideContentSection'],
  ['changelog', 'ChangelogPage', 'ChangelogHeroSection', 'ChangelogContentSection'],
  ['licenses', 'LicensesPage', 'LicensesHeroSection', 'LicensesContentSection'],
  ['instructions', 'InstructionsPage', 'InstructionsHeroSection', 'InstructionsContentSection'],
];

for (const [slug, pageCompName, heroComp, contentComp] of utilityRoutes) {
  writeComponent(
    `src/app/${slug}/page.tsx`,
    `import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ${heroComp} } from '@/components/sections/utility/${heroComp}';
import { ${contentComp} } from '@/components/sections/utility/${contentComp}';

const meta = PAGE_METADATA['/${slug}'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function ${pageCompName}() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <${heroComp} />
      <${contentComp} />
      <Footer />
    </div>
  );
}
`
  );
}

console.log('Generated all layout components, 31 modular section components, and 15 Next.js App Router files.');
