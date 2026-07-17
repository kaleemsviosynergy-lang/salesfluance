import { Building2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  ReadinessScore,
  StatusBadge,
  type Organization,
} from "@/components/organizations";

interface OrganizationHeroProps {
  organization: Organization;
}

export function OrganizationHero({ organization }: OrganizationHeroProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <Avatar className="h-14 w-14 shrink-0 rounded-xl border">
              <AvatarFallback className="rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1.5">
              <h1 className="text-xl font-semibold tracking-tight text-foreground">
                {organization.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {organization.domain}
              </p>
            </div>
          </div>

          <div className="sm:w-56">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Revenue Readiness
            </p>
            <div className="mt-2">
              <ReadinessScore score={organization.readinessScore} />
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t pt-6 sm:grid-cols-4">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Industry
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {organization.industry}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Country
            </dt>
            <dd className="mt-1 text-sm text-foreground">
              {organization.country}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Employees
            </dt>
            <dd className="mt-1 text-sm tabular-nums text-foreground">
              {organization.employees.toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Status
            </dt>
            <dd className="mt-1">
              <StatusBadge status={organization.status} />
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}