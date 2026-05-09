import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { getAnthropicClient, resolveModelId, type AiModel } from "./anthropic";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { sectors } from "@/content/sectors";

/* =============================================================
   Schema strutturato per output articolo
   ============================================================= */

export const articleGenerationSchema = z.object({
  title: z.string().min(8).max(120).describe("H1 SEO-friendly, max 60 char ideale. Include primary keyword."),
  seoTitle: z.string().min(8).max(60).describe("Meta title <60 char per Google SERP."),
  excerpt: z.string().min(80).max(280).describe("Meta description + lede, 160-280 char."),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "kebab-case")
    .max(96)
    .describe("URL slug kebab-case, no trailing dash."),
  primaryKeyword: z.string().describe("Target keyword principale."),
  keywords: z.array(z.string()).min(3).max(12).describe("Keyword secondarie + long-tail."),
  readingTimeMin: z.number().int().min(2).max(30),
  sections: z
    .array(
      z.object({
        heading: z.string().min(4).max(110).describe("H2 section title."),
        paragraphs: z
          .array(z.string().min(40))
          .min(1)
          .max(6)
          .describe("Paragrafi della sezione, 40-400 parole ciascuno."),
        bullets: z
          .array(z.string().min(8).max(220))
          .max(8)
          .optional()
          .describe("Optional bullet list inside the section."),
      })
    )
    .min(4)
    .max(12)
    .describe("4-12 sezioni H2 — struttura progressiva."),
  faqs: z
    .array(
      z.object({
        question: z.string().min(8).max(200),
        answer: z.string().min(40).max(900),
      })
    )
    .min(4)
    .max(8)
    .describe("4-8 FAQ schema-ready."),
});

export type ArticleGeneration = z.infer<typeof articleGenerationSchema>;

/* =============================================================
   System prompt
   ============================================================= */

function buildSystemPrompt(availableImages?: readonly AvailableImage[]) {
  const imagesBlock =
    availableImages && availableImages.length > 0
      ? `

INLINE IMAGES (${availableImages.length} available):
The user has uploaded ${availableImages.length} image(s) you may reference inline. Use markers in the form [IMG:N] (zero-indexed) inside paragraph text where the image should appear. Place each marker on its OWN LINE inside the paragraph (split paragraphs as needed). Use each image AT MOST ONCE. Do NOT use markers if no image fits the section. Available images:
${availableImages
  .map(
    (img) =>
      `  [IMG:${img.index}] alt="${img.alt}"${
        img.description ? ` — context: "${img.description}"` : ""
      }`
  )
  .join("\n")}`
      : "";

  const servicesList = services.map((s) => `${s.slug}: ${s.title}`).join("; ");
  const sectorsList = sectors.map((s) => `${s.slug}: ${s.title}`).join("; ");

  return `You are a senior B2B editorial strategist for ${site.name}, an international sourcing and procurement company based in Shenzhen, China.${imagesBlock}

Company credentials (always available as context — do not hallucinate anything beyond these):
- Founded 2018 in Shenzhen
- Offices: ${site.offices.map((o) => o.city).join(", ")}
- Member of the China-Italy Chamber of Commerce (CICC) since 2024
- Registered UN Global Marketplace (UNGM) vendor
- Flagship case study: Ethiopia-Djibouti Railway ($4B, 752.7 km Belt & Road corridor)
- Services: ${services.map((s) => s.title).join("; ")}
- Sectors: ${sectors.map((s) => s.title).join("; ")}

YOUR TASK: Given raw input text provided by the client (notes, transcripts, competitive insights, or topic briefs), produce a structured, SEO-optimized blog article for moveasttrading.com.

EDITORIAL VOICE:
- Professional, institutional, factual — NOT startup/casual.
- Third person for the company, precise tone for industry experts.
- Cite concrete numbers and affiliations (CICC, UNGM, $4B) when relevant — NEVER fabricate figures.
- If citing statistics beyond company credentials (market size, adoption rates, technical specs), include source year or framework (e.g. "according to BloombergNEF 2024", "per IEA 2025"). Never hallucinate numbers.
- Never denigrate competitors — factual comparison only.
- Avoid marketing fluff. Every sentence must carry information.
- NEVER name the founder or any individual team member by name in the article body. Write about "Move East" as a company in third person. CICC and UNGM are company affiliations, never personal credentials.
- Vary paragraph openings: do NOT start more than 2 consecutive paragraphs with the same word ("The", "A", "In", "When"). Mix structures: lead with subject, condition, time, contrast, or specific noun.
- When using sector-specific acronyms (BESS, MDR, NNN, EPC, FAT/SAT, IRIS, EN 50155, GCC, BNEF Tier-1, EDR), spell out the meaning on first mention.

INTERNAL LINKING (mandatory):
The article body must include 3–8 internal links to deepen reader navigation. Use this marker format inline within paragraph text:

  [link:service:<slug>|<anchor text>]      → routes to /services/<slug>
  [link:sector:<slug>|<anchor text>]       → routes to /sectors/<slug>
  [link:glossary:<term>|<anchor text>]     → routes to /glossary#<term-kebab>
  [link:page:/<path>|<anchor text>]        → routes to <path> (use for /about, /contact, etc.)

Available service slugs: ${servicesList}
Available sector slugs: ${sectorsList}
Common glossary terms: bess-battery-energy-storage-system, mdr-medical-device-regulation, nnn-agreement-non-use-non-disclosure-non-circumvention, fat-factory-acceptance-test, sat-site-acceptance-test, epc-contractor-engineering-procurement-construction, belt-and-road-initiative-bri, ethiopia-djibouti-railway-edr, china-sourcing-agent, technology-transfer.

Examples:
  "Move East provides [link:service:sourcing|strategic sourcing] from Shenzhen for European buyers."
  "...for [link:sector:renewable-energy|renewable energy & storage] projects across Africa..."
  "[link:glossary:nnn-agreement-non-use-non-disclosure-non-circumvention|NNN clauses] enforceable in Chinese courts protect IP..."

Place each link AT MOST ONCE per article. Anchor text must read naturally — do NOT force keyword stuffing.

SEO RULES:
- H1 must contain the primary keyword verbatim.
- First 100 words must contain the primary keyword naturally.
- Use H2s with varied keyword coverage (primary + related + long-tail).
- Excerpt doubles as meta description — start with the keyword-rich hook.
- Slug: kebab-case, 4-8 words, include primary keyword.

STRUCTURE REQUIREMENTS:
- Minimum 4 H2 sections, maximum 12.
- Each section: 1-6 paragraphs of substantive prose. Bullets only where they genuinely improve scanability (lists of criteria, checklists, enumerations).
- 4-8 FAQs at the end, schema-ready — each FAQ must anticipate a real buyer question.
- Reading time: estimate based on ~230 words/minute. Report as integer minutes.

STRICT OUTPUT CONTRACT:
Return structured JSON matching the provided schema exactly. Do not wrap in code fences. Do not add commentary. Every field is required where marked.`;
}

