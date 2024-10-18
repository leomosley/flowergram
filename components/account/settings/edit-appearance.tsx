import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function EditAppearance() {
  return (
    <Card>
      <CardHeader className="flex relative w-full flex-col">
        <CardTitle>Theme</CardTitle>
        <CardDescription>
          Select the theme you would like to use.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-fit">
          <ThemeToggle />
        </div>
      </CardContent>
    </Card>
  );
}