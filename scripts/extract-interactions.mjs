import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const JS_DIR = path.resolve('.cache/snapshot/js');
const PAGES_DIR = path.resolve('.cache/snapshot/pages');

const jsFiles = fs.readdirSync(JS_DIR).filter(f => f.startsWith('webflow.') && f.endsWith('.js'));

const ix3Interactions = new Map();
const ix3Timelines = new Map();
const ix2Events = new Map();
const ix2ActionLists = new Map();

// Also map which page uses which JS bundle and what data-w-id / data-wf-component-id elements exist
const pageToJs = new Map();
const dataWIdTargets = new Map();
const componentIdTargets = new Map();

for (const pageFile of fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(PAGES_DIR, pageFile), 'utf8');
  for (const m of html.matchAll(/src="[^"]*\/(webflow\.[^"\/]+\.js)"/g)) {
    if (!m[1].includes('schunk')) {
      pageToJs.set(pageFile.replace('.html', ''), m[1]);
    }
  }
  for (const m of html.matchAll(/<([a-z0-9-]+)([^>]*data-w-id="([^"]+)"[^>]*)>/gi)) {
    const tag = m[1];
    const attrs = m[2];
    const wid = m[3];
    const cls = (attrs.match(/class="([^"]+)"/) || [])[1] || '';
    if (!dataWIdTargets.has(wid)) {
      dataWIdTargets.set(wid, { tag, className: cls, pages: new Set() });
    }
    dataWIdTargets.get(wid).pages.add(pageFile.replace('.html', ''));
  }
  for (const m of html.matchAll(/<([a-z0-9-]+)([^>]*data-wf-component-id="([^"]+)"[^>]*)>/gi)) {
    const tag = m[1];
    const attrs = m[2];
    const cid = m[3];
    const cls = (attrs.match(/class="([^"]+)"/) || [])[1] || '';
    if (!componentIdTargets.has(cid)) {
      componentIdTargets.set(cid, { tag, className: cls });
    }
  }
}

