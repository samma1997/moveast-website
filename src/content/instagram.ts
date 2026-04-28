/**
 * Instagram feed preview (About page) — 3 post curati.
 * Cambiarli quando Petrini pubblica cose nuove e significative.
 */

export type IgPost = {
  id: string;
  shortcode: string;
  location: string;
  dateLabel: string;
  dateIso: string;
  dateFormatted: string;
  likes: number;
  comments: number;
  caption: string;
  href: string;
};

export const igPosts: readonly IgPost[] = [
  {
    id: "cicc-spring-gala",
    shortcode: "DWqlaDbAW2Y7x8aWD7Z0isCJn3xjDxizzLHhG80",
    location: "Guangzhou · CICC Spring Gala",
    dateLabel: "Apr 3",
    dateIso: "2026-04-03",
    dateFormatted: "3 APR",
    likes: 14,
    comments: 3,
    caption:
      "Spring Gala della Camera di Commercio Italiana in Cina a Guangzhou 🇮🇹🇨🇳 Al Four Seasons Hotel, tra relazioni e scambi.",
    href: "https://www.instagram.com/petrini.alex/",
  },
  {
    id: "byd-shenzhen",
    shortcode: "DUvi9Z4CF4foybi4dkNRe4RN-24gGPe5xaNPdA0",
    location: "Shenzhen · BYD HQ",
    dateLabel: "Feb 14",
    dateIso: "2026-02-14",
    dateFormatted: "14 FEB",
    likes: 7,
    comments: 1,
    caption:
      "Tornato al quartier generale di BYD a Shenzhen, accompagnando la delegazione della Camera di Commercio Italiana in Cina.",
    href: "https://www.instagram.com/petrini.alex/",
  },
  {
    id: "palazzo-madama",
    shortcode: "DVLPRg6iKP04c9Dc6xdHwqm9QwnCfCKCFqjhzw0",
    location: "Roma · Palazzo Madama",
    dateLabel: "Feb 25",
    dateIso: "2026-02-25",
    dateFormatted: "25 FEB",
    likes: 11,
    comments: 2,
    caption:
      "Incontro al Senato della Repubblica con il Presidente CICC e parlamentari italiani per presentare il rapporto annuale sugli investimenti italiani in Cina.",
    href: "https://www.instagram.com/petrini.alex/",
  },
];

export const igHandle = "petrini.alex";
export const igProfileUrl = `https://www.instagram.com/${igHandle}/`;
