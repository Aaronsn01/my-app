import About from "../components/ui/about";
import Home from "../components/ui/home";
import Location from "../components/ui/location";
import Contact from "../components/ui/contact";


export default function Page() {
  return (
    <div className="grid grid-rows-[min-content_1fr] max-h-screen h-screen w-full overflow-y-auto">
    <Home />
    <About />
    <Location />
    <Contact />
  </div>
  );
}
