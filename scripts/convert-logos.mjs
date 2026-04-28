/**
 * Convert SVG logos → WebP/PNG with real alpha (transparent background).
 * Run: node scripts/convert-logos.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const targets = [
  { src: "public/logo/logo-light.svg", base: "public/logo/logo-light" },
  { src: "public/logo/logo-dark.svg", base: "public/logo/logo-dark" },
];

for (const { src, base } of targets) {
  const buf = readFileSync(src);
  const png = await sharp(buf, { density: 400 })
    .resize({ width: 800, height: null })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
  const webp = await sharp(buf, { density: 400 })
    .resize({ width: 800, height: null })
    .webp({ quality: 92, alphaQuality: 100 })
    .toBuffer();
  writeFileSync(`${base}.png`, png);
  writeFileSync(`${base}.webp`, webp);
  console.log(`✓ ${base}.webp (${(webp.length / 1024).toFixed(1)} KB) + .png (${(png.length / 1024).toFixed(1)} KB)`);
}
