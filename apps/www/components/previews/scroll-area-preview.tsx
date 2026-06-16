"use client";

import { ScrollArea, Separator } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaPreview() {
  return (
    <ComponentPreview label="Scroll Area">
      <ScrollArea className="h-48 w-48 rounded-md border border-white/20 bg-white/5">
        <div className="p-4 text-white">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="text-sm text-white/80">{tag}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </ComponentPreview>
  );
}
