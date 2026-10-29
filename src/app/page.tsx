import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar, PageTransitionOverlay } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { HomeAboutIntroSection } from '@/components/sections/home/HomeAboutIntroSection';
import { HomeOurApproachSection } from '@/components/sections/home/HomeOurApproachSection';
import { HomeWhyChooseUsSection } from '@/components/sections/home/HomeWhyChooseUsSection';
import { HomeIndicatorSection } from '@/components/sections/home/HomeIndicatorSection';
import { HomeServicesSection } from '@/components/sections/home/HomeServicesSection';
import { HomeShowreelVideoSection } from '@/components/sections/home/HomeShowreelVideoSection';
import { HomeShowreelCaptionSection } from '@/components/sections/home/HomeShowreelCaptionSection';
import { HomeFeaturedProjectsSection } from '@/components/sections/home/HomeFeaturedProjectsSection';
import { HomePartnerLogosSection } from '@/components/sections/home/HomePartnerLogosSection';
import { HomeAchievementsSection } from '@/components/sections/home/HomeAchievementsSection';
import { HomeTestimonialsSection } from '@/components/sections/home/HomeTestimonialsSection';
import { HomeTeamSection } from '@/components/sections/home/HomeTeamSection';
import { HomePricingSection } from '@/components/sections/home/HomePricingSection';
import { HomeNewsletterSection } from '@/components/sections/home/HomeNewsletterSection';
import { HomeBlogSection } from '@/components/sections/home/HomeBlogSection';
import { HomeFaqSection } from '@/components/sections/home/HomeFaqSection';

export const metadata: Metadata = buildPageMetadata('/');

export default function Page() {
  return (
    <div className="page-wrapper">
      <PageTransitionOverlay />
      <AnnouncementBar />
      <Navbar variant="white" />
      <HomeHeroSection />
      <HomeAboutIntroSection />
      <HomeOurApproachSection />
      <HomeWhyChooseUsSection />
      <HomeIndicatorSection />
      <HomeServicesSection />
      <HomeShowreelVideoSection />
      <HomeShowreelCaptionSection />
      <HomeFeaturedProjectsSection />
      <HomePartnerLogosSection />
      <HomeAchievementsSection />
      <HomeTestimonialsSection />
      <HomeTeamSection />
      <HomePricingSection />
      <HomeNewsletterSection />
      <HomeBlogSection />
      <HomeFaqSection />
      <Footer />
    </div>
  );
}
