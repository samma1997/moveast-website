/**
 * Settori — 4 settori di operatività
 * Slug live: /sectors/mobility, /sectors/energy, /sectors/medical, /sectors/industrial
 */

export type Sector = {
  slug: string;
  order: number;
  title: string;
  shortLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  miniDescription: string;
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
    primaryKeyword: string;
  };
};

export const sectors: readonly Sector[] = [
  {
    slug: "mobility",
    order: 1,
    title: "Mobility & Smart Transport",
    shortLabel: "Mobility & Smart Transport",
    eyebrow: "01 / Mobility & transport",
    headline: "Railway systems, EVs, drones, and urban mobility infrastructure.",
    description:
      "Railway equipment, electric vehicles, drones, and urban mobility infrastructure sourced from China's leading manufacturers.",
    miniDescription: "Railway, EV, drones",
    seo: {
      title: "Railway & Mobility Procurement from China | Move East",
      description:
        "Railway equipment, EV components, and smart transport sourcing from Chinese Tier-1 manufacturers. Ethiopia-Djibouti Railway agent.",
      keywords: ["railway equipment china procurement", "china EV sourcing", "smart transport china"],
      primaryKeyword: "railway equipment china procurement",
    },
  },
  {
    slug: "energy",
    order: 2,
    title: "Renewable Energy & Storage",
    shortLabel: "Renewable Energy & Storage",
    eyebrow: "02 / Renewable energy",
    headline: "Solar modules, BESS, inverters from the world's largest clean energy supply base.",
    description:
      "Solar modules, wind components, battery energy storage systems, and inverters from the world's largest clean energy supply base.",
    miniDescription: "Solar, BESS, inverters",
    seo: {
      title: "BESS & Solar Procurement from China | Move East",
      description:
        "Battery Energy Storage Systems, solar PV modules, and inverters sourced from Tier-1 Chinese manufacturers. UN/CICC network.",
      keywords: ["BESS china procurement", "china solar sourcing", "renewable energy equipment china"],
      primaryKeyword: "BESS china procurement",
    },
  },
  {
    slug: "medical",
    order: 3,
    title: "Medical Devices & Healthcare",
    shortLabel: "Medical Devices & Healthcare",
    eyebrow: "03 / Medical devices",
    headline: "CE/FDA/MDR-certified diagnostics, imaging, and hospital equipment.",
    description:
      "CE-marked, FDA-registered, and MDR-compliant diagnostic equipment, hospital devices, and healthcare technology from certified Chinese producers.",
    miniDescription: "CE/FDA/MDR, imaging",
    seo: {
      title: "Medical Devices from China — EU MDR Compliant | Move East",
      description:
        "CE/FDA/MDR-compliant medical devices sourced from certified Chinese manufacturers. Healthcare equipment procurement.",
      keywords: ["medical devices china EU", "medical equipment sourcing china", "china CE medical devices"],
      primaryKeyword: "medical devices china EU",
    },
  },
  {
    slug: "industrial",
    order: 4,
    title: "Industrial Machinery & Smart Devices",
    shortLabel: "Industrial Machinery",
    eyebrow: "04 / Industrial machinery",
    headline: "CNC, robotics, automation, and industrial smart devices.",
    description:
      "CNC machining, industrial robotics, automation lines, sensors, and semiconductor equipment from leading Chinese industrial producers.",
    miniDescription: "CNC, robots, automation",
    seo: {
      title: "Industrial Machinery Sourcing from China | Move East",
      description:
        "CNC, robotics, and automation machinery sourced from Chinese industrial manufacturers. End-to-end supply chain management.",
      keywords: ["industrial machinery china sourcing", "china automation equipment", "china CNC procurement"],
      primaryKeyword: "industrial machinery china sourcing",
    },
  },
] as const;

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
