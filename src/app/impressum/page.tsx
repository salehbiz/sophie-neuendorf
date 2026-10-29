import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OWNER } from '@/data/legal';

const meta = PAGE_METADATA['/impressum'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

const NameAndAddress = () => (
  <p>
    {OWNER.name}
    {OWNER.address.map((line) => (
      <span key={line}>
        <br />
        {line}
      </span>
    ))}
  </p>
);

// Legal notice required for German websites (§ 5 DDG, § 18 (2) MStV). Laid out like the privacy
// policy and sharing its styles; the owner's details come from src/data/legal.ts.
const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: 'Information according to § 5 DDG',
    body: <NameAndAddress />,
  },
  {
    title: 'Contact',
    body: (
      <p>
        Phone: <a href={OWNER.phoneHref}>{OWNER.phone}</a>
        <br />
        Email: <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
      </p>
    ),
  },
  {
    title: 'Responsible for the content according to § 18 (2) MStV',
    body: <NameAndAddress />,
  },
  {
    title: 'Consumer dispute resolution',
    body: (
      <p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board (§ 36 VSBG).</p>
    ),
  },
  {
    title: 'Liability for content',
    body: (
      <p>The content of this website has been prepared with great care. We are responsible for our own content on these pages under the general laws. However, we cannot guarantee that the content is accurate, complete or up to date. If we become aware of any legal infringement, we will remove the content concerned immediately.</p>
    ),
  },
  {
    title: 'Liability for links',
    body: (
      <p>This website contains links to external websites of third parties, such as the publications listed under Press, over whose content we have no influence. The respective provider or operator is always responsible for the content of linked pages. The linked pages were checked for possible legal infringements at the time of linking, and no unlawful content was apparent. Permanent monitoring of linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any infringement, we will remove such links immediately.</p>
    ),
  },
  {
    title: 'Copyright',
    body: (
      <>
        <p>The texts and images on this website are protected by copyright. Reproduction, editing, distribution or any kind of use beyond the limits of copyright law requires the prior written consent of the respective rights holder.</p>
        <p>Images from press features are the property of the respective publications and photographers. Piaget event photograph: BrauerPhotos / G. Nitschke for Piaget.</p>
      </>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <section className="section pp">
        <div className="wc-meta">
          <span>Legal Notice</span>
          <span>Impressum</span>
        </div>
        <h1 className="wc-title pp-title">Impressum</h1>
        <ol className="pp-list">
          {SECTIONS.map((s, i) => (
            <li key={s.title} className="pp-item">
              <span className="pp-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="pp-content">
                <h2 className="pp-heading">{s.title}</h2>
                <div className="pp-body">{s.body}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <Footer />
    </div>
  );
}
