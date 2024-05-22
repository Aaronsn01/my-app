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
            READY FOR YOUR <span className="text-primary">NEXT</span> LESSON?
          </p>
          <div className="flex flex-row items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <Link href={"https"}>
              <Instagram className="h-6 w-6" />
            </Link>
            <Facebook className="h-6 w-6" />
            <Tiktok className="h-6 w-6" />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            <CartaIcon className="h-6 w-6" />
            <p>jangalcentrodeportivo@gmail.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
