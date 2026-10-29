import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, getBlogCategoryBySlug } from '@/data/blogs';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogCategoryHeroSection } from '@/components/sections/blog/BlogCategoryHeroSection';
import { BlogCategoryGridSection } from '@/components/sections/blog/BlogCategoryGridSection';
import { BlogCategoryNewsletterSection } from '@/components/sections/blog/BlogCategoryNewsletterSection';

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ category: c.category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  return buildPageMetadata(`/blog-categories/${category}`);
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const item = getBlogCategoryBySlug(category);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <BlogCategoryHeroSection item={item} />
      <BlogCategoryGridSection item={item} />
      <BlogCategoryNewsletterSection item={item} />
      <Footer />
    </div>
  );
}
