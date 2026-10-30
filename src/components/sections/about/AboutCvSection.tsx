import { RolesMotion } from '@/components/sections/home/RolesMotion';
import { srcSet } from '@/lib/responsive';

const IMG = '/assets/sophie/img';

const ROLES = [
  { role: 'Vice President, Investor Relations & Public Relations', org: 'Artnet AG' },
  { role: 'Chairman of the Supervisory Board', org: 'Galerie Neuendorf AG' },
  { role: 'Adjunct Professor', org: 'IE University, Madrid' },
  { role: 'Guest Professor', org: 'SDA Bocconi University, Milan' },
  { role: 'Advisory Board', org: 'Artdeal AG, Vivents' },
];

/**
 * About / CV after the hero, as two clearly separate chapters (I About, II CV), each opened by a
 * large chapter title: three editorial spreads in the Work page's grid (meta row, photo
 * drifting in its frame, a column of text), led by text this time. All copy is from the old
 * site's About / CV page.
 */
export function AboutCvSection() {
  return (
    <section className="section wc ac">
      <header className="ac-chapter">
        <span className="ac-chapter-num">I</span>
        <h2 className="ac-chapter-title">About</h2>
      </header>

      <article className="wc-spread">
        <div className="wc-grid">
          <div className="wc-side wc-side-left ac-side">
            <h2 className="wc-name">Sophie Neuendorf</h2>
            <p className="ac-body" data-reveal="">
              Sophie Neuendorf is an internationally recognized leader at the crossroads of fine art,
              finance, and technology. With over twelve years of experience and a career spanning New
              York, London, Berlin, Paris, and Madrid, she brings strategic insight, innovation, and
              global vision to every endeavor. As a brand ambassador, professor, and board member,
              Sophie’s mission is to build meaningful connections and sustainable growth in the
              evolving art world.
            </p>
          </div>
          <div className="wc-item ac-photo-right">
            <figure className="wc-photo" style={{ aspectRatio: '1100 / 1490' }} data-drift="">
              <img
                src={`${IMG}/roles/web/role-portrait.jpg`}
                srcSet={srcSet(`${IMG}/roles/web/role-portrait.jpg`)}
                sizes="(max-width: 767px) 145vw, 80vw"
                alt="Sophie Neuendorf in front of a large blue painting at home"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </article>

      <header className="ac-chapter">
        <span className="ac-chapter-num">II</span>
        <h2 className="ac-chapter-title">CV</h2>
        <p className="ac-chapter-list">Summary · Current Professional Experience</p>
      </header>

      <article className="wc-spread">
        <div className="wc-meta">
          <span />
          <span>01 / 02</span>
        </div>
        <div className="wc-grid">
          <div className="wc-item ac-photo-left">
            <figure className="wc-photo" style={{ aspectRatio: '1800 / 778' }} data-drift="">
              <img
                src={`${IMG}/roles/web/role-art.jpg`}
                srcSet={srcSet(`${IMG}/roles/web/role-art.jpg`)}
                sizes="(max-width: 767px) 145vw, 80vw"
                alt="Sophie Neuendorf presenting a framed artwork"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="wc-side ac-side">
            <h2 className="wc-name">Summary</h2>
            <p className="ac-body" data-reveal="">
              Over twelve years of professional experience in the art industry require analytical and
              innovative thinking, astute strategies, and leadership.
            </p>
            <p className="ac-body" data-reveal="">
              Building strong networks and partnerships globally are pivotal for success.
            </p>
            <p className="ac-body" data-reveal="">
              An international background coupled with strategic foresight form the foundation of
              having successfully developed sustainable businesses and growth at the intersection of
              fine art, finance, and technology.
            </p>
          </div>
        </div>
      </article>

      <article className="wc-spread">
        <div className="wc-meta">
          <span />
          <span>02 / 02</span>
        </div>
        <div className="wc-grid">
          <div className="wc-side wc-side-left ac-side">
            <h2 className="wc-name">Current Professional Experience</h2>
            <ul className="ac-roles">
              {ROLES.map((item, i) => (
                <li key={item.org} data-reveal="" style={{ transitionDelay: `${i * 90}ms` }}>
                  {item.role}
                  <span>{item.org}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="wc-item ac-photo-right">
            <figure className="wc-photo" style={{ aspectRatio: '1466 / 1100' }} data-drift="">
              <img
                src={`${IMG}/about/web/about-9.jpg`}
                srcSet={srcSet(`${IMG}/about/web/about-9.jpg`)}
                sizes="(max-width: 767px) 145vw, 80vw"
                alt="Sophie Neuendorf on a terrace above the sea in Positano"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </article>

      {/* Same heavy drift as the home page's roles section. */}
      <RolesMotion selector=".ac" />
    </section>
  );
}
