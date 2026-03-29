import React from "react";

type LoadingScreenProps = {
  exiting?: boolean;
};

export default function LoadingScreen({ exiting = false }: LoadingScreenProps) {
  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-[#fff9ed] via-[#ffe9b0] to-[#bb8d48] px-6",
        "transition-opacity duration-500",
        exiting ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff9ed]/80 via-[#ffe9b0]/60 to-[#bb8d48]/40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#bb8d48] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#bfa76a] to-transparent" />

      <div className="relative w-full max-w-3xl border border-[#bfa76a] bg-gradient-to-br from-[#fff9ed] via-[#ffe9b0] to-[#bb8d48] px-6 py-6 shadow-[0_28px_90px_rgba(187,141,72,0.18)] sm:px-8 sm:py-8">
        <div className="absolute inset-3" />

        <div className="relative grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="flex flex-col items-center justify-center text-center lg:border-r lg:border-[#bfa76a] lg:pr-8">
            <div className="relative flex h-44 w-44 items-center justify-center border border-[#bb8d48] bg-gradient-to-b from-[#fff9ed] to-[#ffe9b0] shadow-[inset_0_0_0_10px_rgba(255,255,255,0.06),0_18px_40px_rgba(187,141,72,0.12)] sm:h-48 sm:w-48">
               <div className="absolute inset-y-7 left-1/2 w-px -translate-x-1/2 bg-[#ffe9b0]/60" />
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-t from-[#ffe9b0] via-[#fff9ed] to-[#bb8d48] shadow-[inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-10px_18px_rgba(187,141,72,0.10),0_10px_22px_rgba(187,141,72,0.10)] sm:h-32 sm:w-32">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-24 w-24 rounded-full object-contain sm:h-28 sm:w-28"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bb8d48]">
              Preparing
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-10 bg-[#bb8d48]" />
              <div className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#bb8d48]">
                Rajlaxmi Wooden Furnitures
              </div>
              <span className="h-px w-10 bg-[#bb8d48]" />
            </div>

            <div className="mt-4 font-serif text-3xl text-[#7c5e3c] sm:text-4xl">
              Loading
            </div>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#bfa76a] sm:text-base lg:mx-0">
              Preparing the site.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="border border-[#bb8d48] bg-gradient-to-b from-[#fff9ed]/80 to-[#ffe9b0]/60 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                <div className="h-2 bg-[#ffe9b0]/30">
                  <div className="h-full w-[68%] bg-gradient-to-r from-[#bb8d48] to-[#ffe9b0]" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#bb8d48]" />
                <span className="h-2 w-2 rounded-full bg-[#ffe9b0]" />
                <span className="h-2 w-2 rounded-full bg-[#fff9ed]" />
              </div>
            </div>

            <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-[#bb8d48]">
              Please wait
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}