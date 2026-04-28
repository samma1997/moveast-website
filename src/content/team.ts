/**
 * Team leadership — 4 membri.
 * SSOT per seed Payload. Una volta in CMS, Alessandro può modificare.
 */

export type TeamMember = {
  slug: string;
  order: number;
  name: string;
  initials: string;
  role: string;
  roleCategory: "Founder" | "Deputy" | "Europe" | "Operations";
  location: "Shenzhen" | "Hong Kong" | "Rome" | "Addis Ababa";
  languages: readonly string[];
  bio: string;
  bioHighlights: readonly string[];
  bioBolds: readonly string[];
  linkedin?: string;
  photo?: string; // path in /public/images/team/{slug}.webp
};

export const team: readonly TeamMember[] = [
  {
    slug: "alessandro-petrini",
    order: 1,
    name: "Alessandro Petrini",
    initials: "AP",
    role: "Founder & Director",
    roleCategory: "Founder",
    location: "Shenzhen",
    languages: ["Italian", "English", "Mandarin"],
    bio: "Founder and Director of Move East Trading Co., Ltd. (Shenzhen) and Eurasia Interconnection Ltd. (Hong Kong). Living in China since 2018, he leads cross-border industrial and trade initiatives connecting Europe, Asia, and Africa. Fluent in Italian, English, and Mandarin, he combines strategic vision with operational experience in procurement, industrial partnerships, and market development. Since 2024, he has served as a Board Member of the China–Italy Chamber of Commerce.",
    bioHighlights: ["cross-border industrial and trade initiatives"],
    bioBolds: ["Move East Trading Co., Ltd.", "Eurasia Interconnection Ltd."],
    photo: "/images/team/alessandro-petrini.webp",
  },
  {
    slug: "feven-birara-tesfaye",
    order: 2,
    name: "Dr. Feven Birara Tesfaye",
    initials: "FB",
    role: "Deputy Director",
    roleCategory: "Deputy",
    location: "Addis Ababa",
    languages: ["Amharic", "English", "Mandarin"],
    bio: "Medical doctor and entrepreneur with over seven years of experience in China. She coordinates Move East's operations with a focus on strategic sourcing and institutional trade development. Her work mainly involves partnerships across Africa and the Gulf region, where she manages cooperation with industrial and healthcare clients. Her medical background and multilingual skills make her a key bridge between business, institutions, and operational partners.",
    bioHighlights: ["strategic sourcing and institutional trade development"],
    bioBolds: [],
    photo: "/images/team/feven-birara-tesfaye.webp",
  },
  {
    slug: "daniele-pinti",
    order: 3,
    name: "Daniele Pinti",
    initials: "DP",
    role: "European Business Development Partner",
    roleCategory: "Europe",
    location: "Rome",
    languages: ["Italian", "English"],
    bio: "Entrepreneur with consolidated experience in corporate management, healthcare distribution, and logistics solutions. As CEO of Evojob Healthcare Srl, he manages advanced medical and logistics projects in Italy, supporting Move East in European business development.",
    bioHighlights: ["European business development"],
    bioBolds: ["Evojob Healthcare Srl"],
    photo: "/images/team/daniele-pinti.webp",
  },
  {
    slug: "tracy-huang",
    order: 4,
    name: "Tracy Huang",
    initials: "TH",
    role: "Operations & Sourcing Manager",
    roleCategory: "Operations",
    location: "Shenzhen",
    languages: ["Chinese", "Italian", "English"],
    bio: "With over ten years of experience in international trade and supplier coordination, she manages procurement, logistics, and quality control across railway, energy, and healthcare sectors. Fluent in Chinese, Italian, and English, she ensures transparent communication and precise execution in every project.",
    bioHighlights: ["international trade and supplier coordination"],
    bioBolds: [],
    photo: "/images/team/tracy-huang.webp",
  },
] as const;
