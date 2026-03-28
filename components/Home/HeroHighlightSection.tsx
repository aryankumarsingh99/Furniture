import React from "react";
import { FaCheckCircle, FaSeedling } from "react-icons/fa";

export default function HeroHighlightSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ebd6c0_0%,#fff8ef_100%)] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl border border-[#c8d6b0] bg-[#fff8ef] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 border-b border-stone-300 pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-10">
          <div>
            <div className="inline-flex border border-[#c8d6b0] bg-[#fff8ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#bb8d48]">
              Welcome TO PK ARGO INDUSTRY Pvt. Ltd.
            </div>

            <h2 className="mt-5 max-w-4xl font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl lg:text-[3.25rem]">
              A family-led rice business shaped by long practice, measured quality, and dependable supply.
            </h2>

            <div className="mt-5 flex gap-2 text-[#c8d6b0]">
              <FaSeedling className="text-lg sm:text-xl" />
              <FaSeedling className="text-lg sm:text-xl" />
              <FaSeedling className="text-lg sm:text-xl" />
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a4a2c] sm:text-lg">
              Good rice is not produced by presentation alone. It comes from repeated practice in sourcing, careful mill handling, and disciplined quality checks carried through each stage of work. That practical approach remains central to how Sponge serves wholesale buyers and long-term partners.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="border border-[#c8d6b0] bg-[#fff8ef] px-5 py-5">
              <div className="font-serif text-4xl text-[#bb8d48]">40+</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#bb8d48]">
                Years of experience
              </div>
            </div>
            <div className="border border-[#c8d6b0] bg-[#ebd6c0]/40 px-5 py-5 sm:col-span-2 lg:col-span-1">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                Working focus
              </div>
              <div className="mt-2 text-sm leading-7 text-[#5a4a2c]">
                Consistent milling, practical coordination, and reliable buyer support.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="border border-[#c8d6b0] bg-[#fff8ef]">
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.eastgateexport.com/wp-content/uploads/2023/07/Basmati-Rice-Mill.jpg"
                alt="Rice field and agricultural production landscape"
                className="h-80 w-full object-cover sm:h-112"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1d2818]/55 via-[#1d2818]/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fefefe]">Production landscape</div>
                <div className="mt-2 max-w-md font-serif text-2xl leading-snug text-[#ffffff]">
                  Steady agricultural sourcing remains the foundation of reliable rice supply.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[#c8d6b0] bg-[#fff8ef] px-5 py-5">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#bb8d48]" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#bb8d48]">Best quality standards</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#5a4a2c]">
                Grain selection, grading, and process review are maintained to support steady final quality.
              </p>
            </div>

            <div className="border border-[#c8d6b0] bg-[#fff8ef] px-5 py-5">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#bb8d48]" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#bb8d48]">Natural healthy products</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#5a4a2c]">
                Clean handling and sensible storage help preserve the condition and value of each batch.
              </p>
            </div>

            <div className="border border-[#c8d6b0] bg-[#fff8ef] px-5 py-5 sm:col-span-2">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#bb8d48]" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#bb8d48]">Smart organic services</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#5a4a2c]">
                Field knowledge, mill discipline, and direct communication come together to support changing order needs and long-standing business relationships.
              </p>
            </div>

            <div className="border border-[#c8d6b0] bg-[#ebd6c0]/40 px-5 py-5 sm:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                Company note
              </div>
              <p className="mt-2 text-sm leading-7 text-[#5a4a2c]">
                The emphasis remains on dependable output, careful handling, and a practical standard of service rather than decorative claims.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 border-t border-[#c8d6b0] pt-6">
          <a
            href="#about"
            className="inline-flex items-center justify-center border border-[#bb8d48] bg-[#bb8d48] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a07a3c]"
          >
            Discover more
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-[#c8d6b0] bg-[#fff8ef] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#bb8d48] transition hover:bg-[#ebd6c0]"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
