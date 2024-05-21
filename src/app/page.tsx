"use client";

import { useRef } from "react";
import About from "../components/ui/about";
import Home from "../components/ui/home";
import Location from "../components/ui/location";
import Contact from "../components/ui/contact";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="w-full overflow-y-auto">
      <section ref={homeRef} id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>
      <section ref={aboutRef} id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section ref={locationRef} id="location" className="min-h-screen flex items-center justify-center">
        <Location />
      </section>
      <section ref={contactRef} id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
}
