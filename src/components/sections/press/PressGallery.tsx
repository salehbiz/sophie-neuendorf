'use client';

import { useEffect, useRef } from 'react';
import { PRESS } from '@/data/press';
import { srcSet } from '@/lib/responsive';

// Card placement on the 12-column grid, one entry per press item in PRESS order: row, first
// column, column span, frame ratio, how far down the card starts (vw), crop focus, and how fast
// the card drifts against the scroll (negative rises, positive sinks).
const LAYOUT = [
  { row: 1, col: 2, span: 6, ratio: '4 / 5', drop: 0, pos: '42% 50%', speed: -0.06 },
  { row: 1, col: 9, span: 3, ratio: '3 / 4', drop: 22, pos: '50% 35%', speed: 0.08 },
  { row: 2, col: 1, span: 4, ratio: '1 / 1', drop: 0, pos: '28% 40%', speed: 0.05 },
  { row: 2, col: 6, span: 6, ratio: '3 / 2', drop: 12, pos: '50% 50%', speed: -0.07 },
  { row: 3, col: 3, span: 8, ratio: '16 / 9', drop: 0, pos: '50% 50%', speed: 0 },
  { row: 4, col: 8, span: 4, ratio: '4 / 5', drop: 0, pos: '50% 50%', speed: -0.05 },
  { row: 4, col: 2, span: 5, ratio: '3 / 4', drop: 14, pos: '50% 55%', speed: 0.07 },
  { row: 5, col: 1, span: 5, ratio: '4 / 5', drop: 0, pos: '45% 50%', speed: 0.06 },
  { row: 5, col: 7, span: 5, ratio: '1 / 1', drop: 16, pos: '55% 50%', speed: -0.06 },
  { row: 6, col: 4, span: 6, ratio: '3 / 2', drop: 0, pos: '50% 50%', speed: 0 },
];

const IMAGE_RANGE = 0.14; // photo travel inside its frame, as a share of the frame height
const IMAGE_SCALE = 1.3; // overscale so the travel never reveals the frame edge

/**
 * Press & Features as an editorial gallery: cards of different sizes staggered across the grid.
 * Each photo slides inside its frame and each card drifts at its own speed as the page scrolls,
 * like the home page's press list. Phones get a single column with gentler motion.
 */
export function PressGallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.pg-card'));
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;
      const strength = window.innerWidth < 768 ? 0.3 : 1;

      cards.forEach((card, i) => {
        const frame = card.querySelector<HTMLElement>('.pg-frame');
        const img = frame?.querySelector<HTMLElement>('img');
        if (!frame || !img) return;
        // Measure the frame, which only moves with its card, so the drift never feeds back.
        const r = frame.getBoundingClientRect();
        if (r.bottom < -vh / 2 || r.top > vh * 1.5) return;
        const offset = r.top + r.height / 2 - mid - (parseFloat(card.style.translate.split(' ')[1]) || 0);
        card.style.translate = `0 ${(offset * LAYOUT[i].speed * strength).toFixed(1)}px`;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - mid) / (mid + r.height / 2)));
        img.style.translate = `0 ${(-p * IMAGE_RANGE * r.height).toFixed(1)}px`;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="pg-frame" style={{ aspectRatio: l.ratio }}>
                  <img
                    src={item.img}
                    srcSet={srcSet(item.img)}
                    sizes={`(max-width: 767px) 120vw, ${Math.round(l.span * 8.3 * IMAGE_SCALE)}vw`}
                    alt={item.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ objectPosition: l.pos, scale: String(IMAGE_SCALE) }}
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
