import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Main */}
        <div className="py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="text-[1.6rem] font-bold tracking-tight leading-none">
              <span className="text-white">move</span>
              <span className="text-brand">east</span>
            </Link>
            <p className="mt-6 text-[0.9rem] text-white/40 leading-relaxed max-w-sm">
              Connecting global enterprises with China&apos;s industrial ecosystem through structured procurement, technology transfer, and supply chain management.
            </p>
            <div className="mt-8">
              <a href="mailto:info@moveasttrading.com" className="text-[0.9rem] text-white/60 hover:text-brand transition-colors">
                info@moveasttrading.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="label mb-6">Services</p>
            <ul className="space-y-4">
              <li><Link href="/services/sourcing" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Strategic Sourcing</Link></li>
              <li><Link href="/services/technology-transfer" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Technology Transfer</Link></li>
              <li><Link href="/services/supply-chain" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Supply Chain Management</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-3">
            <p className="label mb-6">Sectors</p>
            <ul className="space-y-4">
              <li><Link href="/sectors/railway" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Mobility & Transport</Link></li>
              <li><Link href="/sectors/energy" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Renewable Energy</Link></li>
              <li><Link href="/sectors/medical" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Medical Devices</Link></li>
              <li><Link href="/sectors/industrial" className="text-[0.875rem] text-white/50 hover:text-white transition-colors">Industrial Machinery</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="lg:col-span-2">
            <p className="label mb-6">Offices</p>
            <ul className="space-y-4">
              {["Shenzhen", "Hong Kong", "Rome", "Addis Ababa"].map((city) => (
                <li key={city} className="text-[0.875rem] text-white/50">{city}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8rem] text-white/30">
            &copy; {new Date().getFullYear()} Move East Trading Co. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[0.75rem] text-white/20">CICC Member</span>
            <span className="text-[0.75rem] text-white/20">UNGM Registered</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-brand transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
