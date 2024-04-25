import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ModalStateProvider from "@/modal/ModalStateProvider"; 
import Modal from "@/modal/Modal";

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
        <ModalStateProvider>
          <Modal />
          <main className="flex flex-col p-4 mx-auto md:max-w-4xl">
            <Header />
            {children}
          </main>
        </ModalStateProvider>
      </body>
    </html>
  );
}
