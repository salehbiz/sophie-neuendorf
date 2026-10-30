import { srcSet } from '@/lib/responsive';

// Template hero layout (label, title, paragraph) followed by a still row of three photos,
// with Sophie's text from the old About / CV page and her own photos.
const IMG = '/assets/sophie/img';

const TRIO = [
  { src: `${IMG}/about/web/about-13.jpg`, alt: 'Sophie Neuendorf walking through her living room' },
  { src: `${IMG}/about/web/about-1.jpg`, alt: 'Sophie Neuendorf in front of a red, orange and blue colour field painting' },
  { src: `${IMG}/about/web/about-9.jpg`, alt: 'Sophie Neuendorf on a terrace above the sea in Positano' },
];

const trioImages = TRIO.map(
  (img) =>
    `<img src="${img.src}" srcset="${srcSet(img.src)}" sizes="(max-width: 767px) 100vw, 33vw" loading="lazy" alt="${img.alt}" class="about-trio-img"/>`,
).join('');

const SECTION_INNER_HTML =
  '<div class="ui-blockcontainer container ui-container"><div class="about-hero-content">' +
  '<div class="body-text-s">About / CV</div>' +
  '<div class="about-title-wrap"><h1 class="hero-title">Fine Art | Finance | Technology</h1></div>' +
  '<div class="about-para-wrap"><div class="body-text">Education as well as professional experience in New York, London, Berlin, Paris, and Madrid.</div></div>' +
  '</div>' +
  `<div class="about-trio">${trioImages}</div>` +
  '</div>';

export function AboutHeroSection() {
  return (
    <section
      className="section about"
      dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
    />
  );
}
