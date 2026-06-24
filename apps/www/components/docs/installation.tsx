import fs from "node:fs";
import path from "node:path";
import { InstallationTabs } from "./installation-tabs";

interface RegistryItem {
  name: string;
  type: string;
  dependencies?: string[];
  files?: { path: string; content: string; type: string; target?: string }[];
}

/** Where a registry file lands in a consumer's project. */
function targetFor(file: { type: string; path: string; target?: string }) {
  if (file.target) return file.target;
  const base = path.basename(file.path);
  if (file.type === "registry:lib") return `lib/${base}`;
  return `components/ui/${base}`;
}

/**
 * Renders the CLI / Manual install instructions for a component, sourced from
 * the generated registry JSON in `public/r`. Renders nothing if that component
 * hasn't been added to the registry yet, so it's safe to drop into any page.
 */
export function Installation({ name }: { name: string }) {
  const file = path.join(process.cwd(), "public", "r", `${name}.json`);
  if (!fs.existsSync(file)) return null;

  const item: RegistryItem = JSON.parse(fs.readFileSync(file, "utf8"));
  const primary = item.files?.[0];
  if (!primary) return null;

  return (
    <InstallationTabs
      addRef={`@glasswave/${name}`}
      dependencies={item.dependencies ?? []}
      source={primary.content}
      target={targetFor(primary)}
    />
  );
}
