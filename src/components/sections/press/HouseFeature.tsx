'use client';

import { useRef } from 'react';
import { srcSet } from '@/lib/responsive';
import { IMAGE_SCALE, useCardParallax } from '@/lib/useCardParallax';

const IMG = '/assets/sophie/img/house-2026';

// One slot per photo on the 12-column grid, in reading order: the rooftop cover opens and the
// wide aerial closes the story, Sophie's two photos lead their rows, and the rest stagger between them.
const PHOTOS = [
  { file: 'rooftop-cover', alt: 'Guests on the roof terrace of Neuendorf House at sunset', row: 1, col: 3, span: 8, ratio: '16 / 9', drop: 0, speed: 0, pos: '50% 66%' },
  { file: 'sophie-portrait', alt: 'Sophie Neuendorf smiling beside a guest in a white shirt', row: 2, col: 2, span: 6, ratio: '3 / 2', drop: 0, speed: -0.05, pos: '35% 40%' },
  { file: 'pink-wall', alt: 'A guest in a white dress against the pink wall, her shadow beside her', row: 2, col: 9, span: 3, ratio: '3 / 4', drop: 14, speed: 0.07 },
  { file: 'house-pool', alt: 'The pool and the pink house in daylight', row: 3, col: 3, span: 8, ratio: '3 / 2', drop: 0, speed: 0 },
  { file: 'sophie-terrace', alt: 'Sophie Neuendorf with three guests on the terrace at night', row: 4, col: 1, span: 5, ratio: '5 / 7', drop: 0, speed: 0.05 },
  { file: 'terrace-sunset', alt: 'Sophie Neuendorf and a guest at the pink terrace wall at sunset', row: 4, col: 8, span: 4, ratio: '3 / 5', drop: 16, speed: -0.06 },
  { file: 'courtyard-candles', alt: 'The courtyard from above at night, lined with candles', row: 5, col: 1, span: 5, ratio: '5 / 4', drop: 0, speed: -0.04 },
  { file: 'house-aerial-close', alt: 'Neuendorf House from the air in the evening light', row: 5, col: 7, span: 6, ratio: '3 / 2', drop: 12, speed: 0.06 },
  { file: 'columns-table', alt: 'Pink columns framing a long table set for dinner', row: 6, col: 2, span: 4, ratio: '3 / 4', drop: 0, speed: -0.05 },
  { file: 'dinner', alt: 'Guests at a long candlelit dinner table', row: 6, col: 7, span: 5, ratio: '4 / 5', drop: 12, speed: 0.06 },
  { file: 'house-aerial', alt: 'Neuendorf House from the air at sunset, guests on the roof terrace', row: 7, col: 3, span: 8, ratio: '16 / 9', drop: 0, speed: 0 },
];

const SPEEDS = PHOTOS.map((p) => p.speed);

/**
 * The 2026 Neuendorf House feature: a title block, then the photos staggered across the grid
 * in the Press page's gallery style, each sliding in its frame and drifting as the page scrolls.
 */
export function HouseFeature() {
  const ref = useRef<HTMLElement>(null);
  useCardParallax(ref, SPEEDS);

  return (
    <section ref={ref} className="section pg hf">
      <header className="hf-head">
        <p className="hf-kicker">Selected Features · 2026</p>
        <h1 className="wc-title hf-title">Neuendorf House</h1>
        <p className="hf-meta">Santanyi, Mallorca</p>
      </header>
      <ol className="pg-grid hf-grid">
        {PHOTOS.map((p, i) => {
          const src = `${IMG}/${p.file}.jpg`;
          return (
            <li
              key={p.file}
              className="pg-card"
              style={{
                gridRow: p.row,
                gridColumn: `${p.col} / span ${p.span}`,
                ['--drop' as string]: `${p.drop}vw`,
              }}
            >
              <span className="pg-frame" style={{ aspectRatio: p.ratio }}>
                <img
                  src={src}
                  srcSet={srcSet(src)}
                  sizes={`(max-width: 767px) 120vw, ${Math.round(p.span * 8.3 * IMAGE_SCALE)}vw`}
                  alt={p.alt}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{ objectPosition: p.pos, scale: String(IMAGE_SCALE) }}
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
