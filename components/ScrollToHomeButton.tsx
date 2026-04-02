"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ScrollToHomeButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMessageClick = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      const whatsappUrl = "https://wa.me/+919583245585";
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`fixed bottom-12 right-8 z-70 flex flex-col gap-3 transition-all duration-300 sm:bottom-16 sm:right-10 ${
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Scroll to contact section"
        onClick={handleMessageClick}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bb8d48] bg-linear-to-b from-[#ffe9b0] to-[#bb8d48] text-[#7c5e3c] shadow-[0_8px_24px_rgba(187,141,72,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfa76a] hover:bg-linear-to-b hover:from-[#fff9ed] hover:to-[#ffe9b0]"
      >
        <FaEnvelope className="text-lg" />
      </button>

      <button
        type="button"
        aria-label="Open WhatsApp chat"
        onClick={handleWhatsAppClick}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bb8d48] bg-linear-to-b from-[#ffe9b0] to-[#bb8d48] text-[#7c5e3c] shadow-[0_8px_24px_rgba(187,141,72,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfa76a] hover:bg-linear-to-b hover:from-[#fff9ed] hover:to-[#ffe9b0]"
      >
        <FaWhatsapp className="text-xl" />
      </button>

      <button
        type="button"
        aria-label="Scroll to home section"
        onClick={handleClick}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#bb8d48] bg-linear-to-b from-[#ffe9b0] to-[#bb8d48] text-[#7c5e3c] shadow-[0_8px_24px_rgba(187,141,72,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfa76a] hover:bg-linear-to-b hover:from-[#fff9ed] hover:to-[#ffe9b0]"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
}