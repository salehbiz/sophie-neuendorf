import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkHeroSection } from '@/components/sections/work/WorkHeroSection';
import { WorkPortfolioGridSection } from '@/components/sections/work/WorkPortfolioGridSection';

export const metadata: Metadata = buildPageMetadata('/work');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <WorkHeroSection />
      <WorkPortfolioGridSection />
      <Footer />
    </div>
  );
}
