"use client";

import { ScrollArea, Separator } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaPreview() {
  return (
    <ComponentPreview label="Scroll Area">
      <ScrollArea className="h-56 w-56 rounded-2xl border border-black/[0.08] bg-black/[0.02] dark:border-white/12 dark:bg-white/[0.04]">
        <div className="p-4">
          <h4 className="mb-3 text-sm font-medium leading-none text-current">
            Tags
          </h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm text-current/70">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </ComponentPreview>
  );
}
