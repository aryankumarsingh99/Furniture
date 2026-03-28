"use client";
import React from "react";

const aboutHeroImage = "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1170&auto=format&fit=crop";

export default function AboutHero() {
	return (
		<section className="relative overflow-hidden bg-[#ecd8c3] bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-36">
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-100 translate-x-0"
					style={{ backgroundImage: `url(${aboutHeroImage})` }}
				/>
			</div>

			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,148,65,0.10),transparent_28%)]" />

			<div className="relative min-h-160 sm:min-h-190 lg:min-h-176">
				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.68)_42%,rgba(20,27,17,0.38)_72%,rgba(20,27,17,0.56)_100%)] lg:bg-[linear-gradient(90deg,rgba(20,27,17,0.82)_0%,rgba(20,27,17,0.56)_34%,rgba(20,27,17,0.22)_60%,rgba(20,27,17,0.46)_100%)]" />

				<div className="relative mx-auto flex min-h-160 max-w-7xl items-center px-4 pb-14 sm:min-h-190 sm:px-6 sm:pb-18 lg:min-h-176 lg:px-8 lg:pb-28">
					<div className="max-w-3xl pt-2 text-white">
						<div className="pt-8 sm:pt-0">
							<div className="inline-flex border border-white/25 bg-white/20 rounded-lg px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm shadow-md sm:px-6 sm:text-xs sm:tracking-[0.22em]">
								Our Story & Values
							</div>
						</div>

						<h1 className="mt-5 max-w-4xl font-serif text-[2.2rem] leading-[1.06] sm:mt-6 sm:text-5xl lg:text-[4.75rem]">
							About Our Furniture
						</h1>

						<p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
							Discover the story, values, and craftsmanship behind our timeless furniture collections. We blend tradition and innovation to create pieces that bring warmth, style, and comfort to your everyday life.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-[180px]">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">10+ Years</span>
								<span className="text-sm text-[#7c4a03]">of Craftsmanship</span>
							</div>
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-[180px]">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">Eco Materials</span>
								<span className="text-sm text-[#7c4a03]">Sustainable & Responsible</span>
							</div>
							<div className="rounded-xl bg-white/80 px-6 py-4 shadow-md border border-[#bb8d48] min-w-[180px]">
								<span className="block text-xl font-semibold text-[#bb8d48] mb-1">Custom Designs</span>
								<span className="text-sm text-[#7c4a03]">Tailored for You</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
 