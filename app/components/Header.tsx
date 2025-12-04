import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#fafafa] flex flex-col gap-[10px] items-center justify-center px-4 sm:px-8 md:px-[84px] py-0 relative shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] w-full">
      <div className="flex flex-col gap-[10px] items-center justify-center px-0 py-[16px] relative w-full max-w-[1440px]">
        <div className="flex items-center justify-between relative w-full">
          {/* Logo */}
          <Link href="/" className="h-[48px] w-[66px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/ibid-logo.png"
              alt="IBID Logo"
              width={66}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex font-lato font-normal gap-[24px] items-center justify-end leading-[20px] text-[#171717] text-[14px]">
            <a href="#beranda" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Beranda
            </a>
            <a href="#cara-titip-jual" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Cara Titip Jual
            </a>
            <a href="#keuntungan" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Keuntungan
            </a>
            <a href="#pencapaian" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Pencapaian
            </a>
            <a href="#kerjasama" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Kerjasama
            </a>
            <a href="#faq" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Login Button */}
          <button className="bg-[#903f98] flex items-center justify-center gap-[6px] h-[38px] px-[12px] py-[6px] rounded-[50px] hover:opacity-90 transition-opacity shrink-0">
            <span className="font-lato font-bold leading-[18px] text-[12px] text-[#f4ecf5] whitespace-nowrap">
              Login
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

