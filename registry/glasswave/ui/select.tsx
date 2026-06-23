"use client";

import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { focusRing, glass } from "@/lib/glass";

export const Select = RadixSelect.Root;

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Trigger
    ref={ref}
    className={cn(
      glass,
      focusRing,
      "group text-left w-full px-4 py-2 rounded-full inline-flex items-center justify-between gap-2",
      className,
    )}
    {...props}
  >
    {children}
    <RadixSelect.Icon asChild>
      <ChevronDown
        className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </RadixSelect.Icon>
  </RadixSelect.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = RadixSelect.Value;

const SelectScrollUpButton = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <RadixSelect.ScrollUpButton
    ref={ref}
    className={cn(
      "flex h-7 w-full shrink-0 cursor-default items-center justify-center border-b border-black/[0.08] dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-current/70",
      "[&[data-state=hidden]]:hidden",
      className,
    )}
    {...props}
  >
    <ChevronUp className="size-4" aria-hidden />
  </RadixSelect.ScrollUpButton>
));
SelectScrollUpButton.displayName = RadixSelect.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <RadixSelect.ScrollDownButton
    ref={ref}
    className={cn(
      "flex h-7 w-full shrink-0 cursor-default items-center justify-center border-t border-black/[0.08] dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-current/70",
      "[&[data-state=hidden]]:hidden",
      className,
    )}
    {...props}
  >
    <ChevronDown className="size-4" aria-hidden />
  </RadixSelect.ScrollDownButton>
));
SelectScrollDownButton.displayName = RadixSelect.ScrollDownButton.displayName;

export const SelectContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(
  (
    {
      className,
      children,
      position = "popper",
      sideOffset = 6,
      collisionPadding = 12,
      ...props
    },
    ref,
  ) => (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={ref}
        position={position}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        className={cn(
          glass,
          "z-50 max-h-[min(320px,var(--radix-select-content-available-height))] overflow-hidden shadow-lg rounded-3xl",
          // ^^^^ rounded-3xl вместо rounded-full — форма сохраняется, но items не обрезаются
          position === "popper" &&
            "min-w-[var(--radix-select-trigger-width)] will-change-[transform,opacity]",
          className,
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <RadixSelect.Viewport
          className={cn(
            "py-2 px-2", // ← px-2 добавлен, отступы от краёв
            position === "popper" && "w-full",
          )}
        >
          {children}
        </RadixSelect.Viewport>
        <SelectScrollDownButton />
      </RadixSelect.Content>
    </RadixSelect.Portal>
  ),
);
SelectContent.displayName = "SelectContent";

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-xl py-2 pl-3 pr-9 text-left text-sm outline-none",
      // ^^^^ rounded-xl — items аккуратно вписываются внутрь rounded-3xl контейнера
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
      "data-[highlighted]:bg-white/15 data-[state=checked]:bg-white/20",
      className,
    )}
    {...props}
  >
    <RadixSelect.ItemText className="flex-1 truncate">
      {children}
    </RadixSelect.ItemText>
    <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
      <RadixSelect.ItemIndicator>
        <Check className="size-4 opacity-90" strokeWidth={2.5} aria-hidden />
      </RadixSelect.ItemIndicator>
    </span>
  </RadixSelect.Item>
));
SelectItem.displayName = "SelectItem";
