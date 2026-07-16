import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReadinessScore } from "./ReadinessScore";
import { StatusBadge } from "./StatusBadge";
import type { Organization } from "./types";

interface OrganizationsTableProps {
  organizations: Organization[];
  onView: (organization: Organization) => void;
  onEdit: (organization: Organization) => void;
  onDelete: (organization: Organization) => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

const employeeFormatter = new Intl.NumberFormat("en-US");

export function OrganizationsTable({
  organizations,
  onView,
  onEdit,
  onDelete,
}: OrganizationsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Industry</TableHead>
          <TableHead>Employees</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Readiness Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-12 text-right">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {organizations.map((organization) => (
          <TableRow key={organization.id} className="group">
            <TableCell>
              <button
                type="button"
                onClick={() => onView(organization)}
                className="flex items-center gap-3 text-left"
              >
                <Avatar className="h-8 w-8 shrink-0 rounded-full border">
                  <AvatarFallback className="rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {getInitials(organization.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground group-hover:underline">
                    {organization.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {organization.domain}
                  </p>
                </div>
              </button>
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {organization.industry}
            </TableCell>
            <TableCell className="text-sm tabular-nums text-muted-foreground">
              {employeeFormatter.format(organization.employees)}
            </TableCell>
            <TableCell className="text-sm text-muted-foreground">
              {organization.country}
            </TableCell>
            <TableCell>
              <ReadinessScore score={organization.readinessScore} />
            </TableCell>
            <TableCell>
              <StatusBadge status={organization.status} />
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground"
                    aria-label={`Actions for ${organization.name}`}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem onClick={() => onView(organization)}>
                    <Eye className="h-4 w-4" />
                    View details
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onEdit(organization)}>
                    <Pencil className="h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => onDelete(organization)}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
