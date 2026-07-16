import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex items-center justify-between p-6">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <Icon className="h-10 w-10 text-violet-600" />

      </CardContent>
    </Card>
  );
}