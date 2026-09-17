import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://rohit-portfolio-omega.vercel.app";
const siteDescription =
  "Rohit Raj — Full-Stack Software Engineer with 2+ years across enterprise systems and independent product development. Solo-built and scaled SIPA Nutrition, a live D2C e-commerce platform, to 1,600+ users.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rohit Raj | Full-Stack Software Engineer",
  description: siteDescription,
  keywords: [
    "Rohit Raj",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "SIPA Nutrition",
    "React Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Rohit Raj | Full-Stack Software Engineer",
    description: siteDescription,
    url: siteUrl,
    siteName: "Rohit Raj Portfolio",
    images: [
      {
        url: "/Portfolio.png",
        width: 1200,
        height: 630,
        alt: "Rohit Raj Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Raj | Full-Stack Software Engineer",
    description: siteDescription,
    images: ["/Portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Toaster position="top-center"></Toaster>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
