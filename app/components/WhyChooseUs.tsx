import Image from "next/image";

const features = [
  {
    title: "Jual Tanpa Ribet, Hasil Instan",
    description: "Dengan IBID, kamu tidak perlu repot lagi. Proses penjualan yang mudah dan cepat, bikin unitmu laku dalam waktu singkat!",
    image: "/why-choose-us-card1.png",
  },
  {
    title: "Penjualan Transparan dan Aman",
    description: "IBID menawarkan proses jual yang transparan dan aman, dengan semua informasi yang kamu butuhkan untuk menjual unitmu",
    image: "/why-choose-us-card2.png",
  },
  {
    title: "Dapatkan Harga Terbaik",
    description: "Dengan fitur penawaran langsung, kamu bisa mendapatkan harga terbaik untuk unit bekasmu dalam hitungan detik di IBID.",
    image: "/why-choose-us-card3.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-[68px] py-[60px] relative w-full">
      <div className="flex flex-col gap-[48px] items-center justify-center overflow-hidden px-8 sm:px-16 md:px-[128px] py-8 sm:py-12 md:py-[64px] relative rounded-[24px] w-full max-w-[1440px]">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden">
          <Image
            src="/why-choose-us-bg.png"
            alt="Background"
            fill
            className="object-cover rounded-[24px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[48px] items-center justify-center relative w-full z-10">
          {/* Header */}
          <div className="flex flex-col gap-[8px] items-center relative w-full">
            <div className="border border-[#e4e4e4] border-solid flex flex-col items-start px-[13px] py-[5px] relative rounded-[1000px]">
              <p className="font-lato font-medium leading-[22px] text-[#eceff0] text-[14px] whitespace-nowrap">
                Proses
              </p>
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-center relative w-full">
              <h2 className="font-lato font-bold justify-center leading-normal relative text-white text-3xl sm:text-4xl md:text-[44px] text-center tracking-[-0.88px] w-full">
                Kenapa Harus Titip Jual di IBID
              </h2>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] h-auto lg:h-[443.547px] items-center overflow-x-auto overflow-y-clip relative w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#fcfcfc] flex flex-col h-full items-start justify-between min-h-[400px] lg:min-h-0 p-[24px] relative rounded-[24px] shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full lg:w-auto lg:flex-1 shrink-0"
              >
                {/* Image */}
                <div className="h-[180px] relative rounded-[16px] w-full overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute bg-gradient-to-t from-[#f7f7f8] h-[17px] left-0 to-[rgba(247,247,248,0)] top-[163px] w-full" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-[24px] items-start relative w-full mt-6">
                  <div className="flex flex-col gap-[8px] items-start relative w-full">
                    <h3 className="font-lato font-bold leading-[32px] relative text-[#29363f] text-[24px] tracking-[-0.48px] w-full">
                      {feature.title}
                    </h3>
                    <p className="font-lato font-normal leading-[24px] relative text-[#29363f] text-[16px] w-full opacity-80">
                      {feature.description}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="flex h-[38px] items-start relative">
                    <div className="flex items-center relative rounded-[16px]">
                      <div className="bg-[#b986be] flex gap-[6px] h-[38px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] hover:opacity-90 transition-opacity">
                        <p className="font-lato font-bold leading-[18px] relative text-[#f4f3f4] text-[12px] text-center whitespace-nowrap">
                          Lihat Selengkapnya
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
                              fill="#fcfcfc"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

