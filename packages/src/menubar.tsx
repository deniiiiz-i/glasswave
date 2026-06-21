"use client";

import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { glass, glassBase, textOnGlass } from "../../lib/glass";
import {
  menuContentClass,
  menuItemClass,
  menuLabelClass,
  menuSeparatorClass,
} from "../../lib/menu-classes";

export const Menubar = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      glassBase,
      textOnGlass,
      "relative flex h-11 items-center gap-1 rounded-full border border-black/[0.08] px-1.5 shadow-sm dark:border-white/[0.25]",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

export const MenubarMenu: typeof MenubarPrimitive.Menu = MenubarPrimitive.Menu;

export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-full px-3 py-1.5 text-sm font-medium outline-none",
      "data-[state=open]:bg-black/[0.06] dark:data-[state=open]:bg-white/15 data-[highlighted]:bg-black/[0.05] dark:data-[highlighted]:bg-white/10",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export const MenubarContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(glass, menuContentClass, "animate-in fade-in-0 zoom-in-95", className)}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

export const MenubarItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item ref={ref} className={cn(menuItemClass, inset && "pl-8", className)} {...props} />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

export const MenubarCheckboxItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(menuItemClass, "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="size-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

export const MenubarRadioItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem ref={ref} className={cn(menuItemClass, "pl-8", className)} {...props}>
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="size-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

export const MenubarLabel = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(menuLabelClass, inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

export const MenubarSeparator = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn(menuSeparatorClass, className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

export const MenubarShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cn("ml-auto text-xs tracking-widest text-current/50", className)} {...props} />
);

export const MenubarSub = MenubarPrimitive.Sub;

export const MenubarSubTrigger = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(menuItemClass, inset && "pl-8", className)}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

export const MenubarSubContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(glass, menuContentClass, "animate-in fade-in-0 zoom-in-95", className)}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
export const MenubarGroup = MenubarPrimitive.Group;
