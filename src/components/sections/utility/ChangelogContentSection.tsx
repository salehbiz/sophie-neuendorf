const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"changelog-wrapper\"><div class=\"changelog-box\"><div class=\"version-block\"><div class=\"text-h3 white\">Version 2.3.0</div></div><div class=\"version-block\"><div class=\"version-para\">New Dashboard</div></div><div class=\"version-block\"><ul role=\"list\" class=\"list\"><li><div class=\"version-para\">New features or functionalities.</div></li><li><div class=\"version-para\">Modifications to existing features.</div></li></ul></div><div class=\"version-block\"><div class=\"version-para\">User Account</div></div><div class=\"version-block\"><ul role=\"list\" class=\"list\"><li><div class=\"version-para\">Bug fixes.</div></li><li><div class=\"version-para\">Security improvements.</div></li></ul></div></div><div class=\"changelog-box\"><div class=\"version-block\"><div class=\"text-h3 white\">Version 2.3.1</div></div><div class=\"version-block\"><div class=\"version-para\">New feature release</div></div><div class=\"version-block\"><ul role=\"list\" class=\"list\"><li><div class=\"version-para\">New features or functionalities.</div></li><li><div class=\"version-para\">Flexible options for recurring tasks customization.</div></li><li><div class=\"version-para\">Schedule recurring tasks for daily, weekly, or custom intervals.</div></li><li><div class=\"version-para\">Updated UI for improved user experience.</div></li></ul></div></div></div></div>";

export function ChangelogContentSection() {
  return (
    <section
      className="section style"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
