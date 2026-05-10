import React from "react";
import heroImage from "../../assets/images/hero1.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden lg:h-screen">
      {/* Background Image with subtle zoom effect on load */}
      <img
        src={heroImage}
        alt="Vacation fashion collection"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Gradient Overlay: Darker on the left to make text pop, tinted with a hint of orange */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content Container */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Animated Badge */}
            <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md animate-fade-in">
              <span className="mr-2 h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Summer Collection 2026
            </span>

            {/* Typography with Orange Accent */}
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              Vacation <br />
              <span className="text-orange-500">Ready</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-300 drop-shadow-md">
              Embrace the sun in our 2026 line. Discover lightweight essentials 
              and premium linen designed for the modern traveler.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/shop"
                className="group relative overflow-hidden rounded-full bg-orange-500 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
              >
                Shop Now
              </Link>

              <Link
                to="/collections"
                className="rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-black"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}