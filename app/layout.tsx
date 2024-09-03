import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="flex flex-col p-4 mx-auto md:max-w-5xl">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
