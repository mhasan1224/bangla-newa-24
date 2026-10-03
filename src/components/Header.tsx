import { Button } from "@heroui/react";
import Image from "next/image";
import Navlinks from "./Navlinks";
const Header = () => {
  const date = new Date().toLocaleDateString("Bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="container mx-auto grid grid-cols-1 items-center gap-4 px-5 py-6 md:grid-cols-3">
      {/* Left - Empty */}
      <div className="hidden md:block"></div>

      {/* Center - Logo + Title */}
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/assets/logo.webp"
          alt="Logo"
          height={50}
          width={50}
          className="h-10 w-10 md:h-[50px] md:w-[50px]"
        />

        <div>
          <div className="text-xl font-bold text-red-700 sm:text-2xl md:text-3xl">
            Bangla News 24
          </div>
          <div className="text-xs sm:text-sm">{date}</div>
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center justify-center gap-2 md:justify-end">
        <Button variant="outline">সাইন ইন</Button>
        <Button variant="danger">সাইন আপ</Button>
      </div>

      {/* Navigation */}
      <div className="col-span-1 md:col-span-3">
        <Navlinks />
      </div>
    </header>
  );
};

export default Header;
