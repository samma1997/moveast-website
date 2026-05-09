import { NextResponse, type NextRequest } from "next/server";
import { getPayloadClient } from "@/lib/payload";
import { requireDashboardUserApi } from "@/lib/auth/dashboard-auth";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

export async function POST(req: NextRequest) {
  const auth = await requireDashboardUserApi();
  if (auth instanceof NextResponse) return auth;

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid multipart payload" },
      { status: 400 }
    );
  }

  const file = formData.get("file");
  const altRaw = formData.get("alt");
  const alt = typeof altRaw === "string" ? altRaw.trim() : "";

  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Missing 'file' field" },
      { status: 400 }
    );
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: `Unsupported type: ${file.type}` },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File too large — max 8MB" },
      { status: 413 }
    );
  }
  if (alt.length === 0) {
    return NextResponse.json(
      { error: "Alt text is required" },
      { status: 400 }
    );
  }

  try {
    const payload = await getPayloadClient();
    const buffer = Buffer.from(await file.arrayBuffer());

    const created = await payload.create({
      collection: "media",
      data: { alt },
      file: {
        data: buffer,
        mimetype: file.type,
        name: file.name,
        size: file.size,
      },
    });

    const cov = created as {
      id: string | number;
      url?: string;
      sizes?: { card?: { url?: string }; og?: { url?: string }; hero?: { url?: string } };
    };

    return NextResponse.json({
      ok: true,
      id: created.id,
      url: cov.url ?? null,
      sizes: cov.sizes ?? null,
    });
  } catch (err) {
    console.error("[upload-image] error:", err);
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
