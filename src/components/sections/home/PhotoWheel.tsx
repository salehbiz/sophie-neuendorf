'use client';

import { useEffect, useRef } from 'react';
import { srcSet } from '@/lib/responsive';

export interface WheelPhoto {
  src: string;
  alt: string;
  position?: string;
}

interface PhotoWheelProps {
  photos: WheelPhoto[];
  /** Pinned stage content shown above the wheel (rendered as raw HTML so the GSAP engine can bind to it). */
  headHtml: string;
  /** How many times the photo set repeats around the ring, so the circle never runs out. */
  repeat?: number;
}

const BASE_SPEED = 7; // degrees per second when idle
const SCROLL_BOOST = 0.03; // extra degrees per pixel scrolled
const START_SCALE = 0.3;
const GROW_DISTANCE = 1.15; // viewport heights scrolled (from the section entering) to reach full size

/**
 * Pinned "photo wheel": a full ring of square photos turns slowly on its own, centred below the
 * viewport so only the top arc shows. The stage starts growing from a small window as soon as it
 * enters from below, is nearly full screen by the time it pins, then scrolls away still spinning.
 * Plain scroll + rAF, no extra dependencies.
 */
export function PhotoWheel({ photos, headHtml, repeat = 2 }: PhotoWheelProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const ring = Array.from({ length: repeat }, () => photos).flat();

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const frame = frameRef.current;
    const wheel = wheelRef.current;
    if (!track || !stage || !frame || !wheel) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = Array.from(wheel.children) as HTMLElement[];
    const stepDeg = 360 / cards.length;

    let angle = 0;
    let lastTime = 0;
    let lastScroll = window.scrollY;
    let raf = 0;
    let visible = false;

    const layout = () => {
      const vw = stage.clientWidth;
      const vh = stage.clientHeight;
      const mobile = vw < 768;
      const card = mobile ? vw * 0.82 : Math.min(vw * 0.46, vh * 0.78, 900);
      // Ring spacing keeps neighbours edge to edge once tilted.
      const radius = Math.max((card * 1.07) / (stepDeg * (Math.PI / 180)), card * 1.4);

      wheel.style.setProperty('--card', `${card}px`);
      wheel.style.setProperty('--radius', `${radius}px`);
      wheel.style.left = `${vw / 2}px`;
      wheel.style.top = `${vh * (mobile ? 0.66 : 0.7) + radius}px`;
      cards.forEach((el, i) => el.style.setProperty('--angle', `${i * stepDeg}deg`));
    };

    // 0 when the section's top edge enters at the bottom of the screen, 1 once full size.
    const growProgress = () => {
      const vh = window.innerHeight;
      const entered = vh - track.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, entered / (vh * GROW_DISTANCE)));
    };

    const currentScale = () => {
      if (reduced) return 1;
      const t = growProgress();
      const eased = 1 - Math.pow(1 - t, 2);
      return START_SCALE + (1 - START_SCALE) * eased;
    };

    const tick = (time: number) => {
      const dt = lastTime ? Math.min(0.05, (time - lastTime) / 1000) : 0;
      lastTime = time;

      const scrollY = window.scrollY;
      const scrolled = Math.min(Math.abs(scrollY - lastScroll), 200);
      lastScroll = scrollY;

      if (!reduced) angle -= BASE_SPEED * dt + scrolled * SCROLL_BOOST;
      wheel.style.transform = `rotate(${angle}deg)`;
      frame.style.transform = `scale(${currentScale()})`;

      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    const start = () => {
      if (raf) return;
      lastTime = 0;
      lastScroll = window.scrollY;
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    observer.observe(track);

    const onResize = () => {
      layout();
      frame.style.transform = `scale(${currentScale()})`;
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, [ring.length]);

  return (
    <div ref={trackRef} className="about-wheel-track">
      <div ref={stageRef} className="about-wheel-stage">
        <div className="about-wheel-text" dangerouslySetInnerHTML={{ __html: headHtml }} />
        <div ref={frameRef} className="about-wheel-frame">
          <div ref={wheelRef} className="about-wheel" aria-label="Photos of Sophie Neuendorf">
            {ring.map((photo, i) => (
              <div key={i} className="about-wheel-card" aria-hidden={i >= photos.length || undefined}>
                <img
                  src={photo.src}
                  srcSet={srcSet(photo.src)}
                  sizes="(max-width: 767px) 45vw, 20vw"
                  alt={i < photos.length ? photo.alt : ''}
                  loading="lazy"
                  decoding="async"
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
