"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function ResizablePreview() {
  return (
    <ComponentPreview label="Resizable">
      <div className="h-56 w-full max-w-xl overflow-hidden rounded-[28px] border border-black/[0.08] bg-black/[0.02] dark:border-white/12 dark:bg-white/[0.03]">
        <ResizablePanelGroup orientation="horizontal" className="h-full">
          <ResizablePanel defaultSize={32} minSize={20}>
            <div className="flex h-full flex-col gap-1 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-current/45">
                Sidebar
              </span>
              {["Inbox", "Drafts", "Sent"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg px-2.5 py-1.5 text-sm text-current/70 hover:bg-black/[0.05] dark:hover:bg-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={68}>
            <div className="flex h-full flex-col gap-2 p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-current/45">
                Content
              </span>
              <h4 className="text-base font-semibold text-current">
                Drag the handle
              </h4>
              <p className="text-sm leading-relaxed text-current/60">
                Grab the divider in the middle and drag to resize either panel.
                Panels respect their minimum sizes.
              </p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ComponentPreview>
  );
}
