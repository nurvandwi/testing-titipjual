"use client";

import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormTitipJualMobilDetail from "../components/FormTitipJualMobilDetail";

function FormTitipJualMobilDetailContent() {
  const handleSubmit = (formData: Record<string, string>) => {
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add navigation or API call here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <FormTitipJualMobilDetail
        backUrl="/form-titip-jual-mobil"
        backLabel="Kembali"
        submitButtonLabel="Daftar Titip Jual"
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}

export default function FormTitipJualMobilDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormTitipJualMobilDetailContent />
    </Suspense>
  );
}

