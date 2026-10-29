import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WORKS, getWorkBySlug } from '@/data/works';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkDetailHeroSection } from '@/components/sections/work/WorkDetailHeroSection';
import { WorkDetailOverviewSection } from '@/components/sections/work/WorkDetailOverviewSection';
import { WorkDetailChallengeSection } from '@/components/sections/work/WorkDetailChallengeSection';
import { WorkDetailGallerySection } from '@/components/sections/work/WorkDetailGallerySection';
import { WorkDetailRelatedSection } from '@/components/sections/work/WorkDetailRelatedSection';
import { WorkDetailFaqSection } from '@/components/sections/work/WorkDetailFaqSection';

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/works/${slug}`);
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <WorkDetailHeroSection item={item} />
      <WorkDetailOverviewSection item={item} />
      <WorkDetailChallengeSection item={item} />
      <WorkDetailGallerySection item={item} />
      <WorkDetailRelatedSection item={item} />
      <WorkDetailFaqSection item={item} />
      <Footer />
    </div>
  );
}
