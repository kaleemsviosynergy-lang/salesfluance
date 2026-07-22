import type { ComponentType, ReactNode } from "react";
import { Inbox } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  /** Icon component rendered in the badge above the title. Defaults to Inbox. */
  icon?: ComponentType<{ className?: string }>;
  /** Short heading describing the empty state. */
  title: string;
  /** Supporting copy explaining why it's empty or what to do next. */
  description: string;
  /**
   * Optional action, e.g. a <Button> or a <Link><Button /></Link>.
   * Passed as a ready-made node so this component never needs to know
   * about routing or click handlers.
   */
  action?: ReactNode;
}

/**
 * Generic, centered empty state for lists, tables, and search results
 * with no data. Reusable across any FLUANZ page.
 */
export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-3 px-6 py-16 text-center">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-muted"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {action && <div className="mt-1">{action}</div>}
      </CardContent>
    </Card>
  );
}