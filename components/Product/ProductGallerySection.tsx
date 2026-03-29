"use client";
import React, { useState } from "react";

const galleryImages = [
  {
    src: "/Images/1.jpeg",
    alt: "Modern Sofa",
    label: "Sofa",
  },
  {
    src: "/Images/2.jpeg",
    alt: "Dining Table",
    label: "Sectional Sofas",
  },
  {
    src: "/Images/3.jpeg",
    alt: "Bedroom Set",
    label: "Sleeper Sofas",
  },
  {
    src: "/Images/4.jpeg",
    alt: "Bookshelf",
    label: "Sleeper Sofas",
  },
  {
    src: "/Images/5.jpeg",
    alt: "Bookshelf",
    label: "Luxury Sofas",
  },
  {
    src: "/Images/7.jpeg",
    alt: "Bookshelf",
    label: "Dining Table",
  },
  {
    src: "/Images/8.jpeg",
    alt: "Bookshelf",
    label: "Modern Bed",
  },
  {
    src: "/Images/9.jpeg",
    alt: "Bookshelf",
    label: "Artificial Bed",
  },
  {
    src: "/Images/10.jpeg",
    alt: "Bookshelf",
    label: "Artificial Bed",
  },
  {
    src: "/Images/11.jpeg",
    alt: "Bookshelf",
    label: "Modern Bed",
  },
  {
    src: "/Images/12.jpeg",
    alt: "Bookshelf",
    label: "Bookshelf",
  },
  {
    src: "/Images/13.jpeg",
    alt: "Bookshelf",
    label: "Classic Dining Table",
  },
  {
    src: "/Images/14.jpeg",
    alt: "Bookshelf",
    label: "Wooden Sofa",
  },
  {
    src: "/Images/14.jpeg",
    alt: "Bookshelf",
    label: "Artificial Sofa",
  },
  
      
    ];


    export default function ProductGallerySection() {
      const [modal, setModal] = useState({ open: false, idx: 0 });

      return (
        <section className="relative bg-[linear-gradient(180deg,#ebd6c0_0%,#ffffff_100%)] py-16 px-4 sm:px-6 md:px-8 border-b border-[#c8d6b0]">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3 animate-fade-in-up">
              <span className="inline-flex rounded-full border border-[#c8d6b0] bg-[#bb8d48] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffffff]">Gallery</span>
            </div>
            <h2 className="font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl md:text-5xl mb-10 animate-fade-in-up">Product Gallery</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={img.alt}
                  className="relative group rounded-2xl shadow-lg bg-white/80 border border-[#bb8d48] overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setModal({ open: true, idx })}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#bb8d48]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#fff8ef] px-4 py-1 rounded-full text-[#bb8d48] text-xs font-semibold shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Lightbox */}
            {modal.open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setModal({ ...modal, open: false })}>
                <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
                  <button
                    className="absolute top-2 right-2 text-[#bb8d48] bg-[#fff8ef] rounded-full p-2 shadow hover:bg-[#bb8d48] hover:text-[#fff8ef] transition-colors"
                    onClick={() => setModal({ ...modal, open: false })}
                    aria-label="Close"
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="#bb8d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <img
                    src={galleryImages[modal.idx].src}
                    alt={galleryImages[modal.idx].alt}
                    className="w-full h-96 object-cover rounded-xl mb-4"
                  />
                  <div className="text-[#bb8d48] text-lg font-semibold mb-2">{galleryImages[modal.idx].label}</div>
                  <div className="flex gap-4 mt-2">
                    <button
                      className="bg-[#bb8d48] text-[#fff8ef] px-4 py-2 rounded shadow hover:bg-[#a07a3c] transition-colors"
                      onClick={() => setModal({ open: true, idx: (modal.idx - 1 + galleryImages.length) % galleryImages.length })}
                      aria-label="Previous image"
                    >Prev</button>
                    <button
                      className="bg-[#bb8d48] text-[#fff8ef] px-4 py-2 rounded shadow hover:bg-[#a07a3c] transition-colors"
                      onClick={() => setModal({ open: true, idx: (modal.idx + 1) % galleryImages.length })}
                      aria-label="Next image"
                    >Next</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      );
    }
