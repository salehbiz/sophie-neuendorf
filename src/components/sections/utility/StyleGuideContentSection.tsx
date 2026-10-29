const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"style-guide-wrapper\"><div class=\"style-wrap\"><div class=\"style-top-wrap\"><div class=\"style-top-title\">Color</div></div><div class=\"color-box-wrapper\"><div class=\"color-box a\"></div><div class=\"color-box b\"></div><div class=\"color-box c\"></div><div class=\"color-box d\"></div><div class=\"color-box e\"></div><div class=\"color-box h\"></div><div class=\"color-box i\"></div><div class=\"color-box j\"></div></div></div><div class=\"style-wrap\"><div class=\"style-top-wrap\"><div class=\"style-top-title\">Heading</div></div><div class=\"all-heading-wrapper\"><div class=\"font-wrap\"><h1>Heading 01</h1><div>72px</div></div><div class=\"font-wrap\"><h2>Heading 02</h2><div>62px</div></div><div class=\"font-wrap\"><h3>Heading 03</h3><div>40px</div></div><div class=\"font-wrap\"><h4>Heading 04</h4><div>32px</div></div><div class=\"font-wrap\"><h5>Heading 05</h5><div>24px</div></div><div class=\"font-wrap\"><h6>Heading 06</h6><div>20px</div></div><div class=\"font-wrap\"><p>Body Text</p><div>16px</div></div><div class=\"font-wrap\"><p class=\"body-text-s\">Body Text S</p><div>14px</div></div></div></div><div class=\"style-wrap\"><div class=\"style-top-wrap\"><div class=\"style-top-title\">Button</div></div><div class=\"all-button-wrap\"><div class=\"button-wrap\"><a href=\"#\" class=\"button ui-inline-block\"><div>Button 01</div></a></div></div></div></div></div>";

export function StyleGuideContentSection() {
  return (
    <section
      className="section style"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
