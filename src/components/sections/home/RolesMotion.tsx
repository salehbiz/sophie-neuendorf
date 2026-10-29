'use client';

import { useEffect } from 'react';

const DRIFT = 0.1; // photo travel inside its frame, as a share of the frame height

/**
 * Motion for the roles section: photos drift slowly inside their frames while scrolling,
 * and each role row fades up in turn when the list comes into view.
 */
export function RolesMotion({ selector }: { selector: string }) {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(selector);
    if (!section) return;

    const rows = Array.from(section.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rows.forEach((row) => row.classList.add('is-in'));
      return;
    }

    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          rowObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    rows.forEach((row) => rowObserver.observe(row));

    const frames = Array.from(section.querySelectorAll<HTMLElement>('[data-drift]'));
    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;
      frames.forEach((frame) => {
        const r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - mid) / (mid + r.height / 2)));
        const img = frame.querySelector<HTMLElement>('img');
        if (img) img.style.translate = `0 ${(-p * DRIFT * r.height).toFixed(1)}px`;
      });
    };

    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };

    const sectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    sectionObserver.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      rowObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [selector]);

  return null;
}
