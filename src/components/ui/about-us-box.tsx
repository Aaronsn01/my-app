import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type AboutUsBox = {
  photo?: string;
  svgComponent?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
};

const AboutUsBoxContent: React.FC<AboutUsBox> = ({
  photo,
  svgComponent,
  title,
  text,
  className = "",
}) => {
  return (

    <div
      className={cn(
        "text-white px-6 py-4 rounded-3xl flex flex-col bg-black justify-between max-w-[350px] h-[600px]",
        className
      )}
    >
      <div className="rounded-tl-3xl rounded-tr-3xl w-full h-[30%]"> {svgComponent} </div>
      <div className="text-white pt-2 pb-2 font-bold  text-2xl">{title}</div>
      <div className="text-white pb-2">{text}</div>
    </div>
  );
};

export default AboutUsBoxContent;
