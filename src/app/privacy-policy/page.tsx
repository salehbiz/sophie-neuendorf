import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PrivacyPolicyHeroSection } from '@/components/sections/legal/PrivacyPolicyHeroSection';
import { PrivacyPolicyContentSection } from '@/components/sections/legal/PrivacyPolicyContentSection';

export const metadata: Metadata = buildPageMetadata('/privacy-policy');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="white" />
      <PrivacyPolicyHeroSection />
      <PrivacyPolicyContentSection />
      <Footer />
    </div>
  );
}
