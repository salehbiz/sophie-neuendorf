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
  // Lowercase "email" makes FormSubmit use it as the reply-to address.
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'Phone', label: 'Phone', type: 'tel', required: false, autoComplete: 'tel' },
];

// FormSubmit (no account): the first submission emails EMAIL a one-time activation link, and
// later messages are delivered there. After activation FormSubmit offers a random alias that can
// replace the address via NEXT_PUBLIC_FORMSUBMIT_ENDPOINT.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || `https://formsubmit.co/ajax/${EMAIL}`;

type Status = 'idle' | 'sending' | 'sent' | 'activation' | 'error';

/**
 * Contact, styled after the home page's roles section and the footer: a tall photo bleeding off
 * the left edge with heavy parallax, an oversized serif heading, the email as a large italic
 * link, numbered details and a quiet underlined form that posts to FormSubmit.
 */
export function ContactFormSection() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (res.ok && String(json.success) === 'true') setStatus('sent');
      else if (/activat/i.test(json.message ?? '')) setStatus('activation');
      else setStatus('error');
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
          ) : status === 'activation' ? (
            // Only seen before the form is activated: FormSubmit has emailed the activation link.
            <p className="ct-note">
              This form is waiting for activation. Please confirm the email FormSubmit sent to {EMAIL}.
            </p>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New message from neuendorfteba.com" />
              <input type="hidden" name="_template" value="table" />
              {/* Honeypot: hidden from people, filled in by bots, and FormSubmit drops those. */}
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="ct-gotcha" aria-hidden="true" />
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
