/**
 * Document parser — extracts plain text from PDF, DOCX, TXT, MD.
 * Used by /api/admin/articles/upload-document to feed the AI generator.
 */

const SUPPORTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "text/plain",
  "text/markdown",
] as const;

const SUPPORTED_EXTS = [".pdf", ".docx", ".txt", ".md"] as const;

export type ParseInput = {
  buffer: Buffer;
  mimetype: string;
  filename: string;
};

export type ParseResult = {
  text: string;
  format: "pdf" | "docx" | "txt" | "md";
  pages?: number;
  truncated: boolean;
};

const MAX_OUTPUT_CHARS = 28_000; // leaves room under the generator's 30k limit

function normalizeText(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/[ ​]/g, " ") // nbsp, zero-width space
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function detectFormat({
  mimetype,
  filename,
}: ParseInput): ParseResult["format"] | null {
  const ext = filename.toLowerCase().match(/\.(pdf|docx|txt|md)$/)?.[0];
  if (mimetype === "application/pdf" || ext === ".pdf") return "pdf";
  if (
    mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    ext === ".docx"
  ) {
    return "docx";
  }
  if (mimetype === "text/markdown" || ext === ".md") return "md";
  if (mimetype === "text/plain" || ext === ".txt") return "txt";
  return null;
}

async function parsePdf(buffer: Buffer): Promise<{ text: string; pages: number }> {
  // unpdf works in any JS runtime (Edge / Node). We use it server-side.
  const { extractText, getDocumentProxy } = await import("unpdf");
  const u8 = new Uint8Array(buffer);
  const doc = await getDocumentProxy(u8);
  const pages = doc.numPages;
  const { text } = await extractText(doc, { mergePages: true });
  return { text: Array.isArray(text) ? text.join("\n\n") : String(text), pages };
}

async function parseDocx(buffer: Buffer): Promise<string> {
  const { default: mammoth } = await import("mammoth");
  const { value } = await mammoth.extractRawText({ buffer });
  return value;
}

export async function parseDocument(input: ParseInput): Promise<ParseResult> {
  const format = detectFormat(input);
  if (!format) {
    throw new Error(
      `Unsupported document type: ${input.mimetype} (${input.filename}). Accepted: ${SUPPORTED_EXTS.join(", ")}`
    );
  }

  let text = "";
  let pages: number | undefined;

  switch (format) {
    case "pdf": {
      const out = await parsePdf(input.buffer);
      text = out.text;
      pages = out.pages;
      break;
    }
    case "docx":
      text = await parseDocx(input.buffer);
      break;
    case "txt":
    case "md":
      text = input.buffer.toString("utf-8");
      break;
  }

  text = normalizeText(text);
  const truncated = text.length > MAX_OUTPUT_CHARS;
  if (truncated) text = text.slice(0, MAX_OUTPUT_CHARS);

  return { text, format, pages, truncated };
}

export const documentParser = {
  SUPPORTED_TYPES,
  SUPPORTED_EXTS,
  MAX_OUTPUT_CHARS,
};
