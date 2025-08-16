import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f0f0f] text-white py-8 text-center"
    >
      <p className="text-gray-400 tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#D4AF37] font-semibold">HHH-Design-Studio</span>. All rights reserved.
      </p>
    </motion.footer>
  );
}
