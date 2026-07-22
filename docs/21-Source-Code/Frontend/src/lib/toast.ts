import { toast as sonnerToast } from "sonner";

type ToastOptions = Parameters<typeof sonnerToast.success>[1];

/**
 * Reusable toast helpers. Every notification in the app should go through
 * these functions instead of calling `sonner` inline — this keeps toast
 * copy, styling, and behavior consistent and swappable in one place.
 *
 * Usage:
 *   import { success, error, warning, info } from "@/lib/toast";
 *   success("Organization saved");
 */
export function success(message: string, options?: ToastOptions): void {
  sonnerToast.success(message, options);
}

export function error(message: string, options?: ToastOptions): void {
  sonnerToast.error(message, options);
}

export function warning(message: string, options?: ToastOptions): void {
  sonnerToast.warning(message, options);
}

export function info(message: string, options?: ToastOptions): void {
  sonnerToast.info(message, options);
}

/**
 * Grouped form for call sites that prefer a single import:
 *   import { toast } from "@/lib/toast";
 *   toast.error("Something went wrong");
 */
export const toast = {
  success,
  error,
  warning,
  info,
} as const;