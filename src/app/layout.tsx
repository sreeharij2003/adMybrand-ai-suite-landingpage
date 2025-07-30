import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "Transform your marketing with AI-powered tools that create, optimize, and scale your campaigns automatically. 10x your ROI with intelligent automation.",
  keywords: "AI marketing, marketing automation, content generation, brand voice, social media management, email marketing, SEO optimization",
  authors: [{ name: "ADmyBRAND Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Transform your marketing with AI-powered tools that create, optimize, and scale your campaigns automatically.",
    type: "website",
    url: "https://admybrand.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "Transform your marketing with AI-powered tools that create, optimize, and scale your campaigns automatically.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
