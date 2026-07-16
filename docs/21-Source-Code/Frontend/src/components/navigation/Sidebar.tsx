import React from "react";
import { navigation } from "@/config/navigation";

import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-slate-950 text-white">

      {/* Logo */}

      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          FLUANZ
        </h1>

        <p className="text-sm text-slate-400">
          Revenue Intelligence
        </p>
      </div>

      <Separator />

      {/* Navigation */}

      <nav className="flex-1 px-3 py-4">

        <ul className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    transition-colors
                    hover:bg-slate-800
                  "
                >
                  <Icon className="h-5 w-5" />

                  {item.title}

                </button>

              </li>
            );
          })}

        </ul>

      </nav>

      <Separator />

      {/* Footer */}

      <div className="p-4 text-xs text-slate-500">

        Version 0.1.0

      </div>

    </aside>
  );
}