'use client';

import { useEffect } from 'react';

const IMAGE_RANGE = 0.18; // image travel inside its frame, as a share of the frame height
const IMAGE_SCALE = 1.4; // overscale so the travel never reveals the frame edge
const CARD_DRIFT = 0.25; // card travel per pixel of distance from the viewport centre
const MIN_GAP = 32; // closest two stacked cards may ever get, in px

/**
 * Two-layer parallax for the home press list: each photo slides inside its frame, and the left
 * and right columns drift in opposite directions. Uses the CSS `translate` property so it stacks
 * with the GSAP flip and hover transforms instead of overwriting them.
 */
export function PressParallax({ selector }: { selector: string }) {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(selector);
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const frames = Array.from(section.querySelectorAll<HTMLElement>('.img-wrap'));
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[card-rotate]'));
    const drift = (card: HTMLElement) =>
      card.classList.contains('_01') || card.classList.contains('_03') ? 1 : card.classList.contains('_05') ? 0 : -1;

    let raf = 0;
    let visible = false;

    // Untransformed card boxes (page coordinates) and the pairs that sit above one another.
    let boxes: { top: number; bottom: number }[] = [];
    let stacked: [number, number][] = [];

    const measure = () => {
      const saved = cards.map((c) => [c.style.transform, c.style.translate] as const);
      cards.forEach((c) => {
        c.style.setProperty('transform', 'none', 'important');
        c.style.translate = 'none';
      });
      const rects = cards.map((c) => c.getBoundingClientRect());
      cards.forEach((c, i) => {
        c.style.removeProperty('transform');
        c.style.transform = saved[i][0];
        c.style.translate = saved[i][1];
      });
      boxes = rects.map((r) => ({ top: r.top + window.scrollY, bottom: r.bottom + window.scrollY }));
      stacked = [];
      rects.forEach((a, i) =>
        rects.forEach((b, j) => {
          const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
          if (i !== j && overlapX > 0 && a.top < b.top) stacked.push([i, j]);
        }),
      );
    };

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mid = vh / 2;

      frames.forEach((frame) => {
        const r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - mid) / (mid + r.height / 2)));
        const y = (-p * IMAGE_RANGE * r.height).toFixed(1);
        // Inline scale too: GSAP clears the CSS `scale` on the hover image when it animates it.
        frame.querySelectorAll<HTMLElement>('img').forEach((img) => {
          img.style.translate = `0 ${y}px`;
          img.style.scale = String(IMAGE_SCALE);
        });
      });

      // Single-column phones: keep the drift small so stacked cards stay calm.
      const strength = window.innerWidth < 768 ? CARD_DRIFT * 0.12 : CARD_DRIFT;
      const shift = cards.map((card, i) => {
        const box = boxes[i];
        if (!box) return 0;
        const offset = box.top - window.scrollY + (box.bottom - box.top) / 2 - mid;
        return offset * strength * drift(card);
      });

      // Never let a card get closer than MIN_GAP to the card above or below it: where the
      // drift would close the gap, the two cards share the correction and move together.
      // Chained neighbours need repeated passes; stop as soon as every gap holds.
      for (let pass = 0; pass < 32; pass++) {
        let moved = false;
        stacked.forEach(([above, below]) => {
          const gap = boxes[below].top + shift[below] - (boxes[above].bottom + shift[above]);
          if (gap >= MIN_GAP - 0.5) return;
          const fix = (MIN_GAP - gap) / 2;
          shift[above] -= fix;
          shift[below] += fix;
          moved = true;
        });
        if (!moved) break;
      }

      cards.forEach((card, i) => (card.style.translate = `0 ${shift[i].toFixed(1)}px`));
    };

    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) onScroll();
    });
    measure();
    observer.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      cancelAnimationFrame(raf);
    };
  }, [selector]);

  return null;
}
