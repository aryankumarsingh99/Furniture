

"use client";
import React, { useState } from "react";
import { FaCouch, FaChair, FaTable, FaBed } from "react-icons/fa";

export default function ProductFAQSection() {
  const faqs = [
    {
      question: "About our profile?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.",
    },
    {
      question: "News and topics?",
      answer: "Stay updated with our latest news and trending topics in the industry.",
    },
    {
      question: "How to use?",
      answer: "Find out how to use our products and services with our easy-to-follow guides.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: FAQ content */}
        <div className="flex-1 max-w-xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#3a4266] mb-6">Frequently Asked Questions</h2>
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search question here"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full rounded-full border border-[#e0e0e0] bg-gradient-to-r from-[#f7f3ee] to-[#f7f3ee] py-3 pl-6 pr-12 text-base text-[#3a4266] focus:outline-none focus:ring-2 focus:ring-[#bb8d48] placeholder-[#b0b0b0]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b0b0b0]">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="#b0b0b0" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#b0b0b0" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
            </div>
          </div>
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
