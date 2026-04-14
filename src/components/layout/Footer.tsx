import Link from "next/link";

const OFFICES = [
  { city: "Shenzhen", address: "Guangdong Province, China", label: "HQ" },
  { city: "Hong Kong", address: "Hong Kong SAR" },
  { city: "Rome", address: "Italy" },
  { city: "Addis Ababa", address: "Ethiopia" },
];

const LINKS = {
  Services: [
    { label: "Strategic Sourcing", href: "/services/sourcing" },
    { label: "Technology Transfer", href: "/services/technology-transfer" },
    { label: "Supply Chain", href: "/services/supply-chain" },
  ],
  Sectors: [
    { label: "Mobility & Transport", href: "/sectors/railway" },
    { label: "Renewable Energy", href: "/sectors/energy" },
    { label: "Medical Devices", href: "/sectors/medical" },
    { label: "Industrial Machinery", href: "/sectors/industrial" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Offices */}
          {OFFICES.map((office) => (
            <div key={office.city}>
              <p className="text-[0.875rem] font-semibold text-[var(--text)]">
                {office.city} {office.label && <span className="text-[var(--brand)] text-xs">({office.label})</span>}
              </p>
              <p className="text-[0.8125rem] text-[var(--text-secondary)] mt-1">{office.address}</p>
            </div>
          ))}

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-[0.875rem] font-semibold text-[var(--text)] mb-3">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[0.8125rem] text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Affiliations */}
        <div className="mt-14 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[var(--brand)]/10 flex items-center justify-center">
                <span className="text-[var(--brand)] text-[9px] font-bold">CICC</span>
              </div>
              <span className="text-[0.75rem] text-[var(--text-secondary)]">Member</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[var(--brand)]/10 flex items-center justify-center">
                <span className="text-[var(--brand)] text-[9px] font-bold">UN</span>
              </div>
              <span className="text-[0.75rem] text-[var(--text-secondary)]">UNGM Registered</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[0.75rem] text-[var(--text-secondary)]">
            <span>&copy; {new Date().getFullYear()} Move East Trading Co. Ltd.</span>
            <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
