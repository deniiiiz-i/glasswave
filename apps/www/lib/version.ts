import fs from "node:fs";
import path from "node:path";

/**
 * The published `glasswave` library version, read from the monorepo root
 * package.json at build time so the site never drifts from the real version.
 */
export function getLibraryVersion(): string {
  const pkgPath = path.join(process.cwd(), "..", "..", "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as {
    version: string;
  };
  return pkg.version;
}
