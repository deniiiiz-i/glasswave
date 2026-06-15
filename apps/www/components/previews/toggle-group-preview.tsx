"use client";

import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { ToggleGroup, ToggleGroupItem } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ToggleGroupPreview() {
  return (
    <ComponentPreview label="Toggle Group">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </ComponentPreview>
  );
}
