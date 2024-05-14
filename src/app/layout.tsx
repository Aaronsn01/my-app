import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--dm-sans",
});

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-white font-sans antialiased grid grid-rows-[min-content_1fr_min-content] max-h-screen h-screen w-full overflow-y-auto",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
