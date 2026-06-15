"use client";

import { FontBoldIcon } from "@radix-ui/react-icons";
import { Toggle } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TogglePreview() {
  return (
    <ComponentPreview label="Toggle">
      <div className="flex gap-4 items-center">
        <Toggle aria-label="Toggle italic">
          <FontBoldIcon className="h-4 w-4" />
        </Toggle>
        <Toggle variant="secondary" aria-label="Toggle italic">
          <FontBoldIcon className="h-4 w-4" />
        </Toggle>
      </div>
    </ComponentPreview>
  );
}