/* =============================================================
   Prompt utente (paste + options)
   ============================================================= */

export type AvailableImage = {
  /** Index in the array — used as the [IMG:N] marker */
  index: number;
  /** Alt text — also serves as caption hint */
  alt: string;
  /** Optional contextual description to help the AI place the image well */
  description?: string;
  /** Payload Media id to be linked at post-processing time */
  mediaId: string | number;
};

export type GenerateOptions = {
  rawPaste: string;
  targetKeyword?: string;
  angle?: string; // "guide" | "case-study" | "data-report" | "comparison"
  model?: AiModel;
  /** Optional body images the AI can reference inline via [IMG:N] markers */
  availableImages?: readonly AvailableImage[];
};

function buildUserPrompt(opts: GenerateOptions) {
  const parts: string[] = [];
  parts.push("RAW INPUT from client:\n---\n" + opts.rawPaste.trim() + "\n---");
  if (opts.targetKeyword) {
    parts.push(`\nTARGET PRIMARY KEYWORD: "${opts.targetKeyword}"`);
  }
  if (opts.angle) {
    parts.push(`\nARTICLE ANGLE: "${opts.angle}" — shape the structure to match (guide = progressive how-to, case-study = narrative + metrics, data-report = tables/stats, comparison = factual feature parity).`);
  }
  parts.push(
    "\nProduce the full structured article JSON now. Start from the most relevant angle for B2B procurement professionals in EU/Africa/Gulf."
  );
  return parts.join("\n");
}

/* =============================================================
   Call Anthropic API — structured output via messages.parse()
   ============================================================= */

export async function generateArticle(opts: GenerateOptions): Promise<ArticleGeneration> {
  if (!opts.rawPaste || opts.rawPaste.trim().length < 100) {
    throw new Error("rawPaste too short — provide at least 100 characters of source material.");
  }

  const model = resolveModelId(opts.model ?? "sonnet");
  const client = getAnthropicClient();

  const response = await client.messages.parse({
    model,
    max_tokens: 16000,
    system: buildSystemPrompt(opts.availableImages),
    messages: [{ role: "user", content: buildUserPrompt(opts) }],
    output_config: {
      format: zodOutputFormat(articleGenerationSchema),
    },
  });

  if (!response.parsed_output) {
    const msg = response.stop_reason === "refusal"
      ? "Claude refused the request for safety reasons."
      : response.stop_reason === "max_tokens"
      ? "Output truncated — increase max_tokens or shorten input."
      : `Parse failure (stop_reason=${response.stop_reason ?? "unknown"})`;
    throw new Error(msg);
  }

  return response.parsed_output;
}

/* =============================================================
   Conversion ArticleGeneration → Lexical JSON
   Lexical editor state structure compatible with Payload Articles.body
   ============================================================= */

