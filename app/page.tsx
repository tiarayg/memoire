import React from "react";
import Navbar from "./components/Navbar";

export default function Homepage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20 px-4  md:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="flex flex-col justify-center bg-gradient-to-tr from-[#D2D4FD] to-[#F9D3FC] rounded-3xl px-8 py-16 md:px-16 md:py-20 w-full max-w-7xl">
            <div className="flex justify-center items-end mb-2">
              <img 
              src="/homepage/hero_homepage.png" 
              alt="Homepage Image" 
              className="w-80 h-60"
              />
            </div>

            <div>
              <div className="flex justify-center items-center mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                  Kapsul Waktu: Kirim Pesan ke Masa Depanmu!
                </h1>
              </div>
              <div>
                <p className="text-gray-700 text-sm md:text-base text-center leading-relax mb-8 max-w-2xl mx-auto">
                  Rekam momen berharga, tulis harapan, dan simpan pesan spesialmu untuk dibuka di masa depan. 
                  Sebuah cara unik untuk terhubung dengan diri sendiri di kemudian hari.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[#ECBD88] via-[#E39FF4] to-[#9FB6F4] hover:to-purple-400 text-gray-900 font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                Mulai buat Capsulemu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}