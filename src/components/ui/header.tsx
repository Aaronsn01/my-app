import Link from "next/link";
import React from "react";
import Logo from "../icons/logo";

export default function Header() {
  return (
    <div className="h-20 md:h-[120px] w-full flex items-center justify-center md:justify-between p-5 bg-black text-white">
      <div className="md:w-full w-40 h-28 flex justify-center md:h-auto sm:justify-start">
        <Logo />
      </div>
      <nav className="hidden sm:flex flex-row items-center gap-10 text-lg">
        <a href="#pricing">PRECIOS</a>
        <a href="#aboutus">NOSOTROS</a>
        <a href="#location">UBICACIÓN</a>
        <a href="#contact">CONTACTO</a>
        {/* <Button className="w-full h-full rounded-full">App</Button> */}
      </nav>
    </div>
  );
}
