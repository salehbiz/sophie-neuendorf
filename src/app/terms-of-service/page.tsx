import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TermsOfServiceHeroSection } from '@/components/sections/legal/TermsOfServiceHeroSection';
import { TermsOfServiceContentSection } from '@/components/sections/legal/TermsOfServiceContentSection';

export const metadata: Metadata = buildPageMetadata('/terms-of-service');

export default function Page() {
  return (
    <div className="page-wrapper pages-bg-black">
      <AnnouncementBar />
      <Navbar variant="white" />
      <TermsOfServiceHeroSection />
      <TermsOfServiceContentSection />
      <Footer />
    </div>
  );
}
