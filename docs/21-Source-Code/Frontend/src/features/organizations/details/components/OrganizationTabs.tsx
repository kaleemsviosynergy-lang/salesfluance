import type { ReactNode } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { ContactsTab } from "./ContactsTab";
import { OverviewTab } from "./OverviewTab";

import { AssessmentsTab } from "@/features/assessments/components";
import { EvidenceTab } from "@/features/evidence/components";
import { FindingsTab } from "@/features/findings/components";
import { RecommendationsTab } from "@/features/recommendations/components";
import { ActivityTab } from "@/features/activity/components";

import type { Assessment } from "@/features/assessments/types/assessment";
import type { Evidence } from "@/features/evidence/types/evidence";
import type { Finding } from "@/features/findings/types/finding";
import type { Recommendation } from "@/features/recommendations/types/recommendation";
import type { Activity } from "@/features/activity/types/activity";

import type { Contact } from "@/features/organizations/types/contact";
import type { OrganizationDetails } from "@/features/organizations/types";

interface OrganizationTabsProps {
  organization: OrganizationDetails;

  contacts?: Contact[];
  assessments?: Assessment[];
  evidence?: Evidence[];
  findings?: Finding[];
  recommendations?: Recommendation[];
  activities?: Activity[];

  isContactsLoading?: boolean;
  isAssessmentsLoading?: boolean;
  isEvidenceLoading?: boolean;
  isFindingsLoading?: boolean;
  isRecommendationsLoading?: boolean;
  isActivitiesLoading?: boolean;
}

type OrganizationTabKey =
  | "overview"
  | "contacts"
  | "assessments"
  | "evidence"
  | "findings"
  | "recommendations"
  | "activity";

interface TabDefinition {
  value: OrganizationTabKey;
  label: string;
  content: ReactNode;
}


export function OrganizationTabs({
  organization,

  contacts = [],
  assessments = [],
  evidence = [],
  findings = [],
  recommendations = [],
  activities = [],

  isContactsLoading = false,
  isAssessmentsLoading = false,
  isEvidenceLoading = false,
  isFindingsLoading = false,
  isRecommendationsLoading = false,
  isActivitiesLoading = false,
}: OrganizationTabsProps) {
  const tabs: readonly TabDefinition[] = [
    {
      value: "overview",
      label: "Overview",
      content: <OverviewTab organization={organization} />,
    },
    {
      value: "contacts",
      label: "Contacts",
      content: (
        <ContactsTab
          contacts={contacts}
          isLoading={isContactsLoading}
        />
      ),
    },
    {
      value: "assessments",
      label: "Assessments",
      content: (
        <AssessmentsTab
          assessments={assessments}
          isLoading={isAssessmentsLoading}
        />
      ),
    },
    {
      value: "evidence",
      label: "Evidence",
      content: (
        <EvidenceTab
          evidence={evidence}
          isLoading={isEvidenceLoading}
        />
      ),
    },
    {
      value: "findings",
      label: "Findings",
      content: (
        <FindingsTab
          findings={findings}
          isLoading={isFindingsLoading}
        />
      ),
    },
    {
      value: "recommendations",
      label: "Recommendations",
      content: (
        <RecommendationsTab
          recommendations={recommendations}
          isLoading={isRecommendationsLoading}
        />
      ),
    },
    {
      value: "activity",
      label: "Activity",
      content: (
        <ActivityTab
          activities={activities}
          isLoading={isActivitiesLoading}
        />
      ),
    },
  ] as const;

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList
        variant="line"
        className="w-full justify-start overflow-x-auto"
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="pt-6"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}