"use client";

import { Toggle } from "glasswave";
import { Bold, Italic, Star, Underline } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-current/40">
        {label}
      </span>
      <div className="flex items-center gap-3">{children}</div>
    </div>
  );
}

export function TogglePreview() {
  return (
    <ComponentPreview label="Toggle">
      <div className="flex flex-col items-center gap-7">
        <Row label="Variants">
          <Toggle aria-label="Toggle bold" defaultPressed>
            <Bold className="size-4" />
          </Toggle>
          <Toggle variant="secondary" aria-label="Toggle italic">
            <Italic className="size-4" />
          </Toggle>
          <Toggle className="gap-2" aria-label="Toggle favourite">
            <Star className="size-4" />
            Favourite
          </Toggle>
        </Row>

        <Row label="Sizes">
          <Toggle size="sm" aria-label="Small">
            <Underline className="size-4" />
          </Toggle>
          <Toggle size="default" aria-label="Default">
            <Underline className="size-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Large">
            <Underline className="size-4" />
          </Toggle>
        </Row>
      </div>
    </ComponentPreview>
  );
}
