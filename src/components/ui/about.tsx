import React from "react";
import AboutImage from "../icons/about-image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="grid grid-cols-[auto,1fr,2fr] items-center p-10">
      <div className="flex justify-center items-center px-4">
        <AboutImage />
      </div>
      <div> 
        <Separator />
      </div>
      <div className="flex flex-col justify-center items-center"> 
        <h2 className="text-3xl font-bold text-black">
          HOW WE GOT STARTED IN THIS BUSINESS
        </h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec integer ante dignissim vestibulum metus tristique id pulvinar vulputate, montes tempus tellus blandit sodales.
        </p>
        <p className="text-black">
          Pellentesque iaculis ultrices dapibus dui cursus lacinia, curae diam morbi placerat nec, orci tempus faucibus sociosqu risus. Lacinia odio nulla donec nostra porta egestas interdum eget.
        </p>
      </div>
    </div>
  );
}
