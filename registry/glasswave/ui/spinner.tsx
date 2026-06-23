import { LoaderIcon } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const spinnerSizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "text-gray-400 dark:text-white/50",
          spinnerSizes[size],
          className,
        )}
        {...props}
      >
        <LoaderIcon className={cn("h-full w-full animate-spin")} />
      </div>
    );
  },
);

Spinner.displayName = "Spinner";
