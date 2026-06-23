"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonGroupVariants = cva(
  cn(
    "inline-flex w-fit items-stretch",
    // Children stay full Buttons with their own glass surface and hover/press
    // animation, so a grouped button behaves identically to a standalone one.
    // Lifting the hovered/focused/active segment keeps its scale, border and
    // ring above the shared seam instead of being clipped by neighbours.
    "[&>*]:relative [&>*]:hover:z-10 [&>*]:focus-visible:z-10 [&>*]:active:z-10",
  ),
  {
    variants: {
      orientation: {
        horizontal:
          "flex-row [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export interface ButtonGroupProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof buttonGroupVariants> {
  role?: "group";
}

export function ButtonGroup({
  className,
  orientation,
  role = "group",
  ...props
}: ButtonGroupProps) {
  return (
    <div
      data-slot="button-group"
      role={role}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  );
}
