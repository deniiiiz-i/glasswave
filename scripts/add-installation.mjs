// One-off: insert an `## Installation` + `<Installation name="…" />` block into
// each component mdx page, between the preview and the first `##` section.
// Idempotent — skips pages that already have it.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "apps/www/content/components");

let added = 0;
let skipped = 0;

for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx"))) {
  const slug = file.replace(/\.mdx$/, "");
  const full = path.join(DIR, file);
  const src = fs.readFileSync(full, "utf8");

  if (src.includes("<Installation ")) {
    skipped++;
    continue;
  }

  const lines = src.split("\n");
  const headingIdx = lines.findIndex((l) => /^##\s/.test(l));
  const block = ["## Installation", "", `<Installation name="${slug}" />`, ""];

  if (headingIdx === -1) {
    // No section headings — append at the end.
    lines.push("", ...block);
  } else {
    lines.splice(headingIdx, 0, ...block);
  }

  fs.writeFileSync(full, lines.join("\n"));
  added++;
}

console.log(`Installation block: added to ${added}, skipped ${skipped}.`);
