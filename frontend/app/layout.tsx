import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { AiAssistant } from "@/components/marketing/ai-assistant";
import { StarBackground } from "@/components/marketing/star-background";
import "./globals.css";

const bodySans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dataMono = IBM_Plex_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ThinkClock Battery Labs",
  description: "BatteryScope, CellScope, and signal-driven battery diagnostics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodySans.variable} ${display.variable} ${dataMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent text-[var(--paper)] relative">
        <StarBackground />
        <ThemeProvider>
          <QueryProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <AiAssistant />
            <SiteFooter />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
