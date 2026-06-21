"use client";

import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  Progress,
  Switch,
} from "glasswave";
import {
  ArrowRight,
  Check,
  RefreshCw,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import { useState } from "react";

/**
 * Live hero showcase — a "Control Center" glass card built from real
 * Glasswave primitives, framed by a few floating glass chips. Mirrors the
 * design kit's hero so visitors see the components working, not a screenshot.
 */
export function HomeShowcase() {
  const [wifi, setWifi] = useState(true);
  const [sync, setSync] = useState(false);

  return (
    <div className="relative flex items-center justify-center [perspective:1200px]">
      <Chip className="top-2 -left-6 sm:-left-10 gw-float">
        <Sparkles className="size-3.5" /> Glassmorphism
      </Chip>
      <Chip className="bottom-6 -right-4 sm:-right-8 text-blue-500 dark:text-blue-300 [animation-delay:0.6s] gw-float">
        <Zap className="size-3.5" /> 50+ components
      </Chip>
      <Chip className="top-1/2 -right-8 sm:-right-12 [animation-delay:1.2s] gw-float">
        <Check className="size-3.5" /> Accessible
      </Chip>

      <div className="gw-float">
        <Card className="w-[340px] max-w-full p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="size-11">
              <AvatarFallback>DI</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Control Center
              </p>
              <p className="text-[13px] text-slate-500 dark:text-white/60">
                Frosted glass, out of the box.
              </p>
            </div>
            <Badge className="ml-auto">Live</Badge>
          </div>

          <div className="h-px bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-slate-900 dark:text-white">
              <Wifi className="size-[15px] text-blue-500 dark:text-blue-400" />
              Wi-Fi
            </span>
            <Switch checked={wifi} onChange={setWifi} />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-slate-900 dark:text-white">
              <RefreshCw className="size-[15px] text-blue-500 dark:text-blue-400" />
              Auto-sync
            </span>
            <Switch checked={sync} onChange={setSync} />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-[13px] text-slate-500 dark:text-white/60">
              <span>Storage</span>
              <span>66%</span>
            </div>
            <Progress value={66} />
          </div>

          <Button className="w-full">
            <ArrowRight className="size-4" /> Open dashboard
          </Button>
        </Card>
      </div>
    </div>
  );
}

function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 dark:border-white/20 bg-gradient-to-br from-white/80 to-white/50 dark:from-white/20 dark:to-white/[0.06] px-3.5 py-2 text-[13px] font-semibold text-slate-700 dark:text-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
