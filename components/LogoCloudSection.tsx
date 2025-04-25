"use client";

import Image from "next/image";

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
      <div className="w-full overflow-hidden relative">
        <style jsx>{`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% + 100vw)); }
          }
          .logo-container {
            display: flex;
            gap: 4rem;
            animation: logo-scroll 30s linear infinite;
            will-change: transform;
            width: max-content;
          }
          .logo-item {
            flex: 0 0 auto;
            min-width: 120px;
          }
        `}</style>
        <div className="logo-container">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="logo-item h-14 md:h-20 flex items-center justify-center">
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