import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { WORKS, WORKS_BY_SLUG } from '@/data/works';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WorkDetailHeroSection } from '@/components/sections/works/WorkDetailHeroSection';
import { WorkDetailContentSection } from '@/components/sections/works/WorkDetailContentSection';

export function generateStaticParams() {
  return WORKS.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PAGE_METADATA[`/works/${slug}`] || PAGE_METADATA['/work'];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = WORKS_BY_SLUG[slug];
  if (!item) notFound();

  return (
    <div className="main">
      <Navbar variant="default" />
      <WorkDetailHeroSection html={item.heroHtml} />
      <WorkDetailContentSection html={item.detailHtml} />
      <Footer />
    </div>
  );
}
