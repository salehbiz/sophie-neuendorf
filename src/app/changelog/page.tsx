import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChangelogHeroSection } from '@/components/sections/utility/ChangelogHeroSection';
import { ChangelogContentSection } from '@/components/sections/utility/ChangelogContentSection';

const meta = PAGE_METADATA['/changelog'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function ChangelogPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <ChangelogHeroSection />
      <ChangelogContentSection />
      <Footer />
    </div>
  );
}
