"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ConfirmTitipJualLifestyleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: {
    objekLelang: string;
    kategoriBarang: string;
    merk: string;
    kondisiBarang: string;
    detailBarang?: string;
    tanggalPengecekan: string;
    nama: string;
    lokasiInspeksi: string;
    noHandphone: string;
    detailLokasi: string;
  };
}

export default function ConfirmTitipJualLifestyleModal({
  isOpen,
  onClose,
  onConfirm,
  formData,
}: ConfirmTitipJualLifestyleModalProps) {
  const router = useRouter();
  const [sumberIBID, setSumberIBID] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  if (!isOpen) return null;

  const sumberOptions = [
    "Google",
    "Facebook",
    "Instagram",
    "Teman/Keluarga",
    "Iklan",
    "Lainnya",
  ];

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const isSubmitEnabled = agreeToTerms && sumberIBID !== "";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[10px] p-[20px] relative w-full max-w-[584px] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[12px] top-[12px] size-[24px] flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="font-lato font-semibold leading-[27px] text-[#0A0A0A] text-[18px] mb-[20px]">
          Konfirmasi Titip Jual
        </h2>

        <div className="flex flex-col gap-[20px]">
          {/* Data Barang */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-lato font-semibold leading-[27px] text-[#0A0A0A] text-[18px]">
              Data Barang
            </p>
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-[#404040] w-[154px] shrink-0">
                  kategori barang
                </p>
                <p className="font-lato font-semibold leading-[20px] text-[#0A0A0A] flex-1 text-right">
                  {formData.kategoriBarang || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-[#404040] w-[154px] shrink-0">
                  Merk
                </p>
                <p className="font-lato font-semibold leading-[20px] text-[#0A0A0A] flex-1 text-right">
                  {formData.merk || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-[#404040] w-[154px] shrink-0">
                  Kondisi Barang
                </p>
                <p className="font-lato font-semibold leading-[20px] text-[#0A0A0A] flex-1 text-right">
                  {formData.kondisiBarang || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between">
                <p className="font-lato font-normal leading-[21px] text-[14px] text-[#404040] w-[154px] shrink-0">
                  Detail Barang
                </p>
                <div className="bg-[#F5F5F5] border border-[#ededed] border-solid h-[100px] rounded-[6px] flex-1 relative overflow-hidden">
                  <div className="h-full w-full p-[12px] overflow-y-auto">
                    <p className="font-lato font-semibold leading-[20px] text-[#232323] text-[14px] whitespace-pre-wrap">
                      {formData.detailBarang || "-"}
                    </p>
                  </div>
                  {/* Scrollbar indicator */}
                  <div className="absolute bg-[#404040] h-[24px] right-[6px] rounded-[10px] top-[12px] w-[4px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Detail Pengecekan Barang */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px]">
              Detail Pengecekan Barang
            </p>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[155px] shrink-0">
                  Jenis Pengecekan
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  Pool IBID
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[155px] shrink-0">
                  Lokasi Pengecekan
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.lokasiInspeksi || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[156px] shrink-0">
                  Detail Lokasi
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.detailLokasi || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[156px] shrink-0">
                  Jadwal Pengecekan
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formatDate(formData.tanggalPengecekan) || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[158px] shrink-0">
                  Nama
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.nama || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[158px] shrink-0">
                  No Hp
                </p>
                <p className="font-lato font-normal text-[#232323] flex-1 text-right">
                  {formData.noHandphone || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#cfd0d1] w-full" />

          {/* Sumber IBID */}
          <div className="flex flex-col gap-[4px]">
            <p className="font-lato font-normal leading-[21px] text-[#585858] text-[14px]">
              Saya mengetahui IBID dari<span className="text-red-500">*</span>
            </p>
            <div className="relative">
              <select
                value={sumberIBID}
                onChange={(e) => setSumberIBID(e.target.value)}
                className="bg-white border border-[#cfd0d1] border-solid w-full h-[40px] pl-[12px] pr-[40px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] appearance-none"
              >
                <option value="">Pilih Sumber</option>
                {sumberOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute right-[12px] top-[12px] size-[16px] flex items-center justify-center pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="#232323"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[10px] items-center">
              <input
                type="checkbox"
                id="agreeTermsLifestyle"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="size-[16px] rounded-[6px] border border-[#c2c2c2] border-solid cursor-pointer"
              />
              <label
                htmlFor="agreeTermsLifestyle"
                className="font-lato font-normal leading-[21px] text-[#232323] text-[14px] cursor-pointer"
              >
                Saya setuju dengan{" "}
                <span className="text-[#903f98] cursor-pointer hover:underline">
                  Syarat & Ketentuan
                </span>{" "}
                IBID.
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[12px]">
              <button
                onClick={onClose}
                className="flex-1 border border-[#903f98] border-solid flex items-center justify-center px-[76px] py-[8px] rounded-[20px] hover:opacity-70 transition-opacity"
              >
                <span className="font-lato font-bold leading-[21px] text-[#903f98] text-[14px] text-center">
                  Cancel
                </span>
              </button>
              <button
                onClick={() => {
                  if (isSubmitEnabled) {
                    // Call onConfirm callback first
                    onConfirm();
                    // Then navigate to success page
                    router.push("/titip-jual-success");
                  }
                }}
                disabled={!isSubmitEnabled}
                className={`flex-1 flex items-center justify-center px-[76px] py-[8px] rounded-[20px] transition-all ${
                  isSubmitEnabled
                    ? "bg-[#903f98] hover:opacity-90 cursor-pointer"
                    : "bg-[#cfd0d1] cursor-not-allowed"
                }`}
              >
                <span
                  className={`font-lato font-bold leading-[21px] text-[14px] text-center ${
                    isSubmitEnabled ? "text-white" : "text-white"
                  }`}
                >
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

