"use client";

import { Button, Tooltip } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TooltipPreview() {
  return (
    <ComponentPreview label="Tooltip">
      <div className="flex gap-4 items-center">
        <Tooltip content="Tooltip on Top" side="top">
          <Button variant="glass">Top</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Bottom" side="bottom">
          <Button variant="glass">Bottom</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Left" side="left">
          <Button variant="glass">Left</Button>
        </Tooltip>
        <Tooltip content="Tooltip on Right" side="right">
          <Button variant="glass">Right</Button>
        </Tooltip>
      </div>
    </ComponentPreview>
  );
}
