import ClientOnly from "@/components/client-only";

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
