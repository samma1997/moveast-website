/**
 * Accesso alle foto Instagram importate in Payload Media.
 *
 * Sorgente dati: src/data/instagram-media.json (generato da
 * scripts/import-instagram-to-payload.ts + enrich-media-map.ts).
 * Ogni entry è indicizzata per shortcode del post Instagram originale.
 */

import mediaJson from "@/data/instagram-media.json";

export type IgPhoto = {
  shortcode: string;
  mediaId: number;
  filename: string;
  alt: string;
  url: string;
  sizes: {
    thumbnail?: string;
    card?: string;
    og?: string;
    hero?: string;
  };
  date: string;
  location: string | null;
  sector: string;
  event_type: string;
  topic_tags: string[];
  blog_relevance_score: number;
  people_context: string;
  italian_caption_short: string;
};

type RawEntry = Omit<IgPhoto, "shortcode" | "sizes"> & {
  sizes?: Partial<IgPhoto["sizes"]>;
};

const rawMap = mediaJson as unknown as Record<string, RawEntry>;

const allPhotos: IgPhoto[] = Object.entries(rawMap).map(([shortcode, v]) => ({
  shortcode,
  mediaId: v.mediaId,
  filename: v.filename,
  alt: v.alt,
  url: v.url,
  sizes: {
    thumbnail: v.sizes?.thumbnail ?? undefined,
    card: v.sizes?.card ?? undefined,
    og: v.sizes?.og ?? undefined,
    hero: v.sizes?.hero ?? undefined,
  },
  date: v.date,
  location: v.location,
  sector: v.sector,
  event_type: v.event_type,
  topic_tags: v.topic_tags,
  blog_relevance_score: v.blog_relevance_score,
  people_context: v.people_context ?? "unknown",
  italian_caption_short: v.italian_caption_short ?? "",
}));

export function getPhotoByShortcode(shortcode: string): IgPhoto | null {
  return allPhotos.find((p) => p.shortcode === shortcode) ?? null;
}

export function allIgPhotos(): readonly IgPhoto[] {
  return allPhotos;
}

type FilterOpts = {
  sector?: string;
  eventType?: string;
  eventTypes?: readonly string[];
  minScore?: number;
  year?: string;
  /** Solo eventi istituzionali/formali (niente personal/other). Business_dinner ammesso se group/crowd. */
  institutionalOnly?: boolean;
  /** Solo foto di gruppo (crowd/small_group). Esclude solo/unknown. */
  groupOnly?: boolean;
  /** Solo foto crowd (esclude anche small_group). */
  crowdOnly?: boolean;
};

const INSTITUTIONAL_EVENT_TYPES = [
  "institutional_meeting",
  "trade_fair",
  "factory_visit",
  "conference_speech",
  "business_dinner",
] as const;

export function filterPhotos(opts: FilterOpts): IgPhoto[] {
  return allPhotos.filter((p) => {
    if (opts.sector && p.sector !== opts.sector) return false;
    if (opts.eventType && p.event_type !== opts.eventType) return false;
    if (opts.eventTypes && !opts.eventTypes.includes(p.event_type)) return false;
    if (opts.institutionalOnly && !INSTITUTIONAL_EVENT_TYPES.includes(p.event_type as typeof INSTITUTIONAL_EVENT_TYPES[number])) {
      return false;
    }
    if (opts.groupOnly && !["crowd", "small_group"].includes(p.people_context)) return false;
    if (opts.crowdOnly && p.people_context !== "crowd") return false;
    if (opts.minScore !== undefined && p.blog_relevance_score < opts.minScore) return false;
    if (opts.year && !p.date.startsWith(opts.year)) return false;
    return true;
  });
}

/** Top N photos by blog_relevance_score, tiebreaker by most recent date. */
export function topPhotos(count: number, opts: FilterOpts = {}): IgPhoto[] {
  return [...filterPhotos(opts)]
    .sort((a, b) => {
      if (b.blog_relevance_score !== a.blog_relevance_score) {
        return b.blog_relevance_score - a.blog_relevance_score;
      }
      return b.date.localeCompare(a.date);
    })
    .slice(0, count);
}

/** Latest N photos by date. */
export function latestPhotos(count: number, opts: FilterOpts = {}): IgPhoto[] {
  return [...filterPhotos(opts)]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

/** Best photo for a given year (highest score, latest tiebreaker). */
export function bestPhotoForYear(year: string, opts: Omit<FilterOpts, "year"> = {}): IgPhoto | null {
  const list = topPhotos(1, { ...opts, year });
  return list[0] ?? null;
}

/**
 * Foto di gruppo istituzionale per un anno specifico.
 * NO fallback ad altri anni (l'utente vuole foto dell'anno).
 * Prova tiers in ordine: crowd preferred → small_group fallback.
 */
export function bestInstitutionalForYear(year: string): IgPhoto | null {
  // Tier 1: crowd + institutional + score ≥ 7
  const crowd = topPhotos(1, { institutionalOnly: true, crowdOnly: true, minScore: 7, year })[0];
  if (crowd) return crowd;
  // Tier 2: small_group + institutional + score ≥ 7
  const small = topPhotos(1, { institutionalOnly: true, groupOnly: true, minScore: 7, year })[0];
  return small ?? null;
}

/** Returns the best URL for a target display size. */
export function photoSrc(photo: IgPhoto, size: "thumbnail" | "card" | "og" | "hero" = "card"): string {
  return photo.sizes[size] ?? photo.url;
}
