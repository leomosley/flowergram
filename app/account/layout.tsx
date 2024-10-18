import { Label } from "@/components/ui/label";
import { AccountNavMenu } from "@/components/account/shared/account-nav-menu";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex mx-auto md:max-w-6xl px-4">
      <section className="flex flex-col w-full pb-4">
        <div className="sticky flex w-full bg-background top-0 pr-4 sm:pb-4 pt-16 space-y-1 z-10">
          <Label className="flex flex-1 text-xl sm:text-3xl font-semibold">My Account</Label>
        </div>
        <div className="flex flex-col w-full sm:flex-row gap-2 sm:items-start">
          <AccountNavMenu />
          <section className="flex flex-col min-h-screen w-full pb-32 gap-4">
            {children}
          </section>
        </div>
      </section>
    </main>
  );
}