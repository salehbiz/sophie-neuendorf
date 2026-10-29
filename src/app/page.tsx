import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { HomeAboutUsSection } from '@/components/sections/home/HomeAboutUsSection';
import { HomeWorkSection } from '@/components/sections/home/HomeWorkSection';
import { HomeServiceSection } from '@/components/sections/home/HomeServiceSection';
import { HomeChooseSection } from '@/components/sections/home/HomeChooseSection';
import { HomeFaqSection } from '@/components/sections/home/HomeFaqSection';
import { HomeTestimonialSection } from '@/components/sections/home/HomeTestimonialSection';
import { HomeTickerSection } from '@/components/sections/home/HomeTickerSection';

const meta = PAGE_METADATA['/'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function HomePage() {
  return (
    <div className="main">
      <Navbar variant="default" />
      <HomeHeroSection />
      <HomeAboutUsSection />
      <HomeWorkSection />
      <HomeServiceSection />
      <HomeChooseSection />
      <HomeFaqSection />
      <HomeTestimonialSection />
      <HomeTickerSection />
      <Footer />
    </div>
  );
}
