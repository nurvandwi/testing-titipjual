"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CTA() {
  const [decorativeSrc, setDecorativeSrc] = useState<string | null>(null);

  useEffect(() => {
    // Try to load decorative element from localhost server
    const testImage = document.createElement("img");
    testImage.onload = () => setDecorativeSrc("http://localhost:3845/assets/frame2095585194.png");
    testImage.onerror = () => setDecorativeSrc(null);
    testImage.src = "http://localhost:3845/assets/frame2095585194.png";
  }, []);
  return (
    <section className="flex flex-col gap-[24px] items-center px-4 sm:px-8 md:px-[68px] py-[60px] relative w-full">
      <div className="flex gap-[6px] items-center overflow-hidden px-8 sm:px-16 md:px-[128px] py-8 sm:py-12 md:py-[64px] relative rounded-[24px] w-full max-w-[1440px]">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden">
          <Image
            src="/cta-bg.png"
            alt="CTA background"
            fill
            className="object-cover rounded-[24px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[32px] items-start relative z-10 w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-[16px] items-start leading-[0] relative w-full">
            <h2 className="font-lato font-bold h-auto min-h-[143px] justify-center leading-normal relative text-[#f4ecf5] text-3xl sm:text-4xl md:text-[44px] w-full max-w-[881px]">
              <p className="mb-0">Coba Titip Jual dan Rasakan</p>
              <p>Keuntungannya</p>
            </h2>
            <p className="font-lato font-normal justify-center relative text-[16px] text-white whitespace-pre leading-[24px]">
              Ayo segera coba sekarang untuk mendapatkan keuntungan lebih cepat
            </p>
          </div>

          {/* Button */}
          <button className="flex items-start relative">
            <div className="flex items-center relative">
              <div className="bg-[#f4ecf5] flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] hover:opacity-90 transition-opacity">
                <p className="font-lato font-bold leading-[20px] relative text-[#8f3f97] text-[14px] text-center whitespace-nowrap">
                  Daftar Titip Jual Sekarang
                </p>
                <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L10 8L6 12V4Z"
                      fill="#8f3f97"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Decorative Element - Right Side */}
        <div className="absolute w-[81.375rem] h-[66.25rem] right-[-59.1875rem] top-[calc(50%+12.38px)] -translate-y-1/2 pointer-events-none hidden lg:block overflow-hidden">
          <div className="absolute inset-0">
            {decorativeSrc ? (
              <img
                src={decorativeSrc}
                alt="Decorative element"
                className="w-full h-full object-contain"
              />
            ) : (
              /* Fallback CSS decorative element with curved bands - matching Figma design */
              <div className="absolute inset-0" style={{
                background: 'conic-gradient(from 0deg at right center, rgba(168, 85, 247, 0.95) 0deg, rgba(139, 92, 246, 0.9) 60deg, rgba(20, 184, 166, 0.85) 120deg, rgba(16, 185, 129, 0.9) 180deg, rgba(34, 197, 94, 0.95) 240deg, rgba(20, 184, 166, 0.85) 300deg, rgba(139, 92, 246, 0.9) 360deg)',
                borderRadius: '0 24px 24px 0',
                clipPath: 'ellipse(1302px 1060px at right center)',
              }}>
                {/* Additional curved bands overlay for depth */}
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 600px 800px at 85% center, rgba(16, 185, 129, 0.6) 0%, transparent 50%)',
                  mixBlendMode: 'screen',
                }} />
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse 400px 600px at 90% center, rgba(34, 197, 94, 0.5) 0%, transparent 60%)',
                  mixBlendMode: 'screen',
                }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

