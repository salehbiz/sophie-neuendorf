import React from 'react';
import type { BlogCategoryItem } from '@/data/blogs';

interface Props {
  item: BlogCategoryItem;
}

export function BlogCategoryGridSection({ item }: Props) {
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
