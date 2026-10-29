import fs from 'node:fs';
import assert from 'node:assert';

assert.ok(fs.existsSync('src/styles/globals.css'), 'globals.css must exist');
const css = fs.readFileSync('src/styles/globals.css', 'utf8');
assert.ok(!css.includes('website-files.com'), 'CSS must not reference website-files.com');
assert.ok(!css.toLowerCase().includes('webflow'), 'CSS must not contain webflow branding');
assert.ok(
  !/\.(w-container|w-layout-blockcontainer|w-layout-grid|w-inline-block|w-button|w-nav|w-form|w-richtext|w-embed|w-dyn-)/.test(css),
  'CSS must not contain w-* utility classes'
);
assert.ok(css.includes('.ui-container'), 'CSS must contain .ui-container');
assert.ok(css.includes('.ui-blockcontainer'), 'CSS must contain .ui-blockcontainer');
console.log('CSS verification passed.');
