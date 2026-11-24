// Say What Actually Broke — make.fun entry
// Writes exactly one line of honest error copy to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when set). Deterministic, no network, exit 0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Save failed: the disk is full, the backup turned out to be a shortcut, and autosave called in sick.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
