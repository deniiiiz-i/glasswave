"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "glasswave";
import { Home, Settings } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function SidebarPreview() {
  return (
    <ComponentPreview label="Sidebar">
      <div className="flex h-64 w-full max-w-xl items-stretch gap-2 rounded-[32px] border border-white/10 p-2">
        <SidebarProvider defaultOpen>
          <Sidebar>
            <SidebarHeader className="flex items-center justify-between">
              <span className="truncate text-sm font-semibold">App</span>
              <SidebarTrigger className="size-8" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="size-4 shrink-0" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="size-4 shrink-0" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-white/[0.03] text-sm text-current/50">
            Main content
          </div>
        </SidebarProvider>
      </div>
    </ComponentPreview>
  );
}
