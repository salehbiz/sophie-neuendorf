import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection';
import { AboutPhilosophySection } from '@/components/sections/about/AboutPhilosophySection';
import { AboutFeaturesSection } from '@/components/sections/about/AboutFeaturesSection';
import { AboutWhyChooseUsSection } from '@/components/sections/about/AboutWhyChooseUsSection';
import { AboutAchievementsSection } from '@/components/sections/about/AboutAchievementsSection';
import { AboutStudioGallerySection } from '@/components/sections/about/AboutStudioGallerySection';
import { AboutTeamSection } from '@/components/sections/about/AboutTeamSection';
import { AboutNewsletterSection } from '@/components/sections/about/AboutNewsletterSection';

export const metadata: Metadata = buildPageMetadata('/about-us');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutFeaturesSection />
      <AboutWhyChooseUsSection />
      <AboutAchievementsSection />
      <AboutStudioGallerySection />
      <AboutTeamSection />
      <AboutNewsletterSection />
      <Footer />
    </div>
  );
}
