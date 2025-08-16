import React from "react";
import { motion } from "framer-motion";
import member1 from "../assets/team2.jpg";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Soft golden grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/gold-fibers.png')]"></div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#b8902d] bg-clip-text text-transparent tracking-wider"
          >
            Meet Our Creative Mind
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-28 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#b8902d] mx-auto rounded-full"
          />
        </div>

        {/* Single Premium Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-[3px] bg-gradient-to-tr from-[#D4AF37] to-[#b8902d]"
        >
          <div className="bg-[#171717]/80 rounded-3xl backdrop-blur-xl p-10 shadow-2xl group hover:-translate-y-3 hover:shadow-[0_0_45px_#D4AF37]/40 transition transform">
            <img
              src={member1}
              alt="member1"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#D4AF37] transition duration-500 group-hover:scale-105 mb-6"
            />
            <h4 className="mt-4 mb-1 text-center text-2xl font-semibold text-[#D4AF37]">
              Muhammad Mateen
            </h4>
            <p className="text-center uppercase tracking-[3px] text-gray-400 text-xs mb-4">
              Draftsman
            </p>
            <p className="text-center text-sm text-gray-500 leading-relaxed">
              Specialist in modern architecture & luxury detailing with more than a decade of experience. Passionate about designing timeless, elegant spaces.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
