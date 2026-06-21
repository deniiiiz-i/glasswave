"use client";

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function SheetPreview() {
  return (
    <ComponentPreview label="Sheet">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="glass">Open sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>
              Slides in from the edge using the dialog primitive.
            </SheetDescription>
          </SheetHeader>
          <p className="text-sm text-current/75">
            Add forms or navigation here.
          </p>
        </SheetContent>
      </Sheet>
    </ComponentPreview>
  );
}
