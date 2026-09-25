import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GymProvider from "@/components/context/GymContext";
import { ToastContainer } from "react-toastify";
import AppShell from "@/components/shared/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Fitlog",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GymProvider>
          <AppShell>{children}</AppShell>
          <ToastContainer />
        </GymProvider>
      </body>
    </html>
  );
}
