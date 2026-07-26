import { Bot, Plug, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { ActivityActor as ActivityActorType } from "../types";

interface ActivityActorProps {
  actor: ActivityActorType;
  /** Show the actor-type badge (User / System / Integration) alongside the name. */
  showActorType?: boolean;
  className?: string;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const ACTOR_TYPE_CONFIG = {
  user: { label: "User", icon: User },
  system: { label: "System", icon: Bot },
  integration: { label: "Integration", icon: Plug },
} as const;

/**
 * ActivityActor
 *
 * Small, reusable presentational block for rendering the person or
 * process responsible for an activity entry. Gracefully degrades for
 * system/integration actors that may not have an email or avatar.
 */
export function ActivityActor({
  actor,
  showActorType = false,
  className,
}: ActivityActorProps) {
  const typeConfig = ACTOR_TYPE_CONFIG[actor.type];
  const TypeIcon = typeConfig.icon;
  const isHuman = actor.type === "user";

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Avatar className="h-8 w-8 border">
        {isHuman && actor.avatarUrl ? (
          <AvatarImage src={actor.avatarUrl} alt={actor.name} />
        ) : null}
        <AvatarFallback
          className={cn(
            "text-xs font-medium",
            !isHuman && "bg-muted text-muted-foreground"
          )}
        >
          {isHuman ? (
            getInitials(actor.name)
          ) : (
            <TypeIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </AvatarFallback>
      </Avatar>

      <div className="flex min-w-0 flex-col leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-medium text-foreground">
            {actor.name}
          </span>
          {showActorType && (
            <Badge variant="secondary" className="h-5 gap-1 px-1.5 text-[10px]">
              <TypeIcon className="h-3 w-3" aria-hidden="true" />
              {typeConfig.label}
            </Badge>
          )}
        </div>
        {actor.role && (
          <span className="truncate text-xs text-muted-foreground">
            {actor.role}
          </span>
        )}
      </div>
    </div>
  );
}
