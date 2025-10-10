"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animasi setelah component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 px-4 md:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto mt-8">
          
          <div 
            className={`flex flex-col justify-center bg-gradient-to-tr from-[#D2D4FD] to-[#F9D3FC] rounded-3xl px-8 py-16 md:px-16 md:py-20 w-full max-w-7xl transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-200 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex justify-center items-end mb-2">
              <img 
                src="/homepage/hero_homepage.png" 
                alt="Homepage Image" 
                className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto"
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

      {/* carakerja */}
      <div className="bg-gray 50 py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-12">
            Bagaimana Kapsul waktu bekerja
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="/homepage/carakerja1.png" 
                  alt="Step 1" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  Tulis Pesanmu
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Coret-coret kenangan, harapan, atau rahasia yang ingin kamu simpan dalam kapsul.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="/homepage/carakerja2.png" 
                  alt="Step 1" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  Simpan Aman
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Pilih tanggal pembukaan. Kapsulmu akan terkunci rapat hingga tiba waktunya.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src="/homepage/carakerja3.png" 
                  alt="Step 1" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  Buka di Masa Depan
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  Nikmati kejutan dan nostalgia saat kapsulmu terbuka. Selamat bernostalgia!
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}