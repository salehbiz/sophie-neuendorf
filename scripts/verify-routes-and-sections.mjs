import fs from 'node:fs';
import assert from 'node:assert';

const requiredRoutes = [
  'src/app/page.tsx',
  'src/app/about-us/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/[slug]/page.tsx',
  'src/app/work/page.tsx',
  'src/app/works/[slug]/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/app/blog-categories/[category]/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/member/[slug]/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-of-service/page.tsx',
  'src/app/not-found.tsx',
];
for (const r of requiredRoutes) {
  assert.ok(fs.existsSync(r), `Missing route file ${r}`);
}
assert.ok(!fs.existsSync('src/app/401'), '/401 must not exist');
assert.ok(!fs.existsSync('src/app/utility-pages'), '/utility-pages must not exist');
assert.ok(!fs.existsSync('src/app/blog-categoties'), '/blog-categoties typo route must not exist');
console.log('Routes and sections verification passed.');
