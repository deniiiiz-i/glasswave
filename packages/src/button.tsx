import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/cn";
import { focusRing, glass, glassInteractive } from "../../lib/glass";

export const buttonVariants = cva(
  `${glass} ${glassInteractive} ${focusRing} inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full [&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default:
          "bg-[#007AFF] hover:bg-[#007AFF]/90 text-white shadow-sm border-0",
        outline:
          "bg-none text-[#007AFF] border-[#007AFF]/55 shadow-none hover:bg-[#007AFF]/10 hover:border-[#007AFF]/70 hover:shadow-none dark:text-[#409cff] dark:border-[#409cff]/55 dark:hover:border-[#409cff]/70",
        glass: "",
        destructive: "!text-[#FF3B30]",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-2 text-lg",
        icon: "h-10 w-10 p-0 inline-flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
