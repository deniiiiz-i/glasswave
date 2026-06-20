"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "glasswave";
import { LogOut, Settings, User } from "lucide-react";
import { ComponentPreview } from "@/components/component-preview";

export function DropdownPreview() {
  return (
    <ComponentPreview label="Dropdown Menu">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open menu ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="size-4 opacity-70" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-4 opacity-70" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="size-4 opacity-70" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentPreview>
  );
}
