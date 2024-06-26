import ClientOnly from "@/components/client-only";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientOnly>
      {children}
    </ClientOnly>
  );
}
