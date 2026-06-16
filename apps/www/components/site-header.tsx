"use client";

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "glasswave";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SidebarContent } from "@/components/docs/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const inDocs = pathname.startsWith("/docs");

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 h-16 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-black/35 backdrop-blur-xl backdrop-saturate-150">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="size-7 rounded-[10px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
        <span className="font-semibold text-sm text-slate-900 dark:text-white tracking-tight">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center gap-1.5 sm:gap-5">
        <Link
          href="/docs"
          className="hidden sm:inline-flex text-sm font-medium text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className="hidden sm:inline-flex text-sm font-medium text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          Components
        </Link>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <Github className="size-4" /> GitHub
        </a>

        <ThemeToggle />

        {inDocs && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="size-9 lg:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 border-none bg-transparent"
            >
              <div className="h-full w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl px-6 py-8 overflow-y-auto">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <SidebarContent onLinkClick={() => setOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
}
