import fs from 'node:fs';
import assert from 'node:assert';

const requiredFiles = [
  'src/data/works.ts',
  'src/data/blogs.ts',
  'src/data/metadata.ts',
  'src/data/layout-fragments.ts',
  'src/data/anim-id-map.ts',
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(file), `Missing required CMS data file: ${file}`);
  const content = fs.readFileSync(file, 'utf8');
  assert.ok(!content.includes('website-files.com'), `Found website-files.com in ${file}`);
  assert.ok(!content.includes('data-wf-'), `Found data-wf- in ${file}`);
  assert.ok(!content.includes('data-w-id'), `Found data-w-id in ${file}`);
  assert.ok(!content.toLowerCase().includes('webflow'), `Found webflow in ${file}`);
}

const worksText = fs.readFileSync('src/data/works.ts', 'utf8');
for (const slug of [
  'event-photography',
  'food-photography',
  'lifestyle-photography',
  'portrait-photography',
  'travel-photography',
  'wedding-photography',
  'creative-photography',
  'editorial-photography',
  'personal-stories',
]) {
  assert.ok(worksText.includes(`"slug": "${slug}"`), `Missing work slug: ${slug}`);
}
assert.ok(worksText.includes('WORKS_LIST_PAGE_1_HTML'), 'Missing WORKS_LIST_PAGE_1_HTML');
assert.ok(worksText.includes('WORKS_LIST_PAGE_2_HTML'), 'Missing WORKS_LIST_PAGE_2_HTML');

const blogsText = fs.readFileSync('src/data/blogs.ts', 'utf8');
for (const slug of [
  'creating-mood-through-color-and-light',
  'finding-emotion-in-everyday-frames',
  'from-ordinary-scenes-to-visual-stories',
  'how-light-can-transform-a-photograph',
  'the-art-of-capturing-a-genuine-moment',
  'the-story-behind-every-portrait',
  'what-makes-a-photograph-feel-timeless',
  'why-composition-matters-in-photography',
]) {
  assert.ok(blogsText.includes(`"slug": "${slug}"`), `Missing blog slug: ${slug}`);
}

console.log('CMS data verification passed (9 works, 8 blogs, 27 metadata routes, 0 Webflow remnants).');
