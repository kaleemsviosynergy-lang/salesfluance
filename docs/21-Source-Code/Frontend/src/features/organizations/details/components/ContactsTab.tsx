import { LoadingState, SectionHeader } from "@/components/common";
import { ContactCard } from "@/features/organizations/details/components/ContactCard";
import { ContactEmptyState } from "@/features/organizations/details/components/ContactEmptyState";
import type { Contact } from "@/features/organizations/types/contact";

interface ContactsTabProps {
  /** Contacts already scoped to the current organization. */
  contacts: Contact[];
  /** Optional loading flag for future async wiring. Defaults to false. */
  isLoading?: boolean;
}

export function ContactsTab({ contacts, isLoading = false }: ContactsTabProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <SectionHeader title="Contacts" />
        <LoadingState rows={4} />
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <SectionHeader title="Contacts" />
        <ContactEmptyState />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        title="Contacts"
        description={`${contacts.length} ${
          contacts.length === 1 ? "contact" : "contacts"
        }`}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}