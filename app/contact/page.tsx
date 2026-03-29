
"use client";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import ContactHero from "../../components/Contact/hero";
import ContactSection from "../../components/Home/ContactSection";

import Footer from "../../components/Footer";
import ContactMapPage from "../../components/Contact/map";


export default function ContactPage() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="min-h-screen bg-linear-to-b from-[#edf4e2] via-[#f8fbf2] to-[#dde9ca]">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className={menuOpen ? "transition-all duration-300 filter blur-sm pointer-events-none select-none" : "transition-all duration-300"}>
				<ContactHero />
				<ContactMapPage />
				<ContactSection />
				<Footer />
			</div>
		</div>
	);
}
