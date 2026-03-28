"use client";
import Navbar from "../components/Navbar";
import PromoShowcase from "../components/Home/PromoShowcase";
import StoriesShowcase from "../components/Home/StoriesShowcase";
import StoresShowcase from "../components/Home/StoresShowcase";
import HomeHero from "../components/Home/hero";
import MarqueeSection from "../components/Home/MarqueeSection";

import FeaturesSection from "../components/Home/FeaturesSection";
import DecorSection from "../components/Home/DecorSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-b from-[#edf4e2] via-[#f8fbf2] to-[#dde9ca]">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HomeHero />
      <PromoShowcase />
      <MarqueeSection />
      <StoriesShowcase />
      <StoresShowcase />
      {/* <StatsSection /> */}
      {/* <AboutSection /> */}
      {/* <HeroHighlightSection /> */}
      {/* <ServicesSection /> */}
      {/* <ProductSection /> */}
      {/* <ProcessSection /> */}
      {/* <BannerSection /> */}
      <DecorSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
