import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import CookieBanner from "@/components/ui/CookieBanner";
import CursorGlow from "@/components/ui/CursorGlow";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalaivanan K | Robotics & AI Software Engineer",
  description: "Portfolio of Kalaivanan K, specialized in ROS 2, Embedded Hardware and Computer Vision Systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          {/* Subtle cursor tracking spotlight */}
          <CursorGlow />
          
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatWidget />
          <CookieBanner />
          
          {/* Replace the G-ID below with your actual Measurement ID */}
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        </ThemeProvider>
      </body>
    </html>
  );
}