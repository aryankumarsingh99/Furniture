import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brandIcons = [
  "/svg/1.svg",
  "/svg/2.svg",
  "/svg/3.svg",
  "/svg/4.svg",
  "/svg/5.svg",
  "/svg/6.svg",
  "/svg/7.svg",
  "/svg/8.svg"
];


export default function MarqueeSection() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-black">Brands</h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-xl text-[#bbb] bg-white hover:bg-[#f5f5f5] transition">
              <FaChevronLeft />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-xl text-[#bbb] bg-white hover:bg-[#f5f5f5] transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden w-full">
          <div
            className="flex w-max gap-16 animate-marquee"
            style={{ animation: 'marquee 22s linear infinite' }}
          >
            {[...brandIcons, ...brandIcons].map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt={`Brand ${idx % brandIcons.length + 1}`}
                className="h-28 w-28 object-contain"
                style={{ minWidth: 112 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add marquee animation CSS
const style = document.createElement('style');
style.innerHTML = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;
if (typeof window !== 'undefined' && !document.getElementById('marquee-anim')) {
  style.id = 'marquee-anim';
  document.head.appendChild(style);
}
