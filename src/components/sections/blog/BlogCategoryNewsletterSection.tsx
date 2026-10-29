import React from 'react';
import type { BlogCategoryItem } from '@/data/blogs';

interface Props {
  item: BlogCategoryItem;
}

export function BlogCategoryNewsletterSection({ item }: Props) {
  const sec = item.sections[2];
  if (!sec) return null;
  return (
    <div
      style={{ display: 'contents' }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sec.html }}
    />
  );
}
