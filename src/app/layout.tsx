import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Worldlink Laptop Repair Services | Fast & Reliable Repairs",
  description:
    "Professional laptop repair services including screen replacement, battery replacement, motherboard repair & data recovery. Trusted service with warranty in your city.",
  keywords: [
    "laptop repair",
    "screen replacement",
    "battery replacement",
    "motherboard repair",
    "data recovery",
    "worldlink repair services",
    "worldlink ",
  ],
  authors: [{ name: "Worldlink Repair Services" }],
  openGraph: {
    title: "Worldlink Laptop Repair Services",
    description:
      "Fast, reliable, and affordable laptop repair solutions with warranty.",
    url: "https://worldlink-repair.com",
    siteName: "Worldlink",
    images: [
      {
        url: "/images/repair1.jpg",
        width: 1200,
        height: 630,
        alt: "Laptop Repair Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worldlink Laptop Repair Services",
    description:
      "Affordable and reliable laptop repair service in your city with warranty.",
    images: ["/images/repair2.jpg"],
  },
  metadataBase: new URL("https://worldlink-repair.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
