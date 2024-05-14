import React from "react";
import boxerImage from "../img/crossfit-home.jpg"; // Asegúrate de cambiar esta ruta a la ubicación de tu imagen
import Image from "next/image";
import image from "../../../public/image.png";
import Barra from "./nav-home";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute pt-40 pl-40">
        <h1 className="flex flex-col text-8xl font-bold mt-40 gap-3">
          THRIVE IN THE
        </h1>
        <h1>
          <span className="text-primary text-8xl font-bold">WILD</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <Image src={image} alt="imagen home" />
      </div>
      <div className="flex justify-center absolute top-[90%] transform -translate-y-1/2 w-full">
        <Barra/>
      </div>
    </div>
  );
}
