"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-8">
          <div className="flex flex-col items-center lg:items-start gap-0">
            <div className="flex items-center">
              <img src="/logo/logo_memoire.png"
              alt="Memoire logo"
              className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed max-w-xs text-center lg:text-left">
              Menghubungkan masa kini<br />
              dengan masa depanmu<br />
              melalui kekuatan waktu.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end sm-items-center justify-end gap-6">
            <div className="flex items-center gap-4">
              <Link 
              href="https://www.instagram.com/memoire.id/"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram">
                <img 
                src="/footer/instagram.png" 
                alt="Instagram" 
                />
              </Link>

              <Link 
              href="https://www.linkedln.com/memoire.id/"
              className="hover:opacity-70 transition-opacity"
              aria-label="Linkedln">
                <img 
                src="/footer/linkedin.png" 
                alt="Linkedln" 
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              © 2025 TimeCapsule. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}