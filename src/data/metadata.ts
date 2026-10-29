import type { Metadata } from 'next';

export interface PageMetaEntry {
  title: string;
  description: string;
  ogImage: string;
  navbarVariant: 'white' | 'black';
}

export const PAGE_METADATA: Record<string, PageMetaEntry> = {
  "/": {
    "title": "Conax",
    "description": "Elevate your brand with Conax – a bold, modern digital agency studio built for creative agencies, design studios, and portfolios. Fully responsive &amp; easy to customize .",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "white"
  },
  "/404": {
    "title": "Not Found - Conax",
    "description": "Oops! The page you’re looking for has moved or been deleted. Return to the Conax homepage and continue exploring our digital agency experience.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/about-us": {
    "title": "About Us - Conax",
    "description": "Learn more about Conax, a strategy-first creative agency, and discover our story, design team, mission, and bold digital solutions for growing brands.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/services": {
    "title": "Services - Conax",
    "description": "Discover how Conax delivers creative services, from strategy-first brand consulting to seamless web development for ambitious companies.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/services/ui-ux-design": {
    "title": "UI/UX Design  - Conax",
    "description": "We craft immersive digital interfaces that prioritize user clarity and seamless navigation across every touchpoint.",
    "ogImage": "/assets/images/6a5705e5136987eae9747ae3-f61a8ef-ed25f5.webp",
    "navbarVariant": "black"
  },
  "/services/brand-identity": {
    "title": "Brand Identity  - Conax",
    "description": "We build comprehensive visual systems that capture the core essence and unique personality of your business.",
    "ogImage": "/assets/images/6a5707eb3484344c65db03a2-7934dc6-1f5f3b.webp",
    "navbarVariant": "black"
  },
  "/services/web-development": {
    "title": "Web Development  - Conax",
    "description": "Our team translates high-end designs into high-performance digital products using clean, scalable code.",
    "ogImage": "/assets/images/6a57081913127724314f2b6f-d6073aa-235849.webp",
    "navbarVariant": "black"
  },
  "/services/digital-strategy": {
    "title": "Digital Strategy  - Conax",
    "description": "We provide the data-driven roadmap necessary to navigate the competitive landscape.",
    "ogImage": "/assets/images/6a57084305a7994eb59d5416-0d3e991-c32aba.webp",
    "navbarVariant": "black"
  },
  "/work": {
    "title": "Work - Conax",
    "description": "Explore the Conax modern Template portfolio featuring modern digital projects, sleek brand identities, and forward-thinking user experiences.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/works/zenith-brand-refresh": {
    "title": "ZENITH BRAND REFRESH - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a62d4e9d53e9282cd816e27-frame-1-ad11ff.webp",
    "navbarVariant": "white"
  },
  "/works/veloce-e-commerce": {
    "title": "VELOCE E-COMMERCE - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a62d3cfcc96bb9812a88d65-4cc3925-73d324.webp",
    "navbarVariant": "white"
  },
  "/works/aura-fintech-app": {
    "title": "AURA FINTECH APP - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a62d31b234c5d26d37a2739-frame-1-ad9765.webp",
    "navbarVariant": "white"
  },
  "/works/stellar-saas-dashboard": {
    "title": "STELLAR SAAS DASHBOARD - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a5ef44a31795eb4b080b183-frame-1-39b97b.webp",
    "navbarVariant": "white"
  },
  "/works/luma-health": {
    "title": "LUMA HEALTH - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a57081913127724314f2b6f-d6073aa-235849.webp",
    "navbarVariant": "white"
  },
  "/works/northland-studio-website": {
    "title": "NORTHLAND STUDIO WEBSITE - Conax",
    "description": "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
    "ogImage": "/assets/images/6a6005d775e0849fde0997a9-1e6be83-1-4fa17a.webp",
    "navbarVariant": "white"
  },
  "/blog": {
    "title": "Blog - Conax",
    "description": "Explore the Conax modern Template blog for UI/UX design trends, web development tips, creative strategies, and insights from industry experts.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/blog/how-ai-is-redefining-the-next-generation-of-user-interfaces": {
    "title": "How AI is Redefining the Next Generation of User Interfaces.",
    "description": "How AI is Redefining the Next Generation of User Interfaces.. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a54be09ffd3e8237d3debcf-image-7-526ae9.webp",
    "navbarVariant": "black"
  },
  "/blog/how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions": {
    "title": "How Behavioral Psychology and Cognitive Load Theory Drive Digital Conversions.",
    "description": "How Behavioral Psychology and Cognitive Load Theory Drive Digital Conversions.. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a559f1cdaadc331c12d33b8-613c54d-261f88.webp",
    "navbarVariant": "black"
  },
  "/blog/implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention": {
    "title": "Implementing Scalable UX Frameworks That Support Rapid User Acquisition and Retention",
    "description": "Implementing Scalable UX Frameworks That Support Rapid User Acquisition and Retention. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a559e06a3cbdabd4b526142-7b168d3-d7408f.webp",
    "navbarVariant": "black"
  },
  "/blog/motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability": {
    "title": "Motion with Meaning: Exploring the Top 5 Web Animation Trends That Enhance Usability",
    "description": "Motion with Meaning: Exploring the Top 5 Web Animation Trends That Enhance Usability. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a559ea736585ccf6ea3f120-d38a3ec-193f20.webp",
    "navbarVariant": "black"
  },
  "/blog/why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography": {
    "title": "Why High-End Brands are Trading Polish for Structural Honesty and Bold Typography.",
    "description": "Why High-End Brands are Trading Polish for Structural Honesty and Bold Typography.. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a559fca2c850f73e623665e-dba6548-0bc509.webp",
    "navbarVariant": "black"
  },
  "/blog/why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech": {
    "title": "Why Minimalist Visual Identities Continue to Dominate the Modern Luxury and Tech",
    "description": "Why Minimalist Visual Identities Continue to Dominate the Modern Luxury and Tech. Discover fresh ideas, design insights, creative trends, and digital perspectives shaping modern brands and experiences.",
    "ogImage": "/assets/images/6a559bd8b39d6f792e49fb4c-frame-1-fbecc5.webp",
    "navbarVariant": "black"
  },
  "/blog-categories/support": {
    "title": "Support - Conax",
    "description": "Explore stories and insights from our Support category, covering creative ideas, industry perspectives, design thinking, and digital trends.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/blog-categories/development": {
    "title": "Development - Conax",
    "description": "Explore stories and insights from our Development category, covering creative ideas, industry perspectives, design thinking, and digital trends.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/blog-categories/web-design": {
    "title": "Web dessign - Conax",
    "description": "Explore stories and insights from our Web dessign category, covering creative ideas, industry perspectives, design thinking, and digital trends.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/pricing": {
    "title": "Pricing - Conax",
    "description": "Choose the right plan for your brand with clear pricing tiers for UI/UX design, web development, and digital strategy on the Conax modern Template.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/contact": {
    "title": "Contact - Conax",
    "description": "Have a question, proposal, or design inquiry? Contact Conax through our form or email for help with your digital presence and business growth.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "black"
  },
  "/privacy-policy": {
    "title": "Privacy Policy - Conax",
    "description": "Review the official Privacy Policy of Conax digital agency studio. Understand your data rights, information security practices, and how your privacy is protected on our site.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "white"
  },
  "/terms-of-service": {
    "title": "Terms Of Service - Conax",
    "description": "Explore the Terms of Service for Conax, covering transparency, user rights, service agreements, and platform terms for visitors and agency clients.",
    "ogImage": "/assets/images/og-image-58fc08.png",
    "navbarVariant": "white"
  },
  "/member/alex-reed": {
    "title": "Alex Reed - Conax",
    "description": "Alex Reed, Founder of Conax and a visionary technology leader, established the company to transform how businesses handle modern challenges.",
    "ogImage": "/assets/images/6a6bf787cd6667b66f2f8d1e-startup-ce3790.webp",
    "navbarVariant": "black"
  },
  "/member/aris-thorne": {
    "title": "Aris Thorne - Conax",
    "description": "Aris Thorne, Creative Technologist at Conax, bridges the gap between imaginative design and advanced technical execution.",
    "ogImage": "/assets/images/6a6bfa4cdb787fcbfd5e849e-testimo-5522bc.webp",
    "navbarVariant": "black"
  },
  "/member/chloe-whitmore": {
    "title": "Chloe Whitmore - Conax",
    "description": "Chloe Whitmore, Director of Client Success at Conax, leads client engagement with a focus on long-term partnership value.",
    "ogImage": "/assets/images/6a6bfa23eb520bb2d0cac4af-testimo-6e1dee.webp",
    "navbarVariant": "black"
  },
  "/member/david-jones": {
    "title": "David Jones - Conax",
    "description": "David Jones, Lead Full-Stack Engineer at Conax, architects seamless end-to-end digital systems with a focus on reliability.",
    "ogImage": "/assets/images/6a6bf985924acce51702667d-testimo-a33081.webp",
    "navbarVariant": "black"
  },
  "/member/elena-moretti": {
    "title": "Elena Moretti - Conax",
    "description": "Elena Moretti, Head of Motion Design at Conax, brings digital brand stories to life through dynamic visual experiences.",
    "ogImage": "/assets/images/6a6bf905378001ff53dd8050-testimo-043b92.webp",
    "navbarVariant": "black"
  },
  "/member/julian-frost": {
    "title": "Julian Frost - Conax",
    "description": "Julian Frost, a seasoned technology engineer, founded Fizens with a vision to revolutionize the way people manage their money.",
    "ogImage": "/assets/images/6a680c9aa94b2be117745e77-creativ-a52635.webp",
    "navbarVariant": "black"
  },
  "/member/lily-vance": {
    "title": "Lily Vance - Conax",
    "description": "Lily Vance, CEO of Conax and a dynamic executive leader, drives the company’s strategic vision with a focus on sustainable growth.",
    "ogImage": "/assets/images/6a6bf88617b4db6d9e0aff63-startup-af22da.webp",
    "navbarVariant": "black"
  },
  "/member/marcus-thorne": {
    "title": "Marcus Thorne - Conax",
    "description": "Marcus Thorne, Senior Developer at Conax and a skilled software architect, leads the core engineering team with a focus on robust design.",
    "ogImage": "/assets/images/6a6bf8b166c5a0c20845b5d1-startup-28d812.webp",
    "navbarVariant": "black"
  },
  "/member/sarah-jenkins": {
    "title": "Sarah Jenkins - Conax",
    "description": "Sarah Jenkins, Senior UX Researcher at Conax, bridges user behavior and product strategy through deep qualitative research.",
    "ogImage": "/assets/images/6a6bf9c0766a113835ca4300-testimo-1e2c6c.webp",
    "navbarVariant": "black"
  },
  "/member/sophia-chen": {
    "title": "Sophia Chen - Conax",
    "description": "Sophia Chen, Lead UX Researcher at Conax, transforms complex user behaviors into actionable design strategies. Combining deep psychological insight with rigorous methodology.",
    "ogImage": "/assets/images/6a6bf8d069eb0588b568ac8f-creativ-e8b7ab.webp",
    "navbarVariant": "black"
  },
  "/member/viktor-petrov": {
    "title": "Viktor Petrov - Conax",
    "description": "Viktor leads his team in unearthing critical user insights, guiding strategic design choices that elevate functional usability and foster meaningful customer connections across every touchpoint.",
    "ogImage": "/assets/images/6a6bf9d22e2ceb8c934a973b-testimo-19ca70.webp",
    "navbarVariant": "black"
  }
};

export function buildPageMetadata(route: string): Metadata {
  const entry = PAGE_METADATA[route] || PAGE_METADATA['/'];
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://conax.studio'),
    title: entry.title,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      images: [entry.ogImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.title,
      description: entry.description,
      images: [entry.ogImage],
    },
  };
}
