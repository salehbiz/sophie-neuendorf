'use client';

import { useState, type FormEvent } from 'react';
import { RolesMotion } from '@/components/sections/home/RolesMotion';

const EMAIL = 'info@neuendorfteba.com';

// Roman numerals echo the footer's link list.
const DETAILS = [
  { numeral: 'I', label: 'Phone', value: '+49 172 3176317', href: 'tel:+491723176317' },
  { numeral: 'II', label: 'Instagram', value: '@sophieneuendorf', href: 'https://www.instagram.com/sophieneuendorf/' },
  { numeral: 'III', label: 'LinkedIn', value: 'Sophie Neuendorf', href: 'https://www.linkedin.com/in/sophie-neuendorf-4a15461a' },
];

// Fields as on the old site's contact form.
const FIELDS = [
  { name: 'First-Name', label: 'First name', type: 'text', required: true, autoComplete: 'given-name' },
  { name: 'Last-Name', label: 'Last name', type: 'text', required: true, autoComplete: 'family-name' },
  { name: 'Email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'Phone', label: 'Phone', type: 'tel', required: false, autoComplete: 'tel' },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Contact, styled after the home page's roles section and the footer: a tall photo bleeding off
 * the left edge with heavy parallax, an oversized serif heading, the email as a large italic
 * link, numbered details and a quiet underlined form. With NEXT_PUBLIC_FORMSPREE_ENDPOINT set
 * the form posts there; until then it opens the visitor's email app with the message filled in.
 */
export function ContactFormSection() {
  const [status, setStatus] = useState<Status>('idle');
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!endpoint) {
      const name = `${data.get('First-Name') ?? ''} ${data.get('Last-Name') ?? ''}`.trim();
      const body = [
        String(data.get('Message') ?? ''),
        '',
        name,
        String(data.get('Email') ?? ''),
        String(data.get('Phone') ?? ''),
      ]
        .filter((line, i) => i < 2 || line)
        .join('\n');
      const subject = name ? `Message from ${name}` : 'Message';
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section ct">
      <figure className="kz-photo ct-photo" data-drift="">
        <img
          src="/assets/sophie/img/about/web/about-8.jpg"
          alt="Sophie Neuendorf in white with her dog against a pink wall"
          decoding="async"
        />
      </figure>

      <div className="ct-content">
        <div className="wc-meta">
          <span>Contact</span>
          <span>Sophie Neuendorf · Condesa de Teba</span>
        </div>

        <h1 className="ct-title">Contact</h1>

        <a className="ct-email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>

        <ul className="ct-details">
          {DETAILS.map((d, i) => (
            <li key={d.label} data-reveal="" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="ct-numeral">{d.numeral}</span>
              <span className="ct-label">{d.label}</span>
              <a
                href={d.href}
                {...(d.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {d.value}
              </a>
            </li>
          ))}
        </ul>

        <div className="ct-form-wrap">
          <p className="ct-lead">Or leave a message</p>
          {status === 'sent' ? (
            <p className="ct-note">Thank you. Your message has been sent.</p>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-row">
                {FIELDS.map((f) => (
                  <label key={f.name} className="ct-field">
                    <span>
                      {f.label}
                      {f.required ? ' *' : ''}
                    </span>
                    <input name={f.name} type={f.type} required={f.required} autoComplete={f.autoComplete} maxLength={256} />
                  </label>
                ))}
              </div>
              <label className="ct-field">
                <span>Message</span>
                <textarea name="Message" rows={4} maxLength={5000} />
              </label>
              {status === 'error' && (
                <p className="ct-note ct-error">
                  The message could not be sent. Please write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              )}
              <button type="submit" className="roles-link ct-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'} <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <RolesMotion selector=".ct" />
    </section>
  );
}
