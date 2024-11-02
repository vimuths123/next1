import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center pt-[80px] pb-[80px]">
          <div className="gap-[30px] flex flex-col items-start">
            <Link className="relative float-left text-[#333333] no-underline" href="/" aria-label="home">
              <Image
                src={'images/Metafy.svg'}
                alt="Dynamic image"
                width={93}
                height={28}
              />
            </Link>
            <p className="mb-0 mt-0">
              ©{new Date().getFullYear()}, All rights reserved.
            </p>
            <div className="gap-[20px] flex justify-end items-center">
              <div>
                <Image
                  src={'images/Facebook.svg'}
                  alt="Dynamic image"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src={'images/Twitter.svg'}
                  alt="Dynamic image"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src={'images/Instagram.svg'}
                  alt="Dynamic image"
                  width={24}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src={'images/Linkedin.svg'}
                  alt="Dynamic image"
                  width={24}
                  height={25}
                />
              </div>
            </div>
          </div>
          <div className="gap-[40px] flex items-center">
            <Link href="/" className="text-[#333] text-[16px] font-medium no-underline">
              Home
            </Link>
            <Link href="/about" className="text-[#333] text-[16px] font-medium no-underline">
              About
            </Link>
            <Link href="/pricing" className="text-[#333] text-[16px] font-medium no-underline">
              Pricing
            </Link>
            <Link href="/mission" className="text-[#333] text-[16px] font-medium no-underline">
              Mission
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;