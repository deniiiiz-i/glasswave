import { cn } from "../../lib/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[32px] bg-gray-200 dark:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
