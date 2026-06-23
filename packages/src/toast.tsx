"use client";

import * as RadixToast from "@radix-ui/react-toast";
import { cn } from "../../lib/cn";
import { glass } from "../../lib/glass";

interface ToastProps {
  message: string;
  type?: "default" | "error";
  duration?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  className?: string;
}

export function Toast({
  message,
  type = "default",
  duration = 5000,
  position = "top-right",
  className = "",
}: ToastProps) {
  const variantClasses = {
    default: "",
    error: "!text-[#FF3B30]",
  } as const;

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
  } as const;

  return (
    <RadixToast.Provider swipeDirection="right" duration={duration}>
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        [data-state='open'] {
          animation: slideInDown 0.3s ease-out;
        }
        [data-state='closed'] {
          animation: slideOutUp 0.3s ease-in;
        }
      `}</style>
      <RadixToast.Root
        className={cn(
          glass,
          "border fixed p-4 rounded-[32px] flex items-center justify-between gap-3 z-50 min-w-[300px] max-w-[500px]",
          variantClasses[type],
          positionClasses[position],
          className,
        )}
      >
        <RadixToast.Description asChild>
          <span className="text-sm">{message}</span>
        </RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed z-[60]" />
    </RadixToast.Provider>
  );
}
