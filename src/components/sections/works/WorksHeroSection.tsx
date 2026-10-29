const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"work-hero-content\"><div class=\"work-hero-title\"><h1 class=\"hero-title\">Selected Stories</h1></div><div hero-bottom=\"\" class=\"work-hero-para\"><div class=\"h6 medium\">(2016-25©)</div><div class=\"body-text\">A curated collection of people, places, emotions, and moments captured through the VOYRA lens.</div></div></div><div class=\"search-wrap\"><form action=\"/search\" class=\"search ui-form\"><label for=\"search\" class=\"field-label v2\">Search</label><input class=\"search-input ui-input\" autofocus=\"true\" maxlength=\"256\" name=\"query\" placeholder=\"Search stories...\" type=\"search\" id=\"search\" required=\"\"/></form></div></div>";

export function WorksHeroSection() {
  return (
    <section
      className="section work-hero"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
