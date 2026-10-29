import fs from 'node:fs';
import path from 'node:path';

const staticPages = JSON.parse(
  fs.readFileSync(path.resolve('.cache/snapshot/static-pages-parsed.json'), 'utf8')
);

// Define named swappable section components for every static page
const STATIC_SECTION_SPECS = {
  '/': {
    dir: 'home',
    routeFile: 'src/app/page.tsx',
    includeTransitionOverlay: true,
    names: [
      'HomeHeroSection',
      'HomeAboutIntroSection',
      'HomeOurApproachSection',
      'HomeWhyChooseUsSection',
      'HomeIndicatorSection',
      'HomeServicesSection',
      'HomeShowreelVideoSection',
      'HomeShowreelCaptionSection',
      'HomeFeaturedProjectsSection',
      'HomePartnerLogosSection',
      'HomeAchievementsSection',
      'HomeTestimonialsSection',
      'HomeTeamSection',
      'HomePricingSection',
      'HomeNewsletterSection',
      'HomeBlogSection',
      'HomeFaqSection',
    ],
  },
  '/about-us': {
    dir: 'about',
    routeFile: 'src/app/about-us/page.tsx',
    names: [
      'AboutHeroSection',
      'AboutPhilosophySection',
      'AboutFeaturesSection',
      'AboutWhyChooseUsSection',
      'AboutAchievementsSection',
      'AboutStudioGallerySection',
      'AboutTeamSection',
      'AboutNewsletterSection',
    ],
  },
  '/services': {
    dir: 'services',
    routeFile: 'src/app/services/page.tsx',
    names: [
      'ServicesHeroSection',
      'ServicesIntroSection',
      'ServicesListSection',
    ],
  },
  '/work': {
    dir: 'work',
    routeFile: 'src/app/work/page.tsx',
    names: [
      'WorkHeroSection',
      'WorkPortfolioGridSection',
    ],
  },
  '/blog': {
    dir: 'blog',
    routeFile: 'src/app/blog/page.tsx',
    names: [
      'BlogHeroSection',
      'BlogFilterAndGridSection',
      'BlogNewsletterSection',
    ],
  },
  '/pricing': {
    dir: 'pricing',
    routeFile: 'src/app/pricing/page.tsx',
    names: [
      'PricingHeroSection',
      'PricingPlansSection',
      'PricingCompareTableSection',
      'PricingFaqSection',
    ],
  },
  '/contact': {
    dir: 'contact',
    routeFile: 'src/app/contact/page.tsx',
    names: [
      'ContactHeroSection',
      'ContactFormAndInfoSection',
      'ContactNewsletterSection',
      'ContactFaqSection',
    ],
  },
  '/privacy-policy': {
    dir: 'legal',
    routeFile: 'src/app/privacy-policy/page.tsx',
    names: [
      'PrivacyPolicyHeroSection',
      'PrivacyPolicyContentSection',
    ],
  },
  '/terms-of-service': {
    dir: 'legal',
    routeFile: 'src/app/terms-of-service/page.tsx',
    names: [
      'TermsOfServiceHeroSection',
      'TermsOfServiceContentSection',
    ],
  },
  '/404': {
    dir: 'legal',
    routeFile: 'src/app/not-found.tsx',
    omitFooter: true,
    names: [
      'NotFoundGridOverlaySection',
      'NotFoundContentSection',
    ],
  },
};

function parseRootElement(rawHtml) {
  const m = rawHtml.match(/^<([a-zA-Z0-9-]+)([^>]*)>([\s\S]*)<\/\1>$/i);
  if (!m) {
    return { tag: 'div', attrs: {}, innerHtml: rawHtml };
  }
  const tag = m[1].toLowerCase();
  const attrStr = m[2];
  const innerHtml = m[3];
  const attrs = {};
  for (const am of attrStr.matchAll(/([a-zA-Z0-9_-]+)="([^"]*)"/g)) {
    const k = am[1];
    const v = am[2];
    if (k === 'class') attrs.className = v;
    else if (k === 'style' && v === 'opacity:0') attrs.style = { opacity: 0 };
    else attrs[k] = v;
  }
  return { tag, attrs, innerHtml };
}

function writeStaticSectionComponent(dirName, compName, sectionData) {
  const outDir = path.resolve('src/components/sections', dirName);
  fs.mkdirSync(outDir, { recursive: true });
  const parsed = parseRootElement(sectionData.html);
  const Tag = parsed.tag;
  const propsJson = JSON.stringify(parsed.attrs);
  const innerJson = JSON.stringify(parsed.innerHtml);

  const code = `import React from 'react';

const SECTION_PROPS: Record<string, any> = ${propsJson};
const SECTION_HTML = ${innerJson};

export function ${compName}() {
  return (
    <${Tag}
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
`;
  fs.writeFileSync(path.join(outDir, `${compName}.tsx`), code, 'utf8');
}

