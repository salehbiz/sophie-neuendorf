import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { HomePartnersSection } from '@/components/sections/home/HomePartnersSection';
import { HomeAboutUsSection } from '@/components/sections/home/HomeAboutUsSection';
import { HomeWorkSection } from '@/components/sections/home/HomeWorkSection';
import { HomeRolesSection } from '@/components/sections/home/HomeRolesSection';

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
      <HomePartnersSection />
      <HomeAboutUsSection />
      <HomeWorkSection />
      <HomeRolesSection />
      <Footer />
    </div>
  );
}
