import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import SideNavBar from "@/components/SideNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio V3",
  description: "Version 3 of programmer portfolio",
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
      </body>
    </html>
  );
}
