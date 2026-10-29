import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MEMBERS, getMemberBySlug } from '@/data/members';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MemberProfileSection } from '@/components/sections/member/MemberProfileSection';

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return buildPageMetadata(`/member/${slug}`);
}

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getMemberBySlug(slug);
  if (!item) notFound();

  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant={item.navbarVariant} />
      <MemberProfileSection item={item} />
      <Footer />
    </div>
  );
}
