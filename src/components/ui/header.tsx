import Link from "next/link";
import React from "react";
import Logo from "../icons/logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="h-[120px] w-full flex flex-row items-center justify-between p-5 gap-10 bg-black text-white">
      <Logo />
      <div className="w-full flex flex-row justify-end">
        <nav className="flex flex-row items-center gap-10 text-lg">
          <a href="#about">ABOUT</a>
          <a href="#location">LOCATION</a>
          <a href="#contact">CONTACT</a>
          {/* <Button className="w-full h-full rounded-full">App</Button> */}
        </nav>
      </div>
    </div>
  );
}
