"use client";

import { Button, Toast } from "glasswave";
import { useState } from "react";
import { ComponentPreview } from "@/components/component-preview";

type ToastType = "default" | "error";

export function ToastPreview() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<ToastType>("default");

  const showToast = (t: ToastType) => {
    setType(t);
    setShow(true);
    setTimeout(() => setShow(false), 5000);
  };

  return (
    <ComponentPreview label="Toast">
      <div className="flex gap-2">
        <Button onClick={() => showToast("default")} variant="glass">
          Default
        </Button>
        <Button onClick={() => showToast("error")} variant="destructive">
          Error
        </Button>
      </div>

      {show && (
        <Toast
          message={
            type === "default"
              ? "Changes saved successfully!"
              : "Something went wrong!"
          }
          type={type}
          position="bottom-center"
        />
      )}
    </ComponentPreview>
  );
}
