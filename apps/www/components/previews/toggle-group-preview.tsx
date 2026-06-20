"use client";

import { ToggleGroup, ToggleGroupItem } from "glasswave";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  LayoutGrid,
  List,
  Underline,
} from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

function Bar({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-current/40">
        {label}
      </span>
      <div className="rounded-full border border-black/[0.08] bg-black/[0.02] p-1 dark:border-white/10 dark:bg-white/[0.03]">
        {children}
      </div>
    </div>
  );
}

export function ToggleGroupPreview() {
  return (
    <ComponentPreview label="Toggle Group">
      <div className="flex flex-col items-center gap-7">
        <Bar label="Formatting">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Bar>

        <Bar label="Alignment">
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify">
              <AlignJustify className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </Bar>

        <Bar label="View">
          <ToggleGroup type="single" defaultValue="list">
            <ToggleGroupItem
              value="list"
              className="gap-2"
              aria-label="List view"
            >
              <List className="size-4" />
              List
            </ToggleGroupItem>
            <ToggleGroupItem
              value="grid"
              className="gap-2"
              aria-label="Grid view"
            >
              <LayoutGrid className="size-4" />
              Grid
            </ToggleGroupItem>
          </ToggleGroup>
        </Bar>
      </div>
    </ComponentPreview>
  );
}
