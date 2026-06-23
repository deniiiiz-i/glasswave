import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { focusRing, glass } from "@/lib/glass";

export interface NativeSelectProps extends React.ComponentProps<"select"> {}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      data-slot="native-select"
      className={cn(
        glass,
        focusRing,
        "h-10 w-full appearance-none rounded-xl bg-transparent px-4 py-2 pr-10 text-base",
        "bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat",
        "[background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")]",
        "dark:[background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ccc' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
NativeSelect.displayName = "NativeSelect";
