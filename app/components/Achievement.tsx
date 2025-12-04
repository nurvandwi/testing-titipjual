const achievements = [
  {
    number: "30.000 ++",
    description: "Unit Terjual Seluruh Cabang",
  },
  {
    number: "10 Cabang",
    description: "Tersebar di Seluruh Indonesia",
  },
  {
    number: "5 Penghargaan",
    description: "Nasional & internasional",
  },
  {
    number: "13 Partnership",
    description: "Kerja sama dengan 13 perusahaan",
  },
];

export default function Achievement() {
  return (
    <section className="flex flex-col lg:flex-row gap-[48px] items-center justify-center px-4 sm:px-8 md:px-[198px] py-[60px] relative w-full bg-white max-w-[1680px] mx-auto">
      {/* Left Column - Text Content */}
      <div className="flex flex-col gap-[24px] items-start relative w-full lg:w-auto lg:flex-1">
        <div className="flex flex-col gap-[10px] items-start relative w-full">
          <div className="border border-[#e4e4e4] border-solid flex flex-col items-start px-[13px] py-[5px] relative rounded-[1000px]">
            <p className="font-lato font-medium leading-[22px] text-[#082228] text-[14px] whitespace-nowrap">
              Pencapaian
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-center justify-center relative text-black w-full">
          <h2 className="font-lato font-semibold leading-normal relative text-[34px] tracking-[-0.68px] text-[#000] w-full">
            Dengan ribuan lelang sukses, kami terus menghubungkan penjual dan pembeli di seluruh negeri melalui platform kami yang mendorong pertumbuhan ekonomi berbasis kepercayaan
          </h2>
          <p className="font-lato font-normal leading-[24px] relative text-[16px] w-full">
            Didukung jaringan luas dan kolaborasi strategis, kami terus memperkuat kepercayaan lewat pencapaian nyata di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Right Column - Achievement Cards Grid */}
      <div className="flex flex-col gap-[24px] items-center relative w-full lg:w-auto lg:flex-1 self-stretch">
        <div className="flex flex-row gap-[24px] grow items-stretch relative w-full">
          {/* First Column */}
          <div className="basis-0 flex flex-col gap-[24px] grow items-stretch relative shrink-0 w-full">
            <div className="bg-white flex flex-col gap-[16px] items-start justify-between overflow-hidden p-[24px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full h-full">
              {/* Abstract Design Background Effect */}
              <div className="absolute flex h-[146px] items-center justify-center mix-blend-multiply right-0 top-[0.29px] w-[228px] pointer-events-none opacity-30">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[146px] overflow-clip relative w-[228px]">
                    <div className="absolute inset-0">
                      {/* Light rays effect using gradients */}
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[38%] top-[-150%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[73%] top-[-120%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/15 via-[#903f98]/8 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[45%] top-[-180%] mix-blend-soft-light" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/20 via-[#903f98]/10 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[42%] top-[-140%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px] items-start justify-start relative z-10 w-full">
                <h3 className="font-lato font-bold justify-center leading-[0] relative text-[36px] text-black text-nowrap tracking-[-0.72px]">
                  <p className="leading-[44px] whitespace-pre">{achievements[0].number}</p>
                </h3>
                <p className="font-lato font-normal justify-center leading-[0] relative text-[16px] text-black text-nowrap">
                  <span className="leading-[24px] whitespace-pre">{achievements[0].description}</span>
                </p>
              </div>
            </div>

            <div className="bg-white flex flex-col gap-[16px] items-start justify-between overflow-hidden p-[24px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full h-full">
              {/* Abstract Design Background Effect */}
              <div className="absolute flex h-[146px] items-center justify-center mix-blend-multiply right-0 top-[0.29px] w-[228px] pointer-events-none opacity-30">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[146px] overflow-clip relative w-[228px]">
                    <div className="absolute inset-0">
                      {/* Light rays effect using gradients */}
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[38%] top-[-150%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[73%] top-[-120%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/15 via-[#903f98]/8 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[45%] top-[-180%] mix-blend-soft-light" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/20 via-[#903f98]/10 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[42%] top-[-140%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px] items-start justify-start relative z-10 w-full">
                <h3 className="font-lato font-bold justify-center leading-[0] relative text-[36px] text-black text-nowrap tracking-[-0.72px]">
                  <p className="leading-[44px] whitespace-pre">{achievements[2].number}</p>
                </h3>
                <p className="font-lato font-normal justify-center leading-[0] relative text-[16px] text-black text-nowrap">
                  <span className="leading-[24px] whitespace-pre">{achievements[2].description}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="basis-0 flex flex-col gap-[24px] grow items-stretch relative shrink-0 w-full">
            <div className="bg-white flex flex-col gap-[16px] items-start justify-between overflow-hidden p-[24px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full h-full">
              {/* Abstract Design Background Effect */}
              <div className="absolute flex h-[146px] items-center justify-center mix-blend-multiply right-0 top-[0.29px] w-[228px] pointer-events-none opacity-30">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[146px] overflow-clip relative w-[228px]">
                    <div className="absolute inset-0">
                      {/* Light rays effect using gradients */}
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[38%] top-[-150%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[73%] top-[-120%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/15 via-[#903f98]/8 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[45%] top-[-180%] mix-blend-soft-light" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/20 via-[#903f98]/10 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[42%] top-[-140%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px] items-start justify-start relative z-10 w-full">
                <h3 className="font-lato font-bold justify-center leading-[0] relative text-[36px] text-black text-nowrap tracking-[-0.72px]">
                  <p className="leading-[44px] whitespace-pre">{achievements[1].number}</p>
                </h3>
                <p className="font-lato font-normal justify-center leading-[0] relative text-[16px] text-black text-nowrap">
                  <span className="leading-[24px] whitespace-pre">{achievements[1].description}</span>
                </p>
              </div>
            </div>

            <div className="bg-white flex flex-col gap-[16px] items-start justify-between overflow-hidden p-[24px] relative rounded-[16px] shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full h-full">
              {/* Abstract Design Background Effect */}
              <div className="absolute flex h-[146px] items-center justify-center mix-blend-multiply right-0 top-[0.29px] w-[228px] pointer-events-none opacity-30">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="h-[146px] overflow-clip relative w-[228px]">
                    <div className="absolute inset-0">
                      {/* Light rays effect using gradients */}
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[38%] top-[-150%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/25 via-[#903f98]/12 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[73%] top-[-120%]" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/15 via-[#903f98]/8 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[45%] top-[-180%] mix-blend-soft-light" />
                      <div className="absolute w-[23px] h-[300px] bg-gradient-to-b from-[#903f98]/20 via-[#903f98]/10 to-transparent rotate-[322.306deg] skew-x-[14.159deg] left-[42%] top-[-140%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[16px] items-start justify-start relative z-10 w-full">
                <h3 className="font-lato font-bold justify-center leading-[0] relative text-[36px] text-black text-nowrap tracking-[-0.72px]">
                  <p className="leading-[44px] whitespace-pre">{achievements[3].number}</p>
                </h3>
                <p className="font-lato font-normal justify-center leading-[0] relative text-[16px] text-black text-nowrap">
                  <span className="leading-[24px] whitespace-pre">{achievements[3].description}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
