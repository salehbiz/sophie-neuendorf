import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PressSlider } from '@/components/sections/press/PressSlider';

const meta = PAGE_METADATA['/press'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function PressPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <PressSlider />
      <Footer />
    </div>
  );
}
