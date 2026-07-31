import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn
 * Merges conditional class names and resolves Tailwind conflicts.
 * Shared across every component in the design system.
 *
 * @param inputs - Any number of class values (strings, objects, arrays, falsy values).
 * @returns A single, de-duplicated, Tailwind-safe class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}