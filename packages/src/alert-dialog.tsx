"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "../../lib/cn";
import { glass } from "../../lib/glass";
import { buttonVariants } from "./button";

export const AlertDialog = Dialog.Root;
export const AlertDialogTrigger = Dialog.Trigger;
export const AlertDialogPortal = Dialog.Portal;
export const AlertDialogClose = Dialog.Close;

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPortal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <Dialog.Content
        ref={ref}
        className={cn(
          glass,
          "bg-white dark:bg-zinc-950",
          "relative w-full max-w-[400px] overflow-hidden",
          "duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className,
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </div>
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader = ({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"div">) => (
  <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
);

export const AlertDialogTitle = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Title>) => (
  <Dialog.Title
    className={cn("!m-0 text-xl font-semibold tracking-tight", className)}
    {...props}
  />
);

export const AlertDialogDescription = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Description>) => (
  <Dialog.Description
    className={cn("!m-0 text-sm leading-relaxed text-current/70", className)}
    {...props}
  />
);

export const AlertDialogFooter = ({
  className = "",
  ...props
}: { className?: string } & ComponentPropsWithoutRef<"div">) => (
  <div
    className={cn(
      "flex flex-col-reverse gap-3 p-6 pt-0 sm:flex-row sm:items-center sm:gap-4",
      className,
    )}
    {...props}
  />
);

export const AlertDialogCancel = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<typeof Dialog.Close>) => (
  <Dialog.Close
    className={cn(
      buttonVariants({ variant: "glass" }),
      "flex-1 cursor-pointer",
      className,
    )}
    {...props}
  />
);

export const AlertDialogAction = ({
  className = "",
  variant = "default",
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "destructive";
}) => (
  <button
    className={cn(
      buttonVariants({ variant }),
      "flex-1 cursor-pointer",
      className,
    )}
    {...props}
  />
);
