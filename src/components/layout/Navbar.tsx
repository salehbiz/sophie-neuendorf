'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAVBAR_DEFAULT_HTML, NAVBAR_V2_HTML } from '@/data/layout-fragments';

export interface NavbarProps {
  variant?: 'default' | 'v2';
}

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/press', label: 'Press' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// The template markup supplies the brand; its inline links and menu button are dropped because
// every screen size now uses the menu button below.
function brandOnly(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</div>');
  const inner = openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
  const cut = inner.indexOf('<div class="nav-menu-button-wrapper">');
  return cut === -1 ? inner : inner.slice(0, cut) + '</div></div>';
}

/**
 * Navbar: the wordmark on the left and a three-line menu button on the right at every screen
 * size. The button opens a full-screen panel with the page links; Escape, a link or the button
 * closes it. "default" sits over a photo (light), "v2" over the page background (dark).
 */
export function Navbar({ variant = 'default' }: NavbarProps) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const brandHtml = useMemo(() => brandOnly(variant === 'v2' ? NAVBAR_V2_HTML : NAVBAR_DEFAULT_HTML), [variant]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.documentElement.classList.add('sm-locked');
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.classList.remove('sm-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div
        role="banner"
        className={variant === 'v2' ? 'navbar v2 ui-nav' : 'navbar ui-nav'}
        dangerouslySetInnerHTML={{ __html: brandHtml }}
      />
      <button
        type="button"
        className={`sm-toggle${variant === 'v2' ? '' : ' is-light'}${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="site-menu" className={`sm-panel${open ? ' is-open' : ''}`} aria-label="Main" aria-hidden={!open}>
        <ul>
          {LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}>
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                aria-current={link.href === pathname ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="sm-num">{['I', 'II', 'III', 'IV'][i]}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="sm-foot">Sophie Neuendorf · Condesa de Teba</p>
      </nav>
    </>
  );
}
