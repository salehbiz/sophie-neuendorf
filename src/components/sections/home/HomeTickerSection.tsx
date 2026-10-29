const SECTION_INNER_HTML = "<div class=\"text-ticker\"><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div></div><div class=\"text-ticker\"><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div></div><div class=\"text-ticker\"><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div></div><div class=\"text-ticker\"><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div></div><div class=\"text-ticker\"><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div><div class=\"ticker-text\">Create <span class=\"ticker-span\">something lasting ®</span></div></div>";

export function HomeTickerSection() {
  return (
    <div
      className="text-ticker-wrap"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
