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

function buildSystemPrompt() {
  return `You are a senior B2B editorial strategist for ${site.name}, an international sourcing and procurement company based in Shenzhen, China.

Company credentials (always available as context — do not hallucinate anything beyond these):
- Founded 2018 by Alessandro Petrini
- Offices: ${site.offices.map((o) => o.city).join(", ")}
- Board Member, China-Italy Chamber of Commerce (CICC) since 2024
- Registered UN Global Marketplace (UNGM) vendor
- Flagship case study: Ethiopia-Djibouti Railway ($4B, 752.7 km, 0% quality rejection rate)
- Services: ${services.map((s) => s.title).join("; ")}
- Sectors: ${sectors.map((s) => s.title).join("; ")}

YOUR TASK: Given raw input text provided by the client (notes, transcripts, competitive insights, or topic briefs), produce a structured, SEO-optimized blog article for moveasttrading.com.

EDITORIAL VOICE:
- Professional, institutional, factual — NOT startup/casual.
- Third person for the company, precise tone for industry experts.
- Cite concrete numbers and affiliations (CICC, UNGM, $4B) when relevant — NEVER fabricate figures.
- Never denigrate competitors — factual comparison only.
- Avoid marketing fluff. Every sentence must carry information.

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

export type GenerateOptions = {
  rawPaste: string;
  targetKeyword?: string;
  angle?: string; // "guide" | "case-study" | "data-report" | "comparison"
  model?: AiModel;
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
    system: buildSystemPrompt(),
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

export function articleToLexicalState(article: ArticleGeneration) {
  const children: unknown[] = [];

  // Lede paragraph (excerpt as opener)
  children.push(paragraphNode(article.excerpt));

  // Sections
  for (const sec of article.sections) {
    children.push(headingNode(sec.heading, "h2"));
    for (const p of sec.paragraphs) {
      children.push(paragraphNode(p));
    }
    if (sec.bullets && sec.bullets.length > 0) {
      children.push(listNode(sec.bullets, "bullet"));
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
  return {
    type: "paragraph",
    version: 1,
    format: "",
    indent: 0,
    direction: "ltr",
    textFormat: 0,
    textStyle: "",
    children: [textNode(text)],
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
