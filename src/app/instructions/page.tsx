import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InstructionsHeroSection } from '@/components/sections/utility/InstructionsHeroSection';
import { InstructionsContentSection } from '@/components/sections/utility/InstructionsContentSection';

const meta = PAGE_METADATA['/instructions'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function InstructionsPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <InstructionsHeroSection />
      <InstructionsContentSection />
      <Footer />
    </div>
  );
}
