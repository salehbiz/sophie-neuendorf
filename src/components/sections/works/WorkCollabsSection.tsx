import { RolesMotion } from '@/components/sections/home/RolesMotion';
import { ProgressiveBlur } from './ProgressiveBlur';

/**
 * Brand Collaborations as two editorial spreads on a 12-column grid (after a Swiss grid
 * layout reference): a running meta row on top of each spread, a large photo, a small caption,
 * and the title or intro set apart in its own column. Text is from the old site's
 * Brand Collaboration page. Photos are redrawn with the WebGL progressive blur (ProgressiveBlur).
 */
export function WorkCollabsSection() {
  return (
    <section className="section wc">
      <article className="wc-spread">
        <div className="wc-meta">
          <span>Brand Collaborations</span>
          <span>01 / 02</span>
        </div>

        <div className="wc-grid">
          <div className="wc-item wc-item-piaget">
            <figure className="wc-photo wc-photo-wide" data-blur="">
              <img
                src="/assets/sophie/img/collabs/piaget.jpg"
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
          <span>02 / 02</span>
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
            <figure className="wc-photo wc-photo-tall" data-blur="">
              <img
                src="/assets/sophie/img/collabs/kaviar-gauche.jpg"
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

      {/* Text reveals only: the photos are drawn by the progressive blur below. */}
      <RolesMotion selector=".wc" drift={0} />
      <ProgressiveBlur selector=".wc" />
    </section>
  );
}
