import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { headers } from "next/headers";
import { getPayloadClient } from "@/lib/payload";
import {
  generateArticle,
  articleToLexicalState,
  type GenerateOptions,
} from "@/lib/ai/article-generator";
import { MODELS } from "@/lib/ai/anthropic";

export const runtime = "nodejs";
export const maxDuration = 60; // Vercel Pro timeout

const requestSchema = z.object({
  rawPaste: z.string().min(100).max(30_000),
  targetKeyword: z.string().max(140).optional(),
  angle: z.enum(["guide", "case-study", "data-report", "comparison"]).optional(),
  model: z.enum(["haiku", "sonnet", "opus"]).optional(),
  articleId: z.union([z.string(), z.number()]).optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  coverImageId: z.union([z.string(), z.number()]).optional(),
  bodyImages: z
    .array(
      z.object({
        id: z.union([z.string(), z.number()]),
        alt: z.string().min(1).max(200),
        description: z.string().max(400).optional(),
      })
    )
    .max(5)
    .optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Auth via Payload session
    const payload = await getPayloadClient();
    const { user } = await payload.auth({ headers: await headers() });
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!["admin", "editor"].includes(String((user as { role?: string }).role ?? ""))) {
      return NextResponse.json({ error: "Forbidden — editor/admin role required" }, { status: 403 });
    }

    // 2. Validate body
    const body = await req.json().catch(() => null);
    if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // 3. Prepare available images (zero-indexed)
    const availableImages = (parsed.data.bodyImages ?? []).map((img, i) => ({
      index: i,
      alt: img.alt,
      description: img.description,
      mediaId: img.id,
    }));

    // 4. Call Claude
    const opts: GenerateOptions = {
      rawPaste: parsed.data.rawPaste,
      targetKeyword: parsed.data.targetKeyword,
      angle: parsed.data.angle,
      model: parsed.data.model,
      availableImages: availableImages.length > 0 ? availableImages : undefined,
    };
    const generated = await generateArticle(opts);

    // 5. Convert to Lexical state (replaces [IMG:N] markers with upload nodes)
    const lexicalBody = articleToLexicalState(
      generated,
      availableImages.length > 0 ? availableImages : undefined
    );

    // 5. Upsert article in Payload
    const modelKey = parsed.data.model ?? "sonnet";
    const seoDescription = generated.excerpt.slice(0, 170);

    const data: Record<string, unknown> = {
      title: generated.title,
      slug: generated.slug,
      excerpt: generated.excerpt,
      body: lexicalBody,
      faqs: generated.faqs,
      seoTitle: generated.seoTitle,
      seoDescription,
      primaryKeyword: generated.primaryKeyword,
      keywords: generated.keywords,
      readingTime: generated.readingTimeMin,
      status: parsed.data.status,
      publishedAt:
        parsed.data.status === "published" ? new Date().toISOString() : undefined,
      author: user.id,
      rawPaste: parsed.data.rawPaste,
      aiModel: MODELS[modelKey],
      aiLastGeneratedAt: new Date().toISOString(),
    };
    if (parsed.data.coverImageId !== undefined) {
      data.cover = parsed.data.coverImageId;
    }

    let saved;
    if (parsed.data.articleId) {
      saved = await payload.update({
        collection: "articles",
        id: parsed.data.articleId,
        data,
      });
    } else {
      saved = await payload.create({
        collection: "articles",
        data,
      });
    }

    // 6. Revalidate if published
    if (parsed.data.status === "published") {
      try {
        const { revalidatePath } = await import("next/cache");
        revalidatePath(`/blog/${generated.slug}`);
        revalidatePath("/blog");
        revalidatePath("/sitemap.xml");
      } catch (err) {
        console.warn("[articles/generate] revalidate failed:", err);
      }
    }

    return NextResponse.json({
      ok: true,
      id: saved.id,
      slug: generated.slug,
      title: generated.title,
      readingTime: generated.readingTimeMin,
      sectionCount: generated.sections.length,
      faqCount: generated.faqs.length,
      previewUrl: `/blog/${generated.slug}`,
    });
  } catch (err) {
    console.error("[articles/generate] error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
