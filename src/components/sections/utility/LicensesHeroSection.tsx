const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"common-wrapper\"><div class=\"common-heading-wrap\"><h1 class=\"common-heading\">License</h1></div><div class=\"style-guide-hero-para _02\"><p class=\"body-text\">All graphical assets in this template are licensed for personal and commercial use. If you’d like to use a specific asset, please check the license below.</p></div></div></div>";

export function LicensesHeroSection() {
  return (
    <section
      className="section utility"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
