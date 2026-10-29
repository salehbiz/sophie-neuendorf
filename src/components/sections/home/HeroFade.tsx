'use client';

import { useEffect } from 'react';

const FADE_DISTANCE = 0.35; // viewport heights scrolled until the hero text is fully gone
const LIFT = 60; // px the text drifts up while fading
const PHOTO_LAG = 0.4; // the hero photo moves at 60% of page speed, sinking behind the page

/**
 * Fades the hero name and label out (with a slight lift) as soon as the page starts scrolling,
 * and gives the hero photo a heavy parallax lag.
 */
export function HeroFade() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[hero-fade]'));
    const photo = document.querySelector<HTMLElement>('.section.hero .hero-slider');
    if (!els.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (photo && y < window.innerHeight * 1.2) photo.style.translate = `0 ${(y * PHOTO_LAG).toFixed(1)}px`;
      const t = Math.min(1, Math.max(0, y / (window.innerHeight * FADE_DISTANCE)));
      const eased = 1 - Math.pow(1 - t, 2);
      els.forEach((el) => {
        el.style.opacity = String(1 - eased);
        el.style.translate = `0 ${(-LIFT * eased).toFixed(1)}px`;
        el.style.visibility = t >= 1 ? 'hidden' : '';
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
