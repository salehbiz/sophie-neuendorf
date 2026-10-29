import { RolesMotion } from '@/components/sections/home/RolesMotion';

/**
 * Brand Collaborations as two editorial spreads on a 12-column grid (after a Swiss grid
 * layout reference): a running meta row on top of each spread, a large photo, a small caption,
 * and the title or intro set apart in its own column. Text is from the old site's
 * Brand Collaboration page. Photos drift inside their frames via RolesMotion.
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
            <figure className="wc-photo wc-photo-wide" data-drift="">
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
            <p className="wc-tagline" data-reveal="">Fine Art | Finance | Technology</p>
          </div>

          <div className="wc-item wc-item-kaviar">
            <figure className="wc-photo wc-photo-tall" data-drift="">
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

      {/* Gentle drift: the frames match each photo's own shape, so only a small overscan is spare. */}
      <RolesMotion selector=".wc" drift={0.05} />
    </section>
  );
}
