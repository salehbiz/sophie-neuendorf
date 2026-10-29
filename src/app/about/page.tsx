import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHeroSection } from '@/components/sections/about/AboutHeroSection';
import { AboutStorySection } from '@/components/sections/about/AboutStorySection';
import { AboutPassionSection } from '@/components/sections/about/AboutPassionSection';
import { AboutTestimonialSection } from '@/components/sections/about/AboutTestimonialSection';

const meta = PAGE_METADATA['/about'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function AboutPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutPassionSection />
      <AboutTestimonialSection />
      <Footer />
    </div>
  );
}
