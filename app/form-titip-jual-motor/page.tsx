"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormTitipJualMobil from "../components/FormTitipJualMobil";

export default function FormTitipJualMotorPage() {
  // Sample options for Motor - in real app, these would come from API
  const tipeObjekOptions = ["Motor", "Mobil", "Lifestyle"];
  const merkOptions = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "Vespa"];
  const seriOptions = ["Beat", "Vario", "NMAX", "PCX", "Aerox", "Mio"];
  const silinderOptions = ["110", "125", "150", "160", "250", "300"];
  const tipeOptions = ["Matic", "Manual", "Kopling", "Sport"];
  const transmisiOptions = ["Automatic", "Manual"];
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
        subtitle="Silahkan input detail motor Anda untuk mengetahui estimasi harga motor Anda"
        illustration="/illustration_motorcycle.webp"
        illustrationAlt="Motor illustration"
        formTitle="Masukkan Detail Motor"
        formDescription="Informasi ini untuk estimasi harga pasaran motor Anda"
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

