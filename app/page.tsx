import { GridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="text-balance -mt-24 text-center">
        <WordFadeIn
          className="z-10 whitespace-pre-wrap text-center text-6xl font-medium  text-black tracking-tighter"
          words="FlowerGram"
        />
        <WordFadeIn
          className="z-10 mb-4 text-balance whitespace-pre-wrap text-center text-xl sm:text-2l md:text-3xl font-medium/relaxed text-neutral-800 tracking-tighter"
          words="Personalised digital flowers & messages."
          initialDelay={0.6}
        />
        <BlurFade
          delay={1.5}
        >
          <div className="flex gap-2 justify-center">
            <Link
              href="/new"
            >
              <Button
                className="flex items-center gap-1 px-4 rounded-full z-50"

              >
                Try it out
                <HiOutlinePencilAlt className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="https://github.com/leomosley/flowergram"
              target="_blank"
            >
              <Button
                className="flex items-center gap-1 px-4 rounded-full z-50"
              >
                <span className="">GitHub</span>
                <FaGithub className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </BlurFade>
      </div>
      <GridPattern
        numSquares={40}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%]",
        )}
      />
    </main>
  );
}
