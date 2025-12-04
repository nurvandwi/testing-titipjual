import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#171717] flex flex-col gap-[20px] items-center px-4 sm:px-8 md:px-[30px] py-[30px] relative w-full">
      {/* Logo DJKN */}
      <div className="flex items-center justify-center w-full max-w-[1440px]">
        <div className="h-[48px] w-full max-w-[512px] relative">
          <Image
            src="/logo-djkn-putih.png"
            alt="DJKN Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[1px] bg-white/20 w-full max-w-[1440px]" />

      {/* Main Content - 4 Columns */}
      <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-start w-full max-w-[1440px]">
        {/* Column 1: Download */}
        <div className="flex flex-col gap-[20px] items-start relative w-full lg:flex-1">
          <div className="flex flex-col gap-[20px] items-start relative w-full">
            <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] w-full">
              Download
            </p>
            <div className="flex flex-col gap-[12px] items-start relative w-full">
              <div className="h-[48px] w-[162px] relative">
                <Image
                  src="/logo-google-play.png"
                  alt="Google Play"
                  fill
                  className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="h-[48px] w-[162px] relative">
                <Image
                  src="/logo-app-store.png"
                  alt="App Store"
                  fill
                  className="object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-start relative w-full">
            <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] w-full">
              Ikuti kami:
            </p>
            <div className="flex gap-[8px] items-center relative w-full">
              {/* Instagram */}
              <a href="#" className="size-[28px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#FAFAFA" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="4" stroke="#FAFAFA" strokeWidth="1.5" />
                  <circle cx="19" cy="9" r="1.5" fill="#FAFAFA" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="size-[28px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2C7.373 2 2 7.373 2 14c0 5.99 4.388 10.954 10.125 11.854v-8.384H8.578v-3.47h3.547V10.86c0-3.498 2.083-5.428 5.27-5.428 1.526 0 3.123.273 3.123.273v3.434h-1.76c-1.735 0-2.275 1.077-2.275 2.18v2.616h3.87l-0.619 3.47h-3.251v8.384C19.612 24.954 24 19.99 24 14c0-6.627-5.373-12-12-12z" fill="#FAFAFA" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="size-[28px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2C7.373 2 2 7.373 2 14c0 6.627 5.373 12 12 12s12-5.373 12-12S20.627 2 14 2zm5.568 9.5c.007.15.01.302.01.454 0 4.623-3.522 9.95-9.95 9.95a9.89 9.89 0 01-5.38-1.576 7.02 7.02 0 005.18-1.45 3.5 3.5 0 01-3.266-2.425 3.5 3.5 0 001.58-.06 3.5 3.5 0 01-2.806-3.43v-.044a3.5 3.5 0 001.585.437 3.5 3.5 0 01-1.56-2.92 3.5 3.5 0 01.483-1.76 9.95 9.95 0 007.22 3.66 3.5 3.5 0 01-.108-.8 3.5 3.5 0 013.5-3.5c1.006 0 1.914.423 2.551 1.1a7.02 7.02 0 002.22-.85 3.5 3.5 0 01-1.54 1.93 7.02 7.02 0 002.01-.54 7.02 7.02 0 01-1.54 1.81z" fill="#FAFAFA" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="size-[28px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2C7.373 2 2 7.373 2 14c0 6.627 5.373 12 12 12s12-5.373 12-12S20.627 2 14 2zm4.5 14l-6-3.5v7l6-3.5z" fill="#FAFAFA" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: IBID */}
        <div className="flex flex-col gap-[20px] items-start relative w-full lg:flex-1">
          <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] w-full">
            IBID
          </p>
          <div className="flex flex-col font-lato gap-[16px] items-start leading-[20px] relative text-[14px] text-white w-full">
            <a href="#" className="hover:opacity-80 transition-opacity">Hubungi kami</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Tentang kami</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Lokasi Balai Lelang</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Prosedur Lelang</a>
            <a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Blog</a>
          </div>
        </div>

        {/* Column 3: Layanan */}
        <div className="flex flex-col gap-[20px] items-start relative w-full lg:flex-1">
          <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] w-full">
            Layanan
          </p>
          <div className="flex flex-col font-lato gap-[16px] items-start leading-[20px] relative text-[14px] text-white w-full">
            <a href="#" className="hover:opacity-80 transition-opacity">Cari Objek Lelang</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Cari Jadwal Lelang</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Beli NPL</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Titip Lelang</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Ikut Lelang</a>
            <a href="#" className="hover:opacity-80 transition-opacity">MAP</a>
          </div>
        </div>

        {/* Column 4: Customer Center */}
        <div className="flex flex-col gap-[20px] items-start relative w-full lg:flex-1">
          <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] w-full">
            Customer Center
          </p>
          <div className="flex flex-col gap-[16px] items-start relative w-full">
            {/* Location */}
            <div className="flex gap-[8px] items-start justify-center relative w-full">
              <div className="size-[20px] relative shrink-0 flex items-center justify-center mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 3.74 5 11 5 11s5-7.26 5-11c0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FFFFFF" />
                </svg>
              </div>
              <p className="font-lato leading-[20px] relative text-[14px] text-white flex-1">
                Kawasan Industri Pulogadung, Jl. Pulogadung No. 35 Rw.9, Jatinegara, Kec. Cakung, Kota Jakarta Timur, DKI Jakarta 13930,
              </p>
            </div>
            {/* Phone */}
            <div className="flex gap-[8px] items-center justify-center relative w-full">
              <div className="size-[20px] relative shrink-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.308 12.577c-.25-.125-1.808-.897-2.096-1.002-.25-.083-.5-.125-.75.042-.25.166-1.02.833-1.25 1.002-.25.166-.5.208-.75.042-.25-.166-1.02-.833-2.02-1.335-1-.5-1.75-.75-2.25-1.002-.5-.25-1.25-1.25-1.5-1.5-.25-.25-.5-.5-.042-.75.458-.25 1.02-1.002 1.25-1.335.25-.333.125-.5.042-.75-.083-.25-.75-1.808-1.002-2.096-.25-.25-.5-.5-.75-.25-.25.25-1.02.833-1.25 1.002-.25.166-.5.25-.75.042-.25-.208-1.02-.833-1.5-1.002-.5-.166-1.25-.125-1.75.042-.5.166-1.02.5-1.25 1.002-.25.5-.5 1.5-.5 2.5 0 1 .25 2 .5 2.5.25.5 1.25 2.5 2.5 3.75 1.25 1.25 2.5 2.5 3.75 3.25 1.25.75 2.5 1.5 3.25 1.75.75.25 1.5.5 2.5.5 1 0 2-.25 2.5-.5.5-.25.833-1.02 1.002-1.25.166-.25.25-.5.042-.75z" fill="#FFFFFF" />
                </svg>
              </div>
              <p className="font-lato leading-[20px] relative text-[14px] text-white flex-1">
                +62 812-8773-5544
              </p>
            </div>
            {/* Time */}
            <div className="flex gap-[8px] items-center justify-center relative w-full">
              <div className="size-[20px] relative shrink-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <path d="M10 6v4l3 2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-lato leading-[20px] relative text-[14px] text-white flex-1">
                Senin - Jumat : 09.00 - 18.00 WIB
              </p>
            </div>
            {/* Email */}
            <div className="flex gap-[8px] items-center justify-center relative w-full">
              <div className="size-[24px] relative shrink-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                  <polyline points="22,6 12,13 2,6" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="font-lato leading-[20px] relative text-[14px] text-white flex-1">
                info.ibid@ibid.astra.co.id
              </p>
            </div>
          </div>
          {/* Sertifikasi */}
          <div className="flex flex-col gap-[10px] items-start relative">
            <p className="font-lato font-bold leading-[24px] relative text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
              Sertifikasi
            </p>
            <div className="h-[48px] w-[100px] relative">
              <Image
                src="/logo-iso.png"
                alt="ISO Certification"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[1px] bg-white/20 w-full max-w-[1440px]" />

      {/* Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-[1440px]">
        <p className="font-lato leading-[20px] relative text-[14px] text-white text-center sm:text-left">
          PT BALAI LELANG SERASI © 2020 all right reserved
        </p>
        <p className="font-lato leading-[20px] relative text-[14px] text-white text-center sm:text-right whitespace-pre-wrap">
          Kebijakan Privasi | Syarat & Ketentuan
        </p>
      </div>
    </footer>
  );
}

