import React from "react";
import AboutUsBoxContent from "./about-us-box";

export default function AboutUs() {
  const plans = [
    {

      photo: "'../media/Dani.png'",
      title: "Charly",
      text:" Graduado universitario CAFYD y L1 CrossFit",
    },
    {
      photo: "../media/Dani.png",
      title: "Jose",
      text:"-Graduado universitario Ciencias del Deporte UPM , L1 CrossFit, Máster Profesional Preparación Física",
    },
    {
      photo: "../media/Dani.png",
      title: "Juan",
      text:"Graduado universitario Ciencias del Deporte UPM",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center h-[800px]" id="aboutus">
      <h1 className="text-[30px] sm:text-5xl md:text-6xl lg:text-8xl font-bold text-black mb-16">About Us</h1>
      <div className="flex flex-row w-full gap-10 max-w-[1200px] justify-between">
        {plans.map((plan, index) => (
          <AboutUsBoxContent
            key={index}
            photo={plan.photo}
            title={plan.title}
            text={plan.text}
        />
        ))}
      </div>
    </div>
  );
}
