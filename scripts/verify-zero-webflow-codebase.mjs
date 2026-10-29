import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

assert.ok(fs.existsSync('src/lib/animations/gsap-engine.ts'), 'gsap-engine.ts must exist');
assert.ok(fs.existsSync('src/components/animations/AnimationProvider.tsx'), 'AnimationProvider.tsx must exist');

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full));
    else if (/\.(ts|tsx|css|json)$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of walk('src')) {
  const text = fs.readFileSync(file, 'utf8');
  assert.ok(!text.includes('website-files.com'), `Found website-files.com in ${file}`);
  assert.ok(!text.includes('data-wf-'), `Found data-wf- in ${file}`);
  assert.ok(!text.includes('data-w-id'), `Found data-w-id in ${file}`);
  assert.ok(!text.toLowerCase().includes('webflow'), `Found webflow in ${file}`);
}
console.log('Zero-Webflow codebase verification passed.');
