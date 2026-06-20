"use client";

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Dialog,
  DialogContent,
  DialogTitle,
} from "glasswave";
import { Calculator, Calendar, Settings, Smile, User } from "lucide-react";
import { useEffect, useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

export function CommandPreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ComponentPreview label="Command">
      <div className="flex flex-col items-center gap-3">
        <Button variant="glass" onClick={() => setOpen(true)}>
          Open menu
          <kbd className="ml-1 rounded-md bg-black/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-current/60 dark:bg-white/10">
            ⌘K
          </kbd>
        </Button>
        <p className="text-xs text-current/50">Press ⌘K or click to open</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-0 gap-0">
          <DialogTitle className="sr-only">Command menu</DialogTitle>
          <Command className="rounded-none border-0 bg-transparent">
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="size-4 text-current/60" />
                  Calendar
                </CommandItem>
                <CommandItem>
                  <Smile className="size-4 text-current/60" />
                  Search emoji
                </CommandItem>
                <CommandItem>
                  <Calculator className="size-4 text-current/60" />
                  Calculator
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="size-4 text-current/60" />
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="size-4 text-current/60" />
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </ComponentPreview>
  );
}
