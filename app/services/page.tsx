"use client";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";

export default function ServicesPage() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="min-h-screen bg-linear-to-b from-[#edf4e2] via-[#f8fbf2] to-[#dde9ca]">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className={menuOpen ? "transition-all duration-300 filter blur-sm pointer-events-none select-none" : "transition-all duration-300"}>
				<ServicesSection />
				<Footer />
			</div>
		</div>
	);
}
