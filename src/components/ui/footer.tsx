import React from "react";
import Logo from "../icons/logo";
import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Tiktok from "../icons/tiktok";

export default function Footer() {
  return (
    <div className="h-95 bg-card flex flex-col p-4">
      <div className="">
        <div className="flex flex-row items-center justify-between pr-10 pl-10">
          <p className="text-2xl font-bold">READY FOR YOUR <span className="text-primary">NEXT</span> LESSON?</p>
          <div className="flex flex-row items-center justify-between gap-3">
            <Instagram/>
            <Facebook/>
            <Tiktok/>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p>jangalcentrodeportivo@gmail.com</p>
      </div>
    </div>
  );
}
