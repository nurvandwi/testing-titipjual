"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormField {
  label: string;
  key: string;
  placeholder: string;
  options: string[];
}

interface FormTitipJualMobilProps {
  title?: string;
  subtitle?: string;
  illustration?: string;
  illustrationAlt?: string;
  formTitle?: string;
  formDescription?: string;
  fields: FormField[];
  backUrl?: string;
  backLabel?: string;
  clearButtonLabel?: string;
  submitButtonLabel?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

export default function FormTitipJualMobil({
  title = "Belum Ada Estimasi Harga",
  subtitle = "Silahkan input detail mobil Anda untuk mengetahui estimasi harga mobil Anda",
  illustration = "/form-car-illustration.png",
  illustrationAlt = "Car illustration",
  formTitle = "Masukkan Detail Mobil",
  formDescription = "Informasi ini untuk estimasi harga pasaran mobil Anda",
  fields,
  backUrl = "/",
  backLabel = "Kembali",
  clearButtonLabel = "Hapus pencarian",
  submitButtonLabel = "Cek Estimasi Harga",
  onSubmit,
}: FormTitipJualMobilProps) {
  const router = useRouter();
  // Initialize form data based on fields
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.key] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState<Record<string, string>>(initialFormData);
  const [estimationResult, setEstimationResult] = useState<{
    carName: string;
    priceMin?: string;
    priceMax?: string;
    priceAvailable: boolean;
  } | null>(null);

