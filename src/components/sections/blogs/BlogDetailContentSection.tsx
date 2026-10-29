export interface BlogDetailContentSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function BlogDetailContentSection({ html }: BlogDetailContentSectionProps) {
  return (
    <section
      className="section blog-detail"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
