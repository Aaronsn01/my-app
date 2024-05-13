import Link from "next/link";
import React from "react";
import Logo from "../icons/logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="h-[120px] w-full flex flex-row items-center justify-between p-5 gap-10">
      <Logo />
      <div className="w-full flex flex-row justify-end">
        <nav className="flex flex-row items-center gap-10 text-lg">
          <Link href="/">HOME</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">LOCATION</Link>
          <Link href="/">CONTACT</Link>
          <Button>App</Button>
        </nav>
      </div>
    </div>
  );
}
