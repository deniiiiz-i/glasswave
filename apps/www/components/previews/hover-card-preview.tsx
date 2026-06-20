"use client";

import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "glasswave";
import { CalendarDays } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function HoverCardPreview() {
  return (
    <ComponentPreview label="Hover Card">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="glass">@glasswave</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-72">
          <div className="flex gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/80 to-indigo-500/80 text-sm font-semibold text-white shadow-inner">
              GW
            </div>
            <div className="space-y-1.5">
              <h6 className="text-sm font-semibold leading-none">@glasswave</h6>
              <p className="text-sm opacity-70">
                A beautiful glassmorphism UI library for modern React apps.
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-xs opacity-50">
                <CalendarDays className="size-3.5" />
                <span>Joined December 2026</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </ComponentPreview>
  );
}
