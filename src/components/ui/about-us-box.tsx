import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";

type AboutUsBox = {
  photo?: StaticImageData;
  title: string;
  position: string;
  subtitle: string;
  text: string;
  className?: string;
};

const AboutUsBoxContent: React.FC<AboutUsBox> = ({
  photo,
  title,
  position,
  subtitle,
  text,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "text-white rounded-3xl grid grid-rows-[2fr_3fr] bg-card justify-between max-w-[350px] h-[550px] bg-black",
        className
      )}
    >
      <div className="w-full h-60 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={photo as StaticImageData}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 12%"
            className="rounded-t-3xl"
          />
        </div>
      </div>
      <div className="h-full w-full relative">
        <div className="w-full h-[1px] -translate-y-[20px] px-8 absolute">
          <div className="z-50 bg-primary rounded-3xl text-white max-w-fit pb-2 pt-2 pl-3 pr-3 ">
            {position}
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-8 justify-between">
          <div className="text-white pt-2 pb-2 font-bold text-2xl">
            {title}
          </div>
          <div className="text-white pb-2">{text}</div>
          <Separator orientation="horizontal" />
          <div className="font-italic">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBoxContent;
