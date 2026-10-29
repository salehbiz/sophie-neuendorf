'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { SHARED_LAYOUT_FRAGMENTS } from '@/data/layout-fragments';

interface NavbarProps {
  variant?: 'white' | 'black';
}

export function AnnouncementBar() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SHARED_LAYOUT_FRAGMENTS.announcementBar }}
    />
  );
}

export function PageTransitionOverlay() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SHARED_LAYOUT_FRAGMENTS.pageTransitionOverlay }}
    />
  );
}

export function Navbar({ variant = 'black' }: NavbarProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const html =
    variant === 'white'
      ? SHARED_LAYOUT_FRAGMENTS.navbarWhite
      : SHARED_LAYOUT_FRAGMENTS.navbarBlack;

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Update active link state (ui--current) based on current pathname
    const links = root.querySelectorAll<HTMLAnchorElement>('a[href]');
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (href === pathname) {
        a.classList.add('ui--current');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('ui--current');
        a.removeAttribute('aria-current');
      }
    });
  }, [pathname, variant]);

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
