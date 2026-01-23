import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google"; // Switch to Fraunces
import "./globals.css";
import { LenisScroll } from "@/components/lenis-scroll";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"], // Enable variable axes for uniqueness
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Templates", // Updated title
  description: "High-end landing pages for local businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
