import React, { useRef } from "react";
import { motion } from "framer-motion";


const cardData = [
  {
    video: "/video/v7.mp4",
    poster: "/Images/4.jpeg",
    overlay: <>Relax in Style <span className="text-[#bb8d48] group-hover:text-white">Recliner</span></>,
    desc: "Arvana Motorized R3 Rocking Revolving 1 Seater Recliner in Suede Fabric (Grey)",
  },
  {
    video: "/video/v2.mp4",
    poster: "/Images/5.jpeg",
    overlay: <>Brand Story <span className="text-[#bb8d48] group-hover:text-white">Wooden Street</span></>,
    desc: "Furniture...bonded with love. 85+ Experience Stores, 20 Lakh+ Customers.",
  },
  {
    video: "/video/v4.mp4",
    poster: "/Images/7.jpeg",
    overlay: <>It&apos;s the Iriana Cane <span className="text-[#bb8d48] group-hover:text-white">multipurpose</span></>,
    desc: "Iriana Sheesham wood Cabinets and Sideboard (Walnut Finish)",
  },
  {
    video: "/video/v5.mp4",
    poster: "/Images/8.jpeg",
    overlay: <>Sofa Bed <span className="text-[#bb8d48] group-hover:text-white">with Storage</span></>,
    desc: "Feltro Sheesham Wood Sofa Bed With Storage (King Size, Honey Irish Cream)",
  },
];

const StoriesShowcase = () => {
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  const tiltCard = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const card = cardRefs[idx].current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
  };
  const resetTilt = (idx: number) => {
    const card = cardRefs[idx].current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <section className="w-full flex flex-col items-center gap-8 py-10 px-2 md:px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#bb8d48] mb-6">Stories Behind the Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              ref={cardRefs[idx]}
              className="bg-white/80 border-2 border-[#bfa76a] rounded-xl shadow-lg overflow-hidden flex flex-col backdrop-blur-md transition-all duration-300 group hover:shadow-[0_0_32px_8px_rgba(187,141,72,0.35)] hover:border-[#bb8d48] hover:bg-white/60 hover:backdrop-blur-xl cursor-pointer"
              onMouseMove={e => tiltCard(e, idx)}
              onMouseLeave={() => resetTilt(idx)}
              initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: "backOut" }}
            >
              <div className="w-full h-85 flex flex-col items-center justify-center bg-[#f8fbf2] relative" style={{ minHeight: '420px', minWidth: '340px', maxWidth: '600px', margin: '0 auto' }}>
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline poster={card.poster} style={{height: '400px', width: '100%'}}>
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded font-bold text-lg z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_4px_rgba(187,141,72,0.45)] group-hover:border-2 group-hover:border-[#ffe9b0] group-hover:bg-linear-to-l animate-bounce border border-transparent bg-linear-to-r from-[#bb8d48] via-[#ffe9b0] to-[#bb8d48] text-white group-hover:text-[#bb8d48]">
                  {card.overlay}
                </div>
              </div>
              <div className="p-4 mt-6">
                <div className="font-semibold text-[#7c5e3c] text-base mb-1">{card.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesShowcase;