for (const [route, spec] of Object.entries(STATIC_SECTION_SPECS)) {
  const pageData = staticPages[route];
  if (!pageData) {
    throw new Error(`Missing static page data for ${route}`);
  }
  if (pageData.sections.length !== spec.names.length) {
    throw new Error(
      `Section count mismatch for ${route}: expected ${spec.names.length}, got ${pageData.sections.length}`
    );
  }

  spec.names.forEach((compName, idx) => {
    writeStaticSectionComponent(spec.dir, compName, pageData.sections[idx]);
  });

  // Write the route page.tsx
  const routeFile = path.resolve(spec.routeFile);
  fs.mkdirSync(path.dirname(routeFile), { recursive: true });

  const imports = spec.names
    .map((name) => `import { ${name} } from '@/components/sections/${spec.dir}/${name}';`)
    .join('\n');

  const renderedSections = spec.names.map((name) => `      <${name} />`).join('\n');
  const transitionImport = spec.includeTransitionOverlay
    ? `import { AnnouncementBar, Navbar, PageTransitionOverlay } from '@/components/layout/Navbar';`
    : `import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';`;
  const transitionElement = spec.includeTransitionOverlay ? `      <PageTransitionOverlay />\n` : '';
  const footerImport = spec.omitFooter ? '' : `import { Footer } from '@/components/layout/Footer';\n`;
  const footerElement = spec.omitFooter ? '' : `\n      <Footer />`;

  const routeCode = `import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
${transitionImport}
${footerImport}${imports}

export const metadata: Metadata = buildPageMetadata('${route}');

export default function Page() {
  return (
    <div className="${pageData.wrapperClassName || 'page-wrapper'}">
${transitionElement}      <AnnouncementBar />
      <Navbar variant="${pageData.navbarVariant}" />
${renderedSections}${footerElement}
    </div>
  );
}
`;
  fs.writeFileSync(routeFile, routeCode, 'utf8');
}

// Now generate modular section components for the 5 dynamic CMS route templates:
// 1. Services Detail (/services/[slug]) -> 3 sections: ServiceDetailHeroSection, ServiceDetailProcessSection, ServiceDetailFaqSection
// 2. Works Detail (/works/[slug]) -> 6 sections: WorkDetailHeroSection, WorkDetailOverviewSection, WorkDetailChallengeSection, WorkDetailGallerySection, WorkDetailRelatedSection, WorkDetailFaqSection
// 3. Blog Post Detail (/blog/[slug]) -> 3 sections: BlogPostHeroSection, BlogPostContentSection, BlogPostRelatedSection
// 4. Blog Category (/blog-categories/[category]) -> 3 sections: BlogCategoryHeroSection, BlogCategoryGridSection, BlogCategoryNewsletterSection
// 5. Member Detail (/member/[slug]) -> 1 section: MemberProfileSection

function writeDynamicSectionComponents(dirName, itemTypeImport, itemTypeName, sectionNames) {
  const outDir = path.resolve('src/components/sections', dirName);
  fs.mkdirSync(outDir, { recursive: true });

  sectionNames.forEach((compName, idx) => {
    const code = `import React from 'react';
import type { ${itemTypeName} } from '${itemTypeImport}';

interface Props {
  item: ${itemTypeName};
}

export function ${compName}({ item }: Props) {
  const sec = item.sections[${idx}];
  if (!sec) return null;
  return (
    <div
      style={{ display: 'contents' }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sec.html }}
    />
  );
}
`;
    fs.writeFileSync(path.join(outDir, `${compName}.tsx`), code, 'utf8');
  });
}

writeDynamicSectionComponents('services', '@/data/services', 'ServiceItem', [
  'ServiceDetailHeroSection',
  'ServiceDetailProcessSection',
  'ServiceDetailFaqSection',
]);

writeDynamicSectionComponents('work', '@/data/works', 'WorkItem', [
  'WorkDetailHeroSection',
  'WorkDetailOverviewSection',
  'WorkDetailChallengeSection',
  'WorkDetailGallerySection',
  'WorkDetailRelatedSection',
  'WorkDetailFaqSection',
]);

writeDynamicSectionComponents('blog', '@/data/blogs', 'BlogPostItem', [
  'BlogPostHeroSection',
  'BlogPostContentSection',
  'BlogPostRelatedSection',
]);

writeDynamicSectionComponents('blog', '@/data/blogs', 'BlogCategoryItem', [
  'BlogCategoryHeroSection',
  'BlogCategoryGridSection',
  'BlogCategoryNewsletterSection',
]);

