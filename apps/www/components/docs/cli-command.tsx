"use client";

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

/**
 * A shadcn CLI command with the same package-manager selector used on
 * component pages. Pass `add` for an `add @glasswave/<name>` command, or `args`
 * for any other subcommand (e.g. `init`).
 */
export function CliCommand({ args, add }: { args?: string; add?: string }) {
  const [pm, setPm] = usePackageManager();

  const subcommand = add ? `add @glasswave/${add}` : args;

  return (
    <div className="my-4">
      <CodeBlock
        code={`${RUNNER[pm]} shadcn@latest ${subcommand}`}
        toolbar={<PackageManagerSelector pm={pm} onChange={setPm} />}
      />
    </div>
  );
}
