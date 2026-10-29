import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactHeroSection } from '@/components/sections/contact/ContactHeroSection';
import { ContactFormAndInfoSection } from '@/components/sections/contact/ContactFormAndInfoSection';
import { ContactNewsletterSection } from '@/components/sections/contact/ContactNewsletterSection';
import { ContactFaqSection } from '@/components/sections/contact/ContactFaqSection';

export const metadata: Metadata = buildPageMetadata('/contact');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <ContactHeroSection />
      <ContactFormAndInfoSection />
      <ContactNewsletterSection />
      <ContactFaqSection />
      <Footer />
    </div>
  );
}
