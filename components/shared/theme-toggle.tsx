"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "system", icon: <Monitor className="w-4 h-4" /> },
    { name: "light", icon: <Sun className="w-4 h-4" /> },
    { name: "dark", icon: <Moon className="w-4 h-4" /> },
  ];

  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 bg-background border rounded-full p-1">
      {themes.map((item, index) => (
        mounted ? (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${theme === item.name ? "bg-muted border" : ""
              }`}
            aria-label={`${item.name} theme`}
          >
            {item.icon}
          </button>
        ) : (
          <Skeleton
            key={index}
            className="w-8 h-8 rounded-full"
          />
        )
      ))}
    </div>
  );
}