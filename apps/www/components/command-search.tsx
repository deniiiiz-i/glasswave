"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogContent,
  DialogTitle,
} from "glasswave";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { nav } from "@/lib/nav";

/**
 * Header search affordance + ⌘K command palette over the docs navigation.
 * The button looks like a search field on wider screens and collapses to an
 * icon on mobile. Pressing ⌘K (or Ctrl+K) toggles the dialog from anywhere.
 */
export function CommandSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/12 bg-white/50 dark:bg-white/5 text-slate-400 dark:text-white/40 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-600 dark:hover:text-white/60 transition-colors size-9 justify-center sm:size-auto sm:justify-start sm:py-2 sm:pl-3 sm:pr-2 sm:w-56"
      >
        <Search className="size-4 shrink-0" />
        <span className="hidden sm:inline text-[13px]">Search docs…</span>
        <kbd className="ml-auto hidden sm:inline rounded-md bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-slate-500 dark:text-white/60">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 gap-0 max-w-xl">
          <DialogTitle className="sr-only">Search documentation</DialogTitle>
          <Command className="rounded-none border-0 bg-transparent">
            <CommandInput placeholder="Search documentation…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {nav.map((section) => (
                <CommandGroup key={section.title} heading={section.title}>
                  {section.items.map((item) => (
                    <CommandItem
                      key={item.href}
                      value={`${item.title} ${item.href}`}
                      onSelect={() => go(item.href)}
                    >
                      {item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
