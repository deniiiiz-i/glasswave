"use client";

import { Button, ButtonGroup } from "glasswave";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function ButtonGroupPreview() {
  return (
    <ComponentPreview label="Button Group">
      <div className="flex flex-col items-center gap-5">
        <ButtonGroup>
          <Button variant="glass" size="md">
            Left
          </Button>
          <Button variant="glass" size="md">
            Middle
          </Button>
          <Button variant="glass" size="md">
            Right
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="glass" size="icon" aria-label="Align left">
            <AlignLeft className="size-4" />
          </Button>
          <Button variant="glass" size="icon" aria-label="Align center">
            <AlignCenter className="size-4" />
          </Button>
          <Button variant="glass" size="icon" aria-label="Align right">
            <AlignRight className="size-4" />
          </Button>
          <Button variant="glass" size="icon" aria-label="Bold">
            <Bold className="size-4" />
          </Button>
          <Button variant="glass" size="icon" aria-label="Italic">
            <Italic className="size-4" />
          </Button>
          <Button variant="glass" size="icon" aria-label="Underline">
            <Underline className="size-4" />
          </Button>
        </ButtonGroup>

        <ButtonGroup orientation="vertical">
          <Button variant="glass" size="md">
            Top
          </Button>
          <Button variant="glass" size="md">
            Middle
          </Button>
          <Button variant="glass" size="md">
            Bottom
          </Button>
        </ButtonGroup>
      </div>
    </ComponentPreview>
  );
}
