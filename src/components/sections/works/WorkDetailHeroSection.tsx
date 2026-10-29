export interface WorkDetailHeroSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorkDetailHeroSection({ html }: WorkDetailHeroSectionProps) {
  return (
    <section
      className="section work-detail-hero"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
