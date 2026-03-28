"use client";
import React, { useEffect, useRef, useState } from "react";

const storyImage = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop";

export default function OurStorySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#ecd8c3] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-100 scale-105"
          style={{ backgroundImage: `url(${storyImage})` }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(236,216,195,0.92)_0%,rgba(255,255,255,0.7)_100%)]" />

      <div className={`relative mx-auto flex min-h-160 max-w-5xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl pt-2 text-[#422912]">
          <div className="pt-8 sm:pt-0">
            <div className="inline-flex border border-[#bb8d48]/25 bg-[#fff]/40 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48] backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em] animate-fade-in">
              Our Story
            </div>
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[3.5rem] animate-fade-in delay-100">
            A Legacy of Craftsmanship
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#7c4a03] sm:mt-6 sm:text-lg sm:leading-8 animate-fade-in delay-200">
            Since our founding, we have been dedicated to creating furniture that blends timeless tradition with modern design. Our journey began in a small workshop, where passion for quality and detail set the foundation for everything we do today.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#7c4a03] sm:text-lg sm:leading-8 animate-fade-in delay-300">
            Every piece is a testament to our commitment to sustainability, innovation, and the art of fine furniture making. We invite you to explore our story and become part of our family.
          </p>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
