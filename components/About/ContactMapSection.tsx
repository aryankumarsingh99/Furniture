import React from "react";
import { FaClock, FaExternalLinkAlt, FaMapMarkerAlt, FaRoute } from "react-icons/fa";

const mapLocationUrl = "https://www.google.com/maps/dir//Om+Sri+Maa+Tarini+Modern+Rice+Mill,+Main+Road,+opp.+Ram+Mandir,+Thorodiput,+Jeypore,+Odisha+764003/@18.8416,82.5720832,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a3a8dfc0b4edd67:0xd6fca1902246671f!2m2!1d82.5492156!2d18.8226096?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D";
const mapEmbedUrl = "https://maps.google.com/maps?q=Om%20Sri%20Maa%20Tarini%20Modern%20Rice%20Mill%2C%20Main%20Road%2C%20opp.%20Ram%20Mandir%2C%20Thorodiput%2C%20Jeypore%2C%20Odisha%20764003&z=15&output=embed";

export default function ContactMapSection() {
  return (
    <div className="mt-8">
      <div className="overflow-hidden border border-[#91ab62] bg-[linear-gradient(135deg,#1d3120_0%,#2b4429_44%,#dbe7c4_44.2%,#eef5e1_100%)] shadow-[0_30px_80px_rgba(22,36,20,0.2)]">
        <div className="grid lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative overflow-hidden border-b border-[#547246] px-5 py-6 sm:px-6 sm:py-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#537235]/45 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[#88a95b]/30 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 border border-[#6f8a3a] bg-[#f3f7e8]/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#dfeacc] backdrop-blur-sm">
                <FaMapMarkerAlt className="text-[#a8c56a]" />
                Mill location
              </div>

              <h3 className="mt-5 font-serif text-3xl leading-tight text-[#f3f7ea] sm:text-[2.35rem]">
                Visit the mill with a clearer route and direct map access.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#d9e5c8] sm:text-base">
                Om Sri Maa Tarini Modern Rice Mill, Main Road, opposite Ram Mandir, Thorodiput, Jeypore, Odisha 764003.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#557046] bg-white/8 px-4 py-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-[#c7d8af]">
                    <FaRoute className="text-sm" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b7c9a4]">
                      Route point
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#e0e9d4]">
                    Located on the main road for easier buyer visits, dispatch planning, and local navigation.
                  </p>
                </div>

                <div className="border border-[#557046] bg-[#243a24]/42 px-4 py-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-[#c7d8af]">
                    <FaClock className="text-sm" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b7c9a4]">
                      Visit timing
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#e0e9d4]">
                    Best used for office visits, location verification, and delivery coordination before arrival.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={mapLocationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#a8c56a] bg-[#a8c56a] px-6 py-3 text-sm font-semibold text-[#1e301d] transition hover:bg-[#96b559]"
                >
                  <FaExternalLinkAlt className="text-xs" /> Open in Google Maps
                </a>

                <div className="inline-flex items-center justify-center border border-[#547246] bg-white/8 px-6 py-3 text-sm font-semibold text-[#edf4df] backdrop-blur-sm">
                  Jeypore, Odisha
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(180deg,#dbe7c4_0%,#eef5e1_100%)] p-3 sm:p-4 lg:p-5">
            <div className="overflow-hidden border border-[#b5c991] bg-[#fdfef9] shadow-[0_20px_50px_rgba(39,63,35,0.18)]">
              <div className="flex items-center justify-between border-b border-[#cfdbb8] bg-[linear-gradient(90deg,#f7faf0_0%,#e8f1d7_100%)] px-4 py-3 sm:px-5">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Live map view
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#2a3523]">
                    Om Sri Maa Tarini Modern Rice Mill
                  </div>
                </div>
                <div className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4d6a3f] sm:block">
                  Navigation ready
                </div>
              </div>

              <iframe
                title="Om Sri Maa Tarini Modern Rice Mill location"
                src={mapEmbedUrl}
                className="h-80 w-full sm:h-96 lg:h-112"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}