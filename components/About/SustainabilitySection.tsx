import React from "react";

export default function SustainabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#e6f0e6] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36">
      <div className="relative mx-auto flex min-h-160 max-w-5xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
        <div className="max-w-3xl pt-2 text-[#2a3523]">
          <div className="pt-8 sm:pt-0">
            <div className="inline-flex border border-[#bb8d48]/25 bg-[#fff]/40 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48] backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
              Sustainability
            </div>
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[3.5rem]">
            Eco-Friendly Commitment
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#4b5c3b] sm:mt-6 sm:text-lg sm:leading-8">
            We are dedicated to sustainable practices, from responsibly sourced materials to eco-conscious manufacturing. Our goal is to minimize our environmental impact while delivering exceptional quality.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4b5c3b] sm:text-lg sm:leading-8">
            Join us in our journey to create a greener future—one beautiful piece of furniture at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
