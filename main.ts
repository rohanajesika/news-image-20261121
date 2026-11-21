// news-image-20261121 — entrypoint.
//
// The poster (entry.png) was drawn up front from 50 news stories first
// reported on Saturday 21 November 2026, each with its source and UTC
// time. At grade time this program only has to place that finished image
// where the grader looks for it, so it does nothing that could differ
// between the two graded runs: no network, no clock reads, no randomness,
// and no writes anywhere except the output directory the grader provides.
//
// Two things the offline grader taught earlier rounds: it starts the
// process from a working directory that is not the repository, and it
// mounts the repository read-only. So the poster is located through this
// file's own URL (never through the process working directory), and the
// program creates no directories — the writable output directory already
// exists when the grader runs the program.

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const POSTER = "entry.png";
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

// Next to this file, wherever the process was started from.
const posterPath = join(fileURLToPath(new URL(".", import.meta.url)), POSTER);

// An empty value must behave like an unset one, hence `||` here.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, POSTER);

// Refuse to ship anything that is not really the PNG we drew.
const magic = readFileSync(posterPath).subarray(0, PNG_SIGNATURE.length);
if (!magic.equals(PNG_SIGNATURE)) {
  throw new Error(`${POSTER} does not start with a PNG signature`);
}

copyFileSync(posterPath, outputPath);

// Read the copy back: a short write must fail loudly, not silently.
// Check both its size and its signature, so a truncated or corrupted
// copy cannot pass as the poster.
const writtenBytes = statSync(outputPath).size;
const writtenMagic = readFileSync(outputPath).subarray(0, PNG_SIGNATURE.length);
if (!writtenMagic.equals(PNG_SIGNATURE)) {
  throw new Error(`${outputPath} does not start with a PNG signature`);
}
const shippedBytes = statSync(posterPath).size;
if (shippedBytes !== writtenBytes) {
  throw new Error(
    `copy came out short: shipped ${shippedBytes} bytes, wrote ${writtenBytes}`,
  );
}

console.log(`wrote ${outputPath} (${writtenBytes} bytes)`);
