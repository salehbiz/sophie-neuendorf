'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initStandaloneInteractions } from '@/lib/animations/gsap-engine';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = initStandaloneInteractions();
    let lastBp = window.innerWidth >= 992 ? 'main' : window.innerWidth >= 768 ? 'medium' : window.innerWidth >= 480 ? 'small' : 'tiny';
    const onResize = () => {
      const nextBp = window.innerWidth >= 992 ? 'main' : window.innerWidth >= 768 ? 'medium' : window.innerWidth >= 480 ? 'small' : 'tiny';
      if (nextBp !== lastBp) {
        lastBp = nextBp;
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
