import type { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { WORKS } from '@/data/works';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blogs';
import { MEMBERS } from '@/data/members';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://conax.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about-us',
    '/services',
    '/work',
    '/blog',
    '/pricing',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const dynamicRoutes = [
    ...SERVICES.map((s) => s.route),
    ...WORKS.map((w) => w.route),
    ...BLOG_POSTS.map((b) => b.route),
    ...BLOG_CATEGORIES.map((c) => c.route),
    ...MEMBERS.map((m) => m.route),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    lastModified: new Date('2026-10-29'),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
