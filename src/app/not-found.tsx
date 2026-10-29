import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/data/metadata';
import { AnnouncementBar, Navbar } from '@/components/layout/Navbar';
import { NotFoundGridOverlaySection } from '@/components/sections/legal/NotFoundGridOverlaySection';
import { NotFoundContentSection } from '@/components/sections/legal/NotFoundContentSection';

export const metadata: Metadata = buildPageMetadata('/404');

export default function Page() {
  return (
    <div className="page-wrapper">
      <AnnouncementBar />
      <Navbar variant="black" />
      <NotFoundGridOverlaySection />
      <NotFoundContentSection />
    </div>
  );
}
