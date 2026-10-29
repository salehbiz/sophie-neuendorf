const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"common-wrapper\"><div class=\"common-heading-wrap\"><h1 class=\"common-heading\">Style Guide</h1></div><div class=\"style-guide-hero-para\"><p class=\"body-text\">This style guide defines the core design elements and reusable components used throughout the template.</p></div></div></div>";

export function StyleGuideHeroSection() {
  return (
    <section
      className="section utility"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
