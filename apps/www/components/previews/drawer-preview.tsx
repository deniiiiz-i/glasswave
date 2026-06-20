"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function DrawerPreview() {
  return (
    <ComponentPreview label="Drawer">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="glass">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>Mobile-style panel from Vaul.</DrawerDescription>
          </DrawerHeader>
          <p className="text-sm text-current/75">
            Swipe down or tap outside to close.
          </p>
        </DrawerContent>
      </Drawer>
    </ComponentPreview>
  );
}
