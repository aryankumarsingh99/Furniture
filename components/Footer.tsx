
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaCouch, FaWhatsapp, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { GiBedLamp } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#f7ede2] to-[#e7d3b7] px-4 py-14 text-[#7c5e3c] sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative faded sofa and lamp icons background */}
      <FaCouch className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ebc38b] opacity-70 text-[420px] z-0 hidden md:block" />
      <GiBedLamp className="pointer-events-none select-none absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 text-[#ebc38b] opacity-90 text-[220px] z-0 hidden md:block" />
      <div className="mx-auto max-w-7xl animate-footerReveal">
        <div className="grid gap-10 border-b border-[#e7d3b7] pb-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="inline-flex  items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-36 w-36 object-contain rounded-full border border-[#e7d3b7] bg-[#fff7ee]"
                style={{ display: 'block' }}
              />
            </div>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#a47551]">
              Elevate your home with our curated collection of modern, sustainable furniture and decor. Crafted for comfort, designed for style.
            </p>
            <div className="mt-5 border-l-4 border-[#bfa181]/20 pl-4 text-base leading-7 text-[#a47551]">
              Visit our showrooms or shop online for exclusive deals and personalized design advice.
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47551]">Quick links</div>
            <div className="mt-4 space-y-3 text-base text-[#7c5e3c]">
              <div>
                <Link href="/" className="transition hover:text-[#b85c38]">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/about#about" className="transition hover:text-[#b85c38]">
                  About
                </Link>
              </div>
              <div>
                <Link href="/contact" className="transition hover:text-[#b85c38]">
                  Contact
                </Link>
              </div>
              <div>
                <Link href="/products" className="transition hover:text-[#b85c38]">
                  Products
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47551]">Shop</div>
            <div className="mt-4 flex flex-col gap-3 text-base text-[#7c5e3c] sm:flex-row sm:gap-8">
              <div className="space-y-3">
                <div><Link href="/products#product-modern-sofa" className="transition hover:text-[#b85c38]">Modern Sofa</Link></div>
                <div><Link href="/products#product-dining-table" className="transition hover:text-[#b85c38]">Recliner Sofa</Link></div>
                <div><Link href="/products#product-bedroom-set" className="transition hover:text-[#b85c38]">Sleeper Sofa</Link></div>
                <div><Link href="/products#product-bookshelf" className="transition hover:text-[#b85c38]">Sectional Sofa</Link></div>
                <div><Link href="/products#product-armchair" className="transition hover:text-[#b85c38]">Classic Sofa</Link></div>
              </div>
              <div className="space-y-3">
                <div><Link href="/products#product-coffee-table" className="transition hover:text-[#b85c38]">Premium Comfort Bed</Link></div>
                <div><Link href="/products#product-tv-stand" className="transition hover:text-[#b85c38]">Wooden Bed</Link></div>
                <div><Link href="/products#product-desk" className="transition hover:text-[#b85c38]">Artificial Bed</Link></div>
                <div><Link href="/products#product-dresser" className="transition hover:text-[#b85c38]">Modern Bed</Link></div>
                <div><Link href="/products#product-nightstand" className="transition hover:text-[#b85c38]">Oak Dining Table</Link></div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47551]">Showroom</div>
            <div className="mt-4 space-y-3 text-base leading-7 text-[#a47551]">
              <div>POWER HOUSE, NH 326, GLOCAL MEDICAL ROAD, Jeypore, Odisha , 764001</div>
              <div className="flex items-center gap-3">
                <span>Mon - Sat</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#b96a4b]" />
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#b96a4b]" />
                <a href="tel:+919937099989" className="hover:underline text-[#a47551] ">+91 99370 99989</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#b96a4b] size-6" />
                <a href="mailto:rajlaxmiwoodenfurniture9989@gmail.com" className="hover:underline text-[#a47551]  break-all">rajlaxmiwoodenfurniture9989@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a47551]">Connect</div>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/share/1AjG43ALnF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center bg-[#fff7ee] text-[#b85c38] transition hover:bg-[#e7d3b7]">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://www.instagram.com/rajlaxmi_wooden_furnitures_?igsh=MXEzNjBqanNqNDUxcg==" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center bg-[#fff7ee] text-[#b85c38] transition hover:bg-[#e7d3b7]">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/+919583245585" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center bg-[#fff7ee] text-[#b85c38] transition hover:bg-[#e7d3b7]" aria-label="Chat on WhatsApp">
                <FaWhatsapp className="text-xl" />
              </a>
              
            </div>
          </div>
        </div>
        

        <div className="flex flex-col gap-3 pt-8 text-base text-[#a47551] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 <span className="font-semibold">Swiftrise Solution Pvt.Ltd </span>. All rights reserved.</p>
          <p>Crafted with passion for modern living.</p>
        </div>
      </div>
      {/* ...existing code... */}
    </footer>
  );
}
