

"use client";
import React, { useState } from "react";
import { FaCouch, FaChair, FaTable, FaBed } from "react-icons/fa";

export default function ProductFAQSection() {
  const faqs = [
    {
      question: "About our profile?",
      answer: "Raj Laxmi Wooden Furniture is a leading company dedicated to providing high-quality, stylish, and sustainable furniture solutions. Our mission is to enhance living and working spaces with innovative designs, exceptional craftsmanship, and a commitment to customer satisfaction. With years of experience in the industry, we pride ourselves on our attention to detail, eco-friendly practices, and a wide range of products to suit every need.",
    },
    {
      question: "News and topics?",
      answer: "Stay updated with the latest news, product launches, and industry trends from Raj Laxmi Wooden Furniture. We regularly share updates about our new collections, special offers, and insights into the world of quality wooden furniture.",
    },
    {
      question: "How to use?",
      answer: "Discover how to assemble, care for, and make the most of your Raj Laxmi Wooden Furniture products with our detailed user guides and customer support. We provide step-by-step instructions and tips to ensure you enjoy lasting quality and comfort.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs;

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: FAQ content */}
        <div className="flex-1 max-w-xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3a4266] mb-6">Frequently Asked Questions</h2>
          {/* Search option removed */}
          <div className="divide-y divide-[#ececec] bg-white rounded-2xl shadow-md">
            {filteredFaqs.map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className="w-full flex items-center justify-between py-5 px-6 text-left font-semibold text-[#3a4266] text-lg focus:outline-none transition-colors"
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    {openIdx === idx ? (
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 15l6-6 6 6" stroke="#bb8d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#bb8d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 bg-[#f7f3ee] px-6 ${openIdx === idx ? 'max-h-40 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                  aria-hidden={openIdx !== idx}
                >
                  <p className="text-[#b0b0b0] text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Decorative Furniture Icons */}
        <div className="flex-1 flex justify-center items-center relative min-h-[320px]">
          <FaCouch
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#bb8d48] opacity-45 drop-shadow-xl"
            style={{ fontSize: '13rem', zIndex: 1 }}
            aria-label="Decorative Sofa Icon"
          />
          <FaChair
            className="absolute left-[20%] top-[30%] text-[#bb8d48] opacity-40 rotate-12"
            style={{ fontSize: '6rem', zIndex: 0 }}
            aria-label="Decorative Chair Icon"
          />
          <FaTable
            className="absolute right-[18%] top-[55%] text-[#bb8d48] opacity-40 -rotate-6"
            style={{ fontSize: '5.5rem', zIndex: 0 }}
            aria-label="Decorative Table Icon"
          />
          <FaBed
            className="absolute left-[10%] bottom-[10%] text-[#bb8d48] opacity-30 rotate-3"
            style={{ fontSize: '5rem', zIndex: 0 }}
            aria-label="Decorative Bed Icon"
          />
        </div>
      </div>
    </section>
  );
}
