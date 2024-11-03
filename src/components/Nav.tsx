"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { poppins } from  '../app/fonts';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav
      role="navigation"
      className={`${poppins.className} nav-menu text-black py-0 text-base font-normal leading-6 flex justify-center items-center float-right relative`}
    >
      <Link
        href="/"
        className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${
          pathname === '/' ? 'font-bold' : 'font-normal'
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${
          pathname === '/about' ? 'font-bold' : 'font-normal'
        }`}
      >
        About
      </Link>
      <Link
        href="/pricing"
        className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${
          pathname === '/pricing' ? 'font-bold' : 'font-normal'
        }`}
      >
        Pricing
      </Link>
      <Link
        href="/mission"
        className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${
          pathname === '/mission' ? 'font-bold' : 'font-normal'
        }`}
      >
        Mission
      </Link>

      <div>
        <Link
          href="/contact"
          className="text-white bg-[#a06056] px-8 py-4 font-lexend text-[16px] font-semibold leading-[18px] inline-block border-0 no-underline cursor-pointer rounded-none"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
