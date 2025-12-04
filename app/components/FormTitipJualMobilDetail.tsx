"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import ConfirmTitipJualModal from "./ConfirmTitipJualModal";

// Dynamically import Leaflet to avoid SSR issues
const MapComponent = dynamic(
  () => import("./MapComponent").then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => (
      <div className="bg-[#e6e7e8] border border-[#cfd0d1] border-solid w-full h-[172px] rounded-[5px] flex items-center justify-center">
        <p className="font-lato font-normal text-[#7e7f7f] text-[14px]">
          Memuat peta...
        </p>
      </div>
    ),
  }
);

interface FormTitipJualMobilDetailProps {
  carName?: string;
  priceMin?: string;
  priceMax?: string;
  backUrl?: string;
  backLabel?: string;
  submitButtonLabel?: string;
  onSubmit?: (formData: Record<string, string>) => void;
}

export default function FormTitipJualMobilDetail({
  carName = "TOYOTA AVANZA 1.3 2022",
  priceMin = "Rp 130.000.000",
  priceMax = "Rp 150.000.000",
  backUrl = "/form-titip-jual-mobil",
  backLabel = "Kembali",
  submitButtonLabel = "Daftar Titip Jual",
  onSubmit,
}: FormTitipJualMobilDetailProps) {
  const searchParams = useSearchParams();
  const carNameFromUrl = searchParams.get("carName");
  const priceMinFromUrl = searchParams.get("priceMin");
  const priceMaxFromUrl = searchParams.get("priceMax");

  // Use URL params if available, otherwise use props
  const finalCarName = carNameFromUrl || carName;
  const finalPriceMin = priceMinFromUrl || priceMin;
  const finalPriceMax = priceMaxFromUrl || priceMax;

  const [formData, setFormData] = useState({
    inspeksiType: "eksklusif", // "eksklusif" or "pool"
    noPolisi: "",
    lokasiInspeksi: "",
    lokasiIBID: "", // For pool selection
    detailLokasi: "",
    jadwalInspeksi: "",
    nama: "",
    noHp: "",
  });

  // IBID locations with their addresses
  const ibidLocations = [
    {
      name: "IBID Jakarta",
      address: "Jl. Pulogadung No.35, RW.9, Jatinegara, Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13930",
    },
    {
      name: "IBID Bandung",
      address: "Jl. Contoh Bandung, Kota Bandung, Jawa Barat",
    },
    {
      name: "IBID Surabaya",
      address: "Jl. Contoh Surabaya, Kota Surabaya, Jawa Timur",
    },
    {
      name: "IBID Medan",
      address: "Jl. Contoh Medan, Kota Medan, Sumatera Utara",
    },
  ];

  const [mapLocation, setMapLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isGeocoding, setIsGeocoding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const geocodeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Geocode address to coordinates when lokasiInspeksi changes (only for eksklusif)
  const { inspeksiType, lokasiInspeksi } = formData;
  
  useEffect(() => {
    if (geocodeTimeoutRef.current) {
      clearTimeout(geocodeTimeoutRef.current);
    }

    // Only geocode for eksklusif type
    if (inspeksiType !== "eksklusif" || !lokasiInspeksi.trim()) {
      setMapLocation(null);
      return;
    }

    // Debounce geocoding to avoid too many API calls
    geocodeTimeoutRef.current = setTimeout(async () => {
      setIsGeocoding(true);
      try {
        // Use Nominatim (OpenStreetMap) for geocoding - free and no API key needed
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            lokasiInspeksi
          )}&limit=1&addressdetails=1`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setMapLocation({
            lat: parseFloat(lat),
            lng: parseFloat(lon),
          });
        } else {
          setMapLocation(null);
        }
      } catch (error) {
        console.error("Geocoding error:", error);
        setMapLocation(null);
      } finally {
        setIsGeocoding(false);
      }
    }, 1000); // Wait 1 second after user stops typing

    return () => {
      if (geocodeTimeoutRef.current) {
        clearTimeout(geocodeTimeoutRef.current);
      }
    };
  }, [inspeksiType, lokasiInspeksi]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      
      // Auto-fill detail lokasi when IBID location is selected
      if (field === "lokasiIBID" && value) {
        const selectedLocation = ibidLocations.find((loc) => loc.name === value);
        if (selectedLocation) {
          updated.detailLokasi = selectedLocation.address;
        }
      }
      
      // Reset fields when switching inspection type
      if (field === "inspeksiType") {
        if (value === "pool") {
          // Reset lokasiInspeksi when switching to pool
          updated.lokasiInspeksi = "";
        } else {
          // Reset lokasiIBID and detailLokasi when switching to eksklusif
          updated.lokasiIBID = "";
          updated.detailLokasi = "";
        }
      }
      
      return updated;
    });
  };

  const handleSubmit = () => {
    // Show modal instead of directly submitting
    if (isFormValid) {
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
    formData.noPolisi !== "" &&
    (formData.inspeksiType === "pool" 
      ? formData.lokasiIBID !== "" && formData.detailLokasi !== ""
      : formData.lokasiInspeksi !== "" && formData.detailLokasi !== "") &&
    formData.jadwalInspeksi !== "" &&
    formData.nama !== "" &&
    formData.noHp !== "";

  return (
    <div className="flex flex-col lg:flex-row items-start relative w-full flex-1">
      {/* Left Side - Estimation Result */}
      <div className="bg-[#fafafa] flex flex-col gap-[20px] items-center justify-center px-4 sm:px-8 py-[48px] relative w-full lg:w-1/2 lg:min-h-[calc(100vh-200px)]">
        <div className="flex flex-col gap-[32px] items-center justify-center relative w-full max-w-[600px]">
          <div className="flex flex-col gap-[8px] items-center justify-center relative text-center w-full">
            <p className="font-lato font-medium leading-[28px] relative text-[20px] text-black tracking-[-0.4px] w-full">
              Estimasi harga {finalCarName}
            </p>
            <p className="font-lato font-bold leading-[32px] relative text-[24px] text-black tracking-[-0.48px] w-full">
              {finalPriceMin} - {finalPriceMax}
            </p>
            <p className="font-lato font-normal leading-[24px] relative text-[16px] text-[#404040] w-full">
              Anda bisa melanjutkan isi formulir untuk proses titip jual unit
            </p>
          </div>
          <div className="h-[164px] w-[328px] relative flex items-center justify-center">
            <Image
              src="/illustration_except_estimate_price.webp"
              alt="Estimation result illustration"
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
              <div className="flex flex-col gap-[8px] items-center justify-center relative w-full">
                <p className="font-lato font-bold h-[24px] leading-[24px] text-[#0f0d0d] text-[20px] w-full">
                  Pengajuan Titip Jual & Data Inspeksi
                </p>
                <p className="font-lato font-normal leading-[20px] relative text-[color:#404040] text-[14px] w-full">
                  Informasi ini untuk pengecekan unit Anda sebelum dititip jual
                </p>
              </div>

              {/* Inspection Type Selection */}
              <div className="flex gap-[16px] items-center relative w-full">
                {/* Inspeksi Eksklusif */}
                <div className="flex flex-row items-center self-stretch flex-1">
                  <div
                    onClick={() => handleInputChange("inspeksiType", "eksklusif")}
                    className={`bg-white border border-solid flex gap-[12px] h-[77px] items-start p-[12px] relative rounded-tl-[10px] rounded-tr-[10px] w-full cursor-pointer transition-all ${
                      formData.inspeksiType === "eksklusif"
                        ? "border-[#903f98]"
                        : "border-[#a3a3a3] hover:border-[#903f98]"
                    }`}
                  >
                    <div className="flex gap-[11px] items-start relative flex-1">
                      <div className="relative shrink-0 size-[22px] flex items-center justify-center">
                        {formData.inspeksiType === "eksklusif" ? (
                          <div className="size-[22px] rounded-full bg-[#a3cf62] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="size-[22px] rounded-full border-2 border-[#a3a3a3]" />
                        )}
                      </div>
                      <div className="h-[53px] w-[54px] relative shrink-0">
                        <svg width="54" height="53" viewBox="0 0 54 53" fill="none">
                          <path d="M27 0C12.088 0 0 12.088 0 27C0 47.25 27 53 27 53C27 53 54 47.25 54 27C54 12.088 41.912 0 27 0ZM27 14.625C31.3845 14.625 35 18.2405 35 22.625C35 27.0095 31.3845 30.625 27 30.625C22.6155 30.625 19 27.0095 19 22.625C19 18.2405 22.6155 14.625 27 14.625Z" fill={formData.inspeksiType === "eksklusif" ? "#903f98" : "#a3a3a3"}/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start relative flex-1">
                        <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px] w-full">
                          Inspeksi Eksklusif
                        </p>
                        <p className="font-lato font-normal leading-[18px] text-[#585858] text-[12px] w-full">
                          Proses inspeksi selesai dilakukan di rumah
                        </p>
                        <p className="font-lato font-normal leading-[15px] text-[#d3a12a] text-[10px] w-full">
                          *Hanya mencakup wilayah Jakarta dan sekitarnya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspeksi Pool IBID */}
                <div className="flex flex-row items-center self-stretch flex-1">
                  <div
                    onClick={() => handleInputChange("inspeksiType", "pool")}
                    className={`bg-white border border-solid flex gap-[12px] h-[77px] items-start p-[12px] relative rounded-[10px] w-full cursor-pointer transition-all ${
                      formData.inspeksiType === "pool"
                        ? "border-[#903f98]"
                        : "border-[#a3a3a3] hover:border-[#903f98]"
                    }`}
                  >
                    <div className="flex gap-[11px] items-start relative flex-1">
                      <div className="relative shrink-0 size-[22px] flex items-center justify-center">
                        {formData.inspeksiType === "pool" ? (
                          <div className="size-[22px] rounded-full bg-[#a3cf62] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M11.6667 3.5L5.25 9.91667L2.33334 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="size-[22px] rounded-full border-2 border-[#a3a3a3]" />
                        )}
                      </div>
                      <div className="h-[53px] w-[54px] relative shrink-0">
                        <svg width="54" height="53" viewBox="0 0 54 53" fill="none">
                          <path d="M27 0C12.088 0 0 12.088 0 27C0 47.25 27 53 27 53C27 53 54 47.25 54 27C54 12.088 41.912 0 27 0ZM27 14.625C31.3845 14.625 35 18.2405 35 22.625C35 27.0095 31.3845 30.625 27 30.625C22.6155 30.625 19 27.0095 19 22.625C19 18.2405 22.6155 14.625 27 14.625Z" fill={formData.inspeksiType === "pool" ? "#903f98" : "#a3a3a3"}/>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start relative flex-1">
                        <p className="font-lato font-bold leading-[24px] text-[#232323] text-[16px] w-full">
                          Inspeksi Pool IBID
                        </p>
                        <p className="font-lato font-normal leading-[18px] text-[#585858] text-[12px] w-full">
                          Proses inspeksi selesai dilakukan di pool ibid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-[16px] items-start relative w-full">
              {formData.inspeksiType === "pool" ? (
                /* Pool IBID Form Layout */
                <>
                  {/* No. Polisi & Lokasi Inspeksi (IBID) */}
                  <div className="flex gap-[16px] items-start relative w-full">
                    <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                      <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                        No.Polisi<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.noPolisi}
                        onChange={(e) => handleInputChange("noPolisi", e.target.value)}
                        placeholder="Masukkan nomor polisi"
                        className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                      <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                        Lokasi Inspeksi<span className="text-red-500">*</span>
                      </label>
                      <div className="relative w-full mt-[4px]">
                        <select
                          value={formData.lokasiIBID}
                          onChange={(e) => handleInputChange("lokasiIBID", e.target.value)}
                          className="bg-white border border-[#cfd0d1] border-solid w-full h-[40px] pl-[12px] pr-[40px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] appearance-none"
                        >
                          <option value="">Pilih Lokasi IBID</option>
                          {ibidLocations.map((location) => (
                            <option key={location.name} value={location.name}>
                              {location.name}
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
                  </div>

                  {/* Detail Lokasi (Readonly) */}
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

                  {/* Tanggal Inspeksi & Nama */}
                  <div className="flex gap-[16px] items-start relative w-full">
                    <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                      <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                        Tanggal Inspeksi<span className="text-red-500">*</span>
                      </label>
                      <div className="relative w-full mt-[4px]">
                        <input
                          type="date"
                          value={formData.jadwalInspeksi}
                          onChange={(e) => handleInputChange("jadwalInspeksi", e.target.value)}
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
                  </div>

                  {/* No. Handphone */}
                  <div className="flex flex-col gap-[4px] items-start relative w-full pt-[8px]">
                    <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                      No. Handphone<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.noHp}
                      onChange={(e) => handleInputChange("noHp", e.target.value)}
                      placeholder="Masukkan nomor handphone"
                      className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                    />
                  </div>
                </>
              ) : (
                /* Eksklusif Form Layout */
                <>
                  {/* No. Polisi */}
                  <div className="flex flex-col gap-[4px] items-start relative w-full pt-[8px]">
                    <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                      No.Polisi<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.noPolisi}
                      onChange={(e) => handleInputChange("noPolisi", e.target.value)}
                      placeholder="Masukkan nomor polisi"
                      className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                    />
                  </div>

                  {/* Lokasi Inspeksi */}
                  <div className="flex flex-col gap-[4px] items-start relative w-full pt-[8px]">
                    <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                      Lokasi Inspeksi<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.lokasiInspeksi}
                      onChange={(e) => handleInputChange("lokasiInspeksi", e.target.value)}
                      placeholder="Masukkan lokasi inspeksi"
                      rows={3}
                      className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] resize-none mt-[4px]"
                    />
                  </div>

                  {/* Interactive Map */}
                  <div className="w-full h-[172px] rounded-[5px] overflow-hidden border border-[#cfd0d1] border-solid">
                    {formData.lokasiInspeksi ? (
                      mapLocation ? (
                        <MapComponent
                          lat={mapLocation.lat}
                          lng={mapLocation.lng}
                          address={formData.lokasiInspeksi}
                        />
                      ) : isGeocoding ? (
                        <div className="bg-[#e6e7e8] w-full h-full flex items-center justify-center">
                          <p className="font-lato font-normal text-[#7e7f7f] text-[14px]">
                            Mencari lokasi...
                          </p>
                        </div>
                      ) : (
                        <div className="bg-[#e6e7e8] w-full h-full flex items-center justify-center">
                          <p className="font-lato font-normal text-[#7e7f7f] text-[14px]">
                            Lokasi tidak ditemukan
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="bg-[#e6e7e8] w-full h-full flex items-center justify-center">
                        <p className="font-lato font-normal text-[#7e7f7f] text-[14px]">
                          Masukkan lokasi inspeksi untuk menampilkan peta
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Detail Lokasi & Jadwal Inspeksi */}
                  <div className="flex gap-[20px] items-start relative w-full">
                    <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                      <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                        Detail Lokasi<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.detailLokasi}
                        onChange={(e) => handleInputChange("detailLokasi", e.target.value)}
                        placeholder="Masukkan detail lokasi"
                        className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] items-start relative flex-1 pt-[8px]">
                      <label className="absolute bg-white px-[2px] py-0 left-[12px] top-0 z-10 font-lato font-normal leading-[21px] text-[#232323] text-[14px]">
                        Jadwal Inspeksi<span className="text-red-500">*</span>
                      </label>
                      <div className="relative w-full mt-[4px]">
                        <input
                          type="date"
                          value={formData.jadwalInspeksi}
                          onChange={(e) => handleInputChange("jadwalInspeksi", e.target.value)}
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

                  {/* Nama & No Hp */}
                  <div className="flex gap-[20px] items-start relative w-full">
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
                        No Hp<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.noHp}
                        onChange={(e) => handleInputChange("noHp", e.target.value)}
                        placeholder="Masukkan nomor handphone"
                        className="bg-white border border-[#cfd0d1] border-solid w-full p-[12px] rounded-[5px] font-lato font-normal leading-[21px] text-[#232323] text-[14px] focus:outline-none focus:border-[#903f98] mt-[4px]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center relative w-full">
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full flex gap-[4px] items-center justify-center px-[16px] py-[6px] h-[44px] relative rounded-[16px] transition-all ${
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
      </div>

      {/* Confirmation Modal */}
      <ConfirmTitipJualModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmSubmit}
        formData={{
          noPolisi: formData.noPolisi,
          carName: finalCarName,
          lokasiLelang: formData.inspeksiType === "pool" ? formData.lokasiIBID : undefined,
          inspeksiType: formData.inspeksiType,
          lokasiInspeksi: formData.lokasiInspeksi,
          lokasiIBID: formData.lokasiIBID,
          detailLokasi: formData.detailLokasi,
          jadwalInspeksi: formData.jadwalInspeksi,
          nama: formData.nama,
          noHp: formData.noHp,
        }}
      />
    </div>
  );
}

