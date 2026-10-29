import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: '/works', destination: '/work', permanent: true }];
  },
};

export default nextConfig;
