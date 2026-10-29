export interface WorkDetailContentSectionProps {
  html: string;
}

function unwrapSectionInner(outerHtml: string): string {
  const openEnd = outerHtml.indexOf('>');
  const closeIdx = outerHtml.lastIndexOf('</section>');
  return openEnd !== -1 && closeIdx !== -1 ? outerHtml.slice(openEnd + 1, closeIdx) : outerHtml;
}

export function WorkDetailContentSection({ html }: WorkDetailContentSectionProps) {
  return (
    <section
      className="section project-detail"
      dangerouslySetInnerHTML={{ __html: unwrapSectionInner(html) }}
    />
  );
}
