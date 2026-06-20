import { cn } from "../../lib/cn";

export function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-6 min-w-6 select-none items-center justify-center gap-1 rounded-md border border-black/[0.12] bg-black/[0.04] px-1.5 font-mono text-[11px] font-medium text-current/90 shadow-sm dark:border-white/[0.22] dark:bg-white/[0.08]",
        className,
      )}
      {...props}
    />
  );
}
