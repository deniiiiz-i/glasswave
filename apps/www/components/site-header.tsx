"use client";

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "glasswave";
import { Github, Menu, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandSearch } from "@/components/command-search";
import { SidebarContent } from "@/components/docs/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/components", label: "Components" },
];

const iconLink =
  "inline-flex items-center justify-center size-9 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 flex w-[min(1120px,calc(100%-2rem))] items-center justify-between rounded-full border border-slate-200/80 dark:border-white/15 bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/[0.04] py-2 pl-5 pr-2 shadow-[0_12px_40px_rgba(15,23,42,0.10)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="font-semibold text-sm tracking-tight gw-glass-text">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center gap-1 sm:gap-1.5">
        {navLinks.map((link) => {
          const active =
            link.href === "/docs"
              ? pathname === "/docs" || pathname.startsWith("/docs/")
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`hidden sm:inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active
                  ? "text-slate-900 dark:text-white bg-slate-900/[0.06] dark:bg-white/10"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/[0.04] dark:hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <CommandSearch />

        <a
          href={siteConfig.links.npm}
          target="_blank"
          rel="noreferrer"
          aria-label="npm package"
          title="npm"
          className={iconLink}
        >
          <Package className="size-4" />
        </a>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
          title="GitHub"
          className={iconLink}
        >
          <Github className="size-4" />
        </a>

        <ThemeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon" className="size-9 lg:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 border-none bg-transparent">
            <div className="h-full w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl px-6 py-8 overflow-y-auto">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <SidebarContent onLinkClick={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
