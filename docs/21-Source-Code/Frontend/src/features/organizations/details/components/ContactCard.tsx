import { Building2, Clock, Mail, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContactAvatar } from "@/features/organizations/details/components/ContactAvatar";
import type { Contact } from "@/features/organizations/types/contact";

interface ContactCardProps {
  contact: Contact;
}

function formatLastContacted(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ContactCard({ contact }: ContactCardProps) {
  const fullName = `${contact.firstName} ${contact.lastName}`;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex items-start gap-3">
          <ContactAvatar
            firstName={contact.firstName}
            lastName={contact.lastName}
            avatar={contact.avatar}
            className="h-11 w-11 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="truncate text-sm font-semibold text-foreground">
                {fullName}
              </p>
              {contact.isPrimary && (
                <Badge variant="secondary" className="shrink-0">
                  Primary
                </Badge>
              )}
            </div>
            <p className="truncate text-sm text-muted-foreground">
              {contact.jobTitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{contact.department}</span>
        </div>

        <div className="flex flex-col gap-2 border-t pt-4 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-foreground hover:underline"
          >
            <Mail
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="truncate">{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 text-foreground hover:underline"
          >
            <Phone
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="truncate">{contact.phone}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Last contacted {formatLastContacted(contact.lastContactedAt)}</span>
        </div>
      </CardContent>
    </Card>
  );
}