"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ConfirmTitipJualModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: {
    noPolisi: string;
    carName: string;
    lokasiLelang?: string;
    inspeksiType: string;
    lokasiInspeksi: string;
    lokasiIBID?: string;
    detailLokasi: string;
    jadwalInspeksi: string;
    nama: string;
    noHp: string;
  };
}

export default function ConfirmTitipJualModal({
  isOpen,
  onClose,
  onConfirm,
  formData,
}: ConfirmTitipJualModalProps) {
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

  const getJenisInspeksi = () => {
    return formData.inspeksiType === "eksklusif"
      ? "Inspeksi Eksklusif"
      : "Inspeksi Pool IBID";
  };

  const getLokasiInspeksi = () => {
    return formData.inspeksiType === "pool"
      ? formData.lokasiIBID || ""
      : formData.lokasiInspeksi;
  };

  const isSubmitEnabled = agreeToTerms && sumberIBID !== "";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[10px] p-[30px] relative w-full max-w-[584px] max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] size-[22px] flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="#232323"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L14 14M14 8L8 14"
              stroke="#232323"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Title */}
        <h2 className="font-lato font-bold leading-[39px] text-[#232323] text-[26px] mb-[20px]">
          Konfirmasi Titip Jual
        </h2>

        <div className="flex flex-col gap-[20px]">
          {/* Detail Kendaraan */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px]">
              Detail Kendaraan
            </p>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[154px] shrink-0">
                  No Polisi
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.noPolisi || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[154px] shrink-0">
                  Detail Barang
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.carName || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[154px] shrink-0">
                  Lokasi Lelang
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formData.lokasiIBID || formData.lokasiLelang || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Detail Inspeksi */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px]">
              Detail Inspeksi
            </p>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[156px] shrink-0">
                  Jenis Inspeksi
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {getJenisInspeksi()}
                </p>
              </div>
              <div className="flex items-start justify-between leading-[21px] text-[14px]">
                <p className="font-lato font-normal text-[#585858] w-[156px] shrink-0">
                  Lokasi Inspeksi
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {getLokasiInspeksi() || "-"}
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
                  Jadwal Inspeksi
                </p>
                <p className="font-lato font-bold text-[#232323] flex-1 text-right">
                  {formatDate(formData.jadwalInspeksi) || "-"}
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
                  {formData.noHp || "-"}
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
                id="agreeTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="size-[16px] rounded-[2px] border border-[#585858] border-solid cursor-pointer"
              />
              <label
                htmlFor="agreeTerms"
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

