import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/layouts/AppLayout";

import DashboardPage from "@/pages/DashboardPage";
import OrganizationsPage from "@/pages/OrganizationsPage";
import OrganizationDetailsPage from "@/pages/OrganizationDetailsPage";
import AssessmentsPage from "@/pages/AssessmentsPage";
import EvidencePage from "@/pages/EvidencePage";
import FindingsPage from "@/pages/FindingsPage";
import RecommendationsPage from "@/pages/RecommendationsPage";
import ReportsPage from "@/pages/ReportsPage";
import AIStudioPage from "@/pages/AIStudioPage";
import SettingsPage from "@/pages/SettingsPage";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "organizations",
        element: <OrganizationsPage />,
      },
      {
        path: "organizations/:organizationId",
        element: <OrganizationDetailsPage />,
      },
      {
        path: "assessments",
        element: <AssessmentsPage />,
      },
      {
        path: "evidence",
        element: <EvidencePage />,
      },
      {
        path: "findings",
        element: <FindingsPage />,
      },
      {
        path: "recommendations",
        element: <RecommendationsPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "ai-studio",
        element: <AIStudioPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },

      // Catch-all route (must always be last)
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);