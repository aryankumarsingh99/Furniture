"use client";
import { em } from "framer-motion/client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const location = {
  city: "RajLaxmi Furniture",
  email: "rajlaxmiwoodenfurniture9989@gmail.com",
  address: "POWER HOUSE, NH 326, GLOCAL MEDICAL ROAD, Jeypore, Odisha , 764001",
  phone: "+91 9583245585",
  map: "https://www.google.com/maps/dir//Rajlaxmi+Furniture,+VH4F%2B59J,+NKT+Rd,+Ganga+Nagar,+Jeypore,+Odisha+764001/@18.8643801,82.5467552,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a3aed59f7946677:0xd9041725a5bf1bf!2m2!1d82.5733717!2d18.8554136?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
};

export default function ContactMapPage() {
  return (
    <section className="min-h-screen bg-white px-2 py-20 sm:px-6 xl:px-32 flex flex-col items-center">
      <div className="w-full max-w-7xl mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#7c5e3c] mb-4 drop-shadow-lg">Our Showroom Locations</h1>
        <p className="text-lg text-[#a47551] mb-8">Visit us at any of our modern showrooms. We look forward to welcoming you in person!</p>
      </div>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Map on the left */}
        <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e7d3b7] min-h-[420px] mb-10 lg:mb-0">
          <iframe
            title="Rajlaxmi Furniture Location Map"
            src="https://www.google.com/maps?q=Rajlaxmi+Furniture,+VH4F%2B59J,+NKT+Rd,+Ganga+Nagar,+Jeypore,+Odisha+764001&output=embed"
            width="100%"
            height="100%"
            className="min-h-[420px] h-full w-full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        {/* Locations stacked on the right */}
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <div className="bg-white/90 rounded-2xl shadow-xl p-7 flex flex-col items-start hover:scale-[1.015] transition-transform duration-300 border border-[#e7d3b7]">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#bb8d48] text-xl" />
                <span className="font-semibold text-lg text-[#7c5e3c]">{location.city}</span>
              </div>
              <div className="text-[#a47551] mb-2 text-base leading-relaxed">{location.address}</div>
              <div className="flex items-center gap-2 text-[#7c5e3c] mb-2">
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${location.email}`} className="text-sm underline hover:text-[#bb8d48]">{location.email}</a>
              </div>
              <div className="flex items-center gap-2 text-[#7c5e3c] mb-2">
                <FaPhoneAlt className="text-[#bb8d48] text-base" />
                <span className="text-sm">{location.phone}</span>
              </div>
              <a href={location.map} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-xs font-semibold uppercase tracking-wider text-[#bb8d48] hover:text-[#7c5e3c] transition underline underline-offset-2">View on Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
