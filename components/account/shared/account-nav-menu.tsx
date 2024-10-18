import { SidebarNav } from "@/components/shared/sidebar-nav";
import { Mail, LogOut, Settings } from "lucide-react";

export function AccountNavMenu() {
  const items = [
    { href: "/account/messages", title: "My Messages", icon: <Mail className="w-full h-full" /> },
    { href: "/account/settings", title: "Settings", icon: <Settings className="w-full h-full" /> },
    { href: "/sign-out", title: "Sign out", icon: <LogOut className="w-full h-full" /> },
  ];

  return <SidebarNav className="sticky py-4 top-[92px] sm:py-0 sm:top-[116px] z-50 lg:w-1/5" items={items} />;
}