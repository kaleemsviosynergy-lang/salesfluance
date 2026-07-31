"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/** Direction the content travels in from as it fades in. */
export type FadeInDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps {
  /** Direction of the entrance motion. Defaults to "up". */
  direction?: FadeInDirection;
  /** Animation duration in seconds. Defaults to 0.5. */
  duration?: number;
  /** Delay before the animation starts, in seconds. Defaults to 0. */
  delay?: number;
  /** Distance in pixels the content travels. Defaults to 16. */
  distance?: number;
  /** Plays the animation only once when scrolled into view. Defaults to true. */
  once?: boolean;
  /** Viewport intersection amount required to trigger. Defaults to 0.2. */
  amount?: number;
  /** Additional class names merged onto the root element. */
  className?: string;
  /** Content to animate in. */
  children?: React.ReactNode;
}

function buildVariants(direction: FadeInDirection, distance: number): Variants {
  const offset: Record<FadeInDirection, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return {
    hidden: { opacity: 0, ...offset[direction] },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

/**
 * FadeIn
 * Framer Motion wrapper that fades and slides content into view when it
 * enters the viewport. Reusable across Hero sections, cards, and any
 * scroll-triggered content.
 *
 * @example
 * <FadeIn direction="up" delay={0.1}>
 *   <h1>Welcome</h1>
 * </FadeIn>
 */
export default function FadeIn({
  direction = "up",
  duration = 0.5,
  delay = 0,
  distance = 16,
  once = true,
  amount = 0.2,
  className,
  children,
}: FadeInProps): React.JSX.Element {
  const variants = buildVariants(direction, distance);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}