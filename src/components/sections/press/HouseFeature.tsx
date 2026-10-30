'use client';

import { useRef } from 'react';
import { srcSet } from '@/lib/responsive';
import { IMAGE_SCALE, useCardParallax } from '@/lib/useCardParallax';

const IMG = '/assets/sophie/img/house-2026';

type Place = { row: number; col: number; span: number };
type Photo = Place & { kind: 'photo'; file: string; alt: string; ratio: string; drop: number; speed: number; pos?: string };
type Note = Place & { kind: 'note'; label: string; text: string };

// Photos and short notes on the 12-column grid, in reading order: the rooftop cover opens, the
// eclipse and the V-ZUG dinner each get a note beside their photos, and the wide aerial closes.
const ITEMS: (Photo | Note)[] = [
  { kind: 'photo', file: 'rooftop-cover', alt: 'Guests on the roof terrace of Neuendorf House at sunset', row: 1, col: 2, span: 10, ratio: '16 / 9', drop: 0, speed: 0, pos: '50% 66%' },
  { kind: 'photo', file: 'sophie-portrait', alt: 'Sophie Neuendorf smiling beside a guest in a white shirt', row: 2, col: 2, span: 6, ratio: '3 / 2', drop: 0, speed: -0.05, pos: '35% 40%' },
  { kind: 'photo', file: 'pink-wall', alt: 'A guest in a white dress against the pink wall, her shadow beside her', row: 2, col: 9, span: 3, ratio: '3 / 4', drop: 14, speed: 0.07 },
  {
    kind: 'note',
    label: 'The eclipse',
    text: 'Shortly before sunset the moon passed in front of the sun. From the roof, guests watched totality through eclipse glasses as the sky over Santanyi went dark.',
    row: 3, col: 2, span: 4,
  },
  { kind: 'photo', file: 'eclipse', alt: 'The total solar eclipse above the trees around Neuendorf House', row: 3, col: 7, span: 6, ratio: '3 / 2', drop: 6, speed: -0.04 },
  { kind: 'photo', file: 'house-pool', alt: 'The pool and the pink house in daylight', row: 4, col: 3, span: 8, ratio: '3 / 2', drop: 0, speed: 0 },
  { kind: 'photo', file: 'sophie-terrace', alt: 'Sophie Neuendorf with three guests on the terrace at night', row: 5, col: 1, span: 5, ratio: '5 / 7', drop: 0, speed: 0.05 },
  { kind: 'photo', file: 'terrace-sunset', alt: 'Sophie Neuendorf and a guest at the pink terrace wall at sunset', row: 5, col: 8, span: 4, ratio: '3 / 5', drop: 16, speed: -0.06 },
  { kind: 'photo', file: 'courtyard-candles', alt: 'The courtyard from above at night, lined with candles', row: 6, col: 1, span: 5, ratio: '5 / 4', drop: 0, speed: -0.04 },
  { kind: 'photo', file: 'house-aerial-close', alt: 'Neuendorf House from the air in the evening light', row: 6, col: 7, span: 6, ratio: '3 / 2', drop: 12, speed: 0.06 },
  {
    kind: 'note',
    label: 'Dinner by V-ZUG',
    text: 'Dinner was Sophie’s Eclipse Soirée, curated by the Swiss house V-ZUG. Its chefs cooked on site, and the courses took their names from the stages of the eclipse, among them First Contact and Crescent.',
    row: 7, col: 2, span: 4,
  },
  { kind: 'photo', file: 'chef', alt: 'A V-ZUG chef finishing canapés with Iberian ham', row: 7, col: 7, span: 4, ratio: '3 / 4', drop: 0, speed: 0.05 },
  { kind: 'photo', file: 'chef-2', alt: 'A V-ZUG chef laying ham over focaccia', row: 8, col: 2, span: 4, ratio: '3 / 4', drop: 0, speed: -0.05 },
  { kind: 'photo', file: 'menu', alt: 'The menu for Sophie’s Eclipse Soirée, curated by V-ZUG', row: 8, col: 8, span: 4, ratio: '3 / 4', drop: 12, speed: 0.06, pos: '50% 45%' },
  { kind: 'photo', file: 'dinner', alt: 'Guests at a long candlelit dinner table', row: 9, col: 3, span: 5, ratio: '4 / 5', drop: 0, speed: -0.05 },
  { kind: 'photo', file: 'columns-table', alt: 'Pink columns framing a long table set for dinner', row: 9, col: 9, span: 3, ratio: '3 / 4', drop: 14, speed: 0.07 },
  { kind: 'photo', file: 'house-aerial', alt: 'Neuendorf House from the air at sunset, guests on the roof terrace', row: 10, col: 3, span: 8, ratio: '16 / 9', drop: 0, speed: 0 },
];

// Drift speeds for the photo cards, in the order they appear on the page.
const SPEEDS = ITEMS.filter((i): i is Photo => i.kind === 'photo').map((p) => p.speed);

/**
 * The 2026 Neuendorf House feature: Sophie's birthday on the evening of the total solar eclipse,
 * with dinner by V-ZUG. A small title block and intro, then photos staggered across the grid in
 * the Press page's gallery style (each sliding in its frame and drifting as the page scrolls),
 * with short notes set beside them.
 */
export function HouseFeature() {
  const ref = useRef<HTMLElement>(null);
  useCardParallax(ref, SPEEDS);

  let photoIndex = 0;
  return (
    <section ref={ref} className="section pg hf">
      <header className="hf-head">
        <p className="hf-kicker">Selected Features · 2026</p>
        <h1 className="wc-title hf-title">Neuendorf House</h1>
        <p className="hf-meta">Santanyi, Mallorca</p>
        <p className="hf-intro">
          Sophie marked her birthday in collaboration with V-ZUG at Neuendorf House in Santanyi,
          Mallorca, the house John Pawson and Claudio Silvestrin designed for her family in 1989. The
          party fell on 12 August 2026, the evening of the total solar eclipse: guests gathered on the
          roof to watch the moon cover the sun, then sat down to dinner in the courtyard.
        </p>
      </header>
      <ol className="pg-grid hf-grid">
        {ITEMS.map((item) => {
          const place = { gridRow: item.row, gridColumn: `${item.col} / span ${item.span}` };
          if (item.kind === 'note') {
            return (
              <li key={item.label} className="hf-note" style={place}>
                <p className="hf-note-label">{item.label}</p>
                <p className="hf-note-text">{item.text}</p>
              </li>
            );
          }
          const src = `${IMG}/${item.file}.jpg`;
          const eager = photoIndex++ < 2;
          return (
            <li key={item.file} className="pg-card" style={{ ...place, ['--drop' as string]: `${item.drop}vw` }}>
              <span className="pg-frame" style={{ aspectRatio: item.ratio }}>
                <img
                  src={src}
                  srcSet={srcSet(src)}
                  sizes={`(max-width: 767px) 120vw, ${Math.round(item.span * 8.3 * IMAGE_SCALE)}vw`}
                  alt={item.alt}
                  loading={eager ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{ objectPosition: item.pos, scale: String(IMAGE_SCALE) }}
                />
              </span>
            </li>
          );
        })}
      </ol>
      <a href="/press" className="roles-link hf-back">
        <span aria-hidden="true">←</span> All press
      </a>
    </section>
  );
}
