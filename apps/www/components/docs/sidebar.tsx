"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";

export function Sidebar() {
  return (
    <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[22px] border border-slate-200/80 dark:border-white/12 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/[0.07] dark:to-white/[0.03] p-4 shadow-[0_12px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)] backdrop-blur-2xl backdrop-saturate-150">
      <SidebarContent />
    </aside>
  );
}

export function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-5">
      <nav className="flex flex-col gap-5">
        {nav.map((section) => (
          <div key={section.title}>
            <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400 dark:text-white/40">
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onLinkClick}
                      className={`relative flex items-center rounded-[10px] px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-blue-500/12 text-slate-900 dark:text-white font-medium before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-blue-500"
                          : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/[0.04] dark:hover:bg-white/5"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
