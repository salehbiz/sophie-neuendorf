export interface MemberItem {
  slug: string;
  route: string;
  title: string;
  description: string;
  ogImage: string;
  navbarVariant: 'white' | 'black';
  sections: { tag: string; className: string; html: string }[];
}

export const MEMBERS: MemberItem[] = [
  {
    "slug": "alex-reed",
    "route": "/member/alex-reed",
    "title": "Alex Reed - Conax",
    "description": "Alex Reed, Founder of Conax and a visionary technology leader, established the company to transform how businesses handle modern challenges.",
    "ogImage": "/assets/images/6a6bf787cd6667b66f2f8d1e-startup-ce3790.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Founder of Conax</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Alex Reed, Founder of Conax and a visionary technology leader, established the company to transform how businesses handle modern challenges.</div><div class=\"text-body-5 color-black-60\">With extensive industry expertise and a passion for innovation, Alex has built a dedicated team focused on developing cutting-edge solutions to empower clients and drive sustainable success.</div></div><img src=\"/assets/images/6a6bf7adf33ad9d8730af90d-image-1-214381.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf7adf33ad9d8730af90d-image-1-p-500-78fe70.webp 500w, /assets/images/6a6bf7adf33ad9d8730af90d-image-1-p-800-e91f05.webp 800w, /assets/images/6a6bf7adf33ad9d8730af90d-image-1-p-1080-96d0b3.webp 1080w, /assets/images/6a6bf7adf33ad9d8730af90d-image-1-p-1600-ab07f9.webp 1600w, /assets/images/6a6bf7adf33ad9d8730af90d-image-1-p-2000-21bb2f.webp 2000w, /assets/images/6a6bf7adf33ad9d8730af90d-image-1-214381.webp 2132w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Alex Reed</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf787cd6667b66f2f8d1e-startup-ce3790.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf787cd6667b66f2f8d1e-startup-p-500-0094b5.webp 500w, /assets/images/6a6bf787cd6667b66f2f8d1e-startup-p-800-58ca51.webp 800w, /assets/images/6a6bf787cd6667b66f2f8d1e-startup-p-1080-945bff.webp 1080w, /assets/images/6a6bf787cd6667b66f2f8d1e-startup-ce3790.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "aris-thorne",
    "route": "/member/aris-thorne",
    "title": "Aris Thorne - Conax",
    "description": "Aris Thorne, Creative Technologist at Conax, bridges the gap between imaginative design and advanced technical execution.",
    "ogImage": "/assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-5522bc.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Creative Technologist</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Aris Thorne, Creative Technologist at Conax, bridges the gap between imaginative design and advanced technical execution.</div><div class=\"text-body-5 color-black-60\">Combining innovative coding with interactive visual concepts, Aris experiments with emerging technologies to build captivating digital experiences, pushing the boundaries of brand storytelling and setting new standards for creative interaction.</div></div><img src=\"/assets/images/6a559fbf119987195314e6ac-dba6548-ef716b.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a559fbf119987195314e6ac-dba6548-p-500-b5ffe8.webp 500w, /assets/images/6a559fbf119987195314e6ac-dba6548-p-800-b6ce1f.webp 800w, /assets/images/6a559fbf119987195314e6ac-dba6548-p-1080-2614a5.webp 1080w, /assets/images/6a559fbf119987195314e6ac-dba6548-ef716b.webp 1296w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Aris Thorne</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-5522bc.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-p-500-ea0046.webp 500w, /assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-p-800-8bb88c.webp 800w, /assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-p-1080-a18f51.webp 1080w, /assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-5522bc.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "chloe-whitmore",
    "route": "/member/chloe-whitmore",
    "title": "Chloe Whitmore - Conax",
    "description": "Chloe Whitmore, Director of Client Success at Conax, leads client engagement with a focus on long-term partnership value.",
    "ogImage": "/assets/images/6a6bfa23eb520bb2d0cac4af-testimo-6e1dee.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Director of Client Success</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Chloe Whitmore, Director of Client Success at Conax, leads client engagement with a focus on long-term partnership value.</div><div class=\"text-body-5 color-black-60\">Combining empathetic relationship management with strategic problem-solving, Chloe empowers her team to deliver tailored solutions, ensuring every client achieves measurable success and builds a lasting, trusted connection with the brand.</div></div><img src=\"/assets/images/6a6bfa1d255002e2467589b2-image-1-a17d7a.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bfa1d255002e2467589b2-image-1-p-500-368fdc.webp 500w, /assets/images/6a6bfa1d255002e2467589b2-image-1-a17d7a.webp 641w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Chloe Whitmore</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bfa23eb520bb2d0cac4af-testimo-6e1dee.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bfa23eb520bb2d0cac4af-testimo-p-500-f426dc.webp 500w, /assets/images/6a6bfa23eb520bb2d0cac4af-testimo-p-800-9d34bc.webp 800w, /assets/images/6a6bfa23eb520bb2d0cac4af-testimo-p-1080-64e69e.webp 1080w, /assets/images/6a6bfa23eb520bb2d0cac4af-testimo-6e1dee.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "david-jones",
    "route": "/member/david-jones",
    "title": "David Jones - Conax",
    "description": "David Jones, Lead Full-Stack Engineer at Conax, architects seamless end-to-end digital systems with a focus on reliability.",
    "ogImage": "/assets/images/6a6bf985924acce51702667d-testimo-a33081.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Lead Full-Stack Engineer</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">David Jones, Lead Full-Stack Engineer at Conax, architects seamless end-to-end digital systems with a focus on reliability.</div><div class=\"text-body-5 color-black-60\">Bridging front-end design and complex back-end infrastructure, David empowers his engineering team to deploy fast, secure web applications that power smoothly integrated, scalable user experiences across all devices.</div></div><img src=\"/assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-73d324.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-p-500-865c26.webp 500w, /assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-p-800-2c73b4.webp 800w, /assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-p-1080-11a4ab.webp 1080w, /assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-73d324.webp 1500w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">David Jones</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf985924acce51702667d-testimo-a33081.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf985924acce51702667d-testimo-p-500-fe3ef8.webp 500w, /assets/images/6a6bf985924acce51702667d-testimo-p-800-3b7556.webp 800w, /assets/images/6a6bf985924acce51702667d-testimo-p-1080-b444ee.webp 1080w, /assets/images/6a6bf985924acce51702667d-testimo-a33081.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "elena-moretti",
    "route": "/member/elena-moretti",
    "title": "Elena Moretti - Conax",
    "description": "Elena Moretti, Head of Motion Design at Conax, brings digital brand stories to life through dynamic visual experiences.",
    "ogImage": "/assets/images/6a6bf905378001ff53dd8050-testimo-043b92.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Head of Motion Design</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Elena Moretti, Head of Motion Design at Conax, brings digital brand stories to life through dynamic visual experiences.</div><div class=\"text-body-5 color-black-60\">Blending artistic creativity with advanced animation techniques, Elena leads her team in crafting fluid, engaging motion graphics that elevate user interaction and define the company’s modern visual identity.</div></div><img src=\"/assets/images/6a6bf91d39236c28356da104-1df733e-43a101.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf91d39236c28356da104-1df733e-p-500-900a2e.webp 500w, /assets/images/6a6bf91d39236c28356da104-1df733e-p-800-0ab3e6.webp 800w, /assets/images/6a6bf91d39236c28356da104-1df733e-p-1080-79ba60.webp 1080w, /assets/images/6a6bf91d39236c28356da104-1df733e-43a101.webp 1200w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Elena Moretti</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf905378001ff53dd8050-testimo-043b92.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf905378001ff53dd8050-testimo-p-500-b6435f.webp 500w, /assets/images/6a6bf905378001ff53dd8050-testimo-p-800-354ee1.webp 800w, /assets/images/6a6bf905378001ff53dd8050-testimo-p-1080-e70c86.webp 1080w, /assets/images/6a6bf905378001ff53dd8050-testimo-043b92.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "julian-frost",
    "route": "/member/julian-frost",
    "title": "Julian Frost - Conax",
    "description": "Julian Frost, a seasoned technology engineer, founded Fizens with a vision to revolutionize the way people manage their money.",
    "ogImage": "/assets/images/6a680c9aa94b2be117745e77-creativ-a52635.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Product Designer</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Julian Frost, a seasoned technology engineer, founded Fizens with a vision to revolutionize the way people manage their money. </div><div class=\"text-body-5 color-black-60\">With a deep understanding of financial markets and a commitment to innovation, Sarah Jane has assembled a team of experts dedicated to providing users with the best possible financial tools.</div></div><img src=\"/assets/images/image-154-f29c53.png\" loading=\"lazy\" alt=\"\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Julian Frost</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a680c9aa94b2be117745e77-creativ-a52635.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a680c9aa94b2be117745e77-creativ-p-500-36f1df.webp 500w, /assets/images/6a680c9aa94b2be117745e77-creativ-p-800-0f8149.webp 800w, /assets/images/6a680c9aa94b2be117745e77-creativ-p-1080-7c8d44.webp 1080w, /assets/images/6a680c9aa94b2be117745e77-creativ-a52635.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "lily-vance",
    "route": "/member/lily-vance",
    "title": "Lily Vance - Conax",
    "description": "Lily Vance, CEO of Conax and a dynamic executive leader, drives the company’s strategic vision with a focus on sustainable growth.",
    "ogImage": "/assets/images/6a6bf88617b4db6d9e0aff63-startup-af22da.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">CEO of Conax</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Lily Vance, CEO of Conax and a dynamic executive leader, drives the company’s strategic vision with a focus on sustainable growth.</div><div class=\"text-body-5 color-black-60\">Leveraging her deep market insights and strategic foresight, Lily has empowered an elite team to pioneer groundbreaking solutions, delivering exceptional value and transforming customer experiences worldwide.</div></div><img src=\"/assets/images/6a6bf93ae72e3e4a09a0bd17-f8437a9-ab8986.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf93ae72e3e4a09a0bd17-f8437a9-p-500-a50dbc.webp 500w, /assets/images/6a6bf93ae72e3e4a09a0bd17-f8437a9-p-800-06850a.webp 800w, /assets/images/6a6bf93ae72e3e4a09a0bd17-f8437a9-p-1080-2a19a9.webp 1080w, /assets/images/6a6bf93ae72e3e4a09a0bd17-f8437a9-ab8986.webp 1200w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Lily Vance</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf88617b4db6d9e0aff63-startup-af22da.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf88617b4db6d9e0aff63-startup-p-500-cd98c7.webp 500w, /assets/images/6a6bf88617b4db6d9e0aff63-startup-p-800-90026c.webp 800w, /assets/images/6a6bf88617b4db6d9e0aff63-startup-p-1080-e1ae75.webp 1080w, /assets/images/6a6bf88617b4db6d9e0aff63-startup-af22da.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "marcus-thorne",
    "route": "/member/marcus-thorne",
    "title": "Marcus Thorne - Conax",
    "description": "Marcus Thorne, Senior Developer at Conax and a skilled software architect, leads the core engineering team with a focus on robust design.",
    "ogImage": "/assets/images/6a6bf8b166c5a0c20845b5d1-startup-28d812.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Senior Developer</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Marcus Thorne, Senior Developer at Conax and a skilled software architect, leads the core engineering team with a focus on robust design.</div><div class=\"text-body-5 color-black-60\">Combining deep technical expertise with a passion for efficiency, Marcus crafts scalable software solutions and mentors developers to deliver high-performance systems that drive business success.</div></div><img src=\"/assets/images/image-143-09fba6.png\" loading=\"lazy\" alt=\"\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Marcus Thorne</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf8b166c5a0c20845b5d1-startup-28d812.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf8b166c5a0c20845b5d1-startup-p-500-e28046.webp 500w, /assets/images/6a6bf8b166c5a0c20845b5d1-startup-p-800-6abcda.webp 800w, /assets/images/6a6bf8b166c5a0c20845b5d1-startup-p-1080-fb2cb2.webp 1080w, /assets/images/6a6bf8b166c5a0c20845b5d1-startup-28d812.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "sarah-jenkins",
    "route": "/member/sarah-jenkins",
    "title": "Sarah Jenkins - Conax",
    "description": "Sarah Jenkins, Senior UX Researcher at Conax, bridges user behavior and product strategy through deep qualitative research.",
    "ogImage": "/assets/images/6a6bf9c0766a113835ca4300-testimo-1e2c6c.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Senior UX Researcher</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Sarah Jenkins, Senior UX Researcher at Conax, bridges user behavior and product strategy through deep qualitative research.</div><div class=\"text-body-5 color-black-60\">Harnessing empathetic insights and data-driven methods, Sarah guides design decisions to create intuitive digital experiences, ensuring every product solution authentically aligns with user needs and drives long-term customer engagement.</div></div><img src=\"/assets/images/image-184-dc0dd1.png\" loading=\"lazy\" alt=\"\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Sarah Jenkins</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf9c0766a113835ca4300-testimo-1e2c6c.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf9c0766a113835ca4300-testimo-p-500-4f5fb5.webp 500w, /assets/images/6a6bf9c0766a113835ca4300-testimo-p-800-106ec5.webp 800w, /assets/images/6a6bf9c0766a113835ca4300-testimo-p-1080-e27514.webp 1080w, /assets/images/6a6bf9c0766a113835ca4300-testimo-1e2c6c.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "sophia-chen",
    "route": "/member/sophia-chen",
    "title": "Sophia Chen - Conax",
    "description": "Sophia Chen, Lead UX Researcher at Conax, transforms complex user behaviors into actionable design strategies. Combining deep psychological insight with rigorous methodology.",
    "ogImage": "/assets/images/6a6bf8d069eb0588b568ac8f-creativ-e8b7ab.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Lead UX Researcher</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Sophia Chen, Lead UX Researcher at Conax, transforms complex user behaviors into actionable design strategies. Combining deep psychological insight with rigorous methodology.</div><div class=\"text-body-5 color-black-60\">Sophia guides product teams to build intuitive, accessible interfaces, ensuring every digital experience deeply resonates with users and drives meaningful engagement across platforms.</div></div><img src=\"/assets/images/6a6bf95ec0a93ee3bfff7d24-8073b73-0f127f.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf95ec0a93ee3bfff7d24-8073b73-p-500-2a5fe0.webp 500w, /assets/images/6a6bf95ec0a93ee3bfff7d24-8073b73-p-800-eaf9c7.webp 800w, /assets/images/6a6bf95ec0a93ee3bfff7d24-8073b73-0f127f.webp 900w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Sophia Chen</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf8d069eb0588b568ac8f-creativ-e8b7ab.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf8d069eb0588b568ac8f-creativ-p-500-ee1a18.webp 500w, /assets/images/6a6bf8d069eb0588b568ac8f-creativ-p-800-1fa98e.webp 800w, /assets/images/6a6bf8d069eb0588b568ac8f-creativ-p-1080-f3fa44.webp 1080w, /assets/images/6a6bf8d069eb0588b568ac8f-creativ-e8b7ab.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  },
  {
    "slug": "viktor-petrov",
    "route": "/member/viktor-petrov",
    "title": "Viktor Petrov - Conax",
    "description": "Viktor leads his team in unearthing critical user insights, guiding strategic design choices that elevate functional usability and foster meaningful customer connections across every touchpoint.",
    "ogImage": "/assets/images/6a6bf9d22e2ceb8c934a973b-testimo-19ca70.webp",
    "navbarVariant": "black",
    "sections": [
      {
        "tag": "section",
        "className": "section detail-member",
        "html": "<section class=\"section detail-member\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bb-b2d1c9bb\" class=\"grid-overlay\"><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bc-b2d1c9bb\" class=\"line-overlay _01 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9bd-b2d1c9bb\" class=\"line-overlay _02 black\"></div><div id=\"ui-node-e708577b-1e23-dd06-1470-07a5b2d1c9be-b2d1c9bb\" class=\"line-overlay _03 black\"></div></div><div class=\"ui-blockcontainer container ui-container\"><div class=\"detail-member-wrap\"><div id=\"ui-node-_884716ad-ca8f-a5e9-f7cc-2c293148d3e7-3e88f939\" class=\"col-left-member-detail\"><div><div class=\"text-body-4 semibold\">Lead UX Researcher</div><div class=\"profile-member-detail\"><div class=\"text-profile-member-detail\"><div class=\"text-body-5 color-black-60\">Viktor leads his team in unearthing critical user insights, guiding strategic design choices that elevate functional usability and foster meaningful customer connections across every touchpoint.</div><div class=\"text-body-5 color-black-60\">Viktor Petrov, Lead UX Researcher at Conax, decodes human behavior to shape intuitive digital products. Combining advanced research methodologies with deep analytical thinking.</div></div><img src=\"/assets/images/6a5eef7abcd6436f10e193a0-b9fca6a-c637c5.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a5eef7abcd6436f10e193a0-b9fca6a-p-500-a05f5d.webp 500w, /assets/images/6a5eef7abcd6436f10e193a0-b9fca6a-p-800-a0edf2.webp 800w, /assets/images/6a5eef7abcd6436f10e193a0-b9fca6a-p-1080-b1f5d2.webp 1080w, /assets/images/6a5eef7abcd6436f10e193a0-b9fca6a-c637c5.webp 1600w\" class=\"image-profile-cover\"/></div></div><div class=\"name-mamber\">Viktor Petrov</div></div><div id=\"ui-node-_2dabc094-1e3b-f2f4-3e74-aaece48ddfbb-3e88f939\" class=\"col-right-member-detail\"><img src=\"/assets/images/6a6bf9d22e2ceb8c934a973b-testimo-19ca70.webp\" loading=\"lazy\" alt=\"\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 727px, 939px\" srcset=\"/assets/images/6a6bf9d22e2ceb8c934a973b-testimo-p-500-8cbfb7.webp 500w, /assets/images/6a6bf9d22e2ceb8c934a973b-testimo-p-800-e47ffb.webp 800w, /assets/images/6a6bf9d22e2ceb8c934a973b-testimo-p-1080-7b1706.webp 1080w, /assets/images/6a6bf9d22e2ceb8c934a973b-testimo-19ca70.webp 1260w\" class=\"image-avatar-member\"/><div class=\"bg-cover-image\"></div></div></div></div></section>"
      }
    ]
  }
];

export function getMemberBySlug(slug: string): MemberItem | undefined {
  return MEMBERS.find((m) => m.slug === slug);
}
