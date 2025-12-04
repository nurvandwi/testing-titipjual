"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormTitipJualMobil from "../components/FormTitipJualMobil";

export default function FormTitipJualMobilPage() {
  // Sample options - in real app, these would come from API
  const tipeObjekOptions = ["Mobil", "Motor", "Lifestyle"];
  const merkOptions = ["Toyota", "Honda", "Suzuki", "Daihatsu", "Mitsubishi"];
  const seriOptions = ["Avanza", "Innova", "Fortuner", "Rush"];
  const silinderOptions = ["1000", "1200", "1500", "1800", "2000", "2500"];
  const tipeOptions = ["Sedan", "SUV", "MPV", "Hatchback"];
  const transmisiOptions = ["Manual", "Automatic", "CVT"];
  const tahunOptions = Array.from({ length: 30 }, (_, i) => (2024 - i).toString());
  const lokasiOptions = ["Jakarta", "Bandung", "Surabaya", "Medan", "Semarang"];

  const fields = [
    {
      label: "Tipe Objek *",
      key: "tipeObjek",
      placeholder: "Pilih Tipe Objek",
      options: tipeObjekOptions,
    },
    {
      label: "Merk *",
      key: "merk",
      placeholder: "Pilih Merk",
      options: merkOptions,
    },
    {
      label: "Seri *",
      key: "seri",
      placeholder: "Pilih Seri",
      options: seriOptions,
    },
    {
      label: "Silinder *",
      key: "silinder",
      placeholder: "Pilih Silinder",
      options: silinderOptions.map((opt) => `${opt} CC`),
    },
    {
      label: "Tipe *",
      key: "tipe",
      placeholder: "Pilih Tipe",
      options: tipeOptions,
    },
    {
      label: "Transmisi *",
      key: "transmisi",
      placeholder: "Pilih Transmisi",
      options: transmisiOptions,
    },
    {
      label: "Tahun *",
      key: "tahun",
      placeholder: "Pilih Tahun",
      options: tahunOptions,
    },
    {
      label: "Lokasi Lelang *",
      key: "lokasiLelang",
      placeholder: "Pilih Lokasi",
      options: lokasiOptions,
    },
  ];

  const handleSubmit = (formData: Record<string, string>) => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add navigation or API call here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <FormTitipJualMobil
        title="Belum Ada Estimasi Harga"
        subtitle="Silahkan input detail mobil Anda untuk mengetahui estimasi harga mobil Anda "
        illustration="/form-car-illustration.png"
        illustrationAlt="Car illustration"
        formTitle="Masukkan Detail Mobil"
        formDescription="Informasi ini untuk estimasi harga pasaran mobil Anda"
        fields={fields}
        backUrl="/"
        backLabel="Kembali"
        clearButtonLabel="Hapus pencarian"
        submitButtonLabel="Cek Estimasi Harga"
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

