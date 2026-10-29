import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PressSlider } from '@/components/sections/press/PressSlider';
import { PRESS } from '@/data/press';

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
      <section className="section ps-head">
        <div className="wc-meta">
          <span>Press &amp; Features</span>
          <span>{String(PRESS.length).padStart(2, '0')}</span>
        </div>
        <h1 className="wc-title">Press &amp; Features</h1>
      </section>
      <PressSlider />
      <Footer />
    </div>
  );
}
