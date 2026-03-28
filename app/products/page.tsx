"use client";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import ProductHero from "../../components/Product/hero";
import ProductSection from "../../components/Product/ProductSection";
import Footer from "../../components/Footer";
import ProductFeaturesSection from "@/components/Product/ProductFeaturesSection";
import ProductGallerySection from "@/components/Product/ProductGallerySection";
import ProductReviewsSection from "@/components/Product/ProductReviewsSection";
import ProductFAQSection from "@/components/Product/ProductFAQSection";
 

export default function ProductsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-b from-[#edf4e2] via-[#f8fbf2] to-[#dde9ca]">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={menuOpen ? "transition-all duration-300 filter blur-sm pointer-events-none select-none" : "transition-all duration-300"}>
        <ProductHero />
        <ProductGallerySection />
        <ProductSection />
        <ProductFeaturesSection />
        <ProductReviewsSection />
        <ProductFAQSection />
        <Footer />
      </div>
    </div>
  );
}
