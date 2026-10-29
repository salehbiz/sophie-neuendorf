import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceDetailHeroSection } from '@/components/sections/services/ServiceDetailHeroSection';
import { ServiceDetailProcessSection } from '@/components/sections/services/ServiceDetailProcessSection';
import { ServiceDetailFaqSection } from '@/components/sections/services/ServiceDetailFaqSection';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/services/${slug}`);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <ServiceDetailHeroSection item={item} />
      <ServiceDetailProcessSection item={item} />
      <ServiceDetailFaqSection item={item} />
      <Footer />
    </div>
  );
}
