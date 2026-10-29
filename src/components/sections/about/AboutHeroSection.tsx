// Template hero layout (label, title, paragraph, a looping photo strip and a centre photo that
// grows on scroll), with Sophie's text from the old About / CV page and her own photos.
const IMG = '/assets/sophie/img';

const LOOP = [
  { src: `${IMG}/about/web/about-13.jpg`, alt: 'Sophie Neuendorf walking through her living room' },
  { src: `${IMG}/about/web/about-8.jpg`, alt: 'Sophie Neuendorf in white with her dog against a pink wall' },
  { src: `${IMG}/about/web/about-9.jpg`, alt: 'Sophie Neuendorf on a terrace above the sea in Positano' },
  { src: `${IMG}/roles/web/role-portrait.jpg`, alt: 'Sophie Neuendorf in front of a large blue painting' },
  { src: `${IMG}/about/web/about-16.jpg`, alt: 'Sophie Neuendorf in a white gown on a pink terrace' },
];

const loopImages = LOOP.map(
  (img) => `<img src="${img.src}" loading="lazy" alt="${img.alt}" class="about-loop-img"/>`,
).join('');

const SECTION_INNER_HTML =
  '<div class="ui-blockcontainer container ui-container"><div class="about-hero-content">' +
  '<div class="body-text-s">About / CV</div>' +
  '<div class="about-title-wrap"><h1 class="hero-title">Fine Art | Finance | Technology</h1></div>' +
  '<div class="about-para-wrap"><div class="body-text">Education as well as professional experience in New York, London, Berlin, Paris, and Madrid.</div></div>' +
  '</div></div>' +
  '<div class="about-img-flex"><div class="about-img-loop-wrap">' +
  `<div class="about-img-loop">${loopImages}</div>`.repeat(4) +
  '</div><div class="img-wrap about">' +
  `<img class="about-img-middle" src="${IMG}/about/web/about-1.jpg" alt="Sophie Neuendorf in front of a red, orange and blue colour field painting" img-anim="" loading="lazy"/>` +
  '</div></div>';

export function AboutHeroSection() {
  return (
    <section
      className="section about"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
