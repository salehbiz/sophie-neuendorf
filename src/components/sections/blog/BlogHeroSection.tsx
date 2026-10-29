import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section hero-inner-page"};
const SECTION_HTML = "<div class=\"title-large-wrap\"><h1 class=\"title-large\">BLOG*BLOG</h1></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"image-hero-inner-page\"><img loading=\"lazy\" src=\"/assets/images/image-184-186fb1.webp\" alt=\"Conax\" class=\"image-cover-title-large\"/></div><div class=\"content-cover-title\"><div id=\"ui-node-ba0bec5f-cf57-ec7e-c2e7-ece55c964b84-5c964b7c\" class=\"socials-wrap\"><a href=\"#\" class=\"links-socials ui-inline-block\"><div class=\"item-link-footer text-color-black\">Twitter</div><div class=\"icon-12x12 ui-embed\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n  <path d=\"M10.5 1.5V8.23757H9.75414V2.76796L2.0221 10.5L1.5 9.95304L9.20718 2.24586H3.73757V1.5H10.5Z\" fill=\"black\" fill-opacity=\"0.5\"/>\n</svg></div></a><a href=\"#\" class=\"links-socials ui-inline-block\"><div class=\"item-link-footer text-color-black\">Instagram</div><div class=\"icon-12x12 ui-embed\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n  <path d=\"M10.5 1.5V8.23757H9.75414V2.76796L2.0221 10.5L1.5 9.95304L9.20718 2.24586H3.73757V1.5H10.5Z\" fill=\"black\" fill-opacity=\"0.5\"/>\n</svg></div></a><a href=\"#\" class=\"links-socials ui-inline-block\"><div class=\"item-link-footer text-color-black\">Dribbble</div><div class=\"icon-12x12 ui-embed\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\">\n  <path d=\"M10.5 1.5V8.23757H9.75414V2.76796L2.0221 10.5L1.5 9.95304L9.20718 2.24586H3.73757V1.5H10.5Z\" fill=\"black\" fill-opacity=\"0.5\"/>\n</svg></div></a></div><div id=\"ui-node-ba0bec5f-cf57-ec7e-c2e7-ece55c964b91-5c964b7c\" class=\"info-email\"><div class=\"top-info-email\">Email at</div><div class=\"bottom-info-email\">hello@conaxagency.com</div></div></div></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div>";

export function BlogHeroSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
