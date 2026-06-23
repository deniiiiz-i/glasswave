"use client";

import * as RadixRadio from "@radix-ui/react-radio-group";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { focusRing, glass } from "@/lib/glass";

export const RadioGroup = RadixRadio.Root;

export const RadioGroupItem = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof RadixRadio.Item>
>(({ className, ...props }, ref) => (
  <RadixRadio.Item
    ref={ref as any}
    className={cn(
      glass,
      focusRing,
      "w-5 h-5 rounded-full flex items-center justify-center data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]",
      className,
    )}
    {...props}
  >
    <RadixRadio.Indicator className="w-2 h-2 bg-white rounded-full" />
  </RadixRadio.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";
