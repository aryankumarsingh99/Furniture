import React from "react";
import Image from "next/image";
import { FaCouch, FaChair, FaCubes, FaShippingFast, FaGem, FaTools } from "react-icons/fa";

const furnitureHighlights = [
  { icon: <FaCouch className="text-[#bb8d48]" />, text: "Modern & Classic Sofas" },
  { icon: <FaChair className="text-[#bb8d48]" />, text: "Designer Chairs & Recliners" },
  { icon: <FaCubes className="text-[#bb8d48]" />, text: "Modular Storage Solutions" },
  { icon: <FaGem className="text-[#bb8d48]" />, text: "Premium Materials & Finish" },
  { icon: <FaTools className="text-[#bb8d48]" />, text: "Custom Craftsmanship" },
  { icon: <FaShippingFast className="text-[#bb8d48]" />, text: "Fast Delivery & Assembly" },
];

function MarqueeRail({ items }: { items: typeof furnitureHighlights }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex w-max whitespace-nowrap hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 border-r border-[#e7d3b7] px-12 py-7 text-xl font-semibold text-[#7c5e3c] sm:px-14 sm:py-8 sm:text-[1.55rem] bg-transparent"
          >
            <span className="text-2xl sm:text-[1.9rem]">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-2xl text-[#e7d3b7]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-[#fff7ee] to-[#f7ede2] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl border border-[#e7d3b7] bg-[#fff7ee] rounded-2xl shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="border-b border-[#e7d3b7] bg-[#fff7ee] px-7 py-7 text-[15px] font-semibold uppercase tracking-[0.32em] text-[#bfa76a] flex items-center gap-4 lg:min-w-80 lg:border-b-0 lg:border-r lg:px-9 lg:py-8">
            <Image src="/logo.png" alt="Furniture Brand Logo" width={48} height={48} className="rounded-full border border-[#e7d3b7] bg-white" />
            Furniture Highlights
          </div>

          <div className="relative flex-1 overflow-hidden bg-[#fff7ee]">
            <div className="pointer-events-none absolute inset-y-0    sm:w-12" />
            <div className="pointer-events-none absolute inset-y-0    sm:w-12" />
            <MarqueeRail items={furnitureHighlights} />
          </div>
        </div>
      </div>
    </section>
  );
}
