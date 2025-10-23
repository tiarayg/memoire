"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Moments from "./components/Moments";
import Message from "./components/Message";
import Start from "./components/Start";
import Herohome from "./components/Herohome";
import HowtoUse from "./components/HowtoUse";

export default function Homepage() {
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Herohome />
      <HowtoUse />
      <Moments />
      <Message />
      <Start />
      <Footer />
    </div>
  );
}