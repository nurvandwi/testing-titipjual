"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ConfirmTitipJualPerusahaanModal from "./ConfirmTitipJualPerusahaanModal";

interface FormTitipJualPerusahaanProps {
  title?: string;
  subtitle?: string;
  illustration?: string;
  illustrationAlt?: string;
  formTitle?: string;
  formDescription?: string;
  objekLelang?: string;
  backUrl?: string;
  backLabel?: string;
  submitButtonLabel?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

export default function FormTitipJualPerusahaan({
  title = "Titip jual barang kantor lamamu di balai lelang IBID",
  subtitle = "Dapatkan harga jual lebih tinggi lewat lelang tanpa jumlah minimal. Kami bantu lelang berbagai barang, mulai dari mobil dinas hingga peralatan kantor.",
  illustration = "/lifestyle-inspection-illustration.png",
  illustrationAlt = "Office items illustration",
  formTitle = "Pengajuan Titip Jual & Data Inspeksi",
  formDescription = "Informasi ini untuk pengecekan unit Anda sebelum dititip jual",
  objekLelang = "Mobil",
  backUrl = "/",
  backLabel = "Kembali",
  submitButtonLabel = "Daftar Titip Jual",
  onSubmit,
}: FormTitipJualPerusahaanProps) {
  const [formData, setFormData] = useState({
    objekLelang: objekLelang,
    namaPIC: "",
    emailPIC: "",
    namaPerusahaan: "",
    noHandphone: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Show modal instead of directly submitting
      setShowModal(true);
    }
  };

  const handleConfirmSubmit = () => {
    // Close modal and submit form
    setShowModal(false);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const isFormValid = 
    formData.namaPIC !== "" &&
    formData.emailPIC !== "" &&
    formData.namaPerusahaan !== "" &&
    formData.noHandphone !== "";

  return (
    <div className="flex flex-col lg:flex-row items-start relative w-full flex-1">
      {/* Left Side - Illustration */}
      <div className="bg-[#fafafa] flex flex-col gap-[20px] items-center justify-center px-4 sm:px-8 py-[48px] relative w-full lg:w-1/2 lg:min-h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
          <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
            <p className="font-lato font-medium leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
              {title}
            </p>
            <p className="font-lato font-normal leading-[21px] relative text-[14px] text-[#404040] w-full">
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
          <p className="font-lato font-semibold leading-[20px] relative text-[#0f0d0d] text-[14px]">
            {backLabel}
          </p>
        </Link>

        {/* Form */}
        <div className="flex flex-col gap-[30px] items-start relative w-full">
          {/* Form Title */}
          <div className="flex flex-col gap-[8px] items-center justify-center relative w-full">
            <p className="font-lato font-bold h-[24px] leading-[24px] text-[#0f0d0d] text-[20px] w-full">
              {formTitle}
            </p>
            <p className="font-lato font-normal leading-[20px] relative text-[#404040] text-[14px] w-full">
              {formDescription}
            </p>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-[16px] items-start relative w-full">
            {/* Row 1: Objek Lelang & Nama PIC */}
            <div className="flex flex-col sm:flex-row gap-[16px] items-start relative w-full">
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-1/2 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Objek Lelang
                </label>
                <input
                  type="text"
                  value={formData.objekLelang}
                  readOnly
                  className="bg-[#e5e5e5] border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none cursor-not-allowed mt-[4px]"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-1/2 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Nama PIC<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.namaPIC}
                  onChange={(e) => handleInputChange("namaPIC", e.target.value)}
                  placeholder="Masukkan nama PIC"
                  className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[18px] text-[12px] text-neutral-950 focus:outline-none focus:border-[#903f98] mt-[4px]"
                />
              </div>
            </div>

            {/* Row 2: Email PIC & Nama Perusahaan */}
            <div className="flex flex-col sm:flex-row gap-[16px] items-start relative w-full">
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-1/2 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Email PIC<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.emailPIC}
                  onChange={(e) => handleInputChange("emailPIC", e.target.value)}
                  placeholder="Masukkan email PIC"
                  className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[18px] text-[12px] text-neutral-950 focus:outline-none focus:border-[#903f98] mt-[4px]"
                />
              </div>
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-1/2 pt-[8px]">
                <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                  Nama Perusahaan<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.namaPerusahaan}
                  onChange={(e) => handleInputChange("namaPerusahaan", e.target.value)}
                  placeholder="Masukkan nama perusahaan"
                  className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                />
              </div>
            </div>

            {/* Row 3: No. Handphone */}
            <div className="flex flex-col gap-[16px] items-start relative w-full">
              <div className="flex flex-col gap-[4px] items-start relative w-full pt-[8px]">
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
          <div className="flex items-start justify-center relative w-full">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] transition-all ${
                isFormValid
                  ? "bg-[#903f98] hover:opacity-90 cursor-pointer"
                  : "bg-[#cfd0d1] cursor-not-allowed"
              }`}
            >
              <span className={`font-lato font-bold leading-[20px] relative text-[14px] text-center ${
                isFormValid ? "text-[#f4f3f4]" : "text-white"
              }`}>
                {submitButtonLabel}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmTitipJualPerusahaanModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmSubmit}
        formData={{
          objekLelang: formData.objekLelang,
          namaPIC: formData.namaPIC,
          emailPIC: formData.emailPIC,
          namaPerusahaan: formData.namaPerusahaan,
          noHandphone: formData.noHandphone,
        }}
      />
    </div>
  );
}

