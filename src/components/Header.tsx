import Link from 'next/link';
import Image from 'next/image';
import Nav from "@/components/Nav";

const Header = () => {
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
                        <Nav />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;