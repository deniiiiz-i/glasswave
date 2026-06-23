"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { focusRing, glass } from "@/lib/glass";

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      id,
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <RadixSwitch.Root
        id={id}
        ref={ref as any}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(v) => onChange?.(Boolean(v))}
        disabled={disabled}
        className={cn(
          glass,
          focusRing,
          "group w-11 h-6 rounded-full relative data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
        {...props}
      >
        <RadixSwitch.Thumb
          className={cn(
            "block w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-sm translate-x-1",
            "group-data-[state=checked]:translate-x-6",
          )}
        />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";
