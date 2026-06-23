"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { glass } from "../../lib/glass";

export const Item = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    asChild?: boolean;
    variant?: "default" | "glass";
  }
>(({ asChild, className, variant = "default", ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      ref={ref}
      data-slot="item"
      data-variant={variant}
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors",
        variant === "default" &&
          "hover:bg-black/[0.04] dark:hover:bg-white/[0.08] dark:hover:bg-white/[0.08]",
        variant === "glass" && glass,
        className,
      )}
      {...props}
    />
  );
});
Item.displayName = "Item";

export function ItemMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & { variant?: "icon" | "image" }) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(
        "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.05] [&_svg]:size-5",
        variant === "image" && "border-0 bg-transparent p-0",
        className,
      )}
      {...props}
    />
  );
}

export function ItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  );
}

export function ItemTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "truncate font-medium leading-tight text-current",
        className,
      )}
      {...props}
    />
  );
}

export function ItemDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn("truncate text-xs text-current/60 leading-snug", className)}
      {...props}
    />
  );
}

export function ItemActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex shrink-0 items-center gap-1", className)}
      {...props}
    />
  );
}
