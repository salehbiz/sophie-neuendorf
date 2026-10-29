import React from 'react';
import type { ServiceItem } from '@/data/services';

interface Props {
  item: ServiceItem;
}

export function ServiceDetailProcessSection({ item }: Props) {
  const sec = item.sections[1];
  if (!sec) return null;
  return (
    <div
      style={{ display: 'contents' }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sec.html }}
    />
  );
}
