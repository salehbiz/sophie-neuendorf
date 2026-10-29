'use client';

import { useEffect, useRef } from 'react';

// Site-wide version of the floating-paths background (src/components/ui/floating-paths.tsx),
// drawn on one <canvas> instead of 72 animated SVG paths. The animated SVG forced a full-screen
// vector repaint every frame, which starved page rendering on this long, layered page.
// Same path geometry and timing as the component; tinted taupe, very faint.
const VIEW_W = 696;
const VIEW_H = 316;
const TINT = '107, 88, 72';
const STRENGTH = 0.22;
const FRAME_MS = 1000 / 30;

type FlowPath = { path: Path2D; length: number; width: number; alpha: number; duration: number; phase: number };

function buildPaths(position: number): FlowPath[] {
  const measure = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  return Array.from({ length: 36 }, (_, i) => {
    const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
    measure.setAttribute('d', d);
    return {
      path: new Path2D(d),
      length: measure.getTotalLength(),
      width: 0.5 + i * 0.03,
      alpha: Math.min(1, 0.1 + i * 0.03),
      duration: (20 + Math.random() * 10) * 1000,
      phase: Math.random(),
    };
  });
}

export function SiteFlow() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const paths = [...buildPaths(1), ...buildPaths(-1)];
    const strength = () => (window.innerWidth < 768 ? 0.18 : STRENGTH);
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };

    const draw = (time: number) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Stretch the 696x316 drawing to the screen, like preserveAspectRatio="none".
      ctx.setTransform(canvas.width / VIEW_W, 0, 0, canvas.height / VIEW_H, 0, 0);
      const k = strength();
      for (const p of paths) {
        // pathOffset 0 → 1 → 0 and opacity .3 → .6 → .3 over each path's duration, as in the component.
        const t = reduced ? 0.5 : ((time / p.duration + p.phase) % 1);
        const offset = reduced ? 0 : t < 0.5 ? t * 2 : 2 - t * 2;
        const pulse = reduced ? 0.45 : 0.3 + 0.3 * (1 - Math.abs(1 - t * 2));
        ctx.setLineDash([p.length * (1 - offset), p.length]);
        ctx.lineDashOffset = -p.length * offset;
        ctx.lineWidth = p.width;
        ctx.strokeStyle = `rgba(${TINT}, ${(p.alpha * pulse * k).toFixed(3)})`;
        ctx.stroke(p.path);
      }
    };

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (time - last < FRAME_MS) return;
      last = time;
      draw(time);
    };

    resize();
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);
    const onResize = () => {
      resize();
      if (reduced) draw(0);
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="site-flow" aria-hidden="true" />;
}
