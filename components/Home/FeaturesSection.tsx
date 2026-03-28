import React from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  {
    title: "Sustainable Materials",
    desc: "We use responsibly sourced wood and eco-friendly finishes for every piece.",
    note: "Our furniture is crafted with the environment in mind, ensuring beauty and durability.",
  },
  {
    title: "Custom Designs",
    desc: "Personalize your furniture to fit your style, space, and needs.",
    note: "From modern minimalism to classic comfort, we bring your vision to life.",
  },
  {
    title: "Expert Craftsmanship",
    desc: "Each item is built by skilled artisans with attention to detail and quality.",
    note: "We blend traditional techniques with modern innovation for lasting value.",
  },
  {
    title: "Seamless Delivery",
    desc: "Enjoy fast, careful delivery and professional assembly in your home.",
    note: "We make sure your experience is smooth from order to setup.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Image and intro */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex border border-[#bfa181] bg-[#fff7ee]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#a47551] backdrop-blur-md mb-4">
            Why choose us
          </div>
          <h2 className="font-serif text-4xl leading-tight text-[#7c5e3c] mb-4">
            Furniture for Inspired Living
          </h2>
          <p className="max-w-md text-base leading-8 text-[#a47551] mb-8">
            Discover the features that make our furniture the perfect fit for your home and lifestyle. Designed for comfort, built for life.
          </p>
          <video
            src="/video/v5.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md rounded-2xl shadow-xl border-4 border-[#ca965f] object-cover"
            aria-label="Modern wooden furniture in a living room video"
          />
        </div>
        {/* Right: Features vertical stack */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white/90 border-l-8 border-[#a47551] rounded-xl shadow-lg p-8 flex items-center gap-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#fff7ee] border-4 border-[#a47551] shadow">
                <FaCheck className="text-2xl text-[#a47551]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-[#7c5e3c] mb-1">{feature.title}</h3>
                <p className="text-base text-[#a47551] mb-1">{feature.desc}</p>
                <div className="text-sm text-[#a47551] opacity-80 italic">{feature.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
