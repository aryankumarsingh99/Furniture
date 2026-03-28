"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FaBoxOpen,
  FaCog,
  FaEnvelope,
  FaIndustry,
  FaLeaf,
  FaSeedling,
  FaStar,
  FaTruck,
} from "react-icons/fa";

const services = [
  {
    icon: FaSeedling,
    title: "Product Sourcing",
    desc: "Curated selection of premium furniture from trusted manufacturers and artisans.",
    stage: "Sourcing",
    focus: "Quality materials and craftsmanship",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaCog,
    title: "Customization",
    desc: "Personalize your furniture with custom finishes, fabrics, and dimensions.",
    stage: "Customization",
    focus: "Tailored to your style and space",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaBoxOpen,
    title: "Secure Packaging",
    desc: "Careful, damage-resistant packaging for safe delivery to your doorstep.",
    stage: "Packaging",
    focus: "Protection and presentation",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    desc: "Reliable shipping and white-glove delivery options nationwide.",
    stage: "Delivery",
    focus: "Timely and careful handling",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaStar,
    title: "Quality Assurance",
    desc: "Every item is inspected for durability, finish, and design accuracy.",
    stage: "Inspection",
    focus: "Strict quality checks",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Practices",
    desc: "Sustainable sourcing and packaging to reduce environmental impact.",
    stage: "Sustainability",
    focus: "Green materials and processes",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaIndustry,
    title: "Bulk & B2B Orders",
    desc: "Special pricing and services for interior designers, offices, and hospitality.",
    stage: "Business Solutions",
    focus: "Volume orders and project support",
    image:
      "https://images.unsplash.com/photo-1503389152951-9c3d8b6e7f4b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: FaEnvelope,
    title: "Customer Support",
    desc: "Responsive help for orders, product questions, and after-sales care.",
    stage: "Support",
    focus: "Order updates and assistance",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=1200&q=80",
  },
];

