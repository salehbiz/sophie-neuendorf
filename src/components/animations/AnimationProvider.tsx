'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initStandaloneInteractions } from '@/lib/animations/gsap-engine';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = initStandaloneInteractions();
    let lastWidth = window.innerWidth;

    const onResize = () => {
      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        cleanup();
        cleanup = initStandaloneInteractions();
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      cleanup();
    };
  }, [pathname]);

  return <>{children}</>;
}
