import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { OverviewTab } from "./OverviewTab";
import { ContactsTab } from "./ContactsTab";

import { MOCK_CONTACTS } from "@/features/organizations/data/contacts.mock";
import type { OrganizationDetails } from "@/features/organizations/types/organization-details";

interface OrganizationTabsProps {
  organization: OrganizationDetails;
}

const PLACEHOLDER_TABS = [
  { value: "contacts", label: "Contacts" },
  { value: "assessments", label: "Assessments" },
  { value: "evidence", label: "Evidence" },
  { value: "findings", label: "Findings" },
  { value: "recommendations", label: "Recommendations" },
  { value: "activity", label: "Activity" },
] as const;

const ALL_TABS = [
  { value: "overview", label: "Overview" },
  ...PLACEHOLDER_TABS,
];

export function OrganizationTabs({
  organization,
}: OrganizationTabsProps) {

  // Filter contacts for the selected organization
  const organizationContacts = MOCK_CONTACTS.filter(
    (contact) => contact.organizationId === organization.id
  );

  return (
    <Tabs defaultValue="overview" className="w-full gap-4">
      <TabsList className="w-full justify-start overflow-x-auto">
        {ALL_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="overview">
        <OverviewTab organization={organization} />
      </TabsContent>

      {PLACEHOLDER_TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.value === "contacts" ? (
            <ContactsTab contacts={organizationContacts} />
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-16">
                <p className="text-sm text-muted-foreground">
                  {tab.label} module is coming soon.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}