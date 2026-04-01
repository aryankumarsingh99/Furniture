"use client";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

const heroImages = [  
  "https://en.eastern-edition.com/web/upload/epblossom/img/easternedition-la-showroom.jpg",
  "https://en.eastern-edition.com/web/upload/epblossom/img/easternedition-atelier-1.jpg",
  "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1674532076630-cf1f4f730a73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function HomeHero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleScrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#dfe8d0] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36"
    >
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === activeImageIndex
                ? "animate-hero-classic opacity-100 translate-x-0"
                : index < activeImageIndex || (activeImageIndex === 0 && index === heroImages.length - 1)
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,148,65,0.12),transparent_28%)]" />

      <div className="relative min-h-160 sm:min-h-190 lg:min-h-176">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.68)_42%,rgba(20,27,17,0.38)_72%,rgba(20,27,17,0.56)_100%)] lg:bg-[linear-gradient(90deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.56)_34%,rgba(20,27,17,0.22)_60%,rgba(20,27,17,0.46)_100%)]" />

        <div className="relative mx-auto flex min-h-160 max-w-7xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
          <div className="max-w-3xl pt-2 text-white">
            <div className="pt-8 sm:pt-0">
              <div className="inline-flex border border-white/25 bg-white/20 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
                Premium Furniture Collection
              </div>
            </div>

            <h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[4.75rem]">
              Transform Your Space with Elegant, Handcrafted Furniture
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
              Discover timeless designs and modern comfort. Our curated selection features quality materials, expert craftsmanship, and unique pieces to elevate every room in your home or office.
            </p>

            <div className="mt-8 flex flex-col pb-7 gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex w-full items-center justify-center bg-[#bb8d48] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#b99764] sm:w-auto"
              >
                Shop Now
              </a>
              <Link
                href="/products#product-gallery"
                className="inline-flex w-full items-center justify-center border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/15 sm:w-auto"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
