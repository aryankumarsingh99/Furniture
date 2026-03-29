
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProductReviewsSection() {
  const reviews = [
    {
      name: "Priya Singh",
      avatar: "https://images.unsplash.com/photo-1659421614911-e77b65eb368a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "Absolutely love the quality and comfort of the sofa. Highly recommended!",
    },
    {
      name: "Rahul M.",
      avatar: "https://images.unsplash.com/photo-1667838692440-8bed6b3481e6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      text: "The dining table is sturdy and looks beautiful in our home.",
    },
    {
      name: "Ayesha K.",
      avatar: "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      text: "Elegant designs and fast delivery. Will shop again!",
    },
    {
      name: "Vikram T.",
      avatar: "https://images.unsplash.com/photo-1632812662039-916d700e23ee?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      text: "Great craftsmanship. The chairs are both stylish and comfortable.",
    },
  ];


  // Duplicate reviews for seamless infinite animation
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-[#f7f3ee] via-[#fdf6e3] to-[#e9e3d7] border-b border-[#c8d6b0] relative overflow-hidden">
      {/* Furniture-themed decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Large faded furniture icons */}
        <svg width="320" height="180" viewBox="0 0 320 180" fill="none" className="absolute top-0 left-0 opacity-40 rotate-[-8deg]">
          <rect x="20" y="110" width="280" height="54" rx="18" fill="#bb8d48" />
          <rect x="60" y="70" width="200" height="54" rx="14" fill="#bb8d48" />
          <rect x="120" y="30" width="80" height="45" rx="12" fill="#bb8d48" />
        </svg>
        {/* Chair icon */}
        <svg width="160" height="240" viewBox="0 0 160 240" fill="none" className="absolute bottom-0 left-32 opacity-40 rotate-6">
          <rect x="40" y="120" width="80" height="80" rx="16" fill="#bb8d48" />
          <rect x="60" y="60" width="40" height="80" rx="12" fill="#bb8d48" />
        </svg>
        {/* Table icon */}
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none" className="absolute bottom-0 right-40 opacity-40 rotate-3">
          <rect x="20" y="60" width="200" height="36" rx="12" fill="#bb8d48" />
          <rect x="40" y="96" width="20" height="20" rx="6" fill="#bb8d48" />
          <rect x="180" y="96" width="20" height="20" rx="6" fill="#bb8d48" />
        </svg>
        {/* Bed icon */}
        <svg width="320" height="120" viewBox="0 0 320 120" fill="none" className="absolute top-20 right-0 opacity-40 -rotate-6">
          <rect x="20" y="60" width="280" height="40" rx="16" fill="#bb8d48" />
          <rect x="40" y="20" width="80" height="40" rx="12" fill="#bb8d48" />
          <rect x="200" y="20" width="80" height="40" rx="12" fill="#bb8d48" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl text-[#2a3523] mb-12 text-center font-bold tracking-tight">Customer Reviews</h2>
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-8 py-4 px-2"
            style={{ width: `${allReviews.length * 340}px` }}
            animate={{ x: [0, -((allReviews.length / 2) * 340)] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 18, ease: "linear" }}
          >
            {allReviews.map((review, idx) => (
              <div
                key={review.name + idx}
                className="min-w-[320px] max-w-xs bg-white/90 border border-[#bb8d48] rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300"
              >
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-[#ebd6c0] object-cover mb-4 shadow-lg"
                  loading="lazy"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < review.rating ? 'text-[#bb8d48]' : 'text-[#e5e7eb]'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-lg text-[#3a2c1a] mb-6 leading-relaxed relative z-10">“{review.text}”</p>
                <span className="block text-base font-semibold text-[#bb8d48] tracking-wide">— {review.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
