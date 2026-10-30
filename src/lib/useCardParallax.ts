'use client';

import { useEffect, type RefObject } from 'react';

const IMAGE_RANGE = 0.14; // photo travel inside its frame, as a share of the frame height
export const IMAGE_SCALE = 1.3; // overscale so the travel never reveals the frame edge

/**
 * Two-layer scroll parallax for staggered photo galleries: inside `root`, every `.pg-card`
 * drifts at its own speed (speeds[i]; negative rises, positive sinks) and the photo in its
 * `.pg-frame` slides inside the frame. Phones get a gentler drift; reduced motion stays still.
 */
export function useCardParallax(root: RefObject<HTMLElement | null>, speeds: number[]) {
  useEffect(() => {
    const section = root.current;
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
        const r = frame.getBoundingClientRect();
        if (r.bottom < -vh / 2 || r.top > vh * 1.5) return;
        // Take out the card's own drift so the measurement never feeds back into it.
        const offset = r.top + r.height / 2 - mid - (parseFloat(card.style.translate.split(' ')[1]) || 0);
        card.style.translate = `0 ${(offset * (speeds[i] ?? 0) * strength).toFixed(1)}px`;
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
  }, [root, speeds]);
}
