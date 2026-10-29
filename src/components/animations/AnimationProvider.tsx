'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initStandaloneInteractions } from '@/lib/animations/gsap-engine';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = initStandaloneInteractions();
    return () => {
      cleanup();
    };
  }, [pathname]);

  return <>{children}</>;
}
