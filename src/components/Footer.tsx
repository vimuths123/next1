import Image from "next/image";
import Link from "next/link";
import FooterNav from "./FooterNav";

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
          <FooterNav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;