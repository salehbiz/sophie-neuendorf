'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PT_FLAG } from '@/lib/page-transition';

// Kinetic typography page transition (after the Codrops "Kinetic Typography Page Transition"),
// played between pages. Same choreography and easings as the original, compressed to about 40%
// of its length so a page change takes ~2.5s instead of ~6s.
//
// Links on this site are plain anchors that load the next page fresh, so the transition is split
// in two: "in" covers the screen and then navigates; the next page starts covered (the inline
// script in layout.tsx adds .pt-cover before first paint when the flag below is set) and plays
// "out" to reveal itself.

const T = 0.42; // timing factor against the original durations

// Real text only: her name, title, tagline and cities from the old site.
const LINES = [
  'Sophie Neuendorf',
  'Condesa de Teba',
  'Fine Art',
  'Finance',
  'Technology',
  'New York',
  'London',
  'Berlin',
  'Paris',
  'Madrid',
  'Sophie Neuendorf',
];

const shouldHandle = (e: MouseEvent, a: HTMLAnchorElement) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
  if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return false;
  const url = new URL(a.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  // Same page (or just a #hash on it): nothing to transition.
  if (url.pathname === window.location.pathname && url.search === window.location.search) return false;
  return true;
};

export function PageTransition() {
  const rootRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const type = typeRef.current;
    if (!root || !type) return;
    const lines = Array.from(type.children) as HTMLElement[];
    const html = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let busy = false;
    let tl: gsap.core.Timeline | null = null;

    // Covered state = the end of "in": overlay opaque, type turned and scaled, lines swept away.
    const setCovered = () => {
      gsap.set(root, { autoAlpha: 1 });
      gsap.set(type, { scale: 2.7, rotate: -90 });
      gsap.set(lines, { x: '-200%', opacity: 0 });
    };
    const setHidden = () => {
      gsap.set(root, { autoAlpha: 0 });
      gsap.set(type, { scale: 1, rotate: 0 });
      gsap.set(lines, { x: '0%', opacity: 0 });
    };

    const playOut = () => {
      try {
        sessionStorage.removeItem(PT_FLAG);
      } catch {}
      setCovered();
      html.classList.remove(PT_FLAG);
      tl = gsap
        .timeline({ onComplete: () => setHidden() })
        .to(type, { duration: 1.4 * T, ease: 'power2.inOut', scale: 1, rotate: 0 }, 1.2 * T)
        .to(lines, { duration: 2.3 * T, ease: 'back', x: '0%', stagger: -0.04 * T }, 0)
        .to(lines, {
          keyframes: [
            { opacity: 1, duration: 1 * T, ease: 'power1.in' },
            { opacity: 0, duration: 1.5 * T, ease: 'power1.in' },
          ],
        }, 0)
        // Reveal the page as the type settles back (the original shows its items at 70%).
        .to(root, { duration: 0.8 * T * 1.6, ease: 'power2.inOut', autoAlpha: 0 }, 2.3 * T * 0.7);
    };

    const playIn = (href: string) => {
      busy = true;
      // Warm the next page while the type sweeps.
      fetch(href, { credentials: 'same-origin' }).catch(() => {});
      gsap.set(root, { autoAlpha: 0 });
      gsap.set(type, { scale: 1, rotate: 0 });
      gsap.set(lines, { x: '0%', opacity: 0.06 });
      tl = gsap
        .timeline({
          onComplete: () => {
            try {
              sessionStorage.setItem(PT_FLAG, '1');
            } catch {}
            window.location.assign(href);
          },
        })
        .to(root, { duration: 0.8 * T * 1.4, ease: 'power2.inOut', autoAlpha: 1 }, 0)
        .to(type, { duration: 1.4 * T, ease: 'power2.inOut', scale: 2.7, rotate: -90 }, 0)
        .to(lines, {
          keyframes: [
            { x: '20%', duration: 1 * T, ease: 'power1.inOut' },
            { x: '-200%', duration: 1.5 * T, ease: 'power1.in' },
          ],
          stagger: 0.04 * T,
        }, 0)
        .to(lines, {
          keyframes: [
            { opacity: 1, duration: 1 * T, ease: 'power1.in' },
            { opacity: 0, duration: 1.5 * T, ease: 'power1.in' },
          ],
        }, 0);
    };

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || !shouldHandle(e, a)) return;
      e.preventDefault();
      e.stopPropagation();
      if (busy) return;
      if (reduced) {
        // Quick fade instead of the kinetic type.
        busy = true;
        gsap.to(root, {
          duration: 0.3,
          autoAlpha: 1,
          onComplete: () => window.location.assign(a.href),
        });
        return;
      }
      playIn(a.href);
    };

    // Arrived through a transition: reveal. Otherwise start hidden.
    if (html.classList.contains(PT_FLAG)) {
      if (reduced) {
        html.classList.remove(PT_FLAG);
        gsap.fromTo(root, { autoAlpha: 1 }, { duration: 0.3, autoAlpha: 0 });
        try {
          sessionStorage.removeItem(PT_FLAG);
        } catch {}
      } else {
        playOut();
      }
    } else {
      setHidden();
    }

    // Back/forward restores pages from cache mid-transition: clear the cover.
    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      tl?.kill();
      busy = false;
      html.classList.remove(PT_FLAG);
      setHidden();
    };

    document.addEventListener('click', onClick, true);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('pageshow', onPageShow);
      tl?.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="pt" aria-hidden="true">
      <div ref={typeRef} className="pt-type">
        {LINES.map((line, i) => (
          <div key={i} className="pt-line">
            {line} {line} {line}
          </div>
        ))}
      </div>
    </div>
  );
}
