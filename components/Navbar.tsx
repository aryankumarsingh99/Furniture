'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSeedling } from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/products", label: "Products" },
  { path: "/process", label: "Process" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Remove activeSection and scroll logic for file-based routing
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };
  
  // Accept logoSrc as a prop for easy logo change
  const logoSrc = "/logo1.jpeg"; // Change this value to use a different logo

  return (
    <nav className="fixed left-0 top-3 z-50 w-full -translate-x-0 md:top-4">
      <div
        className={`animate-navbarReveal px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? 'bg-[#bb8d48]' : 'bg-[#fcf9f1]'}`}
      >
        <div className="relative z-60 flex h-26 items-center justify-between md:h-20 lg:h-26 md:justify-center">
          <Link href="/" className="flex items-center gap-3 md:absolute md:left-0">
            <div className={`flex h-11 w-11 items-center justify-center border ml-4 md:ml-55 ${scrolled ? 'bg-[#bb8d48] text-[#fcf9f1]' : 'bg-[#fcf9f1] text-[#7c4a03]'}`}>
              {/* Logo image */}
              <img
                src={"logo.png"}
                alt="Logo"
                className="h-54 w-44 scale-243 object-contain rounded-full"
                style={{ display: 'block' }}
              />
            </div>
             
          </Link>

          <div className="hidden items-center pl-65 gap-4 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-4 py-3 text-lg font-bold uppercase tracking-[0.16em] transition-colors duration-300
                    ${scrolled ? 'text-[#f7ecd7] hover:text-[#fcf9f1]' : 'text-[#422912] hover:text-[#7c4a03]'}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-0.5 rounded transition-all duration-500 ease-in-out ${
                      scrolled ? 'bg-[#fcf9f1]' : 'bg-[#7c4a03]'
                    } ${isActive ? 'w-[calc(100%-2rem)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-70'}`}
                    style={{
                      transitionProperty: 'width, opacity',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className={`inline-flex items-center gap-3 border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 md:hidden border-[#e2c9a0] ${scrolled ? 'bg-[#bb8d48] text-[#fcf9f1]' : 'bg-[#fcf9f1] text-[#7c4a03]'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="relative h-5 w-5 shrink-0">
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-[#fcf9f1]' : 'bg-[#7c4a03]'} ${menuOpen ? 'translate-y-0 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 rounded transition-all duration-300 ${scrolled ? 'bg-[#fcf9f1]' : 'bg-[#7c4a03]'} ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-[#fcf9f1]' : 'bg-[#7c4a03]'} ${menuOpen ? 'translate-y-0 -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>
 

      {/* Overlay for menu close */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
      {/* Slide-in drawer menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs transform transition-transform duration-300 md:hidden
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ boxShadow: menuOpen ? 'rgba(0,0,0,0.12) -4px 0px 24px' : undefined }}
        aria-hidden={!menuOpen}
      >
        <div className={`h-full border-l border-[#e2c9a0] ${scrolled ? 'bg-[#bb8d48]' : 'bg-[#fcf9f1]'} p-4 flex flex-col`}>
          <div className="flex items-center justify-between pb-4">
            <div>
              <div className={`font-serif text-xl ${scrolled ? 'text-[#fcf9f1]' : 'text-[#7c4a03]'}`}>Quick navigation</div>
              <div className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${scrolled ? 'text-[#f7ecd7]' : 'text-[#a67c52]'}`}>Mobile menu</div>
            </div>
            <button
              className={`ml-2 rounded px-2 py-1 text-xs font-bold uppercase tracking-wider border border-[#e2c9a0] ${scrolled ? 'bg-[#f7ecd7] text-[#7c4a03]' : 'bg-[#e2c9a0] text-[#7c4a03]'}`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`relative px-4 py-4 text-left text-base font-semibold uppercase tracking-[0.16em] rounded transition-all duration-300
                    ${scrolled ? 'bg-[#bb8d48] text-[#fcf9f1] hover:bg-[#f7ecd7] hover:text-[#7c4a03]' : 'bg-[#fcf9f1] text-[#422912] hover:bg-[#e2c9a0] hover:text-[#7c4a03]'}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-0.5 rounded transition-all duration-500 ease-in-out ${
                      scrolled ? 'bg-[#fcf9f1]' : 'bg-[#7c4a03]'
                    } ${isActive ? 'w-[calc(100%-2rem)] opacity-100' : 'w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-70'}`}
                    style={{
                      transitionProperty: 'width, opacity',
                    }}
                  />
                </Link>
              );
            })}
          </div>
          <div className={`mt-4 pt-4 text-sm leading-7 ${scrolled ? 'text-[#fcf9f1]' : 'text-[#7c4a03]'}`}>
            Explore our premium furniture collection, arranged in a modern mobile drawer.
          </div>
        </div>
      </div>
    </nav>
  );
}
