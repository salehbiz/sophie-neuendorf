import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StyleGuideHeroSection } from '@/components/sections/utility/StyleGuideHeroSection';
import { StyleGuideContentSection } from '@/components/sections/utility/StyleGuideContentSection';

const meta = PAGE_METADATA['/style-guide'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function StyleGuidePage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <StyleGuideHeroSection />
      <StyleGuideContentSection />
      <Footer />
    </div>
  );
}
