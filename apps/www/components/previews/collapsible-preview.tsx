"use client";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "glasswave";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

const repos = ["@radix-ui/primitives", "@radix-ui/colors", "@stitches/react"];

export function CollapsiblePreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPreview label="Collapsible">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] max-w-full space-y-2"
      >
        <div className="flex items-center justify-between gap-4 px-1">
          <h4 className="text-sm font-semibold text-current">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="glass" size="icon" className="size-8">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className="rounded-xl border border-black/[0.08] bg-black/[0.02] px-4 py-3 font-mono text-sm text-current/80 dark:border-white/10 dark:bg-white/5">
          {repos[0]}
        </div>

        <CollapsibleContent className="space-y-2">
          {repos.slice(1).map((repo) => (
            <div
              key={repo}
              className="rounded-xl border border-black/[0.08] bg-black/[0.02] px-4 py-3 font-mono text-sm text-current/80 dark:border-white/10 dark:bg-white/5"
            >
              {repo}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </ComponentPreview>
  );
}
