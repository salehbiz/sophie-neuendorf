import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogsHeroSection } from '@/components/sections/blogs/BlogsHeroSection';
import { BlogsGridSection } from '@/components/sections/blogs/BlogsGridSection';

const meta = PAGE_METADATA['/blogs'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function BlogsPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <BlogsHeroSection />
      <BlogsGridSection />
      <Footer />
    </div>
  );
}
