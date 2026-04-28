/**
 * Timeline aziendale — milestone reali documentate.
 * Usata nella pagina About (sezione Timeline).
 */

export type TimelineEntry = {
  year: number;
  title: string;
  description: string;
  tag: string;
  caption: string;
  photo?: string; // path in /public/images/timeline/
};

export const timeline: readonly TimelineEntry[] = [
  {
    year: 2018,
    title: "Founded in Shenzhen",
    description:
      "Alessandro Petrini relocates to China. Begins building sourcing networks across Guangdong Province.",
    tag: "Founded · Shenzhen",
    caption: "Italian Consulate · Hong Kong",
    photo: "/images/timeline/2018-consulate-hong-kong.webp",
  },
  {
    year: 2021,
    title: "Ethiopia-Djibouti Railway",
    description:
      "Appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. Addis Ababa office established.",
    tag: "Railway · East Africa",
    caption: "Interchamber Networking · Shenzhen",
    photo: "/images/timeline/2021-interchamber-shenzhen.webp",
  },
  {
    year: 2024,
    title: "CICC Board · UNGM · Hong Kong",
    description:
      "Alessandro Petrini joins the Board of the China-Italy Chamber of Commerce. UNGM registration completed. Hong Kong office established for trade finance and compliance.",
    tag: "CICC Board · UNGM · 4 offices",
    caption: "Business Forum Italia-Cina",
    photo: "/images/timeline/2024-business-forum-italia-cina.webp",
  },
  {
    year: 2025,
    title: "Technology Transfer line launched",
    description:
      "Launch of the Technology Transfer service line, structuring know-how, IP governance, and engineer training as a dedicated offering — with operations across the four Move East offices.",
    tag: "Today · 4 offices · 3 continents",
    caption: "CICC · Guangzhou",
    photo: "/images/timeline/2025-cicc-guangzhou.webp",
  },
] as const;
