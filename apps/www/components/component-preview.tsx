"use client";

import { Code2, Eye } from "lucide-react";
import { type ReactNode, useState } from "react";
import { CodeBlock } from "@/components/docs/code-block";
import { usePreviewSource } from "@/components/preview-source-context";

interface ComponentPreviewProps {
  children: ReactNode;
  label?: string;
}

export function ComponentPreview({ children, label }: ComponentPreviewProps) {
  const code = usePreviewSource();
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="my-6 overflow-hidden rounded-[22px] border border-slate-200/80 dark:border-white/12 shadow-[0_18px_48px_rgba(15,23,42,0.10)] dark:shadow-[0_18px_48px_rgba(0,0,0,0.32)]">
      <div className="flex items-center gap-2.5 border-b border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/4 px-4 py-2.5">
        <span className="text-xs font-medium text-slate-500 dark:text-white/40">
          {label || "Preview"}
        </span>
        {code && (
          <button
            type="button"
            onClick={() => setShowCode((v) => !v)}
            aria-pressed={showCode}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/12 bg-white/60 dark:bg-white/5 px-2.5 py-1 text-xs text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-colors"
          >
            {showCode ? (
              <>
                <Eye className="size-3" /> Preview
              </>
            ) : (
              <>
                <Code2 className="size-3" /> Code
              </>
            )}
          </button>
        )}
      </div>

      {showCode && code ? (
        <div className="bg-slate-100 p-3 dark:bg-[#060608]">
          <CodeBlock code={code} scroll />
        </div>
      ) : (
        <div className="gw-stage-dots relative flex min-h-[168px] flex-wrap items-center justify-center gap-4 bg-slate-100 p-11 dark:bg-[#060608]">
          <div className="relative z-[1] flex w-full flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
