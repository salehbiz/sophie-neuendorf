'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FOOTER_HTML } from '@/data/layout-fragments';

function unwrapFooterInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

function applyActiveLinksToHtml(innerHtml: string, pathname: string): string {
  return innerHtml.replace(/<a\s+([^>]*?)href="([^"]+)"([^>]*?)>/gi, (full, before, href, after) => {
    const isCurrent = href === pathname;
    if (!isCurrent) return full;
    const combined = before + 'href="' + href + '"' + after;
    const withAria = combined.includes('aria-current=')
      ? combined
      : combined.replace('href="' + href + '"', 'href="' + href + '" aria-current="page"');
    const withClass = withAria.replace(/class="([^"]+)"/, (_, cls) => {
      const tokens = cls.split(/\s+/).filter(Boolean);
      if (!tokens.includes('ui--current')) tokens.push('ui--current');
      return 'class="' + tokens.join(' ') + '"';
    });
    return '<a ' + withClass + '>';
  });
}

export function Footer() {
  const pathname = usePathname() || '/';
  const footerRef = useRef<HTMLElement>(null);

  const innerHtml = useMemo(
    () => applyActiveLinksToHtml(unwrapFooterInner(FOOTER_HTML), pathname),
    [pathname]
  );

  useEffect(() => {
    const root = footerRef.current;
    if (!root) return;
    const links = root.querySelectorAll<HTMLAnchorElement>('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === pathname) {
        link.classList.add('ui--current');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('ui--current');
        link.removeAttribute('aria-current');
      }
    });
  }, [pathname]);

  return (
    <section
      ref={footerRef}
      className="footer"
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
