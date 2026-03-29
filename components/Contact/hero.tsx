"use client";
import React, { useEffect, useState } from "react";

const contactHeroImages = [
	"https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 ];

export default function ContactHero() {
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveImageIndex((currentIndex) => (currentIndex + 1) % contactHeroImages.length);
		}, 2500);
		return () => window.clearInterval(intervalId);
	}, []);

	return (
		<section
			id="contact-hero"
			className="relative overflow-hidden bg-[#f7ede2] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36"
		>
			<div className="absolute inset-0 overflow-hidden">
				{contactHeroImages.map((image, index) => (
					<div
						key={image}
						className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
							index === activeImageIndex
								? "animate-hero-classic opacity-100 translate-x-0"
								: index < activeImageIndex || (activeImageIndex === 0 && index === contactHeroImages.length - 1)
									? "opacity-0 -translate-x-8"
									: "opacity-0 translate-x-8"
						}`}
						style={{ backgroundImage: `url(${image})` }}
					/>
				))}
			</div>

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,161,129,0.13),transparent_28%)]" />

			<div className="relative min-h-160 sm:min-h-190 lg:min-h-176 flex items-center">
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(123,94,60,0.82)_0%,rgba(123,94,60,0.68)_42%,rgba(123,94,60,0.38)_72%,rgba(123,94,60,0.56)_100%)] lg:bg-[linear-gradient(90deg,rgba(123,94,60,0.82)_0%,rgba(123,94,60,0.56)_34%,rgba(123,94,60,0.22)_60%,rgba(123,94,60,0.46)_100%)]" />

				<div className="relative mx-auto flex min-h-160 max-w-7xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
					<div className="max-w-2xl pt-2 text-white">
						<div className="pt-8 sm:pt-0">
							<div className="inline-flex border border-white/25 bg-white/20 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
								Get in Touch
							</div>
						</div>

						<h1 className="mt-5 max-w-3xl font-serif text-[2rem] leading-[1.06] sm:mt-6 sm:text-4xl lg:text-[3rem]">
							We're Here to Help You Connect
						</h1>

						<p className="mt-5 max-w-xl text-[15px] leading-7 text-white/85 sm:mt-6 sm:text-lg sm:leading-8">
							Reach out for inquiries, support, or just to say hello. Our team is ready to assist you with your furniture needs, custom orders, and more.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
