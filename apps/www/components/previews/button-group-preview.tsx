"use client";

import { Button, ButtonGroup } from "glasswave";
import { ArrowLeft, Heart, MoreHorizontal, Repeat2 } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function ButtonGroupPreview() {
  return (
    <ComponentPreview label="Button Group">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Standalone — outline */}
        <Button variant="outline" size="icon" aria-label="Back">
          <ArrowLeft className="size-4" />
        </Button>

        {/* Joined — default */}
        <ButtonGroup>
          <Button variant="default">
            <Heart className="size-4" />
            Like
          </Button>
          <Button variant="default">
            <Repeat2 className="size-4" />
            Repost
            <span className="ml-0.5 text-current/70">2</span>
          </Button>
        </ButtonGroup>

        {/* Joined — destructive */}
        <ButtonGroup>
          <Button variant="destructive">Report</Button>
          <Button variant="destructive" size="icon" aria-label="More options">
            <MoreHorizontal className="size-4" />
          </Button>
        </ButtonGroup>
      </div>
    </ComponentPreview>
  );
}
