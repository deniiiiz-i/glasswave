"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "glasswave";
import {
  Calendar,
  Home,
  Inbox,
  LifeBuoy,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

const mainNav = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
];

const helpNav = [
  { title: "Settings", icon: Settings },
  { title: "Support", icon: LifeBuoy },
];

function AppSidebar() {
  const { open } = useSidebar();
  const [active, setActive] = useState("Home");

  return (
    <>
      <Sidebar>
        <SidebarHeader className={open ? "" : "justify-center px-0"}>
          {open && (
            <span className="flex-1 truncate text-sm font-semibold">
              Glasswave
            </span>
          )}
          <SidebarTrigger className="size-8" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              {mainNav.map(({ title, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    isActive={active === title}
                    onClick={() => setActive(title)}
                    title={title}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Help</SidebarGroupLabel>
            <SidebarMenu>
              {helpNav.map(({ title, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    isActive={active === title}
                    onClick={() => setActive(title)}
                    title={title}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2.5 px-1 py-1">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-xs font-semibold dark:bg-white/10">
              DI
            </div>
            {open && (
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">Deniz</p>
                <p className="truncate text-xs text-current/50">
                  deniz@glasswave.com
                </p>
              </div>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col gap-2 rounded-[28px] border border-black/[0.08] bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.03]">
        <span className="text-xs font-semibold uppercase tracking-wide text-current/45">
          {active}
        </span>
        <h4 className="text-lg font-semibold text-current">
          {active} dashboard
        </h4>
        <p className="text-sm leading-relaxed text-current/55">
          Toggle the sidebar with the button in the header — the icons stay
          visible when collapsed.
        </p>
      </div>
    </>
  );
}

export function SidebarPreview() {
  return (
    <ComponentPreview label="Sidebar">
      <div className="flex h-80 w-full max-w-2xl items-stretch gap-3">
        <SidebarProvider defaultOpen>
          <AppSidebar />
        </SidebarProvider>
      </div>
    </ComponentPreview>
  );
}
