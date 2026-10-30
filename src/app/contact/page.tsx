import type { Metadata } from 'next';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';

const meta = PAGE_METADATA['/contact'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

export default function ContactPage() {
  return (
    <div className="main">
      <Navbar variant="default" />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
