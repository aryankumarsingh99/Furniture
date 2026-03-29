"use client";

import React from "react";
import Image from "next/image";
import { FaLeaf, FaSeedling, FaStar, FaCouch } from "react-icons/fa";

const products = [
  {
    id: "product-modern-sofa",
    name: "Modern Sofa",
    description: "A luxurious, contemporary sofa with plush cushions and a solid wood frame. Perfect for living rooms seeking both comfort and style.",
    note: "Available in multiple colors and fabrics. Seats 3-4 comfortably.",
    image: "/Images/5.jpeg", // Modern sofa
    label: "Best Seller",
    grade: "Premium Comfort",
    use: "Living Room, Lounge",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-dining-table",
    name: "Recliner Sofa",
    description: "A plush recliner sofa with adjustable back and footrest. Perfect for relaxing after a long day or enjoying movie nights at home.",
    note: "Smooth reclining mechanism. Available in leather and fabric.",
    image: "/Images/4.jpeg", // Use the dining table image
    label: "Solid Comfort",
    grade: "Relaxation",
    use: "Living Room, Lounge",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-bedroom-set",
    name: "Sleeper Sofa",
    description: "A versatile sleeper sofa that easily converts from a stylish couch to a comfortable bed. Perfect for guests and small spaces.",
    note: "Quick conversion mechanism. Available in multiple fabrics.",
    image: "/Images/3.jpeg", // Use the bedroom set image
    label: "Eco Choice",
    grade: "Space Saving",
    use: "Living Room, Guest Room",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-bookshelf",
    name: "Sectional Sofa",
    description: "A spacious sectional sofa with modular pieces for flexible seating. Perfect for large families and entertaining guests.",
    note: "Configurable layout. Available in various fabrics and colors.",
    image: "/Images/2.jpeg", // Use the bookshelf image
    label: "Top Pick",
    grade: "Flexible Comfort",
    use: "Living Room, Lounge",
    icon: <FaSeedling className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-armchair",
    name: "Classic Sofa",
    description: "A timeless sofa with rolled arms and deep seating. Upholstered in premium fabric for lasting comfort and elegance.",
    note: "Available in custom fabrics and colors. Seats 3 comfortably.",
    image: "/Images/1.jpeg", // Use the armchair image
    label: "Customizable",
    grade: "Classic Comfort",
    use: "Living Room, Lounge",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-coffee-table",
    name: "Premium Comfort Bed",
    description: "A luxurious bed with a plush headboard and ergonomic design for restful sleep. Crafted for both style and comfort.",
    note: "Available in king and queen sizes. Easy to assemble.",
    image: "/Images/11.jpeg", // Use the coffee table image
    label: "Luxury",
    grade: "Restful Sleep",
    use: "Bedroom, Guest Room",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-tv-stand",
    name: "Wooden Bed",
    description: "A classic wooden bed crafted from solid wood for lasting durability. Features a timeless design that complements any bedroom.",
    note: "Available in multiple finishes. Easy assembly.",
    image: "/Images/10.jpeg", // Use the TV stand image
    label: "Solid Wood",
    grade: "Classic Style",
    use: "Bedroom, Guest Room",
    icon: <FaLeaf className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-desk",
    name: "Artificial Bed",
    description: "A modern artificial bed designed for durability and easy maintenance. Features a sleek look and comfortable support.",
    note: "Low-maintenance materials. Available in multiple sizes.",
    image: "/Images/9.jpeg", // Use the desk image
    label: "Innovative",
    grade: "Easy Care",
    use: "Bedroom, Guest Room",
    icon: <FaSeedling className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-dresser",
    name: "Modern Bed",
    description: "A stylish modern bed with a sturdy frame and plush headboard. Designed for comfort and contemporary bedrooms.",
    note: "Available in king and queen sizes. Mattress sold separately.",
    image: "/Images/8.jpeg", // Use the dresser image
    label: "Contemporary",
    grade: "Ultimate Comfort",
    use: "Bedroom, Guest Room",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-nightstand",
    name: "Oak Dining Table",
    description: "A handcrafted oak dining table with a natural finish. Seats up to 6 people and brings warmth to any dining space.",
    note: "Scratch-resistant surface. Matching chairs available.",
    image: "/Images/7.jpeg", // Use the nightstand image
    label: "Solid Wood",
    grade: "Family Size",
    use: "Dining Room, Kitchen",
    icon: <FaLeaf className="text-lg text-[#bb8d48]" />,
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="product-ledger-visible w-full overflow-hidden bg-[linear-gradient(180deg,#ebd6c0_0%,#ffffff_100%)] py-14 sm:py-16 md:py-20"
    >
      <div className="relative w-full overflow-hidden border-y border-[#bb8d48] px-4 py-10 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute -left-20 -top-6 z-0 h-96 w-64 sm:-left-24 sm:h-120 sm:w-96 lg:-left-32 lg:-top-10 lg:h-152 lg:w-md flex items-center justify-center">
          <FaCouch className="w-full h-full text-[#bb8d48] opacity-20 drop-shadow-2xl" />
        </div>

        <div className="pointer-events-none absolute -right-20 -top-6 z-0 h-96 w-64 sm:-right-24 sm:h-120 sm:w-96 lg:-right-4 lg:-top-2 lg:h-152 lg:w-md flex items-center justify-center">
          <FaCouch className="w-full h-full text-[#bb8d48] opacity-20 drop-shadow-2xl scale-x-[-1]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="product-ledger-item product-ledger-intro">
              <div className="product-ledger-item product-ledger-soft inline-flex border border-[#c8d6b0] bg-[#bb8d48] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffffff]" style={{ transitionDelay: "40ms" }}>
                Our products
              </div>
              <h2 className="product-ledger-item product-ledger-intro mt-5 max-w-2xl font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl lg:text-[3.25rem]" style={{ transitionDelay: "110ms" }}>
                Discover Our Premium Furniture Collection for Every Space
                <span className="block mt-2 text-lg font-normal text-[#464646]">
                  Timeless designs, modern comfort, and exceptional craftsmanship.<br/>
                  Explore a curated range of sofas, tables, beds, and more—each piece selected for quality, style, and versatility. Perfect for homes, offices, and hospitality spaces seeking lasting beauty and function.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="product-ledger-item product-ledger-note border border-[#bb8d48] bg-[#ebd6c0] px-5 py-4" style={{ transitionDelay: "180ms" }}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                  Selection standard
                </div>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Each variety is framed by grain quality, use case, and buyer preference rather than decorative marketing copy.
                </p>
              </div>
              <div className="product-ledger-item product-ledger-note border border-[#bb8d48] bg-[#ebd6c0] px-5 py-4" style={{ transitionDelay: "250ms" }}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                  Motion detail
                </div>
                <p className="mt-2 text-sm leading-7 text-stone-700">
                  Each card reveals a side panel with a measured slide so the interaction feels classic and controlled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-5 px-4 sm:px-6 lg:px-10">
        {products.map((product, idx) => (
          <article
            key={product.name}
            id={product.id}
            className={`product-ledger-item product-ledger-card group mx-auto grid w-full max-w-375 overflow-hidden border border-[#bb8d48] bg-[#ebd6c0] lg:grid-cols-[0.95fr_1.05fr] ${idx % 2 === 0 ? "product-ledger-left" : "product-ledger-right"}`}
            style={{ transitionDelay: `${220 + idx * 110}ms` }}
          >
            <div className={`relative min-h-55 overflow-hidden sm:min-h-60 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="product-ledger-image h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 " />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-white/20 bg-[#bb8d48]/90 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ffffff] backdrop-blur-sm">
                {product.icon}
                {product.label}
              </div>
            </div>

            <div className={`relative grid min-h-55 overflow-hidden bg-[#fff8ef] sm:min-h-60 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-44 translate-x-full border-l border-[#bb8d48] bg-[#ebd6c0] transition duration-500 group-hover:translate-x-0 lg:block" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-4 p-5 transition-[padding,transform] duration-500 sm:p-6 lg:p-7 lg:pr-8 group-hover:lg:pr-56 group-hover:lg:-translate-x-2">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                    <span>Product {String(idx + 1).padStart(2, "0")}</span>
                    <span className="h-1 w-1 rounded-full bg-[#bb8d48]" />
                    <span>{product.grade}</span>
                  </div>

                  <h3 className="mt-2 font-serif text-[1.9rem] text-[#2a3523] sm:text-[2rem]">{product.name}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-700 sm:text-[15px]">
                    {product.description}
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="border border-[#bb8d48] bg-[#ebd6c0] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                      Market note
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{product.note}</p>
                  </div>

                  <div className="border border-[#bb8d48] bg-[#fff8ef] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                      Best use
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{product.use}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#bb8d48] bg-[#ebd6c0] px-5 py-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-44 lg:border-l lg:border-t-0 lg:px-5 lg:py-5 lg:opacity-0 lg:transition lg:duration-500 lg:group-hover:opacity-100">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                  Trade brief
                </div>
                <p className="mt-3 text-sm leading-6 text-[#31412d]">
                  A reliable line for buyers who want stable milling quality and clear product positioning.
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
