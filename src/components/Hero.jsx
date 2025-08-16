import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero11.jpg";
import logo from "../assets/logomm.png";

export default function Hero() {
  return (
    <section
    id="home"
    className="relative h-screen w-full bg-fixed bg-cover bg-center md:bg-top"

    style={{ backgroundImage: `url(${heroBg})` }}
  >
  
  

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Logo & tagline */}
     {/* Logo & tagline */}
<div className="absolute top-8 left-8 z-20 flex flex-col items-center">
  <img
    src={logo}
    alt="Logo"
    className="h-14 md:h-16 object-contain drop-shadow-lg"
  />
  <p className="mt-2 text-xs md:text-sm tracking-[0.25em] font-light text-gray-200 uppercase drop-shadow-md text-center">
    Design Studio
  </p>
</div>


      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.8 }}
  className="text-center text-white max-w-3xl"
>
  <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-6 drop-shadow-2xl">
    Portfolio
  </h1>
  <div className="w-20 h-[3px] bg-amber-500 mx-auto mb-6 rounded-full"></div>
  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
    We craft timeless, functional, and luxurious spaces — blending modern architecture with exquisite interior design to match your lifestyle.
  </p>
  <a
    href="#projects"
    className="inline-block mt-10 px-8 py-3 border border-amber-500 bg-amber-600/90 text-white text-lg rounded-lg shadow-lg hover:bg-amber-700 hover:border-amber-400 transition duration-300"
  >
    View Projects
  </a>
</motion.div>

      </div>
    </section>
  );
}
