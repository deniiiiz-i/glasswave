"use client";

import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

export function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        // Frosted glass bar — visible white fill + top highlight so it reads as
        // glass on light backgrounds rather than flat grey.
        "relative flex w-fit flex-wrap items-center gap-1 break-words rounded-full border border-black/[0.06] bg-white/45 px-3.5 py-1.5 text-sm text-current/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_6px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/12 dark:bg-white/[0.07] dark:text-current/75 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.16),0_8px_24px_rgba(0,0,0,0.3)]",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      data-slot="breadcrumb-link"
      className={cn(
        "rounded-full px-2 py-0.5 transition-colors hover:bg-black/[0.06] hover:text-current dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

export function BreadcrumbPage({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "rounded-full border border-black/[0.05] bg-white/70 px-2 py-0.5 font-medium text-current shadow-sm dark:border-white/10 dark:bg-white/[0.14]",
        className,
      )}
      {...props}
    />
  );
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5 text-current/40", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

export function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
