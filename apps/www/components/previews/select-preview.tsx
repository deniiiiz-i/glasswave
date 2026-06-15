"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SelectPreview() {
  return (
    <ComponentPreview label="Select">
      <div className="w-full max-w-sm flex flex-col gap-3">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Light</SelectItem>
            <SelectItem value="banana">Dark</SelectItem>
            <SelectItem value="cherry">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </ComponentPreview>
  );
}
