import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOGS, BLOGS_BY_SLUG } from '@/data/blogs';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogDetailHeroSection } from '@/components/sections/blogs/BlogDetailHeroSection';
import { BlogDetailContentSection } from '@/components/sections/blogs/BlogDetailContentSection';

export function generateStaticParams() {
  return BLOGS.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PAGE_METADATA[`/blogs/${slug}`] || PAGE_METADATA['/press'];
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

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = BLOGS_BY_SLUG[slug];
  if (!item) notFound();

  return (
    <div className="main">
      <Navbar variant="default" />
      <BlogDetailHeroSection html={item.heroHtml} />
      <BlogDetailContentSection html={item.detailHtml} />
      <Footer />
    </div>
  );
}
