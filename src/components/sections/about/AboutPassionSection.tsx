const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"passion-wrapper\"><div class=\"passion-content\"><div slide-all=\"\" class=\"passion-top\"><div class=\"h4 medium\">A story built from a passion for photography</div><div class=\"passion-para-wrap\"><div class=\"body-text grey\">Photography started as a curiosity and grew into a creative practice built around people, places, light, and emotion. Every project is an opportunity to find a different perspective and turn a fleeting moment into something lasting.</div></div></div><div class=\"passion-bottom\"><div slide-all=\"\" class=\"passion-iteam\"><div class=\"h3\">04+</div><div class=\"h6\">Years of experience</div></div><div slide-all=\"\" class=\"passion-iteam\"><div class=\"h3\">1,000+</div><div class=\"h6\">Moments captured</div></div><div slide-all=\"\" class=\"passion-iteam\"><div class=\"h3\">100+</div><div class=\"h6\">Happy clients</div></div></div></div><div card-rotate-x=\"\" class=\"img-wrap passion-img-wrap\"><img class=\"passion-img\" src=\"/assets/images/frame-2147241262-1-16cd40.webp\" alt=\"Model in sunglasses surrounded by photographers’ cameras\" sizes=\"(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px\" img-anim=\"\" loading=\"lazy\" srcset=\"/assets/images/frame-2147241262-1--p-500-108795.webp 500w, /assets/images/frame-2147241262-1--p-800-c1872a.webp 800w, /assets/images/frame-2147241262-1-16cd40.webp 950w\"/></div></div></div>";

export function AboutPassionSection() {
  return (
    <section
      className="section passion"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
