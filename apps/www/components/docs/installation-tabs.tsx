"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "glasswave";
import { CodeBlock } from "./code-block";
import {
  PACKAGE_MANAGERS,
  type PackageManager,
  usePackageManager,
} from "./use-package-manager";

interface InstallationTabsProps {
  /** Namespaced registry ref, e.g. @glasswave/button */
  addRef: string;
  /** npm dependencies the component needs. */
  dependencies: string[];
  /** Transformed component source (with `@/` aliases) to paste manually. */
  source: string;
  /** Where the source file lands in a shadcn project. */
  target: string;
}

const addCommand = (pm: PackageManager, addRef: string) =>
  ({
    pnpm: `pnpm dlx shadcn@latest add ${addRef}`,
    npm: `npx shadcn@latest add ${addRef}`,
    yarn: `yarn dlx shadcn@latest add ${addRef}`,
    bun: `bunx --bun shadcn@latest add ${addRef}`,
  })[pm];

export function PackageManagerSelector({
  pm,
  onChange,
}: {
  pm: PackageManager;
  onChange: (pm: PackageManager) => void;
}) {
  return (
    <div className="inline-flex items-center gap-4">
      {PACKAGE_MANAGERS.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          data-active={pm === value}
          className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-600 data-[active=true]:text-slate-900 dark:text-white/40 dark:hover:text-white/70 dark:data-[active=true]:text-white"
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export function InstallationTabs({
  addRef,
  dependencies,
  source,
  target,
}: InstallationTabsProps) {
  const [pm, setPm] = usePackageManager();

  return (
    <Tabs defaultValue="command" className="my-4 w-full">
      <TabsList>
        <TabsTrigger value="command">Command</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>

      <TabsContent value="command">
        <CodeBlock
          code={addCommand(pm, addRef)}
          toolbar={<PackageManagerSelector pm={pm} onChange={setPm} />}
        />
      </TabsContent>

      <TabsContent value="manual" className="space-y-3">
        <p className="text-sm text-slate-600 dark:text-white/70">
          Copy the component into{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-blue-600 dark:bg-white/10 dark:text-blue-300">
            {target}
          </code>
          {dependencies.length > 0 && (
            <>
              {" "}
              and make sure these are installed:{" "}
              {dependencies.map((dep, i) => (
                <span key={dep}>
                  {i > 0 && ", "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-blue-600 dark:bg-white/10 dark:text-blue-300">
                    {dep}
                  </code>
                </span>
              ))}
            </>
          )}
          .
        </p>
        <CodeBlock code={source} scroll />
      </TabsContent>
    </Tabs>
  );
}
