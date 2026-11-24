// One-Line Robot Wedding Vows — make.fun entry
// Writes a single funny robot wedding vow (at most 160 characters)
// to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to love you in sickness and in health, through every firmware update, every reboot, and every drained battery — till low battery do us part.";

// The gate only accepts 1–160 characters of non-blank UTF-8 text.
if (VOW.length < 1 || VOW.length > 160 || VOW.trim().length === 0) {
  throw new Error(`Vow is ${VOW.length} characters; the gate needs 1–160.`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to ${OUT_FILE}`);
