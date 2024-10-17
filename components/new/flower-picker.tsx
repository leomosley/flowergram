"use client";

import { flowers } from "@/components/flowers";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

export function FlowerPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {

  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-2">
      {flowers.map((flower) => (
        <TooltipProvider key={flower.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                key={flower.id}
                className={cn(
                  value === flower.id && "bg-muted"
                )}
                size="icon"
                variant="ghost"
                onClick={() => onChange(flower.id)}
                type="button"
              >
                <span className="text-2xl">{flower.icon}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {flower.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
