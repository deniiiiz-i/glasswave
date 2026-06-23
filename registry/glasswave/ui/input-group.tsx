import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { glass } from "@/lib/glass";

export function InputGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        glass,
        // The group itself is the glass field; the input inside is transparent
        // and addons sit inline, so no manual padding juggling is needed.
        "relative flex h-10 w-full min-w-0 items-center rounded-xl text-sm",
        "transition focus-within:outline-none focus-within:ring-[3px] focus-within:ring-blue-500/40 dark:focus-within:ring-blue-400/50 focus-within:ring-offset-2 focus-within:ring-offset-transparent",
        "has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export const InputGroupAddon = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { align?: "inline-start" | "inline-end" }
>(({ className, align = "inline-start", ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="input-group-addon"
    data-align={align}
    className={cn(
      "flex shrink-0 items-center gap-2 text-current/60",
      align === "inline-start" ? "ps-3.5" : "pe-3.5",
      className,
    )}
    {...props}
  />
));
InputGroupAddon.displayName = "InputGroupAddon";

export const InputGroupInput = forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    data-slot="input-group-input"
    className={cn(
      "h-full w-full min-w-0 flex-1 bg-transparent px-3.5 text-sm font-normal outline-none placeholder:text-current/40 disabled:cursor-not-allowed",
      className,
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

export function InputGroupText({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn("text-sm text-current/70", className)}
      {...props}
    />
  );
}
