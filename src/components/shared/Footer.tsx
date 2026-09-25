import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-800 bg-[#000] px-5 py-6 container mx-auto">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={34}
            height={34}
            className="h-8 w-8 object-contain"
          />

          <h2 className="text-lg font-extrabold tracking-widest text-white">
            FIT<span className="text-lime-400">LOG</span>
          </h2>
        </div>

        <p className="text-center text-xs text-[#8A92A0]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;