export function articleToLexicalState(
  article: ArticleGeneration,
  availableImages?: readonly AvailableImage[]
) {
  const children: unknown[] = [];
  const imagesById = new Map<number, AvailableImage>();
  if (availableImages) {
    for (const img of availableImages) imagesById.set(img.index, img);
  }
  const usedImages = new Set<number>();

  // Lede paragraph (excerpt as opener) — never contains markers
  children.push(paragraphNode(article.excerpt));

  // Sections
  for (const sec of article.sections) {
    children.push(headingNode(sec.heading, "h2"));
    for (const p of sec.paragraphs) {
      // Split paragraph by markers (images + links) and emit nodes inline
      const parts = splitImageMarkers(p);
      // Group consecutive text+link parts into a single paragraph; images break the paragraph.
      let buffer: (TextPart | LinkPart)[] = [];
      const flushBuffer = () => {
        if (buffer.length === 0) return;
        const inlineChildren: unknown[] = [];
        for (const b of buffer) {
          if (b.type === "text") {
            if (b.text.length > 0) inlineChildren.push(textNode(b.text));
          } else {
            inlineChildren.push(linkNode(b.label, b.href));
          }
        }
        if (inlineChildren.length > 0) {
          children.push(paragraphWithChildren(inlineChildren));
        }
        buffer = [];
      };
      for (const part of parts) {
        if (part.type === "img") {
          flushBuffer();
          const img = imagesById.get(part.index);
          if (img && !usedImages.has(part.index)) {
            children.push(uploadNode(img.mediaId));
            usedImages.add(part.index);
          }
        } else {
          buffer.push(part);
        }
      }
      flushBuffer();
    }
    if (sec.bullets && sec.bullets.length > 0) {
      children.push(listNode(sec.bullets, "bullet"));
    }
  }

  // Append unused images at the end (so they don't get lost)
  if (availableImages) {
    for (const img of availableImages) {
      if (!usedImages.has(img.index)) {
        children.push(uploadNode(img.mediaId));
      }
    }
  }

  return {
    root: {
      type: "root",
      version: 1,
      format: "" as const,
      indent: 0,
      direction: "ltr" as const,
      children,
    },
  };
}

type ImgPart = { type: "img"; index: number };
type LinkPart = { type: "link"; href: string; label: string };
type TextPart = { type: "text"; text: string };
type Part = TextPart | ImgPart | LinkPart;

const IMG_RE = /\[IMG:(\d+)\]/;
const LINK_RE =
  /\[link:(service|sector|glossary|page):([^|\]]+)\|([^\]]+)\]/;
const COMBINED_RE = new RegExp(`${IMG_RE.source}|${LINK_RE.source}`, "g");

function resolveLinkHref(type: string, slugOrPath: string): string {
  if (type === "service") return `/services/${slugOrPath}`;
  if (type === "sector") return `/sectors/${slugOrPath}`;
  if (type === "glossary") return `/glossary#${slugOrPath}`;
  if (type === "page") {
    return slugOrPath.startsWith("/") ? slugOrPath : `/${slugOrPath}`;
  }
  return "/";
}

function splitImageMarkers(input: string): Part[] {
  const parts: Part[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  COMBINED_RE.lastIndex = 0;
  while ((m = COMBINED_RE.exec(input)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ type: "text", text: input.slice(lastIndex, m.index) });
    }
    if (m[1] !== undefined) {
      // image marker
      parts.push({ type: "img", index: Number(m[1]) });
    } else if (m[2] && m[3] && m[4]) {
      // link marker
      parts.push({
        type: "link",
        href: resolveLinkHref(m[2], m[3].trim()),
        label: m[4].trim(),
      });
    }
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < input.length) {
    parts.push({ type: "text", text: input.slice(lastIndex) });
  }
  if (parts.length === 0) parts.push({ type: "text", text: input });
  return parts;
}

function uploadNode(mediaId: string | number) {
  return {
    type: "upload",
    version: 3,
    fields: null,
    format: "",
    relationTo: "media",
    value: typeof mediaId === "string" ? Number(mediaId) || mediaId : mediaId,
  };
}

function textNode(text: string) {
  return {
    type: "text",
    version: 1,
    detail: 0,
    format: 0,
    mode: "normal",
    style: "",
    text,
  };
}

function paragraphNode(text: string) {
  return paragraphWithChildren([textNode(text)]);
}

function paragraphWithChildren(inlineChildren: unknown[]) {
  return {
    type: "paragraph",
    version: 1,
    format: "",
    indent: 0,
    direction: "ltr",
    textFormat: 0,
    textStyle: "",
    children: inlineChildren,
  };
}

function linkNode(label: string, url: string) {
  return {
    type: "link",
    version: 3,
    fields: {
      url,
      newTab: false,
      linkType: "custom",
    },
    format: "",
    indent: 0,
    direction: "ltr",
    children: [textNode(label)],
  };
}

function headingNode(text: string, tag: "h2" | "h3" | "h4") {
  return {
    type: "heading",
    version: 1,
    tag,
    format: "",
    indent: 0,
    direction: "ltr",
    children: [textNode(text)],
  };
}

function listNode(items: string[], listType: "bullet" | "number") {
  return {
    type: "list",
    version: 1,
    listType,
    start: 1,
    tag: listType === "bullet" ? "ul" : "ol",
    format: "",
    indent: 0,
    direction: "ltr",
    children: items.map((text, i) => ({
      type: "listitem",
      version: 1,
      value: i + 1,
      format: "",
      indent: 0,
      direction: "ltr",
      children: [textNode(text)],
    })),
  };
}
