import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Merriweather:300,300italic,400,400italic,700,700italic,900,900italic%7CLexend:100,200,300,regular,500,600,700,800,900%7CMerriweather+Sans:300,regular,500,600,700,800%7CPoppins:100,200,300,regular,500,600,700,800,900%7CManrope:200,300,regular,500,600,700,800%7CVarta:300,regular,500,600,700%7CDM+Serif+Display:regular%7CJost:100,200,300,regular,500,600,700,800,900%7CRoboto:300,regular,500,700,900"
          media="all"
        />
      </Head>
      <div className="min-h-screen h-auto max-h-none homebg1">
        <div className="flex h-screen min-h-screen pt-[50px] xl:pt-[50px]">

          <div className="flex flex-col justify-center items-center w-[45%] h-full pt-0">
            <div className="flex flex-col w-[90%] max-w-[450px] gap-y-[30px]">
              <h3 className="text-[#a06056] m-0 text-[60px] font-light leading-[70px] font-merriweather">
                Your Remote Architectural Engineering Team
              </h3>
              <p className="text-[rgba(112,100,88,0.9)] m-0 font-poppins text-base font-light leading-[30px]">
                Metafy is an on-demand Architectural Engineering subscription service that enables companies to
                access the top 1% of global talent, eliminate their cost of hiring, and effortlessly scale their.
                Enter your email below to get started.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#a06056] text-white font-lexend text-base font-semibold leading-[18px] cursor-pointer no-underline rounded-none hover:bg-[#8d534a] transition-colors duration-300"
                >
                  Book A Call
                </Link>
              </div>
            </div>

          </div>

          <div className="flex flex-col justify-center items-stretch h-full w-[55%]">
            <Image
              src="/images/homeright.png"
              alt=""
              className="image-9"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
              sizes="(max-width: 991px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
