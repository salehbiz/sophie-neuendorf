'use client';

import { useEffect } from 'react';

const DRIFT = 0.2; // photo travel inside its frame, as a share of the frame height (heavy)
const REVEAL_AT = 0.88; // a row fades in once its top passes this share of the viewport height

/**
 * Motion for the roles section: photos drift strongly inside their frames while scrolling,
 * and each role row fades up in turn as it comes into view. Everything is checked on scroll
 * (no IntersectionObserver), and rows are only hidden once this script is running, so the
 * content can never get stuck invisible.
 */
export function RolesMotion({ selector, drift = DRIFT }: { selector: string; drift?: number }) {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(selector);
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rows = Array.from(section.querySelectorAll<HTMLElement>('[data-reveal]'));
    const frames = Array.from(section.querySelectorAll<HTMLElement>('[data-drift]'));
    section.classList.add('is-motion-ready');
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const box = section.getBoundingClientRect();
      if (box.bottom < -vh || box.top > vh * 2) return;

      rows.forEach((row) => {
        if (!row.classList.contains('is-in') && row.getBoundingClientRect().top < vh * REVEAL_AT) {
          row.classList.add('is-in');
        }
      });

      const mid = vh / 2;
      frames.forEach((frame) => {
        const r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - mid) / (mid + r.height / 2)));
        const img = frame.querySelector<HTMLElement>('img');
        if (img) img.style.translate = `0 ${(-p * drift * r.height).toFixed(1)}px`;
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
      section.classList.remove('is-motion-ready');
    };
  }, [selector, drift]);

  return null;
}
