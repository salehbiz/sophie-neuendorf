import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutCvSection } from '@/components/sections/about/AboutCvSection';

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
      <AboutCvSection />
      <Footer />
    </div>
  );
}
