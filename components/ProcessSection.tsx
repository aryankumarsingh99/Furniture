import React from "react";
import { FaLeaf, FaCog, FaStar, FaCheckCircle, FaBoxOpen } from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    title: "Cleaning",
    desc: "Raw paddy is cleaned to remove dust, husk fragments, stones, and other field impurities before further processing.",
    note: "Intake preparation",
    icon: <FaLeaf className="text-lg text-[#6f8a3a]" />
  },
  {
    step: "02",
    title: "Dehusking",
    desc: "The outer husk is removed with controlled mill settings to preserve grain quality and reduce breakage.",
    note: "Core separation",
    icon: <FaCog className="text-lg text-[#6a6a61]" />
  },
  {
    step: "03",
    title: "Polishing",
    desc: "Rice is refined to achieve the required finish while maintaining a consistent appearance across batches.",
    note: "Surface finish",
    icon: <FaStar className="text-lg text-[#6f8a3a]" />
  },
  {
    step: "04",
    title: "Grading",
    desc: "Processed grain is sorted by size and quality to meet expected commercial standards before dispatch.",
    note: "Quality sorting",
    icon: <FaCheckCircle className="text-lg text-[#6f8a3a]" />
  },
  {
    step: "05",
    title: "Packaging",
    desc: "Final rice is packed with care to protect freshness, support storage, and prepare for transport.",
    note: "Dispatch readiness",
    icon: <FaBoxOpen className="text-lg text-[#5e7b35]" />
  }
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-[#e2ebd2] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80)"
        }}
      />
 
      <div className="relative mx-auto max-w-7xl border border-[#c3d2a9] bg-[#f6faef]/28 p-6 backdrop-blur-[1px] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex border border-stone-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5d6d4b]">
              Our process
            </div>
            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl lg:text-[3.1rem]">
              Five stages, managed with a practical sequence and measured control.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white sm:text-lg">
              The production flow is arranged as a working ledger of steps. Each operation prepares the grain for the next, keeping handling disciplined and output reliable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="border border-[#c3d2a9] bg-[#f8fbf2] px-5 py-5">
                <div className="font-serif text-3xl text-[#2a3523]">05</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Core stages
                </div>
              </div>
              <div className="border border-[#c3d2a9] bg-[#edf4df] px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Process note
                </div>
                <div className="mt-2 text-sm leading-7 text-stone-700">
                  Consistency depends on sequence, machine control, and reduced handling loss at every stage.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {processSteps.map((process, index) => (
              <article
                key={process.step}
                className="animate-processReveal border border-[#c3d2a9] bg-[#f9fcf4] transition duration-300 hover:-translate-y-1 hover:border-[#8faa60]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="grid gap-0 md:grid-cols-[110px_1fr_220px]">
                  <div className="flex flex-col justify-between border-b border-[#c3d2a9] bg-[#e8f0d7] px-5 py-5 md:border-b-0 md:border-r">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Step
                    </div>
                    <div className="mt-3 font-serif text-4xl text-[#2a3523]">{process.step}</div>
                    <div className="mt-4 flex h-11 w-11 items-center justify-center border border-[#b5c793] bg-[#f8fbf2]">
                      {process.icon}
                    </div>
                  </div>

                  <div className="border-b border-[#c3d2a9] px-5 py-5 md:border-b-0 md:px-6">
                    <h3 className="font-serif text-2xl text-[#2a3523]">{process.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#465741] sm:text-base">{process.desc}</p>
                  </div>

                  <div className="bg-[#edf4df] px-5 py-5 md:border-l md:border-[#c3d2a9] md:px-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Stage focus
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[#3d4f38]">{process.note}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
