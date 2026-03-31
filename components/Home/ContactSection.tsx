"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
 
const formEndpoint = "https://formsubmit.co/Sumitswiftrise@gmail.com";

export default function ContactSection() {
    const contactInfo = [
      {
        icon: <FaPhoneAlt className="text-base" />,
        label: "Phone",
        value: "+91 9583245585",
      },
      {
        icon: <FaEnvelope className="text-base" />,
        label: "Email",
        value: "rajlaxmiwoodenfurniture9989@gmail.com",
      },
      {
        icon: <FaMapMarkerAlt className="text-base" />,
        label: "Showroom Location",
        value: "POWER HOUSE, NH 326, GLOCAL MEDICAL ROAD, Jeypore, Odisha , 764001",
      },
    ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Furniture website enquiry");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    // Collect all selected product titles and join them for email
    const selectedProducts = formData.getAll("productTitle");
    if (selectedProducts.length > 0) {
      formData.set("productTitle", selectedProducts.join(", "));
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSubmitMessage({
        type: "success",
        text: "Thank you for reaching out! Your message has been sent successfully. Our furniture team will get back to you soon.",
      });
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Sorry, we couldn't send your message at this time. Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7ede2] bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
 
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.div
            className="border border-[#bfa181]/70 bg-[#f5e9da]/70 p-6 shadow-[0_24px_80px_rgba(191,161,129,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "backOut" }}
          >
            <div className="inline-flex border border-[#bfa181]/70 bg-[#f7e6d4]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7c5e3c] backdrop-blur-sm">
              Customer Support
            </div>
            <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#7c5e3c] sm:text-4xl lg:text-[3rem]">
              Contact our Furniture Experts
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#a47551]">
              Have questions about our furniture, custom orders, or delivery? Reach out to our team and we’ll be happy to assist you.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="animate-contactReveal grid grid-cols-[52px_1fr] items-center gap-4 border border-[#bfa181]/70 bg-[#f7e6d4]/80 px-4 py-4 backdrop-blur-md"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#bfa181] bg-[#f5e9da] text-[#a47551] backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">{item.label}</div>
                    <div className="mt-1 text-sm leading-6 text-[#7c5e3c] sm:text-base break-all">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border border-[#bfa181]/70 bg-[#f5e9da]/70 p-6 shadow-[0_24px_80px_rgba(191,161,129,0.18)] backdrop-blur-xl sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "backOut" }}
          >
            <div className="animate-contactReveal border border-[#bfa181]/70 bg-[#f7e6d4]/90 p-5 backdrop-blur-lg sm:p-6 lg:p-8">
              <div className="pb-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">
                  Message Us
                </div>
                <div className="mt-2 font-serif text-2xl text-[#7c5e3c]">How can we help you?</div>
              </div>

              <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full border border-[#bfa181]/70 bg-[#f7ede2]/80 px-4 py-3 text-sm text-[#7c5e3c] outline-none backdrop-blur-md transition focus:bg-[#f5e9da]/90"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
                  <div className="grid gap-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full border border-[#bfa181]/70 bg-[#f7ede2]/80 px-4 py-3 text-sm text-[#7c5e3c] outline-none backdrop-blur-md transition focus:bg-[#f5e9da]/90"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="e.g. +1 555 123 4567"
                      required
                      className="w-full border border-[#bfa181]/70 bg-[#f7ede2]/80 px-4 py-3 text-sm text-[#7c5e3c] outline-none backdrop-blur-md transition focus:bg-[#f5e9da]/90"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">Product Title</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Recliner",
                      "Wooden Street",
                      "Iriana Cane multipurpose",
                      "Sofa Bed with Storage",
                      "Wooden Bed with Headboard Storage",
                      "Classic Wooden Bed",
                      "Modern Living Room Set",
                      "Large Dining Table",
                      "3-Door Almirah"
                    ].map((title) => (
                      <label key={title} className="flex items-center gap-2 bg-[#f7ede2]/80 px-3 py-2 rounded border border-[#bfa181]/40">
                        <input
                          type="checkbox"
                          name="productTitle"
                          value={title}
                          className="accent-[#bb8d48]"
                        />
                        <span className="text-sm text-[#7c5e3c]">{title}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a47551]">Message</label>
                  <textarea
                    name="message"
                    placeholder="Let us know how we can help you with your furniture needs, custom designs, or delivery."
                    rows={6}
                    required
                    className="w-full resize-none border border-[#bfa181]/70 bg-[#f7ede2]/80 px-4 py-3 text-sm text-[#7c5e3c] outline-none backdrop-blur-md transition focus:bg-[#f5e9da]/90"
                  ></textarea>
                </div>

                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 border border-[#a47551] bg-[#a47551] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7c5e3c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    <FaEnvelope className="text-sm" /> {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>

                {submitMessage ? (
                  <div
                    className={`border px-4 py-3 text-sm leading-6 ${
                      submitMessage.type === "success"
                        ? "border-[#bfa181] bg-[#f5e9da] text-[#7c5e3c]"
                        : "border-[#a47551] bg-[#f7ede2] text-[#a47551]"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                ) : null}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
