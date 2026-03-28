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
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Modern sofa
    label: "Best Seller",
    grade: "Premium Comfort",
    use: "Living Room, Lounge",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-dining-table",
    name: "Oak Dining Table",
    description: "A handcrafted oak dining table with a natural finish. Seats up to 8 people and brings warmth to any dining space.",
    note: "Scratch-resistant surface. Matching chairs available.",
    image: "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Oak dining table
    label: "Solid Wood",
    grade: "Family Size",
    use: "Dining Room, Kitchen",
    icon: <FaLeaf className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-bedroom-set",
    name: "Elegant Bedroom Set",
    description: "A complete bedroom set featuring a king-size bed, two nightstands, and a spacious dresser. Crafted from sustainable materials.",
    note: "Eco-friendly finishes. Mattress not included.",
    image: "https://images.unsplash.com/flagged/photo-1590227000970-3ae55d48501e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Elegant bedroom set
    label: "Eco Choice",
    grade: "Sustainable Luxury",
    use: "Bedroom, Guest Room",
    icon: <FaSeedling className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-bookshelf",
    name: "Minimalist Bookshelf",
    description: "A sleek, open-frame bookshelf with adjustable shelves. Ideal for displaying books, decor, and plants in any room.",
    note: "Easy to assemble. Lightweight yet sturdy.",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1170&auto=format&fit=crop", // Minimalist bookshelf
    label: "Top Pick",
    grade: "Versatile Storage",
    use: "Living Room, Study, Office",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-armchair",
    name: "Classic Armchair",
    description: "A timeless armchair with rolled arms and deep seating. Upholstered in premium fabric for lasting comfort.",
    note: "Available in custom fabrics and colors.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop", // Classic armchair
    label: "Customizable",
    grade: "Classic Comfort",
    use: "Living Room, Bedroom",
    icon: <FaLeaf className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-coffee-table",
    name: "Glass Coffee Table",
    description: "A modern coffee table with a tempered glass top and metal legs. Adds a touch of elegance to your seating area.",
    note: "Easy to clean. Shatter-resistant glass.",
    image: "https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Glass coffee table
    label: "Modern Style",
    grade: "Elegant Accent",
    use: "Living Room, Office",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-tv-stand",
    name: "Wooden TV Stand",
    description: "A sturdy TV stand with ample storage for media devices and accessories. Features cable management and adjustable shelves.",
    note: "Fits TVs up to 70 inches.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop", // Wooden TV stand
    label: "Spacious",
    grade: "Media Ready",
    use: "Living Room, Entertainment Area",
    icon: <FaSeedling className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-desk",
    name: "Contemporary Desk",
    description: "A spacious desk with a minimalist design, perfect for home offices or study spaces. Includes built-in drawers for organization.",
    note: "Scratch-resistant surface. Easy assembly.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop", // Contemporary desk
    label: "Work From Home",
    grade: "Productivity Boost",
    use: "Office, Study Room",
    icon: <FaStar className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-dresser",
    name: "Six-Drawer Dresser",
    description: "A modern dresser with six spacious drawers and a smooth finish. Keeps your bedroom organized and stylish.",
    note: "Soft-close drawers. Anti-tip hardware included.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop", // Six-drawer dresser
    label: "Spacious Storage",
    grade: "Bedroom Essential",
    use: "Bedroom, Guest Room",
    icon: <FaLeaf className="text-lg text-[#bb8d48]" />,
  },
  {
    id: "product-nightstand",
    name: "Bedside Nightstand",
    description: "A compact nightstand with a drawer and open shelf. Perfect for keeping essentials within reach while you rest.",
    note: "Pairs well with any bed style.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop", // Bedside nightstand
    label: "Compact",
    grade: "Convenient Storage",
    use: "Bedroom, Living Room",
    icon: <FaSeedling className="text-lg text-[#bb8d48]" />,
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
              <div className="absolute inset-0 bg-linear-to-r from-[#ebd6c0]/80 via-[#ffffff]/10 to-transparent" />
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
