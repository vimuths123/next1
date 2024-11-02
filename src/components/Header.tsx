import Link from 'next/link';
import Image from 'next/image'
import { poppins } from  '../app/fonts';

const Header = () => {
    return (
        <>
            <div className="bg-grad-white absolute top-0 bottom-auto left-0 right-0">
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
                        <nav role="navigation"
                            className={`${poppins.className} nav-menu text-black py-0 text-base font-normal leading-6 flex justify-center items-center float-right relative`}>
                            <Link href={"/"} className="relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto text-black py-0 font-poppins text-base font-normal leading-6 flex justify-center items-center">
                                Home
                            </Link>
                            <Link href={"/about"} className="relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto text-black py-0 font-poppins text-base font-normal leading-6 flex justify-center items-center">
                                About
                            </Link>
                            <Link href={"/pricing"} className="relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto text-black py-0 font-poppins text-base font-normal leading-6 flex justify-center items-center">
                                Pricing
                            </Link>
                            <Link href={"/mission"} className="relative inline-block align-top no-underline text-[#222222] p-5 text-left mx-auto text-black py-0 font-poppins text-base font-normal leading-6 flex justify-center items-center">
                                Mission
                            </Link>

                            <div>
                                <Link href={"/contact"} className="text-white bg-[#a06056] px-8 py-4 font-lexend text-[16px] font-semibold leading-[18px] inline-block border-0 no-underline cursor-pointer rounded-none">
                                    Contact Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;