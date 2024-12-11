import type { Metadata } from "next";
import {
  Cousine,
  Lato,
  Nunito,
  Oxygen_Mono,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsContext";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Snippet Master | Effortless Code Snippet Generation and Management",
  description:
    "Generate, organize, and manage code snippets with ease using Snippet Master. Boost your productivity by quickly accessing and storing reusable code snippets.",
  openGraph: {
    title: "Snippet Master | Effortless Code Snippet Generation and Management",
    description:
      "Boost your coding efficiency with Snippet Master. Quickly generate, store, and organize your code snippets for easy access anytime.",
    url: "https://www.snippetmaster.com", // Replace with your website URL
    siteName: "Snippet Master",
    images: [
      {
        url: "https://www.snippetmaster.com/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Snippet Master - Code Snippet Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snippet Master | Effortless Code Snippet Generation and Management",
    description:
      "Quickly generate, organize, and manage your code snippets with Snippet Master. Boost productivity with ease.",
  },
  robots: "index, follow",
  keywords:
    "code snippet generation, coding efficiency, code management, snippet organizer, developer tools, code snippet library",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cousine",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
});
const oxygenMono = Oxygen_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oxygen-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main
          id="main"
          className={cn(
            "h-screen bg-foreground flex items-center justify-center flex-col gap-6",
            lato.variable,
            nunito.variable,
            cousine.variable,
            spaceMono.variable,
            oxygenMono.variable,
            "font-mono"
          )}
        >
          <SettingsProvider>{children}</SettingsProvider>
        </main>
      </body>
    </html>
  );
}
