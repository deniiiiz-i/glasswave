"use client";

import { Button, Tooltip } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TooltipPreview() {
  return (
    <ComponentPreview label="Tooltip">
      <div className="flex gap-4 items-center">
        <Tooltip content="Tooltip on Top" side="top">
          <Button variant="secondary">Top</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Bottom" side="bottom">
          <Button variant="secondary">Bottom</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Left" side="left">
          <Button variant="secondary">Left</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Right" side="right">
          <Button variant="secondary">Right</Button>
        </Tooltip>
      </div>
    </ComponentPreview>
  );
}
