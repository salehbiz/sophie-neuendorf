import { RolesMotion } from './RolesMotion';

// Partner logos from the old site's "PARTNERS" strip (drawn from its vector logos, recoloured with CSS masks).
const PARTNERS = [
  { name: 'artnet', file: 'artnet' },
  { name: 'Vogue', file: 'vogue' },
  { name: 'Tatler', file: 'tatler' },
  { name: 'Bonhams', file: 'bonhams' },
  { name: 'ZEITmagazin', file: 'zeit-magazin' },
  { name: 'ICON', file: 'icon' },
  // Unnamed arc symbol on the old site; its name is on the questions list for Sophie.
  { name: 'Partner', file: 'partner-arc' },
  { name: 'Deloitte', file: 'deloitte' },
  { name: 'La Biennale di Venezia', file: 'la-biennale-di-venezia' },
  { name: 'Belmond', file: 'belmond' },
];

/**
 * "Partners", straight after the hero as on the old site: the site's running meta row, a large
 * serif title, and the logos in a hairline-ruled grid, each cell numbered like the press items.
 * Logos fade up in turn on scroll (RolesMotion) and deepen on hover.
 */
export function HomePartnersSection() {
  return (
    <section className="section pa">
      <div className="wc-meta">
        <span>Partnered with</span>
        <span>{String(PARTNERS.length).padStart(2, '0')}</span>
      </div>
      <h2 className="pa-title">Partners</h2>
      <ul className="pa-grid">
        {PARTNERS.map((p, i) => (
          <li key={p.file} className="pa-cell" data-reveal="" style={{ transitionDelay: `${(i % 5) * 70 + Math.floor(i / 5) * 140}ms` }}>
            <span className="pa-num">({String(i + 1).padStart(2, '0')})</span>
            <span
              className={`pa-logo pa-logo-${p.file}`}
              role="img"
              aria-label={p.name}
              style={{ ['--logo' as string]: `url(/assets/sophie/partners/${p.file}.webp)` }}
            />
          </li>
        ))}
      </ul>
      <RolesMotion selector=".pa" drift={0} />
    </section>
  );
}
