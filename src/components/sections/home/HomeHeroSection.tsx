import { HeroFade } from './HeroFade';

const SECTION_INNER_HTML = "<div class=\"ui-blockcontainer container ui-container\"><div class=\"hero-wrapper\"><div class=\"since-wrap\" hero-fade=\"\"><div class=\"body-text white\"><span class=\"since-span\">Condesa de</span> Teba</div></div></div><h1 class=\"ps-sr\">Sophie Neuendorf</h1></div><div data-delay=\"4000\" data-animation=\"cross\" class=\"hero-slider ui-slider\" data-autoplay=\"false\" data-easing=\"linear\" data-hide-arrows=\"false\" data-disable-swipe=\"false\" data-autoplay-limit=\"0\" data-nav-spacing=\"3\" data-duration=\"1200\" data-infinite=\"true\"><div class=\"hero-mask ui-slider-mask\"><div class=\"hero-slide ui-slide\"><img src=\"/assets/sophie/img/hero-portrait-1600.jpg\" loading=\"eager\" fetchpriority=\"high\" sizes=\"(max-aspect-ratio: 3/2) 150vh, 100vw\" srcset=\"/assets/sophie/img/hero-portrait-640.webp 640w, /assets/sophie/img/hero-portrait-1024.webp 1024w, /assets/sophie/img/hero-portrait-1600.webp 1600w, /assets/sophie/img/hero-portrait-2400.webp 2400w, /assets/sophie/img/hero-portrait.jpg 2880w\" alt=\"Sophie Neuendorf seated on a wooden chair in a white blouse and olive trousers\" class=\"hero-slider-img sophie-hero-img\"/></div></div><div class=\"left-arrow ui-slider-arrow-left\"><div class=\"ui-icon-slider-left\"></div></div><div class=\"right-arrow ui-slider-arrow-right\"><div class=\"ui-icon-slider-right\"></div></div><div class=\"slide-nav hide ui-slider-nav ui-round ui-num\"></div></div>";

export function HomeHeroSection() {
  return (
    <>
      <section
        className="section hero"
        dangerouslySetInnerHTML={{ __html: SECTION_INNER_HTML }}
      />
      <HeroFade />
    </>
  );
}
