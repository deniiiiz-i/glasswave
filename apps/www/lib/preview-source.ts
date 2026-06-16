import fs from "node:fs";
import path from "node:path";

const previewsDir = path.join(process.cwd(), "components", "previews");

/** Strip common leading indentation and surrounding blank lines. */
function dedent(code: string): string {
  const lines = code.replace(/\t/g, "  ").split("\n");
  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

  const indent = Math.min(
    ...lines
      .filter((l) => l.trim() !== "")
      .map((l) => l.match(/^ */)?.[0].length ?? 0),
  );

  return lines.map((l) => l.slice(indent)).join("\n");
}

/**
 * Pull the example JSX a preview passes to <ComponentPreview> — i.e. the part
 * worth showing as "the code for this preview". Returns null if the file does
 * not follow the wrapper convention.
 */
function extractExample(src: string): string | null {
  const open = src.indexOf("<ComponentPreview");
  const close = src.lastIndexOf("</ComponentPreview>");
  if (open === -1 || close === -1) return null;

  const openEnd = src.indexOf(">", open);
  if (openEnd === -1 || openEnd > close) return null;

  const inner = src.slice(openEnd + 1, close);
  const dedented = dedent(inner);
  return dedented.length ? dedented : null;
}

let cache: Record<string, string> | null = null;

/** Map of exported preview name (e.g. "ButtonPreview") → example source. */
export function getPreviewSources(): Record<string, string> {
  if (cache) return cache;

  const map: Record<string, string> = {};
  for (const file of fs.readdirSync(previewsDir)) {
    if (!file.endsWith("-preview.tsx")) continue;
    const src = fs.readFileSync(path.join(previewsDir, file), "utf-8");
    const name = src.match(/export function (\w+)/)?.[1];
    const example = extractExample(src);
    if (name && example) map[name] = example;
  }

  cache = map;
  return map;
}
