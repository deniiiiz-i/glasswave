"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { glass } from "@/lib/glass";

interface TooltipProps {
  content: string;
  children: ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({
  content,
  children,
  className = "",
  side = "top",
}: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={150}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <span className="inline-flex">{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={8}
            className={cn(
              glass,
              "bg-white dark:bg-zinc-950",
              "z-50 overflow-visible rounded-2xl border border-black/[0.08] px-3 py-1.5 text-sm shadow-lg dark:border-white/[0.2]",
              "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              className,
            )}
          >
            {content}
            <RadixTooltip.Arrow
              className="fill-white dark:fill-zinc-950"
              width={11}
              height={6}
            />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
