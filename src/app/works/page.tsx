import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorksHeroSection } from '@/components/sections/works/WorksHeroSection';
import { WorksGridSection } from '@/components/sections/works/WorksGridSection';

const meta = PAGE_METADATA['/works'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default async function WorksPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = searchParams ? await searchParams : {};
  const rawPage = sp['054d80ea_page'] || sp.page;
  const pageValue = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const initialPage = pageValue === '2' ? 2 : 1;

  return (
    <div className="main">
      <Navbar variant="v2" />
      <WorksHeroSection />
      <WorksGridSection initialPage={initialPage} />
      <Footer />
    </div>
  );
}
