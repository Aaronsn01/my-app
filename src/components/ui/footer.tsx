import Instagram from "../icons/instagram";
import Facebook from "../icons/facebook";
import Tiktok from "../icons/tiktok";
import CartaIcon from "../icons/carta-icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col items-center md:items-start">
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4">
          <p className="text-2xl font-bold text-center md:text-left">
            ¿PREPARADO@S PARA <span className="text-primary">CONSEGUIR</span>TUS OBJETIVOS?
          </p>
          <div className="flex flex-row items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <Link
              href={
                "https://www.instagram.com/lajunglacrossfit?igsh=MWgzMXl0bWhiYnp1Zg%3D%3D&utm_source=qr "
              }
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href={"https://www.tiktok.com/@lajunglacrossfit"}>
              <Tiktok className="h-6 w-6" />
            </Link>
            <Link
              href={
                "https://www.facebook.com/share/iNyULvz7u5rAGrmU/?mibextid=LQQJ4d"
              }
            >
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            <CartaIcon className="h-6 w-6" />
            <p>info@lajunglacrossfit.es</p>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <a>© Copyright LaJunglaCrossfit 2024</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
