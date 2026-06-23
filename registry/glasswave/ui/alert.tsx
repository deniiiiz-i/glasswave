import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { glass } from "@/lib/glass";

type AlertVariant = "default" | "destructive" | "success" | "warning";

const variantConfig: Record<
  AlertVariant,
  { icon: ComponentType<{ className?: string }>; accent: string }
> = {
  default: { icon: Info, accent: "text-[#007AFF]" },
  destructive: { icon: CircleAlert, accent: "text-[#FF3B30]" },
  success: { icon: CircleCheck, accent: "text-[#34C759]" },
  warning: { icon: TriangleAlert, accent: "text-[#FF9500]" },
};

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  className?: string;
  /** Custom leading icon. Pass `null` to hide the icon entirely. */
  icon?: ReactNode;
}

export function Alert({
  children,
  variant = "default",
  className = "",
  icon,
}: AlertProps) {
  const { icon: DefaultIcon, accent } = variantConfig[variant];
  const showIcon = icon !== null;

  return (
    <div
      role="alert"
      data-variant={variant}
      className={cn(glass, "flex items-start gap-3 p-4", className)}
    >
      {showIcon && (
        <span className={cn("mt-0.5 shrink-0 [&_svg]:size-5", accent)}>
          {icon ?? <DefaultIcon />}
        </span>
      )}
      <div className="flex min-w-0 flex-col gap-1">{children}</div>
    </div>
  );
}

interface AlertTitleProps {
  children: ReactNode;
  className?: string;
}

export function AlertTitle({ children, className = "" }: AlertTitleProps) {
  return (
    <div className={cn("font-semibold leading-6 tracking-tight", className)}>
      {children}
    </div>
  );
}

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function AlertDescription({
  children,
  className = "",
}: AlertDescriptionProps) {
  return (
    <div className={cn("text-sm leading-relaxed text-current/70", className)}>
      {children}
    </div>
  );
}
