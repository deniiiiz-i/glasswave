import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent [&>svg]:size-3 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-white/25 bg-[#007AFF] text-white shadow-sm hover:bg-[#0070ec]",
        // Inverted default: blue text + blue ring on a transparent fill.
        outline:
          "border-[#007AFF]/55 bg-transparent text-[#007AFF] hover:bg-[#007AFF]/10 dark:border-[#409cff]/55 dark:text-[#409cff] dark:hover:bg-[#409cff]/10",
        // Real frosted glass: visible white fill + top highlight so it reads as
        // glass on light backgrounds instead of flat grey.
        glass:
          "border-black/[0.06] bg-white/45 text-current shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] hover:bg-white/60 dark:border-white/15 dark:bg-white/[0.1] dark:text-current/90 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] dark:hover:bg-white/[0.16]",
        destructive:
          "border-white/25 bg-[#FF3B30] text-white shadow-sm hover:bg-[#ec352b]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
