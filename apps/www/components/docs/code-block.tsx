"use client";

import { Check, Copy } from "lucide-react";
import { type ReactNode, useState } from "react";

interface CodeBlockProps {
  code: string;
  /** Constrain tall blocks with a vertical scroll. */
  scroll?: boolean;
  /** IDE-style line numbers in a left gutter (default on). */
  showLineNumbers?: boolean;
  /** Controls rendered in a header bar inside the block (e.g. a package-manager selector). */
  toolbar?: ReactNode;
}

export function CodeBlock({
  code,
  scroll = false,
  showLineNumbers = true,
  toolbar,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard may be unavailable (insecure context) — ignore
    }
  };

  const lines = code.replace(/\n+$/, "").split("\n");

  const copyButton = (className: string) => (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={`inline-flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/12 dark:bg-white/5 dark:text-white/60 dark:hover:text-white ${className}`}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-[#060608]">
      {toolbar && (
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-2 pr-2.5 pl-4 dark:border-white/10">
          {toolbar}
          {copyButton("")}
        </div>
      )}
      <pre
        className={`m-0 overflow-x-auto py-4 font-mono text-[13px] leading-relaxed text-slate-800 dark:text-white/90 ${
          scroll ? "max-h-[420px] overflow-y-auto" : ""
        }`}
      >
        <code className="block min-w-full">
          {lines.map((line, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static code, lines never reorder
            <span key={i} className="flex">
              {showLineNumbers && (
                <span className="sticky left-0 w-14 shrink-0 select-none bg-slate-100 pr-3 pl-4 text-right text-slate-400 tabular-nums dark:bg-[#060608] dark:text-white/25">
                  {i + 1}
                </span>
              )}
              <span
                className={`whitespace-pre pr-4 ${showLineNumbers ? "" : "pl-4"}`}
              >
                {line || " "}
              </span>
            </span>
          ))}
        </code>
      </pre>
      {!toolbar && copyButton("absolute top-2.5 right-2.5")}
    </div>
  );
}
