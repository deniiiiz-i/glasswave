"use client";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function DialogPreview() {
  return (
    <ComponentPreview label="Dialog">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" className="w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="w-full"
              />
            </div>
          </div>
          <DialogFooter className="flex gap-4 sm:justify-between w-full">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>
  );
}
