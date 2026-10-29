import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section is-gray padding-medium"};
const SECTION_HTML = "<div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"newsletter-wrapper\"><div class=\"child-grid-layout\"><div class=\"section-label-wrap\"><div class=\"label-content\"><div class=\"label-line black\"></div><div class=\"label-text black\">NEWSLETTER</div></div></div></div><div class=\"title-newsletter\">UPDATE LASTEST CONTENT</div><div id=\"ui-node-eb70bacc-5710-4e0d-97c4-d756ed668f5a-ed668f54\" class=\"full-width-grid\"><div class=\"newsletter-form ui-form\"><form id=\"email-form-2\" name=\"email-form-2\" data-name=\"Email Form 2\" method=\"get\" class=\"input-form-newsletter\"><input class=\"input-field-newsletter ui-input\" maxlength=\"256\" name=\"email-2\" data-name=\"Email 2\" aria-label=\"email-2\" placeholder=\"Enter your email\" type=\"email\" id=\"email-2\" required=\"\"/><div class=\"button-form-in-field\"><input type=\"submit\" data-wait=\"\" class=\"button-send-overlay ui-button\" value=\"\"/><div class=\"icon-16x16 ui-embed\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n  <path d=\"M10.5938 4.64062L9.89062 5.35938L12.0312 7.5H2V8.5H12.0312L9.89062 10.6406L10.5938 11.3594L13.9531 8L10.5938 4.64062Z\" fill=\"white\"/>\n</svg></div></div></form><div class=\"ui-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"ui-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div></div>";

export function ContactNewsletterSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