writeDynamicSectionComponents('member', '@/data/members', 'MemberItem', [
  'MemberProfileSection',
]);

// Write dynamic route files:
// 1. src/app/services/[slug]/page.tsx
fs.mkdirSync(path.resolve('src/app/services/[slug]'), { recursive: true });
fs.writeFileSync(
  path.resolve('src/app/services/[slug]/page.tsx'),
  `import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceDetailHeroSection } from '@/components/sections/services/ServiceDetailHeroSection';
import { ServiceDetailProcessSection } from '@/components/sections/services/ServiceDetailProcessSection';
import { ServiceDetailFaqSection } from '@/components/sections/services/ServiceDetailFaqSection';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(\`/services/\${slug}\`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <ServiceDetailHeroSection item={item} />
      <ServiceDetailProcessSection item={item} />
      <ServiceDetailFaqSection item={item} />
      <Footer />
    </div>
  );
}
`,
  'utf8'
);

// 2. src/app/works/[slug]/page.tsx
fs.mkdirSync(path.resolve('src/app/works/[slug]'), { recursive: true });
fs.writeFileSync(
  path.resolve('src/app/works/[slug]/page.tsx'),
  `import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WORKS, getWorkBySlug } from '@/data/works';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkDetailHeroSection } from '@/components/sections/work/WorkDetailHeroSection';
import { WorkDetailOverviewSection } from '@/components/sections/work/WorkDetailOverviewSection';
import { WorkDetailChallengeSection } from '@/components/sections/work/WorkDetailChallengeSection';
import { WorkDetailGallerySection } from '@/components/sections/work/WorkDetailGallerySection';
import { WorkDetailRelatedSection } from '@/components/sections/work/WorkDetailRelatedSection';
import { WorkDetailFaqSection } from '@/components/sections/work/WorkDetailFaqSection';

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(\`/works/\${slug}\`);
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <WorkDetailHeroSection item={item} />
      <WorkDetailOverviewSection item={item} />
      <WorkDetailChallengeSection item={item} />
      <WorkDetailGallerySection item={item} />
      <WorkDetailRelatedSection item={item} />
      <WorkDetailFaqSection item={item} />
      <Footer />
    </div>
  );
}
`,
  'utf8'
);

// 3. src/app/blog/[slug]/page.tsx
fs.mkdirSync(path.resolve('src/app/blog/[slug]'), { recursive: true });
fs.writeFileSync(
  path.resolve('src/app/blog/[slug]/page.tsx'),
  `import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blogs';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogPostHeroSection } from '@/components/sections/blog/BlogPostHeroSection';
import { BlogPostContentSection } from '@/components/sections/blog/BlogPostContentSection';
import { BlogPostRelatedSection } from '@/components/sections/blog/BlogPostRelatedSection';

export function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(\`/blog/\${slug}\`);
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBlogPostBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <BlogPostHeroSection item={item} />
      <BlogPostContentSection item={item} />
      <BlogPostRelatedSection item={item} />
      <Footer />
    </div>
  );
}
`,
  'utf8'
);

// 4. src/app/blog-categories/[category]/page.tsx
fs.mkdirSync(path.resolve('src/app/blog-categories/[category]'), { recursive: true });
fs.writeFileSync(
  path.resolve('src/app/blog-categories/[category]/page.tsx'),
  `import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, getBlogCategoryBySlug } from '@/data/blogs';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogCategoryHeroSection } from '@/components/sections/blog/BlogCategoryHeroSection';
import { BlogCategoryGridSection } from '@/components/sections/blog/BlogCategoryGridSection';
import { BlogCategoryNewsletterSection } from '@/components/sections/blog/BlogCategoryNewsletterSection';

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  return buildPageMetadata(\`/blog-categories/\${category}\`);
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const item = getBlogCategoryBySlug(category);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <BlogCategoryHeroSection item={item} />
      <BlogCategoryGridSection item={item} />
      <BlogCategoryNewsletterSection item={item} />
      <Footer />
    </div>
  );
}
`,
  'utf8'
);

// 5. src/app/member/[slug]/page.tsx
fs.mkdirSync(path.resolve('src/app/member/[slug]'), { recursive: true });
fs.writeFileSync(
  path.resolve('src/app/member/[slug]/page.tsx'),
  `import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MEMBERS, getMemberBySlug } from '@/data/members';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MemberProfileSection } from '@/components/sections/member/MemberProfileSection';

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(\`/member/\${slug}\`);
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getMemberBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <MemberProfileSection item={item} />
      <Footer />
    </div>
  );
}
`,
  'utf8'
);

console.log('Generated all modular section components and 40 routes successfully.');
