"use client";

import { siteConfig } from "@/lib/site-config";
import { CodeBlock } from "./code-block";
import { PackageManagerSelector } from "./installation-tabs";
import { type PackageManager, usePackageManager } from "./use-package-manager";

/** How each package manager runs a one-off binary (`shadcn`). */
const RUNNER: Record<PackageManager, string> = {
  pnpm: "pnpm dlx",
  npm: "npx",
  yarn: "yarn dlx",
  bun: "bunx --bun",
};

const base = siteConfig.registryUrl.replace(/\/$/, "");

/**
 * A shadcn CLI command with the same package-manager selector used on
 * component pages. Pass `add` to build an `add <registry-url>` command for a
 * component, or `args` for any other subcommand (e.g. `init`).
 */
export function CliCommand({ args, add }: { args?: string; add?: string }) {
  const [pm, setPm] = usePackageManager();

  const subcommand = add ? `add ${base}/r/${add}.json` : args;

  return (
    <div className="my-4 space-y-3">
      <PackageManagerSelector pm={pm} onChange={setPm} />
      <CodeBlock code={`${RUNNER[pm]} shadcn@latest ${subcommand}`} />
    </div>
  );
}
