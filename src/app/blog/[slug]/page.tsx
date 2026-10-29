import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blogs';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogPostHeroSection } from '@/components/sections/blog/BlogPostHeroSection';
import { BlogPostContentSection } from '@/components/sections/blog/BlogPostContentSection';
import { BlogPostRelatedSection } from '@/components/sections/blog/BlogPostRelatedSection';

export function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/blog/${slug}`);
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBlogPostBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <BlogPostHeroSection item={item} />
      <BlogPostContentSection item={item} />
      <BlogPostRelatedSection item={item} />
      <Footer />
    </div>
  );
}
