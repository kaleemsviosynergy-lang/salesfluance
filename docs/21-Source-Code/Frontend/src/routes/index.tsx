import {
  createBrowserRouter,
} from "react-router-dom";

import { AppLayout } from "@/layouts/AppLayout";

import { DashboardPage } from "@/pages/DashboardPage";
import { OrganizationsPage } from "@/pages/OrganizationsPage";
import { AssessmentsPage } from "@/pages/AssessmentsPage";
import { EvidencePage } from "@/pages/EvidencePage";
import { FindingsPage } from "@/pages/FindingsPage";
import { RecommendationsPage } from "@/pages/RecommendationsPage";
import { ReportsPage } from "@/pages/ReportsPage";
import { AIStudioPage } from "@/pages/AIStudioPage";
import { SettingsPage } from "@/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
    ],
  },
]);