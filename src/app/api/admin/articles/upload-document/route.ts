import { NextResponse, type NextRequest } from "next/server";
import { requireDashboardUserApi } from "@/lib/auth/dashboard-auth";
import { parseDocument, documentParser } from "@/lib/ai/document-parser";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

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
  if (!(file instanceof File)) {
    return NextResponse.json(
      { error: "Missing 'file' field" },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "File too large — max 10MB" },
      { status: 413 }
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await parseDocument({
      buffer,
      mimetype: file.type,
      filename: file.name,
    });

    if (result.text.length < 80) {
      return NextResponse.json(
        {
          error:
            "Document text is too short to feed the article generator (min 80 chars). It may be a scanned PDF (OCR not supported).",
        },
        { status: 422 }
      );
    }

    return NextResponse.json({
      ok: true,
      text: result.text,
      format: result.format,
      pages: result.pages,
      truncated: result.truncated,
      maxOutputChars: documentParser.MAX_OUTPUT_CHARS,
      filename: file.name,
      sizeBytes: file.size,
    });
  } catch (err) {
    console.error("[upload-document] parse error:", err);
    const message = err instanceof Error ? err.message : "Parse failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
