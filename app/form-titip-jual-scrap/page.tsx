"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FormTitipJualSCRAP from "../components/FormTitipJualSCRAP";

export default function FormTitipJualSCRAPPage() {
  const handleSubmit = (formData: Record<string, string>) => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add navigation or API call here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <FormTitipJualSCRAP
        title="Proses Inspeksi yang Aman dan Transparan"
        subtitle="Sebelum barang Anda masuk ke proses titip jual, kami melakukan inspeksi untuk memastikan data sesuai kondisi sebenarnya"
        illustration="/illustration_except_estimate_price.webp"
        illustrationAlt="Inspection illustration"
        formTitle="Detail Pengecekan Barang"
        backUrl="/"
        backLabel="Kembali"
        submitButtonLabel="Daftar Titip Jual"
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

