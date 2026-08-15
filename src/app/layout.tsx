import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prithwi Singh — Software Engineer & AI Builder",
  description:
    "Software engineer building AI-powered products and scalable full-stack systems. Specializing in LLMs, developer tools, and production-grade applications.",
  openGraph: {
    title: "Prithwi Singh — Software Engineer & AI Builder",
    description:
      "Software engineer building AI-powered products and scalable full-stack systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prithwi Singh — Software Engineer & AI Builder",
    description:
      "Software engineer building AI-powered products and scalable full-stack systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
