import Link from "next/link";
import { ArrowUpRight, Train, Sun, HeartPulse, Cog } from "lucide-react";

const SECTORS = [
  {
    icon: Train,
    title: "Mobility & Smart Transport",
    description: "Railway systems, electric vehicles, drones, and urban mobility infrastructure sourced from China's leading manufacturers.",
    href: "/sectors/railway",
  },
  {
    icon: Sun,
    title: "Renewable Energy & Storage",
    description: "Solar modules, wind components, battery energy storage systems, and inverters from the world's largest clean energy supply base.",
    href: "/sectors/energy",
  },
  {
    icon: HeartPulse,
    title: "Medical Devices & Healthcare",
    description: "CE-marked and FDA-registered diagnostic equipment, hospital devices, and healthcare technology from certified producers.",
    href: "/sectors/medical",
  },
  {
    icon: Cog,
    title: "Industrial Machinery & Smart Devices",
    description: "Automation systems, robotics, precision sensors, and semiconductor components for advanced manufacturing operations.",
    href: "/sectors/industrial",
  },
];

export function Sectors() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="label mb-4">Key Sectors</p>
        <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-[var(--text)]">
          Industries where technology<br className="hidden md:block" /> and infrastructure converge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                href={s.href}
                className="reveal group bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--brand)]/30 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--brand)]" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-[1.0625rem] font-semibold text-[var(--text)] mt-5">{s.title}</h3>
                <p className="text-[0.875rem] text-[var(--text-secondary)] leading-relaxed mt-2">{s.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
