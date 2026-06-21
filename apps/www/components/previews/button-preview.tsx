"use client";

import { Button } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ButtonPreview() {
  return (
    <ComponentPreview label="Button">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="glass">Glass</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button variant="glass" size="icon" aria-label="Settings">
        ⚙️
      </Button>
    </ComponentPreview>
  );
}