  const isFormComplete = Object.values(formData).every((value) => value !== "");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Reset estimation result when form changes
    if (estimationResult) {
      setEstimationResult(null);
    }
  };

  const handleClear = () => {
    // Reset semua inputan form ke nilai kosong
    setFormData(initialFormData);
    setEstimationResult(null);
  };

  // Generate car name from form data
  const generateCarName = (data: Record<string, string>) => {
    const parts = [];
    if (data.merk) parts.push(data.merk.toUpperCase());
    if (data.seri) parts.push(data.seri);
    if (data.silinder) parts.push(data.silinder.replace(" CC", ""));
    if (data.tahun) parts.push(data.tahun);
    return parts.join(" ");
  };

  // Check if price is available in database (simulation)
  // In real app, this would be an API call
  const isPriceAvailable = (data: Record<string, string>): boolean => {
    // Simulate: some combinations might not have price data
    // For demo: if merk is "Toyota" and seri is "Avanza", price is available
    // Otherwise, randomly decide (70% chance available for demo)
    const merk = data.merk?.toLowerCase() || "";
    const seri = data.seri?.toLowerCase() || "";
    
    // Example: certain combinations might not be in database
    // You can customize this logic based on your needs
    if (merk === "toyota" && seri === "avanza") {
      return true;
    }
    
    // For demo purposes, randomly return false 30% of the time
    // In production, this would be based on actual database query
    return Math.random() > 0.3;
  };

  // Simulate price estimation (in real app, this would be an API call)
  const estimatePrice = (data: Record<string, string>) => {
    // Simple mock estimation based on year and silinder
    const year = parseInt(data.tahun) || 2020;
    const silinder = parseInt(data.silinder?.replace(" CC", "") || "1500");
    const basePrice = 100000000; // Base price 100M
    
    // Price adjustment based on year (newer = higher)
    const yearMultiplier = 1 + (year - 2020) * 0.05;
    
    // Price adjustment based on silinder (larger = higher)
    const silinderMultiplier = 1 + (silinder - 1500) / 10000;
    
    const estimatedPrice = basePrice * yearMultiplier * silinderMultiplier;
    const minPrice = estimatedPrice * 0.85;
    const maxPrice = estimatedPrice * 1.15;
    
    return {
      min: Math.round(minPrice / 1000000) * 1000000,
      max: Math.round(maxPrice / 1000000) * 1000000,
    };
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = () => {
    if (isFormComplete) {
      // Generate estimation result
      const carName = generateCarName(formData);
      const priceAvailable = isPriceAvailable(formData);
      
      if (priceAvailable) {
        const priceRange = estimatePrice(formData);
        setEstimationResult({
          carName,
          priceMin: formatPrice(priceRange.min),
          priceMax: formatPrice(priceRange.max),
          priceAvailable: true,
        });
      } else {
        setEstimationResult({
          carName,
          priceAvailable: false,
        });
      }

      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }
    }
  };

  // Group fields into rows of 2
  const fieldRows: FormField[][] = [];
  for (let i = 0; i < fields.length; i += 2) {
    fieldRows.push(fields.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col lg:flex-row items-start relative w-full flex-1">
      {/* Left Side - Illustration or Estimation Result */}
      <div className="bg-[#fafafa] flex flex-col gap-[20px] items-center justify-center px-4 sm:px-8 py-[48px] relative w-full lg:w-1/2 lg:min-h-[calc(100vh-200px)]">
        {estimationResult ? (
          estimationResult.priceAvailable ? (
            /* Estimation Result - Price Available */
            <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
              <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
                <p className="font-lato font-medium leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
                  Estimasi harga {estimationResult.carName}
                </p>
                <p className="font-lato font-bold leading-[32px] relative text-[24px] text-black tracking-[-0.48px] w-full">
                  {estimationResult.priceMin} - {estimationResult.priceMax}
                </p>
                <p className="font-lato font-normal leading-[24px] relative text-[16px] text-[#404040] w-full">
                  Anda bisa melanjutkan isi formulir untuk proses titip jual unit
                </p>
              </div>
              <div className="h-[164px] w-[328px] relative">
                <Image
                  src="/estimation-result-illustration.png"
                  alt="Estimation result illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start relative w-full max-w-[490px]">
                <button
                  onClick={() => {
                    // Navigate to detail form with estimation data
                    const params = new URLSearchParams({
                      carName: estimationResult.carName,
                      priceMin: estimationResult.priceMin || "",
                      priceMax: estimationResult.priceMax || "",
                    });
                    router.push(`/form-titip-jual-mobil-detail?${params.toString()}`);
                  }}
                  className="w-full bg-[#903f98] flex gap-[6px] h-[38px] items-center justify-center px-[12px] py-[6px] relative rounded-[50px] hover:opacity-90 transition-opacity"
                >
                  <span className="font-lato font-bold leading-[18px] relative text-[#f4ecf5] text-[12px] text-center whitespace-nowrap">
                    Lanjut Titip Jual
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L10 8L6 12V4Z"
                      fill="#f4ecf5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            /* Estimation Result - Price Not Available */
            <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
              <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
                <p className="font-lato font-bold leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
                  Estimasi harga {estimationResult.carName} tidak ditemukan
                </p>
                <div className="font-lato font-normal leading-[24px] relative text-[16px] text-[#404040] w-full">
                  <p className="mb-0">Data unit ini belum tersedia. Anda masih bisa mendapatkan estimasi harga unit</p>
                  <p>Anda sekarang dengan mengisi formulir terlebih dahulu</p>
                </div>
              </div>
              <div className="h-[180px] w-[270px] relative flex items-center justify-center">
                <Image
                  src="/illustration_price_not_found.webp"
                  alt="No price available illustration"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start relative w-full max-w-[490px]">
                <button
                  onClick={() => {
                    // Handle fill form action
                    console.log("Fill form to get estimation");
                    // You can scroll to form or show form fields
                  }}
                  className="w-full bg-[#903f98] flex gap-[6px] h-[38px] items-center justify-center px-[12px] py-[6px] relative rounded-[50px] hover:opacity-90 transition-opacity"
                >
                  <span className="font-lato font-bold leading-[18px] relative text-[#f4ecf5] text-[12px] text-center whitespace-nowrap">
                    Isi Formulir Sekarang
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4L10 8L6 12V4Z"
                      fill="#f4ecf5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
        ) : (
          /* Initial State - No Estimation */
          <>
            <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
              <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
                <p className="font-lato font-medium leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
                  {title}
                </p>
                <div className="font-lato font-normal leading-[24px] relative text-[16px] text-[#404040] w-full">
                  {subtitle.split("\n").map((line, index) => (
                    <p key={index} className={index === 0 ? "mb-0" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-[172px] w-[258px] relative">
              <Image
                src={illustration}
                alt={illustrationAlt}
                fill
                className="object-contain"
              />
            </div>
          </>
        )}
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
        <div className="flex flex-col gap-[24px] items-center justify-center relative w-full">
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
          <div className="flex flex-col gap-[24px] items-start relative w-full">
            {fieldRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col sm:flex-row gap-[16px] items-start relative w-full"
              >
                {row.map((field) => (
                  <div
                    key={field.key}
                    className="flex flex-col gap-[4px] items-start relative w-full sm:w-1/2"
                  >
                    <label className="font-lato font-normal leading-[18px] relative text-[#082228] text-[12px] w-full">
                      {field.label}
                    </label>
                    <select
                      value={formData[field.key] || ""}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="bg-white border border-neutral-400 border-solid w-full p-[12px] rounded-[6px] font-lato font-normal leading-[18px] text-[12px] text-[#171717] focus:outline-none focus:border-[#903f98]"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
                {/* Fill empty space if odd number of fields in last row */}
                {row.length === 1 && <div className="hidden sm:block w-full sm:w-1/2" />}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[10px] items-start relative w-full">
            <button
              onClick={handleClear}
              className="flex-1 border border-[#903f98] border-solid flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] hover:opacity-90 transition-opacity"
            >
              <span className="font-lato font-bold leading-[20px] relative text-[#903f98] text-[14px] text-center whitespace-nowrap">
                {clearButtonLabel}
              </span>
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isFormComplete}
              className={`flex-1 flex gap-[6px] h-[44px] items-center justify-center px-[16px] py-[6px] relative rounded-[16px] transition-all ${
                isFormComplete
                  ? "bg-[#903f98] hover:opacity-90 cursor-pointer"
                  : "bg-[#a3a3a3] cursor-not-allowed"
              }`}
            >
              <span className="font-lato font-bold leading-[20px] relative text-[#f4f3f4] text-[14px] text-center whitespace-nowrap">
                {submitButtonLabel}
              </span>
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

