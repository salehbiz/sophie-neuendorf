import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section is-first"};
const SECTION_HTML = "<div class=\"grid-overlay\"><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc57-36b2bc56\" class=\"line-overlay _01\"></div><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc58-36b2bc56\" class=\"line-overlay _02\"></div><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc59-36b2bc56\" class=\"line-overlay _03\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"hero-utility-pages\"><div class=\"section-label-wrap\"><div class=\"label-content\"><div class=\"label-line\"></div><div class=\"label-text\">UTILITY PAGES</div></div></div><div id=\"ui-node-f4d3d936-dd6b-f6fa-47a2-6e7b7e1a7570-7e1a7567\" class=\"heading-hero-utility-wrap\"><h1 class=\"heading-hero-utility\">PRIVACY POLICY</h1></div><div id=\"ui-node-f4d3d936-dd6b-f6fa-47a2-6e7b7e1a7573-7e1a7567\" class=\"sub-heading-hero-utility-wrap\"><div class=\"sub-heading-hero-utility\">Welcome to Conax (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring a secure experience for our clients. This Privacy Policy  explains how we collect, use, and safeguard your information when you  visit our website or use our design services.</div></div></div></div>";

export function PrivacyPolicyHeroSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
