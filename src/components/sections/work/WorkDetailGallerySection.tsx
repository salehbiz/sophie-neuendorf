import React from 'react';
import type { WorkItem } from '@/data/works';

interface Props {
  item: WorkItem;
}

export function WorkDetailGallerySection({ item }: Props) {
  const sec = item.sections[3];
  if (!sec) return null;
  return (
    <div
      style={{ display: 'contents' }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sec.html }}
    />
  );
}
