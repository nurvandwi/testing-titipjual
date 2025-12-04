"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormTitipJualPerusahaan from "../components/FormTitipJualPerusahaan";

function FormTitipJualPerusahaanContent() {
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") || "Mobil";

  // Map kategori untuk display
  const kategoriMap: Record<string, string> = {
    "Mobil": "Mobil",
    "Motor": "Motor",
    "Lifestyle": "Lifestyle",
    "HVE": "HVE",
    "SCRAP": "SCRAP"
  };

  const objekLelang = kategoriMap[kategori] || kategori;

  const handleSubmit = (formData: Record<string, string>) => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add navigation or API call here
    // For now, navigate to success page
    // router.push("/titip-jual-success");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <FormTitipJualPerusahaan
        title="Titip jual barang kantor lamamu di balai lelang IBID"
        subtitle="Dapatkan harga jual lebih tinggi lewat lelang tanpa jumlah minimal. Kami bantu lelang berbagai barang, mulai dari mobil dinas hingga peralatan kantor."
        illustration="/lifestyle-inspection-illustration.png"
        illustrationAlt="Office items illustration"
        formTitle="Pengajuan Titip Jual & Data Inspeksi"
        formDescription="Informasi ini untuk pengecekan unit Anda sebelum dititip jual"
        objekLelang={objekLelang}
        backUrl="/"
        backLabel="Kembali"
        submitButtonLabel="Daftar Titip Jual"
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default function FormTitipJualPerusahaanPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormTitipJualPerusahaanContent />
    </Suspense>
  );
}

