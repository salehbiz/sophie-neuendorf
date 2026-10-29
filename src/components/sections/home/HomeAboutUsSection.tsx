import { PhotoWheel, type WheelPhoto } from './PhotoWheel';

const HEAD_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"about-wheel-head\"><div class=\"about-sub-content\"><div tag-text=\"\" class=\"tag-text\">About</div><div summary-text=\"\" class=\"h4\">Sophie Neuendorf is an internationally recognized leader at the crossroads of fine art, finance, and technology.</div></div><div class=\"h4 about-wheel-label\">Condesa de Teba</div></div></div>";

const PHOTOS: WheelPhoto[] = [
  {
    src: '/assets/sophie/img/about/web/about-1.jpg',
    alt: 'Sophie Neuendorf in a white blouse in front of a colour-block painting',
    position: '50% 35%',
  },
  {
    src: '/assets/sophie/img/about/web/about-8.jpg',
    alt: 'Sophie Neuendorf in a white dress with her dog against a pink wall',
    position: '50% 55%',
  },
  {
    src: '/assets/sophie/img/about/web/about-9.jpg',
    alt: 'Sophie Neuendorf in an evening gown on a terrace set for dinner',
    position: '45% 50%',
  },
  {
    src: '/assets/sophie/img/about/web/about-13.jpg',
    alt: 'Sophie Neuendorf in a black top in a bright gallery space',
    position: '62% 45%',
  },
  {
    src: '/assets/sophie/img/about/web/about-16.jpg',
    alt: 'Sophie Neuendorf in a white gown on a sunlit terrace',
    position: '50% 40%',
  },
];

export function HomeAboutUsSection() {
  return (
    <section className="section about-us about-wheel-section">
      <PhotoWheel photos={PHOTOS} headHtml={HEAD_HTML} />
    </section>
  );
}
