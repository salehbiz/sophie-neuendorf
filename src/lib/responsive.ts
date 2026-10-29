import variants from '@/data/image-variants.json';

// Responsive photo helpers. Every site photo has WebP variants next to it
// (<name>-<width>.webp, built by scripts/make-responsive-images.sh and listed in
// src/data/image-variants.json); the original JPEG stays as the `src` fallback.

const VARIANTS = variants as Record<string, number[]>;

const stem = (src: string) => src.replace(/\.[a-z]+$/i, '');

/** srcset listing the WebP variants of `src`, or undefined if it has none. */
export function srcSet(src: string): string | undefined {
  const widths = VARIANTS[src];
  if (!widths) return undefined;
  return widths.map((w) => `${stem(src)}-${w}.webp ${w}w`).join(', ');
}

/** The largest WebP variant of `src` no wider than `maxWidth` (for WebGL textures). */
export function variant(src: string, maxWidth: number): string {
  const widths = VARIANTS[src];
  if (!widths) return src;
  const fit = widths.filter((w) => w <= maxWidth);
  const w = fit.length ? fit[fit.length - 1] : widths[0];
  return `${stem(src)}-${w}.webp`;
}

/** Adds srcset + sizes to every <img> in an HTML string whose src has variants. */
export function withSrcSet(html: string, sizes: string): string {
  return html.replace(/<img\b([^>]*?)\ssrc="([^"]+)"([^>]*?)\/?>/g, (tag, before: string, src: string, after: string) => {
    const set = srcSet(src);
    if (!set || /\ssrcset=/.test(tag)) return tag;
    return `<img${before} src="${src}" srcset="${set}" sizes="${sizes}"${after}/>`;
  });
}
