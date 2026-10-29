'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { SHARED_LAYOUT_FRAGMENTS } from '@/data/layout-fragments';

export function Footer() {
  const pathname = usePathname();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = footerRef.current;
    if (!root) return;
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
  }, [pathname]);

  return (
    <div
      ref={footerRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SHARED_LAYOUT_FRAGMENTS.footer }}
    />
  );
}
