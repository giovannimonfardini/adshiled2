import Image from "next/image";

export default function HandlePaymentsSection() {
  return (
    <section
      className="w-full min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4 bg-[#07000D]"
      style={{ background: "#07000D" }}
    >
      {/* Globo estilizado */}
      <div className="relative w-full flex items-center justify-center mb-8" style={{ minHeight: 340, maxWidth: 700 }}>
        <Image
          src="/images/globo.png"
          alt="Globe Payments"
          width={700}
          height={340}
          className="mx-auto select-none pointer-events-none"
          style={{ objectFit: "contain", maxWidth: "90vw", height: "auto" }}
          priority
        />
      </div>
      {/* Título principal */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#f4f4f4] text-center mb-4 mt-2 leading-tight">
        A espinha dorsal&nbsp;<span className="inline-block">da publicidade Global</span>
      </h1>
      {/* Subtítulo */}
      <p className="text-base md:text-lg text-[#bfc8e6] text-center max-w-2xl mb-10 mt-2">
        Accept payments from anywhere in the world. We'll handle tax, currency conversion, and everything else you can imagine.
      </p>
      {/* Stats Bar */}
      <div className="w-full bg-[#1c1f3a] py-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 rounded-xl max-w-5xl mx-auto mb-2">
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-white text-4xl md:text-5xl font-bold mb-2">1500+</span>
          <span className="text-[#cfd2e7] text-base md:text-lg">clients worldwide</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-white text-4xl md:text-5xl font-bold mb-2">$600M+</span>
          <span className="text-[#cfd2e7] text-base md:text-lg">ad spend per year</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <span className="text-white text-4xl md:text-5xl font-bold mb-2">0.2%</span>
          <span className="text-[#cfd2e7] text-base md:text-lg">ban rate</span>
        </div>
      </div>
    </section>
  );
}
