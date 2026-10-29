import { RolesMotion } from './RolesMotion';

const ROLES = [
  { role: 'Vice President, Investor Relations & Public Relations', org: 'Artnet AG' },
  { role: 'Chairman of the Supervisory Board', org: 'Galerie Neuendorf AG' },
  { role: 'Adjunct Professor', org: 'IE University, Madrid' },
  { role: 'Guest Professor', org: 'SDA Bocconi University, Milan' },
  { role: 'Advisory Board', org: 'Artdeal AG, Vivents' },
];

/**
 * "Current Professional Experience", laid out like the Kaze concept section: a tall photo
 * bleeding off the left edge, label and statement on the right with a wide photo bleeding off
 * the right edge, then the role list and link, then one large photo across the width.
 */
export function HomeRolesSection() {
  return (
    <section className="section kz-roles">
      <div className="kz-top">
        <figure className="kz-photo kz-photo-left" data-drift="">
          <img
            src="/assets/sophie/img/roles/web/role-portrait.jpg"
            alt="Sophie Neuendorf in front of a large blue painting at home"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="kz-right">
          <div className="kz-label">
            <span>Current Professional Experience</span>
            <span>05</span>
          </div>
          <h2 className="kz-statement">
            Over twelve years of professional experience in the art industry require analytical and
            innovative thinking, astute strategies, and leadership.
          </h2>
          <figure className="kz-photo kz-photo-right" data-drift="">
            <img
              src="/assets/sophie/img/roles/web/role-art.jpg"
              alt="Sophie Neuendorf presenting a framed artwork"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p className="kz-note">
            Education as well as professional experience in New York, London, Berlin, Paris, and Madrid.
          </p>
        </div>
      </div>

      <div className="kz-middle">
        <div className="kz-list-wrap">
          <p className="kz-lead">Fine Art | Finance | Technology :</p>
          <ul className="kz-list">
            {ROLES.map((item, i) => (
              <li key={item.org} data-reveal="" style={{ transitionDelay: `${i * 90}ms` }}>
                {item.role}, <span>{item.org}</span>
              </li>
            ))}
          </ul>
        </div>
        <a href="/about" className="roles-link kz-link">
          About / CV <span aria-hidden="true">→</span>
        </a>
      </div>

      <figure className="kz-photo kz-photo-wide" data-drift="">
        <img
          src="/assets/sophie/img/about/web/about-13.jpg"
          alt="Sophie Neuendorf in a black top in a bright gallery space"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <RolesMotion selector=".kz-roles" />
    </section>
  );
}
