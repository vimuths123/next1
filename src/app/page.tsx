import Image from 'next/image';
import Link from 'next/link';
import { merriweather, poppins, dmSerifDisplay, jost } from  './fonts';

export default function Home() {
  return (
    <>
      <div className="min-h-screen h-auto max-h-none homebg1 section1">
        <div className="flex h-screen min-h-screen pt-[50px] xl:pt-[50px]">

          <div className="flex flex-col justify-center items-center w-[45%] h-full pt-0">
            <div className="flex flex-col w-[90%] max-w-[450px] gap-y-[30px]">
              <h3 className={`${merriweather.className} text-[#a06056] m-0 text-[60px] font-light leading-[70px]`}>
                Your Remote Architectural Engineering Team
              </h3>
              <p className={`${poppins.className} text-[rgba(112,100,88,0.9)] m-0 text-base font-light leading-[30px]`}>
                Metafy is an on-demand Architectural Engineering subscription service that enables companies to
                access the top 1% of global talent, eliminate their cost of hiring, and effortlessly scale their.
                Enter your email below to get started.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#a06056] text-white font-lexend text-base font-semibold leading-[18px] cursor-pointer no-underline rounded-none hover:bg-[#8d534a] transition-colors duration-300"
                >
                  Contact Us
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
      
      <div className="bg-[#292f36] section2">
        <div className="py-[150px]">
          <div className="container mx-auto w-[90%] max-w-[1200px]">
            <div className="grid grid-cols-4 gap-y-6">
              <div className="flex items-center">
                <div className="px-[54px]">
                  <div>
                    <h1 className={`${dmSerifDisplay.className} text-[#f3eee8] text-center text-[85px] font-normal leading-[106.25px]`}>
                      12
                    </h1>
                  </div>
                  <div>
                    <p className={`${jost.className} text-white text-center text-[22px] leading-[33px]}`}>
                      Years Of Experiance
                    </p>
                  </div>
                </div>
                <div className="w-[1px] h-[155px] bg-white mx-auto"></div>
              </div>

              <div className="flex items-center">
                <div className="px-[54px]">
                  <div>
                    <h1 className={`${dmSerifDisplay.className} text-[#f3eee8] text-center text-[85px] font-normal leading-[106.25px]`}>
                      85
                    </h1>
                  </div>
                  <div>
                    <p className={`${jost.className} text-white text-center text-[22px] leading-[33px]}`}>
                      Success Project
                    </p>
                  </div>
                </div>
                <div className="w-[1px] h-[155px] bg-white mx-auto"></div>
              </div>
              <div className="flex items-center">
                <div className="px-[54px]">
                  <div>
                    <h1 className={`${dmSerifDisplay.className} text-[#f3eee8] text-center text-[85px] font-normal leading-[106.25px]`}>
                      15
                    </h1>
                  </div>
                  <div>
                    <p className={`${jost.className} text-white text-center text-[22px] leading-[33px]}`}>
                      Active Project
                    </p>
                  </div>
                </div>
                <div className="w-[1px] h-[155px] bg-white mx-auto"></div>
              </div>

              <div className="flex items-center">
                <div className="px-[54px]">
                  <div>
                    <h1 className={`${dmSerifDisplay.className} text-[#f3eee8] text-center text-[85px] font-normal leading-[106.25px]`}>
                      95
                    </h1>
                  </div>
                  <div>
                    <p className={`${jost.className} text-white text-center text-[22px] leading-[33px]}`}>
                      Years Of Experiance
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section3'>
        <div className='flex'>
          <div className='w-[50%]'>
            <Image
              src="/images/section3home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  Access The Top 1% of Architectural Engineering Talent
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  Leveraging the best design talent is no longer a distant dream. With Metafy&apos;s on-demand Architectural Engineering subscription service, companies across the world can now tap into the elite 1% of global pre-vetted Architectural Engineers who can swiftly power up their creative output.
                  <br /><br />
                  Companies are no longer burdened with the challenge of costly hiring, they need not worry about rapidly laddering up members to match their requirements; Metafy eliminates all these hassles and ensures that your company enjoys smooth functioning with access to top-shelf creative elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section4'>
        <div className='flex'>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  Effortlessly Scale Your Team
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  Our exceptional service provides big and small organizations alike with an efficient way to bring on the
                  best Architectural Engineering talent &ndash; all at a fraction of traditional costs. Whether you need just
                  one designer or are assembling an entire division from scratch, we can help you get it done without the
                  typical hassles associated with corporate overhead. No more lengthy legal processes getting in your way;
                  let us take care of finding experienced designers so that your team is ready for success.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <Image
              src="/images/section4home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
        </div>
      </div>

      <div className='section5'>
        <div className='flex'>
          <div className='w-[50%]'>
            <Image
              src="/images/section5home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  Flexible Pricing Options
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  If you&apos;re looking to significantly reduce your costs while accessing the best talent in the world, then Metafy&apos;s flexible pricing options is an ideal fit. We have a variety of plans to suit companies of all sizes. Depending on the amount of creative work you need to be completed we are able to create a custom plan for your specific needs.
                  <br /><br />
                  With Metafy&apos;s flexible pricing options, there&apos;s never been an easier or more cost-effective way to get the perfect team for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section6'>
        <div className='flex'>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  Fast Turnarounds
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  With our powerful combination of resources at hand, we are confident that we can meet even the most difficult deadlines. No more stress or uncertainty associated with finding the right people for your job - our team is here to make sure you have the best experience possible when it comes to getting the job done in a timely manner.
                  <br /><br />
                  Our industry-leading on-demand subscription service offers companies the opportunity to tap into expert Architectural Engineering talent from around the world. Not only that, our swift turnaround times ensure projects are completed efficiently and accurately according to your specific requirements. With our global team, we are set up to accommodate even the most ambitious deadlines - giving you the perfect solution for fast turnarounds.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <Image
              src="/images/section6home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
        </div>
      </div>

      <div className='section7'>
        <div>
          <div className="w-[90%] flex flex-col justify-center items-center mx-auto pt-60">
            <h1 className="mt-0 font-serif text-[37px] font-normal leading-[45.7px]">
              Designed for You
            </h1>
            <div className="w-[49px] h-[4px] bg-[#a06056] my-[26px]"></div>
            <div className="max-w-[821px] text-center mx-auto">
              <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                We&apos;ve designed and curated pieces that are a cut above your average home goods, because when you level up your everyday objects, you elevate your daily rituals. Let the magic happen.
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div>
          <Image
            src="/images/section5home2.png"
            alt=""
            className="w-full max-w-full"
            width={1061}
            height={1061} // Assuming it's a square image, adjust if not
          />
        </div>
      </div>

      <div className='section8'>
        <div className="w-[90%] mx-auto pt-[200px] pb-[300px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/section5home3.svg"
              alt=""
              className="max-w-full align-middle inline-block mb-[35px]"
              width={45}
              height={45}
            />
            <div className="w-[450px] text-center flex flex-col justify-center items-center mb-[100px]">
              <h1 className="mt-0 font-merriweather text-[37px] font-normal leading-[45.7px]">
                What Other Companies Are Saying
              </h1>
              <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]">
              </div>
            </div>
          </div>
          <div className="max-w-[1180px] mx-auto shadow-[0_20px_30px_1px_rgba(0,0,0,0.15)]">
            <div className="grid gap-0 grid-rows-[auto_auto] grid-cols-[.8fr_1fr] auto-cols-fr">
              <div className="col-span-1 row-span-1 bg-white p-[35px]">
                <div>
                  <div className="flex flex-wrap gap-[5px] items-center pt-[24px] pb-[24px]">
                    <Image
                      src="/images/person1.png"
                      alt=""
                      width={61}
                      height={61} />
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-[#666] mt-0 mb-0 text-[14.4px] font-extrabold leading-[19.67px]">
                        Kristin Watson
                      </h1>
                      <p className="text-[#666] mt-0 mb-0 font-manrope text-[9.6px] leading-[13.11px]">
                        Marketing Coordinator
                      </p>
                    </div>

                  </div>
                  <div className="p-[20px] pr-0">
                    <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                      Growing our team was a breeze. We instantly had access to some of the best talent in the world without
                      any of the overhead cost associated with traditional hiring. We found that it was easy to
                      effortlessly scale our team to suit our needs and we could do so quickly and with confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-[auto] gap-0 auto-cols-fr bg-white">
                <Image
                  src="/images/section5home4.png"
                  alt=""
                  width={400}
                  height={400}
                  className="col-span-1 row-span-1 w-full h-full max-w-full align-middle inline-block object-cover" />
                <div className="max-w-[80%] flex flex-col justify-center items-start mx-auto">
                  <div className="flex flex-wrap gap-[5px] items-center pt-[24px] pb-[24px]">
                    <Image
                      className="rounded-full max-w-full align-middle inline-block"
                      src="/images/person2.png"
                      alt=""
                      width={61}
                      height={61} />
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-[#666] mt-0 mb-0 text-[14.4px] font-extrabold leading-[19.67px]">
                        Erica Morgan
                      </h1>
                      <p className="text-[#666] mt-0 mb-0 font-manrope text-[9.6px] leading-[13.11px]">
                        Human Resource Manager
                      </p>
                    </div>
                  </div>
                  <div className="p-[20px] pr-0">
                    <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                      They are able to get us the marketing creative we need quickly to help us close more sales. Its been an absolute pleasure working with them.
                    </p>

                  </div>
                </div>
              </div>
              <Image
                src="/images/section5home5.png"
                alt=''
                width={400}
                height={400}
                className="col-span-1 row-span-1 w-full h-full object-cover max-w-full align-middle inline-block" />
              <div className="grid grid-cols-2 grid-rows-[auto] gap-0 auto-cols-fr bg-white">
                <div className="max-w-[80%] flex flex-col justify-center items-start mx-auto">
                  <div className="flex flex-wrap gap-[5px] items-center pt-[24px] pb-[24px]">
                    <Image
                      src="/images/person3.png"
                      alt=""
                      width={61}
                      height={61}
                      className="rounded-full max-w-full align-middle inline-block"
                    />
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="text-[#666] mt-0 mb-0 text-[14.4px] font-extrabold leading-[19.67px]">
                        Ethan Mitchell
                      </h1>
                      <p className="text-[#666] mt-0 mb-0 font-manrope text-[9.6px] leading-[13.11px]">
                        Sales Executive
                      </p>
                    </div>

                  </div>
                  <div className="p-[20px] pr-0">
                    <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                      I&#39;m incredibly impressed with the creativity and attention to detail of the design team. They brought my vision to life with precision.
                    </p>

                  </div>
                </div>
                <Image
                  src="/images/section5home6.png"
                  alt=''
                  width={400}
                  height={400}
                  className="col-span-1 row-span-1 w-full h-full object-cover max-w-full align-middle inline-block" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='section9'>
        <div className='flex'>
          <div className='w-[50%]'>
            <Image
              src="/images/section9home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  20X Faster Than Hiring Internally
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  peed is the number one asset you need as an organization to win in your market. With us in your corner, we can supercharge your time to hire and get people making an impact immediately without the expensive hiring costs associated with expanding rapidly.
                  <br /><br />
                  We have teams of pre-vetted Architectural Engineers that are ready to take on even your most ambitious projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section10'>
        <div className='flex'>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  Eliminate Your Hiring Costs
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  With design talent so hard to come by, it&#39;s no wonder the hiring process can become a total nightmare. From endless interviews and screenings, to painstakingly verifying a potential candidate&#39;s qualifications - why not let us take this burden away?
                  <br /><br />
                  By partnering with us you&#39;ll get access to top-notch Architectural Engineering talent who have delivered on even the toughest of tasks. Our goal is to enable you to focus on creating great products while we make sure your team is well equipped with the creative talent it needs - leaving those frustrating headaches behind.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <Image
              src="/images/section10home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
        </div>
      </div>

      <div className='section11'>
        <div className='flex'>
          <div className='w-[50%]'>
            <Image
              src="/images/section11home.png"
              alt=""
              className="w-full h-screen max-w-full align-middle inline-block"
              width={1061}
              height={1061} // Assuming it's a square image, adjust if not
            />
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="w-[90%] mx-auto">
              <div className="max-w-[438px] mx-auto">
                <h1 className="mt-0 text-[37px] font-normal leading-[45.7px]">
                  A Dedicated Team You Can Count On
                </h1>
                <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                  This is what we have so far &quot;With our dedicated team model it enables you to have the same experienced team members that know your business inside and out on a day-to-day basis. This is why our model succeeds where other outsourced teams fail.
                  <br /><br />
                  Working with us is like having an entire Architectural Engineering division that you don&#39;t have to worry about managing in house. Just communicate with your head of design and we can take care of the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-no-repeat bg-cover bg-[0_0] section12"
        style={{ backgroundImage: `url(${'/images/section12homebg.webp'})` }}
      >
        <div className="grid gap-x-[74px] gap-y-[24px] grid-rows-auto w-[90%] max-w-[1320px] grid-cols-[488px_1fr] auto-cols-fr items-start mx-auto pt-[140px] pb-[300px]">
          <div className="w-[488px] bg-[#292f36] p-[50px]">
            <div className="max-w-[388px]">
              <h1 className="text-white mt-0 mb-[10px] text-[37px] font-normal leading-[45.7px] my-[0.67em]">
                Our Process
              </h1>
              <div className="w-[49px] h-[4px] bg-[#a06056] mt-[26px] mb-[26px]"></div>
              <p className="text-white mt-0 mb-0 font-light text-[16px] leading-[30px] font-poppins">
                Metafy is your go-to on-demand Architectural Engineering subscription service, unlocking access to the top 1% of global talent to meet your project needs without the hassle of hiring. Begin by subscribing to Metafy and defining your project requirements. Our service is designed to alleviate the stress associated with finding the right designer for your needs, instantly matching you with a top-tier professional ready to bring your vision to life. The collaboration with your designated designer is facilitated through our intuitive platform, allowing for a seamless remote working experience. Share your feedback and watch your concepts evolve, without any hassles. At the end of this collaborative journey, receive your high-quality Architectural Engineering, crafted to your specifications and ready for immediate integration into your project. And remember, your satisfaction is our priority — you have the complete freedom to request revisions to get the output just right, meeting your expectations down to the finest detail.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white mb-[32px] ml-0 p-[62px_40px]">
              <div>
                <h1 className="text-[25px] leading-[48px] mt-0 font-normal mb-[10px] my-[0.67em]">
                  1. Submit A Request
                </h1>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                  Just type out instructions for what you would like us to do and we will get right to work on it. If you need help articulating your project we got you covered too.
                </p>
              </div>
            </div>
            <div className="bg-white mb-[32px] ml-0 p-[62px_40px]">
              <div>
                <h1 className="text-[25px] leading-[48px] mt-0 font-normal mb-[10px] my-[0.67em]">
                  2. Your Designers Get To Work
                </h1>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                  Based on your instructions we will adjust your team as needed so you get the output you are looking for.
                </p>
              </div>
            </div>
            <div className="bg-white mb-[32px] ml-0 p-[62px_40px]">
              <div>
                <h1 className="text-[25px] leading-[48px] mt-0 font-normal mb-[10px] my-[0.67em]">
                  3. Receive The Code Back How You Want
                </h1>
                <p className="text-[rgba(112,100,88,0.9)] mt-0 mb-0 text-[16px] font-light leading-[30px]">
                  Whether Figma, Sketch, Adobe XD or another platform our team members are able to work with multiple tools and platforms to work with your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="section13 pt-[240px]">
        <div className="max-w-[1440px] bg-[#292f36] mt-[-400px] mx-auto pt-[96px] pb-[96px]">
          <div className="w-[90%] mx-auto flex">
            <div className="w-[80%]">
              <div>
                <h1 className="text-white mt-0 text-[37px] font-normal leading-[45.7px] mb-[10px] my-[0.67em]">
                  The #1 Architectural-Engineering-As-A-Service Subscription
                </h1>
                <p className="text-white mt-0 mb-0 text-[16px] font-light leading-[30px]">
                  Leveraging the best design talent is no longer a distant dreamLeveraging the best design talent is no longer a distant dreamLeveraging the best design talent is no longer a distant dream
                </p>
              </div>
            </div>
            <div className="w-[20%] flex justify-center items-center">
              <Link href="/contact" className="text-center text-white bg-[#a06056] px-[32px] py-[16px] font-lexend text-[16px] font-semibold leading-[18px] inline-block border-0 no-underline cursor-pointer rounded-none">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>


    </>

  );
}
