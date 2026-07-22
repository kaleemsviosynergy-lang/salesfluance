import { Skeleton } from "@/components/ui/skeleton";

interface LoadingStateProps {
  /** Number of placeholder rows to render. Defaults to 5. */
  rows?: number;
}

const DEFAULT_ROWS = 5;

/**
 * Generic list/content skeleton. Reusable anywhere a page or section is
 * waiting on data — not tied to any specific table shape.
 */
export function LoadingState({ rows = DEFAULT_ROWS }: LoadingStateProps) {
  return (
    <div className="flex flex-col gap-4" role="status" aria-label="Loading">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3.5 w-1/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}