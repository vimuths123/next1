"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { poppins } from '../app/fonts';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-grad-white absolute top-0 bottom-auto left-0 right-0 z-[1]">
                <div className="w-[90%] max-w-[1327px] bg-transparent mx-auto pt-11 pb-11 static">
                    <div className="flex justify-between items-center">
                        <Link className="relative float-left text-[#333333] no-underline" href="/" aria-label="home">
                            <Image
                                src={'images/Metafy.svg'}
                                alt="Dynamic image"
                                width={93}
                                height={28}
                            />
                        </Link>
                        <div>
                            <div className="lg:hidden space-y-1 cursor-pointer" onClick={toggleDropdown}>
                                <span className="block w-7 h-0.5 bg-gray-700"></span>
                                <span className="block w-7 h-0.5 bg-gray-700"></span>
                                <span className="block w-7 h-0.5 bg-gray-700"></span>
                                <span className="block w-7 h-0.5 bg-gray-700"></span>
                            </div>

                            <nav
                                role="navigation"
                                className={`${poppins.className} nav-menu hidden lg:flex text-black py-0 text-base font-normal leading-6 justify-center items-center float-right relative`}
                            >
                                <Link
                                    href="/"
                                    className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${pathname === '/' ? 'font-bold' : 'font-normal'}`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${pathname === '/about' ? 'font-bold' : 'font-normal'}`}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/pricing"
                                    className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${pathname === '/pricing' ? 'font-bold' : 'font-normal'}`}
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/mission"
                                    className={`relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto py-0 font-poppins text-base leading-6 flex justify-center items-center ${pathname === '/mission' ? 'font-bold' : 'font-normal'}`}
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
                        </div>
                    </div>
                </div>
                
                {/* Dropdown Menu with Slide-Down Animation */}
                <div
                    className={`absolute top-full left-0 w-full bg-white shadow-lg z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0 pointer-events-none'}`}
                >
                    <nav
                        role="navigation"
                        className={`${poppins.className} flex flex-col text-black py-4 text-base font-normal leading-6 items-center`}
                    >
                        <Link
                            onClick={toggleDropdown}
                            href="/"
                            className={`w-full text-center p-4 border-b border-gray-200 ${pathname === '/' ? 'font-bold' : 'font-normal'}`}
                        >
                            Home
                        </Link>
                        <Link
                            onClick={toggleDropdown}
                            href="/about"
                            className={`w-full text-center p-4 border-b border-gray-200 ${pathname === '/about' ? 'font-bold' : 'font-normal'}`}
                        >
                            About
                        </Link>
                        <Link
                            onClick={toggleDropdown}
                            href="/pricing"
                            className={`w-full text-center p-4 border-b border-gray-200 ${pathname === '/pricing' ? 'font-bold' : 'font-normal'}`}
                        >
                            Pricing
                        </Link>
                        <Link
                            onClick={toggleDropdown}
                            href="/mission"
                            className={`w-full text-center p-4 border-b border-gray-200 ${pathname === '/mission' ? 'font-bold' : 'font-normal'}`}
                        >
                            Mission
                        </Link>
                        <Link
                            onClick={toggleDropdown}
                            href="/contact"
                            className="w-full text-center p-4 text-white bg-[#a06056] mx-2"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
