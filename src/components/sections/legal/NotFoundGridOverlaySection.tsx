import React from 'react';

const SECTION_PROPS: Record<string, any> = {"id":"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb","className":"grid-overlay"};
const SECTION_HTML = "<div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div>";

export function NotFoundGridOverlaySection() {
  return (
    <div
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
