"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";
import { forwardRef, useContext } from "react";
import { cn } from "../../lib/cn";
import { focusRing, glass } from "../../lib/glass";

export const InputOTP = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-45",
      containerClassName,
    )}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

export const InputOTPGroup = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

export const InputOTPSeparator = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cn("text-current/35", className)}
    {...props}
  >
    <Minus className="size-4" aria-hidden />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export const InputOTPSlot = forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const ctx = useContext(OTPInputContext);
  const slot = ctx?.slots[index];
  const char = slot?.char ?? null;
  const isActive = slot?.isActive ?? false;

  return (
    <div
      ref={ref}
      className={cn(
        glass,
        focusRing,
        "relative flex size-10 items-center justify-center rounded-xl border text-sm font-medium tabular-nums transition-all",
        isActive && "z-10 ring-2 ring-blue-500/40",
        className,
      )}
      {...props}
    >
      {char}
      {slot?.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-pulse bg-current duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
