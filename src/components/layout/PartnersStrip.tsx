// "Partnered with": a slim band above the footer where the partner logos drift slowly past,
// recoloured with CSS masks. Heights are set per logo so they read at the same optical size;
// widths follow each file's aspect ratio. Pure CSS motion; it pauses on hover and stands still
// for reduced motion.

const PARTNERS = [
  { name: 'artnet', file: 'artnet', ratio: 3.66, h: 26 },
  { name: 'Vogue', file: 'vogue', ratio: 3.11, h: 27 },
  { name: 'Tatler', file: 'tatler', ratio: 3.61, h: 26 },
  { name: 'Bonhams', file: 'bonhams', ratio: 6.12, h: 19 },
  { name: 'ZEITmagazin', file: 'zeit-magazin', ratio: 10.47, h: 13 },
  { name: 'ICON', file: 'icon', ratio: 3.11, h: 25 },
  // Unnamed arc symbol on the old site; its name is on the questions list for Sophie.
  { name: 'Partner', file: 'partner-arc', ratio: 1.9, h: 34 },
  { name: 'Deloitte', file: 'deloitte', ratio: 5.33, h: 21 },
  { name: 'La Biennale di Venezia', file: 'la-biennale-di-venezia', ratio: 1.49, h: 46 },
  { name: 'Belmond', file: 'belmond', ratio: 2.53, h: 38 },
  { name: 'V-ZUG', file: 'v-zug', ratio: 1, h: 44 },
  { name: 'Piaget', file: 'piaget', ratio: 2.55, h: 30 },
];

function Logos({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="pt-row" aria-hidden={hidden || undefined}>
      {PARTNERS.map((p) => (
        <li key={p.file}>
          <span
            className="pt-logo"
            role={hidden ? undefined : 'img'}
            aria-label={hidden ? undefined : p.name}
            style={{
              ['--logo' as string]: `url(/assets/sophie/partners/${p.file}.webp)`,
              ['--w' as string]: `${Math.round(p.h * p.ratio)}px`,
              ['--h' as string]: `${p.h}px`,
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export function PartnersStrip() {
  return (
    <section className="pt" aria-label="Partnered with">
      <p className="pt-label">Partnered with</p>
      <div className="pt-viewport">
        <div className="pt-track">
          <Logos />
          <Logos hidden />
        </div>
      </div>
    </section>
  );
}
