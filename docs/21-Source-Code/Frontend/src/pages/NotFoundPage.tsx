import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileQuestion, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState, PageHeader } from "@/components/common";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center px-4 py-12">
      <div className="flex w-full max-w-[600px] flex-col gap-6">
        <PageHeader title="404" />

        <EmptyState
          icon={FileQuestion}
          title="Page Not Found"
          description="The page you are looking for doesn't exist or may have been moved."
          action={
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoBack}
                className="gap-1.5"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
              <Button
                type="button"
                onClick={handleGoToDashboard}
                className="gap-1.5"
              >
                <Home className="h-4 w-4" />
                Go to Dashboard
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
}