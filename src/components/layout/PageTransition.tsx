'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';

// Kinetic typography page transition (after the Codrops "Kinetic Typography Page Transition"),
// played between pages. Same choreography and easings as the original, compressed to about 40%
// of its length.
//
// One continuous flow: on click the next page is prefetched, "in" covers the screen, the route
// swaps client-side while covered, and "out" follows straight on to reveal the new page. There is
// no full page load in between, so nothing pauses mid-transition.

const T = 0.42; // timing factor against the original durations
const ROUTE_TIMEOUT = 5000; // fall back to a normal page load if the route never settles

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

const targetUrl = (e: MouseEvent, a: HTMLAnchorElement) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return null;
  const url = new URL(a.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  // Same page (or just a #hash on it): nothing to transition.
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;
  return url;
};

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  // Resolves when the new route has rendered (see the pathname effect below).
  const routeWait = useRef<{ path: string; resolve: () => void } | null>(null);

  useEffect(() => {
    const wait = routeWait.current;
    if (wait && pathname === wait.path) {
      routeWait.current = null;
      // Let the new page paint once before revealing it.
      requestAnimationFrame(() => requestAnimationFrame(wait.resolve));
    }
  }, [pathname]);

  useEffect(() => {
    const root = rootRef.current;
    const type = typeRef.current;
    if (!root || !type) return;
    const lines = Array.from(type.children) as HTMLElement[];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let busy = false;
    let tl: gsap.core.Timeline | null = null;

    const setHidden = () => {
      gsap.set(root, { autoAlpha: 0 });
      gsap.set(type, { scale: 1, rotate: 0 });
      gsap.set(lines, { x: '0%', opacity: 0 });
    };
    setHidden();

    const go = (url: URL) =>
      new Promise<void>((resolve) => {
        const path = url.pathname;
        const timer = window.setTimeout(() => window.location.assign(url.href), ROUTE_TIMEOUT);
        routeWait.current = {
          path,
          resolve: () => {
            window.clearTimeout(timer);
            window.scrollTo(0, 0);
            resolve();
          },
        };
        router.push(url.pathname + url.search + url.hash, { scroll: false });
      });

    // "out": from the covered state back to the page, as in the original's close timeline. It starts
    // the moment "in" ends; if the new page is not ready by the reveal point, the timeline holds there
    // with the type on screen (never an empty cover) and resumes as soon as the page is in.
    const out = (ready: Promise<void>) => {
      const reveal = 2.3 * T * 0.7; // the original shows its items at 70% of the type's return
      let isReady = false;
      const t = gsap
        .timeline({
          onComplete: () => {
            setHidden();
            busy = false;
          },
        })
        .to(type, { duration: 1.4 * T, ease: 'power2.inOut', scale: 1, rotate: 0 }, 1.2 * T)
        .to(lines, { duration: 2.3 * T, ease: 'back', x: '0%', stagger: -0.04 * T }, 0)
        .to(lines, {
          keyframes: [
            { opacity: 1, duration: 1 * T, ease: 'power1.in' },
            { opacity: 0, duration: 1.5 * T, ease: 'power1.in' },
          ],
        }, 0)
        .addPause(reveal, () => {
          if (isReady) t.play();
        })
        .to(root, { duration: 0.8 * T * 1.6, ease: 'power2.inOut', autoAlpha: 0 }, reveal);
      ready.then(() => {
        isReady = true;
        if (t.paused()) t.play();
      });
      return t;
    };

    const transition = (url: URL) => {
      busy = true;
      router.prefetch(url.pathname + url.search);
      let routeReady: Promise<void> | null = null;

      gsap.set(lines, { x: '0%', opacity: 0.06 });
      const inTl = gsap
        .timeline()
        .to(root, { duration: 0.8 * T * 1.4, ease: 'power2.inOut', autoAlpha: 1 }, 0)
        // Swap the page as soon as the screen is fully covered; the type keeps sweeping meanwhile.
        .call(() => {
          routeReady = go(url);
        }, undefined, 0.8 * T * 1.4)
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
      // Played back to back, the end of "in" (lines swept off and faded) and the start of "out"
      // (lines returning from off screen) would leave an empty cover. So "out" takes over at 70% of
      // "in", while the type is still on screen: the lines reverse mid-sweep and come straight back.
      // It waits for the new page only at its reveal point.
      inTl.call(() => {
        inTl.kill();
        tl = out(routeReady ?? Promise.resolve());
      }, undefined, inTl.duration() * 0.7);
      tl = inTl;
    };

    const fade = (url: URL) => {
      busy = true;
      gsap.to(root, {
        duration: 0.25,
        autoAlpha: 1,
        onComplete: () => {
          go(url).then(() =>
            gsap.to(root, {
              duration: 0.25,
              autoAlpha: 0,
              onComplete: () => {
                busy = false;
              },
            }),
          );
        },
      });
    };

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const url = targetUrl(e, a);
      if (!url) return;
      e.preventDefault();
      e.stopPropagation();
      if (busy) return;
      if (reduced) fade(url);
      else transition(url);
    };

    // Start loading a page as soon as its link is hovered or touched, so it is usually ready by the click.
    const prefetched = new Set<string>();
    const onIntent = (e: Event) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== '_self')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (prefetched.has(url.pathname)) return;
      prefetched.add(url.pathname);
      router.prefetch(url.pathname + url.search);
    };

    document.addEventListener('click', onClick, true);
    document.addEventListener('pointerover', onIntent, { passive: true });
    document.addEventListener('touchstart', onIntent, { passive: true });
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('pointerover', onIntent);
      document.removeEventListener('touchstart', onIntent);
      tl?.kill();
    };
  }, [router]);

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
