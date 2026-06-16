"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * "On this page" rail. Reads the rendered article's h2/h3 headings from the
 * DOM (they carry slug ids from the MDX renderer), then highlights the one
 * currently in view. DOM-driven so it works across every docs page without
 * threading heading data through the server components.
 */
export function DocsToc() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("article h2[id], article h3[id]"),
    );
    setHeadings(
      nodes.map((n) => ({
        id: n.id,
        text: n.textContent ?? "",
        level: Number(n.tagName[1]),
      })),
    );

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:flex sticky top-24 self-start flex-col gap-2.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 dark:text-white/40">
        On this page
      </span>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`border-l-2 py-0.5 text-[13px] transition-colors ${
            h.level === 3 ? "pl-5" : "pl-3"
          } ${
            activeId === h.id
              ? "border-blue-500 text-slate-900 dark:text-white"
              : "border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-blue-500"
          }`}
        >
          {h.text}
        </a>
      ))}
    </aside>
  );
}
