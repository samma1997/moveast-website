import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-white">move</span>
              <span className="text-brand-orange">east</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Connecting global enterprises with China&apos;s industrial ecosystem through structured procurement, technology transfer, and supply chain management.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/sourcing" className="text-sm text-gray-400 hover:text-white transition-colors">Strategic Sourcing & Procurement</Link></li>
              <li><Link href="/services/technology-transfer" className="text-sm text-gray-400 hover:text-white transition-colors">Technology Transfer</Link></li>
              <li><Link href="/services/supply-chain" className="text-sm text-gray-400 hover:text-white transition-colors">Supply Chain Management</Link></li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-4">Sectors</h4>
            <ul className="space-y-3">
              <li><Link href="/sectors/railway" className="text-sm text-gray-400 hover:text-white transition-colors">Mobility & Smart Transport</Link></li>
              <li><Link href="/sectors/energy" className="text-sm text-gray-400 hover:text-white transition-colors">Renewable Energy & Storage</Link></li>
              <li><Link href="/sectors/medical" className="text-sm text-gray-400 hover:text-white transition-colors">Medical Devices & Healthcare</Link></li>
              <li><Link href="/sectors/industrial" className="text-sm text-gray-400 hover:text-white transition-colors">Industrial Machinery</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-4">Offices</h4>
            <ul className="space-y-4">
              {[
                { city: "Shenzhen, China", label: "HQ" },
                { city: "Hong Kong" },
                { city: "Rome, Italy" },
                { city: "Addis Ababa, Ethiopia" },
              ].map((office) => (
                <li key={office.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-400">
                    {office.city} {office.label && <span className="text-brand-orange text-xs font-semibold">({office.label})</span>}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="mailto:info@moveasttrading.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-orange" /> info@moveasttrading.com
              </a>
              <a href="https://www.moveasttrading.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-brand-orange" /> www.moveasttrading.com
              </a>
            </div>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <span className="text-brand-orange text-xs font-bold">CICC</span>
                </div>
                <span className="text-xs text-gray-500">China-Italy Chamber of Commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <span className="text-brand-orange text-xs font-bold">UN</span>
                </div>
                <span className="text-xs text-gray-500">UNGM Registered Vendor</span>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Move East Trading Co. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
