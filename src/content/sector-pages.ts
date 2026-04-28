/**
 * Sector subpages — content 1:1 con sector-*.html originali
 * (hero + partners marquee)
 */

export type SectorHero = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
  mediaTag: string;
};

export type SectorPartners = {
  eyebrow: string;
  titlePre: string;
  titleEm: string;
  titlePost: string;
  lede: string;
};

export type SectorPage = {
  hero: SectorHero;
  partners: SectorPartners;
};

export const sectorPages: Record<string, SectorPage> = {
  mobility: {
    hero: {
      eyebrow: "Mobility & Smart Transport",
      titlePre: "Railway equipment, ",
      titleEm: "rolling stock",
      titlePost: " & mobility from China.",
      lede: "Move East Trading is the official outsourcing agent in China for the Ethiopia-Djibouti Railway, a $4 billion Belt and Road Initiative corridor. The company sources railway components, rolling stock, electric vehicles, drones, and urban mobility infrastructure directly from qualified Chinese manufacturers.",
      mediaTag: "placeholder · railway & mobility",
    },
    partners: {
      eyebrow: "Factory network",
      titlePre: "Railway, EV, and drone plants ",
      titleEm: "we audit and ship from",
      titlePost: ".",
      lede: "Railway OEMs, electric bus and commercial EV manufacturers, battery suppliers, and industrial UAV producers across Shenzhen, Guangdong, and the Yangtze River Delta — EN 50155, TSI, and IRIS-aligned.",
    },
  },

  "renewable-energy": {
    hero: {
      eyebrow: "Renewable Energy & Storage",
      titlePre: "Solar, wind, and ",
      titleEm: "BESS",
      titlePost: " from tier-one Chinese makers.",
      lede: "Move East Trading sources solar PV modules, battery energy storage systems, inverters, and wind components from tier-one Chinese manufacturers. The company operates from Shenzhen, is led by a CICC Board Member, and is a UNGM Registered Vendor.",
      mediaTag: "placeholder · renewable energy & BESS",
    },
    partners: {
      eyebrow: "Factory network",
      titlePre: "Tier-1 solar, BESS, and wind plants ",
      titleEm: "we audit and ship from",
      titlePost: ".",
      lede: "Solar PV, BESS, inverter, and wind component manufacturers across Jiangsu, Anhui, Fujian, and Guangdong — BNEF Tier-1, PVEL-verified, and IEC 61215 compliant.",
    },
  },

  "medical-devices": {
    hero: {
      eyebrow: "Medical Devices & Healthcare",
      titlePre: "Medical devices from China — ",
      titleEm: "MDR, CE, FDA",
      titlePost: " ready.",
      lede: "Move East Trading sources CE-marked and FDA-registered medical devices from qualified Chinese manufacturers. The company manages EU MDR compliance, ISO 13485 documentation, and hospital equipment procurement from its Shenzhen headquarters, with clinical oversight from Deputy Director Dr. Feven Birara Tesfaye.",
      mediaTag: "placeholder · medical devices & MDR",
    },
    partners: {
      eyebrow: "Factory network",
      titlePre: "MDR-ready medical device plants ",
      titleEm: "we audit and ship from",
      titlePost: ".",
      lede: "Imaging, hospital equipment, IVD, and consumables manufacturers across Shenzhen, Dongguan, and the Pearl River Delta — ISO 13485 certified, notified-body verified, with clinical track record and post-market surveillance coverage.",
    },
  },

  "industrial-machinery": {
    hero: {
      eyebrow: "Industrial Machinery & Smart Devices",
      titlePre: "CNC, robots, and ",
      titleEm: "automation",
      titlePost: " from China's smart manufacturing hub.",
      lede: "Move East Trading sources CNC machinery, industrial robots, automation cells, precision sensors, and semiconductor equipment from qualified Chinese manufacturers. The company operates from Shenzhen — home to the densest smart manufacturing ecosystem in the world.",
      mediaTag: "placeholder · industrial machinery",
    },
    partners: {
      eyebrow: "Factory network",
      titlePre: "Machine tool, robot, and automation plants ",
      titleEm: "we audit and ship from",
      titlePost: ".",
      lede: "CNC, industrial robot, semiconductor equipment, and injection molding manufacturers across Shenzhen, Dongguan, Suzhou, and the Yangtze River Delta — Machinery Directive compliant, FAT-witnessed before shipment.",
    },
  },
};
