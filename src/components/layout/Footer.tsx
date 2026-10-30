'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

// Plain espresso footer: contact line, numbered site links, the name as a large wordmark that
// rises letter by letter from the centre when the footer comes into view, and the legal line.

const LINKS = [
  { numeral: 'I', label: 'Work', href: '/work' },
  { numeral: 'II', label: 'Press', href: '/press' },
  { numeral: 'III', label: 'About', href: '/about' },
  { numeral: 'IV', label: 'Contact', href: '/contact' },
  { numeral: 'V', label: 'Instagram', href: 'https://www.instagram.com/sophieneuendorf/', external: true },
  { numeral: 'VI', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sophie-neuendorf-4a15461a', external: true },
];

const WORDMARK = 'Sophie Neuendorf';

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current!;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const context = gsap.context(() => {}, el);
    let timeline: gsap.core.Timeline;

    context.add(() => {
      timeline = gsap
        .timeline({ paused: true })
        .fromTo('[data-footer-char]', { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: 'power3.out', stagger: { each: 0.035, from: 'center' } }, 0)
        .fromTo('.af-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.1);
    });
    if (preference.matches) timeline!.progress(1).pause();

    const observer = new IntersectionObserver(
      (entries) => {
        if (preference.matches) return;
        if (entries[0].isIntersecting) timeline.play();
        else timeline.reverse();
      },
      { threshold: 0.12 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      context.revert();
    };
  }, []);

  return (
    <footer ref={root} className="animated-footer">
      <div className="af-content">
        <div>
          <p className="af-eyebrow">Contact</p>
          <p className="af-invitation">
            Fine Art | Finance | Technology.
            <br />
            <em>New York, London, Berlin, Paris, and Madrid.</em>
          </p>
          <a href="mailto:info@neuendorfteba.com" className="af-button">
            info@neuendorfteba.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav aria-label="Site">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <small>{link.numeral}</small>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <h2 className="af-wordmark" aria-label={WORDMARK}>
        {Array.from(WORDMARK).map((letter, i) => (
          <span className="af-mask" key={i}>
            <span data-footer-char aria-hidden="true">
              {letter === ' ' ? ' ' : letter}
            </span>
          </span>
        ))}
      </h2>
      <div className="af-bottom">
        <span>
          Sophie Neuendorf · Condesa de Teba · <a href="tel:+491723176317">+49 172 3176317</a>
        </span>
        <small>
          <a href="/impressum">Impressum</a> · <a href="/privacy">Privacy</a> · © {new Date().getFullYear()} Sophie Neuendorf
        </small>
      </div>
    </footer>
  );
}
