// Footer: light off-white with a clean contact section (email, phone, Instagram, LinkedIn) and the
// legal line, per client feedback; no large type, buttons or menu.

const CONTACT = [
  { label: 'Email', value: 'info@neuendorfteba.com', href: 'mailto:info@neuendorfteba.com' },
  { label: 'Phone', value: '+49 172 3176317', href: 'tel:+491723176317' },
  { label: 'Instagram', value: '@sophieneuendorf', href: 'https://www.instagram.com/sophieneuendorf/', external: true },
  { label: 'LinkedIn', value: 'Sophie Neuendorf', href: 'https://www.linkedin.com/in/sophie-neuendorf-4a15461a', external: true },
];

export function Footer() {
  return (
    <footer className="sf">
      <div className="sf-top">
        <p className="sf-label">Contact</p>
        <ul className="sf-list">
          {CONTACT.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sf-bottom">
        <span>Sophie Neuendorf · Condesa de Teba</span>
        <span>
          <a href="/impressum">Impressum</a> · <a href="/privacy">Privacy</a> · © {new Date().getFullYear()} Sophie Neuendorf
        </span>
      </div>
    </footer>
  );
}
