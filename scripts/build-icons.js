#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const svgPath = path.join(root, "app/assets/images/icon.svg");
const buildDir = path.join(root, "app/assets/images/build");
const imagesDir = path.join(root, "app/assets/images");

if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true });

const svg = fs.readFileSync(svgPath);

const targets = [
  { out: path.join(buildDir, "icon.png"),     size: 512 },
  { out: path.join(imagesDir, "logo.png"),    size: 256 },
  { out: path.join(imagesDir, "logo64.png"),  size: 64  },
  { out: path.join(imagesDir, "logo128.png"), size: 128 },
];

(async () => {
  for (const t of targets) {
    await sharp(svg).resize(t.size, t.size).png().toFile(t.out);
    console.log(`✓ ${path.relative(root, t.out)} (${t.size}×${t.size})`);
  }

  try {
    const pngToIcoMod = require("png-to-ico");
    const pngToIco = pngToIcoMod.default || pngToIcoMod;
    const icoSizes = [16, 24, 32, 48, 64, 128, 256];
    const buffers = await Promise.all(
      icoSizes.map((s) => sharp(svg).resize(s, s).png().toBuffer())
    );
    const ico = await pngToIco(buffers);
    const icoPath = path.join(buildDir, "icon.ico");
    fs.writeFileSync(icoPath, ico);
    console.log(`✓ ${path.relative(root, icoPath)} (multi-size)`);
  } catch (e) {
    console.warn("ICO not generated:", e.message);
  }

  console.log("Done.");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
