"use client";
import Navbar from "../components/Navbar";
import PromoShowcase from "../components/Home/PromoShowcase";
import StoriesShowcase from "../components/Home/StoriesShowcase";
 import HomeHero from "../components/Home/hero";
import IllustratorShowcase from "../components/Home/IllustratorShowcase";
import MarqueeSection from "../components/Home/MarqueeSection";
 
import FeaturesSection from "../components/Home/FeaturesSection";
import DecorSection from "../components/Home/DecorSection";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/Footer";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-b from-[#edf4e2] via-[#f8fbf2] to-[#dde9ca]">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`transition-all duration-300 ${menuOpen ? 'blur-md pointer-events-none select-none md:blur-none md:pointer-events-auto md:select-auto' : ''}`}>
        <HomeHero />
        <PromoShowcase />
        <MarqueeSection />
        <StoriesShowcase />
        <IllustratorShowcase />
        {/* <StatsSection /> */}
        {/* <AboutSection /> */}
        {/* <HeroHighlightSection /> */}
        {/* <ServicesSection /> */}
        {/* <ProductSection /> */}
        {/* <ProcessSection /> */}
        <DecorSection />
        <FeaturesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