const primaryServices = services.slice(0, 4);
const secondaryServices = services.slice(4);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const frameId = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frameId);
    }

    let hasRevealed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          hasRevealed = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`bg-[linear-gradient(180deg,#ebd6c0_0%,#fff8ef_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ${isVisible ? "services-folio-visible" : ""}`.trim()}
    >
      <div className="mx-auto max-w-7xl border border-[#c8d6b0] bg-[#fff8ef] shadow-[0_24px_60px_rgba(187,141,72,0.08)]">
        <div className="grid border-b border-[#c8d6b0] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="services-folio-item services-folio-intro border-b border-[#c8d6b0] bg-[linear-gradient(180deg,#fff8ef_0%,#ebd6c0_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="services-folio-item services-folio-soft inline-flex border border-[#bb8d48] bg-[#fff8ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#bb8d48]" style={{ transitionDelay: "40ms" }}>
              Our Services
            </div>
            <h2 className="services-folio-item services-folio-intro mt-5 max-w-lg font-serif text-3xl leading-tight text-[#2a3523] sm:text-4xl lg:text-[3rem]" style={{ transitionDelay: "110ms" }}>
              Everything for a beautiful, functional home—delivered with care.
            </h2>
            <p className="services-folio-item services-folio-intro mt-5 max-w-xl text-base leading-8 text-[#5a4a2c]" style={{ transitionDelay: "180ms" }}>
              Discover our full-service furniture e-commerce experience: from sourcing stylish pieces and custom options, to secure packaging, fast delivery, and dedicated support. We make it easy to furnish your space with quality, comfort, and confidence—every step of the way.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="services-folio-item services-folio-chip border border-[#bb8d48] bg-[#fff8ef] px-4 py-4" style={{ transitionDelay: "250ms" }}>
                <div className="text-2xl font-semibold text-[#bb8d48]">08</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#bb8d48]">Service lines</div>
              </div>
              <div className="services-folio-item services-folio-chip border border-[#bb8d48] bg-[linear-gradient(135deg,#fff8ef_0%,#ebd6c0_100%)] px-4 py-4" style={{ transitionDelay: "320ms" }}>
                <div className="text-2xl font-semibold text-[#bb8d48]">Field to dispatch</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#bb8d48]">Linked workflow</div>
              </div>
              <div className="services-folio-item services-folio-chip border border-[#bb8d48] bg-[linear-gradient(135deg,#fff8ef_0%,#ebd6c0_100%)] px-4 py-4" style={{ transitionDelay: "390ms" }}>
                <div className="text-2xl font-semibold text-[#bb8d48]">Buyer-led</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#bb8d48]">Execution focus</div>
              </div>
            </div>
          </div>

          <div className="grid bg-[linear-gradient(180deg,#fff8ef_0%,#ebd6c0_100%)] sm:grid-cols-2">
            {primaryServices.map((service, index) => {
              const borderClasses = index === 0 || index === 2 ? "sm:border-r" : "";
              const removeBottomBorder = index > 1 ? "sm:border-b-0" : "";

              return (
                <article
                  key={service.title}
                  className={`services-folio-item services-folio-card group relative min-h-72 overflow-hidden border-b border-stone-300 last:border-b-0 sm:min-h-80 ${borderClasses} ${removeBottomBorder}`}
                  style={{ transitionDelay: `${160 + index * 90}ms` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services-folio-image absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(187,141,72,0.18)_0%,rgba(44,32,18,0.82)_100%)]" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center border border-[#bb8d48]/40 bg-[#bb8d48]/55 text-xl text-[#fff8ef] backdrop-blur-sm">
                        <service.icon />
                      </div>
                      <div className="border border-[#bb8d48]/35 bg-[#fff8ef]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48] backdrop-blur-sm">
                        {service.stage}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bb8d48]">
                        Service {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-3 max-w-xs font-serif text-3xl leading-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-[#fff8ef]">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-[#bb8d48] bg-[linear-gradient(180deg,rgba(255,248,239,0.98)_0%,rgba(235,214,192,0.98)_100%)] px-6 py-5 text-[#bb8d48] transition duration-500 group-hover:translate-y-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                      Operational focus
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#5a4a2c]">{service.focus}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div>
          <div>
            {secondaryServices.map((service, index) => (
              <article
                key={service.title}
                className="services-folio-item services-folio-row group grid border-b border-[#c8d6b0] last:border-b-0 lg:grid-cols-[140px_1fr]"
                style={{ transitionDelay: `${220 + index * 90}ms` }}
              >
                <div className="flex items-center justify-between border-b border-[#c8d6b0] bg-[linear-gradient(180deg,#fff8ef_0%,#ebd6c0_100%)] px-6 py-5 lg:border-b-0 lg:border-r lg:py-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bb8d48]">
                    {String(index + 5).padStart(2, "0")}
                  </div>
                  <div className="inline-flex h-11 w-11 items-center justify-center border border-[#bb8d48] bg-[#fff8ef] text-[#bb8d48]">
                    <service.icon className="text-lg" />
                  </div>
                </div>

                <div className="relative overflow-hidden bg-[#fff8ef]">
                  <div className="relative z-10 grid gap-5 p-6 transition duration-500 group-hover:translate-x-3 sm:p-7 lg:grid-cols-[1fr_260px] lg:items-center">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                        {service.stage}
                      </div>
                      <h3 className="mt-2 font-serif text-2xl text-[#2a3523]">{service.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5a4a2c] sm:text-base">{service.desc}</p>
                    </div>

                    <div className="border border-[#bb8d48] bg-[linear-gradient(180deg,#fff8ef_0%,#ebd6c0_100%)] px-4 py-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bb8d48]">
                        Focus
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#5a4a2c]">{service.focus}</p>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 right-0 hidden w-60 translate-x-full border-l border-[#bb8d48] bg-[#ebd6c0] transition duration-500 group-hover:translate-x-0 lg:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(187,141,72,0.12)_0%,rgba(44,32,18,0.54)_100%)]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="services-folio-item services-folio-soft border-t border-[#bb8d48] bg-[linear-gradient(90deg,#fff8ef_0%,#ebd6c0_52%,#fff8ef_100%)] px-6 py-6 sm:px-8 lg:px-10" style={{ transitionDelay: "540ms" }}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-[#5a4a2c] sm:text-base">
              Our process is simple: source premium furniture, offer customization, package with care, deliver quickly, and support you before and after your purchase.
            </p>
            <a
              href="#contact"
              className="inline-flex w-fit items-center border border-[#bb8d48] bg-[#bb8d48] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a97a2c]"
            >
              Discuss your requirement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
