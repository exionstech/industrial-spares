import { readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.join(process.cwd(), "public", "assets");
const RASTER_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

let totalBefore = 0;
let totalAfter = 0;
let count = 0;

for await (const file of walk(ASSETS_DIR)) {
  const ext = path.extname(file).toLowerCase();
  if (!RASTER_EXT.has(ext)) {
    continue;
  }

  const before = (await stat(file)).size;
  const outPath = file.slice(0, -ext.length) + ".webp";

  await sharp(file).webp({ quality: 82 }).toFile(outPath);

  const after = (await stat(outPath)).size;
  await rm(file);

  totalBefore += before;
  totalAfter += after;
  count += 1;

  console.log(
    `${path.relative(ASSETS_DIR, file)} -> ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  );
}

console.log(
  `\n${count} files converted. ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
);
