import React from 'react';
import type { ServiceItem } from '@/data/services';

interface Props {
  item: ServiceItem;
}

export function ServiceDetailHeroSection({ item }: Props) {
  const sec = item.sections[0];
  if (!sec) return null;
  return (
    <div
      style={{ display: 'contents' }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sec.html }}
    />
  );
}
