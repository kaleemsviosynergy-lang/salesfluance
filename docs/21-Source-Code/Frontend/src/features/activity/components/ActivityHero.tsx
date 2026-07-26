import { Activity as ActivityIcon, Bot, CalendarClock, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { Activity } from "../types";

interface ActivityHeroProps {
  activities: Activity[];
  className?: string;
}

interface HeroStat {
  key: string;
  label: string;
  value: string;
  icon: typeof ActivityIcon;
}

function formatLatestDate(activities: Activity[]): string {
  if (activities.length === 0) return "—";

  const latest = activities.reduce((latestSoFar, activity) => {
    return new Date(activity.createdAt) > new Date(latestSoFar.createdAt)
      ? activity
      : latestSoFar;
  }, activities[0]);

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(latest.createdAt));
}

/**
 * ActivityHero
 *
 * Top-of-page summary card for the Activity feature. Derives all of
 * its stats from the supplied `activities` prop — no fetching, no
 * side effects.
 */
export function ActivityHero({ activities, className }: ActivityHeroProps) {
  const totalActivities = activities.length;

  const uniqueUserCount = new Set(
    activities.filter((a) => a.actor.type === "user").map((a) => a.actor.id)
  ).size;

  const systemEventCount = activities.filter(
    (a) => a.actor.type === "system" || a.actor.type === "integration"
  ).length;

  const latestActivityDate = formatLatestDate(activities);

  const stats: HeroStat[] = [
    {
      key: "total",
      label: "Total Activities",
      value: totalActivities.toLocaleString(),
      icon: ActivityIcon,
    },
    {
      key: "users",
      label: "Unique Users",
      value: uniqueUserCount.toLocaleString(),
      icon: Users,
    },
    {
      key: "system",
      label: "System Events",
      value: systemEventCount.toLocaleString(),
      icon: Bot,
    },
    {
      key: "latest",
      label: "Latest Activity",
      value: latestActivityDate,
      icon: CalendarClock,
    },
  ];

  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((stat) => {
        const StatIcon = stat.icon;
        return (
          <Card key={stat.key} className="shadow-sm">
            <CardContent className="flex items-center justify-between gap-3 p-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </span>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted">
                <StatIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
