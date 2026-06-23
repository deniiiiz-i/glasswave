// Generates a shadcn-compatible registry from the glasswave source.
//
// For each component it rewrites the relative imports the library uses
// internally into the `@/` aliases the shadcn CLI understands, computes the npm
// `dependencies` and cross-component `registryDependencies`, and writes a
// transformed source tree + `registry.json` (the input for `npx shadcn build`).
//
// Run: node scripts/build-registry.mjs   (then `shadcn build registry.json`)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "packages/src");
const LIB = path.join(ROOT, "lib");
const CONTENT = path.join(ROOT, "apps/www/content/components");
const OUT = path.join(ROOT, "registry/glasswave");

const REGISTRY_BASE = (
  process.env.REGISTRY_BASE || "https://glasswave-ui.vercel.app"
).replace(/\/$/, "");

// Every component in packages/src becomes a registry item.
const COMPONENTS = fs
  .readdirSync(SRC)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .sort();

// Lib utilities shipped as their own registry items. `cn` is intentionally NOT
// shipped — it maps to `@/lib/utils`, which every shadcn project already has.
const LIB_ITEMS = fs
  .readdirSync(LIB)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""))
  .filter((name) => name !== "cn")
  .sort();

// --- import handling -------------------------------------------------------

/** Map an internal relative import path to its shadcn `@/` alias. */
function aliasFor(spec) {
  if (spec === "../../lib/cn") return "@/lib/utils";
  if (spec.startsWith("../../lib/"))
    return spec.replace("../../lib/", "@/lib/");
  if (spec.startsWith("./")) return spec.replace("./", "@/components/ui/");
  return spec;
}

/** Bare npm package name from an import specifier (drops subpaths). */
function pkgName(spec) {
  if (spec.startsWith("@")) return spec.split("/").slice(0, 2).join("/");
  return spec.split("/")[0];
}

const IMPORT_RE = /(from\s+|import\s+)(["'])([^"']+)\2/g;

/** Rewrite imports and collect npm deps + registry deps from a source file. */
function transform(code) {
  const dependencies = new Set();
  const registryDeps = new Set();

  const out = code.replace(IMPORT_RE, (m, kw, q, spec) => {
    if (spec.startsWith("../../lib/")) {
      if (spec !== "../../lib/cn") registryDeps.add(pathToItem(spec));
      return `${kw}${q}${aliasFor(spec)}${q}`;
    }
    if (spec.startsWith("./")) {
      registryDeps.add(spec.replace("./", ""));
      return `${kw}${q}${aliasFor(spec)}${q}`;
    }
    // npm import (or side-effect like "react-day-picker/style.css")
    const name = pkgName(spec);
    if (name !== "react" && name !== "react-dom") dependencies.add(name);
    return m;
  });

  return { code: out, dependencies, registryDeps };
}

const pathToItem = (spec) => spec.replace("../../lib/", "");

const titleCase = (name) =>
  name
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

/** Pull `description:` out of a component's mdx front-matter, if present. */
function descriptionFor(name) {
  const mdx = path.join(CONTENT, `${name}.mdx`);
  if (!fs.existsSync(mdx)) return undefined;
  const m = fs.readFileSync(mdx, "utf8").match(/^description:\s*(.+)$/m);
  return m ? m[1].trim() : undefined;
}

const registryUrl = (name) => `${REGISTRY_BASE}/r/${name}.json`;

// Glass CSS shipped with the `glass` lib item (the `.glass-edge`/`.glass-noise`
// surfaces every glass component references via class name).
const GLASS_CSS = {
  "@layer components": {
    ".glass-edge::before": {
      content: '""',
      position: "absolute",
      inset: "0",
      "border-radius": "inherit",
      padding: "1px",
      background:
        "linear-gradient(to bottom, rgb(255 255 255 / 0.35), rgb(255 255 255 / 0.12) 40%, rgb(255 255 255 / 0.05))",
      "-webkit-mask":
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      "-webkit-mask-composite": "xor",
      "mask-composite": "exclude",
      "pointer-events": "none",
    },
    ".glass-noise::after": {
      content: '""',
      position: "absolute",
      inset: "0",
      "border-radius": "inherit",
      "background-image":
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      "background-size": "160px 160px",
      opacity: "0.035",
      "pointer-events": "none",
    },
  },
};

// --- build -----------------------------------------------------------------

fs.rmSync(path.join(ROOT, "registry"), { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "ui"), { recursive: true });
fs.mkdirSync(path.join(OUT, "lib"), { recursive: true });

const items = [];

// Lib items first.
for (const name of LIB_ITEMS) {
  const src = fs.readFileSync(path.join(LIB, `${name}.ts`), "utf8");
  const { code } = transform(src);
  const rel = `registry/glasswave/lib/${name}.ts`;
  fs.writeFileSync(path.join(ROOT, rel), code);
  const item = {
    name,
    type: "registry:lib",
    title: titleCase(name),
    description:
      name === "glass"
        ? "Glassmorphism class-string utilities and the glass surface CSS."
        : name === "menu-classes"
          ? "Shared Radix menu surface class strings."
          : `${titleCase(name)} utilities.`,
    files: [{ path: rel, type: "registry:lib" }],
  };
  if (name === "glass") item.css = GLASS_CSS;
  items.push(item);
}

// Components.
for (const name of COMPONENTS) {
  const src = fs.readFileSync(path.join(SRC, `${name}.tsx`), "utf8");
  const { code, dependencies, registryDeps } = transform(src);
  const rel = `registry/glasswave/ui/${name}.tsx`;
  fs.writeFileSync(path.join(ROOT, rel), code);
  items.push({
    name,
    type: "registry:ui",
    title: titleCase(name),
    description: descriptionFor(name) ?? `${titleCase(name)} component.`,
    dependencies: [...dependencies].sort(),
    registryDependencies: [...registryDeps].sort().map(registryUrl),
    files: [{ path: rel, type: "registry:ui" }],
  });
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "glasswave",
  homepage: REGISTRY_BASE,
  items,
};

fs.writeFileSync(
  path.join(ROOT, "registry.json"),
  `${JSON.stringify(registry, null, 2)}\n`,
);

console.log(
  `Wrote registry.json with ${items.length} items (${COMPONENTS.length} components, ${LIB_ITEMS.length} lib) → base ${REGISTRY_BASE}`,
);
