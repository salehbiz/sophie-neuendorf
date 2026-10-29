import type { MetadataRoute } from 'next';
import { PAGE_METADATA } from '@/data/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://voyra.studio';
  return Object.keys(PAGE_METADATA)
    .filter(route => route !== '/404')
    .map(route => ({
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: new Date('2026-10-26T00:00:00.000Z'),
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1.0 : 0.8,
    }));
}
