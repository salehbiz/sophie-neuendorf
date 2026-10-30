import { RolesMotion } from './RolesMotion';
import { srcSet } from '@/lib/responsive';

const PHOTOS = [
  {
    src: '/assets/sophie/img/about/web/about-8.jpg',
    alt: 'Sophie Neuendorf in a white dress with her dog against a pink wall',
    sizes: '(max-width: 767px) 125vw, 60vw',
  },
  {
    src: '/assets/sophie/img/about/web/about-1.jpg',
    alt: 'Sophie Neuendorf in a white blouse in front of a colour-block painting',
    sizes: '(max-width: 767px) 100vw, 45vw',
  },
  {
    src: '/assets/sophie/img/about/web/about-16.jpg',
    alt: 'Sophie Neuendorf in a white gown on a sunlit terrace',
    sizes: '(max-width: 767px) 100vw, 50vw',
  },
  {
    src: '/assets/sophie/img/about/web/about-9.jpg',
    alt: 'Sophie Neuendorf in an evening gown on a terrace set for dinner',
    sizes: '(max-width: 767px) 125vw, 60vw',
  },
];

/**
 * About strip: the statement and "Condesa de Teba", then a staggered set of photos that bleed off
 * the page edges and drift inside their frames on scroll, the same parallax as the roles section.
 */
export function HomeAboutUsSection() {
  return (
    <section className="section about-us ab-drift">
      <div className="ui-blockcontainer container ui-container">
        <div className="about-wheel-head">
          <div className="about-sub-content">
            <div className="tag-text">About</div>
            <div className="h4">
              Sophie Neuendorf is an internationally recognized leader at the crossroads of fine art,
              finance, and technology.
            </div>
          </div>
          <div className="h4 about-wheel-label">Condesa de Teba</div>
        </div>
      </div>

      <div className="ab-photos">
        {PHOTOS.map((photo, i) => (
          <figure key={photo.src} className={`kz-photo ab-photo ab-photo-${i + 1}`} data-drift="">
            <img
              src={photo.src}
              srcSet={srcSet(photo.src)}
              sizes={photo.sizes}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>

      <RolesMotion selector=".ab-drift" />
    </section>
  );
}
