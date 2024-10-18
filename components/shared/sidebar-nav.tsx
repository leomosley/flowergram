"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: React.ReactNode;
  }[];
  showIcons?: boolean;
}

export function SidebarNav({ className, items, showIcons = true, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex justify-between space-x-2 sm:justify-normal sm:flex-col sm:space-x-0 sm:space-y-1 bg-background",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname.startsWith(item.href)
              ? "bg-muted font-semibold text-primary"
              : "hover:bg-muted text-muted-foreground",
            "justify-start gap-2 items-center",
          )}
        >
          <div className={cn(
            "w-5 h-5",
            !showIcons && "sm:hidden"
          )}>
            {item.icon}
          </div>
          <span className="hidden sm:block">
            {item.title}
          </span>
        </Link>
      ))}
    </aside>
  );
}