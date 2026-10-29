import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section"};
const SECTION_HTML = "<div class=\"title-h0-wrap\"><h1 class=\"title-h0\">PAGE NOT FOUND</h1></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"_404-wrapper\"><div id=\"ui-node-_352e703e-867d-92f4-422c-550fc6987ce0-9dba0979\" class=\"_404-content-left\"><div class=\"_404-heading-wrap\"><div class=\"_404-heading\">Oops...<br/>Something’s wrong!</div></div></div><div id=\"ui-node-b3105d31-3fb1-70aa-e8bd-12b3e48eb05a-9dba0979\" class=\"_404-content-right\"><div class=\"_404-description-wrap\"><div class=\"_404-description\">Page not found. The request URL doesn’t exist.<br/>Please go back to Conax home.</div></div><div class=\"_404-button-wrap\"><a data-anim-id=\"anim-57ae2082\" href=\"/\" class=\"secondar-button ui-inline-block\"><div class=\"layer-default secondary\"><div class=\"text-button-wrap\"><div class=\"text-button\">Back to Home</div></div></div><div class=\"layer-hover secondary\"><div class=\"text-button-wrap\"><div class=\"text-button absolute\">Back to Home</div></div></div></a></div></div></div></div>";

export function NotFoundContentSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
