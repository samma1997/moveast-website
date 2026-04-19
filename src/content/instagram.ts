/**
 * Instagram feed (hand-picked posts per About).
 * Riferimenti reali ai contenuti di @petrini.alex estratti da instagram-scrape.json.
 * Al momento dati statici; in futuro fetcher schedulato che riempie la collection "Media" Payload.
 */

export type IgPost = {
  id: string;
  location: string;
  dateLabel: string; // "Apr 10"
  dateIso: string; // "2026-04-10"
  dateFormatted: string; // "10 APR"
  likes: number;
  comments: number;
  caption: string;
  href: string;
};

export const igPosts: readonly IgPost[] = [
  {
    id: "cmef-2026",
    location: "Shanghai · CMEF 2026",
    dateLabel: "Apr 10",
    dateIso: "2026-04-10",
    dateFormatted: "10 APR",
    likes: 9,
    comments: 2,
    caption:
      "Oggi alla CMEF di Shanghai, una delle più grandi fiere al mondo nel settore medicale. Seminario \"What Italy Can Offer to China\".",
    href: "https://www.instagram.com/petrini.alex/",
  },
  {
    id: "cicc-guangzhou",
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
];

export const igHandle = "petrini.alex";
export const igProfileUrl = `https://www.instagram.com/${igHandle}/`;
