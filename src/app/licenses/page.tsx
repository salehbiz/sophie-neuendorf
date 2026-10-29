import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LicensesHeroSection } from '@/components/sections/utility/LicensesHeroSection';
import { LicensesContentSection } from '@/components/sections/utility/LicensesContentSection';

const meta = PAGE_METADATA['/licenses'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function LicensesPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <LicensesHeroSection />
      <LicensesContentSection />
      <Footer />
    </div>
  );
}
