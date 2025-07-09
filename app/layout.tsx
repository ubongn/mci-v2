import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


import { Toaster } from "@/components/ui/sonner";
import ClientTopLoader from "@/components/shared/ClientTopLoader";
import ClientToaster from "@/components/shared/ClientToaster";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MCI - Empowering the Next Generation",
  description:
    "MCI is dedicated to nurturing talents and delivering impactful solutions across communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.className} min-h-screen flex flex-col bg-white text-black`}>
        <ClientTopLoader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ClientToaster />
      </body>
    </html>
  );
}
