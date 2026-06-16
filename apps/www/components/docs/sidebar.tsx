"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/nav";

export function Sidebar() {
  return (
    <aside className="fixed top-16 bottom-0 left-0 z-40 w-[260px] overflow-y-auto border-r border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl px-4 py-8 lg:block hidden">
      <SidebarContent />
    </aside>
  );
}

export function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {nav.map((section) => (
        <div key={section.title}>
          <p className="px-2 mb-1.5 text-xs font-semibold tracking-wider text-slate-500 dark:text-white/40 uppercase">
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
                    className={`flex items-center rounded-lg px-3 py-1.5 text-sm transition-all duration-150 ${
                      isActive
                        ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white font-medium"
                        : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
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
  );
}
