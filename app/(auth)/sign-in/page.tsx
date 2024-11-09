import { GoogleSignIn } from "@/components/auth/google-sign-in";
import { GridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="text-balance -mt-24 text-center z-10">
        <BlurFade>
          <GoogleSignIn />
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
