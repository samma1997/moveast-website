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
      "Move East Trading Co., Ltd. is established in Shenzhen. Operations begin across the Guangdong industrial ecosystem.",
    tag: "Founded · Shenzhen",
    caption: "Shenzhen · 2018",
    photo: "/images/about/2018-shenzhen-founded.webp",
  },
  {
    year: 2021,
    title: "Ethiopia-Djibouti Railway",
    description:
      "Appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. Addis Ababa office established.",
    tag: "Railway · East Africa",
    caption: "Ethiopia-Djibouti Railway",
    photo: "/images/about/2021-edr-appointment.webp",
  },
  {
    year: 2024,
    title: "CICC member · UNGM · Hong Kong",
    description:
      "Move East joins the China-Italy Chamber of Commerce. UNGM registration completed. Hong Kong office established for trade finance and compliance.",
    tag: "CICC · UNGM · 4 offices",
    caption: "Hong Kong · 2024",
    photo: "/images/about/2024-hong-kong-office.webp",
  },
  {
    year: 2025,
    title: "Technology Transfer line launched",
    description:
      "Launch of the Technology Transfer service line, structuring know-how, IP governance, and engineer training as a dedicated offering — with operations across the four Move East offices.",
    tag: "Today · 4 offices · 3 continents",
    caption: "Technology Transfer · 2025",
    photo: "/images/about/2025-technology-transfer.webp",
  },
] as const;
