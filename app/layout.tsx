import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import SideNavBar from "@/components/SideNavBar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tony Kanyamuka | Web & Mobile Developer",
  description:
    "Portfolio of Tony Kanyamuka, a web and mobile developer specializing in React, Next.js, React Native,Flutter, Node.js,Go, and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNavBar />
        <Header />

        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>npm
    </html>
  );
}
