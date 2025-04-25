"use client";

import Image from "next/image";
import React from "react";

const logos = [
  { src: "/images/Google-Youtube.svg", alt: "Google" },
  { src: "/images/meta.png", alt: "Facebook" },
  { src: "/images/Taboola.svg", alt: "Taboola" },
  { src: "/images/tiktok.svg", alt: "TikTok" },
  { src: "/images/snapchat.png", alt: "Snapchat" },
];

export function LogoCloudSection() {
  return (
    <section className="w-full bg-transparent py-10 flex flex-col items-center">
      <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-6 tracking-tight text-center">
        Nossos clientes confiam nas melhores plataformas:
      </h2>
      <div className="overflow-x-auto scrollbar-hide w-full">
        <div className="flex gap-16 animate-logo-scroll whitespace-nowrap items-center w-max py-2">
          {logos.concat(logos).map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center h-14 md:h-20 min-w-[120px] animate-logo-spin">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tailwind animation (adicione no tailwind.config.js):
// theme: { extend: { keyframes: { 'logo-scroll': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } }, animation: { 'logo-scroll': 'logo-scroll 24s linear infinite' } } }
// theme: { extend: { keyframes: { 'logo-spin': { '100%': { transform: 'rotate(360deg)' } } }, animation: { 'logo-spin': 'logo-spin 4s linear infinite' } } }
