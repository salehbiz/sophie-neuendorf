'use client';

import { useEffect, useState } from 'react';
import { WORKS_LIST_PAGE_1_HTML, WORKS_LIST_PAGE_2_HTML } from '@/data/works';

export interface WorksGridSectionProps {
  initialPage?: number;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorksGridSection({ initialPage = 1 }: WorksGridSectionProps) {
  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  useEffect(() => {
    const syncFromUrl = () => {
      const sp = new URLSearchParams(window.location.search);
      const raw = sp.get('054d80ea_page') || sp.get('page');
      setPage(raw === '2' ? 2 : 1);
    };
    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const rawHtml = page === 2 ? WORKS_LIST_PAGE_2_HTML : WORKS_LIST_PAGE_1_HTML;

  return (
    <section
      className="section all-project"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(rawHtml) }}
    />
  );
}
