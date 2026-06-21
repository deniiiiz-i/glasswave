import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { focusRing, glass } from "../../lib/glass";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = cn(
      glass,
      focusRing,
      // Gentler 12px radius (not the 32px surface radius), compact height,
      // and lighter text — fields should read as fields, not big pills.
      "h-10 w-full rounded-xl px-3.5 text-sm font-normal placeholder:text-current/40",
      "file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-current",
      "disabled:cursor-not-allowed disabled:opacity-50",
    );

    return (
      <input ref={ref} className={cn(baseClasses, className)} {...props} />
    );
  },
);

Input.displayName = "Input";