for (const file of jsFiles) {
  const code = fs.readFileSync(path.join(JS_DIR, file), 'utf8');

  // Extract .register([{id: call arguments
  const regMatch = code.match(/[a-zA-Z_$][0-9a-zA-Z_$]*\.register\(\s*\[\s*\{\s*id:/);
  const regIdx = regMatch ? regMatch.index : -1;
  if (regIdx !== -1) {
    let depth = 0;
    let start = code.indexOf('(', regIdx) + 1;
    let i = start;
    for (; i < code.length; i++) {
      if (code[i] === '(') depth++;
      else if (code[i] === ')') {
        if (depth === 0) break;
        depth--;
      }
    }
    const argStr = '[' + code.slice(start, i) + ']';
    try {
      const [interactions, timelines, env] = vm.runInNewContext(`(${argStr})`);
      for (const inter of interactions || []) {
        ix3Interactions.set(inter.id, { ...inter, sourceBundle: file });
      }
      for (const tl of timelines || []) {
        ix3Timelines.set(tl.id, { ...tl, sourceBundle: file });
      }
    } catch (e) {
      console.error(`Failed parsing IX3 in ${file}:`, e.message);
    }
  }

  // Extract Webflow.require("ix2").init(...) call arguments
  const ix2Idx = code.indexOf('Webflow.require("ix2").init(');
  if (ix2Idx !== -1) {
    let depth = 0;
    let start = ix2Idx + 'Webflow.require("ix2").init('.length;
    let i = start;
    for (; i < code.length; i++) {
      if (code[i] === '(') depth++;
      else if (code[i] === ')') {
        if (depth === 0) break;
        depth--;
      }
    }
    const argStr = code.slice(start, i);
    try {
      const ix2Data = vm.runInNewContext(`(${argStr})`);
      for (const [id, ev] of Object.entries(ix2Data.events || {})) {
        ix2Events.set(id, { ...ev, sourceBundle: file });
      }
      for (const [id, al] of Object.entries(ix2Data.actionLists || {})) {
        ix2ActionLists.set(id, { ...al, sourceBundle: file });
      }
    } catch (e) {
      console.error(`Failed parsing IX2 in ${file}:`, e.message);
    }
  }
}

console.log(`Extracted ${ix3Interactions.size} IX3 interactions, ${ix3Timelines.size} IX3 timelines, ${ix2Events.size} IX2 events, ${ix2ActionLists.size} IX2 actionLists.`);

// Save raw extracted JSON as well for programmatic consumption in Task 5
fs.writeFileSync(
  path.resolve('.cache/snapshot/interactions-extracted.json'),
  JSON.stringify(
    {
      ix3Interactions: Array.from(ix3Interactions.values()),
      ix3Timelines: Array.from(ix3Timelines.values()),
      ix2Events: Array.from(ix2Events.values()),
      ix2ActionLists: Array.from(ix2ActionLists.values()),
      dataWIdTargets: Object.fromEntries(
        Array.from(dataWIdTargets.entries()).map(([k, v]) => [k, { ...v, pages: Array.from(v.pages) }])
      ),
      componentIdTargets: Object.fromEntries(componentIdTargets.entries()),
    },
    null,
    2
  ),
  'utf8'
);

// Build markdown documentation in interactions.md
let md = `# Voyra — Complete Interactions & Animation Audit (\`interactions.md\`)

This document records **every** interaction, trigger, target selector, keyframe, duration, easing curve, stagger, and ScrollTrigger configuration extracted directly from the published bundles of \`https://voyra.webflow.io/\` prior to stripping \`data-w-id\` and \`data-wf-*\` attributes.

- **GSAP Engine Version in Original Site:** GSAP \`3.15.0\` (\`gsap.min.js\`, \`ScrollTrigger.min.js\`, \`SplitText.min.js\`, \`CustomEase.min.js\`, \`CustomWiggle.min.js\`)
- **Breakpoints:**
  - \`main\`: \`992px – 10000px\`
  - \`medium\`: \`768px – 991px\`
  - \`small\`: \`480px – 767px\`
  - \`tiny\`: \`0px – 479px\`
- **Total Extracted Definitions:**
  - **GSAP / IX3 Interactions:** ${ix3Interactions.size}
  - **GSAP / IX3 Timelines:** ${ix3Timelines.size}
  - **IX2 Events:** ${ix2Events.size}
  - **IX2 Action Lists:** ${ix2ActionLists.size}

---

## Global / Shared Component Interactions

Below are all shared component interactions, followed by page-level & ScrollTrigger interactions.

## Page-Level & ScrollTrigger Interactions (GSAP IX3 Engine)

Below is every GSAP-based interaction (\`ix3\`) registered in the site, paired with its exact trigger configuration, scope, breakpoint conditions, and full timeline animations (targets, properties, from/to values, \`duration\`, \`ease\`, \`stagger\`, and \`splitText\` configuration).

`;

for (const [id, inter] of ix3Interactions.entries()) {
  const scopeDesc = inter.scope?.type === 'component'
    ? `Component \`${inter.scope.componentId}\` (${componentIdTargets.get(inter.scope.componentId)?.className || 'shared component'})`
    : inter.scope?.type === 'pages'
    ? `Pages \`${JSON.stringify(inter.scope.value)}\``
    : `Site-wide (\`site\`)`;

  md += `### Interaction \`${id}\` (${scopeDesc})\n`;
  md += `- **Deleted:** \`${Boolean(inter.deleted)}\`\n`;
  md += `- **Triggers:**\n\`\`\`json\n${JSON.stringify(inter.triggers, null, 2)}\n\`\`\`\n`;
  if (inter.conditions) {
    md += `- **Conditions:**\n\`\`\`json\n${JSON.stringify(inter.conditions, null, 2)}\n\`\`\`\n`;
  }
  const tlIds = inter.timelineIds || [];
  for (const tlId of tlIds) {
    const tl = ix3Timelines.get(tlId);
    if (tl) {
      md += `- **Timeline \`${tlId}\`:**\n\`\`\`json\n${JSON.stringify(tl, null, 2)}\n\`\`\`\n`;
    }
  }
  md += `\n`;
}

md += `---\n\n## Component & Element Hover / Click / Scroll Interactions (IX2 Engine)\n\n`;
md += `### IX2 Action Lists (${ix2ActionLists.size} total)\n\n`;

for (const [id, al] of ix2ActionLists.entries()) {
  md += `#### Action List \`${id}\` — "${al.title || 'Untitled'}"\n`;
  md += `\`\`\`json\n${JSON.stringify(al, null, 2)}\n\`\`\`\n\n`;
}

md += `### IX2 Events (${ix2Events.size} total)\n\n`;
for (const [id, ev] of ix2Events.entries()) {
  const targetWid = ev.target?.id;
  const domInfo = targetWid ? dataWIdTargets.get(targetWid) : null;
  md += `#### Event \`${id}\` (\`${ev.eventTypeId}\` -> ActionList \`${ev.action?.actionListId || 'custom'}\`)\n`;
  if (domInfo) {
    md += `- **DOM Element Match:** \`<${domInfo.tag} class="${domInfo.className}">\` (appears on: \`${Array.from(domInfo.pages).join(', ')}\`)\n`;
  }
  md += `\`\`\`json\n${JSON.stringify(ev, null, 2)}\n\`\`\`\n\n`;
}

fs.writeFileSync(path.resolve('interactions.md'), md, 'utf8');
console.log('Generated interactions.md successfully.');
