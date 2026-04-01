import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const IllustratorShowcase = () => (
  <motion.section
    className="relative w-full h-[500px] flex items-center justify-center bg-[#1a2636]"
    initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "backOut" }}
  >
    <img
      src="https://en.eastern-edition.com/web/upload/epblossom/philosophy/PHILOSOPHY-1.jpg"
      alt="Illustrator Showcase"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0"
    />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6 text-center drop-shadow-lg">
        Bridging the <span className="italic">Past,</span><br />
        to the <span className="italic">Future</span>
      </h2>
      <Link
        href="/about#about"
        className="mt-4 px-8 py-3 border-2 border-white text-white bg-transparent rounded-lg text-lg font-medium hover:bg-white hover:text-[#1a2636] transition"
      >
        Learn Our Philosophy
      </Link>
    </div>
  </motion.section>
);

export default IllustratorShowcase;
