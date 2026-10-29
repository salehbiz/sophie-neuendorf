'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { NAVBAR_DEFAULT_HTML, NAVBAR_V2_HTML } from '@/data/layout-fragments';

export interface NavbarProps {
  variant?: 'default' | 'v2';
}

function unwrapNavbarInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</div>');
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

export function Navbar({ variant = 'default' }: NavbarProps) {
  const pathname = usePathname() || '/';
  const navRef = useRef<HTMLDivElement>(null);

  const rawOuter = variant === 'v2' ? NAVBAR_V2_HTML : NAVBAR_DEFAULT_HTML;
  const innerHtml = useMemo(
    () => applyActiveLinksToHtml(unwrapNavbarInner(rawOuter), pathname),
    [rawOuter, pathname]
  );

  useEffect(() => {
    const root = navRef.current;
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
    <div
      ref={navRef}
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={variant === 'v2' ? 'navbar v2 ui-nav' : 'navbar ui-nav'}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
}
