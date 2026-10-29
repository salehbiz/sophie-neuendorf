import React from 'react';
import type { BlogPostItem } from '@/data/blogs';

interface Props {
  item: BlogPostItem;
}

export function BlogPostRelatedSection({ item }: Props) {
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
