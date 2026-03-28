import React from "react";

type LoadingScreenProps = {
  exiting?: boolean;
};

export default function LoadingScreen({ exiting = false }: LoadingScreenProps) {
  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
        "bg-[radial-gradient(circle_at_top,#eef5e1_0%,#d8e5c0_45%,#b7cb88_100%)] px-6",
        "transition-opacity duration-500",
        exiting ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_45%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(47,91,51,0.55),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(29,50,31,0.38),transparent)]" />

      <div className="relative w-full max-w-3xl border border-[#9bb66d] bg-[linear-gradient(135deg,rgba(31,49,32,0.88)_0%,rgba(45,69,41,0.76)_36%,rgba(239,245,225,0.92)_36.2%,rgba(247,250,239,0.95)_100%)] px-6 py-6 shadow-[0_28px_90px_rgba(29,42,24,0.24)] sm:px-8 sm:py-8">
        <div className="absolute inset-3" />

        <div className="relative grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="flex flex-col items-center justify-center text-center lg:border-r lg:border-[#547246] lg:pr-8">
            <div className="relative flex h-44 w-44 items-center justify-center border border-[#6f8a3a] bg-[linear-gradient(180deg,rgba(243,247,234,0.18)_0%,rgba(168,197,106,0.08)_100%)] shadow-[inset_0_0_0_10px_rgba(255,255,255,0.06),0_18px_40px_rgba(18,34,18,0.24)] sm:h-48 sm:w-48">
               <div className="absolute inset-y-7 left-1/2 w-px -translate-x-1/2 bg-[#a8c56a]/45" />
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#f3f7ea_0%,#dce8c5_48%,#b7cb88_100%)] shadow-[inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-10px_18px_rgba(47,91,51,0.18),0_10px_22px_rgba(18,34,18,0.18)] sm:h-32 sm:w-32">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-24 w-24 rounded-full object-contain sm:h-28 sm:w-28"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d5e1c7]">
              Preparing
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-px w-10 bg-[#7f9c53]" />
              <div className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#4d6a3f]">
                Rajlaxmi Wooden Furniture 
              </div>
              <span className="h-px w-10 bg-[#7f9c53]" />
            </div>

            <div className="mt-4 font-serif text-3xl text-[#2a3523] sm:text-4xl">
              Loading
            </div>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#41513a] sm:text-base lg:mx-0">
              Preparing the site.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="border border-[#b7cb88] bg-[linear-gradient(180deg,rgba(247,250,239,0.72)_0%,rgba(220,232,197,0.52)_100%)] px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]">
                <div className="h-2 bg-[#2f5b33]/14">
                  <div className="h-full w-[68%] bg-[linear-gradient(90deg,#2f5b33_0%,#7f9c53_100%)]" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2f5b33]" />
                <span className="h-2 w-2 rounded-full bg-[#6f8a3a]" />
                <span className="h-2 w-2 rounded-full bg-[#a8c56a]" />
              </div>
            </div>

            <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-[#5d7348]">
              Please wait
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}