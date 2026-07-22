import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { ErrorDetails, ErrorFallback } from "@/components/errors";

interface NormalizedError {
  title: string;
  description: string;
  message?: string;
  stack?: string;
}

/**
 * Converts whatever React Router hands us via useRouteError() — a thrown
 * Error, a Response-based route error, or an arbitrary unknown value —
 * into the plain strings ErrorFallback/ErrorDetails need to render.
 */
function normalizeError(error: unknown): NormalizedError {
  if (isRouteErrorResponse(error)) {
    const isNotFound = error.status === 404;

    return {
      title: isNotFound ? "Page not found" : "Something went wrong",
      description: isNotFound
        ? "The page you're looking for doesn't exist or may have been moved."
        : "An unexpected error occurred.",
      message: `${error.status} ${error.statusText}`,
      stack:
        typeof error.data === "string"
          ? error.data
          : error.data
            ? JSON.stringify(error.data, null, 2)
            : undefined,
    };
  }

  if (error instanceof Error) {
    return {
      title: "Something went wrong",
      description: "An unexpected error occurred.",
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    title: "Something went wrong",
    description: "An unexpected error occurred.",
    message: typeof error === "string" ? error : undefined,
    stack: undefined,
  };
}

export default function ErrorPage() {
  const error = useRouteError();
  const { title, description, message, stack } = normalizeError(error);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <ErrorFallback title={title} description={description} />
      <ErrorDetails message={message} stack={stack} />
    </div>
  );
}