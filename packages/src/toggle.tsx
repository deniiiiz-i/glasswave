"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/cn";
import { focusRing } from "../../lib/glass";

const toggleVariants = cva(
  cn(
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white/90 text-gray-600 dark:text-white/50 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-200 dark:data-[state=on]:bg-white/20 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white",
    focusRing,
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        secondary:
          "border border-gray-300 dark:border-white/20 bg-transparent hover:bg-gray-100 dark:hover:bg-white/10",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
