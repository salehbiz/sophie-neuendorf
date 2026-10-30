import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PAGE_METADATA } from '@/data/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { OWNER } from '@/data/legal';

const meta = PAGE_METADATA['/privacy'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: [meta.ogImage],
  },
};

const EMAIL = OWNER.email;
const UPDATED = 'October 2026';

// Privacy policy under the EU GDPR and German law (BDSG, TDDDG), written for what this site
// actually does: no cookies, analytics or tracking, self-hosted fonts, hosting logs, and a contact
// form sent through FormSubmit. Update it whenever a service is added or changed.
const SECTIONS: { title: string; body: ReactNode }[] = [
  {
    title: 'Controller',
    body: (
      <>
        <p>The controller responsible for data processing on this website within the meaning of the EU General Data Protection Regulation (GDPR) is:</p>
        <p>
          {OWNER.name}
          {OWNER.address.map((line) => (
            <span key={line}>
              <br />
              {line}
            </span>
          ))}
          <br />
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Phone: <a href={OWNER.phoneHref}>{OWNER.phone}</a>
        </p>
      </>
    ),
  },
  {
    title: 'Overview',
    body: (
      <>
        <p>This website is a personal portfolio. It collects as little personal data as possible: it uses no cookies, no analytics, no advertising and no tracking of any kind, and it stores nothing on your device. Personal data is only processed when your browser requests the website (see Hosting) and when you contact us yourself (see Contact form and Contact by email or phone).</p>
        <p>Personal data is any information relating to an identified or identifiable natural person, such as your name, email address or IP address.</p>
      </>
    ),
  },
  {
    title: 'Hosting and server log files',
    body: (
      <>
        <p>This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the website, the hosting provider automatically records information that your browser transmits, in so-called server log files:</p>
        <ul>
          <li>IP address</li>
          <li>date and time of the request</li>
          <li>the page or file requested</li>
          <li>the referring website (referrer)</li>
          <li>browser type and version, and operating system</li>
        </ul>
        <p>This data is needed to deliver the website, to keep it secure and stable, and to detect and fix errors. It is not combined with other data sources and not used to identify you. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest is the secure and reliable operation of the website. The log files are kept only for a limited period and then deleted.</p>
        <p>Vercel may process data in the USA. Vercel is certified under the EU-U.S. Data Privacy Framework, on the basis of the European Commission’s adequacy decision (Art. 45 GDPR). Vercel processes the data on our behalf under its data processing agreement (Art. 28 GDPR), which forms part of its terms of service.</p>
      </>
    ),
  },
  {
    title: 'Contact form',
    body: (
      <>
        <p>If you send a message through the contact form, the details you enter (first and last name, email address, optionally your phone number, and your message) are transmitted to the form service FormSubmit (formsubmit.co), which forwards them to us by email. FormSubmit may process this data on servers outside the European Union.</p>
        <p>We use your details only to answer your enquiry and any follow-up questions. If your enquiry relates to a contract or to pre-contractual steps, the legal basis is Art. 6(1)(b) GDPR; otherwise it is our legitimate interest in responding to enquiries addressed to us, Art. 6(1)(f) GDPR. Providing your details is voluntary, but without them we cannot reply.</p>
        <p>We keep your enquiry until it has been fully dealt with and delete it afterwards, unless statutory retention periods (for example under commercial or tax law) require us to keep it longer.</p>
      </>
    ),
  },
  {
    title: 'Contact by email or phone',
    body: (
      <p>If you contact us by email or phone, we process the details you share with us (such as your name, email address or phone number and the content of your message) to handle your request. The legal basis is Art. 6(1)(b) GDPR where your request relates to a contract or pre-contractual steps, and otherwise Art. 6(1)(f) GDPR, our legitimate interest in answering enquiries. We delete the data once your request has been dealt with, unless statutory retention periods apply.</p>
    ),
  },
  {
    title: 'Fonts',
    body: (
      <p>The fonts used on this website (Avenir Next and Cormorant Garamond) are hosted on our own server together with the website. No connection is made to Google, Monotype or any other font provider when you visit the website.</p>
    ),
  },
  {
    title: 'Cookies and storage on your device',
    body: (
      <p>This website sets no cookies and stores no information on your device, and it does not read any information from your device beyond what your browser transmits technically when loading a page. Consent under § 25 of the German Telecommunications Digital Services Data Protection Act (TDDDG) is therefore not required, and there is no cookie banner.</p>
    ),
  },
  {
    title: 'Links to other websites',
    body: (
      <p>This website links to external websites, for example Instagram, LinkedIn and the publications listed under Press. These are plain links: no data is transmitted to these providers until you click a link. After that, the privacy policy of the respective provider applies, and we have no influence on how they process your data.</p>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <>
        <p>Under the GDPR you have the right to:</p>
        <ul>
          <li>access the personal data we hold about you (Art. 15 GDPR)</li>
          <li>have inaccurate data corrected (Art. 16 GDPR)</li>
          <li>have your data erased (Art. 17 GDPR)</li>
          <li>have processing restricted (Art. 18 GDPR)</li>
          <li>receive your data in a portable format (Art. 20 GDPR)</li>
          <li>withdraw any consent you have given, with effect for the future (Art. 7(3) GDPR)</li>
        </ul>
        <p>
          <strong>Right to object (Art. 21 GDPR):</strong> where we process your data on the basis of our legitimate interests (Art. 6(1)(f) GDPR), you have the right to object to this processing at any time on grounds relating to your particular situation. We will then no longer process your data unless we can demonstrate compelling legitimate grounds that override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims.
        </p>
        <p>To exercise any of these rights, an informal message to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> is enough.</p>
      </>
    ),
  },
  {
    title: 'Right to lodge a complaint',
    body: (
      <p>You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR), in particular in the EU member state of your habitual residence, your place of work or the place of the alleged infringement. In Germany, the supervisory authority of the federal state concerned is responsible.</p>
    ),
  },
  {
    title: 'Automated decisions and encryption',
    body: (
      <p>We do not use automated decision-making or profiling within the meaning of Art. 22 GDPR. This website is delivered over an encrypted connection (TLS), which you can recognise by “https://” in your browser’s address bar, so data you send to us cannot be read by third parties in transit.</p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>We update this privacy policy when the website or the services it uses change, or when the law requires it. The current version is always available on this page.</p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="main">
      <Navbar variant="v2" />
      <section className="section pp">
        <div className="wc-meta">
          <span>Privacy Policy</span>
          <span>As of {UPDATED}</span>
        </div>
        <h1 className="wc-title pp-title">Privacy Policy</h1>
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
