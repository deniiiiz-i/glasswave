"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import { cn } from "../../lib/cn";
import { focusRing, glass } from "../../lib/glass";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
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
      <RadixCheckbox.Root
        id={id}
        ref={ref as any}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(v) => onChange?.(Boolean(v))}
        disabled={disabled}
        className={cn(
          glass,
          focusRing,
          "w-5 h-5 rounded-full flex items-center justify-center data-[state=checked]:bg-[#007AFF] data-[state=checked]:border-[#007AFF]",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  },
);

Checkbox.displayName = "Checkbox";
