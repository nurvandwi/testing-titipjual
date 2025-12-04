import Image from "next/image";

const partners = [
  { name: "Indra Karya", logo: "/logo-indra-karya.png", width: 122, height: 48 },
  { name: "TAM", logo: "/logo-tam.png", width: 122, height: 48 },
  { name: "TAF", logo: "/logo-taf.png", width: 122, height: 48 },
  { name: "BCA Finance", logo: "/logo-bca-finance.png", width: 122, height: 48 },
  { name: "OTO", logo: "/logo-oto.png", width: 122, height: 48 },
  { name: "TPI", logo: "/logo-tpi.png", width: 122, height: 48 },
  { name: "Sinarmas", logo: "/logo-sinarmas.png", width: 122, height: 48 },
  { name: "APP Sinarmas", logo: "/logo-app-sinarmas.png", width: 122, height: 48 },
  { name: "Buana Finance", logo: "/logo-buana-finance.png", width: 122, height: 48 },
  { name: "SANF", logo: "/logo-sanf.png", width: 122, height: 48 },
  { name: "Dipo Star Finance", logo: "/logo-dipo-star-finance.png", width: 122, height: 48 },
];

export default function Partnership() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-[68px] py-[60px] relative w-full">
      <div className="flex flex-col gap-[48px] items-center justify-center overflow-hidden px-8 sm:px-16 md:px-[128px] py-8 sm:py-12 md:py-[64px] relative rounded-[24px] w-full max-w-[1440px]">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden">
          <Image
            src="/partnership-bg.png"
            alt="Partnership background"
            fill
            className="object-cover rounded-[24px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[72px] items-center justify-center relative w-full z-10 py-[80px]">
          {/* Header */}
          <div className="flex flex-col gap-[10px] items-center justify-center relative w-full">
            <div className="border border-[#e4e4e4] border-solid flex flex-col items-start px-[13px] py-[5px] relative rounded-[1000px]">
              <p className="font-lato font-medium leading-[22px] text-[#f4f4f4] text-[14px] whitespace-nowrap">
                Kerjasama
              </p>
            </div>
            <div className="flex flex-col font-lato font-bold justify-center leading-normal min-w-full relative text-[#f4f4f4] text-3xl sm:text-4xl md:text-[44px] text-center tracking-[-0.88px]">
              <p className="mb-0">Dipercayai Oleh 13 Perusahaan</p>
              <p>dari Berbagai Industri</p>
            </div>
          </div>

          {/* Logo Marquee */}
          <div className="h-[16.07813rem] self-stretch relative overflow-hidden">
            {/* First Row */}
            <div className="flex gap-[0.01px] items-center absolute left-0 top-0 animate-scroll">
              {/* Duplicate set for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={`first-${index}`} className="flex flex-col items-start px-[16px] py-0 relative shrink-0">
                  <div className="bg-white flex items-center justify-center px-[32px] py-[16px] relative rounded-[1584px] shrink-0 w-[186px] h-[80px]">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={122}
                      height={48}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Offset for visual effect with gap */}
            <div className="flex gap-[0.01px] items-center absolute left-[-250px] top-[120px] animate-scroll-reverse">
              {/* Duplicate set for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={`second-${index}`} className="flex flex-col items-start px-[16px] py-0 relative shrink-0">
                  <div className="bg-white flex items-center justify-center px-[32px] py-[16px] relative rounded-[1584px] shrink-0 w-[186px] h-[80px]">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={122}
                      height={48}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

