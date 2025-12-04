"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ConfirmTitipJualPerusahaanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: {
    objekLelang: string;
    namaPIC: string;
    emailPIC: string;
    namaPerusahaan: string;
    noHandphone: string;
  };
}

export default function ConfirmTitipJualPerusahaanModal({
  isOpen,
  onClose,
  onConfirm,
  formData,
}: ConfirmTitipJualPerusahaanModalProps) {
  const router = useRouter();
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  if (!isOpen) return null;

  const isSubmitEnabled = agreeToTerms;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[10px] p-[20px] relative w-full max-w-[608px] max-h-[90vh] overflow-y-auto">
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
        <h2 className="font-lato font-semibold leading-[33px] text-neutral-950 text-[22px] mb-[24px]">
          Konfirmasi Titip Jual
        </h2>

        <div className="flex flex-col gap-[24px]">
          {/* Data Barang Section */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-lato font-semibold leading-[27px] text-neutral-950 text-[18px]">
              Data Barang
            </p>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-neutral-700 w-[154px] shrink-0">
                  Objek Lelang
                </p>
                <p className="basis-0 font-lato font-semibold grow leading-[20px] text-neutral-950">
                  {formData.objekLelang || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-neutral-700 w-[154px] shrink-0">
                  Nama PIC
                </p>
                <p className="basis-0 font-lato font-semibold grow leading-[20px] text-neutral-950">
                  {formData.namaPIC || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-neutral-700 w-[154px] shrink-0">
                  Email PIC
                </p>
                <p className="basis-0 font-lato font-semibold grow leading-[20px] text-neutral-950">
                  {formData.emailPIC || "-"}
                </p>
              </div>
              <div className="flex items-start justify-between text-[14px]">
                <p className="font-lato font-normal leading-[21px] text-neutral-700 w-[154px] shrink-0">
                  Nama Perusahaan
                </p>
                <p className="basis-0 font-lato font-semibold grow leading-[20px] text-neutral-950">
                  {formData.namaPerusahaan || "-"}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#cfd0d1] w-full" />

          {/* Checkbox + Button Section */}
          <div className="flex flex-col gap-[16px]">
            {/* Checkbox + Label */}
            <div className="flex gap-[8px] items-center justify-center">
              <input
                type="checkbox"
                id="agreeTermsPerusahaan"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="size-[16px] rounded-[6px] border border-[#c2c2c2] border-solid cursor-pointer"
              />
              <label
                htmlFor="agreeTermsPerusahaan"
                className="basis-0 font-lato font-normal grow leading-[21px] text-[14px] text-neutral-950 cursor-pointer"
              >
                Saya setuju dengan{" "}
                <span className="text-[#903f98] cursor-pointer hover:underline">
                  Syarat & Ketentuan IBID
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-[12px]">
              <button
                onClick={onClose}
                className="basis-0 border border-[#903f98] border-solid flex gap-[8px] grow items-center justify-center px-[106px] py-[8px] rounded-[50px] hover:opacity-70 transition-opacity"
              >
                <span className="font-lato font-medium leading-[21px] text-[#903f98] text-[14px] text-center whitespace-pre">
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
                className={`basis-0 flex gap-[8px] grow items-center justify-center px-[106px] py-[8px] rounded-[50px] transition-all ${
                  isSubmitEnabled
                    ? "bg-[#903f98] hover:opacity-90 cursor-pointer"
                    : "bg-[#ededed] border border-[#e0e0e0] border-solid cursor-not-allowed"
                }`}
              >
                <span
                  className={`font-lato font-medium leading-[21px] text-[14px] text-center whitespace-pre ${
                    isSubmitEnabled ? "text-white" : "text-[#9e9e9e]"
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

