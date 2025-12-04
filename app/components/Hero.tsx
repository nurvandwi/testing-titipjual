"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [registrationType, setRegistrationType] = useState<"personal" | "perusahaan">("personal");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = ["Mobil", "Motor", "Lifestyle", "HVE", "SCRAP"];

  const handleSubmit = () => {
    // Navigate to form page based on category and registration type
    if (registrationType === "personal") {
      if (selectedCategory === "Mobil") {
        router.push("/form-titip-jual-mobil");
      } else if (selectedCategory === "Motor") {
        router.push("/form-titip-jual-motor");
      } else if (selectedCategory === "Lifestyle") {
        router.push("/form-titip-jual-lifestyle");
      } else if (selectedCategory === "HVE") {
        router.push("/form-titip-jual-hve");
      } else if (selectedCategory === "SCRAP") {
        router.push("/form-titip-jual-scrap");
      }
    } else if (registrationType === "perusahaan") {
      // Navigate to perusahaan form with category as query parameter
      if (selectedCategory) {
        const categoryMap: Record<string, string> = {
          "Mobil": "Mobil",
          "Motor": "Motor",
          "Lifestyle": "Lifestyle",
          "HVE": "HVE",
          "SCRAP": "SCRAP"
        };
        const categoryValue = categoryMap[selectedCategory] || selectedCategory;
        router.push(`/form-titip-jual-perusahaan?kategori=${encodeURIComponent(categoryValue)}`);
      }
    }
  };

  return (
    <section className="flex flex-col items-center px-4 sm:px-8 md:px-[84px] py-8 sm:py-[60px] relative w-full">
      <div className="flex flex-col h-auto min-h-[600px] sm:min-h-[820px] items-end justify-center relative rounded-[24px] sm:rounded-[32px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px] overflow-hidden">
          <Image
            src="/hero-container.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-purple-700/30" />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-auto min-h-[518px] items-center justify-between px-4 sm:px-8 md:px-[84px] py-8 lg:py-0 relative w-full z-10 gap-8 lg:gap-0">
          {/* Left Side - Hero Text */}
          <div className="flex flex-col h-full items-start justify-between relative w-full lg:w-[635px] gap-8">
            <div className="flex flex-col gap-[16px] items-start relative w-full">
              <h1 className="font-lato font-bold leading-[1.2] sm:leading-[50px] md:leading-[60px] relative text-white text-3xl sm:text-4xl md:text-[46px] tracking-[-0.92px] w-full">
                Titip Jual Aset Berharga Anda, Kami Urus Penjualan Secara Aman dan Profesional
              </h1>
              <p className="font-lato font-normal leading-[24px] relative text-[16px] text-[#f5f5f5] w-full">
                Kami menerima berbagai kategori barang — dari kendaraan, gadget, elektronik rumah tangga hingga alat berat. Semua melalui proses pengecekan harga yang profesional sehingga Anda bisa langsung melanjutkan ke titip jual dengan aman.
              </p>
            </div>

            {/* Promotional Banner Card */}
            <div className="flex w-[23.72269rem] h-[10.52144rem] justify-center items-center relative">
              <div className="border-4 border-white border-solid h-full w-full rounded-[16px] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none rounded-[16px]">
                  <Image
                    src="/hero-banner.png"
                    alt="Promotional banner"
                    fill
                    className="object-cover rounded-[16px]"
                  />
                  <div className="absolute bg-black/10 inset-0 rounded-[16px]" />
                </div>
                {/* Play Button */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[40px] bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L12 8L6 12V4Z"
                      fill="#903f98"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white flex flex-col h-full items-start justify-between overflow-hidden px-[16px] py-[24px] relative rounded-[16px] w-full lg:w-[511px] gap-6">
            <div className="flex flex-col gap-[24px] items-start relative w-full">
              {/* Form Title */}
              <div className="flex flex-col gap-[8px] items-center justify-center relative text-[#0f0d0d] w-full">
                <h2 className="font-lato font-bold h-[24px] leading-[24px] text-[20px] w-full">
                  Formulir Cek Harga & Titip Jual
                </h2>
                <p className="font-lato font-normal leading-[20px] relative text-[14px] w-full">
                  Pilih opsi yang sesuai, apakah unit Anda akan didaftarkan{" "}
                  <span className="font-bold">personal</span> atau{" "}
                  <span className="font-bold">perusahaan</span>
                </p>
              </div>

              {/* Form Inputs */}
              <div className="flex flex-col gap-[16px] items-center relative w-full">
                {/* Registration Type */}
                <div className="flex flex-col gap-[10px] items-start relative w-full">
                  <p className="font-lato font-normal leading-[20px] relative text-[#0f0d0d] text-[14px] w-full">
                    Titip jual sebagai
                  </p>
                  <div className="flex gap-[8px] items-center relative w-full">
                    <button
                      onClick={() => setRegistrationType("personal")}
                      className={`basis-0 flex gap-[8px] grow items-center p-[8px] relative rounded-[8px] shrink-0 border transition-colors ${
                        registrationType === "personal"
                          ? "bg-[#fcfcfc] border-[#e5e5e5]"
                          : "bg-white border-[#e5e5e5] hover:border-[#903f98]"
                      }`}
                    >
                      <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                        {registrationType === "personal" ? (
                          <div className="size-[16px] rounded-full border-2 border-[#903f98] flex items-center justify-center">
                            <div className="size-[8px] rounded-full bg-[#903f98]" />
                          </div>
                        ) : (
                          <div className="size-[16px] rounded-full border-2 border-[#e5e5e5]" />
                        )}
                      </div>
                      <div className="basis-0 flex flex-col gap-[4px] grow items-start justify-center relative shrink-0">
                        <p className="font-lato font-bold leading-[20px] text-[12px] text-[#171717]">
                          Personal
                        </p>
                      </div>
                    </button>
                    <button
                      onClick={() => setRegistrationType("perusahaan")}
                      className={`basis-0 flex gap-[8px] grow items-center p-[8px] relative rounded-[8px] shrink-0 border transition-colors ${
                        registrationType === "perusahaan"
                          ? "bg-[#fcfcfc] border-[#e5e5e5]"
                          : "bg-white border-[#e5e5e5] hover:border-[#903f98]"
                      }`}
                    >
                      <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                        {registrationType === "perusahaan" ? (
                          <div className="size-[16px] rounded-full border-2 border-[#903f98] flex items-center justify-center">
                            <div className="size-[8px] rounded-full bg-[#903f98]" />
                          </div>
                        ) : (
                          <div className="size-[16px] rounded-full border-2 border-[#e5e5e5]" />
                        )}
                      </div>
                      <div className="basis-0 flex flex-col gap-[4px] grow items-start justify-center relative shrink-0">
                        <p className="font-lato font-bold leading-[20px] text-[12px] text-[#171717] whitespace-nowrap">
                          Perusahaan
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="flex flex-col gap-[10px] items-start relative w-full">
                  <p className="font-lato font-normal leading-[20px] relative text-[#0f0d0d] text-[14px] w-full">
                    Pilih kategori barang
                  </p>
                  <div className="flex flex-col gap-[8px] items-start justify-center relative w-full">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex gap-[8px] items-center p-[8px] relative rounded-[8px] w-full border transition-colors ${
                          selectedCategory === category
                            ? "bg-[#fcfcfc] border-[#e5e5e5]"
                            : "bg-white border-[#e5e5e5] hover:border-[#903f98]"
                        }`}
                      >
                        <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                          {selectedCategory === category ? (
                            <div className="size-[16px] rounded-full border-2 border-[#903f98] flex items-center justify-center">
                              <div className="size-[8px] rounded-full bg-[#903f98]" />
                            </div>
                          ) : (
                            <div className="size-[16px] rounded-full border-2 border-[#e5e5e5]" />
                          )}
                        </div>
                        <div className="flex gap-[4px] items-center relative shrink-0">
                          <p className="font-lato font-bold leading-[20px] text-[12px] text-[#171717] whitespace-nowrap">
                            {category}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!selectedCategory}
              className={`flex h-[44px] items-start relative w-full ${
                !selectedCategory ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="basis-0 flex grow items-center relative shrink-0">
                <div className="basis-0 bg-[#903f98] flex gap-[6px] grow h-[44px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0 hover:opacity-90 transition-opacity">
                  <p className="font-lato font-bold leading-[20px] relative text-[#f4f3f4] text-[14px] text-center whitespace-nowrap">
                    Titip Jual Sekarang
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
      </div>
    </section>
  );
}

