'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

// Ported from the Fat Bear site's animated footer, itself adapted from VengeanceUI's
// animated-footer (MIT, © Ashutoshx7): canvas ASCII hands, pointer illumination and a
// centre-out character reveal. Hand artwork is bundled locally in /assets/sophie/footer.
const ARTWORK = ['/assets/sophie/footer/hand-left.jpg', '/assets/sophie/footer/hand-right.jpg'];
const RAMP = '....::=+xX#0369';
const GLYPH = '#8a7262';
const LIT_CELL = '#d0b7a2';
const LIT_GLYPH = '#2a221d';

const LINKS = [
  { numeral: 'I', label: 'Work', href: '/works' },
  { numeral: 'II', label: 'Press', href: '/blogs' },
  { numeral: 'III', label: 'About', href: '/about' },
  { numeral: 'IV', label: 'Contact', href: '/contact' },
  { numeral: 'V', label: 'Instagram', href: 'https://www.instagram.com/sophieneuendorf/', external: true },
  { numeral: 'VI', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sophie-neuendorf-4a15461a', external: true },
];

const WORDMARK = 'Sophie Neuendorf';

type Cell = { x: number; y: number; glyph: string; until: number };

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current!;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let visible = false;
    let raf = 0;
    const scenes: { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; cells: Cell[]; height: number }[] = [];
    const images: HTMLImageElement[] = [];
    const pointer = { x: 0, y: 0 };
    const drift = { x: 0, y: 0 };
    const context = gsap.context(() => {}, el);
    let timeline: gsap.core.Timeline;

    context.add(() => {
      timeline = gsap
        .timeline({ paused: true })
        .fromTo('[data-footer-char]', { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: 'power3.out', stagger: { each: 0.035, from: 'center' } }, 0)
        .fromTo('.af-art', { opacity: 0, x: (i: number) => (i === 0 ? -120 : 120) }, { opacity: 1, x: 0, duration: 1.4, ease: 'power3.out' }, 0)
        .fromTo('.af-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.1);
    });

    const draw = () => {
      raf = 0;
      if (disposed || !visible) return;
      drift.x += (pointer.x - drift.x) * 0.07;
      drift.y += (pointer.y - drift.y) * 0.07;
      scenes.forEach(({ canvas, ctx, cells, height }, index) => {
        ctx.clearRect(0, 0, 800, height);
        const now = performance.now();
        cells.forEach((cell) => {
          const lit = cell.until > now;
          if (lit) {
            ctx.fillStyle = LIT_CELL;
            ctx.fillRect(cell.x, cell.y, 10, 10);
          }
          ctx.fillStyle = lit ? LIT_GLYPH : GLYPH;
          ctx.fillText(cell.glyph, cell.x, cell.y + 9);
        });
        const still = preference.matches;
        canvas.style.transform = `translate(${still ? 0 : drift.x * (index ? 1 : -1)}px,${still ? 0 : drift.y}px)`;
      });
      if (!preference.matches) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!raf && visible && !disposed) raf = requestAnimationFrame(draw);
    };

    let loadedArtwork = false;
    const loadArtwork = () => {
      if (loadedArtwork || disposed) return;
      loadedArtwork = true;
      el.querySelectorAll<HTMLCanvasElement>('.af-art canvas').forEach((canvas, index) => {
        const image = new Image();
        images.push(image);
        image.onload = () => {
          if (disposed) return;
          try {
            const sampler = document.createElement('canvas');
            sampler.width = 80;
            sampler.height = Math.max(1, Math.round((80 * image.naturalHeight) / image.naturalWidth));
            const sample = sampler.getContext('2d')!;
            sample.drawImage(image, 0, 0, 80, sampler.height);
            const pixels = sample.getImageData(0, 0, 80, sampler.height).data;
            const cells: Cell[] = [];
            for (let y = 0; y < sampler.height; y++) {
              for (let x = 0; x < 80; x++) {
                const n = (y * 80 + x) * 4;
                const light = (pixels[n] * 0.299 + pixels[n + 1] * 0.587 + pixels[n + 2] * 0.114) / 255;
                const glyph = RAMP[Math.min(RAMP.length - 1, Math.floor((1 - light) * RAMP.length))];
                if (glyph !== '.' && pixels[n + 3] > 128) cells.push({ x: x * 10, y: y * 10, glyph, until: 0 });
              }
            }
            canvas.width = 800;
            canvas.height = sampler.height * 10;
            const ctx = canvas.getContext('2d')!;
            ctx.font = '10px ui-monospace, Menlo, monospace';
            scenes.push({ canvas, ctx, cells, height: canvas.height });
            start();
          } catch {
            canvas.hidden = true;
          }
        };
        image.onerror = () => {
          canvas.hidden = true;
        };
        image.src = ARTWORK[index];
      });
    };

    const move = (event: PointerEvent) => {
      if (preference.matches) return;
      const rect = el.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 16;
      scenes.forEach((scene) => {
        const box = scene.canvas.getBoundingClientRect();
        if (!box.width) return;
        const x = ((event.clientX - box.left) / box.width) * 800;
        const y = ((event.clientY - box.top) / box.height) * scene.height;
        scene.cells.forEach((cell) => {
          if (Math.hypot(cell.x - x, cell.y - y) < 55) cell.until = performance.now() + 320;
        });
      });
    };

    const reset = () => {
      pointer.x = pointer.y = 0;
    };
    const change = () => {
      if (preference.matches) {
        timeline.progress(1).pause();
        reset();
      }
      start();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (visible) {
          loadArtwork();
          if (preference.matches) timeline.progress(1).pause();
          else timeline.play();
          start();
        } else {
          cancelAnimationFrame(raf);
          raf = 0;
          if (!preference.matches) timeline.reverse();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    preference.addEventListener('change', change);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    if (preference.matches) timeline!.progress(1).pause();

    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(raf);
      images.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
      preference.removeEventListener('change', change);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
      context.revert();
    };
  }, []);

  return (
    <footer ref={root} className="animated-footer">
      <div className="af-content">
        <div>
          <p className="af-eyebrow">Contact</p>
          <p className="af-invitation">
            Fine Art | Finance | Technology.
            <br />
            <em>New York, London, Berlin, Paris, and Madrid.</em>
          </p>
          <a href="mailto:info@neuendorfteba.com" className="af-button">
            info@neuendorfteba.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav aria-label="Site">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <small>{link.numeral}</small>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="af-art af-art-left" aria-hidden="true">
        <canvas />
      </div>
      <div className="af-art af-art-right" aria-hidden="true">
        <canvas />
      </div>
      <h2 className="af-wordmark" aria-label={WORDMARK}>
        {Array.from(WORDMARK).map((letter, i) => (
          <span className="af-mask" key={i}>
            <span data-footer-char aria-hidden="true">
              {letter === ' ' ? ' ' : letter}
            </span>
          </span>
        ))}
      </h2>
      <div className="af-bottom">
        <span>
          Sophie Neuendorf · Condesa de Teba · <a href="tel:+491723176317">+49 172 3176317</a>
        </span>
        <small>
          <a href="/privacy">Privacy</a> · © {new Date().getFullYear()} Sophie Neuendorf
        </small>
      </div>
    </footer>
  );
}
