import React from "react";
 

const BannerSection = () => (
  <section className="relative z-10 bg-[linear-gradient(180deg,#edf4e2_0%,#dde9ca_100%)] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 rounded-2xl shadow-lg border border-[#c8d6b0]">
    {/* Decorative rice leaves left */}
    <svg className="absolute left-0 top-8 w-32 h-32 opacity-30 pointer-events-none" viewBox="0 0 64 64" fill="none">
      <path d="M8 32c8-16 24-24 48-24" stroke="#c8d6b0" strokeWidth="2" fill="none" />
      <path d="M16 40c6-10 18-16 36-16" stroke="#e5d9b6" strokeWidth="2" fill="none" />
    </svg>
    {/* Decorative rice leaves right */}
    <svg className="absolute right-0 top-8 w-32 h-32 opacity-30 pointer-events-none" viewBox="0 0 64 64" fill="none">
      <path d="M56 32c-8-16-24-24-48-24" stroke="#c8d6b0" strokeWidth="2" fill="none" />
      <path d="M48 40c-6-10-18-16-36-16" stroke="#e5d9b6" strokeWidth="2" fill="none" />
    </svg>
    <div className="max-w-7xl mx-auto">
    <div className="relative flex justify-center mb-2">
      <div className="absolute inset-0 mx-auto h-16 w-3/4 bg-[#e5d9b6] blur-xl opacity-40 rounded-full" />
      <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-[#2a3523] text-center font-serif tracking-tight drop-shadow-lg">
        Our Integrated Rice Mill Facilities
      </h2>
    </div>
    <p className="text-lg text-[#5d6d4b] text-center mb-6 font-medium">
      Trusted partners for quality rice processing, packaging, and supply.
    </p>
    <div className="relative overflow-hidden w-full mb-8">
      <div className="absolute inset-0 mx-auto h-10 w-3/4 bg-[#e5d9b6] blur-xl opacity-30 rounded-full" />
      <div className="animate-marquee flex w-max whitespace-nowrap hover:[animation-play-state:paused]">
        <span className="text-lg md:text-xl font-semibold text-[#2a3523] text-center px-4">
          All products undergo advanced processing at our integrated facilities —
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#c8d6b0] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">PK Agro Industry</span>,
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#e5d9b6] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">PK Store </span>, and
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#c8d6b0] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">Om Sai Maa Tarani Modern Rice Mill</span>
          — maintaining the highest standards of quality, efficiency, and trust.
        </span>
        <span className="text-lg md:text-xl font-semibold text-[#2a3523] text-center px-4">
          All products undergo advanced processing at our integrated facilities —
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#c8d6b0] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">PK Agro Industry</span>,
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#e5d9b6] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">PK Store </span>, and
          <span className="inline-block font-bold text-[#1d3221] bg-[#e8f0d7] border border-[#c8d6b0] rounded-full px-4 py-1 mx-2 shadow-md tracking-wide">Om Sai Maa Tarani Modern Rice Mill</span>
          — maintaining the highest standards of quality, efficiency, and trust.
        </span>
      </div>
    </div>
    {/* Add other content here if needed */}
    </div>
  </section>
);

export default BannerSection;
