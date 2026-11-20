// news-image-20261120 — "THE WORLD IN ONE DAY — FRIDAY 20 NOVEMBER 2026"
//
// A newspaper front page summing up the world news of Friday 20 November
// 2026, drawn as a single 1024x1024 image. The program holds the finished
// image beside it and copies it to the grader's output directory; it runs
// with no network and writes identical bytes on every run.
//
// What the page covers (reports filed as of early 20 November 2026, UTC):
// the first-ever Trump–Xi–Putin summit ends in Shenzhen with a peace
// declaration and nuclear risk talks; Cyclone Akvan makes landfall in India;
// Putin rules out a sea or energy truce after Ukraine hits the Crimean Bridge
// again; Iran steps up tanker attacks off Hormuz; Israel ends its Gaza ground
// operation; Anthropic soars 17% in its record Nasdaq debut; COP31 wraps up
// with the fossil-fuel phase-out dropped from its text.
//
// Run it exactly as the grader does (outside the container, MAKEFUN_OUTPUT_DIR
// stands in for /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const dst = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels, so
// verify the copy before reporting success: PNG magic, then width and height
// from the IHDR chunk, then the size limit.
const bytes = readFileSync(dst);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a PNG');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
const size = statSync(dst).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${dst} (${width}x${height}, ${size} bytes)`);
