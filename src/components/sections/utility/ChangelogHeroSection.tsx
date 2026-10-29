const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"common-wrapper\"><div class=\"common-heading-wrap\"><h1 class=\"common-heading\">Changelog</h1></div><div class=\"style-guide-hero-para\"><p class=\"body-text\">The Changelog page keeps track of all template updates, improvements, fixes, and newly added features.</p></div></div></div>";

export function ChangelogHeroSection() {
  return (
    <section
      className="section utility"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
