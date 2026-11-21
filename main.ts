// main.ts — news-image-20261120 entrypoint (Node 22, standard library only).
//
// Copies the finished newspaper front page, entry.png, from this repository
// into the grader's output directory. Before copying it checks the file is
// really the PNG the entry promises: the PNG magic, at most 1024x1024, and
// at most 1 MiB. No network, no dependencies, and a plain byte copy, so two
// runs write identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024; // 1 MiB
const MAX_SIDE = 1024; // px

// The output directory the grader gives us, or /output when run by hand.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");

const png = readFileSync(src);
if (png.length > MAX_BYTES) {
  throw new Error(`entry.png is ${png.length} bytes, over the 1 MiB cap`);
}

// PNG magic: 89 50 4E 47 0D 0A 1A 0A.
const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(magic)) {
  throw new Error("entry.png does not start with the PNG magic");
}

// IHDR chunk: width and height are the first two big-endian uint32s,
// at offsets 16 and 20 (after the 8-byte signature and the chunk header).
// A real PNG is at least 24 bytes here; anything shorter is truncated.
if (png.length < 24) {
  throw new Error(`entry.png is only ${png.length} bytes, too short to be a PNG`);
}
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

const dest = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`wrote ${dest} (${width}x${height}, ${png.length} bytes)`);
