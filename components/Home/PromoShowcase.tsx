import React from "react";

const PromoShowcase = () => (
  <section className="w-full max-w-[2200px] mx-auto flex flex-col lg:flex-row gap-6 items-stretch justify-center py-28 px-2 md:px-8 min-h-[850px] bg-[#f8fafc]">
    {/* Left Large Promo */}
    <div className="flex-1 bg-[#f3f6fa] rounded-2xl shadow-xl overflow-hidden flex flex-col justify-end relative min-h-[420px] max-w-4xl mx-auto lg:mx-0 border border-[#e0e7ef]">
        <img
          src="/Images/1.jpeg"
          alt="Dining Set"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.72)' }}
        />
      <div className="relative z-10 p-10 flex flex-col justify-end h-full"  >
        <div className="text-lg font-medium text-[#ffffff] mb-2">Dining Sets</div>
        <div className="text-5xl font-serif font-bold text-[#ffffff] mb-2">SPRING</div>
        <div className="text-2xl font-semibold text-[#bfa76a] mb-4">Season Edit</div>
        <div className="text-xl font-bold text-[#1a2636] bg-[#bfa76a]/80 rounded-lg px-4 py-2 w-fit flex items-center gap-2">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#1a2636" strokeWidth="2"/></svg>
          New Arrival
        </div>
      </div>
    </div>
    {/* Right Promos */}
    <div className="flex flex-col gap-6 flex-1 max-w-2xl mx-auto lg:mx-0">
      {/* Top Right */}
      <div className="bg-[#f3f6fa] rounded-2xl shadow-xl overflow-hidden flex-1 flex flex-col relative min-h-[320px] border border-[#e0e7ef]">
        <img
          src="/Images/2.jpeg"
          alt="Sit Sleep Store"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.73)' }}
        />
        <div className="relative z-10 p-6 flex flex-col justify-end h-full"  >
          <div className="text-xl font-semibold text-[#ffffff] mb-1">Sit | Sleep | Store</div>
          <div className="text-sm text-[#bfa76a] mb-1">Furniture for Everyday Living</div>
          <div className="text-base text-[#bfa76a] font-semibold flex items-center gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bfa76a" strokeWidth="2"/><path d="M8 12h8" stroke="#bfa76a" strokeWidth="2"/></svg>
            Limited Edition
          </div>
        </div>
      </div>
      {/* Bottom Right */}
      <div className="bg-[#f3f6fa] rounded-2xl shadow-xl overflow-hidden flex-1 flex flex-col relative min-h-[320px] border border-[#e0e7ef]">
        <img
          src="/Images/3.jpeg"
          alt="Recline Revolve Rock"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.73)' }}
        />
        <div className="relative z-10 p-6 flex flex-col justify-end h-full"  >
          <div className="text-xl font-semibold text-[#ffffff] mb-1">Recline | Revolve | Rock</div>
          <div className="text-sm text-[#bfa76a] mb-1">Comfort that moves the way you do</div>
          <div className="text-base text-[#bfa76a] font-semibold flex items-center gap-2">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#bfa76a" strokeWidth="2"/></svg>
            Bestseller
          </div>
          <div className="flex gap-4 mt-3">
            <span className="flex flex-col items-center text-xs text-[#ffffff]">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#bfa76a" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#bfa76a" strokeWidth="2"/></svg>
              Recline in Auto Mode
            </span>
            <span className="flex flex-col items-center text-xs text-[#ffffff]">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="2" rx="1" fill="#bfa76a"/></svg>
              Rocking Mechanism
            </span>
            <span className="flex flex-col items-center text-xs text-[#ffffff]">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#bfa76a" strokeWidth="2"/></svg>
              Premium Design
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoShowcase;
