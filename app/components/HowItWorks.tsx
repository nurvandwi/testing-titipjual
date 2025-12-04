"use client";

import Image from "next/image";

const stepsData = [
  {
    number: "1",
    title: "Isi Formulir Titip Jual",
    description:
      "Lengkapi data diri beserta informasi detail kendaraan yang akan dijual di lelang IBID secara online melalui website atau aplikasi IBID.",
    image: "/ibid-titip-lelang-isi-formulir.png",
    abstractDesign: "/abstract-design-2.svg",
  },
  {
    number: "2",
    title: "Konfirmasi Jadwal Inspeksi Unit",
    description:
      "Tentukan jadwal dan lokasi pengecekan kendaraan yang diinginkan. Pengecekan kendaraan bisa dilakukan di cabang IBID terdekat atau langsung di lokasi pilihan Anda.",
    image: "/ibid-titip-lelang-isi-formulir-1.png",
    abstractDesign: "/abstract-design-3.svg",
  },
  {
    number: "3",
    title: "Pengecekan Unit oleh Tim Inspeksi",
    description:
      "Tim inspeksi IBID akan melakukan pengecekan unit untuk memastikan semua item dalam kondisi baik dan sesuai spesifikasi.",
    image: "/ibid-titip-lelang-isi-formulir-2.png",
    abstractDesign: "/abstract-design-1.svg",
  },
  {
    number: "4",
    title: "Konfirmasi Unit Titip Jual",
    description:
      "Setelah data Anda sudah di submit kemudian akan dihubungi oleh IBID untuk konfirmasi unit yang akan dititip jual",
    image: "/ibid-titip-lelang-isi-formulir-3.png",
    abstractDesign: "/abstract-design.svg",
  },
];


export default function HowItWorks() {
  return (
    <section className="flex flex-col w-full max-w-[1680px] items-center px-4 sm:px-8 md:px-[198px] py-[60px] relative overflow-hidden mx-auto bg-white">
      {/* Background Vectors */}
      <div className="absolute top-[1100px] left-[-218px] w-[816px] h-[816px] pointer-events-none opacity-30 hidden lg:block">
        <Image
          src="/vector.svg"
          alt="Vector"
          width={816}
          height={816}
          className="w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="absolute top-[58px] left-[1291px] w-[816px] h-[816px] pointer-events-none opacity-30 hidden lg:block">
        <Image
          src="/vector-1.svg"
          alt="Vector"
          width={816}
          height={816}
          className="w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-12 relative w-full z-10">
        {/* Header */}
        <header className="flex flex-col items-center justify-center gap-2.5 relative w-full">
          <div className="px-[13px] py-[5px] rounded-[1000px] border border-[#e4e4e4] bg-transparent inline-flex">
            <span className="font-lato font-medium text-[#082228] text-sm tracking-[0] leading-[22px]">
              Cara Kerja
            </span>
          </div>

          <h1 className="font-lato font-semibold text-[#082228] text-3xl sm:text-4xl md:text-[44px] text-center tracking-[-0.88px] leading-normal">
            4 Cara Mudah <br />
            Buat Titip Jual di IBID
          </h1>
        </header>

        {/* Cards Container */}
        <div className="flex flex-col gap-6 w-full">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="bg-[#fcfcfc] flex flex-col lg:flex-row items-start justify-between p-6 sm:p-10 relative rounded-3xl shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full gap-6 lg:gap-0 overflow-visible border-0"
            >
              {/* Abstract Design Background */}
              <div className="absolute top-0 right-[1003px] w-[281px] h-[172px] pointer-events-none opacity-40 mix-blend-multiply hidden lg:block">
                <Image
                  src={step.abstractDesign}
                  alt="Abstract design"
                  width={281}
                  height={172}
                  className="w-full h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Left Content */}
              <div className="flex flex-col w-full max-w-[629.36px] items-start justify-between gap-8 relative z-10">
                {/* Number Badge */}
                <div className="inline-flex items-center rounded-full gap-2.5 shadow-[0px_0px_2px_#0000001a,0px_0px_3px_#00000017,0px_0px_4px_#0000000d,0px_0px_5px_#00000003,0px_0px_5px_transparent]">
                  <div className="flex w-16 h-16 items-center justify-center p-2 bg-white rounded-full">
                    <span className="font-bold text-[#903f98] text-[40px] text-center tracking-[-1.80px] leading-[38.4px]">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start gap-[12.01px] w-full">
                  <h2 className="font-lato font-semibold text-neutral-900 text-4xl tracking-[-0.72px] leading-[48px]">
                    {step.title}
                  </h2>
                  <p className="font-lato font-normal text-neutral-700 text-base leading-6">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full lg:w-[354.58px] h-[295.04px] rounded-[20px_20px_0px_0px] overflow-hidden flex-shrink-0">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src={step.image}
                    alt={`IBID titip lelang step ${step.number}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient Overlay Bottom */}
                <div className="absolute top-[232px] left-0 w-full h-[63px] bg-gradient-to-t from-[#f7f7f8] to-transparent" />

                {/* Gradient Overlay Right */}
                <div className="absolute top-[127px] left-[186px] w-[295px] h-[42px] -rotate-90 bg-gradient-to-t from-[#f7f7f8] to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
