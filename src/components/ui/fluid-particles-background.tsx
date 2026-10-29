'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Fluid particles background (from 21st.dev), converted from Tailwind to plain CSS classes
// (see .fluid-particles in globals.css). Changes from the original: the animation loop is
// cancelled on unmount, the noise generator is created once, trails fade toward a configurable
// colour (the page background) instead of white, the frame rate is capped, and it pauses for
// reduced-motion visitors and hidden tabs.

interface FluidParticlesBackgroundProps {
  children?: React.ReactNode;
  particleCount?: number;
  noiseIntensity?: number;
  particleSize?: { min: number; max: number };
  /** RGB triplet for particles, e.g. "107, 88, 72". */
  particleColor?: string;
  /** Peak particle opacity at the middle of each particle's life. */
  maxOpacity?: number;
  /** RGB triplet the trails fade toward; match the surface behind the canvas. */
  trailColor?: string;
  /** Trail fade per frame (0 to 1); higher means shorter trails. */
  trailFade?: number;
  fps?: number;
  className?: string;
}

// Classic Perlin noise (the original component names it simplex3).
function createNoise() {
  const permutation = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37,
    240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
    33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146,
    158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
    63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100,
    109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
    59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153,
    101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246,
    97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49,
    192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
    222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
  ];
  const p = new Array(512);
  for (let i = 0; i < 256; i++) p[256 + i] = p[i] = permutation[i];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (t: number, a: number, b: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number, z: number) => {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  return (x: number, y: number, z: number) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = p[X] + Y;
    const AA = p[A] + Z;
    const AB = p[A + 1] + Z;
    const B = p[X + 1] + Y;
    const BA = p[B] + Z;
    const BB = p[B + 1] + Z;
    return lerp(
      w,
      lerp(v, lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)), lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))),
      lerp(
        v,
        lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
        lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1)),
      ),
    );
  };
}

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
}

export const FluidParticlesBackground = ({
  children,
  particleCount = 2000,
  noiseIntensity = 0.003,
  particleSize = { min: 0.5, max: 2 },
  particleColor = '0, 0, 0',
  maxOpacity = 0.15,
  trailColor = '255, 255, 255',
  trailFade = 0.12,
  fps = 60,
  className,
}: FluidParticlesBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { min: sizeMin, max: sizeMax } = particleSize;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return;

    const noise = createNoise();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frameMs = 1000 / fps;
    let raf = 0;
    let last = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth || window.innerWidth;
      canvas.height = canvas.clientHeight || window.innerHeight;
      ctx.fillStyle = `rgb(${trailColor})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (sizeMax - sizeMin) + sizeMin,
      life: Math.random() * 100,
      maxLife: 100 + Math.random() * 50,
    });
    const particles: Particle[] = Array.from({ length: particleCount }, spawn);

    const step = () => {
      // Fade the previous frame toward the trail colour to leave soft trails.
      ctx.fillStyle = `rgba(${trailColor}, ${trailFade})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const z = Date.now() * 0.0001;

      for (const particle of particles) {
        particle.life += 1;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        const opacity = Math.sin((particle.life / particle.maxLife) * Math.PI) * maxOpacity;
        const angle = noise(particle.x * noiseIntensity, particle.y * noiseIntensity, z) * Math.PI * 4;
        particle.x += Math.cos(angle) * 2;
        particle.y += Math.sin(angle) * 2;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = `rgba(${particleColor}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (time - last < frameMs) return;
      last = time;
      step();
    };

    if (reduced) {
      for (let i = 0; i < 40; i++) step();
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, noiseIntensity, sizeMin, sizeMax, particleColor, maxOpacity, trailColor, trailFade, fps]);

  return (
    <div className={cn('fluid-particles', className)}>
      <canvas ref={canvasRef} className="fluid-particles-canvas" />
      {children ? <div className="fluid-particles-content">{children}</div> : null}
    </div>
  );
};
