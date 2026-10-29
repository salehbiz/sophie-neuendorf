'use client';

import { useEffect, useRef } from 'react';

const CONTACT_SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"contact-wrapper\"><div class=\"contact-left\"><div class=\"contact-top-content\"><h1 class=\"hero-title v2 black\">Plan Your Next Photo Session</h1><div class=\"contact-para\"><div class=\"body-text-s grey\">Have a project in mind or ready to book? Reach out and let’s create something memorable together.</div></div></div><div class=\"contact-bottom-content\"><div class=\"contact-info-card\"><div class=\"info-tag\"><img src=\"/assets/icons/phone-55f20a.svg\" loading=\"lazy\" alt=\"Phone icon\" class=\"icon\"/><div class=\"h6 medium\">Email</div></div><div class=\"link-text-wrap\"><a href=\"mailto:hello@voyra.studio\" class=\"link-text v2\">hello@voyra.studio</a></div></div><div class=\"contact-info-card v2\"><div class=\"info-tag\"><img src=\"/assets/icons/history-212216.svg\" loading=\"lazy\" alt=\"History icon (clock with a counterclockwise arrow)\" class=\"icon\"/><div class=\"h6 medium\">Availability</div></div><div class=\"link-text-wrap v2\"><div class=\"body-text\">Mon-Fri</div><div class=\"body-text grey\">09:00 AM – 06:00 PM</div></div></div></div></div><div class=\"contact-form-wrap\"><div class=\"form-top\"><div class=\"h5\">Send me a message</div><div class=\"body-text\">Tell me a little about your project and I’ll get back to you within 24 hours.</div></div><div class=\"contact-form ui-form\"><form id=\"form-Contact-Form\" name=\"form-Contact-Form\" data-name=\"Contact Form\" method=\"get\"><div class=\"field-wrapper\"><div class=\"field-wrap\"><label for=\"First-Name\" class=\"field-label\">First name</label><input class=\"text-field ui-input\" maxlength=\"256\" name=\"First-Name\" data-name=\"First Name\" placeholder=\"Your first name\" type=\"text\" id=\"First-Name\" required=\"\"/></div><div class=\"field-wrap\"><label for=\"Last-Name\" class=\"field-label\">Last name</label><input class=\"text-field ui-input\" maxlength=\"256\" name=\"Last-Name\" data-name=\"Last Name\" placeholder=\"Your last name\" type=\"text\" id=\"Last-Name\" required=\"\"/></div></div><div class=\"field-wrap\"><label for=\"Email\" class=\"field-label\">Email</label><input class=\"text-field ui-input\" maxlength=\"256\" name=\"Email\" data-name=\"Email\" placeholder=\"you@example.com\" type=\"email\" id=\"Email\" required=\"\"/></div><div class=\"field-wrap\"><label for=\"Phone\" class=\"field-label\">Phone</label><input class=\"text-field ui-input\" maxlength=\"256\" name=\"Phone\" data-name=\"Phone\" placeholder=\"+880 1XXX-XXXXXX\" type=\"tel\" id=\"Phone\" required=\"\"/></div><div class=\"field-wrap\"><label for=\"Photography-Type\" id=\"Photography-Type\" class=\"field-label\">Photography type</label><select id=\"Photography-Type\" name=\"Photography-Type\" data-name=\"Photography Type\" required=\"\" class=\"text-field select ui-select\"><option value=\"\">Select a service</option><option value=\"First\">First choice</option><option value=\"Second\">Second choice</option><option value=\"Third\">Third choice</option></select></div><div class=\"field-wrap\"><label for=\"Message\" class=\"field-label\">Message</label><textarea placeholder=\"Tell me about your project...\" maxlength=\"5000\" id=\"Message\" name=\"Message\" data-name=\"Message\" class=\"text-field message ui-input\"></textarea></div><input type=\"submit\" data-wait=\"Please wait...\" class=\"submit-button full ui-button\" value=\"Send Message\"/></form><div class=\"success-message ui-form-done\"><div>Thank you for reaching out! Your message has been received. I&#x27;ll get back to you soon.</div></div><div class=\"error-message ui-form-fail\"><div>Something went wrong while sending your message. Please try again.</div></div></div></div></div></div>";

export function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const form = root.querySelector<HTMLFormElement>('form');
    const doneEl = root.querySelector<HTMLElement>('.ui-form-done');
    const failEl = root.querySelector<HTMLElement>('.ui-form-fail');
    const submitBtn = form?.querySelector<HTMLInputElement>('input[type="submit"]');
    if (!form) return;

    const originalSubmitValue = submitBtn?.value || 'Send Message';

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.value = submitBtn.getAttribute('data-wait') || 'Please wait...';
      }
      if (failEl) failEl.style.display = 'none';

      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder';
      const formData = new FormData(form);

      try {
        if (endpoint.includes('/placeholder')) {
          form.style.display = 'none';
          if (doneEl) doneEl.style.display = 'block';
          return;
        }
        const res = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.style.display = 'none';
          if (doneEl) doneEl.style.display = 'block';
        } else {
          if (failEl) failEl.style.display = 'block';
          if (submitBtn) submitBtn.value = originalSubmitValue;
        }
      } catch {
        if (failEl) failEl.style.display = 'block';
        if (submitBtn) submitBtn.value = originalSubmitValue;
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section contact"
      dangerouslySetInnerHTML={{ __html: CONTACT_SECTION_INNER_HTML }}
    />
  );
}
