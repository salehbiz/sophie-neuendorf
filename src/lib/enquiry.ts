export const EMAIL = 'info@neuendorfteba.com';

// FormSubmit (no account): the first submission emails EMAIL a one-time activation link, and
// later messages are delivered there. After activation FormSubmit offers a random alias that can
// replace the address via NEXT_PUBLIC_FORMSUBMIT_ENDPOINT.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || `https://formsubmit.co/ajax/${EMAIL}`;

export type EnquiryStatus = 'idle' | 'sending' | 'sent' | 'activation' | 'error';

/** Posts a form's fields to FormSubmit and maps the reply to the status the forms show. */
export async function sendEnquiry(form: HTMLFormElement): Promise<EnquiryStatus> {
  const data = Object.fromEntries(new FormData(form));
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    if (res.ok && String(json.success) === 'true') return 'sent';
    if (/activat/i.test(json.message ?? '')) return 'activation';
    return 'error';
  } catch {
    return 'error';
  }
}
