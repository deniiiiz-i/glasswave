"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonGroupVariants = cva(
  "inline-flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:shadow-none hover:[&>*]:z-10",
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
