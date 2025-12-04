"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apa bedanya Titip Jual Personal dengan Titip Jual Perusahaan ?",
    answer: "titip jual personal memungkinkan Anda bisa melakukan titip jual satu atau lebih barang untuk dilelang dengan nama pribadi. Sementara titip jual untuk perusahaan, Anda bisa titip jual barang secara borongan sekaligus.",
  },
  {
    question: "Bagaimana cara untuk melakukan titip jual di ibid?",
    answer: "Untuk melakukan titip jual di IBID, Anda dapat mengisi formulir yang tersedia di website atau aplikasi IBID. Setelah mengisi data diri dan informasi detail barang, tim IBID akan melakukan pengecekan dan konfirmasi.",
  },
  {
    question: "Barang apa saja yang bisa saya titip jual di IBID?",
    answer: "IBID menerima berbagai kategori barang seperti kendaraan (mobil, motor), gadget, elektronik rumah tangga, hingga alat berat. Semua melalui proses pengecekan harga yang profesional.",
  },
  {
    question: "Bila barang saya laku terjual kemana dana akan dikirimkan?",
    answer: "Dana hasil penjualan akan dikirimkan ke rekening bank yang telah Anda daftarkan saat melakukan titip jual. Proses transfer biasanya dilakukan dalam beberapa hari kerja setelah barang terjual.",
  },
  {
    question: "Siapa yang akan membeli barang saya?",
    answer: "Barang Anda akan dilelang melalui platform IBID dan dapat dibeli oleh peserta lelang yang terdaftar. IBID memiliki jaringan pembeli yang luas dari berbagai kalangan.",
  },
  {
    question: "Apa saja syarat ikut titip jual untuk objek lelang personal dan perusahaan?",
    answer: "Untuk personal, Anda perlu menyiapkan KTP dan dokumen kepemilikan barang. Untuk perusahaan, diperlukan dokumen perusahaan seperti SIUP, NPWP perusahaan, dan dokumen kepemilikan barang.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-[48px] items-start justify-center px-4 sm:px-8 md:px-[128px] py-[60px] relative w-full bg-white max-w-[1440px] mx-auto">
      {/* Left Column - Title */}
      <div className="flex flex-col gap-[8px] items-start relative w-full lg:w-auto lg:flex-1">
        <div className="border border-[#e4e4e4] border-solid flex flex-col items-start px-[13px] py-[5px] relative rounded-[1000px]">
          <p className="font-lato font-medium leading-[22px] text-[#082228] text-[14px] whitespace-nowrap">
            FAQ
          </p>
        </div>
        <h2 className="font-lato font-bold justify-center leading-[32px] min-w-full relative text-[#082228] text-3xl sm:text-4xl md:text-[44px] tracking-[-0.88px]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Right Column - FAQ List */}
      <div className="flex flex-col gap-[48px] items-start relative w-full lg:w-auto lg:flex-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-start relative shadow-[0px_1px_8px_0px_rgba(16,24,40,0.1)] w-full rounded-[4px] overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="bg-white flex items-center justify-between p-[12px] relative w-full hover:bg-gray-50 transition-colors"
            >
              <p className="basis-0 font-lato font-bold grow leading-[24px] min-h-px min-w-px relative text-[18px] text-[#171717] tracking-[-0.36px] text-left">
                {faq.question}
              </p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className={`flex-none transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 6.75L9 11.25L13.5 6.75"
                      stroke="#171717"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Answer Body */}
            {openIndex === index && (
              <div className="bg-white flex items-center px-[12px] py-[8px] relative w-full">
                <p className="basis-0 font-lato font-normal grow leading-[18px] min-h-px min-w-px relative text-[12px] text-[#262626]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

