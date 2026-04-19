/**
 * Timeline aziendale — 6 milestone 2018–2025.
 * Usata nella pagina About (sezione Timeline) + schema Organization.foundingDate/Event.
 */

export type TimelineEntry = {
  year: number;
  title: string;
  description: string;
  tag: string;
  caption: string; // etichetta sull'immagine placeholder
};

export const timeline: readonly TimelineEntry[] = [
  {
    year: 2018,
    title: "Founded in Shenzhen",
    description:
      "Alessandro Petrini relocates to China. Begins building sourcing networks across Guangdong Province.",
    tag: "Founded · Shenzhen",
    caption: "Shenzhen — day one",
  },
  {
    year: 2020,
    title: "COVID emergency response",
    description:
      "COVID-19 emergency: Move East sources and delivers critical medical equipment to European partners under crisis conditions.",
    tag: "Crisis response · EU partners",
    caption: "COVID emergency response",
  },
  {
    year: 2021,
    title: "Ethiopia-Djibouti Railway",
    description:
      "Appointed official outsourcing agent in China for the Ethiopia-Djibouti Railway. Addis Ababa office established.",
    tag: "Railway · East Africa",
    caption: "Ethiopia-Djibouti Railway",
  },
  {
    year: 2022,
    title: "CICC Board · Rome office",
    description:
      "Alessandro Petrini joins the Board of the China-Italy Chamber of Commerce. Rome office opens to serve European clients.",
    tag: "CICC Board · 3 offices",
    caption: "CICC Board · Rome office",
  },
  {
    year: 2024,
    title: "UNGM · Hong Kong",
    description:
      "UNGM registration completed. Hong Kong office established for trade finance and compliance. Procurement expanded across Gulf region.",
    tag: "UNGM · 4 offices",
    caption: "UNGM · Hong Kong",
  },
  {
    year: 2025,
    title: "Technology Transfer line launched",
    description:
      "Launch of Technology Transfer service line. Team expanded across four offices on three continents. Renewable energy and BESS sourcing added.",
    tag: "Today · 4 offices · 3 continents",
    caption: "Today",
  },
] as const;
