"use client";

import { Button, Popover, PopoverContent, PopoverTrigger } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function PopoverPreview() {
  return (
    <ComponentPreview label="Popover">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4 text-gray-900 dark:text-white">
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-gray-900 dark:text-white">
                Dimensions
              </h4>
              <p className="text-sm text-gray-700 dark:text-white/70">
                Set the dimensions for the layer.
              </p>
            </div>
            {/* Form grid placeholders */}
            <div className="text-sm text-gray-600 dark:text-white/50">
              Form contents go here...
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </ComponentPreview>
  );
}
