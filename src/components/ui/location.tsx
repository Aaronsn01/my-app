import React from "react";
import BlurIn from "../magicui/blur-in";

export default function Location() {
  return (
    <div className="container mx-auto py-20 px-4">
      <BlurIn word="LOCALIZACIÓN" className="flex items-center justify-center mb-12"/>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-[300px] md:h-[650px] shadow-md rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.8939647907614!2d-3.509094723594577!3d40.499727750583084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42319cdd956c55%3A0xc03dbf6b8ba11ebf!2sLa%20Jungla%20CrossFit%20Paracuellos!5e0!3m2!1ses!2ses!4v1721748143329!5m2!1ses!2ses"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
