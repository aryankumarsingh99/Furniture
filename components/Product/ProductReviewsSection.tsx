
"use client";
import React, { useState } from "react";

export default function ProductReviewsSection() {
  const reviews = [
    {
      name: "Priya S.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "Absolutely love the quality and comfort of the sofa. Highly recommended!",
    },
    {
      name: "Rahul M.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      text: "The dining table is sturdy and looks beautiful in our home.",
    },
    {
      name: "Ayesha K.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "Elegant designs and fast delivery. Will shop again!",
    },
    {
      name: "Vikram T.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      text: "Great craftsmanship. The chairs are both stylish and comfortable.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 px-4 sm:px-8 bg-[linear-gradient(180deg,#ebd6c0_0%,#ffffff_100%)] border-b border-[#c8d6b0]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2a3523] mb-8 text-center animate-fade-in-up">Customer Reviews</h2>
        <div className="relative flex items-center justify-center">
          <button
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-0 z-10 bg-[#fff8ef] border border-[#bb8d48] rounded-full p-2 shadow hover:bg-[#bb8d48] hover:text-[#fff8ef] transition-colors duration-200"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#bb8d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="w-full max-w-md mx-auto">
            <div className="relative bg-white/80 border border-[#bb8d48] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center animate-fade-in-up">
              <img
                src={reviews[current].avatar}
                alt={reviews[current].name}
                className="w-16 h-16 rounded-full border-4 border-[#ebd6c0] object-cover mb-3 shadow"
                loading="lazy"
              />
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < reviews[current].rating ? 'text-[#bb8d48]' : 'text-[#e5e7eb]'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#2a3523] text-lg italic mb-3">“{reviews[current].text}”</p>
              <span className="block text-sm font-semibold text-[#bb8d48]">— {reviews[current].name}</span>
            </div>
          </div>
          <button
            aria-label="Next review"
            onClick={next}
            className="absolute right-0 z-10 bg-[#fff8ef] border border-[#bb8d48] rounded-full p-2 shadow hover:bg-[#bb8d48] hover:text-[#fff8ef] transition-colors duration-200"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#bb8d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex gap-2 mt-6 justify-center">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border border-[#bb8d48] ${current === idx ? 'bg-[#bb8d48]' : 'bg-[#fff8ef]'} transition-colors`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
