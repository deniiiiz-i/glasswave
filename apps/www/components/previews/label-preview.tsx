"use client";

import { Checkbox, Label } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function LabelPreview() {
  return (
    <ComponentPreview label="Label">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </ComponentPreview>
  );
}
