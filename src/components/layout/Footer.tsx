// Footer: light off-white with a contact section (a short enquiry form plus Instagram and
// LinkedIn icons) and the legal line, per client feedback. The partners strip sits above it.
// The Contact page has its own form, so there the footer shows only the icons.
import { PartnersStrip } from './PartnersStrip';
import { FooterForm } from './FooterForm';

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sophieneuendorf/',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r=".6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sophie-neuendorf-4a15461a',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <path d="M7.5 10.5v6M7.5 7.6v.1M11.2 16.5v-6M11.2 13.2c0-1.6 1-2.7 2.4-2.7s2.4 1 2.4 2.7v3.3" />
      </>
    ),
  },
];

export function Footer({ form = true }: { form?: boolean }) {
  return (
    <>
      <PartnersStrip />
      <footer className="sf">
        <div className="sf-top">
          <div className="sf-side">
            <p className="sf-label">Contact</p>
            <ul className="sf-social">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {form && <FooterForm />}
        </div>
        <div className="sf-bottom">
          <span>Sophie Neuendorf · Condesa de Teba</span>
          <span>
            <a href="/impressum">Impressum</a> · <a href="/privacy">Privacy</a> · © {new Date().getFullYear()} Sophie Neuendorf
          </span>
        </div>
      </footer>
    </>
  );
}
