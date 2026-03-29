"use client";
import { useEffect, useState } from "react";

const productImages = [
	"https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Modern living room furniture
	"https://images.unsplash.com/photo-1664711942326-2c3351e215e6?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cozy bedroom furniture
	"https://images.unsplash.com/photo-1743132463989-d4c3b1bd43f3?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Elegant dining furniture
];

export default function ProductHero() {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const intervalId = window.setInterval(() => {
				setActiveImageIndex((currentIndex) => (currentIndex + 1) % productImages.length);
			}, 2500);
			return () => window.clearInterval(intervalId);
		}
	}, []);

	return (
		<section className="relative overflow-hidden bg-[#ecd8c3] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36">
			<div className="absolute inset-0 overflow-hidden">
				{productImages.map((image, index) => (
					<div
						key={image}
						className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
							index === activeImageIndex
								? "animate-hero-classic opacity-100 translate-x-0"
								: index < activeImageIndex || (activeImageIndex === 0 && index === productImages.length - 1)
									? "opacity-0 -translate-x-8"
									: "opacity-0 translate-x-8"
						}`}
						style={{ backgroundImage: `url(${image})` }}
					/>
				))}
			</div>

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,148,65,0.10),transparent_28%)]" />

			<div className="relative min-h-160 sm:min-h-190 lg:min-h-176">
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.68)_42%,rgba(20,27,17,0.38)_72%,rgba(20,27,17,0.56)_100%)] lg:bg-[linear-gradient(90deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.56)_34%,rgba(20,27,17,0.22)_60%,rgba(20,27,17,0.46)_100%)]" />

				<div className="relative mx-auto flex min-h-160 max-w-7xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
					<div className="max-w-3xl pt-2 text-white">
						<div className="pt-8 sm:pt-0">
							<div className="inline-flex border border-white/25 bg-white/20 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
								Our Product Collection
							</div>
						</div>

						<h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[4.75rem]">
							Discover Furniture for Every Room
						</h1>

						<p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
							Explore our curated range of furniture—crafted for comfort, style, and lasting quality. Find the perfect piece to elevate every room in your home.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-45">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">Living Room</span>
								<span className="text-sm text-[#7c4a03]">Sofas, Coffee Tables, Chairs</span>
							</div>
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-45">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">Bedroom</span>
								<span className="text-sm text-[#7c4a03]">Beds, Dressers, Nightstands</span>
							</div>
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-45">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">Dining</span>
								<span className="text-sm text-[#7c4a03]">Tables, Chairs, Cabinets</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
