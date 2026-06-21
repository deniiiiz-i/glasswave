import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { focusRing, glass } from "../../lib/glass";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = cn(
      glass,
      focusRing,
      // Match Input: gentle 12px radius and lighter text, with a sensible
      // minimum height for a multi-line field.
      "min-h-20 w-full rounded-xl px-3.5 py-2.5 text-sm font-normal placeholder:text-current/40",
      "resize-none disabled:cursor-not-allowed disabled:opacity-50",
    );

    return (
      <textarea ref={ref} className={cn(baseClasses, className)} {...props} />
    );
  },
);

Textarea.displayName = "Textarea";
