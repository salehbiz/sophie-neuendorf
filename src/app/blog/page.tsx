import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogHeroSection } from '@/components/sections/blog/BlogHeroSection';
import { BlogFilterAndGridSection } from '@/components/sections/blog/BlogFilterAndGridSection';
import { BlogNewsletterSection } from '@/components/sections/blog/BlogNewsletterSection';

export const metadata: Metadata = buildPageMetadata('/blog');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <BlogHeroSection />
      <BlogFilterAndGridSection />
      <BlogNewsletterSection />
      <Footer />
    </div>
  );
}
