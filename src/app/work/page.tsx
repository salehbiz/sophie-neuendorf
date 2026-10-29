import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkCollabsSection } from '@/components/sections/works/WorkCollabsSection';

const meta = PAGE_METADATA['/work'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function WorksPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <WorkCollabsSection />
      <Footer />
    </div>
  );
}
