import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ORGANIZATION_TABS = [
  { value: "overview", label: "Overview" },
  { value: "contacts", label: "Contacts" },
  { value: "assessments", label: "Assessments" },
  { value: "evidence", label: "Evidence" },
  { value: "findings", label: "Findings" },
  { value: "recommendations", label: "Recommendations" },
  { value: "activity", label: "Activity" },
] as const;

export function OrganizationTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full gap-4">
      <TabsList className="w-full justify-start overflow-x-auto">
        {ORGANIZATION_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {ORGANIZATION_TABS.map((tab) => (
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