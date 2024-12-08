import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <main
          id="main"
          className="h-screen bg-foreground flex items-center justify-center flex-col gap-6"
        >
          <SettingsProvider>{children}</SettingsProvider>
        </main>
      </body>
    </html>
  );
}
