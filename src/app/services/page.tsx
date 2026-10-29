import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicesHeroSection } from '@/components/sections/services/ServicesHeroSection';
import { ServicesIntroSection } from '@/components/sections/services/ServicesIntroSection';
import { ServicesListSection } from '@/components/sections/services/ServicesListSection';

export const metadata: Metadata = buildPageMetadata('/services');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <ServicesHeroSection />
      <ServicesIntroSection />
      <ServicesListSection />
      <Footer />
    </div>
  );
}
