"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function PaginationPreview() {
  // Keep the example JSX clean (matching real-world usage). The wrapping div sits
  // outside the preview element, so it is not shown in the "Code" panel — it only
  // stops the demo's href="#" links from scrolling the docs page.
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: demo-only click guard, not a real control
    // biome-ignore lint/a11y/useKeyWithClickEvents: demo-only click guard, not a real control
    <div className="contents" onClick={(e) => e.preventDefault()}>
      <ComponentPreview label="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentPreview>
    </div>
  );
}
