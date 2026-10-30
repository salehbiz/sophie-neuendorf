'use client';

import { useEffect } from 'react';

const IMAGE_RANGE = 0.12; // image travel inside its frame, as a share of the frame height
const SIDE_DRIFT = 0.12; // side frame travel per pixel of distance from the viewport centre

/**
 * Parallax for the About hero photos: every photo slides inside its frame, and the two smaller
 * side frames drift against the centre one as the row scrolls past.
 */
export function AboutTrioParallax() {
  useEffect(() => {
    const row = document.querySelector<HTMLElement>('.about-trio');
    if (!row || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const frames = Array.from(row.querySelectorAll<HTMLElement>('.about-trio-frame'));
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;
      const rowRect = row.getBoundingClientRect();
      if (rowRect.bottom < 0 || rowRect.top > vh) return;
      const rowOffset = rowRect.top + rowRect.height / 2 - mid;

      frames.forEach((frame) => {
        if (!frame.classList.contains('is-centre')) {
          frame.style.translate = `0 ${(rowOffset * SIDE_DRIFT).toFixed(1)}px`;
        }
        const r = frame.getBoundingClientRect();
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - mid) / (mid + r.height / 2)));
        const img = frame.querySelector<HTMLElement>('img');
        if (img) img.style.translate = `0 ${(-p * IMAGE_RANGE * r.height).toFixed(1)}px`;
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

  return null;
}
