import {
  Bot,
  Building2,
  ClipboardList,
  Search,
} from "lucide-react";

import { AppLayout } from "@/layouts/AppLayout";

import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/dashboard/StatCard";

function App() {
  return (
    <AppLayout>

      <PageHeader
        title="Revenue Readiness Dashboard"
        description="Monitor organizations, assessments and AI insights."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Organizations"
          value="128"
          icon={Building2}
        />

        <StatCard
          title="Assessments"
          value="54"
          icon={ClipboardList}
        />

        <StatCard
          title="Findings"
          value="17"
          icon={Search}
        />

        <StatCard
          title="AI Confidence"
          value="96%"
          icon={Bot}
        />

      </div>

    </AppLayout>
  );
}

export default App;