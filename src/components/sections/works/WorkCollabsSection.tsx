import { RolesMotion } from '@/components/sections/home/RolesMotion';
import { srcSet } from '@/lib/responsive';

/**
 * Brand Collaborations as editorial spreads on a 12-column grid (after a Swiss grid layout
 * reference): a running meta row on top of each spread, a large photo, a small caption, and the
 * title or intro set apart in its own column. Text is from the old site's Brand Collaboration
 * page; the third spread is Sophie's 2026 birthday at Neuendorf House, linking to its feature.
 * Photos drift gently inside their frames via RolesMotion.
 */
export function WorkCollabsSection() {
  return (
    <section className="section wc">
      <article className="wc-spread">
        <div className="wc-meta">
          <span>Brand Collaborations</span>
          <span>01 / 03</span>
        </div>

        <div className="wc-grid">
          <div className="wc-item wc-item-piaget">
            <figure className="wc-photo wc-photo-wide" data-drift="">
              <img
                src="/assets/sophie/img/collabs/piaget.jpg"
                srcSet={srcSet('/assets/sophie/img/collabs/piaget.jpg')}
                sizes="(max-width: 767px) 90vw, 60vw"
                alt="Sophie Neuendorf with guests at a Piaget evening"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="wc-caption">
              <span>Piaget</span>
              <span>(01)</span>
            </div>
            <p className="wc-desc" data-reveal="">
              An evening with the Swiss maison Piaget, celebrating its watchmaking and high jewellery.
              Pictured with Quentin Hebert, Marketing &amp; Communication Director Europe, Piaget.
            </p>
          </div>

          <div className="wc-side">
            <h1 className="wc-title">Brand Collaborations</h1>
            <p className="wc-intro" data-reveal="">
              Curating moments of alignment between art, heritage and innovation, Sophie collaborates
              with a select number of brands whose ethos resonates with her values. Each collaboration
              is rooted in mutual respect, cultural nuance and the pursuit of timeless expression.
              Below is a glimpse into these synergies.
            </p>
          </div>
        </div>
      </article>

      <article className="wc-spread">
        <div className="wc-meta">
          <span>Brand Collaborations</span>
          <span>02 / 03</span>
        </div>

        <div className="wc-grid">
          <div className="wc-side wc-side-left">
            <h2 className="wc-name">Kaviar Gauche</h2>
            <p className="wc-tagline" data-reveal="">
              A collaboration with the Berlin couture house Kaviar Gauche, known for its bridal gowns,
              joining fine craftsmanship with a modern, romantic sense of design.
            </p>
          </div>

          <div className="wc-item wc-item-kaviar">
            <figure className="wc-photo wc-photo-tall" data-drift="">
              <img
                src="/assets/sophie/img/collabs/kaviar-gauche.jpg"
                srcSet={srcSet('/assets/sophie/img/collabs/kaviar-gauche.jpg')}
                sizes="(max-width: 767px) 90vw, 44vw"
                alt="Sophie Neuendorf in a white lace gown on a pink terrace in Mallorca"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="wc-caption">
              <span>Kaviar Gauche</span>
              <span>(02)</span>
            </div>
          </div>
        </div>
      </article>

      <article className="wc-spread">
        <div className="wc-meta">
          <span>Selected Features</span>
          <span>03 / 03</span>
        </div>

        <div className="wc-grid">
          <div className="wc-item wc-item-house">
            <a href="/press/neuendorf-house-2026" className="wc-photo-link">
              <figure className="wc-photo wc-photo-wide" data-drift="">
                <img
                  src="/assets/sophie/img/house-2026/rooftop-cover.jpg"
                  srcSet={srcSet('/assets/sophie/img/house-2026/rooftop-cover.jpg')}
                  sizes="(max-width: 767px) 90vw, 60vw"
                  alt="Guests on the roof terrace of Neuendorf House at sunset"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </a>
            <div className="wc-caption">
              <span>Neuendorf House</span>
              <span>(03)</span>
            </div>
          </div>

          <div className="wc-side">
            <h2 className="wc-name">Neuendorf House</h2>
            <p className="wc-tagline" data-reveal="">
              Sophie&rsquo;s birthday at Neuendorf House, Santanyi, Mallorca, 2026.
            </p>
            <a href="/press/neuendorf-house-2026" className="roles-link wc-feature-link">
              View the feature <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>

      {/* Gentle drift: the frames match each photo's own shape, so only a small overscan is spare. */}
      <RolesMotion selector=".wc" drift={0.05} />
    </section>
  );
}
