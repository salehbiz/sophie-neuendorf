'use client';

import { useEffect, useRef } from 'react';
import type * as T from 'three';

// WebGL progressive blur (after Jorge Toloza's "WebGL Progressive Blur", ported from OGL to the
// Three.js the site already ships for the Press page). Each photo inside `selector` is redrawn on a
// fixed canvas as a plane that tracks its frame; the shader blurs it progressively toward the top
// and bottom edges of the screen and adds a faint animated TV grain. The first photo also gets the
// original's opening effect: a subtle 5% growth and the blur strength easing in over the first
// 57% of a screen of scroll.
//
// Changes from the original: the blur bands are measured in normalised screen height (the original
// divided pixels by world units, so the bands changed with pixel density), pixels outside the bands
// skip the 80-sample blur loop entirely, and native scroll replaces Lenis.

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform vec2 uImageSize;
  uniform vec2 uPlaneSize;
  uniform vec2 uResolution;
  uniform float uBlurStrength;
  uniform float uTime;
  uniform sampler2D tMap;

  varying vec2 vUv;

  // by @arthurstammet, https://shadertoy.com/view/tdXXRM
  float tvNoise(vec2 p, float ta, float tb) {
    return fract(sin(p.x * ta + p.y * tb) * 5678.);
  }
  vec3 draw(sampler2D image, vec2 uv) {
    return texture2D(image, uv).rgb;
  }
  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }
  // inspired by https://www.shadertoy.com/view/4tSyzy, @anastadunbar
  vec3 blur(vec2 uv, sampler2D image, float blurAmount, float gradient) {
    vec3 blurredImage = vec3(0.);
    #define repeats 40.
    for (float i = 0.; i < repeats; i++) {
      vec2 q = vec2(cos(degrees((i / repeats) * 360.)), sin(degrees((i / repeats) * 360.))) * (rand(vec2(i, uv.x + uv.y)) + blurAmount);
      vec2 uv2 = uv + (q * blurAmount * gradient);
      blurredImage += draw(image, uv2) / 2.;
      q = vec2(cos(degrees((i / repeats) * 360.)), sin(degrees((i / repeats) * 360.))) * (rand(vec2(i + 2., uv.x + uv.y + 24.)) + blurAmount);
      uv2 = uv + (q * blurAmount * gradient);
      blurredImage += draw(image, uv2) / 2.;
    }
    return blurredImage / repeats;
  }

  void main() {
    vec2 ratio = vec2(
      min((uPlaneSize.x / uPlaneSize.y) / (uImageSize.x / uImageSize.y), 1.0),
      min((uPlaneSize.y / uPlaneSize.x) / (uImageSize.y / uImageSize.x), 1.0)
    );
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    float t = uTime + 123.0;
    float ta = t * 0.654321;
    float tb = t * (ta * 0.123456);
    vec4 noise = vec4(1. - tvNoise(uv, ta, tb));

    // Blur bands: the bottom 24% and top 21% of the screen (the original's bands at 1x density).
    float y = gl_FragCoord.y / uResolution.y;
    float gradient = (smoothstep(0.785, 1.03, y) + smoothstep(0.24, 0.0, y)) * uBlurStrength;

    vec4 final = gradient > 0.001
      ? vec4(blur(uv, tMap, 0.08, gradient), 1.)
      : vec4(draw(tMap, uv), 1.);

    final = final - noise * 0.08;
    gl_FragColor = final;
  }
`;

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

type Media = {
  el: HTMLElement;
  mesh: T.Mesh<T.PlaneGeometry, T.ShaderMaterial>;
  blurStrength: number;
  scaleY: number;
};

export function ProgressiveBlur({ selector }: { selector: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Three.js is loaded on demand so it never weighs on the page's first load.
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import('three').then((THREE) => {
      if (!cancelled) cleanup = setup(THREE);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [selector]);

  const setup = (THREE: typeof T) => {
    const canvas = canvasRef.current;
    const section = document.querySelector<HTMLElement>(selector);
    if (!canvas || !section) return;
    const frames = Array.from(section.querySelectorAll<HTMLElement>('[data-blur]'));
    if (!frames.length) return;

    let renderer: T.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    } catch {
      return; // no WebGL: the normal <img> photos stay visible
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));

    const scene = new THREE.Scene();
    // Pixel-space camera: one unit = one CSS pixel, origin at the top-left of the viewport.
    const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -10, 10);
    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    const loader = new THREE.TextureLoader();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let disposed = false;

    const medias: Media[] = frames.map((el) => {
      const img = el.querySelector('img');
      const material = new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        uniforms: {
          tMap: { value: null },
          uPlaneSize: { value: new THREE.Vector2(1, 1) },
          uImageSize: { value: new THREE.Vector2(1, 1) },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uTime: { value: 100 * Math.random() },
          uBlurStrength: { value: 1 },
        },
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      scene.add(mesh);
      // Use the size the browser picked from the srcset, once the photo has loaded.
      const start = () =>
        loader.load(img!.currentSrc || img!.src, (texture) => {
          if (disposed) return texture.dispose();
          // No colour-space conversion: the raw shader outputs the texture's sRGB values as-is,
          // like the OGL original, so the photo keeps its exact colours.
          texture.generateMipmaps = false;
          texture.minFilter = THREE.LinearFilter;
          material.uniforms.tMap.value = texture;
          material.uniforms.uImageSize.value.set(texture.image.width, texture.image.height);
          mesh.visible = true;
          // Hand the photo over to WebGL only once its texture is ready.
          el.classList.add('is-gl');
        });
      if (img?.complete && img.naturalWidth) start();
      else img?.addEventListener('load', start, { once: true });
      return { el, mesh, blurStrength: 1, scaleY: 1 };
    });

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.right = w;
      camera.bottom = -h;
      camera.updateProjectionMatrix();
      const buffer = renderer.getDrawingBufferSize(new THREE.Vector2());
      medias.forEach((m) => m.mesh.material.uniforms.uResolution.value.copy(buffer));
    };
    resize();

    // Opening effect on the first photo, as in the original's hero: scroll progress over 57% of a screen.
    const heroProgress = () => {
      const p = easeInOut(Math.min(window.scrollY / (window.innerHeight * 0.57), 1));
      medias[0].scaleY = 1 + 0.05 * p;
      medias[0].blurStrength = 1 - 0.8 * (1 - p);
    };
    heroProgress();

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const vh = window.innerHeight;
      let anyVisible = false;
      medias.forEach((m) => {
        const r = m.el.getBoundingClientRect();
        const onScreen = r.bottom > 0 && r.top < vh;
        m.mesh.visible = onScreen && !!m.mesh.material.uniforms.tMap.value;
        if (!m.mesh.visible) return;
        anyVisible = true;
        const height = r.height * m.scaleY;
        m.mesh.scale.set(r.width, height, 1);
        m.mesh.position.set(r.left + r.width / 2, -(r.top + height / 2), 0);
        const u = m.mesh.material.uniforms;
        u.uPlaneSize.value.set(r.width, height);
        u.uBlurStrength.value = m.blurStrength;
        if (!reduced) u.uTime.value += 0.04;
      });
      if (anyVisible) renderer.render(scene, camera);
      else renderer.clear();
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', heroProgress, { passive: true });
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', heroProgress);
      frames.forEach((el) => el.classList.remove('is-gl'));
      medias.forEach((m) => {
        m.mesh.material.uniforms.tMap.value?.dispose();
        m.mesh.material.dispose();
      });
      geometry.dispose();
      renderer.dispose();
    };
  };

  return <canvas ref={canvasRef} className="pb-canvas" aria-hidden="true" />;
}
