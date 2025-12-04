"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TitipJualSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 bg-[#fafafa] flex items-center justify-center px-4 py-[24px]">
        <div className="bg-white flex flex-col gap-[16px] items-center p-[20px] rounded-[20px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.12)] w-full max-w-[617px]">
          {/* Title */}
          <h1 className="font-lato font-bold leading-[39px] text-[#232323] text-[24px] text-center">
            Titip Jual Berhasil
          </h1>

          {/* Success Icon */}
          <div className="size-[153px] flex items-center justify-center">
            <div className="size-[153px] rounded-full bg-[#a3cf62] flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0ZM32 60L12 40L17.5 34.5L32 49L62.5 18.5L68 24L32 60Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <p className="font-lato font-bold leading-[39px] text-[#232323] text-[20px] text-center w-full">
            Data kendaraan anda sudah kami terima
          </p>

          {/* Description */}
          <p className="font-lato font-normal leading-[21px] text-[#232323] text-[14px] text-center w-full">
            Tahapan selanjutnya adalah Anda akan dihubungi oleh pihak IBID dalam kurun waktu 2x24 jam hari kerja, pastikan nomor yang Anda daftarkan dapat dihubungi oleh kami
          </p>

          {/* Button */}
          <button
            onClick={() => router.push("/")}
            className="bg-[#903f98] border border-[#903f98] border-solid flex items-center justify-center px-[50px] py-[10px] rounded-[20px] hover:opacity-90 transition-opacity w-full"
          >
            <span className="font-lato font-medium leading-normal text-white text-[16px] text-center">
              Kembali ke Halaman Utama
            </span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

