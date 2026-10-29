const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"common-wrapper\"><div class=\"common-heading-wrap\"><h1 class=\"common-heading\">Instruction</h1></div><div class=\"style-guide-hero-para\"><p class=\"body-text\">A complete guide to customizing the template, managing content, and getting your website ready for launch.</p></div></div></div>";

export function InstructionsHeroSection() {
  return (
    <section
      className="section utility"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
