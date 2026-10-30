'use client';

import { useEffect, useRef, useState } from 'react';
import type * as T from 'three';
import { PRESS } from '@/data/press';
import { srcSet, variant } from '@/lib/responsive';

// Infinite vertical WebGL slider (after the Codegrid Three.js slider), pinned and driven by the
// page's own scroll instead of hijacking the wheel. Planes bend toward the viewer while moving,
// with the same smoothing, velocity tracking and distortion easing as the original, at half the
// distortion strength. Clicking a plane, or the title, opens that feature.

const config = {
  aspectRatio: 1.5,
  gap: 0.05,
  smoothing: 0.05,
  distortionStrength: 1.25,
  distortionSmoothing: 0.1,
};

// Fixed rhythm of plane heights (the original randomises them on every load).
const HEIGHTS = [1.25, 1, 1.45, 1.1, 1.35, 1.05, 1.5, 1.15, 1.3, 1];
const MAX_HEIGHT = 1.5;
const BG = 0xebe6de;
const LOADING = 0xe2dbd0;

const wrap = (value: number, range: number) => ((value % range) + range) % range;
const zeroPad = (n: number) => String(n).padStart(2, '0');

export function PressSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  // The still list replaces the slider for reduced motion, and whenever WebGL can't start.
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (still) return;
    // Three.js is loaded on demand so it never weighs on the page's first load.
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import('three')
      .then((THREE) => {
        if (!cancelled) cleanup = setup(THREE);
      })
      .catch(() => setStill(true));
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [still]);

  const setup = (THREE: typeof T) => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!section || !stage || !canvas) return;

    const total = PRESS.length;
    let renderer: T.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    } catch {
      setStill(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);

    const heights = PRESS.map((_, i) => HEIGHTS[i % HEIGHTS.length]);
    const offsets: number[] = [];
    let stack = 0;
    for (let i = 0; i < total; i++) {
      if (i === 0) {
        offsets.push(0);
        stack = heights[0] / 2;
      } else {
        stack += config.gap + heights[i] / 2;
        offsets.push(stack);
        stack += heights[i] / 2;
      }
    }
    const loopLength = stack + config.gap + heights[0] / 2;
    const halfLoop = loopLength / 2;

    // Decode photos off the main thread where the browser supports it (ImageBitmap); phones get
    // 1024px textures, larger screens 1600px. Safari (every iOS browser) and Firefox don't honour
    // the decode options three.js needs, so they use the plain image loader, as three's own loaders do.
    const ua = navigator.userAgent;
    const plainImages = /^((?!chrome|android).)*safari/i.test(ua) || /firefox/i.test(ua);
    const useBitmaps = typeof createImageBitmap === 'function' && !plainImages;
    const bitmapLoader = useBitmaps ? new THREE.ImageBitmapLoader().setOptions({ imageOrientation: 'flipY' }) : null;
    const textureLoader = new THREE.TextureLoader();
    const textureWidth = window.innerWidth < 768 ? 1024 : 1600;
    const loadTexture = (url: string, done: (texture: T.Texture) => void) => {
      if (bitmapLoader) {
        bitmapLoader.load(url, (bitmap) => {
          const texture = new THREE.Texture(bitmap as unknown as HTMLImageElement);
          texture.flipY = false; // already flipped while decoding
          texture.needsUpdate = true;
          done(texture);
        });
      } else {
        textureLoader.load(url, done);
      }
    };
    const meshes: T.Mesh<T.PlaneGeometry, T.MeshBasicMaterial>[] = [];
    const originals: Float32Array[] = [];

    PRESS.forEach((item, i) => {
      const height = heights[i];
      const width = height * config.aspectRatio;
      const geometry = new THREE.PlaneGeometry(width, height, 32, 16);
      const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, color: LOADING });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { offset: offsets[i], index: i };
      originals.push(Float32Array.from(geometry.attributes.position.array));

      loadTexture(variant(item.img, textureWidth), (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        material.map = texture;
        material.color.set(0xffffff);
        material.needsUpdate = true;
        const ratio = texture.image.width / texture.image.height / (width / height);
        if (ratio > 1) mesh.scale.y = 1 / ratio;
        else mesh.scale.x = ratio;
      });

      scene.add(mesh);
      meshes.push(mesh);
    });

    // Last strength applied per plane: flat planes that stay flat skip the per-vertex work.
    const applied = new Array(PRESS.length).fill(NaN);
    const applyDistortion = (i: number, positionY: number, strength: number) => {
      if (Math.abs(strength) < 1e-4 && Math.abs(applied[i]) < 1e-4) return;
      applied[i] = strength;
      const positions = meshes[i].geometry.attributes.position;
      const original = originals[i];
      for (let v = 0; v < positions.count; v++) {
        const x = original[v * 3];
        const y = original[v * 3 + 1];
        const distance = Math.sqrt(x * x + (positionY + y) ** 2);
        const falloff = Math.max(0, 1 - distance / 2);
        const bend = Math.pow(Math.sin((falloff * Math.PI) / 2), 1.5);
        positions.setZ(v, bend * strength);
      }
      positions.needsUpdate = true;
    };

    const resize = () => {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Pull the camera back on narrow screens so the widest plane still fits.
      const fitZ = (MAX_HEIGHT * config.aspectRatio) / 0.8 / (2 * Math.tan(THREE.MathUtils.degToRad(22.5)) * camera.aspect);
      camera.position.z = Math.max(4.3, fitZ);
      camera.updateProjectionMatrix();
    };
    resize();

    // Page scroll through the pinned section maps to the first..last slide.
    const scrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      return range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;
    };

    let scrollTarget = scrollProgress() * offsets[total - 1];
    let scrollPosition = scrollTarget;
    let lastFrameTime = 0;
    let distortionAmount = 0;
    let distortionTarget = 0;
    let velocityPeak = 0;
    let scrollDirection = 0;
    let directionTarget = 0;
    const velocityHistory = [0, 0, 0, 0, 0];
    let activeIndex = -1;
    let raf = 0;

    const onScroll = () => {
      const next = scrollProgress() * offsets[total - 1];
      distortionTarget = Math.min(1, distortionTarget + Math.abs(next - scrollTarget) * 0.4);
      scrollTarget = next;
    };

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hit = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const found = raycaster.intersectObjects(meshes)[0];
      return found ? (found.object.userData.index as number) : -1;
    };
    const onMove = (e: PointerEvent) => {
      canvas.style.cursor = hit(e) >= 0 ? 'pointer' : 'default';
    };
    const onClick = (e: MouseEvent) => {
      const index = hit(e);
      if (index >= 0) window.open(PRESS[index].url, '_blank', 'noopener,noreferrer');
    };

    const animate = (time: number) => {
      raf = requestAnimationFrame(animate);

      // Skip work while the section is off screen.
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        lastFrameTime = 0;
        return;
      }

      const deltaTime = lastFrameTime ? (time - lastFrameTime) / 1000 : 0.016;
      lastFrameTime = time;
      const previousScroll = scrollPosition;
      scrollPosition += (scrollTarget - scrollPosition) * config.smoothing;
      const frameDelta = scrollPosition - previousScroll;

      if (Math.abs(frameDelta) > 0.00001) directionTarget = frameDelta > 0 ? 1 : -1;
      scrollDirection += (directionTarget - scrollDirection) * 0.08;

      const velocity = Math.abs(frameDelta) / Math.max(deltaTime, 0.001);
      velocityHistory.push(velocity);
      velocityHistory.shift();
      const averageVelocity = velocityHistory.reduce((a, b) => a + b) / velocityHistory.length;
      if (averageVelocity > velocityPeak) velocityPeak = averageVelocity;
      const isDecelerating = averageVelocity / (velocityPeak + 0.001) < 0.7 && velocityPeak > 0.5;
      velocityPeak *= 0.99;

      if (velocity > 0.05) distortionTarget = Math.max(distortionTarget, Math.min(1, velocity * 0.1));
      if (isDecelerating || averageVelocity < 0.2) distortionTarget *= isDecelerating ? 0.95 : 0.855;
      distortionAmount += (distortionTarget - distortionAmount) * config.distortionSmoothing;
      const signedDistortion = distortionAmount * scrollDirection;

      let closestDistance = Infinity;
      let closestIndex = 0;
      meshes.forEach((mesh, i) => {
        let y = -(mesh.userData.offset - wrap(scrollPosition, loopLength));
        y = wrap(y + halfLoop, loopLength) - halfLoop;
        mesh.position.y = y;
        if (Math.abs(y) < closestDistance) {
          closestDistance = Math.abs(y);
          closestIndex = i;
        }
        if (Math.abs(y) < halfLoop + MAX_HEIGHT) {
          applyDistortion(i, y, config.distortionStrength * signedDistortion);
        }
      });

      if (closestIndex !== activeIndex) {
        activeIndex = closestIndex;
        setActive(closestIndex);
      }

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('click', onClick);
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material.map?.image as ImageBitmap | undefined)?.close?.();
        mesh.material.map?.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();
    };
  };

  if (still) {
    return (
      <section className="section ps-still">
        <h1 className="wc-title ps-still-title">Press &amp; Features</h1>
        <ol className="ps-list">
          {PRESS.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  srcSet={srcSet(item.img)}
                  sizes="(max-width: 767px) 90vw, 25vw"
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ps-list-title">{item.title}</span>
                <span className="ps-list-meta">
                  {item.year} · {item.city}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  const item = PRESS[active];
  return (
    <section ref={sectionRef} className="ps" style={{ height: `calc(100svh + ${PRESS.length * 45}svh)` }}>
      <div ref={stageRef} className="ps-stage">
        <canvas ref={canvasRef} className="ps-canvas" aria-hidden="true" />
        <h1 className="ps-label">Press &amp; Features</h1>
        <div className="ps-info">
          <a className="ps-title" href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
            <span className="ps-meta">
              {item.year} · {item.city}
            </span>
          </a>
          <span className="ps-count">
            {zeroPad(active + 1)} / {zeroPad(PRESS.length)}
          </span>
        </div>
      </div>

      {/* The canvas is decorative; this list carries the links for screen readers and search. */}
      <ol className="ps-sr">
        {PRESS.map((p) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.title}, {p.year}, {p.city}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
