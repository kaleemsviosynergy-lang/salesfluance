import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
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

import type { Assessment } from "@/features/assessments/types/assessment";
import type { Evidence } from "@/features/evidence/types/evidence";
import type { Contact } from "@/features/organizations/types/contact";
import type { OrganizationDetails } from "@/features/organizations/types";

interface OrganizationTabsProps {
  organization: OrganizationDetails;

  contacts?: Contact[];
  assessments?: Assessment[];
  evidence?: Evidence[];

  isContactsLoading?: boolean;
  isAssessmentsLoading?: boolean;
  isEvidenceLoading?: boolean;
}

/**
 * Every supported Organization Details tab.
 * Keeping this as a union gives us autocomplete and compile-time safety.
 */
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

/**
 * Shared placeholder until a feature is implemented.
 * Future tabs simply replace this component with their real implementation.
 */
function PlaceholderTabContent() {
  return (
    <Card>
      <CardContent className="flex items-center justify-center py-16">
        <p className="text-sm text-muted-foreground">
          This feature is coming soon.
        </p>
      </CardContent>
    </Card>
  );
}

export function OrganizationTabs({
  organization,

  contacts = [],
  assessments = [],
  evidence = [],

  isContactsLoading = false,
  isAssessmentsLoading = false,
  isEvidenceLoading = false,
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
      content: <PlaceholderTabContent />,
    },
    {
      value: "recommendations",
      label: "Recommendations",
      content: <PlaceholderTabContent />,
    },
    {
      value: "activity",
      label: "Activity",
      content: <PlaceholderTabContent />,
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