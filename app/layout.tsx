import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/shared/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowerGram",
  description: "Send digital flowers and messages to anyone."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
