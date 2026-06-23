"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  /** Constrain tall source blocks; commands stay un-scrolled. */
  scroll?: boolean;
}

export function CodeBlock({ code, scroll = false }: CodeBlockProps) {
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

  return (
    <div className="group relative">
      <pre
        className={`m-0 overflow-x-auto rounded-xl border border-slate-200 bg-slate-100 p-4 pr-12 font-mono text-[13px] leading-relaxed text-slate-800 dark:border-white/10 dark:bg-[#060608] dark:text-white/90 ${
          scroll ? "max-h-[420px] overflow-y-auto" : ""
        }`}
      >
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        className="absolute right-2.5 top-2.5 inline-flex size-7 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/12 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
      >
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  );
}
