"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/carakerja", label: "Cara Kerja" },
    { href: "/moments", label: "Moments" },
    { href: "/value", label: "Value" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
              <img 
                src="/logo/logo_memoire.png" 
                alt="Mémoire Logo" 
                className="h-16 w-auto"
              />
          </div>

          <div className="hidden md:flex items-center gap-8 pr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#E39FF4] hover:text-[#8A9ED3] transition-colors font-light text-lg pb-1 border-b-2 border-transparent hover:border-[#8A9ED3]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-[#E39FF4] hover:text-[#8A9ED3] focus:outline-none p-2 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100 pb-4">
            <div className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#E39FF4] hover:text-[#8A9ED3] hover:bg-purple-50 transition-colors font-light text-base px-4 py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}