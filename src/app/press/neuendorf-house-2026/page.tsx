import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HouseFeature } from '@/components/sections/press/HouseFeature';

const title = 'Neuendorf House, 2026 | Sophie Neuendorf';
const description = 'Neuendorf House, Santanyi, Mallorca: photographs from 2026.';
const image = '/assets/sophie/img/house-2026/rooftop-cover-1600.webp';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [image] },
};

export default function HouseFeaturePage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <HouseFeature />
      <Footer />
    </div>
  );
}
