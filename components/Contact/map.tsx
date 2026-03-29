"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const locations = [
  {
    city: "New York Showroom",
    address: "123 Modern Living Ave, Downtown, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    map: "https://goo.gl/maps/NYShowroomExample"
  },
  {
    city: "Los Angeles Showroom",
    address: "456 Sunset Blvd, Los Angeles, CA 90028",
    phone: "+1 (555) 987-6543",
    map: "https://goo.gl/maps/LAShowroomExample"
  },
  {
    city: "Chicago Showroom",
    address: "789 Lake Shore Dr, Chicago, IL 60611",
    phone: "+1 (555) 246-8101",
    map: "https://goo.gl/maps/ChicagoShowroomExample"
  }
];

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
            title="Showroom Locations Map"
            src="https://www.google.com/maps/d/embed?mid=1Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Qw6Q&hl=en"
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
          {locations.map((loc) => (
            <div key={loc.city} className="bg-white/90 rounded-2xl shadow-xl p-7 flex flex-col items-start hover:scale-[1.015] transition-transform duration-300 border border-[#e7d3b7]">
              <div className="flex items-center gap-3 mb-3">
                <FaMapMarkerAlt className="text-[#bb8d48] text-xl" />
                <span className="font-semibold text-lg text-[#7c5e3c]">{loc.city}</span>
              </div>
              <div className="text-[#a47551] mb-2 text-base leading-relaxed">{loc.address}</div>
              <div className="flex items-center gap-2 text-[#7c5e3c] mb-2">
                <FaPhoneAlt className="text-[#bb8d48] text-base" />
                <span className="text-sm">{loc.phone}</span>
              </div>
              <a href={loc.map} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block text-xs font-semibold uppercase tracking-wider text-[#bb8d48] hover:text-[#7c5e3c] transition underline underline-offset-2">View on Google Maps</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
