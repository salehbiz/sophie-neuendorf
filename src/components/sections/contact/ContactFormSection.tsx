'use client';

import { useState, type FormEvent } from 'react';
import { srcSet } from '@/lib/responsive';
import { EMAIL, sendEnquiry, type EnquiryStatus } from '@/lib/enquiry';

const PHOTO = '/assets/sophie/img/press/web/friends-of-friends.jpg';

/**
 * Contact, after the client's Neuendorf House "Bookings" reference: a full-width photo banner with
 * a spaced-capital kicker and a large Light title; then a
 * single-column "Enquiries" form (name, email, message) with underlined fields and an outlined
 * Send button. The contact details live in the footer. The form posts to FormSubmit.
 */
export function ContactFormSection() {
  const [status, setStatus] = useState<EnquiryStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setStatus(await sendEnquiry(e.currentTarget));
  };

  return (
    <>
      <section className="cb-hero">
        <img
          className="cb-hero-img"
          src={PHOTO}
          srcSet={srcSet(PHOTO)}
          sizes="100vw"
          alt="Pink house and pool in Mallorca"
          fetchPriority="high"
        />
        <div className="cb-hero-inner">
          <p className="cb-kicker">Sophie Neuendorf · Condesa de Teba</p>
          <div className="cb-hero-row">
            <h1 className="cb-title">Contact</h1>
          </div>
        </div>
      </section>

      <section className="section cb" id="enquiries">
        <p className="cb-label">Enquiries</p>

        {status === 'sent' ? (
          <p className="cb-note">Thank you. Your message has been sent.</p>
        ) : status === 'activation' ? (
          // Only seen before the form is activated: FormSubmit has emailed the activation link.
          <p className="cb-note">
            This form is waiting for activation. Please confirm the email FormSubmit sent to {EMAIL}.
          </p>
        ) : (
          <form className="cb-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New message from neuendorfteba.com" />
            <input type="hidden" name="_template" value="table" />
            {/* Honeypot: hidden from people, filled in by bots, and FormSubmit drops those. */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="cb-gotcha" aria-hidden="true" />
            <label className="cb-field">
              <span>Name</span>
              <input name="Name" type="text" required autoComplete="name" maxLength={256} />
            </label>
            <label className="cb-field">
              <span>Email</span>
              {/* Lowercase "email" makes FormSubmit use it as the reply-to address. */}
              <input name="email" type="email" required autoComplete="email" maxLength={256} />
            </label>
            <label className="cb-field">
              <span>Message</span>
              <textarea name="Message" rows={5} maxLength={5000} required />
            </label>
            {status === 'error' && (
              <p className="cb-note cb-error">
                The message could not be sent. Please write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            )}
            <button type="submit" className="cb-send" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send'}
            </button>
          </form>
        )}
      </section>
    </>
  );
}
