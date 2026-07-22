import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ErrorDetailsProps {
  /** Short error message, e.g. `error.message` or a route error status line. */
  message?: string;
  /** Full stack trace or raw error payload, if available. */
  stack?: string;
}

/**
 * Development-only diagnostic panel for the global error boundary.
 * Renders nothing when `import.meta.env.DEV` is false, so no error
 * internals ever ship to a production build.
 */
export function ErrorDetails({ message, stack }: ErrorDetailsProps) {
  if (!import.meta.env.DEV) {
    return null;
  }

  if (!message && !stack) {
    return null;
  }

  return (
    <div className="mx-auto mt-4 w-full max-w-2xl px-4">
      <Collapsible className="rounded-lg border bg-muted/30">
        <CollapsibleTrigger className="group flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-foreground">
          <span>Error details (development only)</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t px-4 py-3">
          {message && (
            <p className="mb-2 break-words font-mono text-sm text-destructive">
              {message}
            </p>
          )}
          {stack && (
            <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-words font-mono text-xs text-muted-foreground">
              {stack}
            </pre>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}