import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NotFoundSection } from '@/components/sections/utility/NotFoundSection';

const meta = PAGE_METADATA['/404'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function Custom404Page() {
  return (
    <>
      <Navbar variant="v2" />
      <NotFoundSection />
      <Footer />
    </>
  );
}
