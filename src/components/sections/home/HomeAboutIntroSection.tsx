import React from 'react';

const SECTION_PROPS: Record<string, any> = {"className":"section is-primary"};
const SECTION_HTML = "<div class=\"grid-overlay\"><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc57-36b2bc56\" class=\"line-overlay _01\"></div><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc58-36b2bc56\" class=\"line-overlay _02\"></div><div id=\"ui-node-_438be197-114b-8ed4-cd31-280636b2bc59-36b2bc56\" class=\"line-overlay _03\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"about-us-wrapper\"><div id=\"ui-node-_782ee10b-00ac-11ae-63b4-27b6afff16e0-df5f6df3\" class=\"about-left-col\"><div class=\"display-flex space-between\"><div class=\"section-label-wrap\"><div class=\"label-content\"><div class=\"label-line white\"></div><div class=\"label-text white\">ABOUT US</div></div></div><div class=\"text-body-4 netrual-500\">SINCE 2020</div></div><img src=\"/assets/images/image-83-2e2cb8.webp\" loading=\"lazy\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px\" srcset=\"/assets/images/image-83-p-500-df28cb.webp 500w, /assets/images/image-83-p-800-db2c4e.webp 800w, /assets/images/image-83-p-1080-7cab54.webp 1080w, /assets/images/image-83-2e2cb8.webp 1308w\" alt=\"Conax\" class=\"image-about\"/><div class=\"text-body-4 netrual-500 text-align-end\">We bridge the gap between technology and intuitive human experience through high-end design and strategic engineering.</div></div><div id=\"ui-node-_782ee10b-00ac-11ae-63b4-27b6afff16e9-df5f6df3\" class=\"scroll-text-wrap\"><div class=\"heading-h4 text-scroll-2\">We help ambitious teams build brands, interfaces, and websites that earn attention. From identity to launch, every detail is crafted to make your business look confident and perform better.</div></div></div></div><div class=\"ui-blockcontainer container absolute ui-container\"><div class=\"about-icon-cover\"><img src=\"/assets/icons/asset-662b09.svg\" loading=\"lazy\" id=\"ui-node-_782ee10b-00ac-11ae-63b4-27b6afff16ee-df5f6df3\" alt=\"\"/></div></div>";

export function HomeAboutIntroSection() {
  return (
    <section
      {...SECTION_PROPS}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: SECTION_HTML }}
    />
  );
}
