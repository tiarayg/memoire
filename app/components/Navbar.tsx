"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar(){

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src="logo/logo_memoire.png" 
            alt="Logo" 
            className="h-20 w-auto"/>

          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 pr-4">
            <Link href="/carakerja"
            className="text-[#E39FF4] hover:text-[#8A9ED3] transition-colors font-white text-lg pb-1 border-b-2 border-transparent hover:border-[#8A9ED3]"
            >Cara Kerja
            </Link>

            <Link href="/moments"
            className="text-[#E39FF4] hover:text-[#8A9ED3] transition-colors font-white text-lg pb-1 border-b-2 border-transparent hover:border-[#8A9ED3]"
            >Moments
            </Link>

            <Link href="/value"
            className="text-[#E39FF4] hover:text-[#8A9ED3] transition-colors font-white text-lg pb-1 border-b-2 border-transparent hover:border-[#8A9ED3]"
            >Value
            </Link>

          </div>

        </div>
      </div>
    </div>
    
    

  );
}