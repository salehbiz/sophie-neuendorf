const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"blog-hero-title\"><h1 class=\"hero-title\">Creative notes.</h1></div><div class=\"blog-bottom-flex\"><div class=\"blog-tag\"><img src=\"/assets/icons/forbidden-a66668.svg\" loading=\"lazy\" alt=\"\" class=\"tag-icon\"/><div class=\"body-text\">Blog</div></div><div class=\"blog-feature-text-wrap\"><div class=\"blog-feature-text\">                Thoughts on photography, visual <span class=\"blog-feature-span\">storytelling, and the art of seeing differently.</span></div></div><div class=\"blog-para-wrap\"><div class=\"body-text\">A collection of ideas, experiences, and behind-the-lens stories from the VOYRA journey.</div></div></div></div>";

export function BlogsHeroSection() {
  return (
    <section
      className="section blog-hero"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
