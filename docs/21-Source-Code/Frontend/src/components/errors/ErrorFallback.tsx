import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ErrorFallbackProps {
  /** Heading shown above the description. */
  title?: string;
  /** Friendly, non-technical explanation shown to the user. */
  description?: string;
  /** Icon component rendered in the badge above the heading. */
  icon?: ComponentType<{ className?: string }>;
  /** Called when "Retry" is pressed. Defaults to a full page reload. */
  onRetry?: () => void;
  /** Destination for the "Back" button. */
  backHref?: string;
  /** Label for the "Back" button. */
  backLabel?: string;
}

function reloadPage() {
  window.location.reload();
}

/**
 * Generic, reusable error fallback. Used by the global route error boundary
 * today, but intentionally accepts overridable copy/icon/retry behavior so
 * it can also back future API or network error states.
 */
export function ErrorFallback({
  title = "Something went wrong",
  description = "An unexpected error occurred.",
  icon: Icon = TriangleAlert,
  onRetry = reloadPage,
  backHref = "/",
  backLabel = "Back to Dashboard",
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center gap-6 p-8 text-center">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-destructive/10"
            aria-hidden="true"
          >
            <Icon className="h-8 w-8 text-destructive" />
          </div>

          <div className="space-y-1.5">
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              variant="outline"
              onClick={onRetry}
              className="gap-1.5"
              type="button"
            >
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
            <Button  className="gap-1.5">
              <Link to={backHref}>{backLabel}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}