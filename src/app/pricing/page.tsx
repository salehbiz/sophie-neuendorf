import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PricingHeroSection } from '@/components/sections/pricing/PricingHeroSection';
import { PricingPlansSection } from '@/components/sections/pricing/PricingPlansSection';
import { PricingCompareTableSection } from '@/components/sections/pricing/PricingCompareTableSection';
import { PricingFaqSection } from '@/components/sections/pricing/PricingFaqSection';

export const metadata: Metadata = buildPageMetadata('/pricing');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <PricingHeroSection />
      <PricingPlansSection />
      <PricingCompareTableSection />
      <PricingFaqSection />
      <Footer />
    </div>
  );
}
