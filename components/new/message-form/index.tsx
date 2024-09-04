"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { useState, useEffect, Fragment } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Link, Plane, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { colors, flowers } from "@/components/flowers";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShareButton } from "@/components/shared/share-button";
import { toast } from "sonner";

export function MessageForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const formFields = [
    { name: "r", label: "who is it for?", type: "text", required: false, },
    { name: "s", label: "who is it from?", type: "text", required: false },
    { name: "m", label: "add a message", type: "textarea", required: false },
    { name: "f", label: "choose a flower", type: "flower", required: true },
    { name: "c", label: "choose a color", type: "color", required: true },
  ];

  const updateSearchParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    router.push(`?${params.toString()}`);
  }

  const handleNext = () => {
    if (currentStep < formFields.length) {
      setCurrentStep(prev => prev + 1);
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }

  const getURL = () => {
    const baseURL = process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://flowergram.vercel.app"
    const params = searchParams.toString();
    return baseURL + "/message?" + params;
  }

  return (
    <Card className="flex flex-col w-[380px] h-[540px] mt-12 sm:mt-32 overflow-hidden">
      <CardHeader>
        <Progress value={(currentStep / formFields.length) * 100} defaultValue={1 / formFields.length} className="w-full" />
      </CardHeader>
      <CardContent>
        {[...formFields.slice(0, currentStep)].map((field) => (
          <Fragment key={field.name}>
            <Label htmlFor={field.name} className="font-semibold">{field.label}</Label>
            {field.type === "text" && (
              <Input
                id={field.name}
                name={field.name}
                type="text"
                value={searchParams.get(field.name) || ""}
                onChange={(e) => updateSearchParams(field.name, e.target.value)}
                required={field.required}
              />
            )}
            {field.type === "textarea" && (
              <Textarea
                className="resize-none"
                id={field.name}
                name={field.name}
                value={searchParams.get(field.name) || ""}
                onChange={(e) => updateSearchParams(field.name, e.target.value)}
                required={field.required}
              />
            )}
            {field.type === "flower" && (
              <div className="flex justify-between">
                {flowers.map((flower) => (
                  <Button
                    key={flower.id}
                    className={cn(
                      searchParams.get(field.name) === String(flower.id) && "bg-muted"
                    )}
                    onClick={() => updateSearchParams(field.name, String(flower.id))}
                    size="icon"
                    variant="ghost"
                  >
                    <span className="text-2xl">{flower.icon}</span>
                  </Button>
                ))}
              </div>
            )}
            {field.type === "color" && (
              <div className="flex justify-between">
                {colors.map((color, index) => (
                  <button
                    key={color}
                    className={cn(
                      "rounded-md border w-8 h-8",
                      searchParams.get(field.name) === String(index) && "border-2 border-primary",
                    )}
                    onClick={() => updateSearchParams(field.name, String(index))}
                    style={{
                      background: color
                    }}
                  ></button>
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          size="sm"
          variant="ghost"
        >
          <ChevronLeft className="mr-1 w-4 h-4" /> back
        </Button>
        {currentStep === formFields.length ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
              >
                send <Send className="ml-1 w-3 h-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[350px]">
              <DialogHeader>
                <DialogTitle>share your flowergram now</DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-2 w-fit border p-2 rounded-md">
                <span className="font-mono text-sm md:text-base">flowergram.vercel.app/message</span>
                <Button
                  className="rounded-md bg-muted/50"
                  onClick={() => {
                    navigator.clipboard.writeText(getURL());
                    toast.success("Link coppied to clipboard!")
                  }}
                  size="icon"
                  variant="outline"
                >
                  <Link className="w-4 h-4" />
                </Button>
              </div>
              <div className="ml-auto flex gap-2">
                <ShareButton
                  title="flowergam"
                  text="open to see your message :)"
                  url={getURL()}
                />
                <a
                  href={getURL()}
                  target="_blank"
                >
                  <Button size="sm">
                    open
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Button
            onClick={handleNext}
            disabled={currentStep === formFields.length}
            size="sm"
            variant="ghost"
          >
            next <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        )}
      </CardFooter>
    </Card >
  );
}
