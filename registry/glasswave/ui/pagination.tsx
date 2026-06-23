"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn(
        "flex flex-row items-center gap-1 list-none p-0 m-0",
        className,
      )}
      {...props}
    />
  );
}

export function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-item"
      className={cn("list-none", className)}
      {...props}
    />
  );
}

export type PaginationLinkProps = React.ComponentProps<"a"> & {
  isActive?: boolean;
};

export const PaginationLink = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(({ className, isActive, ...props }, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    data-slot="pagination-link"
    data-active={isActive}
    className={cn(
      buttonVariants({
        variant: isActive ? "default" : "glass",
        size: "icon",
      }),
      "size-9 min-w-9 no-underline hover:no-underline",
      className,
    )}
    {...props}
  />
));
PaginationLink.displayName = "PaginationLink";

export function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Go to previous page"
      data-slot="pagination-previous"
      className={cn(
        buttonVariants({ variant: "glass", size: "md" }),
        "inline-flex h-9 items-center gap-1 rounded-full px-3 sm:pl-2.5 no-underline hover:no-underline",
        className,
      )}
      {...props}
    >
      <ChevronLeft className="size-4 shrink-0" />
      <span className="hidden sm:inline">Previous</span>
    </a>
  );
}

export function PaginationNext({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      aria-label="Go to next page"
      data-slot="pagination-next"
      className={cn(
        buttonVariants({ variant: "glass", size: "md" }),
        "inline-flex h-9 items-center gap-1 rounded-full px-3 sm:pr-2.5 no-underline hover:no-underline",
        className,
      )}
      {...props}
    >
      <span className="hidden sm:inline">Next</span>
      <ChevronRight className="size-4 shrink-0" />
    </a>
  );
}

export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4 opacity-70" />
      <span className="sr-only">More pages</span>
    </span>
  );
}
