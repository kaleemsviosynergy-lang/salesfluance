import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { OverviewTab } from "@/features/organizations/details/components/OverviewTab";
import type { OrganizationDetails } from "@/features/organizations/types";

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

const ALL_TABS = [{ value: "overview", label: "Overview" }, ...PLACEHOLDER_TABS];

export function OrganizationTabs({ organization }: OrganizationTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
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
          <Card>
            <CardContent className="flex items-center justify-center py-16">
              <p className="text-sm text-muted-foreground">Coming Soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}