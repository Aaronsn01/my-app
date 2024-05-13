import React from "react";
import boxerImage from '../img/crossfit-home.jpg'; // Asegúrate de cambiar esta ruta a la ubicación de tu imagen
import IconNavbar from "@/components/ui/iconnavbar";
import CrossfitHome from "../icons/crossfit-home";

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="pt-40 pl-40">
        <h1 className="text-6xl font-bold mt-40">
          THRIVE IN THE <span className="text-primary">WILD</span>
        </h1>
      </div>
      <div className="flex h-full justify-center">
        <CrossfitHome/>
      </div>
      <div>
        <IconNavbar className="flex justify-center items-center"/>
      </div>
    </div>
  );
}
