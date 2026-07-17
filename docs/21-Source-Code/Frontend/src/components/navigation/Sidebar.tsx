import { NavLink } from "react-router-dom";
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
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </NavLink>
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