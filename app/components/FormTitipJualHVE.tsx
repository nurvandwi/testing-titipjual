"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormTitipJualHVEProps {
  title?: string;
  subtitle?: string;
  illustration?: string;
  illustrationAlt?: string;
  formTitle?: string;
  backUrl?: string;
  backLabel?: string;
  submitButtonLabel?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

export default function FormTitipJualHVE({
  title = "Proses Inspeksi yang Aman dan Transparan",
  subtitle = "Sebelum barang Anda masuk ke proses titip jual, kami melakukan inspeksi untuk memastikan data sesuai kondisi sebenarnya",
  illustration = "/illustration_except_estimate_price.webp",
  illustrationAlt = "Inspection illustration",
  formTitle = "Detail Pengecekan Barang",
  backUrl = "/",
  backLabel = "Kembali",
  submitButtonLabel = "Daftar Titip Jual",
  onSubmit,
}: FormTitipJualHVEProps) {
  const [formData, setFormData] = useState({
    lokasiPengecekan: "",
    tanggalPengecekan: "",
    detailLokasi: "Jl. Pulogadung No.35, RW.9, Jatinegara, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13930",
    nama: "",
    noHandphone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const isFormValid = 
    formData.lokasiPengecekan !== "" &&
    formData.tanggalPengecekan !== "" &&
    formData.detailLokasi !== "" &&
    formData.nama !== "" &&
    formData.noHandphone !== "";

  // Sample options - in real app, these would come from API
  const lokasiPengecekanOptions = ["IBID Jakarta", "IBID Bandung", "IBID Surabaya", "IBID Medan", "IBID Semarang"];

  return (
    <div className="flex flex-col lg:flex-row items-start relative w-full flex-1">
      {/* Left Side - Illustration */}
      <div className="bg-[#fafafa] flex flex-col gap-[20px] items-center justify-center px-4 sm:px-8 py-[48px] relative w-full lg:w-1/2 lg:min-h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
          <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
            <p className="font-lato font-medium leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
              {title}
            </p>
            <p className="font-lato font-normal leading-[24px] relative text-[16px] text-[#404040] w-full">
              {subtitle}
            </p>
          </div>
          <div className="h-[213px] w-[214px] relative flex items-center justify-center">
            <Image
              src={illustration}
              alt={illustrationAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form Card */}
      <div className="bg-white flex flex-col gap-[24px] items-start overflow-hidden px-4 sm:px-8 md:px-[48px] py-[48px] relative w-full lg:w-1/2">
        {/* Back Button */}
        <Link href={backUrl} className="flex gap-[10px] items-center justify-center relative cursor-pointer hover:opacity-70 transition-opacity">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 2.5L4.5 6L7.5 9.5"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-lato font-bold leading-[20px] relative text-[#0f0d0d] text-[14px]">
            {backLabel}
          </p>
        </Link>

      {/* Form */}
      <div className="flex flex-col gap-[30px] items-start relative w-full">
        <div className="flex flex-col gap-[30px] items-start relative w-full">
          <div className="flex flex-col gap-[20px] items-start relative w-full">
            {/* Form Title */}
            <div className="flex gap-[10px] items-start relative w-full">
              <p className="font-lato font-bold leading-[30px] relative text-[24px] text-black w-full">
                {formTitle}
              </p>
            </div>

            {/* Inspection Location Card */}
            <div className="flex gap-[20px] items-center relative w-full">
              <div className="flex flex-row items-center self-stretch flex-1">
                <div className="bg-white border border-[#903f98] border-solid flex gap-[12px] h-[77px] items-start p-[12px] relative rounded-[10px] w-full">
                  <div className="flex gap-[11px] items-start relative flex-1">
                    <div className="relative shrink-0 size-[22px] flex items-center justify-center">
                      <div className="size-[22px] rounded-full bg-[#a3cf62] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="h-[53px] w-[54px] relative shrink-0">
                      <svg width="54" height="53" viewBox="0 0 54 53" fill="none">
                        <path d="M27 0C12.088 0 0 12.088 0 27C0 47.25 27 53 27 53C27 53 54 47.25 54 27C54 12.088 41.912 0 27 0ZM27 14.625C31.3845 14.625 35 18.2405 35 22.625C35 27.0095 31.3845 30.625 27 30.625C22.6155 30.625 19 27.0095 19 22.625C19 18.2405 22.6155 14.625 27 14.625Z" fill="#903f98"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[4px] items-start relative flex-1">
                      <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px] w-full">
                        Pengecekan Barang di Lokasi IBID
                      </p>
                      <p className="font-lato font-normal leading-[18px] text-[#585858] text-[12px] w-full">
                        Inspektor akan melakukan pengecekan barang di cabang IBID
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-[16px] items-start relative w-full">
            {/* Lokasi Pengecekan & Tanggal Pengecekan */}
            <div className="flex gap-[16px] items-center relative w-full">
              <div className="flex flex-col gap-[4px] items-start relative flex-1">
                <label className="absolute bg-white px-[2px] py-0 left-[7.76px] top-0 z-10 font-lato font-normal leading-[21px] text-[#585858] text-[14px]">
                  Lokasi Pengecekan<span className="text-red-500">*</span>
                </label>
                <div className="relative w-full mt-[11px]">
                  <select
                    value={formData.lokasiPengecekan}
                    onChange={(e) => handleInputChange("lokasiPengecekan", e.target.value)}
                    className="bg-white border border-[#cfd0d1] border-solid w-full h-[40px] pl-[12px] pr-[40px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] appearance-none"
                  >
                    <option value="">Pilih Area</option>
                    {lokasiPengecekanOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-[12px] top-[10px] size-[18px] flex items-center justify-center pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M6 7.5L9 10.5L12 7.5" stroke="#cfd0d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Tanggal Pengecekan<span className="text-red-500">*</span>
                </label>
                <div className="relative w-full mt-[4px]">
                  <input
                    type="date"
                    value={formData.tanggalPengecekan}
                    onChange={(e) => handleInputChange("tanggalPengecekan", e.target.value)}
                    className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] pr-[40px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98]"
                  />
                  <div className="absolute right-[17px] top-[15px] size-[16px] flex items-center justify-center pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z" stroke="#232323" strokeWidth="1.5"/>
                      <path d="M2 6H14M6 2V6M10 2V6" stroke="#232323" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Lokasi */}
            <div className="flex flex-col gap-[4px] items-start relative w-full pt-[8px]">
              <label className="absolute bg-white px-[2px] py-0 left-[15.86px] top-0 z-10 font-lato font-normal leading-[21px] text-[#585858] text-[14px]">
                Detail Lokasi<span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.detailLokasi}
                readOnly
                rows={3}
                className="bg-[#e6e7e8] border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#7e7f7f] text-[14px] focus:outline-none resize-none mt-[11px] cursor-not-allowed"
              />
            </div>

            {/* Nama & No. Handphone */}
            <div className="flex gap-[16px] items-center relative w-full">
              <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Nama<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => handleInputChange("nama", e.target.value)}
                  placeholder="Masukkan nama"
                  className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  No. Handphone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.noHandphone}
                  onChange={(e) => handleInputChange("noHandphone", e.target.value)}
                  placeholder="Masukkan nomor handphone"
                  className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center relative w-full">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full flex gap-[4px] items-center justify-center px-[24px] py-[12px] relative rounded-[50px] transition-all ${
                isFormValid
                  ? "bg-[#903f98] hover:opacity-90 cursor-pointer"
                  : "bg-[#cfd0d1] cursor-not-allowed"
              }`}
            >
              <span className={`font-lato font-normal leading-[24px] relative text-[16px] text-center tracking-[-0.176px] ${
                isFormValid ? "text-white" : "text-white"
              }`}>
                {submitButtonLabel}
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

