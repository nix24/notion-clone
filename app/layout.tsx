import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "../components/providers/ThemeProvider";
import { ModeToggle } from "./(intro)/_components/ModeToggle";
import { ConvexClientProvider } from "@/components/providers/convexProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "organize your work better, faster and with others!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
        sizes: "512x512",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logoDark.svg",
        href: "/logoDark.svg",
        sizes: "512x512",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="next-theme"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
