export interface BlogDetailHeroSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function BlogDetailHeroSection({ html }: BlogDetailHeroSectionProps) {
  return (
    <section
      className="section blog-detail-hero"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
