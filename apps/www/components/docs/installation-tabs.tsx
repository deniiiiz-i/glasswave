"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "glasswave";
import { CodeBlock } from "./code-block";
import {
  PACKAGE_MANAGERS,
  type PackageManager,
  usePackageManager,
} from "./use-package-manager";

interface InstallationTabsProps {
  /** Full registry URL, e.g. https://…/r/button.json */
  url: string;
  /** npm dependencies the component needs. */
  dependencies: string[];
  /** Transformed component source (with `@/` aliases) to paste manually. */
  source: string;
  /** Where the source file lands in a shadcn project. */
  target: string;
}

const addCommand = (pm: PackageManager, url: string) =>
  ({
    pnpm: `pnpm dlx shadcn@latest add ${url}`,
    npm: `npx shadcn@latest add ${url}`,
    yarn: `yarn dlx shadcn@latest add ${url}`,
    bun: `bunx --bun shadcn@latest add ${url}`,
  })[pm];

export function PackageManagerSelector({
  pm,
  onChange,
}: {
  pm: PackageManager;
  onChange: (pm: PackageManager) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
      {PACKAGE_MANAGERS.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          data-active={pm === value}
          className="rounded-md px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors data-[active=true]:bg-white data-[active=true]:text-slate-900 data-[active=true]:shadow-sm dark:text-white/55 dark:data-[active=true]:bg-white/15 dark:data-[active=true]:text-white"
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export function InstallationTabs({
  url,
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

      <TabsContent value="command" className="space-y-3">
        <PackageManagerSelector pm={pm} onChange={setPm} />
        <CodeBlock code={addCommand(pm, url)} />
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
