/**
 * Genera logo-dark.svg da logo-light.svg:
 * - Rimuove il rettangolo di sfondo bianco (#FEFEFE)
 * - Inverte luminosità di tutti i neri/grigi (move, freccia, testo, kanji) → bianchi
 * - Mantiene gli arancioni invariati (east letters)
 *
 * Run: npx tsx scripts/generate-dark-logo.ts
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public/logo/logo-light.svg");
const DST = join(ROOT, "public/logo/logo-dark.svg");

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  const c = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`.toUpperCase();
}

// Detect orange (the "east" + arrow tip that's already orange)
// #D78142 → R=215 G=129 B=66 — high R, mid G, low B
function isOrange(r: number, g: number, b: number): boolean {
  return r > 150 && g > 80 && g < 200 && b < 130 && r > b + 50;
}

// Detect background-white (the rectangle that fills the canvas)
// We won't transform it — we'll DROP the path entirely.
function isBackgroundWhite(hex: string): boolean {
  return ["#FEFEFE", "#FDFDFD", "#FFFFFF"].includes(hex.toUpperCase());
}

function transformColor(hex: string): string | null {
  const upper = hex.toUpperCase();
  // Drop pure background-whites (they form the rectangle)
  // Actually we'll handle the background path separately.
  const [r, g, b] = hexToRgb(upper);
  if (isOrange(r, g, b)) {
    return upper; // keep orange untouched
  }
  // Invert luminosity: dark becomes light, light becomes dark
  // Simple invert preserves anti-aliasing edges nicely on the dark logo
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

const light = readFileSync(SRC, "utf-8");

// 1. Drop the first big background path (the white rectangle behind everything).
//    The light SVG starts with: <path d="M0 0 C285... fill="#FEFEFE" transform="translate(0,0)"/>
//    We remove that exact opening rectangle.
let dark = light.replace(
  /<path d="M0 0 C285[^"]*"[^/]*fill="#FEFEFE"[^/]*\/>/,
  ""
);

// 2. Transform every fill="#xxxxxx" attribute
dark = dark.replace(/fill="#([A-Fa-f0-9]{6})"/g, (_match, hex: string) => {
  const transformed = transformColor("#" + hex);
  return `fill="${transformed}"`;
});

// 3. Add a transparent background hint (no rect added, but ensure svg has no background)
//    The svg root has no explicit background, so removing the white rect = transparent.

writeFileSync(DST, dark);
console.log(`✓ Generated ${DST}`);
console.log(`  Size: ${(Buffer.byteLength(dark) / 1024).toFixed(1)} KB`);
