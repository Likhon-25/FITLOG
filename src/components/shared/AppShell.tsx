"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldShowShell =
    pathname === "/" || pathname.startsWith("/Gym/") || pathname === "/myPlan";

  return (
    <>
      {shouldShowShell && <Navbar />}
      {children}
      {shouldShowShell && <Footer />}
    </>
  );
}
