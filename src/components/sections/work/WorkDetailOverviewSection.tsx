import React from 'react';
import type { WorkItem } from '@/data/works';

interface Props {
  item: WorkItem;
}

export function WorkDetailOverviewSection({ item }: Props) {
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
