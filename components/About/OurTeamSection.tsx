import React from "react";

export default function OurTeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5e9da] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36">
      <div className="relative mx-auto flex min-h-160 max-w-5xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
        <div className="max-w-3xl pt-2 text-[#422912]">
          <div className="pt-8 sm:pt-0">
            <div className="inline-flex border border-[#bb8d48]/25 bg-[#fff]/40 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48] backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
              Our Team
            </div>
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[3.5rem]">
            Meet the Artisans
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#7c4a03] sm:mt-6 sm:text-lg sm:leading-8">
            Our talented team of designers, craftsmen, and customer care specialists are the heart of our company. Each member brings unique skills and a shared passion for creating beautiful, lasting furniture.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#7c4a03] sm:text-lg sm:leading-8">
            We believe in collaboration, creativity, and a commitment to excellence. Get to know the people who make your dream spaces possible.
          </p>
        </div>
      </div>
    </section>
  );
}
