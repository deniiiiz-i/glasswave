"use client";

import { GripVertical } from "lucide-react";
import { forwardRef } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import { cn } from "@/lib/utils";

export const ResizablePanelGroup = ({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof Group> & {
  orientation?: "horizontal" | "vertical";
}) => (
  <Group
    orientation={orientation}
    className={cn(
      "flex h-full w-full data-[orientation=vertical]:flex-col",
      className,
    )}
    {...props}
  />
);

export const ResizablePanel = Panel;

export const ResizableHandle = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator> & {
    withHandle?: boolean;
  }
>(({ withHandle, className, ...props }, ref) => (
  <Separator
    elementRef={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-black/10 dark:bg-white/15 outline-none transition-colors after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2 focus-visible:ring-2 focus-visible:ring-blue-500/40 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-7 w-4 items-center justify-center rounded-md border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.06] shadow-sm">
        <GripVertical className="size-3.5 text-current/50" aria-hidden />
      </div>
    )}
  </Separator>
));
ResizableHandle.displayName = "ResizableHandle";
