import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets a production build run alongside `next dev` without sharing its .next folder.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    unoptimized: true,
  },
  // Photos and icons keep their file names when replaced, so cache them for a week (not "forever"),
  // revalidating in the background. Next's own /_next/static files are already cached immutably.
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/works', destination: '/work', permanent: true },
      { source: '/blogs', destination: '/press', permanent: true },
      // The old Wix site's page addresses, each sent to the page that replaced it.
      { source: '/home-1', destination: '/', permanent: true },
      { source: '/about-cv', destination: '/about', permanent: true },
      { source: '/brand-collaboration', destination: '/work', permanent: true },
      { source: '/media-library', destination: '/press', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      // Wix-hosted files: the only one linked was the "Download CV" PDF.
      { source: '/_files/:path*', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
