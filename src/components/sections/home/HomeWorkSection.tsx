import { PRESS, isExternal, type PressItem } from '@/data/press';
import { withSrcSet } from '@/lib/responsive';
import { PressParallax } from './PressParallax';

// The template's card slots, top to bottom: pairs of side-by-side cards, then one centred card,
// twice. Each slot's wrapper class sets its column and drift; the image class sets its height.
const SLOTS: { wrap: string; img: string }[][] = [
  [{ wrap: '_01', img: '_01' }, { wrap: '_02', img: '_02' }],
  [{ wrap: '_03', img: '_01' }, { wrap: '_04', img: '_04' }],
  [{ wrap: '_05', img: '_05' }],
];
const GROUPS = [...SLOTS, ...SLOTS];

function card(item: PressItem, slot: { wrap: string; img: string }) {
  const link = isExternal(item) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const img = (hover: boolean) =>
    `<img src="${item.img}" loading="lazy"${hover ? ' hover-img=""' : ''} alt="${item.alt}" class="work-card-img ${slot.img} press-card-img" style="object-position:${item.pos ?? '50% 50%'}"/>`;
  return (
    `<div card-rotate="" class="work-card-wrap ${slot.wrap}"><div class="ui-dyn-list"><div role="list" class="ui-dyn-items"><div role="listitem" class="ui-dyn-item">` +
    `<a href="${item.url}"${link} class="work-card ui-inline-block"><div class="img-wrap">${img(false)}<div class="work-img-hover">${img(true)}</div></div>` +
    `<div class="work-card-content"><div class="h6 medium">${item.title}</div><div class="h6 medium">${item.year}</div><div class="text-hide">1</div></div></a>` +
    '</div></div></div></div>'
  );
}

// The newest features fill the slots in order; the full list lives on the Press page.
const cards = GROUPS.map((group, g) => {
  const first = GROUPS.slice(0, g).flat().length;
  const middle = group.length === 1 ? ' middle' : '';
  return `<div class="works-wrapper${middle}">${group.map((slot, i) => card(PRESS[first + i], slot)).join('')}</div>`;
}).join('');

const SECTION_INNER_HTML =
  '<div class="ui-blockcontainer container ui-container"><div class="press-head"><h2 tag-text="" class="tag-text">Selected Features</h2>' +
  '<a href="/press" class="roles-link press-all-link">All press <span aria-hidden="true">→</span></a></div>' +
  `<div class="work-block">${cards}</div></div>`;

// Press photos sit zoomed ×1.4 in their cards for the parallax, so ask for ~1.4× their width.
const PRESS_HTML = withSrcSet(SECTION_INNER_HTML, '(max-width: 767px) 125vw, 36vw');

export function HomeWorkSection() {
  return (
    <>
      <section
        className="section work press-list"
        dangerouslySetInnerHTML={{ __html: PRESS_HTML }}
      />
      <PressParallax selector=".press-list" />
    </>
  );
}
