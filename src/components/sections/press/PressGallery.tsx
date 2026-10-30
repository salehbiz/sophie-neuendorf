'use client';

import { useRef } from 'react';
import { PRESS, isExternal } from '@/data/press';
import { srcSet } from '@/lib/responsive';
import { IMAGE_SCALE, useCardParallax } from '@/lib/useCardParallax';

// Card placement on the 12-column grid, one slot per press item in PRESS order: row, first
// column, column span, frame ratio, how far down the card starts (vw), and how fast the card
// drifts against the scroll (negative rises, positive sinks).
const LAYOUT = [
  { row: 1, col: 2, span: 6, ratio: '4 / 5', drop: 0, speed: -0.06 },
  { row: 1, col: 9, span: 3, ratio: '3 / 4', drop: 22, speed: 0.08 },
  { row: 2, col: 1, span: 4, ratio: '1 / 1', drop: 0, speed: 0.05 },
  { row: 2, col: 6, span: 6, ratio: '3 / 2', drop: 12, speed: -0.07 },
  { row: 3, col: 3, span: 8, ratio: '16 / 9', drop: 0, speed: 0 },
  { row: 4, col: 8, span: 4, ratio: '4 / 5', drop: 0, speed: -0.05 },
  { row: 4, col: 2, span: 5, ratio: '3 / 4', drop: 14, speed: 0.07 },
  { row: 5, col: 1, span: 5, ratio: '4 / 5', drop: 0, speed: 0.06 },
  { row: 5, col: 7, span: 5, ratio: '1 / 1', drop: 16, speed: -0.06 },
  { row: 6, col: 2, span: 6, ratio: '3 / 2', drop: 0, speed: -0.04 },
  { row: 6, col: 9, span: 3, ratio: '3 / 4', drop: 14, speed: 0.07 },
];

const SPEEDS = PRESS.map((_, i) => LAYOUT[i % LAYOUT.length].speed);

/**
 * Press & Features as an editorial gallery: cards of different sizes staggered across the grid.
 * Each photo slides inside its frame and each card drifts at its own speed as the page scrolls,
 * like the home page's press list. Phones get a single column with gentler motion.
 */
export function PressGallery() {
  const ref = useRef<HTMLElement>(null);
  useCardParallax(ref, SPEEDS);

  return (
    <section ref={ref} className="section pg">
      <h1 className="wc-title pg-title">Press &amp; Features</h1>
      <ol className="pg-grid">
        {PRESS.map((item, i) => {
          const l = LAYOUT[i % LAYOUT.length];
          return (
            <li
              key={item.url}
              className="pg-card"
              style={{
                gridRow: l.row,
                gridColumn: `${l.col} / span ${l.span}`,
                ['--drop' as string]: `${l.drop}vw`,
              }}
            >
              <a href={item.url} {...(isExternal(item) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span className="pg-frame" style={{ aspectRatio: l.ratio }}>
                  <img
                    src={item.img}
                    srcSet={srcSet(item.img)}
                    sizes={`(max-width: 767px) 120vw, ${Math.round(l.span * 8.3 * IMAGE_SCALE)}vw`}
                    alt={item.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ objectPosition: item.pos, scale: String(IMAGE_SCALE) }}
                  />
                </span>
                <span className="pg-caption">
                  <span className="pg-name">{item.title}</span>
                  <span className="pg-meta">
                    {item.year} · {item.city}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
