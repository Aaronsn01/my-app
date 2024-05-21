import React from "react";
import AboutImage from "../icons/about-image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,2fr] items-center gap-8">
        <div className="flex justify-center items-center px-4">
          <AboutImage />
        </div>
        <div>
          <Separator />
        </div>
        <div className="flex flex-col justify-center items-start space-y-4">
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
    </div>
  );
}
