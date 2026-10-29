import fs from 'node:fs';
import assert from 'node:assert';

assert.ok(fs.existsSync('interactions.md'), 'interactions.md must exist');
const content = fs.readFileSync('interactions.md', 'utf8');
assert.ok(content.includes('## Global / Shared Component Interactions'), 'Missing shared interactions section');
assert.ok(content.includes('## Page-Level & ScrollTrigger Interactions'), 'Missing page interactions section');
assert.ok(content.includes('duration'), 'Missing exact duration values');
assert.ok(content.includes('ease'), 'Missing exact easing values');
assert.ok(content.includes('stagger'), 'Missing stagger values');
console.log('interactions.md verification passed.');
