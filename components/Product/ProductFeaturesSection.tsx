
 
"use client";
import { FaCouch, FaChair, FaTable, FaLeaf, FaSeedling, FaStar } from "react-icons/fa";

export default function ProductFeaturesSection() {
  const features = [
    {
      icon: <FaCouch className="text-3xl md:text-4xl animate-bounce-slow" />,
      title: "High-quality materials and craftsmanship",
      color: "bg-[#fff8ef] text-[#bb8d48]",
    },
    {
      icon: <FaChair className="text-3xl md:text-4xl animate-spin-slow" />,
      title: "Modern and timeless designs",
      color: "bg-[#ebd6c0] text-[#bb8d48]",
    },
    {
      icon: <FaTable className="text-3xl md:text-4xl animate-pulse" />,
      title: "Customizable options available",
      color: "bg-[#fff8ef] text-[#bb8d48]",
    },
    {
      icon: <FaLeaf className="text-3xl md:text-4xl animate-bounce" />,
      title: "Eco-friendly finishes",
      color: "bg-[#ebd6c0] text-[#bb8d48]",
    },
    {
      icon: <FaSeedling className="text-3xl md:text-4xl animate-pulse" />,
      title: "Comfort and durability guaranteed",
      color: "bg-[#fff8ef] text-[#bb8d48]",
    },
    {
      icon: <FaStar className="text-3xl md:text-4xl animate-bounce" />,
      title: "Award-winning designs",
      color: "bg-[#ebd6c0] text-[#bb8d48]",
    },
    {
      icon: <FaCouch className="text-3xl md:text-4xl animate-spin-slow" />,
      title: "Ergonomic comfort for all ages",
      color: "bg-[#fff8ef] text-[#bb8d48]",
    },
    {
      icon: <FaChair className="text-3xl md:text-4xl animate-bounce-slow" />,
      title: "Easy assembly & maintenance",
      color: "bg-[#ebd6c0] text-[#bb8d48]",
    },
    {
      icon: <FaTable className="text-3xl md:text-4xl animate-pulse" />,
      title: "Space-saving solutions",
      color: "bg-[#fff8ef] text-[#bb8d48]",
    },
    {
      icon: <FaLeaf className="text-3xl md:text-4xl animate-spin-slow" />,
      title: "Sustainably sourced materials",
      color: "bg-[#ebd6c0] text-[#bb8d48]",
    },
  ];

  return (
    <section className="relative bg-[linear-gradient(180deg,#ebd6c0_0%,#ffffff_100%)] py-16 px-4 sm:px-6 md:px-8 border-b border-[#c8d6b0] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3 animate-fade-in-up">
          <span className="inline-flex rounded-full border border-[#c8d6b0] bg-[#bb8d48] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffffff] shadow">Features</span>
          <FaStar className="text-[#bb8d48] text-xl animate-spin-slow" />
        </div>
        <h2 className="font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl md:text-5xl mb-12 animate-fade-in-up">Why Choose Our Furniture?</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group rounded-2xl border border-[#bb8d48] p-6 flex flex-col items-center text-center shadow-lg bg-white/70 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ${feature.color}`}
              style={{
                animation: `fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both`,
                animationDelay: `${0.1 + idx * 0.09}s`,
              }}
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#bb8d48]/10 group-hover:bg-[#bb8d48]/20 transition-colors duration-300 shadow-inner">
                {feature.icon}
              </div>
              <span className="text-base md:text-lg font-medium text-[#2a3523]">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative blurred icon backgrounds */}
      <FaCouch className="hidden md:block absolute -left-24 -top-16 text-[12rem] text-[#bb8d48] opacity-10 blur-sm pointer-events-none" />
      <FaChair className="hidden md:block absolute -right-24 -bottom-16 text-[10rem] text-[#bb8d48] opacity-10 blur-sm pointer-events-none" />
    </section>
  );
}
