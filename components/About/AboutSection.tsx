"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const introRef = useRef<HTMLElement | null>(null);
  const bannerRef = useRef<HTMLElement | null>(null);
  const [introVisible, setIntroVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const frameId = window.requestAnimationFrame(() => {
        setIntroVisible(true);
        setBannerVisible(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const observers: IntersectionObserver[] = [];

    const observe = (
      node: HTMLElement | null,
      onVisible: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          onVisible(entry.isIntersecting);
        },
        {
          threshold: 0.28,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      observer.observe(node);
      observers.push(observer);
    };

    observe(introRef.current, setIntroVisible);
    observe(bannerRef.current, setBannerVisible);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <section
        id="about"
        ref={introRef}
        className={`bg-[linear-gradient(180deg,#ebd6c0_0%,#ffffff_100%)] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 ${introVisible ? "about-scroll-visible" : ""}`.trim()}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-stone-300/70 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-14">
            <div className="about-scroll-item about-scroll-rise">
              <div
                className="about-scroll-item about-scroll-soft mb-4 inline-flex rounded-full border border-[#c8d6b0] bg-[#bb8d48] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffffff]"
                style={{ transitionDelay: "60ms" }}
              >
                About Our Furniture
              </div>
              <h2
                className="about-scroll-item about-scroll-rise max-w-2xl font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl md:text-5xl"
                style={{ transitionDelay: "120ms" }}
              >
                Timeless Craftsmanship, Modern Comfort
              </h2>
              <p
                className="about-scroll-item about-scroll-rise mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg"
                style={{ transitionDelay: "180ms" }}
              >
                Welcome to our furniture studio, where tradition meets innovation to create beautiful, functional pieces for every space. We blend classic techniques with contemporary design, using quality materials and expert craftsmanship to ensure every item is both stylish and durable.
              </p>
              <p
                className="about-scroll-item about-scroll-rise mt-4 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg"
                style={{ transitionDelay: "240ms" }}
              >
                Our collection features a range of furniture for living, dining, and working—each piece thoughtfully designed to elevate your home or office. Experience comfort, elegance, and reliability with every purchase.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div
                  className="about-scroll-item about-scroll-soft about-scroll-card rounded-2xl border border-[#bb8d48] bg-[#ebd6c0] px-5 py-4"
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="font-serif text-2xl text-[#2a3523]">Handcrafted</div>
                  <div className="mt-1 text-sm text-stone-600">Unique, artisan-made pieces</div>
                </div>
                <div
                  className="about-scroll-item about-scroll-soft about-scroll-card rounded-2xl border border-[#bb8d48] bg-[#ebd6c0] px-5 py-4"
                  style={{ transitionDelay: "380ms" }}
                >
                  <div className="font-serif text-2xl text-[#2a3523]">Sustainable</div>
                  <div className="mt-1 text-sm text-stone-600">Eco-friendly materials & finishes</div>
                </div>
                <div
                  className="about-scroll-item about-scroll-soft about-scroll-card rounded-2xl border border-[#bb8d48] bg-[#ebd6c0] px-5 py-4"
                  style={{ transitionDelay: "460ms" }}
                >
                  <div className="font-serif text-2xl text-[#2a3523]">Customizable</div>
                  <div className="mt-1 text-sm text-stone-600">Tailored to your style & space</div>
                </div>
              </div>
            </div>

            <div
              className="about-scroll-item about-scroll-erase about-scroll-panel border border-[#c8d6b0] bg-[#f3f8ea] p-4"
              style={{ transitionDelay: "140ms" }}
            >
              <div
                className="about-scroll-item about-scroll-soft about-scroll-frame relative overflow-hidden rounded-2xl"
                style={{ transitionDelay: "220ms" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/6.jpeg"
                  alt="Modern living room with elegant furniture"
                  className="about-scroll-image h-80 w-full object-cover sm:h-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#bb8d48]/70 via-[#ebd6c0]/20 to-transparent" />
                <div
                  className="about-scroll-item about-scroll-rise absolute inset-x-0 bottom-0 p-6 text-white"
                  style={{ transitionDelay: "320ms" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Our Philosophy</div>
                  <div className="mt-2 max-w-lg font-serif text-2xl leading-snug">Furniture that brings warmth, style, and comfort to your everyday life.</div>
                </div>
              </div>
              <div className="grid gap-3 border-x border-b border-[#c8d6b0] bg-[#f9fcf4] px-5 py-4 sm:grid-cols-3">
                <div className="about-scroll-item about-scroll-soft" style={{ transitionDelay: "380ms" }}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Design Focus</div>
                  <div className="mt-1 text-sm text-stone-700">Blending form and function</div>
                </div>
                <div className="about-scroll-item about-scroll-soft" style={{ transitionDelay: "440ms" }}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Priority</div>
                  <div className="mt-1 text-sm text-stone-700">Consistency in output</div>
                </div>
                <div className="about-scroll-item about-scroll-soft" style={{ transitionDelay: "500ms" }}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Outcome</div>
                  <div className="mt-1 text-sm text-stone-700">Dependable buyer supply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={bannerRef}
        className={`relative isolate overflow-hidden ${bannerVisible ? "about-scroll-visible" : ""}`.trim()}
      >
        <div
          className="about-scroll-item about-scroll-erase about-scroll-banner  relative min-h-168 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,55,16,0.28)_0%,rgba(11,38,14,0.54)_45%,rgba(6,24,9,0.72)_100%)]" />

          <div className="relative z-10 flex min-h-168 items-center justify-center px-6 py-20 text-center">
            <div className="max-w-5xl">
              <h2
                className="about-scroll-item about-scroll-rise font-serif text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]"
                style={{ transitionDelay: "120ms" }}
              >
                Start your journey to organic for
                <br />
                living now today
              </h2>

              <a
                href="#contact"
                className="about-scroll-item about-scroll-soft mt-12 inline-flex min-w-56 items-center justify-center bg-[#bb8d48] px-8 py-5 text-2xl font-semibold text-white transition hover:bg-[#e0ab5d]"
                style={{ transitionDelay: "220ms" }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
