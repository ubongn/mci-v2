import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";

// Load font with basic configuration
const raleway = Raleway({
  subsets: ["latin"],
  weight: "400", // Start with single weight
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
      <body
        className={`${raleway.className} min-h-screen flex flex-col bg-white text-black`}
      >
        <NextTopLoader
          color="#0a63ad"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #000000,0 0 5px #000000"
        />
        <Navbar />

        <main className="flex-grow">{children}</main>
        <Footer />
          <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
