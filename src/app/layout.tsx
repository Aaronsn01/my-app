import React from "react";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import { Toaster } from "../components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-customGray font-sans antialiased")}>
          <Header />
          {children}
          <Footer />
          <Toaster />
      </body>
    </html>
  );
}
