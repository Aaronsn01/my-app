import AboutUsBoxContent from "./about-us-box";
import charly from "../../../public/charly.jpg";
import jose from "../../../public/jose.jpg";
import SlightFlip from "../magicui/flip-text";

export default function AboutUs() {
  const plans = [
    {
      photo: charly,
      position: "CEO",
      title: "Charly",
      text: "Graduado en Ciencias de la Actividad Física y del Deporte CAFYD",
      subtitle: "Certificado L1 en CrossFit",
    },
    {
      photo: jose,
      position: "CEO",
      title: "Jose",
      text: "Graduado universitario Ciencias del Deporte UPM",
      subtitle:
        "Certificado L1 en CrossFit, Máster Profesional Preparación Física",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center md:h-[800px] px-8"
      id="aboutus"
    >
      <SlightFlip
        word="SOBRE NOSOTROS"
        className="text-3xl md:text-6xl lg:text-7xl font-bold text-black mb-16"
      />
      <div className="flex flex-col md:flex-row w-full gap-10 max-w-[1200px] justify-center items-center">
        {plans.map((plan, index) => (
          <AboutUsBoxContent
            key={index}
            photo={plan.photo}
            title={plan.title}
            text={plan.text}
            subtitle={plan.subtitle}
            position={plan.position}
          />
        ))}
      </div>
    </div>
  );
}
