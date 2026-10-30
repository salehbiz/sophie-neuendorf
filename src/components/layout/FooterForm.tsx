'use client';

import { useState, type FormEvent } from 'react';
import { EMAIL, sendEnquiry, type EnquiryStatus } from '@/lib/enquiry';

/**
 * The footer's short enquiry form (email, subject, message), in the Contact page's field and
 * button styles, so visitors can write from any page. Posts to FormSubmit like the Contact form.
 */
export function FooterForm() {
  const [status, setStatus] = useState<EnquiryStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setStatus(await sendEnquiry(e.currentTarget));
  };

  if (status === 'sent') return <p className="cb-note sf-form">Thank you. Your message has been sent.</p>;
  if (status === 'activation') {
    return (
      <p className="cb-note sf-form">
        This form is waiting for activation. Please confirm the email FormSubmit sent to {EMAIL}.
      </p>
    );
  }

  return (
    <form className="sf-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="cb-gotcha" aria-hidden="true" />
      <label className="cb-field">
        <span>Email</span>
        {/* Lowercase "email" makes FormSubmit use it as the reply-to address. */}
        <input name="email" type="email" required autoComplete="email" maxLength={256} />
      </label>
      <label className="cb-field">
        <span>Subject</span>
        {/* "_subject" becomes the subject line of the email FormSubmit sends. */}
        <input name="_subject" type="text" required maxLength={256} />
      </label>
      <label className="cb-field sf-form-wide">
        <span>Message</span>
        <textarea name="Message" rows={4} maxLength={5000} required />
      </label>
      {status === 'error' && (
        <p className="cb-note cb-error sf-form-wide">
          The message could not be sent. Please write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
      <button type="submit" className="cb-send" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending' : 'Send'}
      </button>
    </form>
  );
}
