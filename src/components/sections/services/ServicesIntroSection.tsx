import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section margin-hero-inner-page"};
const SECTION_HTML = "<div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"scroll-text-wrap\"><div class=\"scroll-text-single\"><div class=\"block\"></div><div id=\"ui-node-_2b8fff3e-c16f-8517-80b1-06dba0d79c96-2a75763f\" class=\"text-scroll-large text-scroll\">We specialize in</div></div><div class=\"scroll-text-single\"><div id=\"ui-node-b62bf9ac-e5c5-3a74-d1c0-431198246b0e-2a75763f\" class=\"text-scroll-large text-scroll\">the development of corporate websites, online services and  online stores.</div></div></div></div>";

export function ServicesIntroSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
