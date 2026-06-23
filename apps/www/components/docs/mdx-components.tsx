import { Separator } from "glasswave";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Installation } from "./installation";

/** Slugify heading text into an `id` the right-rail TOC can link to. */
function slugify(node: ReactNode): string {
  const text = typeof node === "string" ? node : String(node ?? "");
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getMDXComponents(): MDXComponents {
  return {
    Installation,
    h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        id={slugify(children)}
        className="scroll-mt-28 text-xl font-semibold text-slate-900 dark:text-white mt-10 mb-3"
      >
        {children}
      </h2>
    ),
    h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        id={slugify(children)}
        className="scroll-mt-28 text-base font-semibold text-slate-800 dark:text-white/90 mt-6 mb-2"
      >
        {children}
      </h3>
    ),
    p: ({ children }: ComponentPropsWithoutRef<"p">) => (
      <p className="text-slate-600 dark:text-white/70 leading-7 mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }: ComponentPropsWithoutRef<"a">) => (
      <Link
        href={href ?? "#"}
        className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc list-inside text-slate-600 dark:text-white/70 mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="list-decimal list-inside text-slate-600 dark:text-white/70 mb-4 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }: ComponentPropsWithoutRef<"li">) => (
      <li className="leading-7">{children}</li>
    ),
    blockquote: ({ children }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote className="border-l-2 border-slate-300 dark:border-white/20 pl-4 text-slate-500 dark:text-white/50 italic my-4">
        {children}
      </blockquote>
    ),
    hr: () => <Separator className="my-8 opacity-20" />,
    pre: ({ children }: ComponentPropsWithoutRef<"pre">) => (
      <pre className="rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 overflow-x-auto text-sm leading-relaxed mb-4 text-slate-800 dark:text-white/90">
        {children}
      </pre>
    ),
    code: ({ children, className }: ComponentPropsWithoutRef<"code">) => {
      // Block code (inside pre) already styled by pre
      if (className) {
        return (
          <code className={`${className} font-mono text-sm`}>{children}</code>
        );
      }
      // Inline code
      return (
        <code className="font-mono text-sm bg-slate-100 dark:bg-white/10 text-blue-600 dark:text-blue-300 px-1.5 py-0.5 rounded-md">
          {children}
        </code>
      );
    },
    strong: ({ children }: ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-semibold text-slate-900 dark:text-white">
        {children}
      </strong>
    ),
  };
}
