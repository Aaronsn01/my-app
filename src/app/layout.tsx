import "@/app/globals.css";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

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
      </body>
    </html>
  );
}
