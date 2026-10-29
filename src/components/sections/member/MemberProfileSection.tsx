import React from 'react';
import type { MemberItem } from '@/data/members';

interface Props {
  item: MemberItem;
}

export function MemberProfileSection({ item }: Props) {
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
