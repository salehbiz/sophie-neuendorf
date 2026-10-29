import { RolesMotion } from './RolesMotion';

const ROLES = [
  { role: 'Vice President, Investor Relations & Public Relations', org: 'Artnet AG' },
  { role: 'Chairman of the Supervisory Board', org: 'Galerie Neuendorf AG' },
  { role: 'Adjunct Professor', org: 'IE University, Madrid' },
  { role: 'Guest Professor', org: 'SDA Bocconi University, Milan' },
  { role: 'Advisory Board', org: 'Artdeal AG, Vivents' },
];

/** Editorial two-column "Current Professional Experience" section (replaces the template's services slider). */
export function HomeRolesSection() {
  return (
    <section className="section roles-concept">
      <div className="ui-blockcontainer container ui-container">
        <div className="roles-grid">
          <div className="roles-left">
            <div className="roles-photo roles-photo-tall">
              <img
                src="/assets/sophie/img/roles/web/role-portrait.jpg"
                alt="Sophie Neuendorf in front of a large blue painting at home"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ol className="roles-list">
              {ROLES.map((item, i) => (
                <li key={item.org} className="roles-row" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="roles-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="roles-role">{item.role}</span>
                  <span className="roles-org">{item.org}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="roles-right">
            <h2 tag-text="" className="tag-text roles-label">
              Current Professional Experience
            </h2>
            <p className="sub-title roles-heading">Fine Art | Finance | Technology</p>
            <div className="roles-photo roles-photo-wide">
              <img
                src="/assets/sophie/img/roles/web/role-art.jpg"
                alt="Sophie Neuendorf presenting a framed artwork"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="roles-summary">
              Education as well as professional experience in New York, London, Berlin, Paris, and Madrid.
            </p>
            <a href="/about" className="roles-link">
              About / CV <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <RolesMotion selector=".roles-concept" />
    </section>
  );
}
