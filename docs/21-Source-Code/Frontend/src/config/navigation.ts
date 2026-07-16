import type { NavigationItem } from "@/types/navigation";

import {
  LayoutDashboard,
  Building2,
  ClipboardList,
  FolderOpen,
  Search,
  Lightbulb,
  FileText,
  Bot,
  Settings,
} from "lucide-react";

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Organizations",
    href: "/organizations",
    icon: Building2,
  },
  {
    title: "Assessments",
    href: "/assessments",
    icon: ClipboardList,
  },
  {
    title: "Evidence",
    href: "/evidence",
    icon: FolderOpen,
  },
  {
    title: "Findings",
    href: "/findings",
    icon: Search,
  },
  {
    title: "Recommendations",
    href: "/recommendations",
    icon: Lightbulb,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "AI Studio",
    href: "/ai-studio",
    icon: Bot,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];