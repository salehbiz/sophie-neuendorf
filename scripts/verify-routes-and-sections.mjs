import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

const expectedSectionFiles = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/sections/home/HomeHeroSection.tsx',
  'src/components/sections/home/HomeAboutUsSection.tsx',
  'src/components/sections/home/HomeWorkSection.tsx',
  'src/components/sections/home/HomeServiceSection.tsx',
  'src/components/sections/home/HomeChooseSection.tsx',
  'src/components/sections/home/HomeFaqSection.tsx',
  'src/components/sections/home/HomeTestimonialSection.tsx',
  'src/components/sections/home/HomeTickerSection.tsx',
  'src/components/sections/about/AboutHeroSection.tsx',
  'src/components/sections/about/AboutStorySection.tsx',
  'src/components/sections/about/AboutPassionSection.tsx',
  'src/components/sections/about/AboutTestimonialSection.tsx',
  'src/components/sections/about/AboutTickerSection.tsx',
  'src/components/sections/works/WorksHeroSection.tsx',
  'src/components/sections/works/WorksGridSection.tsx',
  'src/components/sections/works/WorkDetailHeroSection.tsx',
  'src/components/sections/works/WorkDetailContentSection.tsx',
  'src/components/sections/blogs/BlogsHeroSection.tsx',
  'src/components/sections/blogs/BlogsGridSection.tsx',
  'src/components/sections/blogs/BlogDetailHeroSection.tsx',
  'src/components/sections/blogs/BlogDetailContentSection.tsx',
  'src/components/sections/contact/ContactFormSection.tsx',
  'src/components/sections/contact/ContactTickerSection.tsx',
  'src/components/sections/utility/NotFoundSection.tsx',
  'src/components/sections/utility/StyleGuideHeroSection.tsx',
  'src/components/sections/utility/StyleGuideContentSection.tsx',
  'src/components/sections/utility/ChangelogHeroSection.tsx',
  'src/components/sections/utility/ChangelogContentSection.tsx',
  'src/components/sections/utility/LicensesHeroSection.tsx',
  'src/components/sections/utility/LicensesContentSection.tsx',
  'src/components/sections/utility/InstructionsHeroSection.tsx',
  'src/components/sections/utility/InstructionsContentSection.tsx',
];

const expectedAppFiles = [
  'src/app/layout.tsx',
  'src/app/sitemap.ts',
  'src/app/page.tsx',
  'src/app/not-found.tsx',
  'src/app/404/page.tsx',
  'src/app/about/page.tsx',
  'src/app/works/page.tsx',
  'src/app/works/[slug]/page.tsx',
  'src/app/blogs/page.tsx',
  'src/app/blogs/[slug]/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/style-guide/page.tsx',
  'src/app/changelog/page.tsx',
  'src/app/licenses/page.tsx',
  'src/app/instructions/page.tsx',
];

for (const file of [...expectedSectionFiles, ...expectedAppFiles]) {
  assert.ok(fs.existsSync(path.resolve(file)), `Missing required file: ${file}`);
  const text = fs.readFileSync(path.resolve(file), 'utf8');
  assert.ok(!text.includes('website-files.com'), `Found website-files.com in ${file}`);
  assert.ok(!text.includes('data-wf-'), `Found data-wf- in ${file}`);
  assert.ok(!text.includes('data-w-id'), `Found data-w-id in ${file}`);
  assert.ok(!text.toLowerCase().includes('webflow'), `Found webflow in ${file}`);
}

console.log(
  `Verified ${expectedSectionFiles.length} layout/section components and ${expectedAppFiles.length} Next.js route files with 0 Webflow remnants.`
);
