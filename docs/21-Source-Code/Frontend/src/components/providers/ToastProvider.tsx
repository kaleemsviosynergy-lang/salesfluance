import type { ReactNode } from "react";
import { Toaster } from "sonner";

interface ToastProviderProps {
  children: ReactNode;
}

/**
 * Mounts the single, app-wide Sonner <Toaster /> alongside the rest of the
 * tree. Toasts are triggered imperatively via `src/lib/toast.ts` — no
 * component anywhere else should import from "sonner" directly.
 */
export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        theme="system"
        richColors
        closeButton
        expand={false}
        duration={4000}
        gap={8}
      />
    </>
  );
}