/**
 * Site owner details for the Impressum (§ 5 DDG) and the privacy policy (Art. 13 GDPR).
 * Both pages read from here, so the details only need updating in one place.
 *
 * ADDRESS is required by law on both pages (a postal address where she can be served, not a
 * P.O. box). It stays empty until Sophie's address is provided; the pages render it as soon as
 * lines are added here, e.g. ['Street 1', '12345 City', 'Germany'].
 */
export const OWNER = {
  name: 'Sophie Neuendorf',
  address: [] as string[],
  email: 'info@neuendorfteba.com',
  phone: '+49 172 3176317',
  phoneHref: 'tel:+491723176317',
};
