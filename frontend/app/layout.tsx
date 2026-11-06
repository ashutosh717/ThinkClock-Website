import type { Metadata } from "next";
import { Bai_Jamjuree, Playfair_Display } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { AiAssistant } from "@/components/marketing/ai-assistant";
import { StarBackground } from "@/components/marketing/star-background";
import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/500.css";
import "@fontsource/cooper-hewitt/600.css";
import "@fontsource/cooper-hewitt/700.css";
import "./globals.css";

const bodySans = Bai_Jamjuree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const display = Bai_Jamjuree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dataMono = Bai_Jamjuree({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
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
      suppressHydrationWarning
      className={`${bodySans.variable} ${display.variable} ${dataMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('thinkclock-theme');
                if (saved === 'dark') {
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-transparent text-[var(--paper)] relative">
        <StarBackground />
        <ThemeProvider>
          <QueryProvider>
            <SiteHeader />
            <div className="flex-1 flex flex-col">{children}</div>
            <AiAssistant />
            <SiteFooter />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
