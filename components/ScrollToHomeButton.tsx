"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";

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
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMessageClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6f8d45] bg-[linear-gradient(180deg,#355734_0%,#243c25_100%)] text-[#f4f8ec] shadow-[0_18px_40px_rgba(19,31,18,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fae63] hover:bg-[linear-gradient(180deg,#426a40_0%,#2a462b_100%)]"
      >
        <FaEnvelope className="text-sm" />
      </button>

      <button
        type="button"
        aria-label="Scroll to home section"
        onClick={handleClick}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#6f8d45] bg-[linear-gradient(180deg,#355734_0%,#243c25_100%)] text-[#f4f8ec] shadow-[0_18px_40px_rgba(19,31,18,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fae63] hover:bg-[linear-gradient(180deg,#426a40_0%,#2a462b_100%)]"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </div>
  );
}