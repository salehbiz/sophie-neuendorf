import fs from 'node:fs';
import path from 'node:path';

const CSS_DIR = path.resolve('.cache/snapshot/css');
const OUT_CSS = path.resolve('src/styles/globals.css');

fs.mkdirSync(path.dirname(OUT_CSS), { recursive: true });

const cssFiles = fs.readdirSync(CSS_DIR).filter(f => f.endsWith('.css'));
let css = fs.readFileSync(path.join(CSS_DIR, cssFiles[0]), 'utf8');

const assetMapPath = path.resolve('public/assets/asset-map.json');
if (fs.existsSync(assetMapPath)) {
  const assetMap = JSON.parse(fs.readFileSync(assetMapPath, 'utf8'));
  for (const [remoteUrl, localUrl] of Object.entries(assetMap)) {
    css = css.split(remoteUrl).join(localUrl);
  }
}

// 1. Remove .w-webflow-badge rules completely
css = css.replace(/\.w-webflow-badge\s*,\s*\.w-webflow-badge\s*>\s*img\s*\{[^}]*\}/g, '');
css = css.replace(/\.w-webflow-badge\s*\{[^}]*\}/g, '');
css = css.replace(/\.w-webflow-badge\s*>\s*img\s*\{[^}]*\}/g, '');

// 2. Rename font-family: webflow-icons -> ui-icons and strip "webflow-icons" from embedded base64 TTF
css = css.replace(/webflow-icons/g, 'ui-icons');
css = css.replace(/data:application\/x-font-ttf;charset=utf-8;base64,([A-Za-z0-9+/=]+)/g, (full, b64) => {
  let buf = Buffer.from(b64, 'base64');
  // Replace ASCII 'webflow-icons' (13 bytes) with 'ui-icon-fonts' (13 bytes) and UTF-16BE 'w\0e\0b\0f\0l\0o\0w\0-\0i\0c\0o\0n\0s'
  const asciiTarget = Buffer.from('webflow-icons', 'ascii');
  const asciiRepl = Buffer.from('ui-icon-fonts', 'ascii');
  let idx = buf.indexOf(asciiTarget);
  while (idx !== -1) {
    asciiRepl.copy(buf, idx);
    idx = buf.indexOf(asciiTarget, idx + 1);
  }
  const utf16Target = Buffer.from('\0w\0e\0b\0f\0l\0o\0w\0-\0i\0c\0o\0n\0s', 'binary');
  const utf16Repl = Buffer.from('\0u\0i\0-\0i\0c\0o\0n\0-\0f\0o\0n\0t\0s', 'binary');
  idx = buf.indexOf(utf16Target);
  while (idx !== -1) {
    utf16Repl.copy(buf, idx);
    idx = buf.indexOf(utf16Target, idx + 1);
  }
  return `data:application/x-font-ttf;charset=utf-8;base64,${buf.toString('base64')}`;
});

// 3. Rename .w-layout-blockcontainer -> .ui-blockcontainer and .w-layout-grid -> .ui-grid
css = css.replace(/\.w-layout-blockcontainer\b/g, '.ui-blockcontainer');
css = css.replace(/\.w-layout-grid\b/g, '.ui-grid');

// 4. Rename all other .w-* and .w--* classes and #w-node-* IDs to ui-* / ui--* / #ui-node-*
css = css.replace(/\.w--([a-zA-Z0-9_-]+)/g, '.ui--$1');
css = css.replace(/\.w-([a-zA-Z0-9_-]+)/g, '.ui-$1');
css = css.replace(/#w-node-([a-zA-Z0-9_-]+)/g, '#ui-node-$1');

// 5. Also handle [class*="w-"] or [class^="w-"] attribute selectors in CSS
css = css.replace(/\[\s*class\s*\^\s*=\s*"w-"\s*\]/g, '[class^="ui-"]');
css = css.replace(/\[\s*class\s*\*\s*=\s*" w-"\s*\]/g, '[class*=" ui-"]');

fs.writeFileSync(OUT_CSS, css, 'utf8');
console.log('Transformed src/styles/globals.css successfully.');
