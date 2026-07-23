import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ContactAvatarProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  className?: string;
}

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function ContactAvatar({
  firstName,
  lastName,
  avatar,
  className,
}: ContactAvatarProps) {
  const fullName = `${firstName} ${lastName}`;

  return (
    <Avatar className={className}>
      {avatar && <AvatarImage src={avatar} alt={fullName} />}
      <AvatarFallback className="bg-primary/10 font-medium text-primary">
        {getInitials(firstName, lastName)}
      </AvatarFallback>
    </Avatar>
  );
}