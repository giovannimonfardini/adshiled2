"use client";

import React from "react";
import Image from "next/image";
import { LogoCloudSection } from "@/components/LogoCloudSection";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#2d0146] via-[#120013] to-black flex flex-col items-center justify-center px-4 py-16">
      {/* Floating tags */}
      <div className="relative w-full flex justify-center">
        <span className="absolute left-0 top-0 md:left-32 md:top-8 bg-lime-300/80 text-black px-4 py-1 rounded-full text-xs font-medium rotate-[-12deg] shadow-md">
          Ads Production
        </span>
        <span className="absolute right-0 top-0 md:right-32 md:top-8 bg-white text-black px-4 py-1 rounded-full text-xs font-medium rotate-[12deg] shadow-md">
          Video Marketing
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mt-10 text-center font-extrabold text-3xl md:text-6xl text-white tracking-tight">
        ESCALE <span className="text-lime-400 inline-block align-middle text-5xl md:text-7xl mx-2">*</span> SEM ESTRESSE<br className="hidden md:block" />COM NOSSAS CONTAS<span className="text-lime-400">.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-center text-gray-300 text-base md:text-lg">
        This title plays on the familiar phrase associated with filmmaking and implies that your blog will reveal valuable insights and strategies for achieving success.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:suporte@adshieldcontingencia.com"
          className="inline-flex items-center rounded-lg bg-lime-400 text-black font-medium px-6 py-3 text-base shadow hover:bg-lime-300 transition-colors"
        >
          COMECE AGORA
          <span className="ml-2 bg-black rounded-full p-1"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 12h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </a>
        <a
          href="#reel"
          className="inline-flex items-center rounded-lg border border-white text-white font-medium px-6 py-3 text-base hover:bg-white hover:text-black transition-colors"
        >
          Watch reel
        </a>
      </div>
      <LogoCloudSection />
    </section>
  );
}
