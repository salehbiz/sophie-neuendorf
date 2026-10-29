import fs from 'node:fs';
import assert from 'node:assert';

for (const f of [
  'src/data/services.ts',
  'src/data/works.ts',
  'src/data/blogs.ts',
  'src/data/members.ts',
  'src/data/metadata.ts',
  'src/app/sitemap.ts',
]) {
  assert.ok(fs.existsSync(f), `Missing ${f}`);
}
const blogs = fs.readFileSync('src/data/blogs.ts', 'utf8');
assert.ok(blogs.includes('web-design'), 'blogs.ts must use fixed slug web-design');
assert.ok(!blogs.includes('web-dessign'), 'blogs.ts must not contain typo web-dessign');
assert.ok(!blogs.includes('blog-categoties'), 'blogs.ts must not contain typo blog-categoties');
console.log('CMS data verification passed.');
