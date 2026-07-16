import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <Input
          placeholder="Search organizations..."
          className="pl-10"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        <Button
          variant="ghost"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
        >
          <Moon className="h-5 w-5" />
        </Button>

        <Avatar>
          <AvatarFallback>
            KS
          </AvatarFallback>
        </Avatar>

      </div>
    </header>
  );
}