const SECTION_INNER_HTML = "<div class=\"utility-page-content _02\"><img src=\"/assets/images/group-59603-110ab7.webp\" alt=\"\" sizes=\"(max-width: 732px) 100vw, 732px\" srcset=\"/assets/images/group-59603-p-500-02f86a.webp 500w, /assets/images/group-59603-110ab7.webp 732w\" class=\"_404-img\"/><h1 class=\"_404-title\">Page not found</h1><div class=\"_404-para\">The page you are looking for doesn&#x27;t exist or has been moved</div><div class=\"button-wrap\"><a href=\"/\" class=\"button ui-inline-block\"><div>Go back home</div></a></div></div>";

export function NotFoundSection() {
  return (
    <div
      className="utility-page-wrap"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
